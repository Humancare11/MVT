import React from "react";
import "./Contact.css";
import { Helmet } from "react-helmet";
import Contactsection from "../component/Contactsection";
function Contact() {
  return (
    <>
      {/* HELMET SECTION START */}
      <Helmet>
        <title>Doctor Consultation India | Contact Humancare World Wide</title>

        <meta
          name="description"
          content="Need help? Get in touch with Humancare World Wide expert doctors. Fill the form to send us a message"
        />

        <meta
          name="keywords"
          content="doctor consultation india, medical treatment, healthcare travel support, medical assistance india"
        />

        <link
          rel="canonical"
          href="https://humancaremedicaltourism.com/contact"
        />

        <meta property="og:title" content="Doctor Consultation India | Contact Humancare World Wide" />
        <meta
          property="og:description"
          content="Need help? Get in touch with Humancare World Wide expert doctors. Fill the form to send us a message"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://humancaremedicaltourism.com/contact" />
        <meta
          property="og:image"
          content="https://humancaremedicaltourism.com/og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Doctor Consultation India | Contact Humancare World Wide" />
        <meta
          name="twitter:description"
          content="Need help? Get in touch with Humancare World Wide expert doctors. Fill the form to send us a message"
        />
        <meta
          name="twitter:image"
          content="https://humancaremedicaltourism.com/og-image.jpg"
        />
      </Helmet>
      {/* HELMET SECTION END */}

      {/* HERO SECTION START */}
      <section className="contact-hero-section">
        <div>
          <span className="hero-badge-section">Our Services</span>
          <h1>Contact Us for Doctor Consultation & Medical Treatment</h1>
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
