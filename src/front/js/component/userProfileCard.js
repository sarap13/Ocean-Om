import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/login.css";


export const UserProfileCard = () => {

    const [state, setState] = useState({
        //initialize state here
    });

    // activamos el useNavigate
    const navigate = useNavigate();

    const { store, actions } = useContext(Context)

    const [email, setUserEmail] = useState("");
    const [password, setPassword] = useState("")



    return (
        /*añadimos esto para poder meter en toast*/
        <>
            <div className="container-fluid stylebackgroundimg card d-flex flex-column justify-content-center h-100 align-items-center opacity-50 p-5">

                    <div className="card-body text-center row">
                        <img src="https://149355309.v2.pressablecdn.com/wp-content/uploads/2015/03/216620548197708192.jpg" className="card-img-top w-25 rounded mx-auto d-block" alt="..." />

                        <h5 className="card-title mt-4">Sara Parra</h5>
                        <h6 className="card-text">saraparra13@gmail.com</h6>
                        <h6 className="fs-6 fst-italic">Member from Frebuary 2023</h6>


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
            </div>
        </>
    );
};
{/* <div src="https://www.sattology.com/wp-content/uploads/2020/06/simbolo-do-om-ornamental_1058-101.jpg"></div>  ((((esta es la foto de omkara que va en la derecha)))*/ }
