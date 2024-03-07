import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


import "../../styles/contactUs.css";


export const FormCONTACT = () => {

    const [state, setState] = useState({
        //initialize state here
    });

    // activamos el useNavigate
    // const navigate = useNavigate();

    const { store, actions } = useContext(Context)

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("")

    async function handleContact(e) {
        e.preventDefault()
        console.log(email, name, message);
        let logged = await actions.contactus(email, name, message);
        console.log(logged)
        // if (logged) { //true
        //     navigate("/");
        // } else {
        //     toast.error("Invalid email or password");
        // }

    }

    return (


        <form className="stylebackgrounding container mt-5 mb-3 py-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                    <h1 className="poiret-one-regular text-secondary">Contact Us</h1>
                    <p className="poiret-one-regular">
                        Your well-being is our priority. If you have questions, suggestions, or simply want to share your
                        experience, we are here to listen. Connect with us and let us be part of your journey towards inner
                        peace and harmony.
                    </p>
                    <div className="mb-3">
                        <i className="fa-solid fa-envelope fa-lg me-2 opacity-50"></i>
                        <span className="poiret-one-regular ">info@oceanofom.com</span>
                    </div>
                    <div className="mb-3">
                        <i className="fa-solid fa-phone fa-lg me-2 opacity-50"></i>
                        <span className="poiret-one-regular">÷34 610234567</span>
                    </div>
                    <div className="mt-5 opacity-50 text-md-start">
                        <div>
                            <p className="mb-2">Follow us on</p>
                        </div>
                        <div>
                            <a href="https://twitter.com/oceanom" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                <i className="fab fa-twitter fa-xl m-1" style={{ color: "#9b9d85" }}></i>
                            </a>
                            <a href="https://www.instagram.com/oceanom" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                <i className="fab fa-instagram fa-xl m-1" style={{ color: "#9b9d85" }}></i>
                            </a>
                            <a href="https://www.facebook.com/ocean_om" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                <i className="fab fa-facebook fa-xl m-1" style={{ color: "#9b9d85" }}></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mb-5 d-flex flex-column justify-content-center align-items-center">
                    <div className="mb-3">
                        <label className="form-label poiret-one-regular">Email</label>
                        <input type="email" className="form-control inputEmail" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label poiret-one-regular">Name</label>
                        <input type="text" className="form-control inputEmail" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label poiret-one-regular">How can we help you?</label>
                        <textarea className="form-control inputComment" onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <Link to="/thankyou">
                        <button type="submit" className="btn btn-outline-secondary w-100 mt-3 poiret-one-regular fs-5" onClick={handleContact}>
                            Send
                        </button>
                    </Link>
                </div>

            </div>
        </form>
    );
};