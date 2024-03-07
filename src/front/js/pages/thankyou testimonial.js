import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


import "../../styles/contactUs.css";


export const ThankYouTestimonials = () => {

    const [state, setState] = useState({
        //initialize state here
    });

    return (
        <div className="container-fluid backgroundWaves w-100 h-100 mx-0 d-flex flex-column justify-content-center align-items-center text-secondary mt-5 py-5">
            <div className="d-block text-center col-12 col-sm-12 col-md-8 col-lg-6 pt-5 mt-5">
                <h1 className="poiret-one-regular fs-1 mt-5">Thank you!</h1>
                <span className="poiret-one-regular">We have receibed your testimonial.</span><br></br>
                <span className="poiret-one-regular">Your review is important for us to improve.</span>
            </div>

            <div className="text-center mt-5 mb-5">
                <Link to="/sessions">
                    <button type="button" className="btn btn-outline-secondary poiret-one-regular fs-5 opacity-50">Back to Sessions</button>
                </Link>
            </div>

            <div className="mt-5 text-center">
                <div>
                    <p className="mb-2 poiret-one-regular">Follow us on</p>
                </div>
                <div>
                    <i className="fa-brands fa-xl fa-twitter m-1" style={{ color: "#9b9d85" }}></i>
                    <i className="fa-brands fa-xl fa-instagram m-1" style={{ color: "#9b9d85" }}></i>
                    <i className="fa-brands fa-xl fa-facebook m-1" style={{ color: "#9b9d85" }}></i>
                </div>
            </div>
        </div>

    );
};