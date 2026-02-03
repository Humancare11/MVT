import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchHospitals } from "./Hospitals";
import "./HospitalDetails.css";
import { FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet";

export default function HospitalDetails() {
  const { id } = useParams();
  const [hospital, setHospital] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchHospitals()
      .then((data) => {
        if (!mounted) return;
        const found = data.find((h) => String(h.id) === String(id));
        setHospital(found || null);
      })
      .finally(() => mounted && setLoading(false));
    return () => (mounted = false);
  }, [id]);

  if (loading) return <div className="container">Loading...</div>;
  if (!hospital)
    return (
      <div className="container">
        <h2>Hospital not found</h2>
        <p>The requested hospital was not found.</p>
        <Link to="/hospitals">Back to hospitals</Link>
      </div>
    );

  return (
    <>
      <Helmet>
        <title>Best Hospitals in India | HumanCare Medical Tourism</title>

        <meta
          name="description"
          content="Discover top accredited hospitals in India with expert doctors and world-class healthcare services. HumanCare Medical Tourism ensures safe and affordable medical travel support."
        />

        <meta
          name="keywords"
          content="best hospitals in India, medical tourism India, top hospitals, accredited hospitals, human care hospitals"
        />

        <link
          rel="canonical"
          href="https://humancaremedicaltourism.com/hospitals"
        />
      </Helmet>

      <section className="hospitals-hero-section">
        <div>
          <span className="hero-badge-hospitals">Medical Specialties</span>
          <h1>{hospital.name}</h1>
          <p>{hospital.desc.slice(0, 200)}</p>
        </div>
      </section>

      <div className="hospital-details-page pro-layout">
        <div
          className="hospital-details-banner pro-banner"
          style={{ backgroundImage: `url(${hospital.image})` }}
          role="img"
          aria-label={hospital.name}
        >
          <div className="hospital-details-banner-inner pro-banner-inner">
            <h1 className="hospital-details-title pro-title">
              {hospital.name}
            </h1>
            <div className="hospital-details-address pro-address">
              {hospital.address}
            </div>
          </div>
        </div>
        <div className="hospital-details-container pro-container">
          <div className="pro-details-card">
            <section className="hospital-details-about pro-about">
              <h2>About</h2>
              <p>{hospital.desc}</p>
            </section>
            <section className="hospital-details-specialties pro-specialties">
              <h2>Specialties</h2>
              <div className="hospital-specialty-list pro-specialty-list">
                {hospital.specialties.map((s, i) => (
                  <span key={i} className="hc-specialty-chip pro-chip">
                    {s}
                  </span>
                ))}
              </div>
            </section>
          </div>
          <div className="hospital-contact-row pro-contact-row">
            <a
              className="hc-book-btn pro-whatsapp-btn"
              href={`https://api.whatsapp.com/send?phone=${hospital.phone.replace(
                /[^0-9]/g,
                "",
              )}&text=${encodeURIComponent(
                `Hello, I want to book an appointment at ${hospital.name}`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="pro-wa-icon" aria-hidden="true">
                <FaWhatsapp />
              </span>
              Contact via WhatsApp
            </a>

            <Link className="btn pro-back-btn" to="/hospitals">
              ← Back to Hospitals
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
