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
stripe.api_key = 'pk_test_51OpE0kIidK9VIejHKyNrBNE8euj3lbZqmT4C0YODA2Pfsp4sSnKKqoQ193u2Eszc1A8GZoLlTksoHPA2TgHMpexD00uhFYcgzc'


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



#agregamos esta ruta para lo del Flask Mail
#method put
@app.route("/send")
def send():
    user = db.session.query(User).filter(User.email == request.json.get("email")).one()
    
    print("hola")
    msg = Message(subject='Hello from the other side!', sender='jmailtrap@demomailtrap.com', recipients=['jacky.vivian.vargas@gmail.com'])
    msg.body = "Hey Paul, sending you this email from my Flask app, lmk if it works"
    mail.send(msg)
    
    return "Message sent!"



# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
