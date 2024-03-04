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
						<span className="text-light fs-5 text-start mt-3">
							Find any class and practice as you were in a yoga studio.
						</span>
						<div className="d-block align-items-center justify-content-start mt-5">
							<Link to="/signup/freetrial">
								<button type="button" className="btn btn-outline-light btn-lg">
									Try now for free
								</button>
							</Link>
						</div>

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
					<span className="ms-2">Jivamukti Yoga</span>
				</div>
				<div>
					<p className="mx-3 fst-italic fw-light lh-2 mt-1">Las clases de Jivamukti Yoga suelen incluir la práctica física de asanas (posturas), pranayama (control de la respiración), canto de mantras, meditación y exploración de los principios éticos y filosóficos del yoga. El enfoque se centra en la conexión con el aspecto espiritual del yoga y la integración de principios éticos en la vida diaria. El activismo y la conciencia ambiental también son aspectos importantes de su filosofía.</p>
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
					<span className="ms-2">Vinyasa Yoga</span>
				</div>
				<div>
					<p className="mx-3 fst-italic fw-light lh-2 mt-1">El Vinyasa Yoga es un estilo de yoga dinámico que enfatiza la conexión entre el movimiento y la respiración. Las posturas fluyen en una secuencia continua, mejorando la fuerza, la flexibilidad y la conciencia respiratoria. Este estilo busca integrar mente y cuerpo a través de una práctica fluida y meditativa.</p>
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
					<span className="ms-2">Rocket Yoga</span>
				</div>
				<div>
					<p className="mx-3 fst-italic fw-light lh-3 mt-1">Rocket Yoga: Versión dinámica de Ashtanga Yoga, con movimientos rápidos y creatividad. Desarrollada por Larry Schultz, enfatiza libertad en la práctica para equilibrar fuerza y flexibilidad.</p>
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
					<span className="ms-2">Asthanga Yoga</span>
				</div>
				<div>
					<p className="mx-3 fst-italic fw-light lh-2 mt-1">El Ashtanga Yoga es un estilo de yoga que sigue una secuencia predefinida de posturas, combinando movimiento fluido con respiración consciente. Se centra en la sincronización de la respiración y el movimiento, así como en la práctica progresiva de series específicas de asanas. Este enfoque sistemático promueve la fuerza, la flexibilidad y la purificación interna.</p>
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
					<span className="ms-2">Hatha Yoga</span>
				</div>
				<div>
					<p className="mx-3 fst-italic fw-light lh-2 mt-1">Hatha Yoga es una forma tradicional de yoga que se centra en la unión de las posturas físicas (asanas) y las técnicas de respiración (pranayama). Esta práctica busca equilibrar el cuerpo y la mente, promoviendo la conexión entre la actividad física, la respiración y la meditación. Hatha Yoga es conocido por su enfoque en la alineación, fuerza y ​​flexibilidad, y es adecuado para practicantes de todos los niveles.</p>
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
					<span className="ms-2">Meditations</span>
				</div>
				<p className="mx-3 fst-italic fw-light lh-2 mt-1">Una sesión de meditación es una práctica guiada o individual que tiene como objetivo alcanzar un estado de atención plena y calma mental.</p>
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
					<span className="ms-2">Harmonium</span>
				</div>
				<p className="mx-3 fst-italic fw-light lh-2 mt-1">Una sesión de harmonium es una experiencia musical y espiritual en la que el practicante toca este instrumento de fuelle, creando melodías armoniosas. A menudo asociada con prácticas devocionales como el kirtan, la sesión implica cantar junto con el harmonium, fomentando la conexión espiritual a través de la música y la expresión emocional. Durante la sesión, los participantes pueden explorar improvisaciones, canciones tradicionales y ritmos, sumergiéndose en una experiencia sonora única y significativa.</p>

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

			</div>


		</div>
	);
};
