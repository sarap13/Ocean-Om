"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_mail import Mail, Message
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
import secrets
import string

from api.models import db, User, Subscription, Testimony, Session, Instructor, Types_of_session, Jivamukti_yoga, Vinyasa_yoga, Rocket_yoga, Ashtanga_yoga, Hatha_yoga, Meditation, Harmonium #importamos los modelos que usaremos
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from flask_jwt_extended import JWTManager
import stripe



# from models import Person

ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(
    os.path.realpath(__file__)), '../public/')
app = Flask(__name__)

app.config['MAIL_SERVER']='live.smtp.mailtrap.io'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'api'
app.config['MAIL_PASSWORD'] = '0a00828ba126c1137b78ea7dded207d5'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
mail = Mail(app)


app.url_map.strict_slashes = False
app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
jwt = JWTManager(app)

# database condiguration
db_url = os.getenv("DATABASE_URL") #Aqui se esta usando la variable de entorno
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace(
        "postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

#cors config
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# pasamos la key de stripe 
stripe.api_key = 'sk_test_51OpE0kIidK9VIejHQioxhK3j2iEHNMYKDbpW58el6pZkfkJSsE2KrDRnvbPUW6FQIhkWxZPqMWOeFAfghDWb8Kix00jNmnBWlz'

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file

@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # avoid cache memory
    return response


#agregamos el mail de Flask para recuperar contraseña y contact us

def generate_random_password(length=12):
    characters = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(secrets.choice(characters) for _ in range(length))
    return password

# Ruta para restablecer la contraseña
@app.route("/reset-password", methods=["PUT"])
def reset_password():
    data = request.json
    user = db.session.query(User).filter(User.email == data.get("email")).first()

    if not user:
        return jsonify({"success": False, "message": "User not found"}), 404
    

    # Generar una nueva contraseña
    new_password = generate_random_password()

    # Actualizar la contraseña en la base de datos
    user.password = new_password
    db.session.commit()

    # Enviar la nueva contraseña por correo electrónico
    msg = Message(subject='Password Reset', sender='jmailtrap@demomailtrap.com', recipients=[user.email])
    msg.body = f'Your new password is: {new_password}'
    mail.send(msg)

    return jsonify({"success": "true", "message": "Password reset successfully"}), 200



# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)