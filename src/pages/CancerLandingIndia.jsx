import { useState, useEffect, useRef } from "react";

import "./CancerLandingIndia.css";

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
  FaHospital,
  FaMicroscope,
  FaGlobeAfrica,
  FaHandHoldingUsd,
} from "react-icons/fa";
import heroImage from "../departments/dept-images/cancer-treatment-india-hero.webp";
import OncologyAboutImage from "../departments/dept-images/oncology-care-india.webp";
import OncologyAboutImage1 from "../departments/dept-images/oncology-treatment-in-india.webp";

import oncologyImage1 from "../departments/dept-images/oncology-consultation-india.webp";
import oncologyImage2 from "../departments/dept-images/cancer-specialist-india.webp";
import oncologyImage3 from "../departments/dept-images/oncology-treatment-team-india.webp";

import BloodCancer from "../departments/dept-images/blood-cancer-treatment-india.webp";
import CyberKnife from "../departments/dept-images/cyberknife-treatment-india.webp";
import MouthCancer from "../departments/dept-images/mouth-cancer-treatment-india.webp";
import LungCancer from "../departments/dept-images/lung-cancer-treatment-india.webp";
import Chemotherapy from "../departments/dept-images/chemotherapy-india.webp";
import RadiationTherapy from "../departments/dept-images/radiation-therapy-india.webp";
import CervicalCancer from "../departments/dept-images/cervical-cancer-treatment-india.webp";
import BreastLumpectomy from "../departments/dept-images/breast-cancer-treatment-india.webp";
import BreastCancer from "../departments/dept-images/breast-cancer-treatment-in-india.webp";
import BoneMarrowTransplant from "../departments/dept-images/bone-marrow-transplant-india.webp";
import ProstateCancer from "../departments/dept-images/prostate-cancer-treatment-india.webp";
import CancerTreatment from "../departments/dept-images/cancer-treatment.webp";
import StemCellTherapy from "../departments/dept-images/stem-cell-therapy.webp";
import StomachCancer from "../departments/dept-images/stomach-cancer-treatment-india.webp";
import ColonCancer from "../departments/dept-images/colon-cancer-treatment-india.webp";
import EsophagealCancer from "../departments/dept-images/esophageal-cancer-treatment-india.webp";

import InternationalPatientServicesImage from "../departments/dept-images/international-patient-services-india.webp";

import ThumbnailImage from "../departments/dept-images/thumbail-eye-surgery.webp";

import CtaImage from "../departments/dept-images/cta-oncology-image.webp";

import apolloImage from "../departments/dept-images/best-dental-hospital-india.webp";

import medantaImage from "../departments/dept-images/best-dental-hospital-india.webp";

import fortisImage from "../departments/dept-images/multi-specialty-dental-hospital-india.webp";

import maxImage from "../departments/dept-images/top-dental-care-india.webp";

const WA = ({ size = 5 }) => (
  <FaWhatsapp className={`icon-wa icon-wa--${size}`} />
);

const WA_URL =
  "https://wa.me/919833166697?text=Hello%2C%20I%20need%20orthopedic%20treatment%20consultation";

const Check = () => <FaCheck className="icon-check" />;

const trustSignals = [
  {
    icon: <FaUserMd />,
    label: "Experienced medical, surgical, and radiation oncologists",
  },
  {
    icon: <FaHospital />,
    label: "Affordable cancer treatment abroad with transparent pricing",
  },
  {
    icon: <FaMicroscope />,
    label: "Robotic cancer surgery & precision oncology",
  },
  {
    icon: <FaGlobeAfrica />,
    label: "Advanced immunotherapy and targeted therapy in India",
  },
  {
    icon: <FaHandHoldingUsd />,
    label: "International patient departments with English-speaking staff",
  },
  {
    icon: <FaHandHoldingUsd />,
    label: "Modern cancer hospitals with global treatment standards",
  },
  {
    icon: <FaHandHoldingUsd />,
    label: "Faster treatment access and personalized care plans",
  },
];

const cancersServices = [
  {
    id: 1,
    title: "Blood Cancer",
    description:
      "Advanced blood cancer treatment in India includes chemotherapy, targeted therapy, immunotherapy, and bone marrow transplant procedures. Experienced hematology specialists provide personalized care for leukemia, lymphoma, and myeloma using modern diagnostic and treatment technologies.",
    image: BloodCancer,
    alt: "Blood cancer treatment in India",
  },
  {
    id: 2,
    title: "CyberKnife Treatment",
    description:
      "CyberKnife treatment in India offers non-invasive and highly precise radiation therapy for tumors affecting the brain, spine, lungs, prostate, and other organs. This advanced technology helps target cancer cells accurately while reducing damage to surrounding healthy tissues.",
    image: CyberKnife,
    alt: "CyberKnife cancer treatment in India",
  },
  {
    id: 3,
    title: "Mouth Cancer",
    description:
      "Mouth cancer treatment in India includes surgery, radiation therapy, chemotherapy, and reconstructive procedures based on the stage and location of the tumor. Early diagnosis and multidisciplinary oncology care help improve recovery and treatment outcomes for international patients.",
    image: MouthCancer,
    alt: "Mouth cancer treatment in India",
  },
  {
    id: 4,
    title: "Lung Cancer",
    description:
      "Lung cancer treatment in India includes minimally invasive surgery, chemotherapy, immunotherapy, targeted therapy, and precision radiation oncology. Patients searching for affordable lung cancer treatment abroad choose India for experienced specialists, advanced technology, and personalized treatment plans.",
    image: LungCancer,
    alt: "Lung cancer treatment in India",
  },
  {
    id: 5,
    title: "Chemotherapy",
    description:
      "Chemotherapy in India is provided using modern oncology protocols and careful patient monitoring. Treatment plans are personalized based on cancer type, stage, and patient health condition, helping improve treatment effectiveness while managing side effects safely.",
    image: Chemotherapy,
    alt: "Chemotherapy treatment in India",
  },
  {
    id: 6,
    title: "Radiation Therapy",
    description:
      "Radiation therapy in India uses advanced technologies such as IMRT, IGRT, and precision radiation oncology to treat different types of cancers. Modern radiation treatment helps improve accuracy, reduce side effects, and support faster recovery for patients.",
    image: RadiationTherapy,
    alt: "Radiation therapy treatment in India",
  },
  {
    id: 7,
    title: "Cervical Cancer",
    description:
      "Cervical cancer treatment in India includes surgery, chemotherapy, radiation therapy, and targeted oncology care. Leading cancer hospitals provide advanced diagnosis and personalized treatment plans for early-stage and advanced cervical cancer patients from international locations.",
    image: CervicalCancer,
    alt: "Cervical cancer treatment in India",
  },
  {
    id: 7,
    title: "Breast Lumpectomy",
    description:
      "Breast lumpectomy in India is performed by experienced surgical oncology teams using breast-conserving techniques whenever possible. This procedure helps remove cancerous tissue while preserving the appearance of the breast and supporting quicker recovery.",
    image: BreastLumpectomy,
    alt: "Breast lumpectomy treatment in India",
  },
  {
    id: 8,
    title: "Breast Cancer",
    description:
      "Breast cancer treatment in India includes surgery, chemotherapy, radiation therapy, hormone therapy, and targeted therapy. Patients benefit from multidisciplinary oncology care, modern breast imaging technologies, and experienced breast cancer specialists across leading cancer hospitals.",
    image: BreastCancer,
    alt: "Breast cancer treatment in India",
  },
  {
    id: 9,
    title: "BMT (Bone Marrow Transplant)",
    description:
      "Bone marrow transplant in India is available for patients with leukemia, lymphoma, aplastic anemia, and other blood disorders. Advanced transplant units, experienced hematology specialists, and affordable treatment costs make India a preferred destination for BMT treatment.",
    image: BoneMarrowTransplant,
    alt: "Bone marrow transplant treatment in India",
  },
  {
    id: 10,
    title: "Prostate Cancer",
    description:
      "Prostate cancer treatment in India includes robotic surgery, radiation therapy, hormone therapy, immunotherapy, and targeted oncology care. International patients often choose India for affordable robotic prostate surgery and access to experienced uro-oncology specialists.",
    image: ProstateCancer,
    alt: "Prostate cancer treatment in India",
  },
  {
    id: 10,
    title: "Cancer Treatment",
    description:
      "Cancer treatment in India combines advanced medical technology, experienced oncologists, and personalized care plans for different types of cancers. Patients benefit from affordable oncology treatment, shorter waiting times, and dedicated international patient support services.",
    image: CancerTreatment,
    alt: "Cancer treatment in India",
  },
  {
    id: 10,
    title: "Stem Cell Therapy",
    description:
      "Stem cell therapy in India is used in selected oncology and hematology treatments under expert medical supervision. Advanced medical centers provide personalized treatment protocols and supportive care for eligible patients requiring regenerative or transplant-based therapies.",
    image: StemCellTherapy,
    alt: "Stem cell therapy in India",
  },
  {
    id: 10,
    title: "Stomach Cancer",
    description:
      "Stomach cancer treatment in India includes surgical oncology, chemotherapy, targeted therapy, and radiation therapy based on the stage of cancer. Multidisciplinary treatment planning helps improve recovery and long-term treatment outcomes for international patients.",
    image: StomachCancer,
    alt: "Stomach cancer treatment in India",
  },
  {
    id: 10,
    title: "Colon Cancer",
    description:
      "Colon cancer treatment in India includes minimally invasive surgery, chemotherapy, immunotherapy, and precision radiation therapy. Advanced diagnostic technologies and experienced gastrointestinal oncology specialists help provide personalized cancer care for better outcomes.",
    image: ColonCancer,
    alt: "Colon cancer treatment in India",
  },
  {
    id: 10,
    title: "Esophageal Cancer",
    description:
      "Esophageal cancer treatment in India includes surgery, chemotherapy, radiation therapy, and targeted treatment approaches. Leading oncology hospitals provide advanced thoracic oncology care with personalized treatment plans and rehabilitation support for international patients.",
    image: EsophagealCancer,
    alt: "Esophageal cancer treatment in India",
  },
];

const steps = [
  {
    number: "01",
    title: "Share Medical Reports",
    description:
      "Patients can send scans, biopsy reports, pathology slides, and previous treatment records online for review.",
  },
  {
    number: "02",
    title: "Online Consultation",
    description:
      "International patient coordinators arrange virtual consultations with cancer specialists in India.",
  },
  {
    number: "03",
    title: "Personalized Treatment Plan & Cost Estimate",
    description:
      "Doctors provide treatment recommendations, expected duration, and estimated treatment costs.",
  },
  {
    number: "04",
    title: "Medical Visa & Travel Assistance",
    description:
      "Hospitals assist with medical visa invitation letters, airport pickup, hotel stay, and local travel support.",
  },
  {
    number: "05",
    title: "Cancer Treatment in India",
    description:
      "Patients receive treatment using advanced oncology technology and personalized care protocols.",
  },
  {
    number: "06",
    title: "Recovery & Follow-Up Support",
    description:
      "Post-treatment monitoring, online follow-ups, rehabilitation, and medication guidance continue even after returning home.",
  },
];

const DOCTORS = [
  {
    name: "Dr. Rajesh Kumar",
    spec: "Ophthalmologist Surgeon",
    desc: "25+ years of experience in total knee replacement, hip replacement, and advanced ophthalmology surgery in India.",
    photoUrl:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop",
  },
  {
    name: "Dr. Priya Nair",
    spec: "Robotic Joint Replacement Specialist",
    desc: "Specialist in robotic knee replacement surgery and minimally invasive ophthalmology procedures.",
    photoUrl:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop",
  },
  {
    name: "Dr. Suresh Mehta",
    spec: "Spine and Trauma Surgeon",
    desc: "Expert in spine surgery, trauma care, and advanced ophthalmology treatment for international patients.",
    photoUrl:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=300&fit=crop",
  },
  {
    name: "Dr. Amit Verma",
    spec: "Knee Replacement Specialist",
    desc: "Experienced ophthalmology specialist focusing on knee replacement surgery and joint preservation treatment.",
    photoUrl:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=300&fit=crop",
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
      "Cardiothoracic Surgery (Heart Surgery)",
      "Electrophysiology (Heart Rhythm)",
      "Pediatric Cardiology",
    ],
  },
  {
    name: "Medanta",
    sub: "The Medicity",
    image: medantaImage,
    location: "Gurgaon, India",
    rating: 4.8,
    accreditations: ["JCI", "NABH"],
    specialties: ["Heart Transplant", "TAVR", "Robotic Surgery"],
  },
  {
    name: "Fortis",
    sub: "Healthcare",
    image: fortisImage,
    location: "Delhi NCR, India",
    rating: 4.7,
    accreditations: ["JCI", "NABH"],
    specialties: [
      "Cardiothoracic & Vascular Surgery (CTVS)",
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
      "Heart Failure & Transplant Care",
    ],
  },
];

const faqData = [
  {
    id: 1,
    question:
      "Why do international patients choose India for cancer treatment?",
    answer:
      "India offers affordable cancer treatment, experienced oncologists, advanced medical technology, internationally accredited hospitals, and dedicated international patient support services.",
  },
  {
    id: 2,
    question: "How much does cancer treatment cost in India?",
    answer:
      "Cancer treatment costs in India depend on the cancer type, treatment plan, hospital, and duration, but are generally lower than South Africa, the UK, and the USA.",
  },
  {
    id: 3,
    question: "Is chemotherapy affordable in India?",
    answer:
      "Yes, chemotherapy cost in India is comparatively affordable while maintaining high treatment standards, modern oncology protocols, and personalized patient care.",
  },
  {
    id: 4,
    question: "What types of cancers are treated in India?",
    answer:
      "Hospitals in India treat prostate cancer, lung cancer, breast cancer, blood cancer, colon cancer, stomach cancer, cervical cancer, and many other complex cancers.",
  },
  {
    id: 5,
    question: "Is robotic surgery available for cancer treatment in India?",
    answer:
      "Yes, many leading oncology hospitals in India offer robotic cancer surgery for prostate cancer, gastrointestinal cancers, and other complex oncology procedures.",
  },
  {
    id: 6,
    question: "Do hospitals in India provide medical visa assistance?",
    answer:
      "Most international patient departments help with medical visa invitation letters, documentation support, and travel coordination for overseas patients.",
  },
  {
    id: 7,
    question: "How can I get a treatment plan before traveling to India?",
    answer:
      "Patients can share medical reports online and receive an expert opinion, estimated treatment plan, and approximate treatment cost before traveling.",
  },
  {
    id: 8,
    question:
      "Are international patient coordinators available in Indian hospitals?",
    answer:
      "Yes, dedicated coordinators assist international patients with appointments, accommodation, airport pickup, interpreters, and follow-up support.",
  },
  {
    id: 9,
    question:
      "How long do cancer patients usually stay in India for treatment?",
    answer:
      "The duration depends on the treatment type, cancer stage, surgery requirements, chemotherapy cycles, and recovery progress recommended by the oncology team.",
  },
  {
    id: 10,
    question: "How do I choose the best oncologist in India?",
    answer:
      "Patients should consider doctor experience, specialization, hospital infrastructure, treatment technology, patient reviews, and multidisciplinary cancer care expertise.",
  },
];

// CancerServiceCard Component
function EyesServiceCard({ service }) {
  return (
    <div className="cancer-service-card">
      <img
        src={service.image}
        alt={service.alt}
        className="cancer-service-card-image"
        loading="lazy"
      />
      <div className="cancer-service-card-overlay" />
      <div className="cancer-service-card-content">
        <div className="cancer-service-card-top">
          <h3 className="cancer-service-card-title">{service.title}</h3>
        </div>
        <p className="cancer-service-card-desc">{service.description}</p>
      </div>
    </div>
  );
}

const reviews = [
  {
    name: "Allison Hayes",
    text: '"After my eye surgery in India, I finally have a healthy smile. The doctors were incredibly professional and caring."',
  },
  {
    name: "Brooke Sullivan",
    text: '"The entire experience from online consultation to treatment was seamless. The clinic in Mumbai was world-class, and I saved significantly compared to back home."',
  },
  {
    name: "Allison Hayes",
    text: '"After my eye surgery in India, I finally have a healthy smile. The doctors were incredibly professional and caring."',
  },
  {
    name: "Allison Hayes",
    text: '"After my eye surgery in India, I finally have a healthy smile. The doctors were incredibly professional and caring."',
  },
];
const Stars = () => (
  <div className="eye-reviews-stars">
    {"★★★★★".split("").map((s, i) => (
      <span key={i}>{s}</span>
    ))}
  </div>
);

export default function OncologyTreatmentIndia() {
  const [hoveredId, setHoveredId] = useState(null);
  const [active, setActive] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

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

  return (
    <>
      {/* ════ SECTION 1 — HERO ════ */}
      <section className="oncology-hero-section">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Affordable Cancer treatment in India for international patients"
          className="oncology-hero-bg-image"
          loading="eager"
        />

        {/* Gradient Overlay */}
        <div className="oncology-hero-overlay" />

        {/* Content */}
        <div className="oncology-hero-content">
          <span className="oncology-hero-badge">
            Trusted by 50,000+ International Patients
          </span>

          <h1>Cancer Treatment in India for International Patients</h1>

          <p>
            India is one of the leading destinations for affordable and advanced
            cancer treatment. International patients trust Indian oncology
            hospitals for experienced cancer specialists, modern technology, and
            cost-effective treatment.
          </p>

          <div className="oncology-hero-ctas">
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

      <section className="cancer-care-section">
        <div className="cancer-care-container">
          {/* ── Left Content Panel ── */}
          <div className="cancer-care-left">
            <h1 className="cancer-care-heading">
              <span className="cancer-care-heading-accent">
                <h1>
                  Affordable Cancer Treatment in India with Top Oncologists
                </h1>
              </span>
            </h1>

            <p className="cancer-care-body">
              Looking for the best oncologist in india for affordable and
              advanced cancer treatment? India is trusted by international
              patients for modern oncology care, experienced cancer specialists,
              and compassionate support.
            </p>

            <p className="cancer-care-body">
              From prostate cancer and lung cancer treatment to chemotherapy,
              immunotherapy, robotic surgery, and radiation therapy, India
              offers high-quality cancer care at affordable costs compared to
              South Africa, the UK, and the USA.
            </p>
            <p className="cancer-care-body">
              Patients from Kenya, Uganda, Tanzania, Nigeria, and other African
              countries choose India for personalized treatment plans, advanced
              technology, shorter waiting times, and dedicated international
              patient services.
            </p>

            <h2 className="cancer-care-trust-heading">
              Why International Patients Choose India
            </h2>

            <ul className="cancer-care-trust-list">
              {trustSignals.map((item, idx) => (
                <li key={idx} className="cancer-care-trust-item">
                  <span className="cancer-care-trust-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="cancer-care-trust-label">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right Image Panel ── */}
          <div className="cancer-care-right">
            <div className="cancer-care-img-wrapper cancer-care-img-top">
              <img
                src={OncologyAboutImage}
                alt="Advanced oncology care in India"
                className="cancer-care-img"
              />
            </div>

            <div className="cancer-care-img-wrapper cancer-care-img-bottom">
              <img
                src={OncologyAboutImage1}
                alt="Oncology treatment in India with advanced cancer care"
                className="cancer-care-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 3 — WHY CHOOSE INDIA ════ */}
      <section className="why-choose-india-section">
        <div className="why-choose-container">
          <div className="why-choose-header">
            <h2 className="why-choose-heading">
              Why Choose India for Cancer Treatment?
            </h2>
            <p className="why-choose-subheading">
              India has become a preferred destination for patients seeking
              affordable and high-quality oncology care.
            </p>
          </div>

          <div className="why-choose-cards-grid">
            {/* Card 1: Affordable Treatment Costs */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaMoneyBillWave />
              </div>
              <h3 className="why-choose-card-title">
                Affordable Treatment Costs
              </h3>
              <p className="why-choose-card-text">
                India offers advanced cancer treatment at significantly lower
                costs compared to South Africa, the UK, and the USA.
                International patients can access high-quality oncology care,
                modern treatment technologies, and experienced cancer
                specialists without the financial burden often associated with
                cancer treatment abroad. Transparent pricing and personalized
                treatment plans also help patients plan their medical journey
                with confidence.
              </p>
            </div>

            {/* Card 2: Internationally Accredited Hospitals */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaShieldAlt />
              </div>
              <h3 className="why-choose-card-title">
                Internationally Accredited Hospitals
              </h3>
              <p className="why-choose-card-text">
                Many <strong>oncology hospitals in India</strong> are
                internationally recognized for their advanced infrastructure,
                patient safety standards, and multidisciplinary cancer care.
                These hospitals provide modern diagnostic facilities,
                specialized oncology departments, and dedicated international
                patient services, ensuring a safe, comfortable, and trusted
                treatment experience for patients traveling from African
                countries and other international destinations.
              </p>
            </div>

            {/* Card 3: Experienced Oncology Specialists */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaUserMd />
              </div>
              <h3 className="why-choose-card-title">
                Experienced Oncology Specialists
              </h3>
              <p className="why-choose-card-text">
                India is home to highly experienced medical oncologists,
                surgical oncologists, radiation oncologists, and cancer surgeons
                who manage complex cancer cases every day. Patients benefit from
                personalized treatment planning, multidisciplinary tumor board
                discussions, and access to specialists for prostate cancer, lung
                cancer, breast cancer, and other advanced oncology treatments
                across leading hospitals in major Indian cities.
              </p>
            </div>

            {/* Card 4: Advanced Oncology Technology */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaRobot />
              </div>
              <h3 className="why-choose-card-title">
                Advanced Oncology Technology
              </h3>
              <p className="why-choose-card-text">
                Leading cancer hospitals in India use advanced technologies such
                as robotic surgery, PET-CT imaging, precision radiation therapy,
                immunotherapy, targeted therapy, and genomic-based treatment
                planning. These modern treatment approaches help improve
                treatment accuracy, reduce side effects, support faster
                recovery, and provide personalized cancer care for both
                early-stage and advanced cancer patients.
              </p>
            </div>

            {/* Card 5: Dedicated International Patient Services */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaGlobe />
              </div>
              <h3 className="why-choose-card-title">
                Dedicated International Patient Services
              </h3>
              <p className="why-choose-card-text">
                International patients traveling to India for cancer treatment
                receive complete support throughout their medical journey.
                Hospitals assist with medical visa documentation, airport
                pickup, accommodation arrangements, appointment scheduling,
                interpreter services, and post-treatment follow-up coordination.
                Dedicated international patient teams help make the treatment
                process smoother, more comfortable, and stress-free for patients
                and their families.
              </p>
            </div>

            {/* Card 6: Short Waiting Time */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaClock />
              </div>
              <h3 className="why-choose-card-title">Short Waiting Time</h3>
              <p className="why-choose-card-text">
                Unlike many countries where cancer treatment may involve long
                waiting periods, hospitals in India often provide faster access
                to consultations, diagnostics, surgery, chemotherapy, and
                radiation therapy. Early diagnosis and timely treatment can play
                an important role in improving outcomes, making India a
                preferred destination for patients seeking quicker oncology care
                and immediate medical attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION — PATIENT JOURNEY ════ */}
      <section className="patient-journey-section">
        <div className="patient-journey-container">
          {/* ── Left: Image ── */}
          <div className="patient-journey-image">
            <img
              src={InternationalPatientServicesImage}
              alt="International patient services for cancer treatment in India"
              className="patient-journey-img"
            />
          </div>

          {/* ── Right: Content ── */}
          <div className="patient-journey-content">
            <h2 className="patient-journey-heading">
              International Patient Journey
            </h2>

            <p className="patient-journey-text">
              From initial consultation to post-treatment follow-up, we guide
              international patients through every step of their cancer
              treatment journey in India with complete support and personalized
              care coordination.
            </p>

            <div className="patient-journey-steps">
              {steps.map((step, index) => (
                <div className="patient-journey-step" key={index}>
                  <div className="step-number-badge">{step.number}</div>
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 4 — ONCOLOGY TREATMENT IN INDIA ════ */}
      <section className="oncology-treatment-section">
        <div className="oncology-treatment-container">
          {/* ── Left: Images Grid ── */}
          <div className="oncology-treatment-images">
            <div className="oncology-img-wrapper oncology-img-1">
              <img
                src={oncologyImage1}
                alt="Oncology consultation with cancer specialist in India"
                className="oncology-img"
              />
            </div>
            <div className="oncology-img-wrapper oncology-img-2">
              <img
                src={oncologyImage2}
                alt="Cancer specialist providing oncology treatment in India"
                className="oncology-img"
              />
            </div>
            <div className="oncology-img-wrapper oncology-img-3">
              <img
                src={oncologyImage3}
                alt="Multidisciplinary oncology treatment team in India"
                className="oncology-img"
              />
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="oncology-treatment-content">
            <span className="oncology-treatment-label">
              WHAT IS INCLUDED IN CANCER TREATMENT IN INDIA
            </span>

            <h2 className="oncology-treatment-heading">
              Oncology Treatment in India
            </h2>

            <p className="oncology-treatment-text">
              India is now recognized globally for advanced oncology treatment,
              highly trained cancer specialists, and affordable healthcare
              infrastructure.
            </p>

            <p className="oncology-treatment-text">
              International patients choose India because they can access modern
              cancer care without the extremely high treatment costs often seen
              in Western countries.
            </p>

            <h3 className="oncology-treatment-subheading">
              Why Patients Travel to India for Cancer Treatment
            </h3>

            <div className="oncology-treatment-cards">
              {/* Card 1: Advanced Cancer Technology */}
              <div className="oncology-treatment-card">
                <h4 className="oncology-card-title">
                  Experienced Cancer Specialists
                </h4>
                <p className="oncology-card-text">
                  India is home to some of the most experienced medical
                  oncology, surgical oncology, and radiation oncology experts.
                  Patients searching for the{" "}
                  <strong>best oncologist in india</strong> often choose leading
                  cancer centers in Mumbai, Delhi, Chennai, Hyderabad,
                  Bangalore, Ahmedabad, Kolkata, and Kerala.
                </p>
              </div>

              {/* Card 2: International Treatment Standards */}
              <div className="oncology-treatment-card">
                <h4 className="oncology-card-title">
                  International Treatment Standards
                </h4>
                <p className="oncology-card-text">
                  Many <strong>cancer hospitals in India</strong> follow
                  international clinical protocols and have globally accredited
                  facilities focusing on patient safety, infection control,
                  personalized oncology care, multidisciplinary treatment
                  planning, and evidence-based approaches.
                </p>
              </div>

              {/* Card 3: Affordable Cancer Treatment */}
              <div className="oncology-treatment-card">
                <h4 className="oncology-card-title">
                  Affordable Cancer Treatment
                </h4>
                <p className="oncology-card-text">
                  One of the biggest reasons patients choose India is
                  affordability. <strong>Cancer treatment in India</strong> can
                  often cost 50–80% less than treatment in South Africa, the UK,
                  Europe, or the USA while still providing advanced medical
                  care.
                </p>
              </div>

              {/* Card 4: Benefits for International Patients */}
              <div className="oncology-treatment-card">
                <h4 className="oncology-card-title">
                  Benefits for International Patients
                </h4>
                <p className="oncology-card-text">
                  Short waiting periods, faster diagnosis and treatment
                  initiation, English-speaking medical teams, dedicated
                  international patient departments, advanced diagnostic
                  facilities, and personalized treatment coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cancer-services-section">
        {/* Header */}
        <div className="cancer-services-header">
          <h2 className="cancer-services-title">
            Types of Cancer Treatments in India
          </h2>
          <p className="cancer-services-description">
            India offers advanced and personalized{" "}
            <strong>prostate cancer treatment in india</strong> using modern
            technologies and multidisciplinary care. Patients looking for the
            <strong>best prostate cancer treatment in india</strong> often
            travel to Mumbai, Ahmedabad, Chennai, and Delhi for robotic surgery,
            radiation therapy, hormone therapy, and immunotherapy.
          </p>
        </div>

        {/* All Cards in One Grid */}
        <div className="cancer-services-grid">
          {cancersServices.map((service) => (
            <EyesServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="hn-section">
        <div className="hn-container">
          <div className="hn-title-wrap">
            <span className="hn-label">Our Hospital Network</span>
            <h2 className="hn-heading">Best Cancer Hospitals in India</h2>
            <p className="hn-subtitle">
              India has several internationally recognized oncology hospitals
              equipped with advanced cancer technology, multidisciplinary
              treatment teams, and dedicated international patient departments.
              Leading cancer hospitals in Mumbai, Delhi, Chennai, Hyderabad,
              Bangalore, and Ahmedabad offer comprehensive oncology care
              including chemotherapy, robotic surgery, radiation therapy,
              immunotherapy, targeted therapy, and personalized treatment
              planning for various types of cancers.
            </p>
          </div>
          <div className="hn-grid">
            {HOSPITALS.map((h, i) => (
              <div key={i} className="hn-card">
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
                      Eye Care Specialties:
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
            ))}
          </div>
        </div>
      </section>

      <section className="doctor-section-light">
        <div className="doctor-container">
          <div className="doctor-title-wrap">
            <span className="doctor-label">Our Specialists</span>
            <h2 className="doctor-h2">Best Oncologists in India</h2>
            <p className="doctor-subtitle">
              India is home to highly experienced oncology specialists known for
              treating complex cancer cases using multidisciplinary approaches,
              advanced diagnostics, robotic surgery, immunotherapy, and
              precision radiation therapy. Leading cancer specialists across
              Mumbai, Delhi, Chennai, Hyderabad, Bangalore, and Ahmedabad
              provide personalized oncology care for prostate cancer, lung
              cancer, breast cancer, blood cancer, and other advanced cancer
              conditions.
            </p>
          </div>
          <div className="doctor-cards-grid">
            {DOCTORS.map((d, i) => (
              <div key={i} className="doctor-card">
                <img
                  src={d.photoUrl}
                  alt={`${d.name} - ${d.spec} in India specializing in cancer surgery and ophthalmology`}
                  className="doctor-card-photo"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <div className="doctor-card-body">
                  <span className="doctor-spec">{d.spec}</span>
                  <h3 className="doctor-name">{d.name}</h3>
                  <p className="doctor-desc">{d.desc}</p>
                  {/* <button className="doctor-btn">See profile</button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cancer-reviews-section">
        <div className="cancer-reviews-content">
          <h2 className="cancer-reviews-heading">Our Clients Review</h2>

          {/* Slider wrapper */}
          <div className="cancer-reviews-slider-wrapper">
            <div
              className="cancer-reviews-slider-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((pair, slideIndex) => (
                <div key={slideIndex} className="cancer-reviews-slide">
                  {pair.map((r, cardIndex) => (
                    <div key={cardIndex} className="cancer-reviews-card">
                      <Stars />
                      <p className="cancer-reviews-card-text">{r.text}</p>
                      <p className="cancer-reviews-card-name">{r.name}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="cancer-reviews-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`cancer-reviews-dot ${currentSlide === index ? "active" : ""}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Rating summary */}
          <div className="cancer-reviews-summary">
            <div>
              <span className="cancer-reviews-rating-number">4.98</span>
              <span className="cancer-reviews-rating-label">Ratings</span>
              <div
                className="cancer-reviews-stars"
                style={{ marginTop: "6px" }}
              >
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <p className="cancer-reviews-rating-description">
                Rated 4.9 stars based on 1200+ reviews
              </p>
            </div>
          </div>
        </div>

        <div className="cancer-reviews-image-wrapper">
          <img
            src={ThumbnailImage}
            alt="Happy international cancer patient in India"
            className="cancer-reviews-image"
          />
        </div>
      </section>

      <section className="cancer-faq-section" aria-labelledby="faq-heading">
        <div className="cancer-faq-container">
          {/* Section Header */}
          <div className="cancer-faq-header">
            <span className="cancer-faq-badge">Oncology Treatment FAQs</span>
            <h2 id="faq-heading" className="cancer-faq-title">
              Frequently Asked Questions About cancer Treatment in India
            </h2>
            <p className="cancer-faq-subtitle">
              Get answers to common questions about cancer care, best cancer
              hospitals, and treatment options in India
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="cancer-faq-list">
            {faqData.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={faq.id}
                  className={`cancer-faq-item ${isActive ? "active" : ""}`}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="cancer-faq-question"
                    aria-expanded={isActive}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <h3 className="cancer-faq-question-text">{faq.question}</h3>
                    <FaPlus
                      className={`cancer-faq-icon ${isActive ? "rotate" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`cancer-faq-answer ${isActive ? "open" : ""}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                  >
                    <div className="cancer-faq-answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cancer-cta-section">
        {/* Background Image */}
        <img
          src={CtaImage}
          alt="Book oncology consultation in India"
          className="cancer-cta-bg-image"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="cancer-cta-overlay" />

        {/* Content Container */}
        <div className="cancer-cta-container">
          <div className="cancer-cta-content">
            <span className="cancer-cta-badge">
              Protect & Restore Your Vision
            </span>

            <h2 className="cancer-cta-title">
              Book Your Oncology Consultation
            </h2>

            <p className="cancer-cta-subtitle">
              Start your ophthalmology treatment journey in India with
              experienced joint replacement specialists and internationally
              trusted hospitals.
            </p>

            <div className="cancer-cta-benefits-list">
              <div className="cancer-cta-benefit-point">
                <FaCheckCircle className="cancer-cta-check-icon" />
                <span>Personalized treatment plans</span>
              </div>
              <div className="cancer-cta-benefit-point">
                <FaCheckCircle className="cancer-cta-check-icon" />
                <span>Transparent pricing</span>
              </div>
              <div className="cancer-cta-benefit-point">
                <FaCheckCircle className="cancer-cta-check-icon" />
                <span>Expert cancer specialists</span>
              </div>
              <div className="cancer-cta-benefit-point">
                <FaCheckCircle className="cancer-cta-check-icon" />
                <span>International patient support</span>
              </div>
              <div className="cancer-cta-benefit-point">
                <FaCheckCircle className="cancer-cta-check-icon" />
                <span>Modern and safe cancer care</span>
              </div>
            </div>

            <div className="cancer-hero-ctas">
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
        </div>
      </section>
    </>
  );
}
