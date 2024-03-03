import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Testimonials } from "../component/testimonial";
import { useNavigate } from "react-router-dom";

export const Testimonials = () => {
	const { store, actions } = useContext(Context)
	const navigate = useNavigate();
	console.log();
	return (
		<div className="container-fluid">
			<Testimonials />
		</div>
	);
}