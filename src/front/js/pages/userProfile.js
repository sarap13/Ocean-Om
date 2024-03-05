import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { UserProfileCard } from "../component/userProfileCard";


export const UserProfile = (email, password) => {


	const { store, actions } = useContext(Context)
	const navigate = useNavigate();

	// Creamos un espacio para guardar los params de la ruta creada.
	const params = useParams();

	useEffect(() => {
		actions.getUserProfile()
		// Envias a la función la parte que coge la url dinamica y se lo pasas al flux como parametro.
	}, [])
	
	return (
		<div className="container-fluid pt-4">
			<UserProfileCard 
			user={store.user}
			/>
		</div>
	);
};

UserProfile.propTypes = {
	match: PropTypes.object,

};