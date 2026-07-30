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

// const DentalImplantIndia = lazy(() =>
//   import("./pages/DentalImplantIndia")
// );

const CardiacLandingIndia = lazy(() =>
  import("./pages/CardiacLandingIndia")
);

const TermsAndConditionsPage = lazy(() =>
  import("./pages/terms-and-conditions")
);

const PrivacyPolicyPage = lazy(() =>
  import("./pages/privacy-policy")
);

const MedicalTourismIndia = lazy(() =>
  import("./pages/medical-tourism-india")
);


// FIXED IMPORT
// const OrthopedicTreatmentIndia = lazy(() =>
//   import("./pages/OrthopedicTreatmentIndia")
// );

// const CardiacLandingIndia = lazy(() => import("./pages/CardiacLandingIndia"));

const DentalImplantIndia = lazy(() => import("./pages/DentalImplantIndia"));

const OrthopedicTreatmentIndia = lazy(
  () => import("./pages/orthopedicTreatmentIndia"),
);

const EyeSurgeryIndia = lazy(() => import("./pages/EyeSurgeryIndia"));

const CancerLandingIndia = lazy(() => import("./pages/CancerLandingIndia"));

const GeneralCategory = lazy(() => import("./pages/GeneralCategory"));

const TurkeyLandingPage = lazy(() => import("./pages/TurkeyLandingPage"));

const SaudiEgypt = lazy(() => import("./pages/SaudiEgypt"));

// Loading component
const PageLoader = () => (
  <div style={{ padding: "50px", textAlign: "center" }}>
    Loading...
  </div>
);

function App() {
  // REMOVE GOOGLE TOP BAR ALWAYS
  useEffect(() => {
    const removeGoogleBar = () => {
      const iframe = document.querySelector(
        "iframe.goog-te-banner-frame"
      );

      if (iframe) iframe.remove();

      const body = document.querySelector("body");

      if (body && body.style.top) {
        body.style.top = "0px";
      }
    };

    const observer = new MutationObserver(() => {
      removeGoogleBar();

      const iframeStill = document.querySelector(
        "iframe.goog-te-banner-frame"
      );

      if (!iframeStill) observer.disconnect();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    removeGoogleBar();

    return () => observer.disconnect();
  }, []);

  // Defer mounting Translate until after initial load
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

          <Route
            path="/hospital-details/:id"
            element={<HospitalDetails />}
          />

          <Route path="/process" element={<Process />} />
          <Route path="/doctors" element={<Doctors />} />

          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditionsPage />}
          />

          <Route
            path="/privacy-policy"
            element={<PrivacyPolicyPage />}
          />

          <Route
            path="/translate"
            element={<Translate />}
          />

          <Route
            path="/medical-treatment-in-india"
            element={<MedicalTourismIndia />}
          />
          <Route
            path="/cardiac-treatment-india"
            element={<CardiacLandingIndia />}
          />

          <Route
            path="/dental-implant-india"
            element={<DentalImplantIndia />}
          />
          <Route
            path="/orthopedic-treatment-india"
            element={<OrthopedicTreatmentIndia />}
          />
          <Route path="/eye-surgery-in-india" element={<EyeSurgeryIndia />} />
          <Route
            path="/cancer-treatment-in-india"
            element={<CancerLandingIndia />}
          />
          <Route
            path="/best-medical-treatment-in-india"
            element={<GeneralCategory />}
          />
          <Route
            path="/best-hospital-in-turkey"
            element={<TurkeyLandingPage />}
          />
          <Route
            path="/german-saudi-hospital-cairo-egypt"
            element={<SaudiEgypt />}
          />
        </Routes>
      </Suspense>

      <Footer />
      <ConnectWithUs />
      <ConnectWithUsCall />
    </>
  );
}

export default App;