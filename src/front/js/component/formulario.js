import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/login.css";


export const Formulario = () => {

    const [state, setState] = useState({
        //initialize state here
    });

    // activamos el useNavigate
    const navigate = useNavigate();

    const { store, actions } = useContext(Context)

    const [email, setUserEmail] = useState("");
    const [password, setPassword] = useState("")

    async function handleLogin(e) {
        e.preventDefault()
        // console.log(email, password);
        let logged = await actions.login(email, password);
        // console.log(logged)
        if (logged === true) { // ponemos === true porque tiene mas valores, si ponemos solo logged acepta los errores al existir
            navigate("/sessions");
        }
        if (logged === 401) {
            toast.error("Invalid email or password");
        }
        if (logged === 403) {
            toast.error("User unsubscribed. Contact oceanom@gmail.com to resume the account.");
        }
    }

    return (
        /*añadimos esto para poder meter en toast*/
        <>
            <ToastContainer />
            <form className="stylebackgroundimg d-flex flex-column justify-content-center h-100 align-items-center opacity-50 p-5" onSubmit={handleLogin}>
                <div className="text-center col-11 col-sm-6 col-lg-4 mb-5">
                    <div className="card-body">
                        <h1 style={{ fontFamily: 'Poiret One' }}>Login Om</h1>
                        <div className="mb-1 text-start">
                            <label for="exampleInputEmail1" className="form-label">Email/Username</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setUserEmail(e.target.value)} />
                            <div id="emailHelp" className="form-text"></div>
                        </div>
                        <div className="mb-1 text-start">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-outline-secondary w-50 mt-3">Login</button>
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <p className=" fw-light mb-0 text-decoration-none"><Link to="/signup" className="link-secondary">Don't have an acount?</Link></p>
                        <p className=" fw-light"><Link to="/forgotpassword" className="link-secondary fw-light mt-0">Forgot password?</Link></p>

                    </div>
                </div>

                <div className="mt-5">
                    <div>
                        <p className="mb-2">Follow us on</p>
                    </div>
                    <div>
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
            </form>
        </>
    );
};
