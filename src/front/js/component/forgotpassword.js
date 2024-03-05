import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


import "../../styles/contactUs.css";


export const ForgotPassword = () => {

    const [state, setState] = useState({
        //initialize state here
    });

    // activamos el useNavigate
    // const navigate = useNavigate();

    const { store, actions } = useContext(Context)

    const [email, setEmail] = useState("");
    const [resetStatus, setResetStatus] = useState(null);

    async function handleRecovery(e) {
    e.preventDefault();

        try {
            const result = await actions.resetPassword(email);
            console.log('Reset password result:', result);
            if (result.success) {
                setResetStatus({ success: true, message: 'Password reset successful. Check your email for the new password.' });
            } else {
                setResetStatus({ success: false, message: result.message });
            }
        } catch (error) {
            setResetStatus({ success: false, message: `An unexpected error occurred.` });
        }
    
       
    }

    return (
    
      
            <div className="container-fluid stylebackgrounding d-flex col-12 col-sm-12 col-md-6 col-lg-6 mb-5 ms-3 flex-column justify-content-center align-items-center text-secondary pt-5 mt-3">
                <div className="d-block pr-3 me-5 col-6">
                        <h1 className="poiret-one-regular">Recover your Password</h1>
                        <span className="poiret-one-regular">Write your email here so we can send you a new password. </span>
                        <div className="mb-1 text-start mt-3">
                            <label className="form-label poiret-one-regular">Email</label>
                            <input type="email" className="form-control inputEmail" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                           
                        </div>
                       
                        {/* <Link to="/checkyourinbox"> */}
                            <button onClick={handleRecovery} className="btn btn-outline-secondary w-50 mt-3 poiret-one-regular fs-5">Send</button>
                        {/* </Link> */}

                        <div className="mt-5">
                            <div>
                                <p className="mb-2 poiret-one-regular">Follow us on</p>
                            </div>
                        <div className="mb-4">
                            <i className="fa-brands fa-xl fa-twitter m-1 " style={{ color: "#9b9d85" }}></i>
                            <i className="fa-brands fa-xl fa-instagram m-1" style={{ color: "#9b9d85" }}></i>
                            <i className="fa-brands fa-xl fa-facebook m-1" style={{ color: "#9b9d85" }}></i>
                        </div>
                        </div>


                        <div className="text-start mt-5 mb-5">
                            <Link to="/sessions">
                                <button type="button" className="btn btn-outline-secondary poiret-one-regular fs-5">Back to Sessions</button>
                            </Link>
                        </div>

                        {resetStatus && (
                        <div className={resetStatus.success ? 'alert alert-success' : 'alert alert-danger'} role="alert">
                        {resetStatus.message}
                        </div>
                         )}
                    </div>

                    
                    
    

                </div>
           
      
    );
};