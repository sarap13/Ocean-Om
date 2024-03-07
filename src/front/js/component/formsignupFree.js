import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FormSignupFreeTrial = ({ freeTrial }) => {

    // const { store, actions } = useContext(Context);

    const navigate = useNavigate();
    const [state, setState] = useState({
        //initialize state here
    });
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [lastname, setLastName] = useState("")
    const [date_of_birth, setDate_of_birth] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const { store, actions } = useContext(Context)

    async function handleFormSignupFreeTrial(e) {
        // actions.signupFree();
        e.preventDefault()
        let logged = ""
        logged = await actions.signupFree(name, lastname, date_of_birth, email, password, confirmPassword);
        if (logged) {
            navigate("/paymentdetails")
        } else {
            toast.error("User unsubscribed. Contact oceanom@gmail.com to resume the account.");
        }
    }

    return (
        <>
            <ToastContainer />
            <form className="stylebackgroundimg container-fluid d-flex me-0 mt-3 flex-column mb-5 w-100 h-100 opacity-50 ms-sm-1 ms-md-0 text-center pt-5" onSubmit={handleFormSignupFreeTrial}>
                <h1 className="poiret-one-regular fs-1">Free Trial</h1>
                <div className="d-flex justify-content-center">
                    <div className="col-11 col-sm-6 col-lg-4">
                        <div className="card-body">
                            <div className="mt-1 text-start">
                                <label htmlFor="exampleInputEmail1" className="form-label mt-3">Your beautiful first name</label>
                                <input type="name" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-1 text-start">
                                <label htmlFor="exampleInputLastName1" className="form-label mt-3">The last name someone gave you</label>
                                <input type="lastname" className="form-control" id="exampleInputLastName1" onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div className="mb-1 text-start">
                                <label htmlFor="exampleInputDate_of_birth1" className="form-label mt-3">The date came to life</label>
                                <input type="date" className="form-control" id="exampleInputDate_of_birth1" onChange={(e) => setDate_of_birth(e.target.value)} />
                            </div>
                            <div className="mb-1 text-start">
                                <label htmlFor="exampleInputEmail1" className="form-label mt-3">Your best email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center col-11 col-sm-6 col-lg-4">
                        <div className="card-body mt-md-4 mt-sm-0 text-start d-flex flex-column justify-content-center my-auto">
                            <label htmlFor="exampleInputPassword1" className="form-label mt-3">A password you would always remember</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="exampleInputConfirmPassword1" className="form-label mt-3">Again, just in case</label>
                            <input type="password" className="form-control" id="exampleInputConfirmPassword1" onChange={(e) => setConfirmPassword(e.target.value)} />
                            <button type="submit" className="btn btn-outline-secondary w-50 mt-5" onClick={handleFormSignupFreeTrial}>Sign Up</button>
                        </div>
                    </div>
                </div>
                <div className="pb-3 mt-1">
                    <h1 className="poiret-one-regular">Enjoy our exclusive content for 3 days!</h1>
                    <p>After those days your monthly subscription will be charged</p>
                </div>
            </form>
        </>
    );
};
