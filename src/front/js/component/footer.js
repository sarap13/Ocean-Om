import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
	
	let location = useLocation();
	
	return ( 

	<>
	{location.pathname !== "/" && (
		<footer className="footer mx-auto mb-0 d-flex py-3 text-center vh-25 w-100 z-n1 position-absolute" style={{ backgroundColor: "#1D77AB" }}>
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-3 col-md-6">
					<Link to="/aboutus" className="text-decoration-none text-light">
						<span>About Us</span>
					</Link>
				</div>
				<div className="col-lg-3 col-md-6">
					<Link to="/testimonials" className="text-decoration-none text-light">
						<span>Testimonials</span>
					</Link>
				</div>
				<div className="col-lg-3 col-md-6">
					<Link to="/contactus" className="text-decoration-none text-light">
						<span>Contact Us</span>
					</Link>
				</div>
			</div>
			<div className="row pt-2">
				<div className="col-12">
					{/* Se obtiene el año actual de forma dinamica */}
					<p className="mb-0 text-light fw-lighter">&copy; {new Date().getFullYear()} Ocean OM. All rights reserved.</p>
				</div>
			</div>
		</div>
	</footer>
)}
</>
);
};


