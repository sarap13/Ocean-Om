import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { useNavigate } from 'react-router-dom';
import { SessionCard } from "../component/SessionCard.js";
import { MeditationCard } from "../component/MeditationCard.js";
import { HarmoniumCard } from "../component/HarmoniumCard.js";
import imagenClases from "../../img/fotonavacerrada.jpeg"
import imagenThePractices from "../../img/thepracticesSINFONDO.png"


export const Sessions = () => {
	const [state, setState] = useState({

	});


	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const isLoggedIn = store.loggedUser !== null; //creamos const para saber si el user esta logeado

	useEffect(() => {
		actions.getAllSessions();
	}, []);

	// console.log(store.jivamuktiYoga)
	const handleButtonClick = () => {
		navigate('/profile/:theid'); // Reemplaza '123' con el valor adecuado
	};

	return (
		<div className="container-fluid p-0 overflow-auto col-lg-12 col-md-12 col-sm-12">
			<div>
				<img id="imagenClases" src={imagenClases} className="card-img-top mx-auto" alt="Imagen Clases" style={{ width: "100%" }} />
			</div>
			<div className="card-img-overlay d-block justify-content-start align-items-center">
				<div className="mt-5 pt-5 ms-4 text-start col-lg-12 col-md-6 col-sm-6">

					<div className="mt-5 pt-5">
						<h1 className="text-light text-start">
							Practice and all is coming...
						</h1>
						<span className="text-light fs-sm-6 fs-md-4 text-start mt-3 mb-2">
							Find any class and practice as you were in a yoga studio.
						</span>
						{!isLoggedIn ? (
							<div className="d-block align-items-center justify-content-start mt-5">
								<Link to="/signup/freetrial">
									<button type="button" className="btn btn-outline-light btn-lg">
										Try now for free
									</button>
								</Link>
							</div>
						) : (null)}
					</div>
				</div>
			</div>
			{/* Desde the practices hasta abajo */}

			<div className="d-flex justify-content-center">
				<img src={imagenThePractices} className="card-img-top mt-4" style={{ width: "20%" }} />
			</div>
			<div className="container-fluid mt-3">
				<div className="ms-3 d-flex align-items-center">
					<i className="fa-solid fa-star fa-xl" style={{ color: "#74C0FC" }}></i>
					<span className="ms-2 poiret-one-regular fs-5">Jivamukti Yoga</span>
				</div>
				<div>
					<p className="mx-3 fw-light lh-2 mt-1 poiret-one-regular">Jivamukti Yoga classes typically include the physical practice of asanas (postures), pranayama (breath control), chanting of mantras, meditation, and exploration of the ethical and philosophical principles of yoga. The focus is on connecting with the spiritual aspect of yoga and integrating ethical principles into daily life. Activism and environmental awareness are also important aspects of its philosophy.</p>
				</div>
				<div className="container-fluid d-flex flex-row">
					<ul className="d-flex flex-nowrap flex-row overflow-scroll gap-3 px-0 mx-2">
						{store.jivamuktiYoga.map(item => (
							<li className="col-4 px-0 w-auto my-2" key={item.id}>
								<SessionCard
									id={item.id}
									name={item.name}
									instructor={item.instructor}
									asana_focus={item.asana_focus}
									level={item.level}
									url_imagen={item.url_imagen}
									type={item.type}
								/>
							</li>
						))}
					</ul>
				</div>

			</div>

			<div className="container-fluid mt-3">
				<div className="ms-3 d-flex align-items-center">
					<i className="fa-solid fa-star fa-xl" style={{ color: "#74C0FC" }}></i>
					<span className="ms-2 poiret-one-regular fs-5">Vinyasa Yoga</span>
				</div>
				<div>
					<p className="mx-3 fw-light lh-2 mt-1 poiret-one-regular">Vinyasa Yoga is a dynamic style of yoga that emphasizes the connection between movement and breath. Poses flow in a continuous sequence, enhancing strength, flexibility, and breath awareness. This style aims to integrate mind and body through a fluid and meditative practice.</p>
				</div>
				<div className="container-fluid d-flex flex-row">
					<ul className="d-flex flex-nowrap flex-row overflow-scroll gap-3 px-0 mx-2">
						{store.vinyasaYoga.map(item => (
							<li className="col-4 px-0 w-auto my-2" key={item.id}>
								<SessionCard
									id={item.id}
									name={item.name}
									instructor={item.instructor}
									asana_focus={item.asana_focus}
									level={item.level}
									url_imagen={item.url_imagen}
									type={item.type}
								/>
							</li>
						))}
					</ul>
				</div>

			</div>

			<div className="container-fluid mt-3">
				<div className="ms-3 d-flex align-items-center">
					<i className="fa-solid fa-star fa-xl" style={{ color: "#74C0FC" }}></i>
					<span className="ms-2 poiret-one-regular fs-5">Rocket Yoga</span>
				</div>
				<div>
					<p className="mx-3 fw-light lh-3 mt-1 poiret-one-regular">Rocket Yoga is a dynamic version of Ashtanga Yoga, featuring fast-paced movements and creativity. Developed by Larry Schultz, it emphasizes freedom in the practice to balance strength and flexibility.</p>
				</div>
				<div className="container-fluid d-flex flex-row">
					<ul className="d-flex flex-nowrap flex-row overflow-scroll gap-3 px-0 mx-2">
						{store.rocketYoga.map(item => (
							<li className="col-4 px-0 w-auto my-2" key={item.id}>
								<SessionCard
									id={item.id}
									name={item.name}
									instructor={item.instructor}
									asana_focus={item.asana_focus}
									level={item.level}
									url_imagen={item.url_imagen}
									type={item.type}
								/>
							</li>
						))}
					</ul>
				</div>

			</div>

			<div className="container-fluid mt-3">
				<div className="ms-3 d-flex align-items-center">
					<i className="fa-solid fa-star fa-xl" style={{ color: "#74C0FC" }}></i>
					<span className="ms-2 poiret-one-regular fs-5">Asthanga Yoga</span>
				</div>
				<div>
					<p className="mx-3 fw-light lh-2 mt-1 poiret-one-regular">Ashtanga Yoga is a style of yoga that follows a predefined sequence of poses, combining fluid movement with conscious breathing. It focuses on synchronizing breath and movement, as well as the progressive practice of specific series of asanas. This systematic approach promotes strength, flexibility, and internal purification.</p>
				</div>
				<div className="container-fluid d-flex flex-row">
					<ul className="d-flex flex-nowrap flex-row overflow-scroll gap-3 px-0 mx-2">
						{store.ashtangaYoga.map(item => (
							<li className="col-4 px-0 w-auto my-2" key={item.id}>
								<SessionCard
									id={item.id}
									name={item.name}
									instructor={item.instructor}
									asana_focus={item.asana_focus}
									level={item.level}
									url_imagen={item.url_imagen}
									type={item.type}
								/>
							</li>
						))}
					</ul>
				</div>

			</div>

			<div className="container-fluid mt-3">
				<div className="ms-3 d-flex align-items-center">
					<i className="fa-solid fa-star fa-xl" style={{ color: "#74C0FC" }}></i>
					<span className="ms-2 poiret-one-regular fs-5">Hatha Yoga</span>
				</div>
				<div>
					<p className="mx-3 fw-light lh-2 mt-1 poiret-one-regular">Hatha Yoga is a traditional form of yoga that focuses on the union of physical postures (asanas) and breathing techniques (pranayama). This practice aims to balance the body and mind, promoting the connection between physical activity, breath, and meditation. Hatha Yoga is known for its emphasis on alignment, strength, and flexibility, and it is suitable for practitioners of all levels.</p>
				</div>
				<div className="container-fluid d-flex flex-row">
					<ul className="d-flex flex-nowrap flex-row overflow-scroll gap-3 px-0 mx-2">
						{store.hathaYoga.map(item => (
							<li className="col-4 px-0 w-auto my-2" key={item.id}>
								<SessionCard
									id={item.id}
									name={item.name}
									instructor={item.instructor}
									asana_focus={item.asana_focus}
									level={item.level}
									url_imagen={item.url_imagen}
									type={item.type}
								/>
							</li>
						))}
					</ul>
				</div>

			</div>

			<div className="container-fluid mt-3">
				<div className="ms-3 d-flex align-items-center">
					<i className="fa-solid fa-star fa-xl" style={{ color: "#74C0FC" }}></i>
					<span className="ms-2 poiret-one-regular fs-5">Meditations</span>
				</div>
				<p className="mx-3 fw-light lh-2 mt-1 poiret-one-regular">A meditation session is a guided or individual practice aimed at achieving a state of mindfulness and mental calmness.</p>
				<div className="container-fluid d-flex flex-row">
					<ul className="d-flex flex-nowrap flex-row overflow-scroll gap-3 px-0 mx-2">
						{store.meditation.map(item => (
							<li className="col-4 px-0 w-auto my-2" key={item.id}>
								<MeditationCard
									id={item.id}
									name={item.name}
									instructor={item.instructor}
									subtitle={item.subtitle}
									duration={item.duration}
									url_imagen={item.url_imagen}
									type={item.type}
								/>
							</li>
						))}
					</ul>
				</div>

			</div>

			<div className="container-fluid mt-3">
				<div className="ms-3 d-flex align-items-center">
					<i className="fa-solid fa-star fa-xl" style={{ color: "#74C0FC" }}></i>
					<span className="ms-2 poiret-one-regular fs-5">Harmonium</span>
				</div>
				<p className="mx-3 fw-light lh-2 mt-1 poiret-one-regular">A harmonium session is a musical and spiritual experience where the instructor plays this bellows instrument, creating harmonious melodies. Often associated with devotional practices like kirtan, the session involves singing along with the harmonium, fostering spiritual connection through music and emotional expression. Participants may explore improvisations, traditional songs, and rhythms during the session, immersing themselves in a unique and meaningful sonic experience.</p>

				<div className="container-fluid d-flex flex-row">
					<ul className="d-flex flex-nowrap flex-row overflow-scroll gap-3 px-0 mx-2">
						{store.harmonium.map(item => (
							<li className="col-4 px-0 w-auto my-2" key={item.id}>
								<MeditationCard
									id={item.id}
									name={item.name}
									instructor={item.instructor}
									subtitle={item.subtitle}
									duration={item.duration}
									url_imagen={item.url_imagen}
									type={item.type}
								/>
							</li>
						))}
					</ul>
				</div>
				<div className="d-flex mt-5 justify-content-center align-items-center flex-column mb-5">
					<p className="mb-2 text-secondary opacity-50">Follow us on</p>
					<div className="d-flex justify-content-center align-items-center opacity-50">
						<a href="https://twitter.com/oceanom" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
							<i className="fab fa-twitter fa-xl m-1" style={{ color: "#9b9d85" }}></i>
						</a>
						<a href="https://www.instagram.com/oceanom" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
							<i className="fab fa-instagram fa-xl m-1" style={{ color: "#9b9d85" }}></i>
						</a>
						<a href="https://www.facebook.com/ocean_om" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
							<i className="fab fa-facebook fa-xl m-1" style={{ color: "#9b9d85" }}></i>
						</a>
					</div>
				</div>
			</div>


		</div>
	);
};
