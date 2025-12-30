import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import "./Hospitals.css";

import Apollo from "../assets/apollo.jpeg";
import Manipal from "../assets/manipal.jpeg";
import Fortis from "../assets/fortis.jpeg";
import Narayana from "../assets/narayana.jpeg";
import Aster from "../assets/aster.jpeg";
import Max from "../assets/max.jpeg";
import Care from "../assets/care.jpeg";
import Kims from "../assets/kims.jpeg";
import Medicover from "../assets/medicover.jpeg";

const hospitals = [
  {
    name: "Apollo Hospitals",
    logo: Apollo,
    description:
      "One of India’s largest private hospital chains with a national network of over 70+ hospitals — known for multispecialty care and medical tourism services.",
    accreditations: ["JCI", "NABH"],
    locations: ["Delhi", "Chennai", "Mumbai", "Bangalore", "Hyderabad"],
    specialties: ["Multi-Specialty"],
  },
  {
    name: "Manipal Hospitals",
    logo: Manipal,
    description:
      "Among India’s largest hospital groups with 30+ hospitals nationwide.",
    accreditations: ["JCI", "NABH"],
    locations: ["Goa", "Hyderabad", "Bangalore", "Kolkata"],
    specialties: ["Multi-Specialty"],
  },
  {
    name: "Fortis Healthcare",
    logo: Fortis,
    description:
      "A major private hospital operator in India with 30+ facilities across cities.",
    accreditations: ["JCI", "NABH"],
    locations: ["Delhi", "Mumbai", "Bangalore", "Gurgaon"],
    specialties: ["Multi-Specialty"],
  },
  {
    name: "Narayana Health",
    logo: Narayana,
    description:
      "Major private hospital network known for cardiac and multispecialty care.",
    accreditations: ["JCI", "NABH"],
    locations: ["Guwahati", "Jaipur", "Bangalore", "Kolkata"],
    specialties: ["Multi-Specialty"],
  },
  {
    name: "Aster DM Healthcare",
    logo: Aster,
    description:
      "Operates 15–20 hospitals in India, with ongoing expansion plans.",
    accreditations: ["JCI", "NABH"],
    locations: ["Kochi", "Hyderabad", "Bangalore", "Chennai"],
    specialties: ["Multi-Specialty"],
  },
  {
    name: "Max Healthcare",
    logo: Max,
    description:
      "Large hospital network with facilities in Delhi-NCR and major cities.",
    accreditations: ["JCI", "NABH"],
    locations: ["Delhi NCR", "Ludhiana", "Bathinda", "Dehradun"],
    specialties: ["Multi-Specialty"],
  },
  {
    name: "CARE Hospitals",
    logo: Care,
    description:
      "Corporate hospital chain with multiple facilities across India.",
    accreditations: ["JCI", "NABH"],
    locations: ["Hyderabad", "Visakhapatnam", "Vijayawada", "Bhubaneswar"],
    specialties: ["Multi-Specialty"],
  },
  {
    name: "KIMS Hospitals",
    logo: Kims,
    description:
      "One of India’s leading corporate healthcare groups.",
    accreditations: ["JCI", "NABH"],
    locations: ["Secunderabad", "Visakhapatnam", "Rajahmundry", "Maharashtra"],
    specialties: ["Multi-Specialty"],
  },
  {
    name: "Medicover Hospitals",
    logo: Medicover,
    description:
      "Part of a global healthcare provider, operating multiple hospitals in India.",
    accreditations: ["JCI", "NABH"],
    locations: ["Hyderabad", "Bangalore", "Chennai", "Pune"],
    specialties: ["Multi-Specialty"],
  },
];

export default function HospitalsPage() {
  return (
    <>
      {/* HERO */}
      <section className="hospitals-hero">
        <span className="hero-badge">Medical Specialties</span>
        <h1>World-Class Treatments at Affordable Prices</h1>
        <p>
          Access India's finest specialists and cutting-edge medical technology
          at a fraction of Western costs.
        </p>
      </section>

      {/* HOSPITAL LIST */}
      <section className="partner-hospitals">
        <div className="partner-header">
          <span className="hero-badge">Hospital Network</span>
          <h2>Our Partner Hospitals</h2>
          <p>
            We collaborate with India's most prestigious healthcare institutions.
          </p>
        </div>

        <div className="partner-list">
          {hospitals.map((h, i) => (
            <div className="partner-card" key={i}>
              
              {/* LEFT */}
              <div className="partner-left">
                <div className="logo-placeholder">
                  <img src={h.logo} alt={h.name} />
                </div>

                <h3>{h.name}</h3>

                <div className="accreditations">
                  {h.accreditations.map((a, idx) => (
                    <span key={idx}>{a}</span>
                  ))}
                </div>
              </div>

              {/* MIDDLE */}
              <div className="partner-middle">
                <p className="partner-desc">{h.description}</p>

                <div className="specialties">
                  {h.specialties.map((s, idx) => (
                    <span key={idx}>{s}</span>
                  ))}
                </div>

                <div className="locations">
                  <MapPin size={16} />
                  {h.locations.join(" • ")}
                </div>
              </div>

              {/* RIGHT */}
              <div className="partner-right">
                <a
                  href="https://wa.me/918655835979"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn"
                >
                  Get Treatment Quote
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta">
        <h2>Need Help Choosing the Right Hospital?</h2>
        <p>Our experts will guide you to the best option.</p>
        <Link to="tel:+918655835979" className="outline-btn white">
          <Phone size={18} /> Get Personalized Recommendation
        </Link>
      </section>
    </>
  );
}
