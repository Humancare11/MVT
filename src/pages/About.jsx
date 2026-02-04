import React from "react";
import {
  Users,
  Award,
  Globe,
  Heart,
  Target,
  CheckCircle2,
  Phone,
  Stethoscope,
  Building2,
  FileText,
  Plane,
  Car,
  UserCheck,
  Languages,
  HeartPulse,
  Headset,
} from "lucide-react";
import aboutImg from "../assets/about/about.webp";
import "./About.css";
import { Helmet } from "react-helmet";

import { useEffect, useState } from "react";
import about1 from "../assets/about/about-1.webp";
import about2 from "../assets/about/about-2.webp";
import about3 from "../assets/about/about-3.webp";
import about4 from "../assets/about/about-4.webp";

const images = [about1, about2, about3, about4];

export default function AboutPage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* HELMET START */}
      <Helmet>
        <title>
          About HumanCare Medical Tourism | Trusted Medical Travel Company in
          India
        </title>

        <meta
          name="description"
          content="HumanCare Medical Tourism is a trusted medical travel company with 21+ years of experience helping international patients access affordable treatment at top hospitals in India."
        />

        <meta
          name="keywords"
          content="about humancare medical tourism, medical tourism company india, healthcare travel experts, international patient services"
        />

        <link
          rel="canonical"
          href="https://humancaremedicaltourism.com/about"
        />
      </Helmet>
      {/* HELMET END */}

      {/* HERO SECTION START */}
      <section
        className="about-hero-section"
        style={{
          backgroundImage: `
          linear-gradient(
            to right,
            rgba(10, 23, 84, 1) 0%,
            rgba(10, 23, 84, 0.88) 35%,
            rgba(10, 23, 84, 0.5) 60%,
            transparent 100%
          ),
          url(${images[currentImage]})
        `,
        }}
      >
        <div>
          <span className="about-hero-badge">About HumanCare MVT</span>
          <h2>Your Trusted Global Medical Travel Partner</h2>
          <p>
            Humancare Medical Value Travel connects international patients with
            leading hospitals and specialists in India and worldwide.
          </p>
          <p>
            From medical opinions and treatment coordination to travel
            assistance and post-care follow-up, we ensure a safe, seamless, and
            patient-focused healthcare journey.
          </p>
        </div>
      </section>
      {/* HERO SECTION END */}

      {/* STATS SECTION START */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-card">
            <div className="stats-icon">
              <Users />
            </div>
            <div className="stats-text">
              <h3>1000+</h3>
              <p>Happy Patients</p>
            </div>
          </div>

          <div className="stats-card">
            <div className="stats-icon">
              <Award />
            </div>
            <div className="stats-text">
              <h3>300+</h3>
              <p>Doctors Network</p>
            </div>
          </div>

          <div className="stats-card">
            <div className="stats-icon">
              <Globe />
            </div>
            <div className="stats-text">
              <h3>15+</h3>
              <p>Countries Served</p>
            </div>
          </div>
        </div>
      </section>
      {/* STATS SECTION END */}

      {/* WHO WE ARE SECTION START */}
      <section className="about-who">
        <div className="who-content">
          <span className="section-badge">Who We Are</span>
          <h2>Compassionate Care, Global Reach</h2>

          <p>
            At Humancare Medical Value Travel, we believe quality healthcare
            should be accessible—no matter where you live. We connect patients
            worldwide with trusted hospitals and experienced specialists, making
            cross-border medical care simple, safe, and affordable.
          </p>

          <p>
            Our patient-first approach ensures you receive personalized guidance
            at every step, from medical consultation and treatment planning to
            travel support and recovery care. With strong hospital partnerships
            and a commitment to transparency, we focus on what matters most—your
            health, comfort, and peace of mind.
          </p>

          {/* <p>
            By partnering with India’s most trusted hospitals and specialists,
            we ensure international patients receive affordable, globally
            accredited medical care.
          </p> */}
        </div>

        <div className="who-image">
          <img src={aboutImg} alt="Medical Team" />
          {/* add image */}
        </div>
      </section>
      {/* WHO WE ARE SECTION END */}

      {/* MISSION & VISION SECTION START */}
      <section className="about-mission">
        <div className="mission-box blue">
          <h3>Our Mission</h3>
          <p>
            To provide international patients seamless access to world-class
            medical care in India, combining affordability with excellence and
            end-to-end support.
          </p>
        </div>

        <div className="mission-box red">
          <h3>Our Vision</h3>
          <p>
            To become the most trusted name in medical tourism by setting new
            standards of transparency, ethics, and patient-first healthcare.
          </p>
        </div>
      </section>
      {/* MISSION & VISION SECTION END */}

      {/* VALUES SECTION START */}
      <section className="values-section">
        <span className="values-badge">Our Values</span>

        <h2 className="values-title">What Drives Us</h2>

        <p className="values-subtitle">
          The values that shape every decision we make and every patient journey
          we support.
        </p>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <Heart />
            </div>
            <h3>Patient-First Care</h3>
            <p>
              We place patients at the heart of everything we do, prioritizing
              comfort, safety, and well-being at every stage.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <Target />
            </div>
            <h3>Commitment to Quality</h3>
            <p>
              We collaborate only with accredited hospitals and experienced
              specialists who meet international healthcare standards.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <Globe />
            </div>
            <h3>Global Access to Care</h3>
            <p>
              We strive to make high-quality medical treatment accessible to
              patients across borders, regardless of location.
            </p>
          </div>
        </div>
      </section>
      {/* VALUES SECTION END */}

      {/* SUPPORT SECTION START */}
      <section className="about-support">
        <span className="section-badge dark">Our Commitment</span>
        <h2>How We Support You</h2>
        <p className="section-subtitle light">
          Comprehensive care from consultation to recovery
        </p>

        <div className="support-grid">
          {[
            {
              icon: <Stethoscope />,
              text: "Free initial consultation & medical opinion",
            },
            {
              icon: <Building2 />,
              text: "Hospital & doctor selection based on your needs",
            },
            {
              icon: <FileText />,
              text: "Visa assistance & documentation support",
            },
            {
              icon: <Plane />,
              text: "Flight & hotel booking arrangements",
            },
            {
              icon: <Car />,
              text: "Airport pickup & local transportation",
            },
            {
              icon: <UserCheck />,
              text: "Dedicated patient coordinator throughout",
            },
            {
              icon: <Languages />,
              text: "Translation & interpretation services",
            },
            {
              icon: <HeartPulse />,
              text: "Post-treatment follow-up care",
            },
            {
              icon: <Headset />,
              text: "24/7 emergency support",
            },
          ].map((item, index) => (
            <div key={index} className="support-item">
              <div className="support-icon">{item.icon}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      {/* SUPPORT SECTION END */}

      {/* CTA SECTION START */}
      <section className="about-cta">
        <h2>Ready to Begin Your Healthcare Journey?</h2>
        <p>
          Let our expert team guide you to the best medical treatment in India
        </p>

        <a href="tel:+919833166697" className="cta-button">
          <Phone />
          Contact Us Today
        </a>
      </section>
      {/* CTA SECTION END */}
    </>
  );
}
