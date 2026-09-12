import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import "./EyeSurgeryIndia.css";
import {
  FaBed,
  FaCheck,
  FaGlobe,
  FaHandshake,
  FaPassport,
  FaPlaneArrival,
  FaCheckCircle,
  FaPhoneAlt,
  FaWhatsapp,
  FaPlus,
  FaUserMd,
  FaHospital,
  FaMicroscope,
  FaGlobeAfrica,
  FaHandHoldingUsd,
  FaCalendarCheck,
  FaTimes,
} from "react-icons/fa";

import heroImage from "../departments/dept-images/eye-surgery-india.webp";
import EyeAboutImage from "../departments/dept-images/eye-about.webp";
import EyeAbout1Image from "../departments/dept-images/eye-about-1.webp";
import LasikEyeImage from "../departments/dept-images/lasik-eye-surgery-india.webp";
import CataractSurgeryImage from "../departments/dept-images/cataract-surgery-india.webp";
import RetinaSurgeryImage from "../departments/dept-images/retina-surgery-india.webp";
import GlaucomaSurgeryImage from "../departments/dept-images/glaucoma-treatment-india.webp";
import CorneaSurgeryImage from "../departments/dept-images/cornea-transplant-india.webp";
import SquintSurgeryImage from "../departments/dept-images/squint-surgery-india.webp";
import BestOphthalmologistsBanner from "../departments/dept-images/ophthalmologists-bg.webp";
import SymptomsEyeConditionTreated from "../departments/dept-images/symptoms-eye-treated.webp";
import InternationalPatientServicesImage from "../departments/dept-images/international-eye-patient-services-india.webp";

import ThumbnailImage from "../departments/dept-images/thumbail-eye-surgery.webp";

import CtaImage from "../departments/dept-images/cta-eye.webp";

import MahipalSachdevImage from "../departments/dept-images/EyeSurgen/Dr-Mahipal-S-Sachdev.webp";
import SathiDeviImage from "../departments/dept-images/EyeSurgen/dr_sathi_devi.webp";
import YathishSImage from "../departments/dept-images/EyeSurgen/dr_yatish.webp";
import AnjaliKiranImage from "../departments/dept-images/EyeSurgen/dr_anjali_kiran.webp";
import AnandVinekarImage from "../departments/dept-images/EyeSurgen/dr_anand_vinekar.webp";
import NarenShettyImage from "../departments/dept-images/EyeSurgen/dr_naren_shetty.webp";
import SriGaneshImage from "../departments/dept-images/EyeSurgen/prof_dr_sri_ganesh.webp";
import RohitModiImage from "../departments/dept-images/EyeSurgen/dr-rohit-modi.webp";
import NoshirShroffImage from "../departments/dept-images/EyeSurgen/Dr-Noshir-Shroff.webp";
import RushadShroffImage from "../departments/dept-images/EyeSurgen/Dr-Rushad-Shroff.webp";
import CyrusShroffImage from "../departments/dept-images/EyeSurgen/Dr-Cyrus-Shroff.webp";
import VarshiniShankerImage from "../departments/dept-images/EyeSurgen/Dr-Varshini-Shanker.webp";

const WA = ({ size = 5 }) => (
  <FaWhatsapp className={`icon-wa icon-wa--${size}`} />
);

const WA_URL =
  "https://wa.me/919833166697?text=Hello%2C%20I%20need%20eyes%20treatment%20consultation";

const trustSignals = [
  {
    icon: <FaUserMd />,
    label: "Ophthalmology consultation and evaluation",
  },
  {
    icon: <FaMicroscope />,
    label: "Diagnostic eye examinations",
  },
  {
    icon: <FaHospital />,
    label: "Cataract and lens-related procedures",
  },
  {
    icon: <FaCheckCircle />,
    label: "Corneal and retinal care",
  },
  {
    icon: <FaGlobeAfrica />,
    label: "Glaucoma evaluation and treatment",
  },
  {
    icon: <FaMicroscope />,
    label: "Refractive and other ophthalmic procedures",
  },
  {
    icon: <FaHandshake />,
    label: "Post-procedure follow-up and coordination",
  },
];

const cards = [
  {
    id: 1,
    icon: <FaUserMd />,
    title: "Ophthalmology Specialist Options",
    body: "Patients can explore ophthalmologists based on their diagnosis, required eye specialty, qualifications and consultation requirements.",
  },
  {
    id: 2,
    icon: <FaMicroscope />,
    title: "Range of Eye-Care Procedures",
    body: "Hospitals provide consultations, diagnostics and various surgical or non-surgical options depending on individual clinical evaluation.",
  },
  {
    id: 3,
    icon: <FaHospital />,
    title: "Diagnostic & Surgical Facilities",
    body: "Available facilities vary by hospital, including digital eye imaging, specialized surgical suites, advanced laser equipment and dedicated eye departments.",
  },
  {
    id: 4,
    icon: <FaGlobeAfrica />,
    title: "Hospital Options for International Patients",
    body: "International patients can compare and choose from accredited hospitals and eye care centers across major medical hubs in India.",
  },
  {
    id: 5,
    icon: <FaHandHoldingUsd />,
    title: "Treatment & Cost Information",
    body: "Patients can review transparent cost estimates, procedure details and hospital options based on their medical reports before confirming plans.",
  },
  {
    id: 6,
    icon: <FaCalendarCheck />,
    title: "International Patient Coordination",
    body: "Comprehensive support is available for medical documentation, appointment scheduling, translation services and local travel logistics.",
  },
];

const eyesServices = [
  {
    id: 1,
    title: "Cataract Surgery",
    description:
      "A procedure used to treat cataracts when surgery is clinically recommended after comprehensive ophthalmic evaluation.",
    image: CataractSurgeryImage,
    alt: "Cataract surgery in India",
  },
  {
    id: 2,
    title: "Corneal Treatment",
    description:
      "Evaluation and treatment options for selected corneal conditions, including corneal dystrophies and transplants.",
    image: CorneaSurgeryImage,
    alt: "Corneal treatment in India",
  },
  {
    id: 3,
    title: "Retinal Treatment",
    description:
      "Specialist assessment and available treatment options for certain retinal conditions, including diabetic retinopathy and detachment.",
    image: RetinaSurgeryImage,
    alt: "Retinal treatment in India",
  },
  {
    id: 4,
    title: "Glaucoma Treatment",
    description:
      "Evaluation and management options for glaucoma and related eye-pressure conditions to help preserve optic nerve health.",
    image: GlaucomaSurgeryImage,
    alt: "Glaucoma treatment in India",
  },
  {
    id: 5,
    title: "Refractive Eye Procedures",
    description:
      "Procedures that may be considered for selected refractive errors after appropriate clinical assessment and corneal topography.",
    image: LasikEyeImage,
    alt: "Refractive eye procedures in India",
  },
  {
    id: 6,
    title: "Oculoplastic / Other Eye Procedures",
    description:
      "Specialist evaluation and treatment options for selected conditions involving the eyelids, orbit or related ocular structures.",
    image: SquintSurgeryImage,
    alt: "Oculoplastic and other eye procedures in India",
  },
];

// Eye Service Card Component
const EyesServiceCard = ({ service }) => {
  return (
    <div className="eye-service-card">
      <img
        src={service.image}
        alt={service.alt}
        className="eye-service-card-image"
      />
      <div className="eye-service-card-overlay" />
      <div className="eye-service-card-content">
        <h3 className="eye-service-card-title">{service.title}</h3>
        <p className="eye-service-card-desc">{service.description}</p>
      </div>
    </div>
  );
};

const costFactors = [
  "Type of eye condition or procedure",
  "Diagnostic tests and specialist consultations",
  "Hospital and surgical procedure charges",
  "Ophthalmologist or surgeon fees",
  "Room and stay requirements",
  "Follow-up and additional medical services",
];

const costHighlights = [
  "Transparent cost estimates",
  "Detailed procedure scope",
  "Hospital category options",
  "Pre-travel guidance",
  "Individualized planning",
  "Follow-up coordination",
];

const DOCTORS = [
  {
    name: "Prof. Dr. Mahipal S Sachdev",
    education:
      "MBBS, MD, MS (Ophthalmology), DNB, MNAMS, FRCS, FICO (UK), FAICO",
    spec: "Ophthalmologist, Cataract & Refractive Surgeon",
    desc: "Prof. Dr. Mahipal S Sachdev is a Padma Shri recipient and Senior Ophthalmologist with over 42 years of clinical experience in cataract, cornea, and refractive eye surgery. Chairman and Medical Director of Centre for Sight Group of Eye Hospitals, he specializes in cataract surgery, refractive procedures, cornea transplants, and dry eye management. He has contributed extensively to ophthalmic clinical research and academic training in India.",
    photoUrl: MahipalSachdevImage,
  },
  {
    name: "Dr. Sathi Devi A V",
    education: "Postgraduate Training in Ophthalmology, Fellowship in Glaucoma",
    spec: "Glaucoma Specialist",
    desc: "Dr. Sathi Devi A V is a Glaucoma Specialist with over 24 years of clinical experience in the diagnosis, medical management, and surgical treatment of glaucoma and intraocular pressure disorders. She serves as Consultant at Narayana Nethralaya, Bangalore, having completed fellowship training at Sankara Nethralaya, Chennai. Her clinical practice focuses on early glaucoma detection, optic nerve assessment, and comprehensive glaucoma care.",
    photoUrl: SathiDeviImage,
  },
  {
    name: "Dr. Yathish S",
    education: "MBBS, DOMS, DNB (Ophthalmology), FCE",
    spec: "Cornea Specialist",
    desc: "Dr. Yathish S is a Cornea Specialist with over 17 years of experience in the diagnosis, medical management, and surgical treatment of corneal disorders. Serving as Consultant at Narayana Nethralaya, he specializes in corneal dystrophies, keratoconus management, corneal transplants, and ocular surface disorders.",
    photoUrl: YathishSImage,
  },
  {
    name: "Dr. Anjali Kiran",
    education: "MBBS, DO, FNN (Oculoplasty, Orbit & Ocular Oncology)",
    spec: "Oculoplasty, Orbit & Ocular Oncology Specialist",
    desc: "Dr. Anjali Kiran is an Oculoplasty and Ocular Oncology Specialist with over 14 years of clinical experience in orbital disorders, eyelid conditions, and reconstructive ocular surgeries. Consultant at Narayana Nethralaya, she completed fellowship training in Orbit, Oculoplasty & Ocular Oncology Services and manages complex eyelid, tear duct, and orbital conditions.",
    photoUrl: AnjaliKiranImage,
  },
  {
    name: "Dr. Anand Vinekar",
    education:
      "MBBS, MS (Ophthalmology), DNB (Ophthalmology), FRCS (Glasgow), FPVR (USA), PhD (Maastricht University), PGDMLE",
    spec: "Pediatric Retina Specialist & Retinopathy of Prematurity (ROP) Expert",
    desc: "Dr. Anand Vinekar is a Pediatric Retina Specialist with over 23 years of clinical experience in infant and pediatric retinal disorders. Head of the Department of Pediatric Retina at Narayana Nethralaya, Bengaluru, he leads the KIDROP tele-ophthalmology screening program and specializes in Retinopathy of Prematurity, pediatric retinal imaging, and pediatric vitreo-retinal conditions.",
    photoUrl: AnandVinekarImage,
  },
  {
    name: "Dr. Naren Shetty",
    education: "MS (Ophthalmology), PhD (Maastricht University, Netherlands)",
    spec: "Refractive & Cataract Surgeon",
    desc: "Dr. Naren Shetty is an Ophthalmologist specializing in cataract and refractive surgery with over 12 years of clinical experience. Serving as Head of Cataract & Refractive Services at Narayana Nethralaya, Bengaluru, he specializes in refractive vision correction, intraocular lens implantation, and cataract surgery, with extensive research contributions in ophthalmic imaging.",
    photoUrl: NarenShettyImage,
  },
  {
    name: "Prof. Dr. Sri Ganesh",
    education: "MBBS, MS, DNB, DSc (Hon), FRCS (Glasg), FWCRS",
    spec: "Cataract & Refractive Surgeon",
    desc: "Prof. Dr. Sri Ganesh is a Senior Cataract and Refractive Surgeon with over 30 years of clinical experience in ophthalmology. Chairman and Managing Director of Nethradhama Hospitals, Bengaluru, he specializes in cataract surgery, refractive vision correction, and anterior segment procedures, having trained numerous ophthalmologists across India and internationally.",
    photoUrl: SriGaneshImage,
  },
  {
    name: "Dr. Rohit Modi",
    education: "MBBS, MS (Ophthalmology), DNB (Ophthalmology), FAICO",
    spec: "Ophthalmologist, Cataract & Retina Surgeon",
    desc: "Dr. Rohit Modi is an Ophthalmologist and Vitreo-Retinal Surgeon with over 19 years of clinical experience. A Fellow of the Royal College of Surgeons (Glasgow) and trained at the L.V. Prasad Eye Institute, he specializes in retinal surgery, diabetic retinopathy management, macular disorders, and cataract surgery.",
    photoUrl: RohitModiImage,
  },
  {
    name: "Dr. Noshir Shroff",
    education: "MBBS, MS (Ophthalmology)",
    spec: "Ophthalmologist & Eye Surgeon",
    desc: "Dr. Noshir Shroff is a Senior Ophthalmologist and Eye Surgeon with over 45 years of clinical experience in comprehensive ophthalmology. Having completed his MS in Ophthalmology from the University of Delhi, he focuses on comprehensive eye care, diabetic retinopathy evaluation, uveitis management, and general ophthalmic surgery.",
    photoUrl: NoshirShroffImage,
  },
  {
    name: "Dr. Rushad Shroff",
    education:
      "MBBS (KMC Manipal), MS (Ophthalmology), Fellowship in Cataract, Cornea, Refractive & Optics",
    spec: "Refractive, Cataract & Cornea Surgeon",
    desc: "Dr. Rushad Shroff is an Ophthalmologist and Medical Director at Shroff Eye Centre with specialized training in cataract, cornea, and refractive procedures. He completed fellowships in anterior segment surgery and optics, specializing in corneal disease management, keratoconus, and laser vision correction.",
    photoUrl: RushadShroffImage,
  },
  {
    name: "Dr. Cyrus M. Shroff",
    education: "MBBS, MD (Ophthalmology)",
    spec: "Retina Specialist & Vitreo-Retinal Surgeon",
    desc: "Dr. Cyrus M. Shroff is a Senior Retina Specialist and Vitreo-Retinal Surgeon with over 47 years of experience in retinal disease management. Director of Retina Services at Shroff Eye Centre, he specializes in diabetic eye disease, retinal detachment surgery, macular degeneration management, and vitreo-retinal procedures.",
    photoUrl: CyrusShroffImage,
  },
  {
    name: "Dr. Varshini Shanker",
    education: "MBBS, DNB (Ophthalmology)",
    spec: "Pediatric Eye Specialist, Squint & Neuro-Ophthalmologist",
    desc: "Dr. Varshini Shanker is a Pediatric Ophthalmologist and Strabismus Specialist with over 24 years of experience. Trained at Sankara Nethralaya, Chennai, her clinical practice encompasses pediatric eye disorders, strabismus (squint) evaluation and surgical alignment, neuro-ophthalmology, and amblyopia therapy.",
    photoUrl: VarshiniShankerImage,
  },
];

import apolloImage from "../departments/dept-images/best-dental-hospital-india.webp";

import medantaImage from "../departments/dept-images/best-dental-hospital-india.webp";

import fortisImage from "../departments/dept-images/multi-specialty-dental-hospital-india.webp";

import maxImage from "../departments/dept-images/top-dental-care-india.webp";

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

const leftCards = [
  {
    id: 1,
    title: "Blurred Vision Evaluation",
    desc: "Blurred vision may occur due to cataracts, refractive errors, or retinal disorders, requiring diagnostic examination to determine clinical management.",
  },
  {
    id: 2,
    title: "Eye Strain & Discomfort",
    desc: "Persistent strain or discomfort may indicate dry eye syndrome, refractive changes, or intraocular pressure variations requiring specialist evaluation.",
  },
  {
    id: 3,
    title: "Reduced Night Vision",
    desc: "Difficulty seeing in low light can be associated with cataracts, retinal conditions, or corneal irregularities evaluated through ophthalmic imaging.",
  },
  {
    id: 4,
    title: "Double Vision (Diplopia)",
    desc: "Double vision can stem from ocular muscle imbalance, strabismus, or neurological factors requiring comprehensive ophthalmic assessment.",
  },
  {
    id: 5,
    title: "Tearing & Surface Irritation",
    desc: "Excessive tearing or surface irritation may result from tear duct blockage, ocular surface allergies, or corneal conditions requiring care.",
  },
];

const rightCards = [
  {
    id: 6,
    title: "Eye Redness & Inflammation",
    desc: "Persistent redness may indicate conjunctival irritation, blepharitis, or corneal inflammation requiring ophthalmology consultation.",
  },
  {
    id: 7,
    title: "Vision-Related Headaches",
    desc: "Headaches associated with visual tasks may stem from uncorrected refractive errors, eye strain, or intraocular pressure differences.",
  },
  {
    id: 8,
    title: "Light Sensitivity (Photophobia)",
    desc: "Sensitivity to light or glare issues may be linked to anterior segment inflammation, corneal disorders, or cataract development.",
  },
  {
    id: 9,
    title: "Visual Field Irregularities",
    desc: "Changes in central or peripheral vision warrant detailed retinal, macular, and optic nerve assessments such as OCT and perimetry.",
  },
  {
    id: 10,
    title: "Intraocular Pressure Monitoring",
    desc: "Elevated eye pressure or family history of glaucoma can be evaluated through tonometry, pachymetry, and optic nerve imaging.",
  },
];

function Card({ title, desc, index }) {
  return (
    <div className="eca-card" style={{ "--i": index }}>
      <h3 className="eca-card__title">{title}</h3>
      <p className="eca-card__desc">{desc}</p>
    </div>
  );
}

const services = [
  {
    icon: <FaPassport />,
    title: "Medical Report & Document Coordination",
    desc: "Assistance with sharing and reviewing ophthalmic reports and diagnostic records prior to travel.",
  },
  {
    icon: <FaHospital />,
    title: "Hospital & Ophthalmologist Options",
    desc: "Guidance on selecting accredited eye care hospitals and qualified specialists in India.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Appointment Scheduling Assistance",
    desc: "Facilitation of consultations and diagnostic appointments with chosen ophthalmology teams.",
  },
  {
    icon: <FaMicroscope />,
    title: "Treatment & Procedure Information",
    desc: "Objective information regarding available surgical, non-surgical, and laser treatment protocols.",
  },
  {
    icon: <FaBed />,
    title: "Travel & Accommodation Coordination",
    desc: "Assistance with booking suitable accommodation near selected medical facilities.",
  },
  {
    icon: <FaPlaneArrival />,
    title: "Airport & Local Transfer Assistance",
    desc: "Arrangement of airport pickup and local transport logistics for patient convenience.",
  },
  {
    icon: <FaGlobe />,
    title: "Communication Support",
    desc: "Language and communication assistance throughout consultations and hospital visits.",
  },
  {
    icon: <FaHandshake />,
    title: "Follow-Up Coordination",
    desc: "Support with post-procedure documentation, review scheduling, and remote follow-up coordination.",
  },
];

const reviews = [
  {
    name: "Patient from Kenya",
    text: '"The coordination for my cataract evaluation in Mumbai was handled efficiently. The ophthalmologist took time to explain the procedure and lens options clearly before treatment."',
  },
  {
    name: "Patient from Uganda",
    text: '"Human Care helped organize my medical reports and schedule an appointment with a retina specialist in Delhi. The hospital facilities and coordination team were very organized."',
  },
  {
    name: "Patient from Tanzania",
    text: '"Traveling for my corneal assessment was well-managed. We received clear procedure details and assistance with local logistics and hospital appointments throughout our stay."',
  },
  {
    name: "Patient from Nigeria",
    text: '"The team provided helpful guidance regarding hospital options and appointment scheduling in Bangalore. The doctors and medical staff were attentive and professional."',
  },
];
const Stars = () => (
  <div className="eye-reviews-stars">
    {"★★★★★".split("").map((s, i) => (
      <span key={i}>{s}</span>
    ))}
  </div>
);

const faqData = [
  {
    id: 1,
    question: "What eye treatments are available in India?",
    answer:
      "Eye hospitals and ophthalmologists in India provide consultations, diagnostic services and a range of surgical and non-surgical treatment options. Availability depends on the condition and selected provider.",
  },
  {
    id: 2,
    question: "Is eye surgery available for international patients?",
    answer:
      "International patients can explore planned eye treatment in India subject to the hospital’s requirements, applicable travel rules and individual medical circumstances.",
  },
  {
    id: 3,
    question: "How do I choose an eye hospital in India?",
    answer:
      "Consider the required ophthalmology specialty, available procedures, specialist qualifications, hospital facilities, location, international patient services and treatment information.",
  },
  {
    id: 4,
    question: "Can I share my eye reports before travelling?",
    answer:
      "Yes. Relevant medical reports and eye-test records can be shared for coordination and to help identify suitable specialist or hospital options. Final clinical decisions are made by the treating ophthalmologist.",
  },
  {
    id: 5,
    question: "How much does eye surgery cost in India?",
    answer:
      "Cost varies according to the procedure, diagnostic tests, hospital, ophthalmologist fees, technology, room requirements and follow-up. A specific estimate should be confirmed with the relevant provider.",
  },
  {
    id: 6,
    question: "How long does eye surgery take?",
    answer:
      "The procedure and overall care timeline vary by the type of treatment, individual condition and follow-up requirements. The ophthalmologist can provide more specific guidance after evaluation.",
  },
  {
    id: 7,
    question: "Can Human Care help with an ophthalmologist appointment?",
    answer:
      "Human Care can assist with appointment coordination based on the selected hospital, ophthalmologist availability and the patient’s requirements.",
  },
  {
    id: 8,
    question: "Can you help with travel and accommodation?",
    answer:
      "Human Care can assist with selected travel, accommodation and local transfer arrangements for international patients, subject to the requested services and availability.",
  },
  {
    id: 9,
    question: "Are eye-surgery results guaranteed?",
    answer:
      "No medical procedure should be presented as guaranteed for every patient. Visual and medical outcomes vary according to the condition, procedure, individual circumstances and other clinical factors.",
  },
  {
    id: 10,
    question: "Can eye surgery permanently improve vision?",
    answer:
      "The expected effect of an eye procedure depends on the diagnosis, procedure and individual clinical factors. The treating ophthalmologist should explain the expected benefits, limitations and risks.",
  },
  {
    id: 11,
    question: "How can I contact Human Care Medical Tourism?",
    answer:
      "Use the contact options and CTA buttons on this page to discuss your eye-treatment and medical-travel requirements with the Human Care Medical Tourism team.",
  },
];

const Check = () => <FaCheck className="icon-check" />;

const EyeSurgeryIndia = () => {
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
          Eye Surgery in India | Affordable Eye Treatment for International
          Patients
        </title>

        <meta
          name="description"
          content="Explore eye-care and eye-surgery options in India with support for hospital selection, ophthalmologist appointments, medical-report coordination and international patient arrangements."
        />

        <meta
          name="keywords"
          content="
              eye surgery in india,
              affordable eye surgery in india,
              eye surgery in india for international patients,
              eye treatment in india,
              eye hospitals in india,
              eye specialists in india,
              ophthalmologists in india,
              eye surgeon in india,
              cataract surgery in india,
              eye treatment cost in india,
              eye surgery cost in india,
              ophthalmology treatment in india,
              international eye treatment,
              medical tourism for eye treatment
            "
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://humancaremedicaltourism.com/eye-surgery-in-india"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Eye Surgery in India | Affordable Eye Treatment for International Patients"
        />

        <meta
          property="og:description"
          content="Explore eye surgery options in India with support for hospital selection, ophthalmologist appointments, medical-report coordination and international patient arrangements."
        />

        <meta
          property="og:image"
          content="https://humancaremedicaltourism.com/src/departments/dept-images/eye-surgery-india-hero.webp"
        />

        <meta
          property="og:url"
          content="https://humancaremedicaltourism.com/eye-surgery-in-india"
        />

        <meta property="og:type" content="website" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Eye Surgery in India | Affordable Eye Treatment for International Patients"
        />

        <meta
          name="twitter:description"
          content="Explore eye surgery options in India with support for hospital selection, ophthalmologist appointments, medical-report coordination and international patient arrangements."
        />

        <meta
          name="twitter:image"
          content="https://humancaremedicaltourism.com/src/departments/dept-images/eye-surgery-in-india-hero.webp"
        />

        {/* Geo SEO */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />

        {/* Language */}
        <meta httpEquiv="content-language" content="en" />
      </Helmet>

      {/* ════ SECTION 1 — HERO ════ */}
      <section className="eye-hero-section">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Eye surgery treatment in India for international patients"
          className="eye-hero-bg-image"
          loading="eager"
        fetchPriority="high"
        width={1200}
        height={800}
        decoding="async"
      />

        {/* Gradient Overlay */}
        <div className="eye-hero-overlay" />

        {/* Content */}
        <div className="eye-hero-content">
          <span className="eye-hero-badge">
            International Patient Eye Care Assistance
          </span>

          <h1 className="eyecare-heading">
            Affordable Eye Surgery in India for International Patients
          </h1>

          <p>
            Explore eye-care and eye-surgery options in India with support for
            hospital selection, ophthalmologist appointments, medical-report
            coordination and international patient arrangements.
          </p>
          <p>
            Human Care Medical Tourism assists international patients with
            healthcare coordination based on their medical requirements and
            travel needs.
          </p>

          <div className="eye-hero-ctas">
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

      {/* ════ SECTION 2 — INTRODUCTION ════ */}
      <section className="eyecare-section">
        <div className="eyecare-container">
          {/* ── Left Content Panel ── */}
          <div className="eyecare-left">
            <h2 className="eyecare-heading">
              Eye Surgery in India –{" "}
              <span className="eyecare-heading-accent">
                Advanced &amp; Affordable
              </span>{" "}
              Vision Care for International Patients
            </h2>

            <p className="eyecare-body">
              India has hospitals and ophthalmologists providing evaluation and
              treatment for a range of eye conditions. Available procedures
              depend on the patient’s diagnosis, eye health, medical history and
              clinical requirements.
            </p>

            <p className="eyecare-body">
              International patients can explore appropriate eye-care options
              while receiving assistance with specialist coordination,
              medical-document sharing, appointments and selected
              travel-related arrangements.
            </p>

            <h3 className="eyecare-trust-heading">
              Ophthalmic Services &amp; Coordination Support
            </h3>

            <ul className="eyecare-trust-list">
              {trustSignals.map((item, idx) => (
                <li key={idx} className="eyecare-trust-item">
                  <span className="eyecare-trust-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="eyecare-trust-label">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right Image Panel ── */}
          <div className="eyecare-right">
            <div className="eyecare-img-wrapper eyecare-img-top">
              <img
                src={EyeAboutImage}
                alt="Ophthalmologist performing eye examination in India"
                className="eyecare-img"
        width={1920}
        height={768}
        decoding="async"
      />
            </div>

            <div className="eyecare-img-wrapper eyecare-img-bottom">
              <img
                src={EyeAbout1Image}
                alt="Ophthalmic diagnostic equipment and examination in India"
                className="eyecare-img"
        width={1200}
        height={800}
        decoding="async"
      />
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 3 — WHY CHOOSE INDIA ════ */}
      <section className="wci-section">
        {/* Decorative background blobs */}
        <div className="wci-blob wci-blob--1" aria-hidden="true" />
        <div className="wci-blob wci-blob--2" aria-hidden="true" />

        <div className="wci-container">
          {/* Header */}
          <div className="wci-header">
            <h2 className="wci-heading">Why Choose India for Eye Care?</h2>
            <p className="wci-subheading">
              India offers a range of hospitals, ophthalmology departments and
              specialist options for international patients. Patients can
              compare providers based on the required eye specialty, available
              procedures, specialist experience, hospital facilities, location
              and international patient services. The most appropriate treatment
              depends on individual clinical assessment and should be determined
              by a qualified ophthalmologist.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="wci-grid">
            {cards.map((card, index) => (
              <article
                key={card.id}
                className={`wci-card ${hoveredId === card.id ? "wci-card--hovered" : ""}`}
                style={{ "--card-index": index }}
                onMouseEnter={() => setHoveredId(card.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Top row */}
                <div className="wci-card__top">
                  <div className="wci-card__icon-wrap">{card.icon}</div>
                </div>

                {/* Content */}
                <div className="wci-card__content">
                  <h3 className="wci-card__title">{card.title}</h3>
                  <p className="wci-card__body">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ════ SECTION 4 — TYPES OF EYE SURGERY ════ */}
      <section className="eye-services-section">
        {/* Header */}
        <div className="eye-services-header">
          <h2 className="eye-services-title">
            Types of Eye Surgery in India
          </h2>
          <p className="eye-services-description">
            Explore available eye-care and surgical procedures in India.
            Appropriate treatment options depend on individual clinical
            assessment, diagnosis, and recommendations by a qualified
            ophthalmologist.
          </p>
        </div>

        {/* All Cards in One Grid */}
        <div className="eye-services-grid">
          {eyesServices.map((service) => (
            <EyesServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* ════ SECTION 5 — EYE TREATMENT COST ════ */}
      <section className="bo-section">
        {/* Background image layer */}
        <div className="bo-bg" aria-hidden="true">
          <img
            src={BestOphthalmologistsBanner}
            alt="Eye treatment and surgery cost considerations in India"
            className="bo-bg__image"
        width={1920}
        height={1280}
        decoding="async"
      />
          <div className="bo-bg__overlay" />
        </div>

        <div className="bo-container">
          {/* ── Top: full-width heading block ── */}
          <div className="bo-top">
            <span className="bo-eyebrow">Cost &amp; Treatment Guidance</span>

            <h2 className="bo-heading">
              Eye Treatment Cost in India
            </h2>
          </div>

          {/* ── Split: left description + right expertise ── */}
          <div className="bo-split">
            {/* LEFT */}
            <div className="bo-left">
              <p className="bo-left__body">
                Eye treatment and surgery costs vary according to the type of
                procedure, diagnostic requirements, hospital, ophthalmologist or
                surgeon fees, technology used, room requirements, medicines,
                follow-up and other individual factors.
              </p>
              <p className="bo-left__body">
                Patients can request cost information based on their medical
                details and proposed treatment. A final cost should be
                confirmed with the relevant hospital or healthcare provider
                after clinical evaluation.
              </p>

              {/* Cost Highlights */}
              <div className="bo-badges">
                {costHighlights.map((b) => (
                  <span key={b} className="bo-badge">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* DIVIDER */}
            <div className="bo-divider" aria-hidden="true" />

            {/* RIGHT */}
            <div className="bo-right">
              <p className="bo-right__intro">
                Key Factors Influencing Cost:
              </p>

              <ul className="bo-trust">
                {costFactors.map((pt) => (
                  <li key={pt} className="bo-trust__item">
                    <FaCheckCircle
                      className="bo-trust__check"
                      aria-hidden="true"
                    />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="hn-section">
        <div className="hn-container">
          <div className="hn-title-wrap">
            <span className="hn-label">Our Hospital Network</span>
            <h2 className="hn-heading">Best Eye Hospitals in India</h2>
            <p className="hn-subtitle">
              India has some of the world’s leading eye hospitals equipped with
              advanced ophthalmology departments and modern surgical
              infrastructure.
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
      </section> */}

      {/* ════ SECTION 7 — DOCTORS ════ */}
      <section className="doctor-section-light">
        <div className="doctor-container">
          <div className="doctor-title-wrap">
            <span className="doctor-label">Specialist Directory</span>
            <h2 className="doctor-h2">
              Ophthalmologists and Eye Specialists in India
            </h2>
            <p
              className="doctor-subheading"
              style={{
                maxWidth: "820px",
                margin: "12px auto 0",
                color: "#64748b",
                fontSize: "15px",
              }}
            >
              Patients can explore ophthalmologists based on their eye-care
              requirements, specialty, hospital affiliation, qualifications and
              verified professional information.
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

      {/* ════ SECTION 8 — MEDICAL FACILITIES & CONDITIONS ════ */}
      <section className="eca-section">
        {/* Header */}
        <div className="eca-header">
          <h2 className="eca-heading">
            Medical Facilities &amp; Eye Conditions Evaluated in India
          </h2>
          <p className="eca-subheading">
            Hospitals in India provide diagnostic evaluations, ophthalmic
            imaging and treatment options for a range of eye conditions.
            Available care depends on the patient’s diagnosis, eye health and
            clinical assessment by a qualified ophthalmologist.
          </p>
        </div>

        {/* Three-column layout */}
        <div className="eca-layout">
          {/* Left column */}
          <div className="eca-col eca-col--left">
            {leftCards.map((card, i) => (
              <Card key={card.id} {...card} index={i} />
            ))}
          </div>

          {/* Centre image */}
          <div className="eca-center">
            <div className="eca-image-wrap">
              <img
                src={SymptomsEyeConditionTreated}
                alt="Ophthalmic examination and diagnostic eye evaluation in India"
                className="eca-image"
        width={400}
        height={400}
        decoding="async"
      />
            </div>
          </div>

          {/* Right column */}
          <div className="eca-col eca-col--right">
            {rightCards.map((card, i) => (
              <Card key={card.id} {...card} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════ SECTION 6 — INTERNATIONAL PATIENT SUPPORT ════ */}
      <section className="ips">
        <div className="ips__container">
          <div className="ips__left">
            <h2 className="ips__heading">
              International Patient Support for Eye Treatment
            </h2>
            <p className="ips__sub">
              Human Care supports international patients with coordination
              before and during planned eye treatment in India, depending on
              the requested services and availability.
            </p>
            <p className="ips__services-label">Coordination Services Include</p>
            <div className="ips__services">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className={`ips__item ${active === i ? "ips__item--active" : ""}`}
                  style={{ "--si": i }}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                >
                  <div className="ips__item-icon">{s.icon}</div>
                  <div className="ips__item-text">
                    <h3 className="ips__item-title">{s.title}</h3>
                    <p className="ips__item-desc">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="ips__right">
            <div className="ips__img-wrap">
              <img
                src={InternationalPatientServicesImage}
                alt="International patient assistance and coordination services in India"
                className="ips__img"
        width={493}
        height={740}
        decoding="async"
      />
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 9 — REVIEWS ════ */}
      <section className="eye-reviews-section">
        <div className="eye-reviews-content">
          <h2 className="eye-reviews-heading">Our Clients' Reviews</h2>
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
          <div className="eye-reviews-slider-wrapper">
            <div
              className="eye-reviews-slider-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((pair, slideIndex) => (
                <div key={slideIndex} className="eye-reviews-slide">
                  {pair.map((r, cardIndex) => (
                    <div key={cardIndex} className="eye-reviews-card">
                      <Stars />
                      <p className="eye-reviews-card-text">{r.text}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="eye-reviews-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`eye-reviews-dot ${currentSlide === index ? "active" : ""}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="eye-reviews-image-wrapper">
          <img
            src={ThumbnailImage}
            alt="International patient receiving eye care consultation in India"
            className="eye-reviews-image"
        width={740}
        height={536}
        decoding="async"
      />
        </div>
      </section>

      {/* ════ SECTION 10 — FAQS ════ */}
      <section className="eye-faq-section" aria-labelledby="faq-heading">
        <div className="eye-faq-container">
          {/* Section Header */}
          <div className="eye-faq-header">
            <span className="eye-faq-badge">Ophthalmology Treatment FAQs</span>
            <h2 id="faq-heading" className="eye-faq-title">
              Frequently Asked Questions About Eye Treatment in India
            </h2>
            <p className="eye-faq-subtitle">
              Clear, factual information regarding eye care, hospital choices,
              ophthalmology consultations, and treatment coordination in India.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="eye-faq-list">
            {faqData.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={faq.id}
                  className={`eye-faq-item ${isActive ? "active" : ""}`}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="eye-faq-question"
                    aria-expanded={isActive}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <h3 className="eye-faq-question-text">{faq.question}</h3>
                    <FaPlus
                      className={`eye-faq-icon ${isActive ? "rotate" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`eye-faq-answer ${isActive ? "open" : ""}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                  >
                    <div className="eye-faq-answer-content">
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
      <section className="eye-cta-section">
        {/* Background Image */}
        <img
          src={CtaImage}
          alt="Book eye surgery consultation in India"
          className="eye-cta-bg-image"
          loading="lazy"
        width={1080}
        height={720}
        decoding="async"
      />

        {/* Gradient Overlay */}
        <div className="eye-cta-overlay" />

        {/* Content Container */}
        <div className="eye-cta-container">
          <div className="eye-cta-content">
            <span className="eye-cta-badge">International Patient Support</span>

            <h2 className="eye-cta-title">Book Your Eye Consultation</h2>

            <p className="eye-cta-subtitle">
              Discuss your eye-treatment requirements with Human Care Medical
              Tourism and receive assistance with hospital options,
              ophthalmologist coordination and international patient services.
            </p>

            <div className="eye-cta-benefits-list">
              <div className="eye-cta-benefit-point">
                <FaCheckCircle className="eye-cta-check-icon" />
                <span>Hospital and ophthalmologist options</span>
              </div>
              <div className="eye-cta-benefit-point">
                <FaCheckCircle className="eye-cta-check-icon" />
                <span>Medical report and document coordination</span>
              </div>
              <div className="eye-cta-benefit-point">
                <FaCheckCircle className="eye-cta-check-icon" />
                <span>Transparent treatment and cost information</span>
              </div>
              <div className="eye-cta-benefit-point">
                <FaCheckCircle className="eye-cta-check-icon" />
                <span>Travel and accommodation assistance</span>
              </div>
              <div className="eye-cta-benefit-point">
                <FaCheckCircle className="eye-cta-check-icon" />
                <span>Post-procedure coordination support</span>
              </div>
            </div>

            <div className="eye-hero-ctas">
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
                fontSize: "12px",
                color: "#94a3b8",
                lineHeight: "1.6",
                maxWidth: "680px",
              }}
            >
              *Disclaimer: Human Care Medical Tourism provides medical travel
              and appointment coordination services. Medical advice, diagnosis,
              and treatment plans are provided solely by licensed
              ophthalmologists and authorized healthcare institutions. Visual
              and surgical outcomes vary according to individual condition and
              clinical circumstances.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EyeSurgeryIndia;
