import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import logo from "../../img/logoOCEANOM.png";
import { Link } from "react-router-dom";

export const Home = () => {
	const [state, setState] = useState({
		//initialize state here
	});

	const { store, actions } = useContext(Context);

	const [styleStartNow, setStyleStartNow] = useState("btn-light");

	// boton Learn more que cuando haya hover se ponga el texto blanco
	const handleHoverInButton = () => {
		setStyleStartNow("btn-outline-secondary text-light");
	}
	// al quitar el hover vuelva al texto en azul
	const handleHoverOutButton = () => {
		setStyleStartNow("btn-light");
	};


	return (
		<div className="container-fluid d-flex p-0 col-lg-12 col-md-12 col-sm-12">
			<img id="imagenFija" src="https://res.cloudinary.com/dx23woi99/image/upload/v1708541359/IMG_5841_tkuzrc.jpg" className="card-img-top p-0" alt="Imagen Fija" style={{ width: "100%" }} />
			<div className="card-img-overlay">

				{/* dropdown para dispositivos moviles, menu responsive */}
				<div className="d-flex justify-content-end d-sm-flex d-md-none gap-3">
					<div className="dropdown">
						<button className="btn text-light btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Menu
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<Link to="/signup" className="dropdown-item">Signup</Link>
							<Link to="/signup/freetrial" className="dropdown-item">Freetrial</Link>
							<Link to="/contactus" className="dropdown-item">Contact Us</Link>
							<Link to="/testimonials" className="dropdown-item">Testimonials</Link>
							<Link to="/login" className="dropdown-item">Login</Link>
						</div>
					</div>
				</div>
				{/* Botones en línea para pantallas medianas y grandes */}
				<div className="d-none d-sm-none d-md-flex justify-content-end gap-3">
					{/* <Link to="/signup">
						<button type="button" className="btn btn-outline-light btn-lg">Signup</button>
					</Link> */}
					<Link to="/signup/freetrial">
						<button type="button" className="btn btn-outline-light btn-lg">Free Trial</button>
					</Link>
					<Link to="/contactus">
						<button type="button" className="btn btn-outline-light btn-lg p-2 mx-2">Contact Us</button>
					</Link>
					{/* <Link to="/testimonials">
						<button type="button" className="btn btn-outline-light btn-lg p-2 mx-2">Testimonials</button>
					</Link> */}
					<Link to="/login">
						<button type="button" className="btn btn-outline-light btn-lg">Login</button>
					</Link>
				</div>

				{/* </div> */}

				<div className="mt-4 ms-2 col-lg-12 col-md-12 col-sm-12">
					<img src={logo} className="card-img-top p-0" alt="..." style={{ width: "50%" }} />

				</div>

				<div className="d-block ms-4 text-start col-lg-12 col-md-6 col-sm-6">
					<span className="text-light fs-5 text-center mt-3">
						Come and practice in this ocean of online yoga <br></br> classes.
						With teachers from all over the globe!
						<br></br>
				
						Enjoy exclusive content of yoga, meditation, and harmonium practices. <br></br>
						Any style, at any time.
					</span>
					<div className="d-flex align-items-center justify-content-start mt-5">
						<Link to="/sessions">
							<button type="button" className={`btn ${styleStartNow} btn-lg text-secondary`} onMouseEnter={handleHoverInButton} onMouseLeave={handleHoverOutButton}>
								Start Now
							</button>
						</Link>
					</div>
				</div>
			</div>


		// </div >
	);
};
