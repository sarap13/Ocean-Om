import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { PaymentElement } from '@stripe/react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
} from '@stripe/react-stripe-js';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import "../../styles/paymentaccepted.css";


// componente para devolver cuando el pago se esta procesando 

// La clave publicable api
const stripePromise = loadStripe("pk_test_51OpE0kIidK9VIejHKyNrBNE8euj3lbZqmT4C0YODA2Pfsp4sSnKKqoQ193u2Eszc1A8GZoLlTksoHPA2TgHMpexD00uhFYcgzc")


export function Return() {
    // se crea un usestate del estado y del cliente donde irá la informacion del estado del pago y el cliente que paga
    const [status, setStatus] = useState(null);
    const [customerEmail, setCustomerEmail] = useState('');

    // codigo que nos indica STRIPE que tenemos que poner
    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const sessionId = urlParams.get('session_id');
        // Hacemos un fetch del endpoint session-status para que nos pase la info del proceso de pago y el id
        // El fetch nos da como respuesta el email y el estado del pago
        fetch(`https://organic-acorn-5g4grq55vjjf4q6j-3001.app.github.dev/api/session-status?session_id=${sessionId}`)
            .then((res) => res.json())
            .then((data) => {
                setStatus(data.status);
                setCustomerEmail(data.customer_email);
            });
    }, []);

    if (status === "open") {
        console.log("Redirecting to /paymentdetails");
        return (
            <Navigate to="/paymentdetails" />
        )
    }

    // si el pago esta completo devuelve este componente
    if (status === "complete") {
        return (
            <div id="success" className="container-fluid backgroundImage mt-3 pt-3">
                <div className='d-flex flex-column justify-content-center align-items-center text-secondary mt-5'>
                    <div className="d-block text-center col-md-6 col-sm-12 col-md-8 col-lg-6 pt-5 mt-5">
                        <h6 className="poiret-one-regular mt-5">Your payment has been processed!</h6>
                        <h6 className="poiret-one-regular">Your subscription will be charged monthly</h6>
                        <span className="poiret-one-regular fs-1 ">Welcome to Ocean Om</span><br></br>
                        <span className="poiret-one-regular fs-1 ">{customerEmail}</span><br></br>
                        <span className="poiret-one-regular">You can now enjoy all our content</span>
                    </div>

                    <div className="mt-5 mb-5">
                        <Link to="/login">
                            <button type="button" className="btn btn-outline-secondary poiret-one-regular fs-5">Click here to login</button>
                        </Link>
                    </div>

                    <div className="mt-4 text-center">
                        <div>
                            <p className="mb-2 poiret-one-regular text-light">Follow us on</p>
                        </div>
                        <div className='mb-5 text-light'>
                            <i className="fa-brands fa-xl fa-twitter m-1" ></i>
                            <i className="fa-brands fa-xl fa-instagram m-1"></i>
                            <i className="fa-brands fa-xl fa-facebook m-1 "></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return null;
}