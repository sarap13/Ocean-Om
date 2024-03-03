//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// 1. importamos lo necesario para usar stripe (plataforma de pago)
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"; //engloba a otros componentes para que tengan acceso a stripe

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";



//render your react application
// 3. Metemos a Layout entre una etiqueta elements y le enviamos la clave
ReactDOM.render(<Layout />, document.querySelector("#app"));
