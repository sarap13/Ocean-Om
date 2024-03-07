import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/testimonials.css";


export const TestimonialForm = () => {

    const [state, setState] = useState({
        //initialize state here
    });

    // activamos el useNavigate
    const navigate = useNavigate();

    const { store, actions } = useContext(Context)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    async function handleTestimonials(e) {
        e.preventDefault()
        let fechaActual = new Date();
        const fechaActualString = fechaActual.toISOString();
        let logged = await actions.testimonials(title, description, fechaActualString);
        // console.log(logged)
        navigate("/thankyoutestimonial");


    }


    return (


        <form className="col-12 col-lg-12 col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center text-secondary mt-3">
            <div className="d-block col-6 justify-content-center">
                <h1 className="poiret-one-regular">We would love to be of benefit for you</h1>
                <span className="poiret-one-regular">If you like, you can rate us and give us your feedback. It can be anonymous. </span>

                <div className="d-block mt-5 row text-center justify-content-center" >
                    <div className="mb-3">
                        <input type="title" className="form-control" id="exampleFormControlInput1" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3 justify-content-center">
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Testimonial" rows="3" onChange={(e) => setDescription(e.target.value)}></textarea>
                        <button type="submit" className="btn btn-outline-secondary w-50 mt-5" onClick={handleTestimonials}>Send</button>
                    </div>
                </div>

            </div>


        </form>

    );
};


