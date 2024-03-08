import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { ForgotPassword } from "../component/forgotpassword";
import { useNavigate } from "react-router-dom";

export const ForgotPass = () => {

	const [state, setState] = useState({
   		
	});

	const { store, actions } = useContext(Context)



	return (
		<div className="container-fluid mt-5 pt-5 backgroundWaves min-vh-100">
			<ForgotPassword />
		</div>
	);
};
