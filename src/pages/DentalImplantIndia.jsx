import { useState, useEffect, useRef } from "react";
import "./DentalImplantIndia.css";

import { Helmet } from "react-helmet";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


import {
  FaCheck,
  FaCheckCircle,
  FaPhoneAlt,
  FaStar,
  FaWhatsapp,
  FaPlus,
  FaTimes,
} from "react-icons/fa";

import DentalHeroImage from "../departments/dept-images/dental-implants-india.webp";

import WhyChooseIndiaImage from "../departments/dept-images/affordable-dental-treatment-india.webp";

import SmileMakeoverImage from "../departments/dept-images/smile-makeover-treatment-india.webp";

import DentalImplantImage from "../departments/dept-images/dental-implant-treatment-india.webp";

import PainlessRootCanalImage from "../departments/dept-images/painless-root-canal-treatment-india.webp";

import CosmeticDentistryImage from "../departments/dept-images/cosmetic-dentistry-india.webp";

import Orthodontics from "../departments/dept-images/orthodontic-treatment-india.webp";

import WhiteningTeethImage from "../departments/dept-images/teeth-whitening-treatment-india.webp";

import InvisibleBracesImage from "../departments/dept-images/invisible-braces-india.webp";

import AdvancedGumCareImage from "../departments/dept-images/advanced-gum-care-india.webp";

import Dental1 from "../departments/dept-images/modern-dental-clinic-india.webp";

import Dental2 from "../departments/dept-images/experienced-dentists-india.webp";

import Dental3 from "../departments/dept-images/international-patient-dental-care-india.webp";

import asterDentalImage from "../departments/dept-images/dentist/best-dentist-hospital-india.webp";
import apolloDentalImage from "../departments/dept-images/dentist/best-dental-hospital-india.webp";
import fortisDentalImage from "../departments/dept-images/dentist/best-dental-fortis-hospital-india.webp";
import cloveDentalImage from "../departments/dept-images/dentist/dental-implant-in-india.webp";
import manipalDentalImage from "../departments/dept-images/dentist/gum-disease-treatment-in-india.webp";
import maxDentalImage from "../departments/dept-images/dentist/full-mouth-implants-in-india.webp";

import ReviewRightImage from "../departments/dept-images/happy-dental-patient-india.webp";

import CtaImage from "../departments/dept-images/book-dental-consultation-india.webp";

const Check = () => <FaCheck className="icon-check" />;

import ShoebShaikhImage from "../departments/dept-images/dentist/shoeb-shaikh.webp";
import AnisaShaikhImage from "../departments/dept-images/dentist/anisa-shaikh.webp";
import BinalShahImage from "../departments/dept-images/dentist/binal-shah.webp";
import VarunSaojiImage from "../departments/dept-images/dentist/varun-saoji.webp";
import BinilaSBabuImage from "../departments/dept-images/dentist/binila-babu.webp";
import SameerPImage from "../departments/dept-images/dentist/sameer-p.webp";
import CSharathBabuImage from "../departments/dept-images/dentist/c-sharath-babu.webp";
import ApurvaGujarathiImage from "../departments/dept-images/dentist/apurva-gujarathi.webp";

const WA_URL = "https://wa.me/919833166697";

const WA = ({ size = 5 }) => (
  <FaWhatsapp className={`icon-wa icon-wa--${size}`} />
);

/* ── Reusable Feature Item ── */
function FeatureItem({ icon, title, desc, align = "left" }) {
  const isRight = align === "right";
  return (
    <div
      className={`dental-feature-item ${isRight ? "dental-feature-item--right" : ""}`}
    >
      <div className="dental-feature-content">
        <h3 className="dental-feature-title">{title}</h3>
        <p className="dental-feature-description">{desc}</p>
      </div>
      <div className="dental-feature-icon">{icon}</div>
    </div>
  );
}

/* ── Icons ── */
const iconStyle = {
  width: 30,
  height: 30,
  stroke: "#0a1754",
  fill: "none",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const AffordableIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v12M9 9h4.5a1.5 1.5 0 010 3H10a1.5 1.5 0 000 3H15" />
  </svg>
);
const DoctorIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle}>
    <path d="M20 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
    <path d="M16 3H8a1 1 0 00-1 1v3h10V4a1 1 0 00-1-1z" />
    <path d="M12 12v4M10 14h4" />
  </svg>
);
const PaymentIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </svg>
);
const EmergencyIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    <path d="M15 1h6v6M21 1l-7 7" />
  </svg>
);
const ReviewIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const TechIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const services = [
  {
    id: 1,
    title: "Cosmetic Dentistry",
    description:
      "Dental procedures intended to address selected aesthetic concerns after consultation, including veneers, composite bonding, and aesthetic restorations.",
    image: SmileMakeoverImage,
    alt: "Cosmetic dentistry and smile makeover in India",
  },
  {
    id: 2,
    title: "Dental Implants",
    description:
      "Implant-based tooth replacement options for selected patients after dental evaluation, including single-tooth, multi-unit, and full-arch solutions.",
    image: DentalImplantImage,
    alt: "Dental implant procedure in India",
  },
  {
    id: 3,
    title: "Dental Crowns",
    description:
      "Restorative options used to protect or restore damaged teeth when clinically appropriate following endodontic or restorative treatment.",
    image: PainlessRootCanalImage,
    alt: "Dental crowns and restorative care in India",
  },
  {
    id: 4,
    title: "Oral & Maxillofacial Care",
    description:
      "Specialist assessment and treatment for selected conditions involving the mouth, jaw, and related craniofacial structures.",
    image: CosmeticDentistryImage,
    alt: "Oral and maxillofacial care in India",
  },
  {
    id: 5,
    title: "Teeth Alignment",
    description:
      "Orthodontic options for selected alignment and bite concerns using modern bracket systems and functional appliances.",
    image: Orthodontics,
    alt: "Teeth alignment and orthodontic treatment in India",
  },
  {
    id: 6,
    title: "Teeth Whitening",
    description:
      "Professional whitening options for selected types of tooth discoloration following comprehensive dental evaluation.",
    image: WhiteningTeethImage,
    alt: "Professional teeth whitening treatment in India",
  },
  {
    id: 7,
    title: "Invisible Braces",
    description:
      "Clear or less-visible orthodontic options where clinically suitable for mild to moderate dental alignment corrections.",
    image: InvisibleBracesImage,
    alt: "Invisible braces and clear aligners in India",
  },
  {
    id: 8,
    title: "Advanced Dental Care",
    description:
      "A range of dental consultations and procedures based on the patient’s individual treatment requirements and periodontal health.",
    image: AdvancedGumCareImage,
    alt: "Advanced dental care and periodontal treatment in India",
  },
];
function ServiceCard({ svc }) {
  return (
    <div className="dental-service-card">
      <img
        src={svc.image}
        alt={`${svc.title} - Advanced dental treatment in India`}
        className="dental-service-card-image"
        loading="lazy"
      />
      <div className="dental-service-card-overlay" />
      <div className="dental-service-card-content">
        <div className="dental-service-card-top">
          <h3 className="dental-service-card-title">{svc.title}</h3>
        </div>
        <p className="dental-service-card-desc">{svc.description}</p>
      </div>
    </div>
  );
}

const steps = [
  {
    num: "01.",
    title: "Initial Dental Consultation",
    desc: "Review dental history, symptoms, existing records and treatment requirements:",
    items: [
      "Review of dental history and concerns",
      "Assessment of medical records and reports",
      "Initial clinic and specialist options",
      "Preliminary treatment and cost information",
    ],
  },
  {
    num: "02.",
    title: "Treatment & Implant Planning",
    desc: "Clinical examination and diagnostic imaging to plan the appropriate treatment:",
    items: [
      "Comprehensive clinical oral examination",
      "Diagnostic 3D CBCT or X-ray imaging",
      "Bone and gum condition evaluation",
      "Detailed treatment and timeline planning",
    ],
  },
  {
    num: "03.",
    title: "Implant Procedure",
    desc: "Placement of the dental implant or other planned surgical treatment when clinically appropriate:",
    items: [
      "Surgical placement of the implant post",
      "Assessment of tissue and bone integration",
      "Abutment placement when indicated",
      "Provisional restoration where suitable",
    ],
  },
  {
    num: "04.",
    title: "Recovery & Follow-Up",
    desc: "Follow-up appointments and restoration steps according to the dentist’s treatment plan:",
    items: [
      "Healing period monitoring",
      "Permanent crown or prosthesis fitting",
      "Bite alignment and comfort assessment",
      "Long-term oral hygiene and care guidance",
    ],
  },
];

const features = [
  {
    title: "Personalized Treatment Planning",
    desc: "Treatment recommendations are developed based on individual clinical assessment, oral health, and diagnostic findings.",
  },
  {
    title: "Specialist Dental Care",
    desc: "Coordination with qualified prosthodontists, implantologists, periodontists, and oral surgeons based on the required treatment area.",
  },
  {
    title: "Complete Dental Services",
    desc: "Access to multiple dental-care options, including restorative, cosmetic, orthodontic, and surgical procedures.",
  },
  {
    title: "Advanced Dental Procedures",
    desc: "Use of verified diagnostic imaging, computer-guided surgical planning, and modern restorative materials where clinically indicated.",
  },
];

const HOSPITALS = [
  {
    name: "Aster",
    sub: "Hospitals & Dental Care",
    image: asterDentalImage,
    location: "Bengaluru, India",
    rating: 4.8,
    accreditations: ["NABH", "ISO"],
    specialties: [
      "Smile Makeover",
      "Orthodontics & Braces",
      "Root Canal Treatment",
    ],
  },
  {
    name: "Apollo",
    sub: "Dental & Hospitals",
    image: apolloDentalImage,
    location: "Chennai, India",
    rating: 4.9,
    accreditations: ["JCI", "NABH"],
    specialties: [
      "Dental Implants",
      "Smile Designing",
      "Full Mouth Rehabilitation",
    ],
  },
  {
    name: "Fortis",
    sub: "Dental Care",
    image: fortisDentalImage,
    location: "Delhi NCR, India",
    rating: 4.7,
    accreditations: ["NABH", "ISO"],
    specialties: [
      "Cosmetic Dentistry",
      "Root Canal Treatment",
      "Dental Crowns & Bridges",
    ],
  },
  {
    name: "Clove",
    sub: "Dental",
    image: cloveDentalImage,
    location: "New Delhi, India",
    rating: 4.8,
    accreditations: ["NABH"],
    specialties: ["Invisible Aligners", "Dental Veneers", "Teeth Whitening"],
  },
  {
    name: "Manipal",
    sub: "Hospitals Dental Care",
    image: manipalDentalImage,
    location: "Bengaluru, India",
    rating: 4.7,
    accreditations: ["NABH", "ISO"],
    specialties: [
      "Oral & Maxillofacial Surgery",
      "Dental Implants",
      "Gum Disease Treatment",
    ],
  },
  {
    name: "Max",
    sub: "Dental & Healthcare",
    image: maxDentalImage,
    location: "Delhi, India",
    rating: 4.8,
    accreditations: ["NABH", "ISO"],
    specialties: [
      "Advanced Restorative Dentistry",
      "Full Mouth Implants",
      "Cosmetic Dental Procedures",
    ],
  },
];

const DOCTORS = [
  {
    name: "Dr. Shoeb Shaikh",
    education: "MDS - Periodontics",
    spec: "Dentist, Periodontist",
    desc: "Dr. Shoeb Shaikh is a Senior Dentist and Periodontist with over 18 years of clinical experience in advanced dental care and periodontal management. He completed his BDS from J.G.D.C, Akola and his MDS in Periodontology from D Y Patil University School of Dentistry. He has served as a Lecturer at JGDC and provides specialized periodontal, gum disease, and restorative treatments across recognized dental centers in Mumbai.",
    photoUrl: ShoebShaikhImage,
  },
  {
    name: "Dr. Anisa Shaikh",
    education: "BDS",
    spec: "Dentist, Aesthetic Dental Practitioner",
    desc: "Dr. Anisa Shaikh is an experienced Dentist and Aesthetic Dental Practitioner with over 24 years of overall clinical experience, including 19 years of focused dental practice. She completed her BDS from Nair Hospital Dental College, Mumbai, followed by advanced clinical training in the United States. She focuses on comprehensive restorative care, pediatric dental management, and personalized oral health treatment.",
    photoUrl: AnisaShaikhImage,
  },
  {
    name: "Dr. Binal Shah",
    education: "BDS",
    spec: "Dental Surgeon, Implantologist, Aesthetic Dental Practitioner",
    desc: "Dr. Binal Shah is a Dental Surgeon, Implantologist, and Aesthetic Dental Practitioner with over 17 years of clinical experience. Practicing in Mumbai, she specializes in restorative dental treatments, implant-supported prosthetics, and aesthetic dental assessments. She utilizes modern digital diagnostics and individualized treatment planning to support long-term oral health.",
    photoUrl: BinalShahImage,
  },
  {
    name: "Dr. Varun Saoji",
    education: "BDS, MDS - Orthodontics and Dentofacial Orthopaedics",
    spec: "Dentist, Orthodontist, Implantologist",
    desc: "Dr. Varun Saoji is an experienced Dentist, Orthodontist, and Implantologist with over 14 years of clinical experience in orthodontic care. He completed his graduation and post-graduation from KLES Institute of Dental Sciences, Belgaum. He specializes in orthodontic bite correction, clear aligner therapy, and interdisciplinary orthodontic treatments tailored to individual dental alignment requirements.",
    photoUrl: VarunSaojiImage,
  },
  {
    name: "Dr. Binila S. Babu",
    education: "BDS, MDS - Conservative Dentistry & Endodontics",
    spec: "Dentist, Endodontist, Conservative Dentistry Specialist",
    desc: "Dr. Binila S. Babu is a Consultant in Conservative Dentistry and Endodontics with over a decade of clinical experience in complex endodontic care. Associated with Aster Medcity Kochi, she completed her BDS from Dr. M.G.R. Medical University and MDS from Rajiv Gandhi University of Health Sciences. She specializes in root canal therapies, aesthetic restorative dentistry, and dental trauma management. She is a Fellow of the International College of Dentists (FICD).",
    photoUrl: BinilaSBabuImage,
  },
  {
    name: "Dr. Sameer Punathil",
    education: "BDS, MDS - Pedodontics and Preventive Dentistry",
    spec: "Dentist, Pedodontist, Preventive Dentistry Specialist",
    desc: "Dr. Sameer Punathil is a Consultant in Pedodontics and Preventive Dentistry with extensive clinical and academic experience. He completed his BDS from Mysore University and MDS from Rajiv Gandhi University of Health Sciences. Head of the Department of Pedodontics at Anjaneya Institute of Dental Sciences and Visiting Consultant at Aster MIMS Calicut, he specializes in pediatric dental care, preventive dentistry, and pulp therapy.",
    photoUrl: SameerPImage,
  },
  {
    name: "Dr. C. Sharath Babu",
    education: "BDS, MDS, FICOI",
    spec: "Dentist, Prosthodontist, Implantologist",
    desc: "Dr. C. Sharath Babu is a Prosthodontist and Implantologist with over 15 years of clinical experience in prosthetic and restorative dentistry. Associated with Medicover Hospitals, Hyderabad, he completed his BDS from AME's Dental College and MDS in Prosthodontics from Dr. NTR University of Health Sciences. A Fellow of the International Congress of Oral Implantologists (FICOI), he specializes in dental implant restorations, full-mouth prosthetic rehabilitation, and aesthetic dental care.",
    photoUrl: CSharathBabuImage,
  },
  {
    name: "Dr. Apurva Gujarathi",
    education: "BDS, MDS (Pedodontics)",
    spec: "Pediatric Dentist, Preventive Dental Specialist",
    desc: "Dr. Apurva Gujarathi is a Pediatric Dentist and Preventive Dental Specialist with over 16 years of clinical experience. He completed his BDS and MDS in Pedodontics, developing expertise in restorative and pediatric dental treatments. Practicing in Mumbai, he provides preventive dentistry, pediatric restorations, trauma management, and comprehensive oral care for children and young adults.",
    photoUrl: ApurvaGujarathiImage,
  },
];

const faqData = [
  {
    id: 1,
    question: "What dental treatments are available in India?",
    answer:
      "Dental clinics and hospitals in India offer a range of general, restorative, cosmetic, orthodontic, surgical and implant-related treatments. Availability depends on the selected provider and the patient’s dental requirements.",
  },
  {
    id: 2,
    question: "Are dental implants available for international patients?",
    answer:
      "International patients can explore dental implant treatment in India, subject to clinical evaluation, provider requirements and the patient’s individual circumstances.",
  },
  {
    id: 3,
    question: "How do I know if I am suitable for dental implants?",
    answer:
      "Suitability depends on factors such as oral health, jawbone condition, gum health, medical history and the planned restoration. A qualified dentist should assess the patient before recommending implant treatment.",
  },
  {
    id: 4,
    question: "Can I share my dental reports before travelling?",
    answer:
      "Yes. Relevant dental records, imaging and treatment information can be shared for coordination and to help identify suitable dental providers. Final treatment decisions are made by the treating dentist.",
  },
  {
    id: 5,
    question: "How much do dental implants cost in India?",
    answer:
      "Dental implant costs vary according to the number and type of implants, diagnostic requirements, materials, restoration, dentist or surgeon fees, clinic, accommodation needs and other services. A specific estimate should be confirmed with the selected provider.",
  },
  {
    id: 6,
    question: "How long does dental implant treatment take?",
    answer:
      "The overall timeline varies according to the patient’s oral health, treatment plan, implant requirements, healing period and restoration process. The treating dentist can provide a more specific timeline after evaluation.",
  },
  {
    id: 7,
    question: "Are dental implants permanent?",
    answer:
      "Implant longevity varies between individuals and depends on factors including oral health, implant care, hygiene, maintenance and clinical circumstances. A dentist can explain the expected lifespan and care requirements for a specific treatment plan.",
  },
  {
    id: 8,
    question: "Are dental implant results guaranteed?",
    answer:
      "No dental procedure should be presented as guaranteed for every patient. Treatment results vary according to individual clinical factors, treatment planning, healing and aftercare.",
  },
  {
    id: 9,
    question: "Can Human Care help with dental appointments?",
    answer:
      "Human Care can assist with coordinating dental appointments based on the selected clinic or dentist, availability and the patient’s requirements.",
  },
  {
    id: 10,
    question: "Can you help with travel and accommodation?",
    answer:
      "Human Care can assist with selected travel, accommodation and local transfer arrangements for international patients, subject to the requested services and availability.",
  },
  {
    id: 11,
    question: "How can I contact Human Care Medical Tourism?",
    answer:
      "Use the contact options and CTA buttons on this page to discuss your dental-treatment and medical-travel requirements with the Human Care Medical Tourism team.",
  },
];

const reviews = [
  {
    name: "Daniel Mwangi",
    text: "I traveled from Kenya for dental implants in India and Human Care helped me throughout the entire process. From choosing the clinic to arranging appointments, everything was smooth and well organized. The doctors were attentive and professional.",
  },
  {
    name: "Aisha Bello",
    text: "The dental implant treatment coordination in India was well managed. The clinic was modern, the dentists were experienced, and the support team stayed connected with me before and after the procedure. I felt comfortable during my journey.",
  },
  {
    name: "Joseph Okello",
    text: "I needed tooth replacement and chose dental implants in India. The treatment quality was high and costs were transparent. The entire process was professionally managed and the dental team explained every step clearly.",
  },
  {
    name: "Grace Nanyonga",
    text: "I came to India for aesthetic dental work and crown treatment. The dentists explained everything clearly and the final restoration looks very natural. I appreciated the clinic coordination and regular follow-up support.",
  },
  {
    name: "Emmanuel Peter",
    text: "Human Care helped make my dental treatment journey organized. They assisted with hotel arrangements, clinic coordination, and each appointment in India. The implant procedure went smoothly with clear guidance throughout.",
  },
];

const Stars = () => (
  <div className="dental-reviews-stars">
    {"★★★★★".split("").map((s, i) => (
      <span key={i}>{s}</span>
    ))}
  </div>
);

const DentalImplantIndia = () => {
  const [hovered, setHovered] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

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

  // Truncate description helper
  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const [selectedDoctor, setSelectedDoctor] = useState(null);

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
          Dental Implants in India – Affordable &amp; Advanced Dental Treatment
        </title>

        <meta
          name="description"
          content="Explore dental implant and restorative dental treatment options in India. Support with clinic selection, dentist appointments, medical-record coordination, and international patient travel arrangements."
        />

        <meta
          name="keywords"
          content="dental implants in india, affordable dental implants in india, dental treatment in india, dental implants in india for international patients, dental implant cost in india, dental treatment cost in india, best dental hospitals in india, dental clinics in india, dentists in india, best dentists in india, implant dentist in india, dental tourism in india, international dental treatment, cosmetic dentistry in india, teeth whitening in india, dental care in india"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://humancaremedicaltourism.com/dental-implants-india"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Dental Implants in India – Affordable &amp; Advanced Dental Treatment"
        />

        <meta
          property="og:description"
          content="Explore dental implant and dental care options in India with support for clinic selection, dentist appointments, records sharing, and international patient coordination."
        />

        <meta
          property="og:image"
          content="https://humancaremedicaltourism.com/src/departments/dept-images/dental-implants-india.webp"
        />

        <meta
          property="og:url"
          content="https://humancaremedicaltourism.com/dental-implants-india"
        />

        <meta property="og:type" content="website" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Dental Implants in India – Affordable &amp; Advanced Dental Treatment"
        />

        <meta
          name="twitter:description"
          content="Explore dental implant and dental care options in India with support for clinic selection, dentist appointments, records sharing, and international patient coordination."
        />

        <meta
          name="twitter:image"
          content="https://humancaremedicaltourism.com/src/departments/dept-images/dental-implants-india.webp"
        />

        {/* Geo SEO */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />

        {/* Language */}
        <meta httpEquiv="content-language" content="en" />
      </Helmet>
      <section className="dental-hero-section">
        {/* Background Image */}
        <img
          src={DentalHeroImage}
          alt="Dental implants and advanced dental treatment in India for international patients"
          className="dental-hero-bg-image"
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1280}
          decoding="async"
        />

        {/* Gradient Overlay */}
        <div className="dental-hero-overlay" />

        {/* Content */}
        <div className="dental-hero-content">
          <span className="dental-hero-badge">
            International Patient Dental Assistance
          </span>

          <h1>
            Dental Implants in India – Affordable &amp; Advanced Dental
            Treatment
          </h1>

          <p>
            Explore dental implant and other dental treatment options in India
            with support for clinic selection, dentist appointments,
            medical-record coordination and international patient arrangements.
          </p>
          <p>
            Human Care Medical Tourism assists international patients with
            dental-care coordination based on their treatment requirements and
            travel needs.
          </p>

          <div className="dental-hero-ctas">
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

      <section className="dental-why-choose-section">
        {/* Header */}
        <div className="dental-why-choose-header">
          <div className="dental-why-choose-subtitle">Dental Care in India</div>
          <h2 className="dental-why-choose-title">
            Why Choose Dental Treatment in India?
          </h2>
          <p className="dental-why-choose-description">
            India offers dental clinics, hospitals and dental specialists
            providing a range of restorative, surgical and general dental
            services. International patients can compare providers based on
            their dental requirements, available procedures, dentist
            qualifications, facilities, location and international patient
            support. The appropriate dental treatment depends on the patient’s
            oral health, examination, diagnostic findings and treatment plan
            prepared by a qualified dental professional.
          </p>
        </div>

        {/* Main 3-column layout */}
        <div className="dental-why-choose-grid">
          {/* LEFT COLUMN */}
          <div className="dental-why-choose-column">
            <FeatureItem
              icon={<AffordableIcon />}
              title="Affordable Dental Care"
              desc="Access cost-effective dental treatment options with transparent pricing information while maintaining high clinical and hygiene standards."
            />
            <FeatureItem
              icon={<DoctorIcon />}
              title="Experienced Dentists"
              desc="Qualified dental specialists, implantologists, prosthodontists, and oral maxillofacial surgeons with verified credentials and expertise."
            />
            <FeatureItem
              icon={<PaymentIcon />}
              title="Flexible Treatment Options"
              desc="A comprehensive range of restorative, cosmetic, and surgical procedures explained clearly based on individual clinical suitability."
            />
          </div>

          {/* CENTER IMAGE */}
          <div className="dental-why-choose-center">
            <img
              src={WhyChooseIndiaImage}
              alt="Advanced dental treatment in India with experienced dentists"
              className="dental-why-choose-image"
              width={439}
              height={429}
              decoding="async"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="dental-why-choose-column">
            <FeatureItem
              align="right"
              icon={<EmergencyIcon />}
              title="Emergency Services"
              desc="Access to urgent dental consultations and priority emergency appointments where available from participating dental centers."
            />
            <FeatureItem
              align="right"
              icon={<ReviewIcon />}
              title="International Patient Support"
              desc="Complete assistance with appointment coordination, dental records sharing, language support, and selected travel arrangements."
            />
            <FeatureItem
              align="right"
              icon={<TechIcon />}
              title="Advanced Dental Technology"
              desc={
                <ul className="dental-tech-list">
                  {[
                    "Digital smile evaluation",
                    "3D CBCT diagnostic imaging",
                    "CAD/CAM restorations",
                    "Computer-guided implant surgery",
                  ].map((item) => (
                    <li key={item} className="dental-tech-list-item">
                      {item} <span className="dental-tech-bullet"></span>
                    </li>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
      </section>

      <section className="dental-services-section">
        {/* Header */}
        <div className="dental-services-header">
          <h2 className="dental-services-title">Our Dental Services</h2>
          <p className="dental-services-description">
            Explore restorative, surgical, cosmetic, and orthodontic dental care
            options in India. Treatment plans and procedure suitability are
            determined by qualified dental professionals based on clinical
            evaluation and diagnostic findings.
          </p>
        </div>

        {/* Row 1 — 4 cards */}
        <div className="dental-services-grid dental-services-grid-row">
          {services.slice(0, 4).map((svc) => (
            <ServiceCard key={svc.id} svc={svc} />
          ))}
        </div>

        {/* Row 2 — 4 cards */}
        <div className="dental-services-grid">
          {services.slice(4, 8).map((svc) => (
            <ServiceCard key={svc.id} svc={svc} />
          ))}
        </div>
      </section>

      <section className="dental-steps-section">
        {/* Header */}
        <div className="dental-steps-header">
          <h2 className="dental-steps-title">Dental Implant Procedure</h2>
          <p className="dental-steps-description">
            Dental implant treatment may involve several stages depending on the
            patient’s oral health, bone condition, treatment plan and type of
            restoration required. The exact sequence, timing and suitability of
            implant treatment should be determined by the treating dentist or
            oral-health specialist after examination.
          </p>
        </div>
        <div className="dental-steps-grid">
          {steps.map((step) => (
            <div key={step.num} className="dental-steps-card">
              <p className="dental-steps-number">{step.num}</p>
              <p className="dental-steps-card-title">{step.title}</p>
              <p className="dental-steps-card-desc">{step.desc}</p>
              <ul className="dental-steps-list">
                {step.items.map((item) => (
                  <li key={item} className="dental-steps-list-item">
                    <span className="dental-steps-bullet">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="dental-comprehensive-section">
        <div className="dental-comprehensive-grid">
          <div className="dental-comprehensive-images">
            <div className="dental-comprehensive-images-column">
              <img
                src={Dental3}
                alt="Patient receiving professional dental care"
                className="dental-comprehensive-image"
                width={1920}
                height={1277}
                decoding="async"
              />
              <img
                src={Dental2}
                alt="Experienced dental team at work"
                className="dental-comprehensive-image"
                width={1920}
                height={1280}
                decoding="async"
              />
            </div>
            <img
              src={Dental1}
              alt="Modern dental clinic facility in India"
              className="dental-comprehensive-image-large"
              width={1920}
              height={2880}
              decoding="async"
            />
          </div>

          <div className="dental-comprehensive-content">
            <div className="dental-comprehensive-header">
              <p className="dental-comprehensive-subtitle">
                Personalized Dental Coordination
              </p>
              <h2 className="dental-comprehensive-title">
                Comprehensive Care With Personalized Treatment
              </h2>
              <p className="dental-comprehensive-description">
                Dental treatment should be planned according to the patient’s
                oral health, dental history, diagnostic findings, treatment
                goals and individual circumstances. Human Care can assist
                international patients with finding relevant dental providers,
                coordinating consultations, sharing medical or dental records
                and arranging selected travel-related services.
              </p>
            </div>
            <div className="dental-comprehensive-features-grid">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="dental-comprehensive-feature-item"
                >
                  <p className="dental-comprehensive-feature-title">
                    {f.title}
                  </p>
                  <p className="dental-comprehensive-feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 3 — HOSPITALS ════ */}
      <section className="hn-section">
        <div className="hn-container">
          <div className="hn-title-wrap">
            <span className="hn-label">Dental Treatment Providers in India</span>
            <h2 className="hn-heading">
              Dental Hospitals &amp; Clinics in India
            </h2>
            <p className="hn-subtitle">
              Dental hospitals and clinics in India offer different specialties,
              procedures, facilities and international patient services. The
              appropriate provider depends on the patient’s treatment
              requirements, dentist availability, location and other individual
              factors.
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
                          Dental Specialties:
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
              Dental Specialists in India for International Patients
            </h2>
            <p className="doctor-subtitle" style={{ maxWidth: "800px", margin: "12px auto 0", color: "#64748b", fontSize: "1rem", lineHeight: "1.6" }}>
              International patients can explore dentists based on the required
              dental specialty, qualifications, hospital or clinic affiliation,
              verified professional experience and treatment requirements.
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

      <section className="dental-reviews-section">
        <div className="dental-reviews-content">
          <h2 className="dental-reviews-heading">Our Clients&apos; Reviews</h2>
          <p style={{ color: "#64748b", margin: "12px 0 24px", lineHeight: "1.6", maxWidth: "600px" }}>
            Read experiences shared by patients who have used Human Care’s
            medical-tourism coordination services.
          </p>

          {/* Slider wrapper */}
          <div className="dental-reviews-slider-wrapper">
            <div
              className="dental-reviews-slider-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((pair, slideIndex) => (
                <div key={slideIndex} className="dental-reviews-slide">
                  {pair.map((r, cardIndex) => (
                    <div key={cardIndex} className="dental-reviews-card">
                      <Stars />
                      <p className="dental-reviews-card-text">{r.text}</p>
                      {/* <p className="dental-reviews-card-name">{r.name}</p> */}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="dental-reviews-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`dental-reviews-dot ${currentSlide === index ? "active" : ""}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Rating summary */}
          <div className="dental-reviews-summary">
            <div>
              <span className="dental-reviews-rating-number">4.98</span>
              <span className="dental-reviews-rating-label">Ratings</span>
              <div
                className="dental-reviews-stars"
                style={{ marginTop: "6px" }}
              >
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              {/* <p className="dental-reviews-rating-description">
                Rated 4.9 stars based on 1200+ reviews
              </p> */}
            </div>
          </div>
        </div>

        <div className="dental-reviews-image-wrapper">
          <img
            src={ReviewRightImage}
            alt="International dental patient assisted by Human Care in India"
            className="dental-reviews-image"
            width={1920}
            height={1280}
            decoding="async"
          />
        </div>
      </section>

      <section className="dental-faq-section" aria-labelledby="faq-heading">
        <div className="dental-faq-container">
          {/* Section Header */}
          <div className="dental-faq-header">
            <span className="dental-faq-badge">Dental Treatment FAQs</span>
            <h2 id="faq-heading" className="dental-faq-title">
              Frequently Asked Questions About Dental Treatment in India
            </h2>
            <p className="dental-faq-subtitle">
              Clear, factual information regarding dental implants, restorative
              procedures, dentist appointments, and international patient
              services in India.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="dental-faq-list">
            {faqData.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={faq.id}
                  className={`dental-faq-item ${isActive ? "active" : ""}`}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="dental-faq-question"
                    aria-expanded={isActive}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <h3 className="dental-faq-question-text">{faq.question}</h3>
                    <FaPlus
                      className={`dental-faq-icon ${isActive ? "rotate" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`dental-faq-answer ${isActive ? "open" : ""}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                  >
                    <div className="dental-faq-answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="dental-cta-section">
        {/* Background Image */}
        <img
          src={CtaImage}
          alt="Book dental consultation in India"
          className="dental-cta-bg-image"
          loading="lazy"
          width={1920}
          height={1025}
          decoding="async"
        />

        {/* Gradient Overlay */}
        <div className="dental-cta-overlay" />

        {/* Content Container */}
        <div className="dental-cta-container">
          <div className="dental-cta-content">
            <span className="dental-cta-badge">INTERNATIONAL PATIENT DENTAL CARE</span>

            <h2 className="dental-cta-title">Book Your Dental Consultation</h2>

            <p className="dental-cta-subtitle">
              Discuss your dental-treatment requirements with Human Care Medical
              Tourism and receive assistance with dental clinic options, dentist
              coordination, appointments and international patient services.
            </p>

            <div className="dental-cta-benefits-list">
              <div className="dental-cta-benefit-point">
                <FaCheckCircle className="dental-cta-check-icon" />
                <span>Personalized treatment planning based on clinical evaluation</span>
              </div>
              <div className="dental-cta-benefit-point">
                <FaCheckCircle className="dental-cta-check-icon" />
                <span>Transparent cost estimates from verified dental providers</span>
              </div>
              <div className="dental-cta-benefit-point">
                <FaCheckCircle className="dental-cta-check-icon" />
                <span>Experienced dental specialists and implantologists</span>
              </div>
              <div className="dental-cta-benefit-point">
                <FaCheckCircle className="dental-cta-check-icon" />
                <span>Dedicated international patient coordination and records sharing</span>
              </div>
              <div className="dental-cta-benefit-point">
                <FaCheckCircle className="dental-cta-check-icon" />
                <span>Modern dental facilities and advanced clinical technology</span>
              </div>
            </div>

            <div className="dental-hero-ctas">
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
};

export default DentalImplantIndia;
