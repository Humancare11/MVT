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
import Breadcrumb from "../component/Breadcrumb";

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
      {/* HELMET SECTION START */}
      <Helmet>
        <title>Medical Tourism Services | Healthcare Services India</title>

        <meta
          name="description"
          content="Humancare World Wide is a complete medical tourism portal offering patients worldwide access to the best hospitals, diagnostic centers and super-specialty care for quick, effective and affordable treatment."
        />

        <meta
          name="keywords"
          content="medical tourism services, healthcare services india, healthcare travel support, medical consultation india, hospital selection service, visa assistance medical travel"
        />

        <link
          rel="canonical"
          href="https://humancaremedicaltourism.com/services"
        />

        <meta property="og:title" content="Medical Tourism Services | Healthcare Services India" />
        <meta
          property="og:description"
          content="Humancare World Wide is a complete medical tourism portal offering patients worldwide access to the best hospitals, diagnostic centers and super-specialty care for quick, effective and affordable treatment."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://humancaremedicaltourism.com/services" />
        <meta
          property="og:image"
          content="https://humancaremedicaltourism.com/og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Medical Tourism Services | Healthcare Services India" />
        <meta
          name="twitter:description"
          content="Humancare World Wide is a complete medical tourism portal offering patients worldwide access to the best hospitals, diagnostic centers and super-specialty care for quick, effective and affordable treatment."
        />
        <meta
          name="twitter:image"
          content="https://humancaremedicaltourism.com/og-image.jpg"
        />
      </Helmet>
      {/* HELMET SECTION END */}

      {/* HERO SECTION START */}
      <section className="services-hero">
        <div>
          <span className="services-hero-badge">Our Services</span>
          <h1>Our Medical Tourism & Healthcare Services</h1>
          <p>
            We provide end-to-end medical travel assistance, including treatment
            coordination, hospital support, travel planning, and post-care
            follow-up—making your healthcare journey simple and stress-free.
          </p>
        </div>
      </section>
      {/* HERO SECTION END */}

      <Breadcrumb currentPage="Services" />

      {/* SERVICES SECTION START */}
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
      {/* SERVICES SECTION END */}

      {/* PROCESS SECTION START */}
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
      </section>
      {/* PROCESS SECTION END */}

      {/* CTA SECTION START */}
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
      {/* CTA SECTION END */}
    </>
  );
}
