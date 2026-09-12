import { useState, useEffect, useRef } from "react";
import "./GeneralCategory.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Helmet } from "react-helmet";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaRobot,
  FaMoneyBillWave,
  FaUserMd,
  FaClock,
  FaGlobe,
  FaHeartbeat,
  FaCheck,
  FaFileAlt,
  FaStethoscope,
  FaClipboardList,
  FaPassport,
  FaHospital,
  FaHandHoldingHeart,
  FaStar,
  FaPlus,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";

import { ArrowRight } from "lucide-react";

import heroImage from "../departments/dept-images/general-category/medical-treatment-in-india-for-african-patients.webp";
import WhyHumancare from "../departments/dept-images/general-category/humancare-worldwide-medical-support.webp";

import apolloImage from "../departments/dept-images/general-category/apollo-hospital-india.webp";
import medantaImage from "../departments/dept-images/medanta-hospital-for-oncology-treatment-in-india.webp";
import fortisImage from "../departments/dept-images/general-category/multi-specialty-oncology-hospital-india.webp";
import maxImage from "../departments/dept-images/general-category/top-oncology-hospital-india.webp";
import manipalImage from "../departments/dept-images/general-category/best-manipal-hospital-for-medical-tourism.webp";
import narayanaImage from "../departments/dept-images/general-category/narayana-multispeciality-hospital-india.webp";

import ThumbnailImage from "../departments/dept-images/general-category/best-reviews-for-international-treatment.webp";

import VishnuAgarwalImage from "../departments/dept-images/oncology/vishnu-agarwal.webp";
import VivekAllahbadiaImage from "../departments/dept-images/orthopedic/Dr.-Vivek-Allahbadia.webp";
import NareshTrehanImage from "../departments/dept-images/doctors/naresh_trehan.webp";
import KRBalakrishnanImage from "../departments/dept-images/doctors/kr_balakrishnan.webp";
import MahipalSachdevImage from "../departments/dept-images/EyeSurgen/Dr-Mahipal-S-Sachdev.webp";
import CSharathBabuImage from "../departments/dept-images/dentist/c-sharath-babu.webp";

import cardiologyImage from "../departments/dept-images/general-category/advanced-heart-and-cardiology-treatment-in-india.webp";
import oncologyImage from "../departments/dept-images/general-category/comprehensive-cancer-treatment-in-india.webp";
import joinReplacementImage from "../departments/dept-images/general-category/orthopedic-and-joint-replacement-treatment.webp";
import neurologyImage from "../departments/dept-images/general-category/expert-neurological-and-brain-treatment-in-india.webp";
import dentalImage from "../departments/dept-images/general-category/advanced-dental-implant-and-cosmetic-dentistry-in-india.webp";

import ctaImage from "../departments/dept-images/general-category/best-medical-treatment-in-india-for-international-patient.webp";

const Check = () => <FaCheck className="icon-check" />;

// Stars Component
const Stars = () => (
  <div className="cancer-reviews-stars">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className="cancer-reviews-star" />
    ))}
  </div>
);

// Reviews Data
const reviews = [
  {
    text: "“Humancare World Wide helped coordinate our hospital appointments and medical visa for treatment in India. Their team remained accessible and guided us through the practical travel steps.”",
    name: "Patient from Kenya",
  },
  {
    text: "“We received clear information about oncology hospital options and specialists in India. The coordination team assisted us with appointment scheduling and airport transfer arrangements.”",
    name: "Patient from Uganda",
  },
  {
    text: "“The process for our medical visit was well organized, from sharing reports with doctors to scheduling follow-up consultations. The accommodation coordination was very helpful.”",
    name: "Patient from Tanzania",
  },
  {
    text: "“Our family arranged orthopedic consultations in India through Humancare. The hospital facilities were modern and the team explained estimated costs and scheduling clearly.”",
    name: "Patient from Nigeria",
  },
  {
    text: "“Reliable coordination support from initial inquiry to post-visit communication. They helped connect us with relevant specialists and provided travel guidance throughout.”",
    name: "Patient from South Sudan",
  },
  {
    text: "“Helpful coordination for our healthcare travel to India. The patient coordinator answered our questions promptly and assisted with communication at the hospital.”",
    name: "Patient from Kenya",
  },
];

const WA_URL = "https://wa.me/919833166697";

const WA = ({ size = 5 }) => (
  <FaWhatsapp className={`icon-wa icon-wa--${size}`} />
);

const HOSPITALS = [
  {
    name: "Apollo",
    sub: "Hospitals",
    image: apolloImage,
    location: "New Delhi, India",
    rating: 4.9,
    accreditations: ["JCI", "NABH"],
    specialties: [
      "Cardiology & Cardiac Surgery",
      "Organ Transplant",
      "Cancer Care",
    ],
  },
  {
    name: "Medanta",
    sub: "The Medicity",
    image: medantaImage,
    location: "Gurgaon, India",
    rating: 4.8,
    accreditations: ["JCI", "NABH"],
    specialties: ["Heart Institute", "Neurosciences", "Liver Transplant"],
  },
  {
    name: "Fortis",
    sub: "Healthcare",
    image: fortisImage,
    location: "New Delhi, India",
    rating: 4.8,
    accreditations: ["JCI", "NABH"],
    specialties: ["Cardiac Sciences", "Orthopedics", "Neurosurgery"],
  },
  {
    name: "Max",
    sub: "Healthcare",
    image: maxImage,
    location: "New Delhi, India",
    rating: 4.8,
    accreditations: ["NABH", "ISO"],
    specialties: [
      "Cancer Treatment",
      "Bone Marrow Transplant",
      "Kidney Transplant",
    ],
  },
  {
    name: "Manipal",
    sub: "Hospitals",
    image: manipalImage,
    location: "Bengaluru, India",
    rating: 4.8,
    accreditations: ["NABH"],
    specialties: ["Multi Speciality Care", "Neurology", "Orthopedic Surgery"],
  },
  {
    name: "Narayana",
    sub: "Health",
    image: narayanaImage,
    location: "Bengaluru, India",
    rating: 4.8,
    accreditations: ["JCI", "NABH"],
    specialties: [
      "Cardiac Surgery",
      "Pediatric Cardiology",
      "Organ Transplant",
    ],
  },
];

const specialties = [
  {
    id: 1,
    sectionTag: "Cardiology",
    title: "Cardiology & Heart Care in India",
    description:
      "India offers diagnostic evaluation, medical management and advanced cardiac procedures through experienced heart specialists and modern hospital facilities.",
    treatments: [
      "Heart Bypass Surgery",
      "Angioplasty",
      "Valve Replacement",
      "Pediatric Cardiology",
      "TAVI/TAVR Procedures",
    ],
    ctaLabel: "Talk to Heart Specialist",
    image: cardiologyImage,
    imageAlt: "Cardiology treatment in India",
    reversed: false,
  },
  {
    id: 2,
    sectionTag: "Oncology",
    title: "Comprehensive Cancer Treatment in India",
    description:
      "Oncology services in India encompass medical oncology, surgical procedures, radiation therapy, and personalized treatment planning based on clinical evaluation.",
    treatments: [
      "Chemotherapy",
      "Radiation Therapy",
      "Bone Marrow Transplant",
      "Immunotherapy",
      "Surgical Oncology",
    ],
    ctaLabel: "Talk to Oncology Specialist",
    image: oncologyImage,
    imageAlt: "Oncology treatment in India",
    reversed: true,
  },
  {
    id: 3,
    sectionTag: "Orthopedics",
    title: "Orthopedic & Joint Replacement Treatment",
    description:
      "Orthopedic specialists provide evaluation and surgical care for bone, joint, and spine conditions, including joint replacements and minimally invasive procedures.",
    treatments: [
      "Knee Replacement",
      "Hip Replacement",
      "Spine Surgery",
      "Sports Injury Repair",
      "Arthroscopy",
    ],
    ctaLabel: "Talk to Orthopedic Specialist",
    image: joinReplacementImage,
    imageAlt: "Orthopedic treatment in India",
    reversed: false,
  },
  {
    id: 4,
    sectionTag: "Neurology",
    title: "Neurological & Brain Treatment in India",
    description:
      "Specialist neurology and neurosurgery teams evaluate and manage complex brain, spine, and nervous system conditions with modern diagnostic and surgical facilities.",
    treatments: [
      "Brain Tumor Surgery",
      "Stroke Management",
      "Epilepsy Treatment",
      "Deep Brain Stimulation",
      "Spinal Cord Disorders",
    ],
    ctaLabel: "Talk to Neurology Specialist",
    image: neurologyImage,
    imageAlt: "Neurology treatment in India",
    reversed: true,
  },
  {
    id: 5,
    sectionTag: "Dental Care",
    title: "Dental Care & Cosmetic Dentistry in India",
    description:
      "Dental specialists provide evaluation, restorative procedures, implant treatments, and cosmetic dentistry tailored to individual oral healthcare needs.",
    treatments: [
      "Dental Implants",
      "Full Mouth Rehabilitation",
      "Smile Makeover",
      "All-on-4 Dental Implants",
      "Crowns & Bridges",
    ],
    ctaLabel: "Talk to Dental Specialist",
    image: dentalImage,
    imageAlt: "Dental treatment in India",
    reversed: false,
  },
];

const faqData = [
  {
    id: 1,
    question: "What medical treatments are available in India?",
    answer:
      "India offers treatment and specialist services across many medical specialties. Available options depend on the patient's diagnosis, medical requirements and the hospital or specialist selected.",
  },
  {
    id: 2,
    question: "How do I choose a hospital in India?",
    answer:
      "Hospital selection can be based on the required specialty, available departments and facilities, specialist availability, location, international patient services and other relevant requirements.",
  },
  {
    id: 3,
    question: "Can international patients receive treatment in India?",
    answer:
      "International patients can seek planned medical care in India subject to the hospital's requirements, applicable travel rules and the patient's individual medical circumstances.",
  },
  {
    id: 4,
    question: "Can I share my medical reports before travelling?",
    answer:
      "Yes. Medical reports and relevant documents can be shared for coordination and to help identify suitable hospital or specialist options. Final medical decisions are made by the treating healthcare professional.",
  },
  {
    id: 5,
    question: "Can Human Care help with specialist appointments?",
    answer:
      "Human Care can assist with appointment coordination based on the selected hospital, specialist availability and the patient's requirements.",
  },
  {
    id: 6,
    question: "Can you provide treatment cost information?",
    answer:
      "Treatment costs vary depending on the medical condition, tests, procedures, hospital, specialist fees, duration of care and other requirements. Cost information should be confirmed with the relevant hospital or specialist.",
  },
  {
    id: 7,
    question: "Can you help with travel and accommodation?",
    answer:
      "Human Care can assist with selected travel, accommodation and local transfer arrangements for international patients, depending on the requested services and availability.",
  },
  {
    id: 8,
    question: "How long does treatment in India take?",
    answer:
      "Treatment duration varies by condition, procedure, medical evaluation, recovery requirements and follow-up. The treating healthcare professional can provide more specific guidance.",
  },
  {
    id: 9,
    question: "Are treatment results guaranteed?",
    answer:
      "No medical treatment can be presented as guaranteed for every patient. Outcomes vary according to the medical condition, treatment approach, individual circumstances and other clinical factors.",
  },
  {
    id: 10,
    question: "How can I contact Human Care Medical Tourism?",
    answer:
      "Use the contact options and CTA buttons provided on this page to speak with the Human Care Medical Tourism team about your medical-travel requirements.",
  },
];

const DOCTORS = [
  {
    name: "Dr. Vishnu Agarwal",
    education: "MBBS, MS - General Surgery, Surgical Oncology Fellowship",
    spec: "Surgical Oncologist, Laparoscopic & Robotic Surgery Specialist",
    desc: "Dr. Vishnu Agarwal is a Surgical Oncologist with over 15 years of clinical experience in surgical oncology, laparoscopic and robotic surgical procedures. He completed his MBBS and MS in General Surgery from Mumbai University and received specialized surgical oncology training at Tata Memorial Hospital, Mumbai, followed by advanced surgical fellowships in South Korea and France. His clinical focus includes breast surgery, gynecologic oncology, and colorectal surgical procedures. He works with multidisciplinary teams to coordinate individualized treatment plans for national and international patients.",
    photoUrl: VishnuAgarwalImage,
  },
  {
    name: "Dr. Vivek Allahbadia",
    education:
      "MBBS, D.Orth, MS (Orthopaedics), FCPS Orthopaedics, MCh Orthopaedics (UK)",
    spec: "Orthopaedic Surgeon, Joint Replacement Specialist",
    desc: "Dr. Vivek Allahbadia is an Orthopaedic and Joint Replacement Surgeon with over 28 years of clinical experience in orthopedic care, joint replacement procedures, and sports injury management. He received postgraduate and advanced fellowship training in the UK, Singapore, Australia, and the Czech Republic. His clinical practice focuses on knee replacement, hip replacement, arthroscopic procedures, and post-surgical rehabilitation planning.",
    photoUrl: VivekAllahbadiaImage,
  },
  {
    name: "Dr. Naresh Trehan",
    education:
      "MBBS, Diplomate American Board of Surgery, Diplomate American Board of Cardiothoracic Surgery",
    spec: "Cardiovascular and Cardiothoracic Surgeon",
    desc: "Dr. Naresh Trehan is a Cardiovascular and Cardiothoracic Surgeon with over 40 years of clinical experience in cardiac surgery and cardiovascular care. Founder and Chairman of Medanta - The Medicity, Gurugram, he has extensive surgical experience in coronary artery bypass grafting (CABG), heart valve replacement, aortic surgery, and minimally invasive cardiac procedures for domestic and international patients.",
    photoUrl: NareshTrehanImage,
  },
  {
    name: "Dr. K R Balakrishnan",
    education: "MBBS, MS (General Surgery), MCh (Cardiothoracic Surgery)",
    spec: "Cardiothoracic and Heart Transplant Surgeon",
    desc: "Dr. K R Balakrishnan is a Cardiothoracic and Heart Transplant Surgeon with over 40 years of experience in advanced cardiovascular surgery and transplant care. His clinical practice includes cardiothoracic surgical procedures, ventricular assist device (VAD) management, pediatric cardiac surgery, and heart failure management for patients seeking specialized cardiac care.",
    photoUrl: KRBalakrishnanImage,
  },
  {
    name: "Prof. Dr. Mahipal S Sachdev",
    education:
      "MBBS, MD, MS (Ophthalmology), DNB, MNAMS, FRCS, FICO (UK), FAICO",
    spec: "Ophthalmologist, Cataract & Refractive Surgeon",
    desc: "Prof. Dr. Mahipal S Sachdev is a recipient of the Padma Shri award and an experienced Ophthalmologist with over 42 years of clinical practice. As Chairman and Medical Director of the Centre for Sight Group of Eye Hospitals, his clinical focus includes refractive procedures, cataract surgery, corneal conditions, and comprehensive vision care services.",
    photoUrl: MahipalSachdevImage,
  },
  {
    name: "Dr. C. Sharath Babu",
    education: "BDS, MDS, FICOI",
    spec: "Dental Implantologist, Prosthodontist",
    desc: "Dr. C. Sharath Babu is a Dental Implantologist and Prosthodontist with over 15 years of experience in restorative and cosmetic dentistry. His practice focuses on dental implant procedures, oral rehabilitation, and restorative dental care for local and international patients.",
    photoUrl: CSharathBabuImage,
  },
];

// Treatment Card Component
const TreatmentCard = ({ specialty }) => {
  const {
    sectionTag,
    title,
    description,
    treatments,
    ctaLabel,
    image,
    imageAlt,
    reversed,
  } = specialty;

  return (
    <div className={`ts-card${reversed ? " ts-card--reverse" : ""}`}>
      {/* Image Side */}
      <div className="ts-card__img-wrap">
        <img src={image} alt={imageAlt} loading="lazy" />
        <div className="ts-card__img-overlay" />
      </div>

      {/* Content Side */}
      <div className="ts-card__content">
        <span className="ts-card__section-tag">{sectionTag}</span>
        <h3 className="ts-card__title">{title}</h3>
        <p className="ts-card__desc">{description}</p>

        <ul className="ts-treatments">
          {treatments.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <a href={WA_URL} target="_blank" rel="noreferrer" className="ts-cta">
          {ctaLabel}
          <span className="ts-cta__arrow">
            <ArrowRight size={14} strokeWidth={2.5} />
          </span>
        </a>
      </div>
    </div>
  );
};

const GeneralCategory = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFAQ(index);
    }
  };

  const slides = [];
  for (let i = 0; i < reviews.length; i += 2) {
    slides.push(reviews.slice(i, i + 2));
  }

  const totalSlides = slides.length;

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

  // Truncate description helper
  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  // Close modal handler
  const closeModal = () => setSelectedDoctor(null);

  // Close modal on ESC key
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

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap"
        />
        {/* Primary SEO */}
        <title>
          Best Medical Treatment in India for International Patients | Human Care Medical Tourism
        </title>

        <meta
          name="description"
          content="Explore medical treatment options in India with support for hospital selection, specialist appointments, medical-report coordination, treatment information and international patient arrangements."
        />

        <meta
          name="keywords"
          content="
            best medical treatment in India,
            medical treatment in India,
            best medical treatment in India for international patients,
            medical treatment in India for international patients,
            medical tourism in India,
            hospitals in India,
            best hospitals in India,
            hospitals in India for international patients,
            medical specialists in India,
            doctors in India,
            treatment cost in India,
            international patient services,
            healthcare in India,
            specialist hospitals in India,
            medical treatment cost in India
          "
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://humancaremedicaltourism.com/best-medical-treatment-in-india"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Best Medical Treatment in India for International Patients | Human Care Medical Tourism"
        />

        <meta
          property="og:description"
          content="Explore medical treatment options in India with support for hospital selection, specialist appointments, medical-report coordination, treatment information and international patient arrangements."
        />

        <meta
          property="og:image"
          content="https://humancaremedicaltourism.com/images/medical-treatment-in-india.webp"
        />

        <meta
          property="og:url"
          content="https://humancaremedicaltourism.com/best-medical-treatment-in-india"
        />

        <meta property="og:type" content="website" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Best Medical Treatment in India for International Patients | Human Care Medical Tourism"
        />

        <meta
          name="twitter:description"
          content="Explore medical treatment options in India with support for hospital selection, specialist appointments, medical-report coordination, treatment information and international patient arrangements."
        />

        <meta
          name="twitter:image"
          content="https://humancaremedicaltourism.com/images/medical-treatment-in-india.webp"
        />

        {/* Geo SEO */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />

        {/* Language */}
        <meta httpEquiv="content-language" content="en" />
      </Helmet>

      {/* ════ SECTION 1 — HERO ════ */}
      <section className="general-hero-section">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Best medical treatment in India for international patients"
          className="general-hero-bg-image"
          loading="eager"
          fetchPriority="high"
          width={740}
          height={493}
          decoding="async"
        />

        {/* Gradient Overlay */}
        <div className="general-hero-overlay" />

        {/* Content */}
        <div className="general-hero-content">
          <span className="general-hero-badge">
            International Patient Support in India
          </span>

          <h1 className="general-hero-heading">
            Best Medical Treatment in India for International Patients
          </h1>

          <p className="general-hero-subheading">
            Explore medical treatment options in India with support for hospital
            selection, specialist appointments, medical-report coordination,
            treatment information and international patient arrangements.
          </p>

          <p
            style={{
              marginTop: "12px",
              fontSize: "0.95rem",
              color: "rgba(255, 255, 255, 0.9)",
              lineHeight: "1.6",
            }}
          >
            Human Care Medical Tourism helps international patients coordinate
            healthcare-related services in India based on their medical
            requirements and travel needs.
          </p>

          <div className="general-hero-ctas">
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-wa whatsapp-glow"
            >
              <WA size={5} /> WhatsApp Consultation
            </a>

            <a href="tel:+919833166697" className="btn-outline">
              <FaPhoneAlt /> Contact Medical Coordinator
            </a>
          </div>
        </div>
      </section>

      {/* ════ SECTION 2 — WHY CHOOSE INDIA FOR MEDICAL TREATMENT? ════ */}
      <section className="why-choose-india-section">
        <div className="why-choose-container">
          <div className="why-choose-header">
            <h2 className="why-choose-heading">
              Why Choose India for Medical Treatment?
            </h2>
            <p className="why-choose-subheading">
              India offers a broad range of hospitals, medical specialties and
              healthcare services for patients seeking treatment internationally.
              The appropriate hospital and specialist depend on the patient's
              diagnosis, medical requirements and individual circumstances.
            </p>
            <p
              style={{
                marginTop: "10px",
                color: "#64748b",
                fontSize: "0.95rem",
                lineHeight: "1.6",
              }}
            >
              International patients can explore treatment options across different
              specialties while receiving assistance with appointment
              coordination, medical-document sharing and travel-related
              arrangements.
            </p>
          </div>

          <div className="why-choose-cards-grid">
            {/* Card 1: Multiple Medical Specialties */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaRobot />
              </div>
              <h3 className="why-choose-card-title">
                Multiple Medical Specialties
              </h3>
              <p className="why-choose-card-text">
                Access information about hospitals and specialists across a wide
                range of treatment areas.
              </p>
            </div>

            {/* Card 2: Specialist-Led Care */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaUserMd />
              </div>
              <h3 className="why-choose-card-title">
                Specialist-Led Care
              </h3>
              <p className="why-choose-card-text">
                Coordinate consultations with relevant medical specialists based on
                the patient's requirements.
              </p>
            </div>

            {/* Card 3: Hospital Options */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaHospital />
              </div>
              <h3 className="why-choose-card-title">
                Hospital Options
              </h3>
              <p className="why-choose-card-text">
                Compare available hospitals using verified information about
                departments, facilities and international patient services.
              </p>
            </div>

            {/* Card 4: Treatment Information */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaClock />
              </div>
              <h3 className="why-choose-card-title">Treatment Information</h3>
              <p className="why-choose-card-text">
                Receive general information about available procedures and treatment
                approaches before making arrangements.
              </p>
            </div>

            {/* Card 5: International Patient Support */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaGlobe />
              </div>
              <h3 className="why-choose-card-title">
                International Patient Support
              </h3>
              <p className="why-choose-card-text">
                Assistance with appointments, medical reports, travel coordination
                and communication.
              </p>
            </div>

            {/* Card 6: Cost Information */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaMoneyBillWave />
              </div>
              <h3 className="why-choose-card-title">
                Cost Information
              </h3>
              <p className="why-choose-card-text">
                Request treatment-cost information based on the available medical
                details and hospital requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 3 — MEDICAL TOURISM IN INDIA ════ */}
      <section className="humancare-support-section">
        <div className="humancare-support-container">
          <div className="humancare-support-image">
            <img
              src={WhyHumancare}
              alt="Medical tourism support services in India for international patients"
              loading="lazy"
              width={740}
              height={463}
              decoding="async"
            />
            <div className="humancare-image-overlay" />
          </div>

          <div className="humancare-support-content">
            <h2 className="humancare-support-heading">
              Medical Tourism in India
            </h2>
            <p className="humancare-support-subheading">
              Medical tourism in India involves travelling for planned medical
              consultations, procedures or treatment while coordinating healthcare
              and travel arrangements. Human Care Medical Tourism supports
              international patients with hospital and specialist coordination,
              medical-document sharing, appointment assistance and selected
              travel-related services.
            </p>

            <div className="humancare-services-list">
              <div className="humancare-service-item">
                <FaHospital className="humancare-service-icon" />
                <div className="humancare-service-text">
                  <h3>Hospital & Specialist Options</h3>
                  <p>Explore verified hospitals and specialist departments in India.</p>
                </div>
              </div>

              <div className="humancare-service-item">
                <FaFileAlt className="humancare-service-icon" />
                <div className="humancare-service-text">
                  <h3>Medical Report Coordination</h3>
                  <p>Coordination for sharing medical reports and diagnostic records.</p>
                </div>
              </div>

              <div className="humancare-service-item">
                <FaUserMd className="humancare-service-icon" />
                <div className="humancare-service-text">
                  <h3>Consultation & Appointment Assistance</h3>
                  <p>Scheduling consultations with relevant healthcare professionals.</p>
                </div>
              </div>

              <div className="humancare-service-item">
                <FaClipboardList className="humancare-service-icon" />
                <div className="humancare-service-text">
                  <h3>Treatment & Procedure Information</h3>
                  <p>General information on available procedures and treatment approaches.</p>
                </div>
              </div>

              <div className="humancare-service-item">
                <FaPassport className="humancare-service-icon" />
                <div className="humancare-service-text">
                  <h3>Travel & Accommodation Coordination</h3>
                  <p>Assistance with accommodation and practical travel planning.</p>
                </div>
              </div>

              <div className="humancare-service-item">
                <FaGlobe className="humancare-service-icon" />
                <div className="humancare-service-text">
                  <h3>Airport Transfer & Communication</h3>
                  <p>Airport assistance and ongoing international patient communication.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 4 — BEST HOSPITALS IN INDIA ════ */}
      <section className="hn-section">
        <div className="hn-container">
          <div className="hn-title-wrap">
            <span className="hn-label">Our Hospital Network</span>
            <h2 className="hn-heading">
              Best Hospitals in India for International Patients
            </h2>
            <p className="hn-subtitle">
              Hospitals in India provide care across a wide range of medical
              specialties. The most suitable hospital depends on the patient's
              treatment requirements, specialty, location, available services and
              specialist availability.
            </p>
          </div>
          <div className="hn-slider-wrapper">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={28}
              slidesPerView={1}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 3,
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 26,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 28,
                },
              }}
              className="hn-swiper"
            >
              {HOSPITALS.map((h, i) => (
                <SwiperSlide key={i}>
                  <div className="hn-card">
                    <div className="hn-card-top">
                      <div className="hn-card-image">
                        <img
                          src={h.image}
                          alt={`${h.name} ${h.sub} - ${h.location} - hospital for ${h.specialties[0]} in India`}
                          loading="lazy"
                        />
                        <div className="hn-card-overlay" />
                      </div>
                      <div className="hn-card-header">
                        <div className="hn-hospital-info">
                          <h3 className="hn-hospital-name">{h.name}</h3>
                          <p className="hn-hospital-sub">{h.sub}</p>
                        </div>
                      </div>
                    </div>

                    <div className="hn-card-body">
                      <div className="hn-specialties">
                        <p className="hn-specialties-label">
                          Key Medical Specialties:
                        </p>
                        <ul className="hn-specialties-list">
                          {h.specialties.map((spec, j) => (
                            <li key={j} className="hn-specialty-item">
                              <Check />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ════ SECTION 5 — TREATMENT SPECIALTIES ════ */}
      <section className="ts-section">
        {/* Section Header */}
        <div className="ts-header">
          <div className="ts-header__label">Treatment Specialties</div>
          <h2 className="ts-header__title">
            Explore World-Class Treatment Specialties in India
          </h2>
          <p className="ts-header__sub">
            Explore medical treatment specialties available in India and learn about
            the relevant hospital and specialist options. Treatment suitability
            depends on the patient's medical condition and evaluation by a
            qualified healthcare professional.
          </p>
        </div>

        {/* Cards */}
        <div className="ts-cards">
          {specialties.map((specialty) => (
            <TreatmentCard key={specialty.id} specialty={specialty} />
          ))}
        </div>
      </section>

      {/* ════ SECTION 6 — DOCTORS & SPECIALISTS ════ */}
      <section className="doctor-section-light">
        <div className="doctor-container">
          <div className="doctor-title-wrap">
            <span className="doctor-label">Medical Specialists</span>
            <h2 className="doctor-h2">
              Medical Specialists in India for International Patients
            </h2>
            <p
              style={{
                maxWidth: "700px",
                margin: "12px auto 0",
                color: "#64748b",
                fontSize: "0.95rem",
                lineHeight: "1.5",
              }}
            >
              International patients can explore specialist options based on their
              medical requirements, specialty, hospital affiliation, qualifications
              and verified professional information.
            </p>
          </div>
          <div className="doctor-cards-grid">
            {DOCTORS.map((d, i) => (
              <div key={i} className="doctor-card">
                <img
                  src={d.photoUrl}
                  alt={`${d.name} – ${d.spec}`}
                  className="doctor-card-photo"
                  loading="lazy"
                />
                <div className="doctor-card-body">
                  <div className="doctor-card-content">
                    <span className="doctor-spec">{d.spec}</span>
                    <h3 className="doctor-name">{d.name}</h3>
                    <h4 className="doctor-education">- {d.education}</h4>
                    <p className="doctor-desc">{truncateText(d.desc, 120)}</p>
                  </div>
                  <button
                    className="doctor-read-more custom-learn-more-btn"
                    onClick={() => setSelectedDoctor(d)}
                    aria-label={`Read more about ${d.name}`}
                  >
                    <span className="button-text">Read More</span>
                    <div className="circle"></div>
                    <div className="arrow"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ DOCTOR MODAL ════ */}
      {selectedDoctor && (
        <div className="doctor-modal-overlay" onClick={closeModal}>
          <div
            className="doctor-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-labelledby="modal-title"
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
                    {selectedDoctor.spec}
                  </span>
                  <h3 id="modal-title" className="doctor-modal-name">
                    {selectedDoctor.name}
                  </h3>
                  <p className="doctor-modal-education">
                    {selectedDoctor.education}
                  </p>
                </div>
              </div>

              <div className="doctor-modal-body">
                <h4 className="doctor-modal-section-title">About</h4>
                <p className="doctor-modal-desc">{selectedDoctor.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ════ SECTION 7 — INTERNATIONAL PATIENT SERVICES ════ */}
      <section className="journey-process-section">
        <div className="journey-process-container">
          {/* Section Header */}
          <div className="journey-process-header">
            <h2 className="journey-process-heading">International Patient Services</h2>
            <p className="journey-process-subheading">
              Human Care provides coordination support for international patients
              travelling to India for planned medical care. Services can be arranged
              according to the patient's requirements and the availability of the
              selected hospital or specialist.
            </p>
          </div>

          {/* Process Steps */}
          <div className="journey-steps-grid">
            {/* Step 1 */}
            <div className="journey-step-card">
              <div className="journey-step-number">01</div>
              <div className="journey-step-icon">
                <FaFileAlt />
              </div>
              <h3 className="journey-step-title">Medical Report Sharing</h3>
              <p className="journey-step-description">
                Medical report sharing and coordination with selected hospital departments.
              </p>
            </div>

            {/* Step 2 */}
            <div className="journey-step-card">
              <div className="journey-step-number">02</div>
              <div className="journey-step-icon">
                <FaHospital />
              </div>
              <h3 className="journey-step-title">Hospital & Specialist Selection</h3>
              <p className="journey-step-description">
                Assistance with identifying suitable hospital and specialist options.
              </p>
            </div>

            {/* Step 3 */}
            <div className="journey-step-card">
              <div className="journey-step-number">03</div>
              <div className="journey-step-icon">
                <FaStethoscope />
              </div>
              <h3 className="journey-step-title">Appointment Scheduling</h3>
              <p className="journey-step-description">
                Coordinating consultations and specialist appointment scheduling.
              </p>
            </div>

            {/* Step 4 */}
            <div className="journey-step-card">
              <div className="journey-step-number">04</div>
              <div className="journey-step-icon">
                <FaClipboardList />
              </div>
              <h3 className="journey-step-title">Treatment Information</h3>
              <p className="journey-step-description">
                Treatment information, documentation support, and cost estimates.
              </p>
            </div>

            {/* Step 5 */}
            <div className="journey-step-card">
              <div className="journey-step-number">05</div>
              <div className="journey-step-icon">
                <FaPassport />
              </div>
              <h3 className="journey-step-title">Travel & Accommodation</h3>
              <p className="journey-step-description">
                Assistance with medical visa guidance, travel planning, and lodging.
              </p>
            </div>

            {/* Step 6 */}
            <div className="journey-step-card">
              <div className="journey-step-number">06</div>
              <div className="journey-step-icon">
                <FaHandHoldingHeart />
              </div>
              <h3 className="journey-step-title">Communication & Follow-Up</h3>
              <p className="journey-step-description">
                Ongoing communication support during the visit and follow-up coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 8 — PATIENT REVIEWS ════ */}
      <section className="general-reviews-section">
        <div className="general-reviews-content">
          <h2 className="general-reviews-heading">Our Patients' Reviews</h2>
          <p
            style={{
              maxWidth: "600px",
              margin: "0 0 20px 0",
              color: "#64748b",
              fontSize: "0.95rem",
              lineHeight: "1.5",
            }}
          >
            Read experiences shared by patients who have used Human Care's
            coordination services. Every patient's healthcare journey is different,
            and individual feedback is not a guarantee of medical outcomes.
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
                      {r.name && (
                        <p
                          style={{
                            marginTop: "12px",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            color: "#0f172a",
                          }}
                        >
                          {r.name}
                        </p>
                      )}
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
            src={ThumbnailImage}
            alt="International patient feedback for medical treatment in India"
            className="general-reviews-image"
            width={1200}
            height={800}
            decoding="async"
          />
        </div>
      </section>

      {/* ════ SECTION 9 — FREQUENTLY ASKED QUESTIONS ════ */}
      <section className="general-faq-section" aria-labelledby="faq-heading">
        <div className="general-faq-container">
          {/* Section Header */}
          <div className="general-faq-header">
            <span className="general-faq-badge">
              Frequently Asked Questions
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

      {/* ════ SECTION 10 — FINAL CTA SECTION ════ */}
      <section className="general-cta-section">
        {/* Background Image */}
        <img
          src={ctaImage}
          alt="Medical treatment in India for international patients"
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
              Medical Treatment Coordination
            </span>

            <h2 className="general-cta-title">
              Start Your Medical Treatment Journey in India Today
            </h2>

            <p className="general-cta-subtitle">
              Speak with Human Care Medical Tourism to discuss your medical
              requirements, hospital options, specialist coordination and
              international patient support.
            </p>

            <div className="general-cta-benefits-list">
              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>Specialist consultation and hospital selection support</span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>Treatment information and available cost estimates</span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>Medical visa and travel coordination</span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>Hospital appointment and admission assistance</span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>Dedicated international patient support</span>
              </div>
            </div>

            <div className="general-hero-ctas">
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-wa whatsapp-glow"
              >
                <WA size={5} /> WhatsApp Consultation
              </a>

              <a href="tel:+919833166697" className="btn-outline">
                <FaPhoneAlt /> Contact Medical Coordinator
              </a>
            </div>

            <p
              style={{
                marginTop: "24px",
                fontSize: "0.82rem",
                opacity: 0.8,
                lineHeight: "1.5",
                maxWidth: "700px",
              }}
            >
              Medical disclaimer: Healthcare information on this page is provided
              for general informational purposes. Diagnosis, treatment suitability,
              expected outcomes, duration and final cost vary according to
              individual circumstances and should be discussed with a qualified
              healthcare professional.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GeneralCategory;
