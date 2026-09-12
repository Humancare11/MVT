import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./CardiacLandingIndia.css";
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
import heroImage from "../departments/dept-images/cardiac-treatment-india-hero.webp";
import heartBg from "../departments/dept-images/heart-surgery-india-specialist-1.webp";
import doctorImg from "../departments/dept-images/heart-surgery-india-specialist.webp";

import apolloImage from "../departments/dept-images/cardiology/best-cardiology-hospital-india.webp";
import medantaImage from "../departments/dept-images/cardiology/medanta-for-best-cardiology-hospital-india.webp";
import fortisImage from "../departments/dept-images/cardiology/fortis-cardiologist-hospital.webp";
import maxImage from "../departments/dept-images/cardiology/medanta-for-best-cardiology-hospital-india.webp";
import hindujaImage from "../departments/dept-images/pd_hinduja.webp";
import saifeeImage from "../departments/dept-images/saifee-hospital.webp";
import lilavatiImage from "../departments/dept-images/lilavati-hospital.webp";
import hiranandaniImage from "../departments/dept-images/hiranandani_hospital.webp";
import ghcImage from "../departments/dept-images/ghc-hospital.webp";
import masinaImage from "../departments/dept-images/masina-hospital.webp";
import medicoverImage from "../departments/dept-images/medicover-hospital.webp";
import nanavatiImage from "../departments/dept-images/nanavati-hospital.webp";
import jaslokImage from "../departments/dept-images/jaslok-hospital.webp";
import wockhardtImage from "../departments/dept-images/wockhardt-hospital.webp";
import cmcImage from "../departments/dept-images/cmc-vellore.webp";
import gleneaglesImage from "../departments/dept-images/gleneagles-hospital.webp";

import cardiologyBg from "../departments/dept-images/cardiology-treatment.webp";

import hospitalImg from "../departments/dept-images/cardiology-treatment-heart-illustration.webp";
import testimonialRightImg from "../departments/dept-images/testimonial-right-side-doctor.webp";

import heartIlloImg from "../departments/dept-images/best-heart-hospital-india.webp";
import doctorIlloImg from "../departments/dept-images/overview3.webp";
import RajeshRajaniImage from "../departments/dept-images/doctors/rajesh_rajani.webp";
import YunusLoyaImage from "../departments/dept-images/doctors/yunus_loya.webp";
import YashLokhandwalaImage from "../departments/dept-images/doctors/yash_lokhandwala.webp";
import ZainulabedinHamdulayImage from "../departments/dept-images/doctors/zainulabedin_hamdulay.webp";
import KamranAhmedKhanImage from "../departments/dept-images/doctors/kamran_ahmed_khan.webp";
import KRBalakrishnanImage from "../departments/dept-images/doctors/kr_balakrishnan.webp";
import NareshTrehanImage from "../departments/dept-images/doctors/naresh_trehan.webp";
import SureshRaoImage from "../departments/dept-images/doctors/suresh_rao.webp";

const Check = () => <FaCheck className="icon-check" />;
const Star = () => <FaStar className="icon-star" />;
const WA = ({ size = 5 }) => (
  <FaWhatsapp className={`icon-wa icon-wa--${size}`} />
);

const WA_URL =
  "https://wa.me/919833166697?text=Hello%2C%20I%20need%20cardiac%20care%20consultation";

/* ========= DATA ========= */
const VALUE_CARDS = [
  {
    emoji: <FaClipboardList />,
    colorClass: "card-red",
    title: "Transparent Treatment Planning",
    desc: "Detailed cost and treatment information before you travel.",
  },
  {
    emoji: <FaCheckCircle />,
    colorClass: "card-navy",
    title: "Evidence-Based Protocols",
    desc: "Care plans recommended by qualified cardiac specialists based on clinical evaluation.",
  },
  {
    emoji: <FaHeart />,
    colorClass: "card-red",
    title: "Personalized Coordination",
    desc: "Dedicated international patient coordinators assisting throughout your visit.",
  },
  {
    emoji: <FaMoneyBillWave />,
    colorClass: "card-navy",
    title: "Cost Transparency",
    desc: "Clear provider estimates tailored to your proposed treatment and medical requirements.",
  },
];

const HOSPITALS = [
  {
    name: "Apollo",
    sub: "Hospitals",
    image: apolloImage,
    location: "New Delhi, India",
    rating: 4.9,
    accreditations: ["JCI", "NABH"],
    specialties: [
      "Cardiothoracic Surgery",
      "Heart Transplant",
      "Interventional Cardiology",
    ],
  },
  {
    name: "Medanta",
    sub: "The Medicity",
    image: medantaImage,
    location: "Gurugram, India",
    rating: 4.8,
    accreditations: ["JCI", "NABH"],
    specialties: [
      "Heart Transplant",
      "TAVR Procedure",
      "Robotic Cardiac Surgery",
    ],
  },
  {
    name: "Fortis",
    sub: "Healthcare",
    image: fortisImage,
    location: "Delhi NCR, India",
    rating: 4.7,
    accreditations: ["JCI", "NABH"],
    specialties: [
      "Cardiothoracic & Vascular Surgery",
      "Non-Invasive Cardiology",
      "Advanced Cardiac Care",
    ],
  },
  {
    name: "Max",
    sub: "Healthcare",
    image: maxImage,
    location: "Delhi, India",
    rating: 4.8,
    accreditations: ["NABH", "ISO"],
    specialties: [
      "Interventional Cardiology",
      "Electrophysiology",
      "Heart Failure Treatment",
    ],
  },
  {
    name: "P.D. Hinduja",
    sub: "Hospital",
    image: hindujaImage,
    location: "Mumbai, India",
    rating: 4.8,
    accreditations: ["NABH"],
    specialties: [
      "Advanced Cardiology",
      "Cardiac Surgery",
      "Heart Failure Management",
    ],
  },
  {
    name: "Saifee",
    sub: "Hospital",
    image: saifeeImage,
    location: "Mumbai, India",
    rating: 4.7,
    accreditations: ["NABH"],
    specialties: [
      "Cardiac Care",
      "Interventional Cardiology",
      "Heart Diagnostics",
    ],
  },
  {
    name: "Lilavati",
    sub: "Hospital",
    image: lilavatiImage,
    location: "Mumbai, India",
    rating: 4.8,
    accreditations: ["NABH"],
    specialties: [
      "Electrophysiology",
      "Heart Rhythm Disorders",
      "Advanced Cardiac Surgery",
    ],
  },
  {
    name: "Hiranandani",
    sub: "Hospital",
    image: hiranandaniImage,
    location: "Mumbai, India",
    rating: 4.7,
    accreditations: ["NABH"],
    specialties: [
      "Heart Transplant",
      "Cardiac Surgery",
      "Critical Cardiac Care",
    ],
  },
  {
    name: "GHC",
    sub: "Hospitals",
    image: ghcImage,
    location: "Mumbai, India",
    rating: 4.6,
    accreditations: ["NABH"],
    specialties: ["Cardiology", "Preventive Heart Care", "Heart Diagnostics"],
  },
  {
    name: "Masina Heart",
    sub: "Institute",
    image: masinaImage,
    location: "Mumbai, India",
    rating: 4.8,
    accreditations: ["NABH"],
    specialties: [
      "Cardiac Surgery",
      "Bypass Surgery",
      "Minimally Invasive Cardiac Surgery",
    ],
  },
  {
    name: "Medicover",
    sub: "Hospitals",
    image: medicoverImage,
    location: "Hyderabad, India",
    rating: 4.7,
    accreditations: ["NABH"],
    specialties: [
      "Interventional Cardiology",
      "Heart Care",
      "Cardiac Diagnostics",
    ],
  },
  {
    name: "Nanavati",
    sub: "Hospital",
    image: nanavatiImage,
    location: "Mumbai, India",
    rating: 4.8,
    accreditations: ["NABH"],
    specialties: [
      "Heart Surgery",
      "Electrophysiology",
      "Advanced Cardiac Care",
    ],
  },
  {
    name: "Jaslok",
    sub: "Hospital",
    image: jaslokImage,
    location: "Mumbai, India",
    rating: 4.7,
    accreditations: ["NABH"],
    specialties: ["Cardiology", "Cardiac ICU", "Heart Valve Surgery"],
  },
  {
    name: "Wockhardt",
    sub: "Hospitals",
    image: wockhardtImage,
    location: "Mumbai, India",
    rating: 4.6,
    accreditations: ["NABH"],
    specialties: [
      "Cardiac Surgery",
      "Heart Failure Treatment",
      "Emergency Cardiac Care",
    ],
  },
  {
    name: "CMC",
    sub: "Vellore",
    image: cmcImage,
    location: "Vellore, India",
    rating: 4.9,
    accreditations: ["NABH"],
    specialties: [
      "Pediatric Cardiology",
      "Cardiothoracic Surgery",
      "Heart Transplant",
    ],
  },
  {
    name: "Gleneagles",
    sub: "Hospitals",
    image: gleneaglesImage,
    location: "Chennai, India",
    rating: 4.8,
    accreditations: ["JCI", "NABH"],
    specialties: [
      "Advanced Heart Surgery",
      "Interventional Cardiology",
      "Cardiac Rehabilitation",
    ],
  },
];

const DOCTORS = [
  {
    name: "Dr. Rajesh M Rajani",
    education: "MBBS, MD (Cardiology), DM (Cardiology)",
    spec: "Cardiologist",
    desc: "Dr. Rajesh M Rajani is a Cardiologist in Breach Candy, Mumbai with over 39 years of clinical experience in cardiology. Practicing at Breach Candy Hospital, he completed his MBBS from JJ Hospital & Grant Medical College in 1984, MD in Cardiology in 1988, and DM in Cardiology from KEM Hospital & Seth GS Medical College in 1991. His clinical practice focuses on diagnostic and preventive cardiology for domestic and international patients.",
    photoUrl: RajeshRajaniImage,
  },
  {
    name: "Dr. Yunus Shafi Loya",
    education: "MBBS, MD, DM (Cardiology)",
    spec: "Interventional Cardiologist",
    desc: "Dr. Yunus Shafi Loya is an Interventional Cardiologist in India with 25+ years of experience in cardiac evaluation and catheter-based interventions. His practice areas include coronary angioplasty, stenting, atherectomy, and percutaneous valve assessments. International patients consult him for detailed diagnostic evaluation and minimally invasive cardiac care.",
    photoUrl: YunusLoyaImage,
  },
  {
    name: "Dr. Yash Lokhandwala",
    education: "MD, DM, FACC (Arrhythmias)",
    spec: "Cardiac Electrophysiologist",
    desc: "Dr. Yash Lokhandwala is a Cardiologist and Electrophysiologist in India with 26+ years of clinical experience in heart rhythm disorders. Associated with Lilavati Hospital and trained internationally in the Netherlands, his clinical focus includes bradycardia, tachycardia, arrhythmia management, pacemaker evaluations, and catheter ablation.",
    photoUrl: YashLokhandwalaImage,
  },
  {
    name: "Dr. Zainulabedin Hamdulay",
    education:
      "MCh (Thoracic Surgery), MS (General Surgery), DNB (CTS), MBBS",
    spec: "Cardiac Surgeon",
    desc: "Dr. Zainulabedin Hamdulay is a Cardiac Surgeon based in Mumbai, India, with over 33 years of experience in adult cardiac and cardiothoracic surgery. Associated with leading cardiac centers, his surgical focus includes coronary artery bypass grafting (CABG), valve repair and replacement, and minimally invasive cardiac surgical approaches.",
    photoUrl: ZainulabedinHamdulayImage,
  },
  {
    name: "Dr. Kamran Ahmed Khan",
    education:
      "MBBS, MCPS, FCPS Cardiology, Fellowship in Interventional Cardiology",
    spec: "Interventional Cardiologist",
    desc: "Dr. Kamran Ahmed Khan is an Interventional Cardiologist with extensive training in coronary interventions and cardiovascular medicine. Having completed his cardiology training and advanced interventional fellowship certification from Dalhousie University in Canada, his clinical focus encompasses coronary angiograms, angioplasty, and evidence-based heart disease management.",
    photoUrl: KamranAhmedKhanImage,
  },
  {
    name: "Dr. K R Balakrishnan",
    education: "MBBS, MS (General Surgery), MCh (Cardiothoracic Surgery)",
    spec: "Cardiothoracic and Heart Transplant Surgeon",
    desc: "Dr. K R Balakrishnan is a Cardiothoracic and Heart Transplant Surgeon in India with over 40 years of surgical experience. An alumnus of KEM Hospital, Mumbai, his clinical practice specializes in advanced heart failure management, mechanical circulatory support, ventricular assist devices (VADs), and complex thoracic surgical procedures for international patients.",
    photoUrl: KRBalakrishnanImage,
  },
  {
    name: "Dr. Naresh Trehan",
    education:
      "MBBS, Diplomate American Board of Surgery, Diplomate American Board of Cardiothoracic Surgery",
    spec: "Cardiovascular and Cardiothoracic Surgeon",
    desc: "Dr. Naresh Trehan is a Cardiovascular and Cardiothoracic Surgeon in India with over 40 years of experience in cardiac surgery. He serves as Chairman of Cardiac Services and Managing Director of Medanta - The Medicity, Gurugram. His clinical focus includes coronary artery bypass grafting (CABG), heart valve replacement, aortic aneurysm surgery, and minimally invasive cardiac procedures for international patients.",
    photoUrl: NareshTrehanImage,
  },
  {
    name: "Dr. Suresh Rao",
    education: "MBBS, MS, MCh (CVTS), Dip.NB (CTS), FCPS, FIACS",
    spec: "Pediatric & Congenital Heart Surgeon",
    desc: "Dr. Suresh Rao is a Pediatric and Congenital Heart Surgeon in India with over 37 years of clinical experience in neonatal and pediatric cardiac care. He serves as Director of the Children’s Heart Centre. With international fellowship training from the University of Alabama at Birmingham, USA, his practice centers on congenital heart defect repair and child-focused cardiac surgery.",
    photoUrl: SureshRaoImage,
  },
];

const REASONS = [
  {
    emoji: <FaUserMd />,
    title: "Cardiac Specialist Options",
    desc: "Explore relevant cardiology and cardiac-surgery specialists based on requirements.",
    colorClass: "reason-red",
  },
  {
    emoji: <FaHandshake />,
    title: "International Patient Support",
    desc: "Assistance with medical documents, appointments, and communication.",
    colorClass: "reason-navy",
  },
  {
    emoji: <FaGlobe />,
    title: "Hospital & Treatment Options",
    desc: "Compare accredited hospitals based on verified cardiac facilities and care options.",
    colorClass: "reason-red",
  },
  {
    emoji: <FaPlaneArrival />,
    title: "Travel Coordination",
    desc: "Support with selected travel, accommodation, and local-transfer requirements.",
    colorClass: "reason-navy",
  },
  {
    emoji: <FaMoneyBillWave />,
    title: "Treatment Cost Information",
    desc: "Request provider-specific cost information based on individual clinical needs.",
    colorClass: "reason-red",
  },
];

const SERVICES = [
  {
    icon: <FaHeartbeat />,
    title: "Heart Bypass Surgery (CABG)",
    desc: "A surgical procedure used in selected cases to improve blood flow to the heart muscle.",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Heart Valve Repair or Replacement",
    desc: "Procedures used for selected valve conditions after specialist evaluation.",
  },
  {
    icon: <FaBullseye />,
    title: "Angioplasty & Stenting",
    desc: "Procedures that may be used to treat certain narrowed or blocked coronary arteries when clinically appropriate.",
  },
  {
    icon: <FaDotCircle />,
    title: "Heart Valve Surgery",
    desc: "Surgical treatment for selected heart-valve conditions based on specialist assessment.",
  },
  {
    icon: <FaChild />,
    title: "Pediatric Heart Surgery",
    desc: "Cardiac surgical care for selected congenital or other heart conditions in children, subject to specialist evaluation.",
  },
  {
    icon: <FaHeart />,
    title: "Heart Transplant",
    desc: "A highly specialized treatment option for selected patients with severe heart disease who meet appropriate clinical criteria.",
  },
  {
    icon: <FaChartLine />,
    title: "Electrophysiology & Cardiac Procedures",
    desc: "Evaluation and procedures for selected heart-rhythm conditions.",
  },
  {
    icon: <FaClock />,
    title: "Aortic & Vascular Care",
    desc: "Specialist assessment and treatment options for selected aortic or vascular conditions.",
  },
];

const SUPPORT_STEPS = [
  {
    icon: <FaGlobe />,
    title: "Hospital Coordination",
    desc: "Assistance in identifying and coordinating with relevant cardiac hospitals in India.",
  },
  {
    icon: <FaUserMd />,
    title: "Cardiologist & Surgeon Appointments",
    desc: "Support with scheduling consultations with qualified cardiac specialists.",
  },
  {
    icon: <FaFileAlt />,
    title: "Medical Report Coordination",
    desc: "Sharing diagnostic reports and medical records with hospital teams for preliminary review.",
  },
  {
    icon: <FaBed />,
    title: "Travel & Accommodation Assistance",
    desc: "Guidance on suitable lodging and travel arrangements for patients and companions.",
  },
  {
    icon: <FaPlaneArrival />,
    title: "Airport & Local Transfer Support",
    desc: "Assistance with airport reception and local transit to your hospital or accommodation.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Communication & Follow-Up",
    desc: "Assistance with ongoing hospital communication and follow-up consultation planning.",
  },
];

const TESTIMONIALS = [
  {
    initials: "AC",
    gradClass: "grad-red-dark",
    name: "Adebayo Chukwu",
    designation: "Lagos, Nigeria · Bypass Surgery Coordination",
    quote:
      "Human Care Medical Tourism assisted me with my medical trip to India for bypass surgery consultation at Apollo Hospitals. The coordination team handled hospital appointments and local support efficiently, allowing me to focus on my treatment plan.",
    avatarBg: "#c0392b",
  },
  {
    initials: "FM",
    gradClass: "grad-navy-dark",
    name: "Fatima Mwangi",
    designation: "Nairobi, Kenya · Pediatric Cardiac Consultation",
    quote:
      "When we sought a second opinion for my daughter's heart condition, Human Care coordinated our appointments at Max Healthcare. The medical team explained all findings clearly, and having local coordination made our travel manageable.",
    avatarBg: "#1a3a5c",
  },
  {
    initials: "KO",
    gradClass: "grad-red-dark",
    name: "Kwame Osei",
    designation: "Accra, Ghana · Valve Treatment Coordination",
    quote:
      "Human Care helped connect me with experienced cardiac specialists in India for evaluation of my heart valve condition. From report sharing to hospital coordination, the process was handled with care and professionalism.",
    avatarBg: "#7b2d8b",
  },
];

const REVIEW_AVATARS = [
  { bg: "#b0bec5", initials: "M" },
  { bg: "#90caf9", initials: "S" },
  { bg: "#a5d6a7", initials: "J" },
];

const HERO_BULLETS = [
  {
    icon: <FaHeartbeat />,
    colorClass: "bullet-red",
    text: "Wide Range of Cardiac Care",
    desc: "Access information about different cardiac specialties and treatment options.",
  },
  {
    icon: <FaUserMd />,
    colorClass: "bullet-white",
    text: "Specialized Cardiology & Surgery",
    desc: "Coordinate with relevant cardiology or cardiac-surgery specialists based on requirements.",
  },
  {
    icon: <FaGlobe />,
    colorClass: "bullet-red",
    text: "Specialty Cardiac Hospitals",
    desc: "Explore hospitals with dedicated cardiac departments, modern technology, and facilities.",
  },
  {
    icon: <FaHandshake />,
    colorClass: "bullet-white",
    text: "Support for International Patients",
    desc: "Assistance with appointments, medical reports coordination, and communication.",
  },
];

const HERO_STATS = [
  { val: "Verified", label: "Cardiac Centers", colorClass: "stat-red" },
  { val: "50K+", label: "Intl. Patients", colorClass: "stat-white" },
  { val: "25+", label: "Yrs Experience", colorClass: "stat-red" },
  { val: "Complete", label: "Patient Support", colorClass: "stat-white" },
];

const features = [
  {
    id: 1,
    icon: <FaClipboardList />,
    title: "Diagnostic Evaluation",
    desc: "Cardiac consultation, diagnostic imaging, and pre-treatment clinical assessment.",
  },
  {
    id: 2,
    icon: <FaUserMd />,
    title: "Hospital & Specialist Fees",
    desc: "Transparent specialist fees and clinical care costs from accredited providers.",
  },
  {
    id: 3,
    icon: <FaHeartbeat />,
    title: "Procedure-Specific Planning",
    desc: "Detailed medical planning based on the proposed surgical or interventional procedure.",
  },
  {
    id: 4,
    icon: <FaBed />,
    title: "Stay & International Support",
    desc: "Room requirements, post-treatment follow-up, and travel coordination assistance.",
  },
];

/* ═══════════════════════════════════════════
   FAQ DATA
═══════════════════════════════════════════ */
const faqData = [
  {
    id: 1,
    question: "What is the best heart treatment in India?",
    answer:
      "The appropriate cardiac treatment depends on the patient’s diagnosis, severity, medical history, test results and clinical requirements. A qualified cardiologist or cardiac surgeon should determine the suitable treatment approach.",
  },
  {
    id: 2,
    question: "Which hospitals in India provide cardiac treatment?",
    answer:
      "Hospitals across India provide cardiology and cardiac-surgery services. Hospital suitability depends on the required specialty, available facilities, specialist availability, location and the patient’s individual needs.",
  },
  {
    id: 3,
    question: "Is heart treatment available for international patients?",
    answer:
      "International patients can explore planned cardiac care in India, subject to hospital requirements, applicable travel rules and individual medical circumstances.",
  },
  {
    id: 4,
    question: "Can I share my cardiac medical reports before travelling?",
    answer:
      "Yes. Relevant reports, scans and medical documents can be shared for coordination and to help identify suitable hospital or specialist options. Final clinical decisions are made by the treating healthcare professional.",
  },
  {
    id: 5,
    question: "How much does cardiac treatment cost in India?",
    answer:
      "Cost varies according to the diagnosis, investigations, procedure or surgery, hospital, specialist fees, room requirements, duration of care and follow-up. A specific estimate should be confirmed with the relevant provider.",
  },
  {
    id: 6,
    question: "How long does cardiac treatment take?",
    answer:
      "The treatment timeline varies according to the condition, procedure, hospital stay, recovery requirements and follow-up plan. The treating specialist can provide more specific guidance after evaluation.",
  },
  {
    id: 7,
    question: "Can Human Care help with cardiac specialist appointments?",
    answer:
      "Human Care can assist with appointment coordination based on the selected hospital, cardiologist or cardiac surgeon, availability and the patient’s requirements.",
  },
  {
    id: 8,
    question: "Can you help with travel and accommodation?",
    answer:
      "Human Care can assist with selected travel, accommodation and local transfer arrangements for international patients, subject to the requested service and availability.",
  },
  {
    id: 9,
    question: "Are heart surgery results guaranteed?",
    answer:
      "No medical procedure should be presented as guaranteed for every patient. Outcomes vary according to the medical condition, procedure, individual circumstances and other clinical factors.",
  },
  {
    id: 10,
    question: "Is cardiac treatment in India always cheaper?",
    answer:
      "Costs vary by treatment, hospital, specialist and patient requirements. Patients should request a provider-specific estimate rather than relying on a fixed percentage of savings.",
  },
  {
    id: 11,
    question: "How can I contact Human Care Medical Tourism?",
    answer:
      "Use the contact options and CTA buttons on this page to discuss your cardiac-treatment and medical-travel requirements with the Human Care Medical Tourism team.",
  },
];

/* ════════════════════════════════════════════════
   ROOT EXPORT
════════════════════════════════════════════════ */
export default function CardiacLanding() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

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

  const goTo = (idx) => {
    if (idx === active) return;
    setActive(idx);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const t = TESTIMONIALS[active];

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
        <title>
          Affordable Cardiac Treatment in India for International Patients
        </title>
        <meta
          name="description"
          content="Explore cardiac treatment and heart-care options in India with support for hospital selection, cardiologist appointments, medical-report coordination and international patient arrangements."
        />
        <meta
          name="keywords"
          content="cardiac treatment in india, affordable cardiac treatment in india, heart treatment in india, heart surgery in india, cardiac treatment in india for international patients, best heart hospitals in india, cardiac hospitals in india, cardiologists in india, cardiac surgeons in india, heart surgery cost in india, cardiac treatment cost in india, heart bypass surgery in india, cabg in india, angioplasty in india, valve replacement in india, medical tourism for cardiac treatment, international cardiac treatment, cardiac care in india"
        />
        <link
          rel="canonical"
          href="https://humancaremedicaltourism.com/cardiac-treatment-india"
        />

        <meta
          property="og:title"
          content="Affordable Cardiac Treatment in India for International Patients"
        />
        <meta
          property="og:description"
          content="Explore cardiac treatment and heart-care options in India with support for hospital selection, cardiologist appointments, medical-report coordination and international patient arrangements."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://humancaremedicaltourism.com/cardiac-treatment-india"
        />
        <meta
          property="og:image"
          content="https://humancaremedicaltourism.com/src/departments/dept-images/cardiac-treatment-india-hero.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Affordable Cardiac Treatment in India for International Patients"
        />
        <meta
          name="twitter:description"
          content="Explore cardiac treatment and heart-care options in India with support for hospital selection, cardiologist appointments, medical-report coordination and international patient arrangements."
        />
        <meta
          name="twitter:image"
          content="https://humancaremedicaltourism.com/src/departments/dept-images/cardiac-treatment-india-hero.webp"
        />
      </Helmet>

      {/* ════ SECTION 1 — HERO ════ */}
      <section className="cardiac-hero-section">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Affordable cardiac treatment in India for international patients"
          className="hero-bg-image"
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1280}
          decoding="async"
        />

        {/* Gradient Overlay */}
        <div className="hero-overlay" />

        {/* Content */}
        <div className="hero-content">
          <span className="cardiac-hero-badge">
            International Patient Cardiac Care
          </span>

          <h1>
            Affordable Cardiac Treatment in India for International Patients
          </h1>

          <p>
            Explore cardiac treatment and heart-care options in India with
            support for hospital selection, cardiologist appointments,
            medical-report coordination and international patient arrangements.
          </p>
          <p>
            Human Care Medical Tourism assists international patients with
            cardiac-care coordination based on their medical requirements and
            travel needs.
          </p>

          <div className="hero-ctas">
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

      {/* ════ SECTION 2 — CARDIAC TREATMENT OPTIONS (two-column) ════ */}
      <section className="wi-section">
        <div className="wi-container">
          {/* Centered header */}
          <div className="wi-header">
            <span className="section-label-why">Cardiac Care in India</span>

            <h2 className="wi-heading">
              Cardiac Treatment Options in India for International Patients
            </h2>

            <p className="wi-subtext">
              India has hospitals and cardiac specialists providing evaluation,
              medical management and procedures across a range of heart-related
              conditions. International patients can compare providers based on
              the required specialty, hospital facilities, specialist
              availability, location and treatment requirements. Treatment
              suitability and cost depend on the individual patient, proposed
              procedure, hospital, specialist and other clinical factors.
            </p>
          </div>

          {/* Feature cards row */}
          <div className="wi-cards-row">
            {HERO_BULLETS.map((b, i) => (
              <div key={i} className="wi-feature-wrap">
                <div className="wi-feature-card">
                  <div className="wi-feature-circle">
                    <div className="wi-feature-icon">{b.icon}</div>
                  </div>

                  <h3 className="wi-feature-title">{b.text}</h3>
                  <p className="wi-feature-desc">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ht-section">
        {/* ── Background heart image ── */}
        <div className="ht-bg-overlay" aria-hidden="true">
          <img
            src={heartBg}
            alt=""
            className="ht-bg-img"
            width={626}
            height={417}
            decoding="async"
          />
        </div>

        <div className="ht-container">
          {/* ── LEFT — doctor image ── */}
          <div className="ht-left">
            <div className="ht-illustration">
              <img
                src={doctorImg}
                alt="heart specialist performing cardiac treatment in India"
                className="ht-doctor-img"
                loading="lazy"
                width={626}
                height={351}
                decoding="async"
              />
            </div>
          </div>

          {/* ── RIGHT — content ── */}
          <div className="ht-right">
            <p className="ht-eyebrow">Cardiac Care Excellence</p>

            <h2 className="ht-title">
              Affordable Cardiac Treatment{" "}
              <span className="ht-title--accent">
                Without Compromising Quality
              </span>
            </h2>

            <p className="ht-description">
              Cardiac treatment costs in India vary according to the diagnosis,
              investigations, procedure, hospital, specialist fees, room
              requirements, length of stay, medicines, follow-up and other
              individual factors. Patients can compare treatment options and
              request cost information from the relevant hospital or provider.
              Cost should be confirmed after review of the patient’s medical
              requirements.
            </p>

            <div className="ht-features">
              {features.map((f) => (
                <div className="ht-feat-card" key={f.id}>
                  <div className="ht-feat-icon">{f.icon}</div>
                  <div className="ht-feat-body">
                    <p className="ht-feat-title">{f.title}</p>
                    <p className="ht-feat-desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="ht-cta-wrap">
              <button className="ht-cta-btn">
                <FaArrowRight className="ht-cta-icon" />
                Request Your Treatment Plan &amp; Cost Estimate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 3 — HOSPITALS ════ */}
      <section className="hn-section">
        <div className="hn-container">
          <div className="hn-title-wrap">
            <span className="hn-label">Cardiac Treatment Providers in India</span>
            <h2 className="hn-heading">
              Heart Hospitals in India for Cardiac Treatment
            </h2>
            <p className="hn-subtitle">
              Cardiac hospitals in India provide different cardiology and
              cardiac-surgery services. The appropriate hospital depends on the
              patient’s condition, required specialty, available facilities,
              specialist availability and other individual requirements.
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
                          Cardiac Specialties:
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
      {/* ════ SECTION 4 — DOCTORS ════ */}
      <section className="doctor-section-light">
        <div className="doctor-container">
          <div className="doctor-title-wrap">
            <span className="doctor-label">Specialist Directory</span>
            <h2 className="doctor-h2">
              Cardiologists and Cardiac Specialists in India
            </h2>
            <p className="doctor-subtitle" style={{ maxWidth: "800px", margin: "12px auto 0", color: "#64748b", fontSize: "1rem", lineHeight: "1.6" }}>
              International patients can explore cardiologists and cardiac
              surgeons based on their treatment requirements, specialty,
              hospital affiliation, qualifications and verified professional
              information.
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
      {/* ════ SECTION 5 — WHY AFRICA REASONS (navy) ════ */}
      <section className="section-navy section-parallax">
        <div
          className="section-parallax-bg"
          style={{ backgroundImage: `url(${cardiologyBg})` }}
          aria-hidden="true"
        >
          <div className="section-parallax-overlay" />
        </div>
        <div className="why-choose-container">
          <div className="section-title-wrap">
            <span className="why-section-label">
              International Patient Considerations
            </span>
            <h2 className="why-section-h2">
              Why African Patients Choose India for Heart Treatment
            </h2>
            <p style={{ maxWidth: "820px", margin: "14px auto 0", color: "rgba(255, 255, 255, 0.85)", fontSize: "1.05rem", lineHeight: "1.6" }}>
              International patients from Africa may consider cardiac treatment
              in India based on hospital options, specialist availability,
              treatment requirements, travel arrangements and international
              patient support. Human Care assists with coordinating hospital
              information, specialist appointments, medical reports and
              selected travel-related arrangements.
            </p>
          </div>
          <div className="cards-grid-5">
            {REASONS.map((r, i) => (
              <div key={i} className="hover-lift reason-card">
                <div className="reason-icon">{r.emoji}</div>
                <h3 className="reason-title">{r.title}</h3>
                <p className="reason-desc" style={{ fontSize: "0.85rem", opacity: 0.8, marginTop: "6px" }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ════ SECTION 6 — SERVICES ════ */}
      <section className="services-section">
        <div className="services-container">
          <div className="service-title-wrap">
            <span className="service-label">Cardiac Specialties &amp; Procedures</span>
            <h2 className="service-h2">Types of Heart Treatments We Offer</h2>
            <p style={{ maxWidth: "700px", margin: "10px auto 0", color: "#64748b", fontSize: "0.95rem", lineHeight: "1.5" }}>
              Explore clinical evaluation and treatment options for common and complex cardiac conditions.
            </p>
          </div>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="icon-wrap">{s.icon}</div>
                <div className="card-text">
                  <h3 className="card-title">{s.title}</h3>
                  <p className="card-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ════ SECTION 7 — SUPPORT STEPS ════ */}
      <section className="support-section">
        {/* Left — Image */}
        <div className="support-image-wrap">
          <img
            src={hospitalImg}
            alt="cardiac treatment heart illustration showing heart anatomy"
            className="support-image"
            loading="lazy"
            width={1408}
            height={768}
            decoding="async"
          />
        </div>

        {/* Right — Content */}
        <div className="support-content">
          <span className="support-label">End-to-End Coordination</span>
          <h2 className="support-h2">
            International Patient Support Throughout Your Cardiac Treatment Journey
          </h2>
          <p style={{ color: "#64748b", margin: "12px 0 24px", lineHeight: "1.6", fontSize: "0.98rem" }}>
            Human Care assists with practical coordination so international
            patients can focus on their planned medical visit and communication
            with their healthcare providers. Medical treatment and recovery
            remain under the care of the treating healthcare professionals.
          </p>

          <div className="support-steps">
            {SUPPORT_STEPS.map((s, i) => (
              <div className="support-step" key={i}>
                <div className="step-icon-wrap">{s.icon}</div>
                <div className="step-text">
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ════ SECTION 8 — TESTIMONIALS ════ */}
      <section className="ts-section">
        {/* Light teal background */}
        <div className="ts-map-dots" aria-hidden="true" />

        <div className="ts-container">
          {/* ── Left card ── */}
          <div className="ts-inner">
            <div className="ts-card">
              <p className="ts-label">
                <span className="ts-label-icon">
                  <FaPills />
                </span>{" "}
                Patient Experiences
              </p>

              <h2 className="ts-heading">Our Testimonials – Let's Hear What They Say About Us</h2>
              <p style={{ color: "#64748b", margin: "8px 0 16px", fontSize: "0.95rem", lineHeight: "1.5" }}>
                Read experiences shared by patients who have used Human Care’s medical-tourism coordination services.
              </p>

              <div className="ts-quote-icon">
                <FaQuoteLeft />
              </div>

              <div key={active} className="ts-content">
                <p className="ts-quote-text">{`"${t.quote}"`}</p>

                <div className="ts-author">
                  <div className="ts-avatar" style={{ background: t.avatarBg }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="ts-author-name">{t.name}</p>
                    <p className="ts-author-designation">{t.designation}</p>
                  </div>
                </div>
              </div>

              {/* Dots */}
              <div className="ts-dots">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    className={`ts-dot ${i === active ? "ts-dot--active" : ""}`}
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Doctor image ── */}
          <div className="ts-right">
            <img
              src={testimonialRightImg}
              alt="cardiac specialist for international heart treatment in India"
              className="ts-doctor-img"
              loading="lazy"
              width={612}
              height={743}
              decoding="async"
            />
          </div>
        </div>
      </section>
      <section className="heart-faq-section" aria-labelledby="faq-heading">
        <div className="heart-faq-container">
          {/* Section Header */}
          <div className="heart-faq-header">
            <span className="heart-faq-badge">Heart Treatment FAQs</span>
            <h2 id="faq-heading" className="heart-faq-title">
              Frequently Asked Questions About Heart Treatment in India
            </h2>
            <p className="heart-faq-subtitle">
              Clear, factual information regarding cardiology consultations,
              cardiac surgery, hospital options, and international patient
              coordination in India.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="heart-faq-list">
            {faqData.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={faq.id}
                  className={`heart-faq-item ${isActive ? "active" : ""}`}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="heart-faq-question"
                    aria-expanded={isActive}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <h3 className="heart-faq-question-text">{faq.question}</h3>
                    <FaPlus
                      className={`heart-faq-icon ${isActive ? "rotate" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`heart-faq-answer ${isActive ? "open" : ""}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                  >
                    <div className="heart-faq-answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ════ SECTION 9 — FINAL CTA ════ */}
      <section id="contact" className="hcs-section">
        {/* Left illustration */}
        <div className="hcs-left-illo">
          <img
            src={doctorIlloImg}
            alt="experienced cardiac surgeon in India"
            className="hcs-illo-img"
            loading="lazy"
            width={322}
            height={367}
            decoding="async"
          />
          <svg
            className="hcs-heartbeat"
            viewBox="0 0 200 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline
              points="0,25 30,25 45,5 55,45 65,15 75,35 90,25 200,25"
              stroke="white"
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Center — original content */}
        <div className="hcs-center">
          <div className="cta-badge">
            <span className="animate-pulse badge-dot" />
            Medical Coordination Support
          </div>
          <h2 className="font-display hcs-heading">
            Get Cardiac Treatment Consultation
          </h2>
          <p className="hcs-subtitle">
            Discuss your cardiac-treatment requirements with Human Care Medical
            Tourism and receive assistance with hospital options, cardiologist
            or cardiac-surgeon coordination, appointments and international
            patient services.
          </p>
          <div className="cta-btns">
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-wa btn-wa--lg whatsapp-glow"
            >
              <WA size={6} /> WhatsApp Consultation
            </a>
            <a href="tel:+919833166697" className="btn-phone">
              <FaPhoneAlt /> Call Medical Coordinator
            </a>
          </div>
          <div className="cta-trust-row">
            {[
              { icon: <FaCheckCircle />, text: "JCI & NABH Accredited Hospitals" },
              { icon: <FaLock />, text: "Confidential Report Sharing" },
              { icon: <FaClock />, text: "Responsive Coordination Support" },
            ].map((b, i) => (
              <span key={i} className="cta-trust-item">
                {b.icon} {b.text}
              </span>
            ))}
          </div>
        </div>

        {/* Right illustration */}
        <div className="hcs-right-illo">
          <img
            src={heartIlloImg}
            alt="heart hospital in India for cardiac treatment coordination"
            className="hcs-illo-img"
            loading="lazy"
            width={197}
            height={252}
            decoding="async"
          />
        </div>
      </section>
    </>
  );
}
