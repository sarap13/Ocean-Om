import React, { useContext, useEffect } from "react"; //importamos el use context y el effect para si el usuario esta loggeado mantenerlo 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Context } from "./store/appContext";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { SessionYogaDetails } from "./pages/SessionYogaDetails.js";
import injectContext from "./store/appContext";
import { Login } from "./pages/login";
import { UserProfile } from "./pages/userProfile";
import { Return } from "./pages/Return.js";
import { Sessions } from "./pages/classes";
import { Teachers } from "./pages/teachers";
import { Signup } from "./pages/signup";
import { AboutUs } from "./pages/aboutus";
import { ContactUs } from "./pages/contactus";
import { ThankYou } from "./pages/thankyou";
import { ForgotPass } from "./pages/forgotpass";
import { CheckInbox } from "./pages/checkyourinbox.js";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Testimonials } from "./pages/testimonial";
import { SignupFreeTrial } from "./pages/signupfreetrial";
import CheckoutForm from "./component/checkoutForm.js";
import { ThankYouTestimonials } from "./pages/thankyou testimonial.js";

//create your first component
const Layout = () => {

    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div style={{  backgroundColor: "#FBF9F1"  }}>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route path="/login" element={<Login />} />
                        <Route path="/paymentdetails" element={<CheckoutForm />} />
                        <Route path="/testimonials" element={<Testimonials />} />
                        <Route path="/thankyoutestimonial" element={<ThankYouTestimonials />} />
                        <Route path="/profile" element={<UserProfile />} />
                        <Route path="/sessions" element={<Sessions />} />
                        <Route path="/theteachers" element={<Teachers />} />
                        <Route path="/aboutus" element={<AboutUs />} />
                        <Route path="/contactus" element={<ContactUs />} />
                        <Route path="/thankyou" element={<ThankYou />} />
                        <Route path="/forgotpassword" element={<ForgotPass />} />
                        <Route path="/checkyourinbox" element={<CheckInbox />} />
                        <Route path="/:yogatype/:theid" element={<SessionYogaDetails />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/signup/freetrial" element={<SignupFreeTrial />} />
                        <Route path="/return" element={<Return />} />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
