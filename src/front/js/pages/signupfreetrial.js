import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { FormSignupFreeTrial } from "../component/formsignupFree";
import { useNavigate } from "react-router-dom";

export const SignupFreeTrial = (email, password) => {
	const { store, actions } = useContext(Context)
	const navigate = useNavigate();

	console.log(email, password);
	return (
		<div className="mt-5 pt-2 backgroundWaves mx-0 min-vh-100">
			<FormSignupFreeTrial freeTrial = {true}/>
		</div>
	);
};