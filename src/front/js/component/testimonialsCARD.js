import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
// import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/testimonials.css";

export const Testimony = (props) => {



    const [state, setState] = useState({
        //initialize state here
    });
    const { store, actions } = useContext(Context)

    // Convierte la cadena de fecha a un objeto Date
    const testimonialDate = new Date(props.date);

    // Extrae la parte de la fecha (sin la hora)
    const formattedDate = testimonialDate.toLocaleDateString();
    

    return (
        <div className="card shadow p-3 mb-5 bg-body-tertiary roundedcol col-lg-3 m-3" style={{ width: "14rem", height: "15rem" }}>
			
            <div className="card-body mt-1">
                <h3 className="card-title">{props.title}</h3>
                <hr className="border" />

                <span className="card-title">{props.description}</span><br></br>
                <hr className="border" />
                <span className="card-title">{formattedDate}</span>
         
            </div>

        </div>
    );
};



/**
* Define the data-types for
* your component's properties
**/

Testimony.propTypes = {
history: PropTypes.object,
id: PropTypes.number,
title: PropTypes.string,
description: PropTypes.string,
date: PropTypes.string
};

/**
* Define the default values for
* your component's properties
**/




{/* <div className="card shadow p-3 mb-5 bg-body-tertiary roundedcol col-lg-3 m-3" > */}