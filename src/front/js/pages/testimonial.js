import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Testimony } from "../component/testimonialsCARD";
import { TestimonialForm } from "../component/testimonialFORM";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "../../styles/testimonials.css";

export const Testimonials = () => {
	const { store, actions } = useContext(Context)



	useEffect(() => {
		// Llama a getAllTestimonials solo si store.testimonials es un array vacío
		actions.getAllTestimonials();

	}, [store.testimonials, actions]);

	return (

		<div className="container-fluid d-block mt-2 pt-5 h-100 text-center backgroundWaves">
			<div className="d-block justify-content-center mt-5 pt-5">
				<h1 className="poiret-one-regular text-secondary">Testimonials</h1>
			</div>

			<div className="container-fluid mt-2">
				<div className="row justify-content-center align-items-center ms-5">
					{store.testimonials && store.testimonials.map(item => (
						<div className="col-lg-2 col-md-4 col-sm-12 mb-4 mt-2 mx-auto gap-1 align-self-center" key={item.id}>
							<Testimony
								id={item.id}
								title={item.title}
								description={item.description}
								date={item.date}
							/>
						</div>
					))}
				</div>
				<TestimonialForm />
			</div>
			<div className="col-lg-12 col-md-12 col-sm-12 mb-4 mt-2 mt-4">
				<Link to="/sessions">
					<button className="btn btn-outline-secondary">Back to home</button>
				</Link>
			</div>
			<div className="d-block mt-2 pb-5">
				<div>
					<p className="mb-2 poiret-one-regular">Follow us on</p>
				</div>
				<div>
					<i className="fa-brands fa-xl fa-twitter m-1 " style={{ color: "#9b9d85" }}></i>
					<i className="fa-brands fa-xl fa-instagram m-1" style={{ color: "#9b9d85" }}></i>
					<i className="fa-brands fa-xl fa-facebook m-1" style={{ color: "#9b9d85" }}></i>
				</div>
			</div>
		</div>

	);
}




