import React, { useState, useEffect, useRef } from "react";
import "./GhanaLandingPage.css";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaHospital,
  FaUserMd,
  FaHandsHelping,
  FaPlane,
  FaCalendarAlt,
  FaUsers,
  FaComments,
  FaHeadset,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaGlobe,
  FaAward,
  FaCheckCircle,
  FaHeartbeat,
  FaBrain,
  FaRibbon,
  FaBone,
  FaEye,
  FaVenus,
  FaBaby,
  FaStethoscope,
  FaPassport,
  FaHotel,
  FaLanguage,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaPlus,
  FaTimes,
} from "react-icons/fa";

import { GiKidneys, GiStomach, GiMale, GiDna2 } from "react-icons/gi";

import { ArrowRight } from "lucide-react";

// Assets
import heroGhanaImage from "../assets/departments-image/medical-tourism-ghana-international-healthcare.webp.webp";
import nabhCertImage from "../assets/departments-image/NABH Accredited hospital quality and patient safety certification logo.webp";
import ghanaMapImage from "../assets/departments-image/Ghana-map.webp";

import apolloImage from "../departments/dept-images/general-category/apollo-hospital-india.webp";
import fortisImage from "../departments/dept-images/general-category/multi-specialty-oncology-hospital-india.webp";
import maxImage from "../departments/dept-images/general-category/top-oncology-hospital-india.webp";
import manipalImage from "../departments/dept-images/general-category/best-manipal-hospital-for-medical-tourism.webp";

import ThumbnailImage from "../departments/dept-images/general-category/best-reviews-for-international-treatment.webp";
import ctaImage from "../departments/dept-images/general-category/best-medical-treatment-in-india-for-international-patient.webp";

import VishnuAgarwalImage from "../departments/dept-images/oncology/vishnu-agarwal.webp";
import VivekAllahbadiaImage from "../departments/dept-images/orthopedic/Dr.-Vivek-Allahbadia.webp";
import NareshTrehanImage from "../departments/dept-images/doctors/naresh_trehan.webp";
import KRBalakrishnanImage from "../departments/dept-images/doctors/kr_balakrishnan.webp";
import MahipalSachdevImage from "../departments/dept-images/EyeSurgen/Dr-Mahipal-S-Sachdev.webp";
import CSharathBabuImage from "../departments/dept-images/dentist/c-sharath-babu.webp";

const WA_NUMBER = "919833166697";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Hello%2C%20I%20am%20contacting%20from%20Ghana%20for%20international%20medical%20travel%20support.`;
const CALL_URL = "tel:+919833166697";

// Stars Component for Reviews
const Stars = () => (
  <div className="ghana-reviews-stars">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className="ghana-reviews-star" />
    ))}
  </div>
);

// Review testimonials
const reviews = [
  {
    text: "Humancare arranged our medical travel from Accra to New Delhi for my father's cardiac surgery. From visa assistance to hospital appointments, everything was seamless and reassuring.",
    name: "Kwame A., Accra",
  },
  {
    text: "We travelled from Kumasi for advanced oncology treatment. The hospital options and specialist coordination exceeded our expectations. Truly grateful for the caring support!",
    name: "Abena M., Kumasi",
  },
  {
    text: "Finding reliable international healthcare was challenging until we reached out. They coordinated our entire orthopedic consultation and hospital stay smoothly.",
    name: "Emmanuel O., Takoradi",
  },
  {
    text: "The medical visa support and airport assistance in India made our journey stress-free. Excellent service for international patients travelling from Ghana.",
    name: "Kofi B., Cape Coast",
  },
  {
    text: "Clear communication at every stage of the journey. The doctors were world-class and the dedicated patient coordinator was available 24/7.",
    name: "Akosua S., Tamale",
  },
  {
    text: "Transparent information about accredited hospitals and top specialists. Highly recommended for any family in Ghana planning healthcare travel abroad.",
    name: "David K., Accra",
  },
];

// Specialist doctors data
const DOCTORS = [
  {
    name: "Dr. Naresh Trehan",
    specialty: "Cardiovascular & Cardiothoracic Surgeon",
    experience: "40+ Years Experience",
    education:
      "MBBS, Diplomate American Board of Surgery & Cardiothoracic Surgery",
    desc: "Dr. Naresh Trehan is one of the world's most renowned Cardiovascular and Cardiothoracic Surgeons with over 48,000 successful cardiac surgeries. He is Chairman of Medanta - The Medicity and has trained extensively in the USA, providing advanced surgical solutions for complex heart conditions.",
    photoUrl: NareshTrehanImage,
  },
  {
    name: "Dr. Vishnu Agarwal",
    specialty: "Surgical Oncologist & Robotic Cancer Surgeon",
    experience: "15+ Years Experience",
    education: "MBBS, MS - General Surgery, Surgical Oncology Fellowship",
    desc: "Dr. Vishnu Agarwal is a highly accomplished Surgical Oncologist specializing in advanced robotic and minimally invasive cancer surgeries. He has treated over 6,000 national and international patients with exceptional outcomes.",
    photoUrl: VishnuAgarwalImage,
  },
  {
    name: "Dr. K R Balakrishnan",
    specialty: "Heart Transplant & Cardiothoracic Surgeon",
    experience: "40+ Years Experience",
    education: "MBBS, MS (General Surgery), MCh (Cardiothoracic Surgery)",
    desc: "Dr. K R Balakrishnan is a global pioneer in heart transplantation and ventricular assist devices (VAD), having performed over 190 heart transplants and 18,000+ cardiac surgeries with world-leading success rates.",
    photoUrl: KRBalakrishnanImage,
  },
  {
    name: "Dr. Vivek Allahbadia",
    specialty: "Orthopaedic & Robotic Joint Replacement Specialist",
    experience: "28+ Years Experience",
    education: "MBBS, D.Orth, MS, FCPS, MCh Orthopaedics (UK)",
    desc: "Dr. Vivek Allahbadia is an internationally trained joint replacement surgeon specializing in robotic knee, total hip, and revision surgeries, helping patients regain painless mobility.",
    photoUrl: VivekAllahbadiaImage,
  },
  {
    name: "Prof. Dr. Mahipal S Sachdev",
    specialty: "Ophthalmologist, Cataract & Refractive Surgeon",
    experience: "42+ Years Experience",
    education: "MBBS, MD, MS, DNB, FRCS, FICO (UK)",
    desc: "Padma Shri award-winning ophthalmologist and visionary leader in advanced laser eye surgery, cornea transplants, and cataract treatments with four decades of surgical excellence.",
    photoUrl: MahipalSachdevImage,
  },
  {
    name: "Dr. C. Sharath Babu",
    specialty: "Dental Implantologist & Prosthodontist",
    experience: "15+ Years Experience",
    education: "BDS, MDS, FICOI",
    desc: "Dr. C. Sharath Babu specializes in advanced full-mouth rehabilitation, All-on-4 dental implants, and cosmetic smile designs using cutting-edge digital dentistry protocols.",
    photoUrl: CSharathBabuImage,
  },
];

// Hospital destinations
const DESTINATIONS = [
  {
    city: "New Delhi",
    title: "Multi-Specialty Healthcare Hub",
    description:
      "Home to premier JCI & NABH accredited multi-specialty hospital institutions offering world-class cardiology, oncology, and robotic surgery.",
    hospitals: "Apollo Hospitals, Fortis Escorts, Max Healthcare",
    image: apolloImage,
  },
  {
    city: "Mumbai",
    title: "Advanced Medical Centers",
    description:
      "Leading medical institutions with globally recognized specialists in organ transplants, oncology, neurology, and advanced orthopedics.",
    hospitals: "Fortis Healthcare, Kokilaben, Global Hospital",
    image: fortisImage,
  },
  {
    city: "Chennai",
    title: "Established Specialist Networks",
    description:
      "Renowned as a primary healthcare capital for complex cardiac surgeries, organ transplants, and advanced joint replacements.",
    hospitals: "Apollo Main Greams Road, MGM Healthcare, MIOT",
    image: maxImage,
  },
  {
    city: "Bengaluru",
    title: "Advanced Innovation & Technology",
    description:
      "High-tech healthcare destination featuring specialized cardiac, neurological, oncology, and robotic surgical excellence.",
    hospitals: "Manipal Hospitals, Narayana Health, Aster CMI",
    image: manipalImage,
  },
];

// Medical Specialties list
const SPECIALTIES = [
  {
    icon: FaHeartbeat,
    name: "Cardiology",
    description: "Heart care services and specialist options.",
  },
  {
    icon: FaBrain,
    name: "Neurology",
    description: "Neurological healthcare services.",
  },
  {
    icon: FaRibbon,
    name: "Oncology",
    description: "Cancer care service and specialist options.",
  },
  {
    icon: FaBone,
    name: "Orthopaedics",
    description: "Bone and joint healthcare services.",
  },
  {
    icon: GiKidneys,
    name: "Nephrology",
    description: "Kidney care service options.",
  },
  {
    icon: GiStomach,
    name: "Gastroenterology",
    description: "Digestive healthcare services.",
  },
  {
    icon: FaEye,
    name: "Ophthalmology",
    description: "Eye care and vision services.",
  },
  {
    icon: GiMale,
    name: "Urology",
    description: "Urology service and specialist options.",
  },
  {
    icon: FaVenus,
    name: "Gynaecology",
    description: "Women's healthcare services.",
  },
  {
    icon: FaBaby,
    name: "Paediatrics",
    description: "Healthcare services for children.",
  },
  {
    icon: FaStethoscope,
    name: "Internal Medicine",
    description: "General specialist healthcare options.",
  },
  {
    icon: GiDna2,
    name: "Endocrinology",
    description: "Hormone and metabolic healthcare services.",
  },
];

// Ghana FAQs
const FAQ_ITEMS = [
  {
    id: 1,
    question: "How does the healthcare travel coordination process work?",
    answer:
      "Our dedicated medical travel team reviews your medical reports, discusses your healthcare preferences, and connects you with accredited hospitals and experienced specialists. We provide a detailed treatment plan, estimated costs, and guide you through medical visa issuance, flight bookings, hospital appointments, and local stay coordination.",
  },
  {
    id: 2,
    question: "Can I explore JCI or NABH accredited hospital options?",
    answer:
      "Yes. We collaborate with internationally recognized hospitals holding JCI (Joint Commission International) and NABH (National Accreditation Board for Hospitals & Healthcare Providers) accreditations. Accreditation details and facility profiles are shared upfront for complete transparency.",
  },
  {
    id: 3,
    question:
      "Can you help with hospital appointments and doctor consultations?",
    answer:
      "Yes. We facilitate direct preliminary assessments and second opinions with leading senior doctors. Once you confirm travel, your in-person hospital consultations, diagnostic tests, and treatment schedule are pre-arranged before your departure from Ghana.",
  },
  {
    id: 4,
    question: "Can family members travel with the patient?",
    answer:
      "Yes. Family members and medical attendants can accompany the patient. We assist with medical attendant visas, comfortable hotel/guest house accommodation near the hospital, and local logistics for accompanying companions.",
  },
  {
    id: 5,
    question:
      "What medical visa assistance is provided for patients from Ghana?",
    answer:
      "We obtain official Medical Visa Invitation Letters directly from the treating hospital. We also provide full documentation guidance to make your visa application with the respective embassy smooth and expedited.",
  },
  {
    id: 6,
    question: "Can accommodation and airport transfers be arranged?",
    answer:
      "Yes. Our ground support team coordinates airport reception, private transportation to your hotel or hospital, and assists with comfortable lodging options tailored to your family's budget and convenience.",
  },
  {
    id: 7,
    question:
      "Can I get a preliminary medical opinion before traveling from Ghana?",
    answer:
      "Yes. You can submit recent medical reports, test results, and discharge summaries through our secure platform or WhatsApp. Our medical team will coordinate with specialists to provide an expert review and treatment quotation prior to your travel.",
  },
  {
    id: 8,
    question: "How do I start my healthcare inquiry?",
    answer:
      "Simply click 'WhatsApp Consultation' or 'Contact Medical Coordinator'. A dedicated medical travel coordinator will contact you promptly to understand your medical needs and walk you through the next steps.",
  },
];

const GhanaLandingPage = () => {
  // Modal State for Specialists
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Review Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState(null);

  // Group reviews into pairs for slider
  const slides = [];
  for (let i = 0; i < reviews.length; i += 2) {
    slides.push(reviews.slice(i, i + 2));
  }
  const totalSlides = slides.length;

  const resetReviewTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetReviewTimer();
  };

  useEffect(() => {
    resetReviewTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [totalSlides]);

  // Modal ESC handler
  const closeModal = () => setSelectedDoctor(null);
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (selectedDoctor) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [selectedDoctor]);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <>
      <div className="ghana-landing-wrapper">
        <Helmet>
          <title>
            Medical Value Treatment & Healthcare Travel Support for Ghana | JCI
            & NABH Options
          </title>
          <meta
            name="description"
            content="Explore world-class healthcare options and dedicated medical travel support for patients and families travelling from Ghana (Accra, Kumasi, Tamale, Takoradi, Cape Coast). JCI & NABH accredited hospitals, top specialists, visa and travel assistance."
          />
          <meta
            name="keywords"
            content="medical travel ghana, healthcare travel support ghana, medical tourism ghana to india, accra medical travel, kumasi healthcare, NABH JCI hospital options, international patient support ghana"
          />
          <link
            rel="canonical"
            href="https://humancaremedicaltourism.com/medical-value-treatment-in-ghana"
          />
        </Helmet>

        {/* ═══════════════════════════════════════════
          1. HERO SECTION (Full Background Image + Left Gradient)
      ═══════════════════════════════════════════ */}
        <section className="ghana-hero-bg-section">
          {/* Full Background Image */}
          <img
            src={heroGhanaImage}
            alt="International Healthcare & Medical Travel Support for Ghana"
            className="ghana-hero-full-bg-image"
            fetchPriority="high"
            loading="eager"
          />

          {/* Gradient Overlay */}
          <div className="ghana-hero-full-overlay" />

          {/* Hero Content Container */}
          <div className="ghana-container ghana-hero-container-relative">
            <div className="ghana-hero-content-left">
              <span className="ghana-hero-pill-badge">
                TRUSTED HEALTHCARE SUPPORT FOR GHANA
              </span>

              <h1 className="ghana-hero-main-title">
                Your Trusted Path to World-Class Healthcare Abroad
              </h1>

              <div className="ghana-hero-accent-sub">
                INTERNATIONAL HEALTHCARE & MEDICAL TRAVEL SUPPORT FOR GHANA
              </div>

              <p className="ghana-hero-desc-white">
                Humancare World Wide helps patients and families from Accra,
                Kumasi, Tamale, Takoradi, and Cape Coast connect with premier
                international hospitals for advanced cardiology, cancer care,
                orthopedic surgery, neurology, and organ transplants. We guide
                you through every step with dedicated travel and specialist
                coordination.
              </p>

              {/* Badges Box (JCI & NABH) */}
              <div className="ghana-hero-badges-pill">
                <div className="ghana-badge-item">
                  <div className="ghana-badge-icon-gold">
                    <FaAward />
                  </div>
                  <div className="ghana-badge-text-white">
                    <strong>JCI</strong>
                    <span>ACCREDITED HOSPITALS</span>
                  </div>
                </div>

                <div className="ghana-badge-divider-white" />

                <div className="ghana-badge-item">
                  <div className="ghana-badge-icon-nabh">
                    <img
                      src={nabhCertImage}
                      alt="NABH Accredited Certificate"
                      className="ghana-nabh-img-icon"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    <FaShieldAlt className="ghana-nabh-fallback-icon" />
                  </div>
                  <div className="ghana-badge-text-white">
                    <strong>NABH</strong>
                    <span>ACCREDITED HOSPITALS</span>
                  </div>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="ghana-hero-buttons-row">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="ghana-btn-green-wa whatsapp-glow"
                >
                  <FaWhatsapp className="ghana-btn-icon-wa" /> WhatsApp
                  Consultation
                </a>

                <a href={CALL_URL} className="ghana-btn-red-call">
                  <FaPhoneAlt className="ghana-btn-icon-phone" /> Contact
                  Medical Coordinator
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Feature Cards Below Hero */}
        <section className="ghana-hero-features-section">
          <div className="ghana-container">
            <div className="ghana-hero-features-row">
              <div className="ghana-feature-card">
                <div className="ghana-feature-icon">
                  <FaHospital />
                </div>
                <h3 className="ghana-feature-title">
                  JCI & NABH Hospital Options
                </h3>
                <p className="ghana-feature-desc">
                  Explore information about accredited healthcare providers and
                  hospital options.
                </p>
              </div>

              <div className="ghana-feature-card">
                <div className="ghana-feature-icon">
                  <FaUserMd />
                </div>
                <h3 className="ghana-feature-title">Specialist Network</h3>
                <p className="ghana-feature-desc">
                  Explore relevant medical departments and experienced
                  specialists.
                </p>
              </div>

              <div className="ghana-feature-card">
                <div className="ghana-feature-icon">
                  <FaHandsHelping />
                </div>
                <h3 className="ghana-feature-title">
                  International Patient Support
                </h3>
                <p className="ghana-feature-desc">
                  Support for patients and families planning healthcare travel.
                </p>
              </div>

              <div className="ghana-feature-card">
                <div className="ghana-feature-icon">
                  <FaPlane />
                </div>
                <h3 className="ghana-feature-title">
                  Travel & Stay Assistance
                </h3>
                <p className="ghana-feature-desc">
                  Guidance for appointments, travel and accommodation
                  arrangements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
          2. WHY CHOOSE US
      ═══════════════════════════════════════════ */}
        <section className="ghana-section ghana-why-choose-section">
          <div className="ghana-container">
            <div className="ghana-section-header text-center">
              <span className="ghana-section-tag"> WHY CHOOSE US</span>
              <h2 className="ghana-section-title">
                Healthcare Travel Support Designed Around Your Journey
              </h2>
              <p className="ghana-section-subtitle">
                Planning healthcare services abroad involves several decisions.
                Our team helps patients and families from Ghana understand
                available options and coordinate important parts of their
                healthcare travel journey.
              </p>
            </div>

            <div className="ghana-why-cards-grid">
              <div className="ghana-why-card">
                <div className="ghana-why-icon">
                  <FaHospital />
                </div>
                <h4 className="ghana-why-title">
                  Hospital & Specialist Options
                </h4>
                <p className="ghana-why-text">
                  Explore hospitals, departments and specialist options based on
                  your requirements.
                </p>
              </div>

              <div className="ghana-why-card">
                <div className="ghana-why-icon">
                  <FaCalendarAlt />
                </div>
                <h4 className="ghana-why-title">Appointment Coordination</h4>
                <p className="ghana-why-text">
                  Get assistance with appointment-related communication and
                  planning.
                </p>
              </div>

              <div className="ghana-why-card">
                <div className="ghana-why-icon">
                  <FaPlane />
                </div>
                <h4 className="ghana-why-title">Travel Support</h4>
                <p className="ghana-why-text">
                  Guidance for travel, stay and related arrangements.
                </p>
              </div>

              <div className="ghana-why-card">
                <div className="ghana-why-icon">
                  <FaUsers />
                </div>
                <h4 className="ghana-why-title">Patient & Family Assistance</h4>
                <p className="ghana-why-text">
                  Support for patients and accompanying family members.
                </p>
              </div>

              <div className="ghana-why-card">
                <div className="ghana-why-icon">
                  <FaComments />
                </div>
                <h4 className="ghana-why-title">Clear Communication</h4>
                <p className="ghana-why-text">
                  Help with coordination and next-step information.
                </p>
              </div>

              <div className="ghana-why-card">
                <div className="ghana-why-icon">
                  <FaHeadset />
                </div>
                <h4 className="ghana-why-title">Dedicated Journey Support</h4>
                <p className="ghana-why-text">
                  Assistance through important stages of your healthcare travel
                  planning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
          3. GHANA PINPOINT SECTION
      ═══════════════════════════════════════════ */}
        <section className="ghana-section ghana-pinpoint-section">
          <div className="ghana-container">
            <div className="ghana-pinpoint-grid">
              {/* Left: Interactive Graphic Map */}
              <div className="ghana-map-graphic-box">
                <div className="ghana-svg-map-wrapper">
                  <img
                    src={ghanaMapImage}
                    className="ghana-map-image"
                    alt="Map of Ghana showing major cities and international healthcare travel support"
                  />
                  <svg
                    viewBox="0 0 400 480"
                    className="ghana-svg-map ghana-legacy-map"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Ghana country shape */}
                    <path
                      d="M 160 30 
                       C 210 25, 260 45, 270 90 
                       C 285 140, 275 180, 290 230 
                       C 305 280, 310 320, 295 370 
                       C 280 410, 250 430, 210 435 
                       C 170 440, 130 435, 100 410 
                       C 70 380, 85 320, 75 270 
                       C 65 220, 80 160, 95 110 
                       C 110 60, 130 35, 160 30 Z"
                      className="ghana-map-body"
                    />

                    {/* Flight curve toward top-right */}
                    <path
                      d="M 235 390 Q 320 280 370 110"
                      className="ghana-flight-trail"
                    />
                    {/* Airplane icon on flight path */}
                    <g transform="translate(365, 100) rotate(-40)">
                      <path
                        d="M12 2a2 2 0 0 1 2 2v6.5l8 4.5v2.5l-8-2.5V20l2.5 1.5V23L12 21.5 7.5 23v-1.5L10 20v-4.5L2 18v-2.5l8-4.5V4a2 2 0 0 1 2-2z"
                        fill="#061656"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                      />
                    </g>

                    {/* Location Marker: Tamale */}
                    <g
                      className="ghana-pin-group"
                      transform="translate(180, 140)"
                    >
                      <circle cx="0" cy="0" r="14" className="ghana-pin-glow" />
                      <circle cx="0" cy="0" r="8" fill="#DC3545" />
                      <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" />
                      <text x="14" y="4" className="ghana-pin-label">
                        Tamale
                      </text>
                    </g>

                    {/* Location Marker: Kumasi */}
                    <g
                      className="ghana-pin-group"
                      transform="translate(160, 270)"
                    >
                      <circle cx="0" cy="0" r="14" className="ghana-pin-glow" />
                      <circle cx="0" cy="0" r="8" fill="#DC3545" />
                      <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" />
                      <text x="14" y="4" className="ghana-pin-label">
                        Kumasi
                      </text>
                    </g>

                    {/* Location Marker: Takoradi */}
                    <g
                      className="ghana-pin-group"
                      transform="translate(115, 395)"
                    >
                      <circle cx="0" cy="0" r="14" className="ghana-pin-glow" />
                      <circle cx="0" cy="0" r="8" fill="#DC3545" />
                      <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" />
                      <text
                        x="-12"
                        y="18"
                        textAnchor="end"
                        className="ghana-pin-label"
                      >
                        Takoradi
                      </text>
                    </g>

                    {/* Location Marker: Cape Coast */}
                    <g
                      className="ghana-pin-group"
                      transform="translate(170, 415)"
                    >
                      <circle cx="0" cy="0" r="14" className="ghana-pin-glow" />
                      <circle cx="0" cy="0" r="8" fill="#DC3545" />
                      <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" />
                      <text x="12" y="16" className="ghana-pin-label">
                        Cape Coast
                      </text>
                    </g>

                    {/* Location Marker: Accra */}
                    <g
                      className="ghana-pin-group"
                      transform="translate(245, 390)"
                    >
                      <circle cx="0" cy="0" r="16" className="ghana-pin-glow" />
                      <circle cx="0" cy="0" r="9" fill="#DC3545" />
                      <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
                      <text x="14" y="4" className="ghana-pin-label-accent">
                        Accra
                      </text>
                    </g>
                  </svg>
                </div>
              </div>

              {/* Right: Content & List */}
              <div className="ghana-pinpoint-content">
                <span className="ghana-section-tag">
                  SUPPORTING HEALTHCARE TRAVEL FROM GHANA
                </span>
                <h2 className="ghana-pinpoint-heading">
                  Supporting Healthcare Travel From Ghana
                </h2>
                <p className="ghana-pinpoint-desc">
                  We support individuals and families across Ghana who are
                  exploring international healthcare and medical travel options
                  with end-to-end guidance and dedicated remote assistance.
                </p>

                <div className="ghana-locations-list-grid">
                  <div className="ghana-location-item">
                    <div className="ghana-loc-pin">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h5 className="ghana-loc-name">Accra</h5>
                      <p className="ghana-loc-desc">
                        Support for inquiries from Greater Accra and nearby
                        areas.
                      </p>
                    </div>
                  </div>

                  <div className="ghana-location-item">
                    <div className="ghana-loc-pin">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h5 className="ghana-loc-name">Takoradi</h5>
                      <p className="ghana-loc-desc">
                        Support for healthcare travel planning and inquiries.
                      </p>
                    </div>
                  </div>

                  <div className="ghana-location-item">
                    <div className="ghana-loc-pin">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h5 className="ghana-loc-name">Kumasi</h5>
                      <p className="ghana-loc-desc">
                        Healthcare travel information and coordination support.
                      </p>
                    </div>
                  </div>

                  <div className="ghana-location-item">
                    <div className="ghana-loc-pin">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h5 className="ghana-loc-name">Cape Coast</h5>
                      <p className="ghana-loc-desc">
                        Guidance for exploring hospitals and specialist options.
                      </p>
                    </div>
                  </div>

                  <div className="ghana-location-item">
                    <div className="ghana-loc-pin">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h5 className="ghana-loc-name">Tamale</h5>
                      <p className="ghana-loc-desc">
                        Assistance for patients and families exploring options
                        abroad.
                      </p>
                    </div>
                  </div>

                  <div className="ghana-location-item">
                    <div className="ghana-loc-pin">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h5 className="ghana-loc-name">Nationwide Support</h5>
                      <p className="ghana-loc-desc">
                        Remote coordination for inquiries from across Ghana.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="ghana-pill-badge-cta">
                <span className="ghana-pill-text">SUPPORTING PATIENTS ACROSS GHANA</span>
              </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
          4. ACCREDITED HOSPITAL SECTION
      ═══════════════════════════════════════════ */}
        <section className="ghana-section ghana-accredited-section">
          <div className="ghana-container">
            <div className="ghana-section-header text-center">
              <span className="ghana-section-tag">
                EXPLORE JCI & NABH ACCREDITED HOSPITAL OPTIONS
              </span>
              <h2 className="ghana-section-title">
                Explore JCI & NABH Accredited Hospital Options
              </h2>
              <p className="ghana-section-subtitle">
                Explore healthcare options through established hospitals and
                specialist networks. Depending on availability and individual
                requirements, options may include JCI-accredited or
                NABH-accredited healthcare providers.
              </p>
            </div>

            <div className="ghana-accredited-grid">
              <div className="ghana-accredited-card">
                <div className="ghana-acc-icon">
                  <FaShieldAlt />
                </div>
                <h4 className="ghana-acc-title">Quality-Focused Providers</h4>
                <p className="ghana-acc-desc">
                  Explore information about healthcare organizations with
                  recognized accreditation.
                </p>
              </div>

              <div className="ghana-accredited-card">
                <div className="ghana-acc-icon">
                  <FaGlobe />
                </div>
                <h4 className="ghana-acc-title">International Standards</h4>
                <p className="ghana-acc-desc">
                  JCI accreditation applies standards and evaluation processes
                  for healthcare organizations.
                </p>
              </div>

              <div className="ghana-accredited-card">
                <div className="ghana-acc-icon">
                  <FaAward />
                </div>
                <h4 className="ghana-acc-title">NABH Accreditation</h4>
                <p className="ghana-acc-desc">
                  NABH accreditation is based on defined quality and
                  patient-safety standards for healthcare organizations.
                </p>
              </div>

              <div className="ghana-accredited-card">
                <div className="ghana-acc-icon">
                  <FaCheckCircle />
                </div>
                <h4 className="ghana-acc-title">Verified Information</h4>
                <p className="ghana-acc-desc">
                  Hospital accreditation should always be presented accurately
                  and verified before publication.
                </p>
              </div>
            </div>

            <p className="ghana-accreditation-disclaimer text-center">
              Accreditation status and availability may change and should be
              verified before publication.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
          5. POPULAR MEDICAL SPECIALTIES
      ═══════════════════════════════════════════ */}
        <section className="ghana-section ghana-specialties-section">
          <div className="ghana-container">
            <div className="ghana-section-header text-center">
              <span className="ghana-section-tag">
                EXPLORE HEALTHCARE SERVICES ACROSS KEY SPECIALTIES
              </span>
              <h2 className="ghana-section-title">
                Explore Healthcare Services Across Key Specialties
              </h2>
              <p className="ghana-section-subtitle">
                Explore hospital and specialist options across a comprehensive
                range of advanced healthcare disciplines.
              </p>
            </div>

            <div className="ghana-specialties-grid">
              {SPECIALTIES.map((item, index) => {
                const IconComp = item.icon;
                return (
                  <div key={index} className="ghana-spec-card">
                    <div className="ghana-spec-icon-box">
                      <IconComp />
                    </div>
                    <h4 className="ghana-spec-title">{item.name}</h4>
                    <p className="ghana-spec-desc">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
          6. FEATURED DOCTORS / SPECIALIST SECTION
      ═══════════════════════════════════════════ */}
        <section className="ghana-section ghana-doctors-section">
          <div className="ghana-container">
            <div className="ghana-section-header text-center">
              <span className="ghana-section-tag">
                EXPLORE EXPERIENCED MEDICAL PROFESSIONALS
              </span>
              <h2 className="ghana-section-title">
                Our Specialists & Renowned Medical Professionals
              </h2>
              <p className="ghana-section-subtitle">
                Discover healthcare options across different specialties and
                explore information about experienced medical professionals.
                Specialist availability and appointment options may vary.
              </p>
            </div>

            <div className="ghana-doctors-slider-container">
              <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                spaceBetween={24}
                slidesPerView={1}
                navigation={{
                  nextEl: ".ghana-doc-swiper-next",
                  prevEl: ".ghana-doc-swiper-prev",
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                breakpoints={{
                  576: { slidesPerView: 2, spaceBetween: 20 },
                  992: { slidesPerView: 3, spaceBetween: 24 },
                  1200: { slidesPerView: 4, spaceBetween: 24 },
                }}
                className="ghana-doctors-swiper"
              >
                {DOCTORS.map((doctor, index) => (
                  <SwiperSlide key={index}>
                    <div className="ghana-doctor-card">
                      <div className="ghana-doctor-photo-wrap">
                        <img
                          src={doctor.photoUrl}
                          alt={`${doctor.name} - ${doctor.specialty}`}
                          className="ghana-doctor-photo"
                          loading="lazy"
                        />
                      </div>
                      <div className="ghana-doctor-body">
                        <h4 className="ghana-doctor-name">{doctor.name}</h4>
                        <p className="ghana-doctor-spec">{doctor.specialty}</p>
                        <span className="ghana-doctor-exp-badge">
                          {doctor.experience}
                        </span>
                        <p className="ghana-doctor-snippet">
                          {truncateText(doctor.desc, 90)}
                        </p>
                        <button
                          className="ghana-doctor-btn"
                          onClick={() => setSelectedDoctor(doctor)}
                          aria-label={`View profile of ${doctor.name}`}
                        >
                          View Profile
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Nav Arrows */}
              <button
                className="ghana-swiper-nav-btn ghana-doc-swiper-prev"
                aria-label="Previous specialist"
              >
                <FaChevronLeft />
              </button>
              <button
                className="ghana-swiper-nav-btn ghana-doc-swiper-next"
                aria-label="Next specialist"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
          DOCTOR MODAL
      ═══════════════════════════════════════════ */}
        {selectedDoctor && (
          <div className="doctor-modal-overlay" onClick={closeModal}>
            <div
              className="doctor-modal"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-labelledby="modal-doc-title"
              aria-modal="true"
            >
              <button
                className="doctor-modal-close"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              <div className="doctor-modal-content">
                <div className="doctor-modal-header">
                  <img
                    src={selectedDoctor.photoUrl}
                    alt={selectedDoctor.name}
                    className="doctor-modal-image"
                  />
                  <div className="doctor-modal-info">
                    <span className="doctor-modal-spec">
                      {selectedDoctor.specialty}
                    </span>
                    <h3 id="modal-doc-title" className="doctor-modal-name">
                      {selectedDoctor.name}
                    </h3>
                    <p className="doctor-modal-education">
                      {selectedDoctor.education}
                    </p>
                    <span className="ghana-doctor-exp-badge">
                      {selectedDoctor.experience}
                    </span>
                  </div>
                </div>

                <div className="doctor-modal-body">
                  <h4 className="doctor-modal-section-title">
                    About Specialist
                  </h4>
                  <p className="doctor-modal-desc">{selectedDoctor.desc}</p>
                  <div style={{ marginTop: "20px" }}>
                    <a
                      href={WA_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="ghana-btn-green-wa"
                      style={{ display: "inline-flex", textDecoration: "none" }}
                    >
                      <FaWhatsapp className="ghana-btn-icon-wa" /> Book
                      Consultation With {selectedDoctor.name}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════
          7. INTERNATIONAL PATIENT SUPPORT SERVICES
      ═══════════════════════════════════════════ */}
        <section className="ghana-section ghana-patient-support-section">
          <div className="ghana-container">
            <div className="ghana-section-header text-center">
              <span className="ghana-section-tag">
                INTERNATIONAL PATIENT SUPPORT SERVICES
              </span>
              <h2 className="ghana-section-title">
                Support Beyond Hospital Coordination
              </h2>
              <p className="ghana-section-subtitle">
                Our role is to help make healthcare travel easier to understand
                and organize. We provide coordination support while medical
                decisions and clinical care remain the responsibility of
                qualified healthcare professionals and respective providers.
              </p>
            </div>

            <div className="ghana-support-grid-6">
              <div className="ghana-support-card">
                <div className="ghana-sup-icon">
                  <FaPassport />
                </div>
                <h4 className="ghana-sup-title">Visa Guidance</h4>
                <p className="ghana-sup-desc">
                  Information and support for medical visa requirements.
                </p>
              </div>

              <div className="ghana-support-card">
                <div className="ghana-sup-icon">
                  <FaPlane />
                </div>
                <h4 className="ghana-sup-title">Travel Assistance</h4>
                <p className="ghana-sup-desc">
                  Support for flights and travel arrangements.
                </p>
              </div>

              <div className="ghana-support-card">
                <div className="ghana-sup-icon">
                  <FaHotel />
                </div>
                <h4 className="ghana-sup-title">Accommodation</h4>
                <p className="ghana-sup-desc">
                  Assistance with stay and lodging arrangements.
                </p>
              </div>

              <div className="ghana-support-card">
                <div className="ghana-sup-icon">
                  <FaLanguage />
                </div>
                <h4 className="ghana-sup-title">Language Support</h4>
                <p className="ghana-sup-desc">
                  Help with communication and translation.
                </p>
              </div>

              <div className="ghana-support-card">
                <div className="ghana-sup-icon">
                  <FaMapMarkerAlt />
                </div>
                <h4 className="ghana-sup-title">Local Support</h4>
                <p className="ghana-sup-desc">
                  Assistance during your stay and appointments.
                </p>
              </div>

              <div className="ghana-support-card">
                <div className="ghana-sup-icon">
                  <FaHeadset />
                </div>
                <h4 className="ghana-sup-title">24/7 Assistance</h4>
                <p className="ghana-sup-desc">
                  Continuous support whenever you need it most.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
          8. HOSPITAL / DESTINATION SECTION
      ═══════════════════════════════════════════ */}
        <section className="ghana-section ghana-destinations-section">
          <div className="ghana-container">
            <div className="ghana-section-header text-center">
              <span className="ghana-section-tag">
                ESTABLISHED HEALTHCARE DESTINATIONS
              </span>
              <h2 className="ghana-section-title">
                Healthcare Options Across Established Medical Destinations
              </h2>
              <p className="ghana-section-subtitle">
                Explore leading healthcare hubs featuring multi-specialty
                hospitals, renowned specialist faculties, and dedicated
                international patient departments.
              </p>
            </div>

            <div className="ghana-destinations-grid">
              {DESTINATIONS.map((dest, index) => (
                <div key={index} className="ghana-dest-card">
                  <div className="ghana-dest-img-wrap">
                    <img src={dest.image} alt={dest.city} loading="lazy" />
                    <span className="ghana-dest-city-badge">{dest.city}</span>
                  </div>
                  <div className="ghana-dest-body">
                    <h4 className="ghana-dest-title">{dest.title}</h4>
                    <p className="ghana-dest-desc">{dest.description}</p>
                    <div className="ghana-dest-hospitals">
                      <strong>Key Networks:</strong> {dest.hospitals}
                    </div>
                    <a
                      href={WA_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="ghana-dest-link"
                    >
                      Inquire for {dest.city} <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
          9. OUR CLIENTS REVIEW (Matches GeneralCategory Design)
      ═══════════════════════════════════════════ */}
        <section className="general-reviews-section">
          <div className="general-reviews-content">
            <h2 className="general-reviews-heading">Our Clients Review</h2>

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
                        <p className="general-reviews-card-name">{r.name}</p>
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
                  className={`general-reviews-dot ${currentSlide === index ? "active" : ""
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="general-reviews-image-wrapper">
            <img
              src={ThumbnailImage}
              alt="Happy international patients receiving medical treatment"
              className="general-reviews-image"
              width={1200}
              height={800}
              decoding="async"
            />
          </div>
        </section>

        {/* ═══════════════════════════════════════════
          10. FREQUENTLY ASKED QUESTIONS (Matches GeneralCategory Design)
      ═══════════════════════════════════════════ */}
        <section
          className="general-faq-section"
          aria-labelledby="ghana-faq-heading"
        >
          <div className="general-faq-container">
            <div className="general-faq-header">
              <span className="general-faq-badge">
                Frequently Asked Questions
              </span>
            </div>

            <div className="general-faq-list">
              {FAQ_ITEMS.map((faq, index) => {
                const isActive = activeFaq === index;

                return (
                  <div
                    key={faq.id}
                    className={`general-faq-item ${isActive ? "active" : ""}`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
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

        {/* ═══════════════════════════════════════════
          11. FINAL CTA (Matches GeneralCategory Design with proper WhatsApp & Call buttons)
      ═══════════════════════════════════════════ */}
        <section className="general-cta-section">
          {/* Background Image */}
          <img
            src={ctaImage}
            alt="International medical travel and healthcare coordination for Ghana"
            className="general-cta-bg-image"
            loading="lazy"
            width={740}
            height={493}
            decoding="async"
          />

          {/* Gradient Overlay */}
          <div className="general-cta-overlay" />

          {/* Content Container */}
          <div className="general-cta-container">
            <div className="general-cta-content">
              <span className="general-cta-badge">
                Trusted Medical Travel Support for Ghana
              </span>

              <h2 className="general-cta-title">
                Ready to Explore Your Healthcare Options?
              </h2>

              <p className="general-cta-subtitle">
                Connect with our dedicated team to discuss your healthcare
                travel requirements, explore JCI & NABH accredited hospital
                options, and receive personalized assistance for your medical
                journey from Ghana.
              </p>

              <div className="general-cta-benefits-list">
                <div className="general-cta-benefit-point">
                  <FaCheckCircle className="general-cta-check-icon" />
                  <span>
                    Expert medical opinions and hospital recommendations
                  </span>
                </div>

                <div className="general-cta-benefit-point">
                  <FaCheckCircle className="general-cta-check-icon" />
                  <span>
                    Comprehensive medical visa and invitation assistance
                  </span>
                </div>

                <div className="general-cta-benefit-point">
                  <FaCheckCircle className="general-cta-check-icon" />
                  <span>Travel, airport pickup and lodging coordination</span>
                </div>

                <div className="general-cta-benefit-point">
                  <FaCheckCircle className="general-cta-check-icon" />
                  <span>JCI & NABH accredited hospital network options</span>
                </div>

                <div className="general-cta-benefit-point">
                  <FaCheckCircle className="general-cta-check-icon" />
                  <span>24/7 dedicated patient journey support</span>
                </div>
              </div>

              <div className="ghana-hero-buttons-row justify-center">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="ghana-btn-green-wa whatsapp-glow"
                >
                  <FaWhatsapp className="ghana-btn-icon-wa" /> WhatsApp
                  Consultation
                </a>

                <a href={CALL_URL} className="ghana-btn-red-call">
                  <FaPhoneAlt className="ghana-btn-icon-phone" /> Contact
                  Medical Coordinator
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GhanaLandingPage;
