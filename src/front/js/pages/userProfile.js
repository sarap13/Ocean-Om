import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Formulario } from "../component/formulario";
import { useNavigate } from "react-router-dom";
import { UserProfileCard } from "../component/userProfileCard";


useEffect(() => {
	actions.getOneYogatypeSession(params.yogatype, params.theid)
	// console.log("Store in JivamutkiYogaDetailsCard:", store.singleSessionInfo.name);
	// console.log(params.yogatype)
	// Envias a la función la parte que coge la url dinamica y se lo pasas al flux como parametro.

}, [])



export const UserProfile = (email, password) => {
	const { store, actions } = useContext(Context)
	const navigate = useNavigate();

	console.log(email, password);
	return (
		<div className="container-fluid">
			<UserProfileCard />
		</div>
	);
};
