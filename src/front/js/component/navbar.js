import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/logoOCEANOM.png"
// import { Login } from "../pages/login";

export const Navbar = () => {

	const { store, actions } = useContext(Context)
    let location = useLocation();

    const isLoggedIn = store.loggedUSer !== null; //creamos const para saber si el user esta logeado

    return (
        //<nav className="navbar p-0">
        <>
            {location.pathname !== "/" && (
                <nav
                    id="navbar"
                    className="navbar navbar-expand-lg navbar-dark fixed-top"
                    style={{ backgroundColor: "#1D77AB" }}>
                    <div className="container mt-1 ms-2 col-lg-12 col-md-6 col-sm-6">
                        <Link to="/">
                            <img src={logo} className="card-img-top" alt="..." style={{ width: "50%" }} />
                        </Link>
                        <div className="ml-auto me-0">
                            <ul className="nav col-lg-12 col-md-12 col-sm-12 d-flex flex-md-row flex-column align-items-start">
                                <li className="nav-item">
                                    <Link to="/sessions">
                                        <span className="nav-link active text-light" aria-current="page">
                                            Sessions
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/theteachers">
                                        <span className="nav-link text-light">The Teachers</span>
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link to="/">
                                    <span className="nav-link text-light">Log In</span>
                                    </Link>
                                </li> */}
                                {/* Si el usuario no esta logeado, aparecerán estos links */}
                                {!isLoggedIn ? (
                                    // añadimos <> para poder meter los dos li sin necesidad de añadir un div
                                        <>
                                        <li className="nav-item">
                                            <Link to="/signup">
                                                <span className="nav-link text-light">Signup</span>
                                            </Link>
                                        </li>
                                    
                                        <li className="nav-item">
                                            <Link to="/signup/freetrial">
                                                <span className="nav-link text-light">Free trial</span>
                                            </Link>
                                        </li>
                                        </>
                                ) : (null)}
                                {isLoggedIn ? (
                                    // Si el usuario está logeado, mostrar opciones específicas
                                    <li className="nav-item">
                                        <Link to="/dashboard">
                                            {/* <span className="nav-link text-light">Dashboard</span> */}
                                            <i className="fa-regular fa-user"></i>
                                        </Link>
                                    </li>
                                ) : (
                                    // Si el usuario no está logeado, mostrar opciones de inicio de sesión
                                    <li className="nav-item">
                                        <Link to="/login">
                                            <span className="nav-link text-light">Login</span>
                                        </Link>
                                    </li>
                                )}

                            </ul>
                        </div>
                    </div>
                </nav>
            )}
        </>
    );
};
