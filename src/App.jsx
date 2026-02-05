import React, { useEffect, lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";

// Keep critical components loaded
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ConnectWithUs from "./component/ConnectWithUsWhatsapp";
import ConnectWithUsCall from "./component/ConnectWithUsCall";
const Translate = lazy(() => import("./pages/Translate"));

// Lazy load all pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Treatments = lazy(() => import("./pages/Treatments"));
const Contact = lazy(() => import("./pages/Contact"));
const Hospitals = lazy(() => import("./pages/Hospitals"));
const HospitalDetails = lazy(() => import("./pages/HospitalDetails"));
const Doctors = lazy(() => import("./pages/Doctors"));
const Process = lazy(() => import("./pages/Process"));
const TermsAndConditionsPage = lazy(
  () => import("./pages/terms-and-conditions"),
);
const PrivacyPolicyPage = lazy(() => import("./pages/privacy-policy"));

// Loading component
const PageLoader = () => (
  <div style={{ padding: "50px", textAlign: "center" }}>Loading...</div>
);

function App() {
  // REMOVE GOOGLE TOP BAR ALWAYS
  useEffect(() => {
    // Remove Google Translate banner once when it appears using a MutationObserver.
    const removeGoogleBar = () => {
      const iframe = document.querySelector("iframe.goog-te-banner-frame");
      if (iframe) iframe.remove();

      const body = document.querySelector("body");
      if (body && body.style.top) body.style.top = "0px";
    };

    const observer = new MutationObserver(() => {
      removeGoogleBar();
      // If removed, disconnect observer to avoid repeated work
      const iframeStill = document.querySelector("iframe.goog-te-banner-frame");
      if (!iframeStill) observer.disconnect();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // One-time run in case the iframe is already present
    removeGoogleBar();

    return () => observer.disconnect();
  }, []);

  // Defer mounting Translate until after initial load to avoid early iframe injection
  const [showTranslate, setShowTranslate] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowTranslate(true), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {showTranslate && (
        <Suspense fallback={null}>
          <Translate />
        </Suspense>
      )}

      <Header />

      <Suspense fallback={<PageLoader />}>
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
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditionsPage />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/translate" element={<Translate />} />
        </Routes>
      </Suspense>

      <Footer />
      <ConnectWithUs />
      <ConnectWithUsCall />
    </>
  );
}

export default App;
