import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./CancerLandingIndia.css";
import { Helmet } from "react-helmet";

import {
  FaCheck,
  FaUserMd,
  FaMoneyBillWave,
  FaClock,
  FaRobot,
  FaGlobe,
  FaShieldAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaPlus,
  FaHospital,
  FaMicroscope,
  FaGlobeAfrica,
  FaHandHoldingUsd,
  FaTimes,
  FaCheckCircle,
  FaFileAlt,
  FaClipboardList,
  FaPassport,
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

import apolloImage from "../departments/dept-images/oncology/best-oncology-hospital-india.webp";

import medantaImage from "../departments/dept-images/medanta-hospital-for-oncology-treatment-in-india.webp";

import fortisImage from "../departments/dept-images/oncology/multi-specialty-oncology-hospital-india.webp";

import hcgImage from "../departments/dept-images/oncology/hcg-cancer-treatment-specialist.webp";

import maxImage from "../departments/dept-images/oncology/top-oncology-hospital-india.webp";

import ApolloApcc from "../departments/dept-images/oncology/apollo-proton-cancer-centre-top-cancer-treatment.webp";

import VishnuAgarwalImage from "../departments/dept-images/oncology/vishnu-agarwal.webp";
import KamranKhanImage from "../departments/dept-images/oncology/kamran-khan.webp";
import ManishGAgarwalImage from "../departments/dept-images/oncology/manish-agarwal.webp";
import SaritaShrivastvaImage from "../departments/dept-images/oncology/sarita-shrivastva.webp";
import GanapathiBhatImage from "../departments/dept-images/oncology/ganapathi-bhat.webp";
import AbhayBhaveImage from "../departments/dept-images/oncology/abhay-bhave.webp";
import MuzammilShaikhImage from "../departments/dept-images/oncology/muzammil-shaikh.webp";
import SureshAdvaniImage from "../departments/dept-images/oncology/suresh-advani.webp";
import SandeepGoyleImage from "../departments/dept-images/oncology/sandeep-goyle.webp";
import RKDeshpandeImage from "../departments/dept-images/oncology/rk-deshpande.webp";
import TusharThoratImage from "../departments/dept-images/oncology/Dr.-Tushar-Thorat.webp";

const WA = ({ size = 5 }) => (
  <FaWhatsapp className={`icon-wa icon-wa--${size}`} />
);

const WA_URL =
  "https://wa.me/919833166697?text=Hello%2C%20I%20need%20oncology%20treatment%20consultation";

const Check = () => <FaCheck className="icon-check" />;

const trustSignals = [
  {
    icon: <FaHospital />,
    label: "Hospital and oncology specialist coordination",
  },
  {
    icon: <FaFileAlt />,
    label: "Medical report and document sharing",
  },
  {
    icon: <FaUserMd />,
    label: "Specialist consultation appointment assistance",
  },
  {
    icon: <FaClipboardList />,
    label: "Treatment information coordination",
  },
  {
    icon: <FaHandHoldingUsd />,
    label: "Available cost estimate information",
  },
  {
    icon: <FaPassport />,
    label: "Travel and accommodation assistance",
  },
  {
    icon: <FaGlobeAfrica />,
    label: "Airport and local transfer coordination",
  },
  {
    icon: <FaPhoneAlt />,
    label: "International patient communication support",
  },
];

const cancersServices = [
  {
    id: 1,
    title: "Blood Cancer",
    description:
      "Specialized hematology and oncology teams may evaluate conditions such as leukemia, lymphoma and other blood-related cancers. Treatment planning is individualized based on the patient's diagnosis, clinical findings and overall health.",
    image: BloodCancer,
    alt: "Blood cancer treatment in India",
  },
  {
    id: 2,
    title: "CyberKnife Treatment",
    description:
      "CyberKnife is a radiation delivery system used for certain tumors. Its suitability depends on the tumor type, location, stage and other clinical factors determined by the treating radiation oncology team.",
    image: CyberKnife,
    alt: "CyberKnife cancer treatment in India",
  },
  {
    id: 3,
    title: "Oral & Head and Neck Cancer",
    description:
      "Specialist evaluation may involve surgical oncology, medical oncology, radiation oncology and supportive-care teams. Treatment planning depends on the tumor location, stage and other clinical findings.",
    image: MouthCancer,
    alt: "Oral and head neck cancer treatment in India",
  },
  {
    id: 4,
    title: "Lung Cancer",
    description:
      "Treatment planning depends on cancer type, stage, test results, overall health and other medical factors. The treating oncology team determines the appropriate approach after clinical evaluation.",
    image: LungCancer,
    alt: "Lung cancer treatment in India",
  },
  {
    id: 5,
    title: "Chemotherapy",
    description:
      "Some cancers may require medicines that work throughout the body. The treating oncologist determines the appropriate systemic treatment based on the patient's diagnosis and clinical condition.",
    image: Chemotherapy,
    alt: "Chemotherapy treatment in India",
  },
  {
    id: 6,
    title: "Radiation Therapy",
    description:
      "Radiation therapy may be used as part of cancer treatment when considered appropriate by the radiation oncology team. The suitability and schedule are determined based on the patient's clinical evaluation.",
    image: RadiationTherapy,
    alt: "Radiation therapy treatment in India",
  },
  {
    id: 7,
    title: "Cervical Cancer",
    description:
      "Patients may be evaluated by gynecologic oncology and other relevant specialist teams. Treatment planning may involve surgery, systemic treatment, radiation therapy or a combination depending on the diagnosis.",
    image: CervicalCancer,
    alt: "Cervical cancer treatment in India",
  },
  {
    id: 8,
    title: "Breast Lumpectomy",
    description:
      "Breast-conserving surgery may be considered for certain breast cancer patients depending on clinical factors. The treating surgical oncology team determines suitability based on the patient's individual assessment.",
    image: BreastLumpectomy,
    alt: "Breast lumpectomy treatment in India",
  },
  {
    id: 9,
    title: "Breast Cancer",
    description:
      "Treatment planning may involve imaging, pathology, surgery, systemic treatment, radiation therapy or other approaches depending on the clinical assessment. Multidisciplinary oncology teams coordinate the treatment plan.",
    image: BreastCancer,
    alt: "Breast cancer treatment in India",
  },
  {
    id: 10,
    title: "BMT (Bone Marrow Transplant)",
    description:
      "Bone marrow transplant may be considered for patients with certain blood-related conditions. Eligibility and treatment planning are determined by specialist hematology and oncology teams after clinical evaluation.",
    image: BoneMarrowTransplant,
    alt: "Bone marrow transplant treatment in India",
  },
  {
    id: 11,
    title: "Prostate Cancer",
    description:
      "Treatment options depend on disease characteristics, overall health and clinical evaluation. The treating specialist team determines the appropriate approach, which may involve surgery, radiation, systemic treatment or observation.",
    image: ProstateCancer,
    alt: "Prostate cancer treatment in India",
  },
  {
    id: 12,
    title: "Cancer Treatment",
    description:
      "Cancer treatment in India is planned according to individual clinical findings, diagnosis and treatment requirements. Patients can explore available options by sharing their medical reports with the treating oncology team.",
    image: CancerTreatment,
    alt: "Cancer treatment in India",
  },
  {
    id: 13,
    title: "Stem Cell Therapy",
    description:
      "Stem cell therapy may be considered for selected oncology and hematology conditions. Eligibility and treatment protocols are determined by specialist medical teams after thorough clinical evaluation.",
    image: StemCellTherapy,
    alt: "Stem cell therapy in India",
  },
  {
    id: 14,
    title: "Stomach Cancer",
    description:
      "Treatment planning depends on diagnostic findings, cancer stage and the patient's overall health. The treating oncology team may recommend surgery, systemic treatment, radiation therapy or a combination of approaches.",
    image: StomachCancer,
    alt: "Stomach cancer treatment in India",
  },
  {
    id: 15,
    title: "Colorectal Cancer",
    description:
      "Treatment may involve surgery, systemic treatment, radiation therapy or combinations depending on the diagnosis and stage. The treating team determines the appropriate approach after clinical assessment.",
    image: ColonCancer,
    alt: "Colorectal cancer treatment in India",
  },
  {
    id: 16,
    title: "Esophageal Cancer",
    description:
      "Treatment planning may involve surgical oncology, medical oncology, radiation oncology and supportive-care teams. The appropriate approach is determined based on the patient's clinical evaluation and diagnosis.",
    image: EsophagealCancer,
    alt: "Esophageal cancer treatment in India",
  },
];

const steps = [
  {
    number: "01",
    title: "Share Medical Reports",
    description:
      "Patients can share relevant medical reports, scans, pathology results and previous treatment records for review and appointment coordination.",
  },
  {
    number: "02",
    title: "Hospital and Specialist Coordination",
    description:
      "Our team helps coordinate suitable hospital options and oncology specialist appointments based on the patient's diagnosis and requirements.",
  },
  {
    number: "03",
    title: "Treatment Information and Cost Estimate",
    description:
      "Available treatment information and cost estimates can be discussed after reviewing relevant medical reports and requirements.",
  },
  {
    number: "04",
    title: "Travel and Accommodation Assistance",
    description:
      "International-patient support may include coordination for travel, accommodation, airport transfers and other practical requirements.",
  },
  {
    number: "05",
    title: "Hospital Visit and Treatment",
    description:
      "Patients receive support during their hospital visit, including appointment coordination, communication assistance and help with hospital-related requirements.",
  },
  {
    number: "06",
    title: "Follow-Up Coordination",
    description:
      "After the visit, support may include follow-up appointment coordination, communication with the healthcare provider and assistance with future appointments.",
  },
];

const DOCTORS = [
  {
    name: "Dr. Vishnu Agarwal",
    education: "MBBS, MS - General Surgery, Surgical Oncology Fellowship",
    spec: "Surgical Oncologist, Laparoscopic & Robotic Cancer Surgeon",
    desc: "Dr. Vishnu Agarwal is a Surgical Oncologist with over 15 years of clinical experience in surgical oncology, laparoscopic and robotic surgical procedures. He completed his MBBS and MS in General Surgery from Mumbai University and received specialized surgical oncology training at Tata Memorial Hospital, Mumbai, followed by advanced surgical fellowships in South Korea and France. His clinical focus includes breast cancer surgery, gynecologic oncology, and colorectal surgical procedures for domestic and international patients.",
    photoUrl: VishnuAgarwalImage,
  },
  {
    name: "Dr. Kamran Khan",
    education: "MBBS, MS - General Surgery",
    spec: "General Surgeon, Surgical Oncologist",
    desc: "Dr. Kamran Khan is a General Surgeon and Surgical Oncologist with over 35 years of clinical experience, including 32 years as a specialist. He specializes in minimally invasive and robotic procedures for gastrointestinal and gynecologic cancers, with clinical experience from Tata Memorial Hospital, Mumbai. His clinical practice includes laparoscopic oncology procedures, pelvic surgery, and advanced gynecologic cancer management.",
    photoUrl: KamranKhanImage,
  },
  {
    name: "Dr. Manish G. Agarwal",
    education:
      "MBBS, MS (Orthopaedics), DNB (Orthopaedics), Diploma in Tissue Banking",
    spec: "Orthopaedic Oncosurgeon, Surgical Oncologist",
    desc: "Dr. Manish Agarwal is an Orthopaedic Oncologist at Sir H. N. Reliance Foundation Hospital and Nanavati Max Super Specialty Hospital, Mumbai, with over two decades of clinical experience. He completed his MBBS and MS from Seth GS Medical College and KEM Hospital, Mumbai, followed by a fellowship at Tata Memorial Hospital. His clinical focus includes bone and soft tissue tumor surgery, limb salvage procedures, and pediatric orthopaedic oncology.",
    photoUrl: ManishGAgarwalImage,
  },
  {
    name: "Dr. Sarita Shrivastva",
    education: "MBBS, MD - Radiotherapy, DM - Medical Oncology",
    spec: "Medical Oncologist",
    desc: "Dr. Sarita Shrivastva is a Medical Oncologist with over 16 years of clinical experience. She completed her MBBS, MD in Radiotherapy, and DM in Medical Oncology, receiving extensive training in cancer diagnosis, staging, and systemic therapies. Her practice focuses on chemotherapy, targeted therapies, cancer screening, and personalized oncology treatment planning.",
    photoUrl: SaritaShrivastvaImage,
  },
  {
    name: "Dr. Ganapathi Bhat",
    education:
      "DNB (General Medicine), M.N.A.M.S, Affiliate AACR Medical Oncology & Hemato-Oncology and Stem Cell Transplant",
    spec: "Medical Oncologist, Hemato-Oncologist, Stem Cell Transplant Specialist",
    desc: "Dr. Ganapathi Bhat is a Medical Oncologist and Stem Cell Transplant Specialist serving as Senior Consultant at Jaslok Hospital & Research Centre, Mumbai. With extensive clinical experience in India and abroad, he completed specialized training in blood cell transplantation at ULM University, Germany. His practice focuses on hematological conditions, solid tumors, chemotherapy protocols, immunotherapy, and hematopoietic stem cell transplantation.",
    photoUrl: GanapathiBhatImage,
  },
  {
    name: "Dr. Abhay Bhave",
    education:
      "MBBS, MD, FRCPA (Fellow of the Royal College of Pathologists of Australasia)",
    spec: "Medical Oncologist, Haemato-Oncologist, Bone Marrow Transplant Specialist",
    desc: "Dr. Abhay Bhave is a Medical Oncologist and Hematologist with over 30 years of clinical experience in blood disorders and hematological malignancies. He serves as Senior Consultant at S L Raheja Hospital (A Fortis Associate), Mumbai, holding an MBBS, MD, and FRCPA qualification. His clinical practice focuses on lymphomas, leukemias, bone marrow transplantation, and clinical hematology.",
    photoUrl: AbhayBhaveImage,
  },
  {
    name: "Dr. Muzammil Shaikh",
    education:
      "MBBS, MD (Internal Medicine), DM (Medical Oncology), DNB (Medical Oncology)",
    spec: "Medical Oncologist, Precision Oncology Specialist",
    desc: "Dr. Muzammil Shaikh is a Consultant Medical Oncologist at P.D. Hinduja National Hospital & Medical Research Centre, Mumbai, with over 20 years of clinical experience. He holds an MBBS, MD in Internal Medicine, and DM in Medical Oncology, with advanced international observerships in the US and UK. His clinical focus includes systemic cancer therapies, precision oncology, targeted therapy, and comprehensive cancer care for solid tumors.",
    photoUrl: MuzammilShaikhImage,
  },
  {
    name: "Dr. Suresh Advani",
    education: "MBBS, MD (General Medicine), FICP, MNAMS, FNAMS, UICC, IRCETT",
    spec: "Medical Oncologist, Haematologist, Pediatric Oncologist",
    desc: "Dr. Suresh Advani is a Senior Medical Oncologist and Hematologist with over 50 years of clinical experience in cancer management, hematology, and bone marrow transplantation. Recipient of the Padma Bhushan award, he serves as Mentor in Medical Oncology at Sir H. N. Reliance Foundation Hospital, Mumbai. His clinical practice encompasses medical oncology, hematological conditions, pediatric oncology, and systemic cancer therapies.",
    photoUrl: SureshAdvaniImage,
  },
  {
    name: "Dr. Sandeep Goyle",
    education:
      "MBBS, MD (General Medicine), MRCP (London), CCST (Medical Oncology, UK), DNB (General Medicine), FCPS (General Medicine)",
    spec: "Medical Oncologist, Chemotherapy & Immunotherapy Specialist",
    desc: "Dr. Sandeep Goyle is a Medical Oncologist with over 18 years of clinical experience in medical oncology and systemic cancer management. Holding an MBBS, MD, MRCP (London), and CCST in Medical Oncology (UK), he has served as Head of Medical Oncology at Kokilaben Dhirubhai Ambani Hospital, Mumbai. His practice focuses on chemotherapy, targeted therapy, immunotherapy, and evidence-based cancer management.",
    photoUrl: SandeepGoyleImage,
  },
  {
    name: "Dr. R. K. Deshpande",
    education: "MBBS, MS (General Surgery)",
    spec: "Thoracic Surgical Oncologist",
    desc: "Dr. R. K. Deshpande is a Surgical Oncologist with over 44 years of experience in thoracic oncology and cancer surgery. Director of the Asian Institute of Oncology, Mumbai, he trained at Tata Memorial Hospital and Memorial Sloan Kettering Cancer Center, New York. His clinical practice focuses on thoracic surgical oncology, lung cancer surgery, esophageal cancer, and minimally invasive thoracic procedures.",
    photoUrl: RKDeshpandeImage,
  },
  {
    name: "Dr. Tushar Thorat",
    education:
      "MBBS, MS (General Surgery), M.Ch. (Plastic Surgery), DNB (Plastic Surgery)",
    spec: "Plastic & Reconstructive Surgeon, Oncoplastic Surgeon",
    desc: "Dr. Tushar Thorat is a Plastic and Reconstructive Surgeon serving as Consultant at Sir H. N. Reliance Foundation Hospital, Mumbai. He holds an MBBS, MS in General Surgery, M.Ch. in Plastic Surgery, and completed an International Fellowship in Microsurgery in South Korea. His clinical practice includes reconstructive surgery following oncologic resections, oncoplastic procedures, microsurgical reconstruction, and soft tissue repair.",
    photoUrl: TusharThoratImage,
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
      "Medical Oncology",
      "Radiation Oncology",
      "Bone Marrow Transplant",
    ],
  },
  {
    name: "Medanta",
    sub: "The Medicity",
    image: medantaImage,
    location: "Gurgaon, India",
    rating: 4.8,
    accreditations: ["JCI", "NABH"],
    specialties: [
      "Surgical Oncology",
      "Immunotherapy",
      "Precision Cancer Care",
    ],
  },

  {
    name: "Apollo Proton Cancer Centre",
    sub: "Healthcare",
    image: ApolloApcc,
    location: "Gurgaon, India",
    rating: 4.8,
    accreditations: ["JCI", "NABH"],
    specialties: [
      "Surgical Oncology",
      "Immunotherapy",
      "Precision Cancer Care",
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
      "Breast Cancer Treatment",
      "Radiation Therapy",
      "Hematology & Oncology",
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
      "Targeted Therapy",
      "PET-CT Diagnostics",
      "Cancer Rehabilitation",
    ],
  },
  {
    name: "HCG",
    sub: "Cancer Centre",
    image: hcgImage,
    location: "Bengaluru, India",
    rating: 4.8,
    accreditations: ["NABH", "NABL"],
    specialties: [
      "Medical Oncology",
      "Radiation Oncology",
      "Bone Marrow Transplant",
    ],
  },
];

const faqData = [
  {
    id: 1,
    question:
      "Is cancer treatment available in India for international patients?",
    answer:
      "Yes. Many hospitals in India have international-patient departments and provide oncology services. Availability depends on the patient's diagnosis and the hospital's clinical facilities.",
  },
  {
    id: 2,
    question: "How much does cancer treatment cost in India?",
    answer:
      "The cost varies according to cancer type, stage, treatment approach, hospital, specialist, investigations and duration of care. A more specific estimate requires relevant medical information.",
  },
  {
    id: 3,
    question: "How do I choose a cancer hospital in India?",
    answer:
      "Hospital selection depends on cancer type, required specialty, available facilities, specialist availability, location and international-patient services.",
  },
  {
    id: 4,
    question: "Can I share my medical reports before travelling to India?",
    answer:
      "Yes. Relevant medical reports can be shared for appointment and hospital coordination. The treating healthcare provider makes the final clinical assessment.",
  },
  {
    id: 5,
    question: "How long does cancer treatment take in India?",
    answer:
      "Treatment duration varies according to diagnosis, recommended treatment plan, hospital schedule, recovery requirements and follow-up needs.",
  },
  {
    id: 6,
    question: "Can international patients get assistance with hospital appointments?",
    answer:
      "Yes. Medical-tourism support can assist with coordinating hospital and specialist appointments based on the patient's requirements.",
  },
  {
    id: 7,
    question: "Can you help with travel and accommodation arrangements?",
    answer:
      "International-patient support may include coordination for accommodation, airport transfers, local transportation and other practical requirements.",
  },
  {
    id: 8,
    question:
      "Can I get a cancer treatment cost estimate before travelling to India?",
    answer:
      "An initial estimate may be possible after reviewing relevant medical information, but final costs can vary according to the treatment plan and clinical requirements.",
  },
  {
    id: 9,
    question:
      "Is cancer treatment the same for every patient?",
    answer:
      "No. Cancer treatment is individualized according to factors such as cancer type, stage, medical history, test results and overall health.",
  },
  {
    id: 10,
    question: "Are cancer treatment outcomes guaranteed?",
    answer:
      "No medical outcome should be presented as guaranteed. Treatment suitability and outcomes vary according to individual circumstances and should be discussed with the treating healthcare professional.",
  },
  {
    id: 11,
    question: "How can I contact Human Care Medical Tourism?",
    answer:
      "You can contact our team to discuss hospital coordination, oncology appointments, treatment information, estimated costs and international patient support.",
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
    name: "Grace N., Kenya",
    text: "“My mother was diagnosed with breast cancer in Nairobi, and we were very confused about where to go for treatment. Humancare World Wide helped us arrange everything in India, from the hospital appointment to airport pickup. The doctors were excellent and my mother is recovering well now. We are truly grateful.”",
  },
  {
    name: "— Daniel O., Uganda",
    text: "“Thank you to Humancare World Wide for supporting my family during my leukemia treatment in India. Their team stayed connected with us throughout the journey and helped us with medical visa processing and accommodation. The treatment was successful and the care was beyond our expectations.”",
  },
  {
    name: "— Amina S., Tanzania",
    text: "“My father needed urgent liver cancer treatment, and the Humancare team guided us step by step. We were worried about costs and travel, but they explained everything clearly and helped us choose the right hospital. We felt supported from beginning to end.”",
  },
  {
    name: "— Esther M., Nigeria",
    text: "“When my husband was diagnosed with colon cancer in Lagos, we were under a lot of stress and didn't know where to begin. Humancare World Wide helped us connect with a top oncology hospital in India and handled all the arrangements quickly. The doctors explained the treatment clearly, and the support team checked on us regularly during our stay. Today, my husband is doing much better and we are thankful for the care and guidance we received.”",
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
          Cancer Treatment in India | International Patient Services – Human Care Medical Tourism
        </title>

        <meta
          name="description"
          content="Explore cancer treatment options in India with coordinated support for hospital selection, specialist appointments, treatment information, travel arrangements and other international patient requirements."
        />

        <meta
          name="keywords"
          content="
                    cancer treatment in india,
                    cancer treatment in india for international patients,
                    oncology treatment in india,
                    cancer hospitals in india,
                    oncology specialists in india,
                    cancer treatment cost in india,
                    cancer care in india,
                    oncology care in india,
                    international cancer treatment,
                    cancer specialist in india,
                    medical tourism for cancer treatment,
                    international patient services,
                    oncology consultation in india
                  "
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://humancaremedicaltourism.com/cancer-treatment-in-india"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Cancer Treatment in India | International Patient Services – Human Care Medical Tourism"
        />

        <meta
          property="og:description"
          content="Explore cancer treatment options in India with coordinated support for hospital selection, specialist appointments, treatment information and international patient requirements."
        />

        <meta
          property="og:image"
          content="https://humancaremedicaltourism.com/src/departments/dept-images/cancer-treatment-india-hero.webp"
        />

        <meta
          property="og:url"
          content="https://humancaremedicaltourism.com/cancer-treatment-in-india"
        />

        <meta property="og:type" content="website" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Cancer Treatment in India | International Patient Services – Human Care Medical Tourism"
        />

        <meta
          name="twitter:description"
          content="Explore cancer treatment options in India with coordinated hospital selection, specialist appointments, treatment information and international patient support."
        />

        <meta
          name="twitter:image"
          content="https://humancaremedicaltourism.com/src/departments/dept-images/cancer-treatment-india-hero.webp"
        />

        {/* Geo SEO */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />

        {/* Language */}
        <meta httpEquiv="content-language" content="en" />
      </Helmet>
      {/* ════ SECTION 1 — HERO ════ */}
      <section className="oncology-hero-section">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Cancer treatment in India for international patients"
          className="oncology-hero-bg-image"
          loading="eager"
        fetchPriority="high"
        width={1920}
        height={1280}
        decoding="async"
      />

        {/* Gradient Overlay */}
        <div className="oncology-hero-overlay" />

        {/* Content */}
        <div className="oncology-hero-content">
          <span className="oncology-hero-badge">
            International Patient Support for Cancer Care in India
          </span>

          <h1>Cancer Treatment in India for International Patients</h1>

          <p>
            Explore oncology care options in India with coordinated support for hospital selection, specialist appointments, treatment information, travel arrangements and other international patient requirements.
          </p>

          <div className="oncology-hero-ctas">
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

      <section className="cancer-care-section">
        <div className="cancer-care-container">
          {/* ── Left Content Panel ── */}
          <div className="cancer-care-left">
            <h2 className="cancer-care-heading">
              <span className="cancer-care-heading-accent">
                Explore Cancer Treatment Options in India
              </span>
            </h2>

            <p className="cancer-care-body">
              India has hospitals and oncology specialists providing a range of cancer-care services. International patients can explore treatment options based on their diagnosis, medical reports, treatment requirements, specialist availability and individual circumstances.
            </p>

            <p className="cancer-care-body">
              Human Care Medical Tourism helps international patients coordinate the practical aspects of seeking oncology care in India, including hospital selection, specialist appointments, medical-report sharing, treatment information and travel-related arrangements.
            </p>
            <p className="cancer-care-body">
              Connect with our medical tourism team to understand available hospital options, oncology specialties, treatment information, estimated costs and the process for planning cancer care in India.
            </p>

            <h2 className="cancer-care-trust-heading">
              Our Support May Include
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
                alt="Cancer care options in India for international patients"
                className="cancer-care-img"
        width={1920}
        height={1280}
        decoding="async"
      />
            </div>

            <div className="cancer-care-img-wrapper cancer-care-img-bottom">
              <img
                src={OncologyAboutImage1}
                alt="Oncology treatment in India with coordinated international patient support"
                className="cancer-care-img"
        width={1920}
        height={1280}
        decoding="async"
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
              Why Consider India for Cancer Treatment?
            </h2>
            <p className="why-choose-subheading">
              India has a broad healthcare network with oncology departments and specialists across medical, surgical and radiation oncology. Patients may consider hospitals based on their cancer type, clinical requirements, specialist availability, hospital facilities and location.
            </p>
          </div>

          <div className="why-choose-cards-grid">
            {/* Card 1: Treatment Cost Information */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaMoneyBillWave />
              </div>
              <h3 className="why-choose-card-title">
                Treatment Cost Information
              </h3>
              <p className="why-choose-card-text">
                Cancer treatment costs vary according to cancer type, stage, investigations, treatment approach, hospital, specialist and duration of care. An initial cost estimate can be discussed after reviewing relevant medical reports and treatment requirements.
              </p>
            </div>

            {/* Card 2: Hospital Infrastructure */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaShieldAlt />
              </div>
              <h3 className="why-choose-card-title">
                Hospital Infrastructure
              </h3>
              <p className="why-choose-card-text">
                Depending on the hospital, oncology services in India may include diagnostic imaging, pathology, surgical facilities, radiation services, intensive care and supportive-care departments. Hospital facilities and accreditation should be verified for each patient's specific requirements.
              </p>
            </div>

            {/* Card 3: Oncology Specialist Teams */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaUserMd />
              </div>
              <h3 className="why-choose-card-title">
                Oncology Specialist Teams
              </h3>
              <p className="why-choose-card-text">
                Hospitals in India have specialist teams working across different areas of cancer care, including medical oncology, surgical oncology, radiation oncology and related fields. The appropriate specialist depends on the patient's diagnosis and clinical evaluation.
              </p>
            </div>

            {/* Card 4: Range of Treatment Approaches */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaRobot />
              </div>
              <h3 className="why-choose-card-title">
                Range of Treatment Approaches
              </h3>
              <p className="why-choose-card-text">
                Depending on the diagnosis and clinical assessment, a treating team may consider surgery, radiation therapy, systemic treatment, targeted treatment, immunotherapy or a combination of approaches. The treating oncologist determines the appropriate plan after evaluation.
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
                Many hospitals provide international-patient departments that assist with appointments, documentation, communication and practical requirements. Our team can help coordinate these aspects before, during and after your hospital visit.
              </p>
            </div>

            {/* Card 6: Multiple Oncology Specialties */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaClock />
              </div>
              <h3 className="why-choose-card-title">Multiple Oncology Specialties</h3>
              <p className="why-choose-card-text">
                Patients can explore medical oncology, surgical oncology, radiation oncology and other related specialist services according to their clinical requirements. Hospital selection depends on the availability of the relevant specialty and facilities.
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
              alt="International patient support for cancer care coordination in India"
              className="patient-journey-img"
        width={493}
        height={740}
        decoding="async"
      />
          </div>

          {/* ── Right: Content ── */}
          <div className="patient-journey-content">
            <h2 className="patient-journey-heading">
              International Patient Support for Cancer Care
            </h2>

            <p className="patient-journey-text">
              Planning cancer care in another country can involve medical appointments as well as documentation, travel, accommodation and communication requirements. Our team helps international patients coordinate these practical aspects.
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
        width={1920}
        height={1281}
        decoding="async"
      />
            </div>
            <div className="oncology-img-wrapper oncology-img-2">
              <img
                src={oncologyImage2}
                alt="Cancer specialist providing oncology treatment in India"
                className="oncology-img"
        width={740}
        height={492}
        decoding="async"
      />
            </div>
            <div className="oncology-img-wrapper oncology-img-3">
              <img
                src={oncologyImage3}
                alt="Multidisciplinary oncology treatment team in India"
                className="oncology-img"
        width={740}
        height={494}
        decoding="async"
      />
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="oncology-treatment-content">
            <span className="oncology-treatment-label">
              ONCOLOGY TREATMENT IN INDIA
            </span>

            <h2 className="oncology-treatment-heading">
              Oncology Treatment in India
            </h2>

            <p className="oncology-treatment-text">
              Cancer treatment is planned according to factors such as cancer type, stage, medical history, test results, overall health and other clinical findings. The treating oncology team determines which treatment approach is appropriate after evaluation.
            </p>

            <p className="oncology-treatment-text">
              Medical disclaimer: Treatment suitability, expected outcomes, duration and cost vary from patient to patient. Final treatment decisions should be made by a qualified healthcare professional after reviewing the patient's medical information.
            </p>

            <h3 className="oncology-treatment-subheading">
              Treatment Approaches in Oncology Care
            </h3>

            <div className="oncology-treatment-cards">
              {/* Card 1 */}
              <div className="oncology-treatment-card">
                <h4 className="oncology-card-title">
                  Surgery
                </h4>
                <p className="oncology-card-text">
                  Surgical treatment may be considered for certain cancers depending on the location, size, stage and other clinical factors. The treating surgical oncology team determines suitability after clinical evaluation.
                </p>
              </div>

              {/* Card 2 */}
              <div className="oncology-treatment-card">
                <h4 className="oncology-card-title">
                  Radiation Therapy
                </h4>
                <p className="oncology-card-text">
                  Radiation therapy may be used as part of cancer treatment when considered appropriate by the radiation oncology team. The suitability and treatment schedule are determined based on the patient's clinical assessment.
                </p>
              </div>

              {/* Card 3 */}
              <div className="oncology-treatment-card">
                <h4 className="oncology-card-title">
                  Systemic and Targeted Treatment
                </h4>
                <p className="oncology-card-text">
                  Some cancers may require medicines that work throughout the body, or targeted approaches based on specific biological or molecular characteristics. The treating oncologist determines the appropriate option based on clinical findings.
                </p>
              </div>

              {/* Card 4 */}
              <div className="oncology-treatment-card">
                <h4 className="oncology-card-title">
                  Combined Treatment Approaches
                </h4>
                <p className="oncology-card-text">
                  Some patients may require more than one treatment modality. The treating medical team determines the appropriate combination and sequence based on the patient's individual clinical assessment.
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
            Cancer Types Treated at Hospitals in India
          </h2>
          <p className="cancer-services-description">
            Depending on the hospital and specialist team, oncology services in India may cover different cancer types. The availability of a particular service should be confirmed with the selected hospital. Treatment planning is individualized based on the patient's diagnosis, clinical findings and overall health.
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
            <h2 className="hn-heading">
              Cancer Hospitals in India for Oncology Care
            </h2>
            <p className="hn-subtitle">
              India has hospitals with dedicated oncology departments and multidisciplinary medical teams. Hospital selection depends on cancer type, required specialty, specialist availability, facilities, location and individual requirements.
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
                          Oncology Specialties:
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
            <span className="doctor-label">Our Specialists</span>
            <h2 className="doctor-h2">
              Oncology Specialists in India
            </h2>
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

      {/* <section className="doctor-section-light">
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
                  <button className="doctor-btn">See profile</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="cancer-reviews-section">
        <div className="cancer-reviews-content">
          <h2 className="cancer-reviews-heading">Our Patients' Experiences</h2>

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
                      {/* <p className="cancer-reviews-card-name">{r.name}</p> */}
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
        </div>

        <div className="cancer-reviews-image-wrapper">
          <img
            src={ThumbnailImage}
            alt="International patient experiences with cancer care in India"
            className="cancer-reviews-image"
        width={740}
        height={536}
        decoding="async"
      />
        </div>
      </section>

      <section className="cancer-faq-section" aria-labelledby="faq-heading">
        <div className="cancer-faq-container">
          {/* Section Header */}
          <div className="cancer-faq-header">
            <span className="cancer-faq-badge">Oncology Treatment FAQs</span>
            <h2 id="faq-heading" className="cancer-faq-title">
              Frequently Asked Questions About Cancer Treatment in India
            </h2>
            <p className="cancer-faq-subtitle">
              Get answers to common questions about cancer care, hospital options, treatment approaches and international patient support in India
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
                    <h3
                      id={`faq-question-${faq.id}`}
                      className="cancer-faq-question-text"
                    >
                      {faq.question}
                    </h3>
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
          alt="Discuss your cancer treatment requirements with Human Care Medical Tourism"
          className="cancer-cta-bg-image"
          loading="lazy"
        width={740}
        height={387}
        decoding="async"
      />

        {/* Gradient Overlay */}
        <div className="cancer-cta-overlay" />

        {/* Content Container */}
        <div className="cancer-cta-container">
          <div className="cancer-cta-content">
            <span className="cancer-cta-badge">
              International Patient Support
            </span>

            <h2 className="cancer-cta-title">
              Discuss Your Cancer Treatment Requirements
            </h2>

            <p className="cancer-cta-subtitle">
              Get assistance with hospital selection, oncology specialist appointment coordination, treatment information, estimated costs and international patient support.
            </p>

            <div className="cancer-cta-benefits-list">
              <div className="cancer-cta-benefit-point">
                <FaCheckCircle className="cancer-cta-check-icon" />
                <span>Hospital selection assistance</span>
              </div>
              <div className="cancer-cta-benefit-point">
                <FaCheckCircle className="cancer-cta-check-icon" />
                <span>Specialist appointment coordination</span>
              </div>
              <div className="cancer-cta-benefit-point">
                <FaCheckCircle className="cancer-cta-check-icon" />
                <span>Treatment cost information</span>
              </div>
              <div className="cancer-cta-benefit-point">
                <FaCheckCircle className="cancer-cta-check-icon" />
                <span>International patient support</span>
              </div>
              <div className="cancer-cta-benefit-point">
                <FaCheckCircle className="cancer-cta-check-icon" />
                <span>Travel and accommodation coordination</span>
              </div>
            </div>

            <div className="cancer-hero-ctas">
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
              className="cancer-cta-disclaimer"
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
