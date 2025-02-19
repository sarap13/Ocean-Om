import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import "../../styles/classes.css";



export const TeachersCard = (props) => {
	const [state, setState] = useState({
		//initialize state here
	});

	const { store, actions } = useContext(Context);


	return (
		<div className="card mx-auto pl-0 border border-0 opacity-75" style={{ width: "14rem", height: "28rem", backgroundColor: "transparent" }}>
			<img src={props.url_imagen} id="styleImageCard" className="card-img-top" alt="..." />
			<div className="card-body mt-1">
				<h5 className="card-title mb-3 poiret-one-regular fw-bold fs-4">{props.name} {props.last_name}</h5>
				<span className="card-title fw-light"><strong>Currently living in:</strong>  {props.residence}</span><br></br>
				<span className="card-title fw-light"><strong>Biography:</strong>  {props.biografy}</span><br></br>
			</div>
		</div>
	);
};



/**
 * Define the data-types for
 * your component's properties
 **/

TeachersCard.propTypes = {
	history: PropTypes.object,
	id: PropTypes.number,
	name: PropTypes.string,
	last_name: PropTypes.string,
	biografy: PropTypes.string,
	residence: PropTypes.string,
	url_imagen: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/

