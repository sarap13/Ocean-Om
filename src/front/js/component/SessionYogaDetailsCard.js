import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { withRouter, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const SessionYogaDetailsCard = props => {
    const [state, setState] = useState({
        //initialize state here
    });

    const { store, actions } = useContext(Context);

    const params = useParams();
    // console.log(params)

    const [styleButton, setStyleButton] = useState("btn-outline-secondary");
    const isLoggedIn = store.loggedUser !== null; //creamos const para saber si el user esta logeado
    const [isHoveredButton, setIsHoveredButton] = useState(false);
    const [isHoveredLink, setIsHoveredLink] = useState(false);

    // boton Dive into the lesson now! que cuando haya hover se ponga el texto blanco
    const handleHoverInButton = () => {
        setIsHoveredButton(true);
        setStyleButton("btn-primary");
    }
    // al quitar el hover vuelva al texto en azul
    const handleHoverOutButton = () => {
        setIsHoveredButton(false);
        setStyleButton("btn-outline-secondary");
    };

    // funcion para cuando le demos click al botón dive to the session nos reenvie a youtube!
    const handleClickButton = () => {
        isLoggedIn ? window.location.href = props.link : toast.error("You need to be subscribed to acces to this content");

    }
    console.log(props.name)

    return (
        <>
            <div className=" d-flex justify-content-center mt-5 pt-md-5 pt-sm-2 ms-md-4 me-md-4 me-sm-2 " >
                <div className="row g-0">
                    <div className="col-md-5 col-sm-12 d-flex flex-column justify-content-center align-items-start py-4 ms-md-5 ms-sm-4 ps-md-3">
                        <div className="col-md-6 col-sm-6 d-flex align-items-center">
                            <h6 className="fs-1 mb-1 poiret-one-regular text-wrap">{props.name}</h6>
                        </div>
                        <div className="col-12 align-items-start mt-2">
                            <h6 className="fw-bold fs-6 fst-italic">{props.subtitle}</h6>
                        </div>
                        <hr className="mb-3 bg-secondary mt-0" />
                        <div className="col-md-12 col-sm-12 d-flex mb-3">
                            <h6 className="lh-base text-wrap">{props.description}</h6>
                        </div>
                        <div className="col-12 d-flex flex-row">
                            <h6 className="">Teacher : </h6>
                            <h6 className="ms-2"> {props.instructor}</h6>
                        </div>
                        <div className="col-12 d-flex flex-row">
                            <h6 className="">Duration : </h6>
                            <h6 className="ms-2">{props.duration}</h6>
                        </div>
                        <div className="col-12 d-flex flex-row">
                            <h6 className="">Asana Focus : </h6>
                            <h6 className="ms-2">{props.asana_focus}</h6>
                        </div>
                        <div className="col-12 d-flex flex-row">
                            <h6 className="">Level : </h6>
                            <h6 className="ms-2">{props.level}</h6>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-md-center justify-content-sm-center align-items-md-end align-items-sm-center ">
                        <img className="col-11 img-fluid w-75 rounded" src={props.url_imagen}></img>
                    </div>
                    <div className="d-flex flex-row gap-5 ms-md-5">
                        <button type="button" onClick={handleClickButton} className={`btn ${styleButton} ${isHoveredButton ? "text-white" : "text-secondary"} gap-3 mt-4 rounded d-flex align-items-center opacity-75`} onMouseEnter={handleHoverInButton} onMouseLeave={handleHoverOutButton}>
                            Dive into the lesson now!
                        </button>
                        <button type="button" className={`btn ${isHoveredLink ? "btn-primary text-white" : "btn-outline-secondary "} gap-3 mt-4 rounded d-flex align-items-center opacity-75 p-2`} onMouseEnter={() => setIsHoveredLink(true)} onMouseLeave={() => setIsHoveredLink(false)}>
                            <Link className={`${isHoveredLink ? "text-white" : "text-secondary"} text-decoration-none`} to="/sessions">
                                Back
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};


SessionYogaDetailsCard.propTypes = {
    match: PropTypes.object,
    id: PropTypes.number,
    name: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    instructor: PropTypes.string,
    level: PropTypes.string,
    asana_focus: PropTypes.string,
    link: PropTypes.string,
    url_imagen: PropTypes.string,
    duration: PropTypes.string,


};
