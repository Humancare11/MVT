import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Treatments from "./pages/Treatments";
import Contact from "./pages/Contact";
import Hospitals from "./pages/Hospitals";
import HospitalDetails from "./pages/HospitalDetails";
import Doctors from "./pages/Doctors";
import Process from "./pages/Process";
import Oman from "./pages/Oman";

import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ConnectWithUs from "./component/ConnectWithUs";
import TermsAndConditionsPage from "./pages/terms-and-conditions";
import PrivacyPolicyPage from "./pages/privacy-policy";

import Translate from "./pages/Translate";

function App() {

  // REMOVE GOOGLE TOP BAR ALWAYS
useEffect(() => {
  const removeGoogleBar = () => {
    const iframe = document.querySelector("iframe.goog-te-banner-frame");
    if (iframe) iframe.remove();

    // Google top spacing fix
    const bodyStyle = document.querySelector("body").style;
    if (bodyStyle.top) bodyStyle.top = "0px";
  };

  // Run repeatedly because Google re-injects iframe
  const interval = setInterval(removeGoogleBar, 300);
  return () => clearInterval(interval);
}, []);





  return (
    <>
      <Translate />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/hospital-details/:id" element={<HospitalDetails />} />
        <Route path="/process" element={<Process />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/oman" element={<Oman />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/translate" element={<Translate />} />
      </Routes>

      <Footer />
      <ConnectWithUs />
    </>
  );
}

export default App;
