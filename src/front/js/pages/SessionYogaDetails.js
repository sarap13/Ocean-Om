import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { SessionYogaDetailsCard } from "../component/SessionYogaDetailsCard";

export const SessionYogaDetails = () => {
	const { store, actions } = useContext(Context);

	// Creamos un espacio para guardar los params de la ruta creada.
	const params = useParams();

	useEffect(() => {
		actions.getOneYogatypeSession(params.yogatype, params.theid)
		// console.log("Store in JivamutkiYogaDetailsCard:", store.singleSessionInfo.name);

	}, [])
	return (
		<div className="backgroundWaves jumbotron align-items-center container-fluid h-100 pb-5 pt-5 mt-md-2 mt-ms-5">
			<div className=" h-100 w-100">
				<SessionYogaDetailsCard
					id={store.singleYogaSessionInfo.id}
					name={store.singleYogaSessionInfo.name}
					subtitle={store.singleYogaSessionInfo.subtitle}
					description={store.singleYogaSessionInfo.description}
					instructor={store.singleYogaSessionInfo.instructor}
					duration={store.singleYogaSessionInfo.duration}
					asana_focus={store.singleYogaSessionInfo.asana_focus}
					level={store.singleYogaSessionInfo.level}
					url_imagen={store.singleYogaSessionInfo.url_imagen}
					link={store.singleYogaSessionInfo.link}
				/>
			</div>
		</div>
	);
};



SessionYogaDetails.propTypes = {
	match: PropTypes.object,

};