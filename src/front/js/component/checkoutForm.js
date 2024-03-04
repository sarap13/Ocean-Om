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



    // const bringPaymentFromLocalStorage => () {
    //     localStorage.getItem("payment")
    // }
    // Create a Checkout Session as soon as the page loads
    // fetch("https://organic-acorn-5g4grq55vjjf4q6j-3001.app.github.dev/api/signup/freetrial", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    // })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data)
    //         setClientSecret(data.clientSecret);
    //         // prueba 
    //         // if (data.return_url) {
    //         //     navigate(data.redirectUrl);
    //         // }
    //     })

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
