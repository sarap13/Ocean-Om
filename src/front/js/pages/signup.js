import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { FormSignup } from "../component/formsignup";
import { useNavigate } from "react-router-dom";

export const Signup = (email, password) => {
	const { store, actions } = useContext(Context)
	const navigate = useNavigate();

	console.log(email, password);
	return (
		<div className="mt-3 pt-3 backgroundWaves mx-0 min-vh-100">
			<FormSignup freeTrial = {false} />
		</div>
	);
};