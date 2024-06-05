import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Landing from "./Pages/Landingpage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import About from "./Pages/About";
import ClientReg from "./Pages/ClientReg";
import News from "./Pages/News";
import HowItWorks from "./Pages/HowItWorks";
import Privacy from "./Pages/Privacy";
import RegOne from "./Pages/RegOne";
import Terms from "./Pages/Terms";
import BuyerReg from "./Pages/BuyerReg";
import ContactUs from "./Pages/ContactUs";
import Freelancer from "./Pages/Freelancer";
import Testimonails from "./Pages/Testimonails";
import FreelancerSignup from "./Pages/FreelancerSignup";
import ClientSignup from "./Pages/ClientSignup";
import Leaderboard from "./Pages/Leaderboard";
import Help from "./Pages/Help";
import HelpDispute from "./Pages/HelpDispute";
import Faq from "./Pages/Faq";
import Jobs from "./Pages/Jobs";
import Blog from "./Pages/Blog";
import Client from "./Pages/Client";
import Myjobs from "./Pages/Myjobs";
import CreateGig from "./Pages/CreateGig";
import CompleteRegistration from "./Pages/CompleteRegistration";
import ProtectRoute from "./Components/ProtectRoute";
import FindTalent from "./Pages/FindTalent";
import QuoteForm from "./Pages/QuoteForm";
import ForgotPassword from "./Pages/ForgetPassword";

// console.log(isUserAuthenticated)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/login"
          element={
            <GoogleOAuthProvider clientId="293248351678-1sc0j8kmfpmf9jrjre3c7havr3rrahg5.apps.googleusercontent.com">
              <Login />
            </GoogleOAuthProvider>
          }
        />
        <Route
          path="/signup"
          element={
            <GoogleOAuthProvider clientId="293248351678-1sc0j8kmfpmf9jrjre3c7havr3rrahg5.apps.googleusercontent.com">
              <Signup />{" "}
            </GoogleOAuthProvider>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/clientreg" element={<ClientReg />} />
        <Route path="/news" element={<News />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/freelancerreg" element={<RegOne />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/buyerreg" element={<BuyerReg />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/freelancerdash" element={token || (userToken && userRole !== "Client" ) ? <Freelancer /> : <Navigate to="/login" /> } /> */}
        <Route
          path="/freelancerdash"
          element={
            <ProtectRoute>
              <Freelancer />
            </ProtectRoute>
          }
        />

        {/* <Route path="/clientdash" element={( token || userToken && userRole === "Client")  ? <Client /> : <Navigate to="/login" /> } /> */}
        <Route
          path="/clientdash"
          element={
            <ProtectRoute>
              <Client />
            </ProtectRoute>
          }
        />
        <Route path="/testimonails" element={<Testimonails />} />
        {/* <Route path='/leaderboard' element={<Leaderboard />} /> */}
        <Route path="/help" element={<Help />} />
        {/* <Route path='/helpdispute' element={<HelpDispute />} /> */}
        <Route path="/faq" element={<Faq />} />
        <Route
          path="/jobs"
          element={
            <ProtectRoute>
              <Jobs />
            </ProtectRoute>
          }
        />
        {/* <Route path='/myjobs' element={<Myjobs />} /> */}
        <Route path="/createGig" element={<CreateGig />} />
        <Route
          path="/completeregistration"
          element={<CompleteRegistration />}
        />
        <Route
          path="/quoteform/:id"
          element={
            <ProtectRoute>
              <QuoteForm />
            </ProtectRoute>
          }
        />
        <Route
          path="/findtalent"
          element={
            <ProtectRoute>
              <FindTalent />
            </ProtectRoute>
          }
        />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
