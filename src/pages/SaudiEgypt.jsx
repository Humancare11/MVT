import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./SaudiEgypt.css";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
  FaPassport,
  FaPlane,
  FaHotel,
  FaLanguage,
  FaUserMd,
  FaVideo,
  FaHeartbeat,
  FaCheck,
  FaPlus,
  FaStar,
  FaHospital,
  FaMapMarkerAlt,
} from "react-icons/fa";

import heroImage from "../departments/dept-images/saudi-cairo/best-private-hospital-cairo-egypt.webp";

import aboutImage1 from "../departments/dept-images/saudi-cairo/advanced-medical-treatment-egypt.webp";
import aboutImage2 from "../departments/dept-images/saudi-cairo/medical-tourism-turkey-services.webp";

import whyPatientAfricaImage from "../departments/dept-images/saudi-cairo/international-patient-treatment-egypt.webp";

import aboutSaudiGermanImage from "../departments/dept-images/saudi-cairo/saudi-german-hospital-cairo.webp";

import SaudiGermanImage from "../assets/hospitals/saudi-german-hospital-cairo.webp";
import CleopatraGroupImage from "../assets/hospitals/cleopatra-group-cairo-egypt.webp";
import AsselMedicalImage from "../assets/hospitals/aseel-medical-care-hospital-hurghada-egypt.webp";

import ctaImage from "../departments/dept-images/saudi-cairo/medical-treatment-egypt-consultation.webp";

import reviewsImage from "../departments/dept-images/general-category/best-reviews-for-international-treatment.webp";

const WA_URL = "https://wa.me/919833166697";

const WA = ({ size = 5 }) => (
  <FaWhatsapp className={`icon-wa icon-wa--${size}`} />
);
const Check = () => <FaCheck className="icon-check" />;

// Stars Component
const Stars = () => (
  <div className="cancer-reviews-stars">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className="cancer-reviews-star" />
    ))}
  </div>
);

const reviews = [
  {
    text: "The medical coordination for my consultation at German Saudi Hospital in Cairo was prompt and well-arranged. The international patient desk and doctors were very professional and attentive.",
    name: "Patient from Sudan",
  },
  {
    text: "Human Care helped organize my medical reports and set up appointments with specialists in Cairo. The hospital facilities were modern and the doctors explained my treatment options thoroughly.",
    name: "Patient from Kenya",
  },
  {
    text: "Traveling from Nigeria to Cairo for specialized orthopedic care was made much easier with coordination support. The hospital staff was attentive throughout our stay.",
    name: "Patient from Nigeria",
  },
  {
    text: "We received clear hospital information, transparent fee schedules, and assistance with airport transfers. The medical team in Cairo provided comprehensive care.",
    name: "Patient from Ethiopia",
  },
  {
    text: "The coordination team answered all our questions before traveling and facilitated appointments with cardiology specialists at German Saudi Hospital in Cairo.",
    name: "Patient from Tanzania",
  },
];

const HOSPITALS = [
  {
    name: "Saudi German Hospital – Cairo, Egypt",
    image: SaudiGermanImage,
    type: "Multi-Speciality Hospital",
    locations: "Cairo, Egypt",
    description:
      "German Saudi Hospital in Cairo is a private multispecialty hospital providing care across departments including cardiology, orthopedics, neurosurgery, oncology, and minimally invasive surgery. The hospital features modern surgical suites, intensive care units, advanced imaging technology, and a dedicated international patient desk assisting overseas patients.",
    specialties: [
      "Cardiology",
      "Orthopedics",
      "Neurosurgery",
      "Oncology",
      "General Surgery",
      "Emergency Care",
    ],
  },

  {
    name: "Cleopatra Hospital Group – Cairo, Egypt",
    image: CleopatraGroupImage,
    type: "Multi-Speciality Hospital Group",
    locations: "Cairo, Egypt",
    description:
      "Cleopatra Hospital Group operates multiple healthcare facilities in Cairo offering multispecialty medical and surgical services. The hospital group provides comprehensive diagnostic laboratories, diagnostic radiology, surgical theaters, and specialized clinics supporting domestic and international patients.",
    specialties: [
      "Internal Medicine",
      "Cardiology",
      "General Surgery",
      "Pediatrics",
      "Orthopedics",
      "Intensive Care",
    ],
  },

  {
    name: "Aseel Medical Care Hospital – Hurghada, Egypt",
    image: AsselMedicalImage,
    type: "Multi-Speciality Hospital",
    locations: "Hurghada, Egypt",
    description:
      "Aseel Medical Care Hospital provides inpatient and outpatient medical services, diagnostic assessments, and specialized surgical care along the Red Sea coast. The facility accommodates international patients with multilingual coordination, diagnostic imaging, and emergency medical services.",
    specialties: [
      "Emergency Medicine",
      "General Surgery",
      "Internal Medicine",
      "Orthopedics",
      "Diagnostic Imaging",
      "Patient Care",
    ],
  },
];

const faqData = [
  {
    id: 1,
    question: "Is German Saudi Hospital available for international patients?",
    answer:
      "International patients can enquire about planned medical care at German Saudi Hospital in Cairo. Availability depends on the required specialty, hospital procedures and the patient’s individual circumstances.",
  },
  {
    id: 2,
    question: "What medical treatments are available at German Saudi Hospital Cairo?",
    answer:
      "The hospital provides services across multiple medical specialties. Available departments and procedures should be confirmed with the hospital based on the patient’s medical requirements.",
  },
  {
    id: 3,
    question: "How do I arrange a consultation at German Saudi Hospital?",
    answer:
      "Human Care can assist with sharing relevant medical information and coordinating an appointment with the appropriate hospital department or specialist, subject to availability.",
  },
  {
    id: 4,
    question: "Can I share my medical reports before travelling to Egypt?",
    answer:
      "Yes. Relevant medical reports and documents can be shared for coordination and to help identify an appropriate department or specialist. Final clinical decisions are made by the treating healthcare professional.",
  },
  {
    id: 5,
    question: "How much does medical treatment at German Saudi Hospital cost?",
    answer:
      "Costs vary according to the medical condition, consultations, diagnostic tests, procedures, hospital services, specialist fees and other individual requirements. A specific estimate should be confirmed with the hospital after review of the relevant medical information.",
  },
  {
    id: 6,
    question: "How long does treatment in Cairo take?",
    answer:
      "The duration varies according to the condition, treatment plan, procedure and follow-up requirements. The treating specialist can provide more specific guidance after clinical evaluation.",
  },
  {
    id: 7,
    question: "Can Human Care help with airport pickup and accommodation?",
    answer:
      "Human Care can assist with selected airport transfers, local transportation and accommodation arrangements for international patients, subject to the requested service and availability.",
  },
  {
    id: 8,
    question: "Can I get an online doctor consultation?",
    answer:
      "If an online consultation is available through the relevant hospital or specialist, Human Care can assist with coordination. The consultation itself should be provided by the qualified healthcare professional.",
  },
  {
    id: 9,
    question: "Are treatment results guaranteed?",
    answer:
      "No medical treatment should be presented as guaranteed for every patient. Outcomes vary according to the condition, treatment approach, individual circumstances and other clinical factors.",
  },
  {
    id: 10,
    question: "Is German Saudi Hospital the best hospital in Egypt?",
    answer:
      "Hospital suitability depends on the patient’s medical requirements, specialty, available services, specialist availability and other individual factors. Patients should review verified hospital information and discuss their requirements with qualified healthcare professionals.",
  },
  {
    id: 11,
    question: "How can I contact Human Care Medical Tourism?",
    answer:
      "Use the contact options and CTA buttons on this page to discuss your medical-treatment and travel requirements with the Human Care Medical Tourism team.",
  },
];

const SaudiEgypt = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  // Generate slides (2 reviews per slide)
  const slides = [];
  for (let i = 0; i < reviews.length; i += 2) {
    slides.push(reviews.slice(i, i + 2));
  }

  const totalSlides = slides.length;

  // Slider functions
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetTimer();
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // FAQ toggle function
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Handle keyboard navigation for FAQ
  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFAQ(index);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          German Saudi Hospital Cairo Egypt | Medical Treatment for International Patients
        </title>

        <meta
          name="description"
          content="Explore medical treatment options at German Saudi Hospital in Cairo, Egypt, with support for hospital coordination, specialist appointments, medical-report sharing and international patient arrangements."
        />

        <meta
          name="keywords"
          content="
            german saudi hospital cairo egypt,
            german saudi hospital cairo,
            german saudi hospital egypt,
            medical treatment in egypt,
            medical treatment in cairo,
            german saudi hospital medical treatment,
            german saudi hospital for international patients,
            hospitals in cairo egypt,
            hospitals in egypt for international patients,
            medical tourism in egypt,
            healthcare in egypt,
            medical specialists in egypt,
            treatment cost in egypt,
            international patient services egypt,
            cairo medical treatment,
            medical tourism from africa to egypt
          "
        />

        <link
          rel="canonical"
          href="https://humancaremedicaltourism.com/german-saudi-hospital-cairo-egypt"
        />

        <meta
          property="og:title"
          content="German Saudi Hospital Cairo Egypt | Medical Treatment for International Patients"
        />
        <meta
          property="og:description"
          content="Explore medical treatment options at German Saudi Hospital in Cairo, Egypt, with support for hospital coordination, specialist appointments, medical-report sharing and international patient arrangements."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://humancaremedicaltourism.com/german-saudi-hospital-cairo-egypt"
        />
        <meta
          property="og:image"
          content="https://humancaremedicaltourism.com/og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="German Saudi Hospital Cairo Egypt | Medical Treatment for International Patients"
        />
        <meta
          name="twitter:description"
          content="Explore medical treatment options at German Saudi Hospital in Cairo, Egypt, with support for hospital coordination, specialist appointments, medical-report sharing and international patient arrangements."
        />
        <meta
          name="twitter:image"
          content="https://humancaremedicaltourism.com/og-image.jpg"
        />
      </Helmet>
      {/* ════ SECTION 1 — HERO ════ */}
      <section className="saudi-hero-section">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="German Saudi Hospital Cairo – Advanced medical treatment in Egypt"
          className="saudi-hero-bg-image"
          loading="eager"
        fetchPriority="high"
        width={740}
        height={493}
        decoding="async"
      />

        {/* Gradient Overlay */}
        <div className="saudi-hero-overlay" />

        {/* Content */}
        <div className="saudi-hero-content">
          <span className="saudi-hero-badge">
            International Patient Support in Egypt
          </span>

          <h1>
            German Saudi Hospital Cairo – Advanced Medical Treatment in Egypt for International Patients
          </h1>

          <p>
            Explore medical treatment options at German Saudi Hospital in Cairo, Egypt, with support for hospital coordination, specialist appointments, medical-report sharing and international patient arrangements.
          </p>

          <div className="saudi-hero-features">
            <ul>
              <li>Specialist Consultation Coordination</li>
              <li>Medical Report &amp; Document Sharing</li>
              <li>Hospital &amp; Department Information</li>
              <li>Estimated Treatment-Cost Information</li>
              <li>Travel &amp; Accommodation Coordination</li>
            </ul>
          </div>

          <p>
            Human Care Medical Tourism assists international patients with healthcare coordination and selected travel-related requirements based on their medical needs.
          </p>

          <div className="saudi-hero-ctas">
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-wa whatsapp-glow"
            >
              <WA size={5} /> Get Treatment Assistance
            </a>

            <a href="tel:+919833166697" className="btn-outline">
              <FaPhoneAlt /> Speak With Our Team
            </a>
          </div>
        </div>
      </section>

      {/* ════ SECTION 2 — ABOUT HEALTHCARE ════ */}
      <section className="saudi-about-section">
        <div className="saudi-about-container">
          {/* Left Side - Images */}
          <div className="saudi-about-images">
            <div className="saudi-about-image-wrapper">
              <img
                src={aboutImage1}
                alt="Medical treatment at German Saudi Hospital Cairo for international patients"
                loading="lazy"
        width={1920}
        height={1081}
        decoding="async"
      />
            </div>
            <div className="saudi-about-image-wrapper">
              <img
                src={aboutImage2}
                alt="Healthcare coordination services in Cairo Egypt"
                loading="lazy"
        width={1920}
        height={1277}
        decoding="async"
      />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="saudi-about-content">
            <div className="saudi-about-header">
              <span className="saudi-about-subtitle">
                Healthcare Coordination in Cairo
              </span>
              <h2>
                Advanced Healthcare Excellence for International Patients
              </h2>
            </div>

            <p>
              German Saudi Hospital in Cairo provides medical services across multiple specialties for patients seeking planned healthcare in Egypt.
            </p>

            <p>
              International patients can explore relevant departments and specialist services based on their medical requirements. Human Care can assist with appointment coordination, medical-document sharing and selected international patient arrangements.
            </p>

            <div className="saudi-about-features">
              <div className="saudi-about-feature-item">
                <FaCheckCircle className="saudi-feature-icon" />
                <span>Specialist consultation coordination</span>
              </div>
              <div className="saudi-about-feature-item">
                <FaCheckCircle className="turkey-feature-icon" />
                <span>Medical report and document sharing</span>
              </div>
              <div className="saudi-about-feature-item">
                <FaCheckCircle className="saudi-feature-icon" />
                <span>Hospital and department information</span>
              </div>
              <div className="saudi-about-feature-item">
                <FaCheckCircle className="turkey-feature-icon" />
                <span>Appointment assistance</span>
              </div>
              <div className="saudi-about-feature-item">
                <FaCheckCircle className="saudi-feature-icon" />
                <span>Treatment information</span>
              </div>
              <div className="saudi-about-feature-item">
                <FaCheckCircle className="turkey-feature-icon" />
                <span>International patient communication</span>
              </div>
              <div className="saudi-about-feature-item">
                <FaCheckCircle className="saudi-feature-icon" />
                <span>Travel and accommodation coordination where requested</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 3 — WHY CHOOSE ════ */}
      <section className="saudi-why-choose-section">
        <div className="saudi-why-choose-container">
          <div className="saudi-why-choose-header">
            <h2 className="saudi-why-choose-title">
              Why Choose German Saudi Hospital Cairo for Medical Treatment in Egypt?
            </h2>
            <p className="saudi-why-choose-description">
              Patients can consider German Saudi Hospital based on the medical specialty required, available departments, hospital facilities, specialist availability and international patient services. The most appropriate hospital and treatment option depends on the patient’s condition, clinical requirements and assessment by qualified healthcare professionals.
            </p>
          </div>

          <div className="saudi-why-choose-grid">
            <div className="saudi-why-choose-card">
              <div className="saudi-why-choose-number">1</div>
              <h3>Advanced Medical Facilities</h3>
              <p>
                Equipped with modern surgical operating theatres, catheterization suites, intensive care units, and comprehensive diagnostic imaging facilities.
              </p>
            </div>

            <div className="saudi-why-choose-card">
              <div className="saudi-why-choose-number">2</div>
              <h3>Experienced Medical Specialists</h3>
              <p>
                Qualified physicians, surgeons, and specialists across key medical disciplines offering structured clinical evaluations and treatment.
              </p>
            </div>

            <div className="saudi-why-choose-card">
              <div className="saudi-why-choose-number">3</div>
              <h3>Multispecialty Healthcare Services</h3>
              <p>
                Comprehensive medical departments including cardiology, orthopedics, neurosurgery, oncology, and general surgery.
              </p>
            </div>

            <div className="saudi-why-choose-card">
              <div className="saudi-why-choose-number">4</div>
              <h3>Medical Treatment in Egypt</h3>
              <p>
                Access to planned inpatient and outpatient procedures based on clinical evaluation and patient requirements.
              </p>
            </div>

            <div className="saudi-why-choose-card">
              <div className="saudi-why-choose-number">5</div>
              <h3>International Patient Support</h3>
              <p>
                Dedicated support with appointment scheduling, documentation, language communication, and hospital coordination.
              </p>
            </div>

            <div className="saudi-why-choose-card">
              <div className="saudi-why-choose-number">6</div>
              <h3>Accessible Healthcare in Cairo</h3>
              <p>
                Conveniently located in Cairo with connections to international flights, transportation networks, and accommodation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 4 — AFRICA TRUST ════ */}
      <section className="saudi-africa-trust-section">
        <div className="saudi-africa-trust-container">
          <div className="saudi-africa-trust-header">
            <h2 className="saudi-africa-trust-title">
              Why Patients from Africa Trust Cairo for Advanced Medical Treatment
            </h2>
            <p className="saudi-africa-trust-description">
              Cairo is a major healthcare destination in Egypt, and international patients may consider treatment based on hospital options, medical specialties, travel accessibility, specialist availability and individual healthcare requirements. Human Care helps patients coordinate relevant hospital information, specialist appointments and selected travel-related arrangements for planned medical visits.
            </p>
          </div>

          <div className="saudi-africa-trust-content">
            {/* Left Side - Image */}
            <div className="saudi-africa-trust-image">
              <img
                src={whyPatientAfricaImage}
                alt="International patients receiving medical treatment coordination in Cairo Egypt"
                loading="lazy"
        width={740}
        height={463}
        decoding="async"
      />
            </div>

            {/* Right Side - Points */}
            <div className="saudi-africa-trust-points">
              <div className="saudi-trust-point">
                <div className="saudi-trust-point-number">1</div>
                <div className="saudi-trust-point-content">
                  <h3>Medical and Specialist Options</h3>
                  <p>
                    Explore available departments and specialists according to the required treatment area.
                  </p>
                </div>
              </div>

              <div className="saudi-trust-point">
                <div className="saudi-trust-point-number">2</div>
                <div className="saudi-trust-point-content">
                  <h3>International Patient Assistance</h3>
                  <p>
                    Support with reports, appointments and communication throughout the medical visit.
                  </p>
                </div>
              </div>

              <div className="saudi-trust-point">
                <div className="saudi-trust-point-number">3</div>
                <div className="saudi-trust-point-content">
                  <h3>Modern Hospital Facilities</h3>
                  <p>
                    Access to hospital departments equipped with diagnostic imaging and surgical infrastructure.
                  </p>
                </div>
              </div>

              <div className="saudi-trust-point">
                <div className="saudi-trust-point-number">4</div>
                <div className="saudi-trust-point-content">
                  <h3>Treatment Information</h3>
                  <p>
                    Provide factual information about available medical services, procedures, and clinical options.
                  </p>
                </div>
              </div>

              <div className="saudi-trust-point">
                <div className="saudi-trust-point-number">5</div>
                <div className="saudi-trust-point-content">
                  <h3>Airport and Local Transfer Support</h3>
                  <p>
                    Assistance with selected transportation arrangements where available for patient convenience.
                  </p>
                </div>
              </div>

              <div className="saudi-trust-point">
                <div className="saudi-trust-point-number">6</div>
                <div className="saudi-trust-point-content">
                  <h3>Support for International Patients</h3>
                  <p>
                    Structured coordination throughout the planned medical journey from inquiry to departure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 5 — INTERNATIONAL PATIENT SERVICES ════ */}
      <section className="saudi-services-section">
        <div className="saudi-services-container">
          <div className="saudi-services-header">
            <h2 className="saudi-services-title">
              International Patient Services for Safe &amp; Comfortable Treatment in Cairo, Egypt
            </h2>
            <p className="saudi-services-description">
              Human Care provides coordination support for international patients travelling to Cairo for planned medical care. Services are arranged according to the patient’s requirements and the availability of the hospital and selected providers.
            </p>
          </div>

          <div className="saudi-services-grid">
            <div className="saudi-service-card">
              <div className="saudi-service-icon">
                <FaUserMd />
              </div>
              <h3>Medical Advice &amp; Assistance</h3>
              <p>
                Coordination support for communicating medical requirements with the appropriate healthcare provider.
              </p>
            </div>

            <div className="saudi-service-card">
              <div className="saudi-service-icon">
                <FaPlane />
              </div>
              <h3>Airport Pick-up &amp; Transportation</h3>
              <p>
                Assistance with airport reception and local transportation arrangements where available in Cairo.
              </p>
            </div>

            <div className="saudi-service-card">
              <div className="saudi-service-icon">
                <FaHotel />
              </div>
              <h3>Medical Accommodation Assistance</h3>
              <p>
                Support with identifying suitable accommodation options based on the patient’s requirements and location.
              </p>
            </div>

            <div className="saudi-service-card">
              <div className="saudi-service-icon">
                <FaPassport />
              </div>
              <h3>Travel &amp; Local Support</h3>
              <p>
                Coordination of selected practical arrangements, scheduling, and local guidance during the medical visit.
              </p>
            </div>

            <div className="saudi-service-card">
              <div className="saudi-service-icon">
                <FaVideo />
              </div>
              <h3>Online Doctor Consultation</h3>
              <p>
                Assistance with coordinating online specialist consultations where offered by qualified healthcare professionals.
              </p>
            </div>

            <div className="saudi-service-card">
              <div className="saudi-service-icon">
                <FaHeartbeat />
              </div>
              <h3>Follow-up Care After Treatment</h3>
              <p>
                Coordination of follow-up communication, medical documentation, and remote reviews where applicable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 6 — ABOUT HOSPITAL PARALLAX ════ */}
      <section
        className="saudi-about-parallax-section"
        style={{ backgroundImage: `url(${aboutSaudiGermanImage})` }}
      >
        <div className="saudi-parallax-overlay"></div>
        <div className="saudi-parallax-content">
          <div className="saudi-parallax-container">
            <h2 className="saudi-parallax-title">
              About German Saudi Hospital Cairo – Trusted Healthcare Excellence in Egypt
            </h2>
            <p className="saudi-parallax-text">
              German Saudi Hospital Cairo is a prominent tertiary care hospital in Egypt, providing multispecialty clinical services for domestic and international patients. Equipped with modern operating theatres, intensive care units, advanced diagnostic imaging, and catheterization laboratories, the hospital encompasses departments including cardiology, orthopedics, neurosurgery, oncology, and general surgery. With a dedicated international patient support desk, the hospital facilitates planned medical consultations, document coordination, and comprehensive clinical care for patients traveling from Africa and across the region.
            </p>
          </div>
        </div>
      </section>

      {/* ════ SECTION 7 — HOSPITAL NETWORK ════ */}
      <section className="hn-section">
        <div className="hn-container">
          <div className="hn-title-wrap">
            <span className="hn-label">Our Hospital Network</span>
            <h2 className="hn-heading">Hospital Options in Egypt</h2>
            <p className="hn-subtitle">
              Explore accredited hospital options in Egypt offering multidisciplinary medical services, modern surgical infrastructure, and dedicated support for international patients.
            </p>
          </div>
          <div className="hn-grid">
            {HOSPITALS.map((h, i) => (
              <div className="hn-card" key={i}>
                <div
                  className="hn-card-photo"
                  style={{ backgroundImage: `url(${h.image})` }}
                >
                  <div className="hn-card-photo-overlay" />
                  <div className="hn-card-photo-content">
                    <div className="hn-card-icon">
                      <FaHospital />
                    </div>
                    <span className="hn-card-type-label">{h.type}</span>
                  </div>
                </div>

                <div className="hn-card-info">
                  <h3 className="hn-card-name">{h.name}</h3>
                  <p className="hn-card-location">
                    <FaMapMarkerAlt className="hn-card-location-icon" />
                    {h.locations}
                  </p>
                  <p className="hn-card-desc">{h.description}</p>

                  <div className="hn-card-tags">
                    {h.specialties.map((spec, j) => (
                      <span className="hn-tag" key={j}>
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ SECTION 8 — Client Reviews ════ */}
      <section className="general-reviews-section">
        <div className="general-reviews-content">
          <h2 className="general-reviews-heading">Our Clients' Reviews</h2>
          <p
            style={{
              color: "#64748b",
              margin: "8px 0 24px 0",
              fontSize: "15px",
            }}
          >
            Read experiences shared by patients who have used Human Care’s
            medical-tourism coordination services.
          </p>

          {/* Slider wrapper */}
          <div className="general-reviews-slider-wrapper">
            <div
              className="general-reviews-slider-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((pair, slideIndex) => (
                <div key={slideIndex} className="general-reviews-slide">
                  {pair.map((r, cardIndex) => (
                    <div key={cardIndex} className="general-reviews-card">
                      <Stars />
                      <p className="general-reviews-card-text">{r.text}</p>
                      <p
                        className="general-reviews-card-name"
                        style={{
                          marginTop: "12px",
                          fontWeight: "600",
                          color: "#0284c7",
                          fontSize: "14px",
                        }}
                      >
                        {r.name}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="general-reviews-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`general-reviews-dot ${currentSlide === index ? "active" : ""}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="general-reviews-image-wrapper">
          <img
            src={reviewsImage}
            alt="International patient experiences with medical treatment in Egypt"
            className="general-reviews-image"
        width={1200}
        height={800}
        decoding="async"
      />
        </div>
      </section>

      {/* ════ SECTION 9 — FAQ ════ */}
      <section className="general-faq-section" aria-labelledby="faq-heading">
        <div className="general-faq-container">
          {/* Section Header */}
          <div className="general-faq-header">
            <span className="general-faq-badge">
              Frequently Asked Questions About German Saudi Hospital and Medical Treatment in Egypt
            </span>
          </div>

          {/* FAQ Accordion */}
          <div className="general-faq-list">
            {faqData.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={faq.id}
                  className={`general-faq-item ${isActive ? "active" : ""}`}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="general-faq-question"
                    aria-expanded={isActive}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <h3
                      id={`faq-question-${faq.id}`}
                      className="general-faq-question-text"
                    >
                      {faq.question}
                    </h3>
                    <FaPlus
                      className={`general-faq-icon ${isActive ? "rotate" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`general-faq-answer ${isActive ? "open" : ""}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                  >
                    <div className="general-faq-answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════ SECTION 10 — CTA ════ */}
      <section className="general-cta-section">
        {/* Background Image */}
        <img
          src={ctaImage}
          alt="Discuss your medical treatment requirements with Human Care Medical Tourism"
          className="general-cta-bg-image"
          loading="lazy"
        width={740}
        height={313}
        decoding="async"
      />

        {/* Gradient Overlay */}
        <div className="general-cta-overlay" />

        {/* Content Container */}
        <div className="general-cta-container">
          <div className="general-cta-content">
            <span className="general-cta-badge">
              International Patient Assistance
            </span>

            <h2 className="general-cta-title">
              Advanced Medical Treatment, Experienced Specialists, and Dedicated International Patient Support for Patients Travelling from Africa to Egypt
            </h2>

            <p className="general-cta-subtitle">
              Discuss your medical requirements with Human Care Medical Tourism and receive assistance with hospital information, specialist coordination, appointments and international patient services in Cairo.
            </p>

            <div className="general-cta-benefits-list">
              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>Hospital and Department Information</span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>Specialist Appointment Coordination</span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>Medical Report Sharing Support</span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>Transparent Cost Guidance</span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>Travel and Accommodation Assistance</span>
              </div>
              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>Post-Procedure Communication Support</span>
              </div>
            </div>

            <div className="general-hero-ctas">
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-wa whatsapp-glow"
              >
                <WA size={5} /> Get Treatment Assistance
              </a>

              <a href="tel:+919833166697" className="btn-outline">
                <FaPhoneAlt /> Speak With Our Team
              </a>
            </div>

            <p
              style={{
                marginTop: "24px",
                fontSize: "12px",
                color: "#94a3b8",
                lineHeight: "1.6",
                maxWidth: "680px",
              }}
            >
              *Disclaimer: Human Care Medical Tourism provides medical travel and appointment coordination services. Medical advice, diagnosis, and treatment plans are provided solely by licensed physicians and authorized healthcare institutions in Egypt. Treatment outcomes vary according to individual condition and clinical circumstances.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SaudiEgypt;
