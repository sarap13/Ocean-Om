"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Subscription, Testimony, Contact, Session, Instructor, Types_of_session, Vinyasa_yoga, Rocket_yoga, Ashtanga_yoga, Hatha_yoga, Meditation, Harmonium, Jivamukti_yoga
from flask_cors import CORS
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, unset_jwt_cookies
from datetime import datetime, timedelta
from stripe.error import InvalidRequestError
# instalar pipenv stripe
import stripe
import json

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

# pasamos la key de stripe 
stripe.api_key = 'pk_test_51OpE0kIidK9VIejHKyNrBNE8euj3lbZqmT4C0YODA2Pfsp4sSnKKqoQ193u2Eszc1A8GZoLlTksoHPA2TgHMpexD00uhFYcgzc'

# 
# Aquí haremos la rutas de backend
# IMPORTANTE siempre poner api.route en los endpoints 
# 

#endpoint para iniciar sesion con usuario existente
@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user_query = User.query.filter_by(email=email).first()

    # Si el usuario no esta suscrito aunque esté registrado, la columna de is_subscription_active estara false
    if user_query:
        if not user_query.is_subscription_active:
            return jsonify({"msg": "User not subscribed. Subscribe again to access content"}), 403
        if password != user_query.password:
            return jsonify({"msg": "Bad email or password"}), 401  
        access_token = create_access_token(identity=email)

        return jsonify({"access_token":access_token,
                        "user": user_query.serialize()   })
    if not user_query:
        return jsonify({"msg": "Email not found"}), 401
    

# verificar el tiempo que ha pasado para cobrar a la persona


#api para traer un usuario en concreto
@api.route('/user', methods=['GET'])
# Si devuelve ok aparecerá en la consola de vscode el numero de id.
@jwt_required()
def get_one_user():
    current_user = get_jwt_identity()
    info_profile = User.query.filter_by(email=current_user).first()
    # Te lo devuelve en crudo.
    
    if info_profile is None:
        return jsonify({
            "msg": "User not found"
        }), 404
    
    response_body = {
        "msg": "ok",
        "user": info_profile.serialize() #Hacemos el serialize para mostrar la informacion tratada.
    }
    return jsonify(response_body), 200


# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.

#endpoint para guardar el token del usuario
@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    info_profile = User.query.filter_by(email=current_user).first()
    return jsonify({"user": info_profile.serialize()}), 200


#endpoint para coger los mensajes de la gente que quiere contactarnos
@api.route("/contactus", methods=["POST"])
def contact():
    print("HOLA")
    request_body = request.json
    data = request.json
    
    email = data.get('email')
    name = data.get('name')
    message = data.get('message')

     # Example validation
    if not email or not name or not message:
        return jsonify({'Error': 'All the fields are required'}), 400    # Example database interaction (using SQLAlchemy)
 
    new_message = Contact(
        message=message,
        email=email,
        name=name
        )

    print(new_message)
    # Le decimos que lo agregue y que lo comitee 
    db.session.add(new_message)
    db.session.commit()

    # generamos el token de este usuario
    access_token = create_access_token(identity=new_message.email)

    response_body = {
        "msg": "the message has been sent",
        "access_token": access_token
        }
    
    return jsonify(response_body), 200


#endpoint para que aparezcan las clases
@api.route('/sessions', methods=['GET'])
@jwt_required()
def get_sessions():    
    session_query = Session.query.all()
    session_query = list(map(lambda item: item.serialize(), session_query))
    print(session_query)    
    if session_query == []:
        return jsonify({
             "Msg": "No hay sesiones disponibles"
             }), 404
        
    response_body = {
        "msg": "ok",
        "session": session_query    }    
        
    return jsonify(response_body), 200
    # Create a route to authenticate your users and return JWTs. The
    # create_access_token() function is used to actually generate the JWT.

#endpoint para que aparezcan las clases de yoga por tipo

@api.route('/yogatype', methods=['GET'])
def get_yogatype():
    yogatype_1_query = Jivamukti_yoga.query.all()
    yogatype_2_query = Vinyasa_yoga.query.all()
    yogatype_3_query = Rocket_yoga.query.all()
    yogatype_4_query = Ashtanga_yoga.query.all()
    yogatype_5_query = Hatha_yoga.query.all()
    yogatype_6_query = Meditation.query.all()
    yogatype_7_query = Harmonium.query.all()
    yogatype_1_query = list(map(lambda item: item.serialize(),  yogatype_1_query))
    yogatype_2_query = list(map(lambda item: item.serialize(),  yogatype_2_query))
    yogatype_3_query = list(map(lambda item: item.serialize(),  yogatype_3_query))
    yogatype_4_query = list(map(lambda item: item.serialize(),  yogatype_4_query))
    yogatype_5_query = list(map(lambda item: item.serialize(),  yogatype_5_query))
    yogatype_6_query = list(map(lambda item: item.serialize(),  yogatype_6_query))
    yogatype_7_query = list(map(lambda item: item.serialize(),  yogatype_7_query))
    # print(jivamukti_query)
    if yogatype_1_query == [] or None:
        return jsonify({
             "Msg": "No hay sesiones disponibles"
             }), 404
    if yogatype_2_query == [] or None:
        return jsonify({
             "Msg": "No hay sesiones disponibles"
             }), 404
    if yogatype_3_query == [] or None:
        return jsonify({
             "Msg": "No hay sesiones disponibles"
             }), 404
    if yogatype_4_query == [] or None:
        return jsonify({
             "Msg": "No hay sesiones disponibles"
             }), 404
    if yogatype_5_query == [] or None:
        return jsonify({
             "Msg": "No hay sesiones disponibles"
             }), 404
    if yogatype_6_query == [] or None:
        return jsonify({
             "Msg": "No hay sesiones disponibles"
             }), 404
    if yogatype_7_query == [] or None:
        return jsonify({
             "Msg": "No hay sesiones disponibles"
             }), 404
    response_body = {
        "msg": "ok",
        "jivamukti_sessions": yogatype_1_query,
        "vinyasa_sessions": yogatype_2_query,
        "rocket_sessions": yogatype_3_query,
        "ashtanga_sessions": yogatype_4_query,
        "hatha_sessions": yogatype_5_query,
        "meditation_sessions": yogatype_6_query,
        "harmonium_sessions": yogatype_7_query
    }
    return jsonify(response_body), 200


#Endpoint para que aparezca un typo de yoga con su id yoga especifico
@api.route('/<string:yogatype>/<int:yogatype_id>', methods=['GET'])
# Si devuelve ok aparecerá en la consola de vscode el numero de id.
def get_one_yoga_session(yogatype, yogatype_id):
    if (yogatype == 'jivamuktiyoga'):
        jivamukti_query = Jivamukti_yoga.query.filter_by(id = yogatype_id).first() #El filter sera con el id, no se podrá repetir
        # Te lo devuelve en crudo.
    
        if jivamukti_query is None:
            return jsonify({
                "msg": "Jivamukti session not found"
            }), 404
        
        response_body = {
            "msg": "ok",
            "jivamukti_session": jivamukti_query.serialize() #Hacemos el serialize para mostrar la informacion tratada.
        }
        return jsonify(response_body), 200
    
    elif (yogatype == 'vinyasayoga'):
        vinyasa_query = Vinyasa_yoga.query.filter_by(id = yogatype_id).first() #El filter sera con el id, no se podrá repetir
        if vinyasa_query is None:
            return jsonify({
                "msg": "vinyasa session not found"
            }), 404
        
        response_body = {
            "msg": "ok",
            "vinyasa_session": vinyasa_query.serialize() #Hacemos el serialize para mostrar la informacion tratada.
        }
        return jsonify(response_body), 200
    
    elif (yogatype == 'rocketyoga'):
        rocket_query = Rocket_yoga.query.filter_by(id = yogatype_id).first() #El filter sera con el id, no se podrá repetir
        # Te lo devuelve en crudo.
        if rocket_query is None:
            return jsonify({
                "msg": "rocket session not found"
            }), 404
        
        response_body = {
            "msg": "ok",
            "rocket_session": rocket_query.serialize() #Hacemos el serialize para mostrar la informacion tratada.
        }
        return jsonify(response_body), 200 

    elif (yogatype == 'ashtangayoga'):
        ashtanga_query = Ashtanga_yoga.query.filter_by(id = yogatype_id).first() #El filter sera con el id, no se podrá repetir
        # Te lo devuelve en crudo.
        if ashtanga_query is None:
            return jsonify({
                "msg": "ashtanga session not found"
            }), 404
        
        response_body = {
            "msg": "ok",
            "ashtanga_session": ashtanga_query.serialize() #Hacemos el serialize para mostrar la informacion tratada.
        }
        return jsonify(response_body), 200 

    elif (yogatype == 'hathagayoga'):
        hatha_query = Hatha_yoga.query.filter_by(id = yogatype_id).first() #El filter sera con el id, no se podrá repetir
        # Te lo devuelve en crudo.
        if hatha_query is None:
            return jsonify({
                "msg": "hatha session not found"
            }), 404
        
        response_body = {
            "msg": "ok",
            "hatha_session": hatha_query.serialize() #Hacemos el serialize para mostrar la informacion tratada.
        }
        return jsonify(response_body), 200
    
    elif (yogatype == 'meditation'):
        meditation_query = Meditation.query.filter_by(id = yogatype_id).first() #El filter sera con el id, no se podrá repetir
        # Te lo devuelve en crudo.
        if meditation_query is None:
            return jsonify({
                "msg": "meditation session not found"
            }), 404
        
        response_body = {
            "msg": "ok",
            "meditation_session": meditation_query.serialize() #Hacemos el serialize para mostrar la informacion tratada.
        }
        return jsonify(response_body), 200
    
    elif (yogatype == 'harmonium'):
        harmonium_query = Harmonium.query.filter_by(id = yogatype_id).first() #El filter sera con el id, no se podrá repetir
        # Te lo devuelve en crudo.
        if harmonium_query is None:
            return jsonify({
                "msg": "harmonium session not found"
            }), 404
        
        response_body = {
            "msg": "ok",
            "harmonium_session": harmonium_query.serialize() #Hacemos el serialize para mostrar la informacion tratada.
        }
        return jsonify(response_body), 200 

#endpoint the teachers
@api.route('/theteachers', methods=['GET'])
def get_theteachers():
    
    theteachers_query = Instructor.query.all()
    theteachers_query = list(map(lambda item: item.serialize(),  theteachers_query))
    print(theteachers_query)
    if theteachers_query == [] or None:
        return jsonify({
             "Msg": "There aren't teachers available."
             }), 404
    
    response_body = {
        "msg": "ok",
        "theteachers": theteachers_query
    }
    return jsonify(response_body), 200


#endpoint para registrarse
@api.route("/signup", methods=["POST"])
def signup():
 # El request_body o cuerpo de la solicitud ya está decodificado en formato JSON y se encuentra en la variable request.json
    request_body = request.json
    
    try:
        session = stripe.checkout.Session.create(
            mode="subscription",
            ui_mode = 'embedded', #para que no se rediriga sino navegue entre nuestra app
            line_items=[
                {
                    # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    # ya incluido el id de la subscripcion mensual de 16 euros hecha en el dashboard de Sprite
                    'price': 'price_1OpFEfIidK9VIejHfobZkWvI', #(PRECIO DE LA SUBSCRIPCION NORMAL)
                    'quantity': 1,
                },
            ],
            return_url="https://organic-acorn-5g4grq55vjjf4q6j-3000.app.github.dev" + '/return?session_id={CHECKOUT_SESSION_ID}',
        )
    except Exception as e:
        return jsonify(error=str(e)), 500
    
    data = request.json
    name = data.get('name')
    password = data.get('password')
    last_name = data.get('last_name')
    email = data.get('email')
    date_of_birth = data.get('date_of_birth')
    subscription_start_date = datetime.now().date() #para que aparezca la fecha de registro en la fecha actual de rellenar el formulario
    subscription = Subscription.query.filter_by(plan='Monthly').first() #seleccionamos la opcion del plan Free Trial
    last_payment_date = ''
    next_payment_date = ''
    is_subscription_active = False
    has_used_freetrial = False
    filled_form = True

    # Example validation
    if not email or not password or not name or not last_name or not date_of_birth:
        return jsonify({'Error': 'All the fields are required'}), 400    # Example database interaction (using SQLAlchemy)
    
    next_payment_date = subscription_start_date + timedelta(days=30) #que el proximo pago sea 3 dias después de registrarse
    
    new_user = User(
        name=name, 
        last_name=last_name, 
        password=password, 
        email=email, 
        date_of_birth=date_of_birth, 
        subscription_start_date=subscription_start_date,
        subscription=subscription,
        next_payment_date=next_payment_date,
        last_payment_date=last_payment_date,
        is_subscription_active=is_subscription_active,
        has_used_freetrial=has_used_freetrial,
        filled_form=filled_form
        )
    
    # print(new_user)
    # Le decimos que lo agregue y que lo comitee 
    db.session.add(new_user)
    db.session.commit()

    response_body = {
        "msg": "the user has been created with the Monthly plan",
        "session_id" : session.id,
        "clientSecret" : session.client_secret,
        "user" : new_user.serialize()
        }
    
    return jsonify(response_body), 200




#endpoint para registrarse
@api.route("/signup/freetrial", methods=["POST"])
def signup_free_trial():
    # El request_body o cuerpo de la solicitud ya está decodificado en formato JSON y se encuentra en la variable request.json
    request_body = request.json
    
    try:
        session = stripe.checkout.Session.create(
            mode="subscription",
            ui_mode = 'embedded', #para que no se rediriga sino navegue entre nuestra app
            line_items=[
                {
                    # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    # ya incluido el id de la subscripcion mensual de 16 euros hecha en el dashboard de Sprite
                    # 'price': 'price_1OpFEfIidK9VIejHfobZkWvI', (PRECIO DE LA SUBSCRIPCION NORMAL)
                    'price': 'price_1Or5lZIidK9VIejHV3VkM9AE', #precio de la subscripcion FREE TRIAL, no me deja poner version prueba 
                    'quantity': 1,
                },
            ],
            return_url="https://organic-acorn-5g4grq55vjjf4q6j-3000.app.github.dev" + '/return?session_id={CHECKOUT_SESSION_ID}',
        )
    except Exception as e:
        return jsonify(error=str(e)), 500
    
    data = request.json
    name = data.get('name')
    password = data.get('password')
    last_name = data.get('last_name')
    email = data.get('email')
    date_of_birth = data.get('date_of_birth')
    subscription_start_date = datetime.now().date() #para que aparezca la fecha de registro en la fecha actual de rellenar el formulario
    subscription = Subscription.query.filter_by(plan='Free Trial').first() #seleccionamos la opcion del plan Free Trial
    last_payment_date = ''
    next_payment_date = ''
    is_subscription_active = False
    has_used_freetrial = False
    filled_form = True

    # Example validation
    if not email or not password or not name or not last_name or not date_of_birth:
        return jsonify({'Error': 'All the fields are required'}), 400    # Example database interaction (using SQLAlchemy)
    
    next_payment_date = subscription_start_date + timedelta(days=3) #que el proximo pago sea 3 dias después de registrarse
    
    new_user = User(
        name=name, 
        last_name=last_name, 
        password=password, 
        email=email, 
        date_of_birth=date_of_birth, 
        subscription_start_date=subscription_start_date,
        subscription=subscription,
        next_payment_date=next_payment_date,
        last_payment_date=last_payment_date,
        is_subscription_active=is_subscription_active,
        has_used_freetrial=has_used_freetrial,
        filled_form=filled_form
        )
    
    # Le decimos que lo agregue y que lo comitee 
    db.session.add(new_user)
    db.session.commit()

    # new_user.update_subscription_dates()

    response_body = {
        "msg": "the user has been created with the Free Trial plan",
        "session_id" : session.id,
        "clientSecret" : session.client_secret,
        "user" : new_user.serialize()
        }
    
    return jsonify(response_body), 200


# para comprobar el estado de la sessioncheckout
@api.route('/session-status', methods=['GET'])
def session_status():
    session_id = request.args.get('session_id')
    if not session_id:
        return jsonify(error='Session ID is required'), 400
    try:
        session = stripe.checkout.Session.retrieve(session_id)
    except stripe.error.InvalidRequestError as e:
        return jsonify(error=str(e)), 400
    except stripe.error.StripeError as e:
        return jsonify(error=str(e)), 500
    
    if not session:
        return jsonify(error='Session not found'), 404
    
    customer_email = session.customer_details.get('email', 'N/A')

    # Como queremos que el usuario no pueda acceder si no ha realizado el pago, si el estado es completo, filtramos el id por el del metodo de pago, y le ponemos la columna subscription active y ha usado el free trial true para que pueda acceder, pero si en el futuro intenta registrarse de nuevo con el free trial no pueda porque ya se ha registrado con ese plan.
    if session.status == 'complete':
        user = User.query.filter_by(email=customer_email).first()
        if user:
            user.is_subscription_active = True

            if user.subscription == 'Monthly':
                user.last_payment_date = user.subscription_start_date

            if user.subscription == 'Free Trial':
                # user.last_payment_date = u
                user.has_used_freetrial = True
            db.session.commit()
            return jsonify(status=session.status, customer_email=session.customer_details.email)
        else:
            return jsonify(error='User not found'), 404

    return jsonify(status=session.status, customer_email=customer_email, message="User subscription not activated")



#endpoint para desuscribirse
@api.route("/unsubscribe", methods=["POST"])
@jwt_required()
def unsubscribe():
    current_user_email = get_jwt_identity()
    user = User.query.filter_by(email=current_user_email).first()

    if user:
        if user.subscription_end_date is None: #si no hay fecha de subscripción, añade la actual
            user.subscription_end_date = datetime.today().date()
            user.is_subscription_active = False
            db.session.commit()
            return jsonify({
                "msg": "User unsubscribed succesfully"
            }), 200
        else:
            return jsonify({
                "msg": "User alredy unsubscribed"
            }), 200
    
    else:
        return jsonify({
            "msg": "User not found"
        }), 404


@api.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    unset_jwt_cookies()
    # para quitar las cookies y el token
    current_user_email = get_jwt_identity()
    user = User.query.filter_by(email=current_user_email).first()

    return jsonify({"msg": "Logout exitoso"}), 200

