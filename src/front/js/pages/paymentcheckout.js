// import React, { useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types";
// import { Link, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js"; //engloba a otros componentes para que tengan acceso a stripe
// import { CheckoutForm } from "../component/checkoutForm";

// const stripePromise = loadStripe("pk_test_51OpE0kIidK9VIejHKyNrBNE8euj3lbZqmT4C0YODA2Pfsp4sSnKKqoQ193u2Eszc1A8GZoLlTksoHPA2TgHMpexD00uhFYcgzc")

//     // Nos da la conexion con Stripe 
//     const stripe = useStripe();

//     // función que puede acceder a los elementos de Stripe (Como cardelement, etc)
//     const elements = useElements();
	
// export const PaymentCheckout = props => {
// 	const { store, actions } = useContext(Context);
// 	const params = useParams();

// 	return (
// 		<div className="container">
// 			<Elements stripe={stripePromise}>
// 			<CheckoutForm />
// 			</Elements>
// 		</div>
// 	);
// };

// Single.propTypes = {
// 	match: PropTypes.object
// };
