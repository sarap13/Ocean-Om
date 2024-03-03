import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { withRouter, useParams } from "react-router-dom";
import "../../styles/login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const UserProfileCard = props => {

    const [state, setState] = useState({
        //initialize state here
    });

    // activamos el useNavigate
    const navigate = useNavigate();
    const { store, actions } = useContext(Context)
    const [styleHoverUnsubscribeButton, setStyleHoverUnsubscribeButton] = useState("text-secondary");


    const handleClickUnsubscribe = () => {
        const message = "¿Estás seguro de que quieres continuar?";
        // Mostrar alert con botones "Aceptar" y "Cancelar"
        const userChoice = window.confirm(message);
        console.log(userChoice)
        if (userChoice) {
            actions.unsubscribe();
            navigate("/")
        }
    }

    return (
        <div className="container-fluid mt-5 card d-flex flex-column justify-content-center h-100 align-items-center opacity-50 p-5">

            <div className="card-body text-center row">
                <img src="https://149355309.v2.pressablecdn.com/wp-content/uploads/2015/03/216620548197708192.jpg" className="card-img-top w-25 rounded mx-auto d-block rounded-circle" alt="..." />

                <h5 className="card-title mt-4">{props.user.name} {props.user.last_name}</h5>
                <h6 className="card-text">{props.user.email}</h6>
                <h6 className="fs-6 fst-italic">Member from {props.user.subscription_start_date}</h6>


            </div>
            <p className="col-md-8 text-center mb-0">¡Namaste! Bienvenido a tu espacio de bienestar.</p>
            <p className="col-md-6 text-center lh-sm fst-italic">¡Gracias por disfrutar en un viaje de yoga, meditación y armonía con nosotros.</p>


            <div className="mt-5">
                <div>
                    <p className="mb-2">Follow us on</p>
                </div>
                <div>
                    <i className="fa-brands fa-xl fa-twitter m-1 " style={{ color: "#9b9d85" }}></i>
                    <i className="fa-brands fa-xl fa-instagram m-1" style={{ color: "#9b9d85" }}></i>
                    <i className="fa-brands fa-xl fa-facebook m-1" style={{ color: "#9b9d85" }}></i>
                </div>
            </div>
            <div id="liveAlertPlaceholder"></div>
            <button type="button" id="liveAlertBtn" className={`${styleHoverUnsubscribeButton} mt-5 btn align-self-md-start align-self-sm-center`} onMouseEnter={() => setStyleHoverUnsubscribeButton("text-primary")}
                onMouseLeave={() => setStyleHoverUnsubscribeButton("text-secondary")} onClick={handleClickUnsubscribe}>Unsubscribe</button>

            {/* <ToastContainer /> */}
        </div>
    );
};
UserProfileCard.propTypes = {
    match: PropTypes.object,
    id: PropTypes.number,
    name: PropTypes.string,
    last_name: PropTypes.string,
    date_of_birth: PropTypes.string,
    email: PropTypes.string,
    subscription_start_date: PropTypes.string,

};