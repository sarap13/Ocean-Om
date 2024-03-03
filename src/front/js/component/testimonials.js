import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Testimonials = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        //initialize state here
    });
    const { store, actions } = useContext(Context)
    async function handleTestimonials(e) {
        e.preventDefault()
        if (logged) {
            navigate("/sessions")
        } else {
            toast.error("Invalid ");
        }
    }
    return (
        <div className="container mt-5 m-auto opacity-50 h-100 row justify-content-md-center">
            <div className="text-center">
                <h1>Testimonials</h1>
            </div>
            <div className="card shadow p-3 mb-5 bg-body-tertiary roundedcol col-lg-3 m-3" >
                <p> "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            </div>
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded col col-lg-3  m-3" >
                <p> "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            </div>
            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded col col col-lg-3 m-3" >
                <p> "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            </div>
            <div>
                <div className="mt-3 text-center">
                    <h1>We would love to be of benefit for you</h1>
                    <p>If yu like, you can rate us and give us your feedback</p>
                </div>
                <div className="d-flex  mt-5 row text-center justify-content-center">
                    <div className="mb-3 col col-lg-4">
                        <label for="exampleFormControlTextarea1" className="form-label"></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Testimonials" rows="3"></textarea>
                    </div>
                    <div className="mb-3 col col-lg-3 justify-content-center">
                        <label for="exampleFormControlInput1" className="form-label"></label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        <button type="submit" className="btn btn-outline-secondary w-50 mt-5">send</button>
                    </div>
                </div>
            </div>
        </div>
    )

}