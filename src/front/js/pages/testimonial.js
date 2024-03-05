import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Testimony } from "../component/testimonialsCARD";
import { TestimonialForm } from "../component/testimonialFORM";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export const Testimonials = () => {
	const { store, actions } = useContext(Context)
	


	useEffect(() => {
        // Llama a getAllTestimonials solo si store.testimonials es un array vacío
            actions.getAllTestimonials();
        
    }, [store.testimonials, actions]);
	
	return (
	
		<div className="container-fluid d-block mt-2 pt-5 text-center">
		<div className="d-block justify-content-center mt-5 pt-5">   
			<h1 className="poiret-one-regular">Testimonials</h1>
		</div> 
	
		<div className="container-fluid mt-2 justify-content-center">
			<div className="row">
				{store.testimonials && store.testimonials.map(item => (
						<div className="col-lg-2 col-md-6 col-sm-12 mb-4 mt-2 me-3" key={item.id}>
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
				
			
			<div className="col-lg-12 col-md-12 col-sm-12 mb-4 mt-2">
				<Link to="/sessions">
				<button className="btn btn-outline-secondary">Back to home</button>
				</Link>
			</div>
		</div>
			
	
	</div>

		
	
	);
}




