import React from "react";
import "./Contact.css";
import { Helmet } from "react-helmet";
import Contactsection from "../component/Contactsection";
function Contact() {
  return (
    <>
      {/* HELMET SECTION START */}
      <Helmet>
        <title>
          Contact HumanCare Medical Tourism | Free Medical Consultation
        </title>

        <meta
          name="description"
          content="Contact HumanCare Medical Tourism for a free medical consultation. Get expert guidance, treatment options, and complete medical travel assistance."
        />

        <meta
          name="keywords"
          content="contact humancare medical tourism, free medical consultation india, healthcare travel support, medical assistance india"
        />

        <link
          rel="canonical"
          href="https://humancaremedicaltourism.com/contact"
        />
      </Helmet>
      {/* HELMET SECTION END */}

      {/* HERO SECTION START */}
      <section className="contact-hero-section">
        <div>
          <span className="hero-badge-section">Our Services</span>
          <h1>Comprehensive Medical Travel Support</h1>
          <p>
            End-to-end assistance for your entire healthcare journey in India
          </p>
        </div>
      </section>
      {/* HERO Section END */}

      <Contactsection />
    </>
  );
}

export default Contact;
