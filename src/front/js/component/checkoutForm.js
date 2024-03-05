import React, { useState, useEffect, useContext } from 'react';
import { PaymentElement } from '@stripe/react-stripe-js';
import { Context } from "../store/appContext";
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
    useNavigate
} from "react-router-dom";



// La clave publicable api
const stripePromise = loadStripe("pk_test_51OpE0kIidK9VIejHKyNrBNE8euj3lbZqmT4C0YODA2Pfsp4sSnKKqoQ193u2Eszc1A8GZoLlTksoHPA2TgHMpexD00uhFYcgzc")

const CheckoutForm = () => {
    const { store, actions } = useContext(Context);

    const [clientSecret, setClientSecret] = useState('');
    const navigate = useNavigate();

    // Al cargar la pagina se inicia el fetch 
    useEffect(() => {
        const paymentInfo = JSON.parse(localStorage.getItem("payment"));

        // Verifica si la información es válida
        if (paymentInfo && paymentInfo.clientSecret) {
            setClientSecret(paymentInfo.clientSecret);
        } else {
            navigate("/signup/freetrial");
        }

        // return {
        //     // Código de limpieza (si es necesario)
        // };
    }, []);


    return (
        <div id="checkout" className="mt-5 pt-5">
            {clientSecret && (
                <EmbeddedCheckoutProvider
                    stripe={stripePromise}
                    options={{ clientSecret }}
                >
                    <EmbeddedCheckout />
                </EmbeddedCheckoutProvider>
            )}
        </div>
    )
};

export default CheckoutForm;
