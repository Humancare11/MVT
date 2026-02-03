import React from "react";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  Building2,
  FileCheck,
  Plane,
  Car,
  HeartHandshake,
  ArrowRight,
  Phone,
} from "lucide-react";
import "./Services.css";
import { Helmet } from "react-helmet";

const services = [
  {
    icon: Stethoscope,
    title: "Medical Consultation",
    description:
      "Get expert medical opinions from top specialists. Share your reports and receive comprehensive treatment recommendations within 48 hours.",
    features: [
      "Free initial consultation",
      "Second opinion services",
      "Treatment plan review",
      "Cost estimation",
    ],
  },
  {
    icon: Building2,
    title: "Doctor & Hospital Selection",
    description:
      "We help you choose the best hospital and doctor based on your specific medical condition, budget, and preferences.",
    features: [
      "JCI & NABH accredited hospitals",
      "Specialty-matched doctors",
      "Hospital comparison",
      "Patient reviews access",
    ],
  },
  {
    icon: FileCheck,
    title: "Visa Assistance",
    description:
      "Complete support for medical visa applications including documentation, invitation letters, and embassy coordination.",
    features: [
      "Medical visa guidance",
      "Documentation support",
      "Embassy coordination",
      "Visa extension help",
    ],
  },
  {
    icon: Plane,
    title: "Flight & Hotel Booking",
    description:
      "We arrange comfortable travel and accommodation near your treatment hospital at competitive rates.",
    features: [
      "Flight booking assistance",
      "Hospital-nearby hotels",
      "Budget-friendly options",
      "Long-stay arrangements",
    ],
  },
  {
    icon: Car,
    title: "Airport Pickup & Local Support",
    description:
      "From the moment you land in India, our team ensures you reach your destination safely and comfortably.",
    features: [
      "Airport pickup",
      "Hospital transfers",
      "Local SIM card",
      "Currency exchange guidance",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Post-Treatment Follow-up",
    description:
      "Your care doesn't end after treatment. We coordinate follow-up consultations and provide ongoing support.",
    features: [
      "Recovery monitoring",
      "Doctor consultations",
      "Report follow-up",
      "Emergency support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>
          Medical Tourism Services | Complete Healthcare Travel Support -
          HumanCare
        </title>

        <meta
          name="description"
          content="Explore HumanCare Medical Tourism services including medical consultation, hospital & doctor selection, visa assistance, travel booking, and post-treatment follow-up."
        />

        <meta
          name="keywords"
          content="medical tourism services, healthcare travel support, medical consultation india, hospital selection service, visa assistance medical travel"
        />

        <link
          rel="canonical"
          href="https://humancaremedicaltourism.com/services"
        />
      </Helmet>
      {/* HERO */}
      <section className="services-hero">
        <div>
          <span className="services-hero-badge">Our Services</span>
          <h1>Complete Medical Travel Support</h1>
          <p>
            We provide end-to-end medical travel assistance, including treatment
            coordination, hospital support, travel planning, and post-care
            follow-up—making your healthcare journey simple and stress-free.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-section">
        <div className="section-header-service">
          <span className="hero-badge-service">What We Offer</span>
          <h2>Services Designed for International Patients</h2>
          <p>
            From your first inquiry to complete recovery, we're with you every
            step of the way
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <service.icon />
              </div>

              <h3>{service.title}</h3>
              <p className="service-desc">{service.description}</p>

              <ul>
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      {/* <section className="process-section">
        <div className="section-header">
          <span className="badge">How It Works</span>
          <h2>A Simple, Stress-Free Medical Journey</h2>
          <p>
            Our transparent process ensures smooth coordination from your first
            inquiry to recovery, so you can focus on your health while we take
            care of the rest.
          </p>
        </div>

        <div className="process-steps">
          {[
            "Share Your Medical Details",
            "Expert Medical Consultation",
            "Expert Medical Consultation",
            "Travel & Stay Arrangements",
            "Treatment & Care",
            "Treatment & Care",
          ].map((step, index) => (
            <div className="process-item" key={index}>
              <div className="step-circle">{index + 1}</div>
              <span>{step}</span>
              {index < 5 && <ArrowRight />}
            </div>
          ))}
        </div>

        <div className="process-cta">
          <Link to="/process" className="primary-btn">
            View Detailed Process <ArrowRight />
          </Link>
        </div>
      </section> */}
      <section className="process-section-services">
        <div className="section-header-services">
          <span className="hero-badge-services">How It Works</span>
          <h2>A Simple, Stress-Free Medical Journey</h2>
          <p>
            Our transparent process ensures smooth coordination from your first
            inquiry to recovery, so you can focus on your health while we take
            care of the rest.
          </p>
        </div>

        <div className="process-steps">
          {[
            "Share Your Medical Details",
            "Expert Medical Consultation",
            "Treatment Planning",
            "Travel & Stay Arrangements",
            "Treatment & Care",
            "Recovery & Follow-up",
          ].map((step, index) => (
            <div className="process-card" key={index}>
              <div className="step-circle">{index + 1}</div>
              <span>{step}</span>
            </div>
          ))}
        </div>
        <div className="process-btn">
          <Link to="/process" className="primary-btn">
            View Detailed Process <ArrowRight />
          </Link>
        </div>

        {/* <div className="process-cta">
    <Link to="/process" className="primary-btn">
      View Detailed Process <ArrowRight />
    </Link>
  </div> */}
      </section>

      {/* CTA */}
      <section className="services-cta">
        <h2>Need Personalized Assistance?</h2>
        <p>
          Our team is ready to answer your questions and help plan your medical
          journey
        </p>

        <Link to="tel:+919833166697" className="outline-btn">
          <Phone /> Contact Us Today
        </Link>
      </section>
    </>
  );
}
