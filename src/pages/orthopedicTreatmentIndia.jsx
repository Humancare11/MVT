import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./orthopedicTreatmentIndia.css";

import {
  FaArrowRight,
  FaBed,
  FaBolt,
  FaBullseye,
  FaChartLine,
  FaCheck,
  FaUser,
  FaUserMd,
  FaLightbulb,
  FaGlobe,
  FaHeart,
  FaHeartbeat,
  FaMoneyBillWave,
  FaClock,
  FaRobot,
  FaHandshake,
  FaFileAlt,
  FaMapMarkerAlt,
  FaPassport,
  FaPlaneArrival,
  FaPills,
  FaQuoteLeft,
  FaClipboardList,
  FaCheckCircle,
  FaChild,
  FaDotCircle,
  FaExchangeAlt,
  FaPhone,
  FaLock,
  FaShieldAlt,
  FaPhoneAlt,
  FaStar,
  FaWhatsapp,
  FaChevronDown,
  FaPlus,
  FaTimes,
} from "react-icons/fa";
import heroImage from "../departments/dept-images/orthopedics-treatment.webp";
import about from "../departments/dept-images/orthopedic-surgeon-india.webp";
import about1 from "../departments/dept-images/knee-replacement-patient-india.webp";
import about2 from "../departments/dept-images/robotic-knee-surgery-india.webp";
import whyChooseUs from "../departments/dept-images/why-choose-us.webp";

import SatyenNabarImage from "../departments/dept-images/orthopedic/dr-satyen-nabar.webp";
import DinshawPardiwalaImage from "../departments/dept-images/orthopedic/Dr.-Dinshaw-pardiwala.webp";
import VivekAllahbadiaImage from "../departments/dept-images/orthopedic/Dr.-Vivek-Allahbadia.webp";
import MihirBapatImage from "../departments/dept-images/orthopedic/Dr.-Mihir-Bapat.webp";
import DDTannaImage from "../departments/dept-images/orthopedic/Dr.-D.D.-Tanna.webp";
import AshokJohariImage from "../departments/dept-images/orthopedic/Dr.-Ashok-Johari.webp";

const WA = ({ size = 5 }) => (
  <FaWhatsapp className={`icon-wa icon-wa--${size}`} />
);

const WA_URL =
  "https://wa.me/919833166697?text=Hello%2C%20I%20need%20orthopedic%20treatment%20consultation";

// Icon components
const DiagnosisIcon = () => <FaUserMd />;
const SupportIcon = () => <FaGlobe />;
const RecoveryIcon = () => <FaHeartbeat />;
const TransparencyIcon = () => <FaFileAlt />;
const AdvancedIcon = () => <FaRobot />;

const cards = [
  {
    id: "01",
    tag: "Evaluation",
    icon: <DiagnosisIcon />,
    title: "Medical Report & Diagnostic Review",
    items: [
      "Review and coordination of available medical reports",
      "Joint and bone condition assessment",
      "Medical history and symptom analysis",
      "Diagnostic imaging evaluation",
      "Clinical requirements planning",
    ],
  },
  {
    id: "02",
    tag: "Coordination",
    icon: <SupportIcon />,
    title: "Specialist & Hospital Options",
    items: [
      "Orthopedic specialist and hospital options",
      "Consultation and appointment coordination",
      "Hospital department selection",
      "Specialist availability scheduling",
      "Doctor credentials and profiles",
    ],
  },
  {
    id: "03",
    tag: "Support",
    icon: <RecoveryIcon />,
    title: "Travel & Logistical Support",
    items: [
      "Travel and accommodation coordination",
      "Airport and local transfer assistance",
      "Medical visa invitation assistance",
      "International patient communication",
      "Local coordination during hospital visit",
    ],
  },
  {
    id: "04",
    tag: "Care Plan",
    icon: <TransparencyIcon />,
    title: "Personalized Treatment Information & Planning",
    items: [
      "Treatment information coordination",
      "Estimated hospital stay duration",
      "Available cost estimate guidance",
      "Surgical and non-surgical approaches",
      "Multidisciplinary care coordination",
    ],
    wide: true,
  },
  {
    id: "05",
    tag: "Recovery",
    icon: <AdvancedIcon />,
    title: "Rehabilitation & Follow-Up Services",
    items: [
      "Post-treatment rehabilitation guidance",
      "Physiotherapy and mobility monitoring",
      "Follow-up consultation coordination",
      "Teleconsultation support after returning home",
      "Ongoing medical document assistance",
    ],
    wide: true,
  },
];

const Card = ({ card }) => (
  <div className={`approach-card ${card.wide ? "approach-card--wide" : ""}`}>
    <div className="approach-card__icon">{card.icon}</div>
    <span className="approach-card__tag">{card.tag}</span>
    <h3 className="approach-card__title">{card.title}</h3>
    <ul
      className={`approach-card__list ${card.wide ? "approach-card__list--grid" : ""}`}
    >
      {card.items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

import KneeReplacementImage from "../departments/dept-images/total-knee-replacement-surgery-in-india.webp";
import PartialKneeReplacementImage from "../departments/dept-images/partial-knee-replacement.webp";
import BilateralKneeReplacementImage from "../departments/dept-images/bilateral-knee-replacement.webp";
import RoboticKneeReplacementImage from "../departments/dept-images/robotic-knee-replacement.webp";
import ReviewKneeReplacementImage from "../departments/dept-images/revision-knee-replacement.webp";
import MinimalInvasiveKneeSurgeryImage from "../departments/dept-images/minimally-invasive-knee-surgery.webp";
import JointReplacementImage from "../departments/dept-images/orthopedics-treatment.webp";
import TraumaOrthopedicsImage from "../departments/dept-images/orthopedics-treatment.webp";

const orthopedicServices = [
  {
    id: 1,
    title: "Knee Replacement",
    description:
      "Surgical treatment that may be considered for certain severe knee-joint conditions after appropriate clinical evaluation.",
    image: KneeReplacementImage,
    alt: "Knee replacement treatment in India",
  },
  {
    id: 2,
    title: "Hip Replacement",
    description:
      "A procedure that may be recommended for selected hip-joint conditions when clinically appropriate.",
    image: PartialKneeReplacementImage,
    alt: "Hip replacement treatment in India",
  },
  {
    id: 3,
    title: "Spine and Back Care",
    description:
      "Evaluation and treatment options for selected spinal and back-related conditions.",
    image: BilateralKneeReplacementImage,
    alt: "Spine and back care in India",
  },
  {
    id: 4,
    title: "Sports Injury Treatment",
    description:
      "Assessment and management options for sports-related musculoskeletal injuries.",
    image: RoboticKneeReplacementImage,
    alt: "Sports injury treatment in India",
  },
  {
    id: 5,
    title: "Arthroscopy and Minimally Invasive Procedures",
    description:
      "Procedures used for selected joint conditions when recommended by the treating specialist.",
    image: MinimalInvasiveKneeSurgeryImage,
    alt: "Arthroscopy and minimally invasive orthopedic procedures in India",
  },
  {
    id: 6,
    title: "Fracture and Trauma Care",
    description:
      "Evaluation and treatment of bone and joint injuries according to the nature and severity of the injury.",
    image: ReviewKneeReplacementImage,
    alt: "Fracture and trauma care in India",
  },
];

// ServiceCard Component
function OrthopedicServiceCard({ service }) {
  return (
    <div className="orthopedic-service-card">
      <img
        src={service.image}
        alt={service.alt}
        className="orthopedic-service-card-image"
        loading="lazy"
      />
      <div className="orthopedic-service-card-overlay" />
      <div className="orthopedic-service-card-content">
        <div className="orthopedic-service-card-top">
          <h3 className="orthopedic-service-card-title">{service.title}</h3>
        </div>
        <p className="orthopedic-service-card-desc">{service.description}</p>
      </div>
    </div>
  );
}

import apolloImage from "../departments/dept-images/best-dental-hospital-india.webp";


import fortisImage from "../departments/dept-images/multi-specialty-dental-hospital-india.webp";

import maxImage from "../departments/dept-images/top-dental-care-india.webp";

import kokilabenImage from "../departments/dept-images/orthopedic/best-orthopedic-hospital-in-india.webp";
import nanavatiImage from "../departments/dept-images/orthopedic/affordable-orthopedic-hospital-in-india.webp";
import jaslokImage from "../departments/dept-images/orthopedic/orthopedic-hospital-in-india.webp";

const HOSPITALS = [
  {
    name: "Max",
    sub: "Super Speciality Hospital",
    image: maxImage,
    location: "New Delhi, India",
    rating: 4.9,
    accreditations: ["NABH", "JCI"],
    specialties: [
      "Joint Replacement Surgery",
      "Spine Surgery",
      "Sports Injury Treatment",
    ],
  },
  {
    name: "Apollo",
    sub: "Hospitals",
    image: apolloImage,
    location: "Chennai, India",
    rating: 4.9,
    accreditations: ["JCI", "NABH"],
    specialties: [
      "Robotic Knee Replacement",
      "Hip Replacement Surgery",
      "Orthopedic Trauma Care",
    ],
  },
  {
    name: "Fortis",
    sub: "Memorial Research Institute",
    image: fortisImage,
    location: "Gurgaon, India",
    rating: 4.8,
    accreditations: ["JCI", "NABH"],
    specialties: [
      "Joint Replacement",
      "Arthroscopy & Sports Medicine",
      "Complex Trauma Surgery",
    ],
  },
  {
    name: "Kokilaben Dhirubhai Ambani",
    sub: "Hospital",
    image: kokilabenImage,
    location: "Mumbai, India",
    rating: 4.9,
    accreditations: ["JCI", "NABH"],
    specialties: [
      "Sports Orthopaedics",
      "Arthroscopic Surgery",
      "Shoulder & Knee Reconstruction",
    ],
  },
  {
    name: "Nanavati Max",
    sub: "Super Speciality Hospital",
    image: nanavatiImage,
    location: "Mumbai, India",
    rating: 4.8,
    accreditations: ["NABH"],
    specialties: [
      "Spine Surgery",
      "Minimally Invasive Orthopedics",
      "Joint Replacement Surgery",
    ],
  },
  {
    name: "Jaslok",
    sub: "Hospital & Research Centre",
    image: jaslokImage,
    location: "Mumbai, India",
    rating: 4.7,
    accreditations: ["NABH"],
    specialties: [
      "Hip & Knee Replacement",
      "Revision Joint Surgery",
      "Orthopedic Rehabilitation",
    ],
  },
];

const DOCTORS = [
  {
    name: "Dr. Satyen Nabar",
    education: "MBBS, MS (Orthopaedics)",
    spec: "Orthopaedic Surgeon, Joint Replacement Specialist, Sports Injury Expert",
    desc: "Dr. Satyen Nabar is an Orthopaedic Surgeon with over 24 years of clinical experience in diagnosing and treating musculoskeletal disorders, joint conditions, sports injuries, and complex orthopedic trauma cases. Associated with Sujay Hospital and Research Centre, Mumbai, he completed his MBBS and MS in Orthopaedics. Dr. Nabar specializes in joint replacement and revision surgeries of the knee, hip, shoulder, and elbow, as well as arthroscopic procedures, sports injury management, complex fracture fixation, and reconstructive orthopedic procedures.",
    photoUrl: SatyenNabarImage,
  },
  {
    name: "Dr. Dinshaw Pardiwala",
    education: "MS (Orthopaedics), DNB (Orthopaedics), FCPS",
    spec: "Sports Orthopaedic Surgeon, Arthroscopy Specialist, Shoulder Surgeon, Sports Medicine Expert",
    desc: "Dr. Dinshaw Pardiwala is a Sports Orthopaedic Surgeon and Arthroscopy Specialist with over 27 years of clinical experience in sports medicine, arthroscopy, minimally invasive orthopedic surgery, and shoulder surgery. He serves as Director of Arthroscopy, Sports Orthopaedics & Shoulder Service and Head of the Centre for Sports Medicine at Kokilaben Dhirubhai Ambani Hospital, Mumbai. Holding an MS (Orthopaedics), DNB (Orthopaedics), and FCPS, his clinical focus includes ligament reconstruction, knee and shoulder arthroscopy, cartilage restoration, and sports trauma management.",
    photoUrl: DinshawPardiwalaImage,
  },
  {
    name: "Dr. Vivek Allahbadia",
    education:
      "MBBS, D.Orth, MS (Orthopaedics), FCPS Orthopaedics, MCh Orthopaedics (UK)",
    spec: "Orthopaedic Surgeon, Joint Replacement Specialist, Robotic Knee Replacement Surgeon",
    desc: "Dr. Vivek Allahbadia is an Orthopaedic and Joint Replacement Surgeon with over 28 years of clinical experience in knee replacement, robotic-assisted joint procedures, sports injury management, and reconstructive orthopaedic care. Associated with Hinduja Healthcare Surgical, Mumbai, he holds an MBBS, MS in Orthopaedics, and MCh Orthopaedics (UK), with advanced fellowship training in joint replacement from the United Kingdom, Australia, and Singapore. His clinical practice encompasses robotic-assisted knee replacement, total knee replacement, hip replacement, and arthroscopic joint procedures.",
    photoUrl: VivekAllahbadiaImage,
  },
  {
    name: "Dr. Mihir Bapat",
    education: "MS (Orthopaedics), DNB (Orthopaedics)",
    spec: "Spine Surgeon, Minimally Invasive Spine Surgery Specialist, Orthopaedic Spine Expert",
    desc: "Dr. Mihir Bapat is an Orthopaedic Spine Surgeon serving as Vice Chairman – Orthopedics & Spinal Surgery at the Nanavati Max Institute of Advanced Orthopaedics, Spine & Joint Care, Mumbai. With over 25 years of clinical experience, he completed his MS and DNB in Orthopaedics along with international fellowships from the Scoliosis Research Society. His clinical focus includes minimally invasive spine surgery, microscopic and endoscopic disc procedures, spinal deformity evaluation, and comprehensive back care management.",
    photoUrl: MihirBapatImage,
  },
  {
    name: "Dr. D. D. Tanna",
    education: "MS (Orthopaedics)",
    spec: "Orthopaedic Surgeon, Trauma Specialist, Joint Replacement Surgeon",
    desc: "Dr. D. D. Tanna is an Orthopaedic Surgeon and Senior Consultant with over 55 years of experience in orthopedic trauma care, fracture management, and joint reconstruction surgery. A former Professor of Orthopaedics at Topiwala National Medical College and Nair Hospital, Mumbai, he introduced advanced interlocking nailing techniques in India. His clinical practice focuses on complex trauma management, non-union fracture care, fracture fixation procedures, and joint reconstruction.",
    photoUrl: DDTannaImage,
  },
  {
    name: "Dr. Ashok Johari",
    education: "MBBS, MS (Orthopaedics)",
    spec: "Paediatric Orthopaedic Surgeon, Cerebral Palsy Specialist, Pediatric Deformity Correction Expert",
    desc: "Dr. Ashok Johari is a Paediatric Orthopaedic Surgeon with over 42 years of clinical experience in the diagnosis, evaluation, and surgical management of musculoskeletal conditions in children. Founder of the Indian Academy of Cerebral Palsy, he holds an MBBS and MS in Orthopaedics. His clinical practice encompasses pediatric deformity correction, cerebral palsy management, clubfoot treatment, limb reconstruction, neuromuscular conditions, and pediatric trauma care.",
    photoUrl: AshokJohariImage,
  },
];

import ReviewRightImage from "../departments/dept-images/happy-ortho-patient-india.webp";

const reviews = [
  {
    name: "Allison Hayes, Kenya",
    text: "“After struggling with chronic knee pain for several years, our family coordinated with Human Care Medical Tourism for knee replacement in Mumbai. The hospital coordination and assistance throughout our stay were very helpful.”",
  },
  {
    name: "Brooke Sullivan, Nigeria",
    text: "“The entire experience from online medical report review to hospital consultations in India was well-coordinated. The medical team in Mumbai provided clear treatment guidance and thorough care.”",
  },
  {
    name: "David O., Uganda",
    text: "“We received coordinated support for my father's hip treatment in Delhi. Human Care assisted with medical invitation letters, specialist appointments, and local transfers, making the journey much smoother for our family.”",
  },
  {
    name: "Grace M., Tanzania",
    text: "“Human Care helped coordinate consultations for a complex sports-related joint injury. The orthopedic specialist in India provided clear diagnostic information and a structured recovery plan.”",
  },
];
const Stars = () => (
  <div className="ortho-reviews-stars">
    {"★★★★★".split("").map((s, i) => (
      <span key={i}>{s}</span>
    ))}
  </div>
);

const faqData = [
  {
    id: 1,
    question: "What orthopedic treatments are available in India?",
    answer:
      "Orthopedic hospitals in India offer a range of consultations, procedures and treatment approaches for bone, joint, muscle, spine and mobility-related conditions. Availability depends on the hospital and clinical requirements.",
  },
  {
    id: 2,
    question: "Is orthopedic treatment available for international patients?",
    answer:
      "International patients can explore planned orthopedic care in India subject to hospital requirements, applicable travel rules and individual medical circumstances.",
  },
  {
    id: 3,
    question: "How do I choose an orthopedic hospital in India?",
    answer:
      "Consider the required orthopedic specialty, hospital facilities, specialist availability, location, international patient services and the treatment information provided by the hospital.",
  },
  {
    id: 4,
    question: "Can I share my medical reports before travelling?",
    answer:
      "Yes. Relevant reports and medical documents can be shared for coordination and to help identify suitable hospital or specialist options. Final clinical decisions are made by the treating healthcare professional.",
  },
  {
    id: 5,
    question: "What orthopedic procedures are available in India?",
    answer:
      "Depending on the hospital and clinical indication, procedures may include joint replacement, arthroscopy, fracture care, reconstruction and other orthopedic interventions. A specialist determines whether a procedure is appropriate.",
  },
  {
    id: 6,
    question: "How much does orthopedic treatment cost in India?",
    answer:
      "Cost varies according to the condition, diagnostic tests, procedure, hospital, surgeon or specialist fees, room requirements, duration of care, rehabilitation and other services. A specific estimate should be confirmed with the relevant provider.",
  },
  {
    id: 7,
    question: "How long does orthopedic treatment take?",
    answer:
      "The duration varies according to the condition, procedure, recovery requirements and follow-up plan. The treating specialist can provide more specific guidance after evaluation.",
  },
  {
    id: 8,
    question: "Can Human Care help with orthopedic appointments?",
    answer:
      "Human Care can assist with appointment coordination based on the selected hospital, specialist availability and the patient’s requirements.",
  },
  {
    id: 9,
    question: "Can you help with travel and accommodation?",
    answer:
      "Human Care can assist with selected travel, accommodation and local transfer arrangements for international patients, subject to the requested service and availability.",
  },
  {
    id: 10,
    question: "Are orthopedic treatment results guaranteed?",
    answer:
      "No medical treatment should be presented as guaranteed for every patient. Outcomes vary according to the condition, treatment approach, individual circumstances and other clinical factors.",
  },
  {
    id: 11,
    question: "How can I contact Human Care Medical Tourism?",
    answer:
      "Use the contact options and CTA buttons on this page to discuss your orthopedic treatment and medical-travel requirements with the Human Care Medical Tourism team.",
  },
];

import CtaImage from "../departments/dept-images/book-ortho-consultation-india.webp";

const Check = () => <FaCheck className="icon-check" />;

export default function OrthopedicTreatmentIndia() {
  const [activeCard, setActiveCard] = useState(null);
  const topCards = cards.filter((c) => !c.wide);
  const bottomCards = cards.filter((c) => c.wide);
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFAQ(index);
    }
  };

  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  // Group reviews into pairs → [[r0,r1], [r2,r3], ...]
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
        <title>
          Affordable Orthopedic Treatment in India for International Patients | Human Care Medical Tourism
        </title>

        <meta
          name="description"
          content="Explore orthopedic treatment options in India with support for hospital selection, orthopedic specialist appointments, medical-report coordination and international patient arrangements."
        />

        <meta
          name="keywords"
          content="orthopedic treatment in india, affordable orthopedic treatment in india, orthopedic treatment in india for international patients, orthopedic surgery in india, orthopedic hospitals in india, best orthopedic hospitals in india, orthopedic surgeons in india, best orthopedic surgeons in india, knee replacement in india, hip replacement in india, joint replacement in india, orthopedic surgery cost in india, orthopedic treatment cost in india, international orthopedic treatment, medical tourism for orthopedic treatment, orthopedic specialist in india"
        />

        <link
          rel="canonical"
          href="https://humancaremedicaltourism.com/orthopedic-treatment-india"
        />

        <meta
          property="og:title"
          content="Affordable Orthopedic Treatment in India for International Patients | Human Care Medical Tourism"
        />
        <meta
          property="og:description"
          content="Explore orthopedic treatment options in India with support for hospital selection, orthopedic specialist appointments, medical-report coordination and international patient arrangements."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://humancaremedicaltourism.com/orthopedic-treatment-india"
        />
        <meta
          property="og:image"
          content="https://humancaremedicaltourism.com/og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Affordable Orthopedic Treatment in India for International Patients | Human Care Medical Tourism"
        />
        <meta
          name="twitter:description"
          content="Explore orthopedic treatment options in India with support for hospital selection, orthopedic specialist appointments, medical-report coordination and international patient arrangements."
        />
        <meta
          name="twitter:image"
          content="https://humancaremedicaltourism.com/og-image.jpg"
        />
      </Helmet>
      {/* ════ SECTION 1 — HERO ════ */}
      <section className="orthopedic-hero-section">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Affordable orthopedic treatment in India for international patients"
          className="orthopedic-hero-bg-image"
          loading="eager"
          fetchPriority="high"
          width={735}
          height={412}
          decoding="async"
        />

        {/* Gradient Overlay */}
        <div className="orthopedic-hero-overlay" />

        {/* Content */}
        <div className="orthopedic-hero-content">
          <span className="orthopedic-hero-badge">
            International Patient Support
          </span>

          <h1>
            Affordable Orthopedic Treatment in India for International Patients
          </h1>

          <p>
            Explore orthopedic treatment options in India with support for hospital selection, orthopedic specialist appointments, medical-report coordination and international patient arrangements.
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            Human Care Medical Tourism helps international patients coordinate orthopedic care based on their medical requirements and travel needs.
          </p>

          <div className="orthopedic-hero-ctas">
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

      {/* ════ SECTION 2 — ORTHOPEDIC SURGERY IN INDIA ════ */}
      <section className="about-section">
        <div className="about-container">
          {/* ── Left: Image collage ── */}
          <div className="about-images">
            <div className="about-images__main">
              <img
                src={about}
                alt="Orthopedic surgeon in India providing joint evaluation and treatment"
                width={493}
                height={740}
                decoding="async"
              />
            </div>
            <div className="about-images__stack">
              <div className="about-images__small">
                <img
                  src={about1}
                  alt="Post-treatment rehabilitation and physiotherapy support in India"
                  width={493}
                  height={740}
                  decoding="async"
                />
              </div>
              <div className="about-images__small">
                <img
                  src={about2}
                  alt="Orthopedic specialist consultation in India for international patients"
                  width={740}
                  height={494}
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="about-content">
            <p className="about-content__label">Orthopedic Care</p>
            <h2 className="about-content__title">
              Orthopedic Surgery in India
            </h2>

            <div className="about-content__body">
              <p>
                Orthopedic hospitals and specialists in India provide evaluation and treatment for a range of bone, joint, muscle and mobility-related conditions.
              </p>
              <p>
                Depending on the patient’s condition, available care may include consultations, diagnostic evaluation, non-surgical management, rehabilitation or orthopedic procedures. The appropriate approach is determined by a qualified healthcare professional after clinical assessment.
              </p>
            </div>

            <div className="about-services">
              <div className="about-service">
                <Check />
                <span>Orthopedic consultation and evaluation</span>
              </div>
              <div className="about-service">
                <Check />
                <span>Joint and bone condition assessment</span>
              </div>
              <div className="about-service">
                <Check />
                <span>Surgical and non-surgical treatment options</span>
              </div>
              <div className="about-service">
                <Check />
                <span>Joint replacement and reconstruction procedures</span>
              </div>
              <div className="about-service">
                <Check />
                <span>Sports and musculoskeletal care</span>
              </div>
              <div className="about-service">
                <Check />
                <span>Post-treatment rehabilitation and follow-up</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 3 — APPROACH ════ */}
      <section className="approach-section">
        <p className="approach-section__label">Our Approach</p>
        <h2 className="approach-section__title">
          Personalized Orthopedic Care, Designed Around Your Needs
        </h2>
        <p className="approach-section__sub">
          Orthopedic care is based on the patient’s condition, medical history, diagnostic findings, treatment requirements and individual circumstances. Human Care can assist with coordinating relevant hospital and specialist options, sharing medical reports, arranging consultations and supporting international patient requirements.
        </p>

        <div className="approach-grid approach-grid--top">
          {topCards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>

        <div className="approach-grid approach-grid--bottom">
          {bottomCards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </section>

      {/* ════ SECTION 4 — WHY CHOOSE INDIA ════ */}
      <section className="why-section">
        <div className="why-container">
          {/* ── Left: Image ── */}
          <div className="why-image-col">
            <div className="why-image-wrapper">
              <img
                src={whyChooseUs}
                alt="Orthopedic treatment and advanced medical facilities in India"
                width={736}
                height={736}
                decoding="async"
              />
            </div>
          </div>

          {/* ── Right: Header + Feature rows ── */}
          <div className="why-content-col">
            <h2 className="why-title">
              Why Patients Choose India for Orthopedic Treatment
            </h2>
            <p style={{ color: "#555", fontSize: "16px", marginBottom: "1.5rem", lineHeight: "1.6" }}>
              India has hospitals and orthopedic specialists offering care across a range of musculoskeletal conditions and procedures. International patients may consider treatment options based on specialist availability, hospital facilities, location, treatment requirements and other individual factors.
            </p>

            <div className="why-rows">
              {/* Row 1 */}
              <div className="why-row">
                <div className="why-row__icon why-row__icon--teal">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4.5 12.75l6 6 9-13.5" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <div className="why-row__body">
                  <h3 className="why-row__title">
                    Range of Orthopedic Specialties and Procedures
                  </h3>
                  <p className="why-row__desc">
                    Patients can explore medical and surgical care across a range of musculoskeletal conditions:
                  </p>
                  <div className="why-row__pills">
                    <span className="why-pill why-pill--teal">
                      Knee replacement
                    </span>
                    <span className="why-pill why-pill--teal">
                      Hip replacement
                    </span>
                    <span className="why-pill why-pill--teal">
                      Spine care
                    </span>
                    <span className="why-pill why-pill--teal">
                      Sports injury treatment
                    </span>
                    <span className="why-pill why-pill--teal">
                      Trauma & fracture care
                    </span>
                    <span className="why-pill why-pill--teal">
                      Arthroscopic procedures
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="why-row">
                <div className="why-row__icon why-row__icon--blue">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <path d="M14 17.5h7M17.5 14v7" />
                  </svg>
                </div>
                <div className="why-row__body">
                  <h3 className="why-row__title">
                    Access to Specialist Consultations
                  </h3>
                  <p className="why-row__desc">
                    Hospitals in India have qualified orthopedic specialists and surgical teams working across specific clinical areas:
                  </p>
                  <div className="why-row__pills">
                    <span className="why-pill why-pill--teal">
                      Joint replacement specialists
                    </span>
                    <span className="why-pill why-pill--teal">
                      Spine surgeons
                    </span>
                    <span className="why-pill why-pill--teal">
                      Sports medicine doctors
                    </span>
                    <span className="why-pill why-pill--teal">
                      Arthroscopy specialists
                    </span>
                    <span className="why-pill why-pill--teal">
                      Pediatric orthopedics
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="why-row">
                <div className="why-row__icon why-row__icon--blue">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" />
                    <path d="M9 3.5A9 9 0 013.5 9" />
                  </svg>
                </div>
                <div className="why-row__body">
                  <h3 className="why-row__title">Diagnostic and Surgical Facilities</h3>
                  <p className="why-row__desc">
                    Hospitals provide diagnostic imaging, modern surgical suites, intensive care facilities, and postoperative rehabilitation units to support comprehensive orthopedic care.
                  </p>
                </div>
              </div>

              {/* Row 4 */}
              <div className="why-row">
                <div className="why-row__icon why-row__icon--blue">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <div className="why-row__body">
                  <h3 className="why-row__title">International Patient Coordination</h3>
                  <p className="why-row__desc">
                    Dedicated international patient teams assist overseas visitors throughout their medical journey:
                  </p>
                  <div className="why-row__pills">
                    <span className="why-pill why-pill--teal">
                      Appointment coordination
                    </span>
                    <span className="why-pill why-pill--teal">
                      Medical report sharing
                    </span>
                    <span className="why-pill why-pill--teal">
                      Rehabilitation planning
                    </span>
                    <span className="why-pill why-pill--teal">
                      Travel assistance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 5 — 5 REASONS ════ */}
      <section className="wo-section">
        <div className="wo-container">
          {/* ── Hero Banner ── */}
          <div className="wo-hero">
            <p className="wo-hero__label">Why Orthopedic Surgery in India?</p>
            <h2 className="wo-hero__title">
              5 Reasons International Patients Trust India for Orthopedic Care
            </h2>
          </div>

          {/* ── Card List ── */}
          <div className="wo-list">
            {/* Card 01 */}
            <div className="wo-item">
              <div className="wo-item__num">01</div>
              <div className="wo-item__body">
                <h3 className="wo-item__title">
                  Orthopedic Specialist Options
                </h3>
                <p className="wo-item__desc">
                  Patients can explore orthopedic specialists according to their condition and consultation requirements.
                </p>
                <div className="wo-item__tags">
                  <span className="wo-tag wo-tag--teal">
                    Specialist consultations
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Joint care specialists
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Spine specialists
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Verified qualifications
                  </span>
                </div>
              </div>
            </div>

            {/* Card 02 */}
            <div className="wo-item">
              <div className="wo-item__num">02</div>
              <div className="wo-item__body">
                <h3 className="wo-item__title">
                  Range of Orthopedic Procedures
                </h3>
                <p className="wo-item__desc">
                  Hospitals may provide different surgical and non-surgical treatment options depending on clinical evaluation.
                </p>
                <div className="wo-item__tags">
                  <span className="wo-tag wo-tag--teal">
                    Joint replacement
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Minimally invasive procedures
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Arthroscopy
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Non-surgical management
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Fracture care
                  </span>
                </div>
              </div>
            </div>

            {/* Card 03 */}
            <div className="wo-item">
              <div className="wo-item__num">03</div>
              <div className="wo-item__body">
                <h3 className="wo-item__title">
                  Hospital Infrastructure
                </h3>
                <p className="wo-item__desc">
                  Available facilities and services vary by hospital and should be reviewed before selecting a provider.
                </p>
                <div className="wo-item__tags">
                  <span className="wo-tag wo-tag--teal">
                    Modern surgical theaters
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Advanced imaging technology
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Specialized orthopedic units
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Rehabilitation facilities
                  </span>
                </div>
              </div>
            </div>

            {/* Card 04 */}
            <div className="wo-item">
              <div className="wo-item__num">04</div>
              <div className="wo-item__body">
                <h3 className="wo-item__title">
                  International Patient Support
                </h3>
                <p className="wo-item__desc">
                  Patients can receive assistance with appointments, documents, communication and selected travel arrangements.
                </p>
                <div className="wo-item__tags">
                  <span className="wo-tag wo-tag--teal">
                    Appointment coordination
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Medical report sharing
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Language support
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Dedicated coordinators
                  </span>
                </div>
              </div>
            </div>

            {/* Card 05 */}
            <div className="wo-item wo-item--last">
              <div className="wo-item__num">05</div>
              <div className="wo-item__body">
                <h3 className="wo-item__title">Treatment Cost Information</h3>
                <p className="wo-item__desc">
                  Patients can request cost information based on the proposed treatment, hospital and individual requirements.
                </p>
                <div className="wo-item__tags">
                  <span className="wo-tag wo-tag--teal">
                    Available cost estimates
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Detailed treatment scope
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Hospital category options
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Follow-up planning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 6 — TYPES OF ORTHOPEDIC TREATMENT ════ */}
      <section className="orthopedic-services-section">
        {/* Header */}
        <div className="orthopedic-services-header">
          <h2 className="orthopedic-services-title">
            Types of Orthopedic Treatment in India
          </h2>
          <p className="orthopedic-services-description">
            Orthopedic hospitals in India provide evaluation and treatment for a range of bone, joint, muscle and mobility-related conditions. The treating specialist determines the appropriate approach based on clinical evaluation.
          </p>
        </div>

        {/* Row 1 — 3 cards */}
        <div className="orthopedic-services-grid orthopedic-services-grid-row">
          {orthopedicServices.slice(0, 3).map((service) => (
            <OrthopedicServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Row 2 — 3 cards */}
        <div className="orthopedic-services-grid">
          {orthopedicServices.slice(3, 6).map((service) => (
            <OrthopedicServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* ════ SECTION 7 — HOSPITALS ════ */}
      <section className="hn-section">
        <div className="hn-container">
          <div className="hn-title-wrap">
            <span className="hn-label">Our Hospital Network</span>
            <h2 className="hn-heading">Orthopedic Hospitals in India</h2>
            <p className="hn-subtitle">
              Orthopedic hospitals in India offer different specialties, facilities and treatment services. The appropriate hospital depends on the patient’s medical requirements, required specialty, specialist availability, location and other relevant factors.
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
                      <div
                        className="hn-card-image"
                        style={{ backgroundImage: `url(${h.image})` }}
                      >
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
                          Orthopedic Specialties:
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

      {/* ════ SECTION 8 — DOCTORS ════ */}
      <section className="doctor-section-light">
        <div className="doctor-container">
          <div className="doctor-title-wrap">
            <span className="doctor-label">Our Specialists</span>
            <h2 className="doctor-h2">Orthopedic Specialists and Surgeons in India</h2>
            <p className="doctor-subtitle">
              Patients can explore orthopedic specialists based on their treatment requirements, specialty, hospital affiliation, qualifications and verified professional information.
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

      {/* ════ SECTION 9 — REVIEWS ════ */}
      <section className="ortho-reviews-section">
        <div className="ortho-reviews-content">
          <h2 className="ortho-reviews-heading">Our Patients' Experiences</h2>
          <p style={{ color: "#555", fontSize: "16px", marginBottom: "1.5rem" }}>
            Read experiences shared by patients who used Human Care’s medical-tourism coordination services.
          </p>

          {/* Slider wrapper */}
          <div className="ortho-reviews-slider-wrapper">
            <div
              className="ortho-reviews-slider-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((pair, slideIndex) => (
                <div key={slideIndex} className="ortho-reviews-slide">
                  {pair.map((r, cardIndex) => (
                    <div key={cardIndex} className="ortho-reviews-card">
                      <Stars />
                      <p className="ortho-reviews-card-text">{r.text}</p>
                      <p className="ortho-reviews-card-name" style={{ fontWeight: 600, marginTop: "0.5rem", color: "#0a1754" }}>
                        {r.name}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="ortho-reviews-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`ortho-reviews-dot ${currentSlide === index ? "active" : ""}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="ortho-reviews-image-wrapper">
          <img
            src={ReviewRightImage}
            alt="International orthopedic patient experiences in India"
            className="ortho-reviews-image"
            width={736}
            height={552}
            decoding="async"
          />
        </div>
      </section>

      {/* ════ SECTION 10 — FAQ ════ */}
      <section className="ortho-faq-section" aria-labelledby="faq-heading">
        <div className="ortho-faq-container">
          {/* Section Header */}
          <div className="ortho-faq-header">
            <span className="ortho-faq-badge">Orthopedic Treatment FAQs</span>
            <h2 id="faq-heading" className="ortho-faq-title">
              Frequently Asked Questions About Orthopedic Treatment in India
            </h2>
            <p className="ortho-faq-subtitle">
              Get answers to common questions about orthopedic care, hospital options, treatment approaches and international patient support in India
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="ortho-faq-list">
            {faqData.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={faq.id}
                  className={`ortho-faq-item ${isActive ? "active" : ""}`}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="ortho-faq-question"
                    aria-expanded={isActive}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <h3 className="ortho-faq-question-text">{faq.question}</h3>
                    <FaPlus
                      className={`ortho-faq-icon ${isActive ? "rotate" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`ortho-faq-answer ${isActive ? "open" : ""}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                  >
                    <div className="ortho-faq-answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════ SECTION 11 — FINAL CTA ════ */}
      <section className="ortho-cta-section">
        {/* Background Image */}
        <img
          src={CtaImage}
          alt="Book orthopedic consultation in India with Human Care Medical Tourism"
          className="ortho-cta-bg-image"
          loading="lazy"
          width={740}
          height={416}
          decoding="async"
        />

        {/* Gradient Overlay */}
        <div className="ortho-cta-overlay" />

        {/* Content Container */}
        <div className="ortho-cta-container">
          <div className="ortho-cta-content">
            <span className="ortho-cta-badge">International Patient Support</span>

            <h2 className="ortho-cta-title">
              Book Your Orthopedic Consultation
            </h2>

            <p className="ortho-cta-subtitle">
              Discuss your orthopedic treatment requirements with Human Care Medical Tourism and receive assistance with hospital options, specialist coordination and international patient services.
            </p>

            <div className="ortho-cta-benefits-list">
              <div className="ortho-cta-benefit-point">
                <FaCheckCircle className="ortho-cta-check-icon" />
                <span>Orthopedic specialist options</span>
              </div>
              <div className="ortho-cta-benefit-point">
                <FaCheckCircle className="ortho-cta-check-icon" />
                <span>Hospital selection assistance</span>
              </div>
              <div className="ortho-cta-benefit-point">
                <FaCheckCircle className="ortho-cta-check-icon" />
                <span>Treatment cost information</span>
              </div>
              <div className="ortho-cta-benefit-point">
                <FaCheckCircle className="ortho-cta-check-icon" />
                <span>International patient support</span>
              </div>
              <div className="ortho-cta-benefit-point">
                <FaCheckCircle className="ortho-cta-check-icon" />
                <span>Travel and accommodation coordination</span>
              </div>
            </div>

            <div className="ortho-hero-ctas">
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
              className="ortho-cta-disclaimer"
              style={{
                fontSize: "0.82rem",
                opacity: 0.85,
                marginTop: "1.25rem",
                lineHeight: "1.4",
              }}
            >
              Medical disclaimer: Healthcare information on this page is provided for general informational purposes. Diagnosis, treatment suitability, expected outcomes, duration and final cost vary according to individual circumstances and should be discussed with a qualified healthcare professional.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
