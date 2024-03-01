import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../../img/logoOCEANOM.png"
import "../../styles/login.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"; //engloba a otros componentes para que tengan acceso a stripe

const stripePromise = loadStripe("pk_test_51OpE0kIidK9VIejHKyNrBNE8euj3lbZqmT4C0YODA2Pfsp4sSnKKqoQ193u2Eszc1A8GZoLlTksoHPA2TgHMpexD00uhFYcgzc")


export const CheckoutForm = () => {

    const [state, setState] = useState({
        //initialize state here
    });

    // activamos el useNavigate
    const navigate = useNavigate();

    const { store, actions } = useContext(Context)

    const [email, setUserEmail] = useState("");
    const [password, setPassword] = useState("")

    // Nos da la conexion con Stripe 
    // const stripe = useStripe();

    // función que puede acceder a los elementos de Stripe (Como cardelement, etc)
    // const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Datos importados para Stripe
    // const [amount, setAmount] = useState(0);
    // const [currency, setCurrency] = useState("");
    // const [clientSecret, setClientSecret] = useState(null);
    // const [error, setError] = useState(null);
    // const [metadata, setMetadata] = useState(null);
    // const [succeeded, setSucceeded] = useState(false);
    // const [processing, setProcessing] = useState(false);

    // useEffect(() => {
    //     // Create PaymentIntent as soon as the page loads
    //     fetch("/create-payment-intent", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => setClientSecret(data.clientSecret));
    // }, []);

    async function handleSubmit(e) {
        e.preventDefault()

        // Esto devolverá dos objetos (O un error o un payment method)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            // de todos los elementos quiero coger el card element y captura la informacion de la tarjeta que el cliente haya puesto
            // hay que enviarlo al back-end. Necesitamos instalar en back end:
            // npm i express stripe cors(nos permite interactuar entre front y back)
            card: elements.getElement(CardElement)
        })
        // hasta aqui me llegaba la informacion del paymethod 

        // Si no existe un error (todo ha ido ok)
        if (!error) {
            // console.log Nos envia un objeto con toda la informacion del pago, es importante el ID, tenemos que enviarselo a tripe y registrarlo como pago
            console.log(paymentMethod)
            // const {id} = paymentMethod;
            const paymentId = paymentMethod.id
            console.log(paymentMethod.id)
            // enviame como param en la funcion el id
            // sendPaymentMethodToBackend(paymentId);
            let response = await fetch(process.env.BACKEND_URL + "/api/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    payment_method: paymentMethod,
                }),
            });
        }
    }
    // payment_method: paymentMethod,

    // // Creamos una función que envie el id del metodo de pago al back-end
    // const sendPaymentMethodToBackend = async (paymentMethodId) => {
    //     try {
    //         let response = await fetch(process.env.BACKEND_URL + "/api/checkout", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ 
    //                 "id": paymentMethodId,
    //                 "amount": 1600 //el precio en centimos 
    //              }),
    //         });

    //         const data = await response.json();
    //         console.log(data);

    //         // Verificar la respuesta del servidor y redirigir según sea necesario
    //         if (response.ok) {
    //             // Puedes redirigir a la página de éxito
    //             navigate("/success");
    //         } else {
    //             // Puedes redirigir a la página de error
    //             navigate("/error");
    //         }

    //     } catch (err) {
    //         console.error(err);
    //     }
    // }

    return (
        /*añadimos esto para poder meter en toast*/
        <form onSubmit={handleSubmit} className="card card-body m-auto bg-info">
            {/* <PaymentElement id="payment-element" options={paymentElementOptions} /> */}
            <img src={logo} className="img-fluid w-25 h-25 rounded mx-auto d-block" alt="logo Ocean Om"></img>
            {/* añadimos el cardElement al form */}
            <h3 className="text-center my-2">16 €  Monthly subscription </h3>
            <div className="container form-group p-5 m-5">
                <div className="row d-flex">
                    <div className="col-md-5 align-items-center">
                        {/* {clientSecret && ( */}
                        <Elements stripe={stripePromise}>
                            <CheckoutForm />
                        </Elements>
                        <CardElement className="form-control" />
                        {/* )} */}
                    </div >
                </div>
            </div>
            <button className="btn btn-danger">Subscribe</button>
        </form>
    );
};
{/* <div src="https://www.sattology.com/wp-content/uploads/2020/06/simbolo-do-om-ornamental_1058-101.jpg"></div>  ((((esta es la foto de omkara que va en la derecha)))*/ }
