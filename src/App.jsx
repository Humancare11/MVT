import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Treatments from "./pages/Treatments";
import Contact from "./pages/Contact";
import Hospitals from "./pages/Hospitals";
import Doctors from "./pages/Doctors";
import Process from "./pages/Process";
import Oman from "./pages/Oman";

import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/process" element={<Process />} />
        <Route path="/doctors" element={<Doctors />} />
                <Route path="/oman" element={<Oman />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
