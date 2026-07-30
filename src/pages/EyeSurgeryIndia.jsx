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
    label: "Experienced Ophthalmologists",
  },
  {
    icon: <FaHospital />,
    label: "Internationally Accredited Hospitals",
  },
  {
    icon: <FaMicroscope />,
    label: "Advanced Eye Surgery Technology",
  },
  {
    icon: <FaGlobeAfrica />,
    label: "Personalized International Patient Support",
  },
  {
    icon: <FaHandHoldingUsd />,
    label: "Affordable & Transparent Treatment Planning",
  },
];

const cards = [
  {
    id: 1,
    icon: <FaMicroscope />,
    title: "Advanced Eye Surgery Technology",
    body: "India is known for advanced ophthalmology hospitals equipped with modern diagnostic and surgical technology for precise and safe vision treatment. From blade-free LASIK systems and retina microsurgery to premium cataract lenses and digital eye imaging, patients receive world-class treatment using internationally accepted standards. Many international patients searching for laser eye surgery cost Mumbai choose India because of its advanced medical infrastructure, modern eye care techniques, and trusted surgical outcomes.",
  },
  {
    id: 2,
    icon: <FaUserMd />,
    title: "Experienced Eye Specialists",
    body: "The Best Ophthalmologists in India are highly experienced in treating both simple and complex eye disorders with precision and patient-focused care. Many eye specialists are internationally trained and perform thousands of successful procedures every year. Their expertise includes LASIK surgery, retina surgery, glaucoma treatment, cornea transplantation, cataract procedures, and squint correction surgery, making India a trusted destination for advanced eye treatment.",
  },
  {
    id: 3,
    icon: <FaHandHoldingUsd />,
    title: "Affordable & Cost-Effective Treatment",
    body: "One of the main reasons patients travel for affordable eye surgery cost in India is the combination of high-quality treatment and budget-friendly medical care. India offers transparent pricing, personalized treatment plans, and cost-effective surgical options without compromising safety or technology. International patients benefit from affordable healthcare solutions while receiving treatment from experienced specialists in modern hospitals.",
  },
  {
    id: 4,
    icon: <FaCalendarCheck />,
    tag: "Speed",
    title: "Fast Appointments & Reduced Waiting Time",
    body: "Choosing an eye operation in India allows international patients to receive quicker consultations, faster diagnosis, and timely surgery scheduling compared to many countries with long waiting periods. Early treatment is important for protecting vision, especially in conditions like cataracts, glaucoma, retina disorders, and corneal diseases. India’s streamlined healthcare system helps patients access expert treatment without unnecessary delays.",
  },
  {
    id: 5,
    icon: <FaGlobeAfrica />,
    title: "International Patient-Friendly Services",
    body: "Patients searching for eye surgery India cost often choose India not only for affordability but also for its excellent international patient support services. Leading hospitals provide medical visa assistance, airport pickup, hotel accommodation support, language interpretation, online consultations, and dedicated coordinators for international visitors from Kenya, Uganda, Tanzania, Nigeria, and South Sudan. These services ensure a smooth and stress-free medical journey.",
  },
  {
    id: 6,
    icon: <FaHospital />,
    title: "Modern Hospitals & Global Standards",
    body: "India’s top ophthalmology hospitals are internationally recognized for advanced infrastructure, specialized eye departments, and modern surgical facilities. Patients looking for the best LASIK eye surgery cost in India often prefer India because hospitals combine affordable treatment with global healthcare standards. From advanced laser systems and digital diagnostics to modern operation theaters and comprehensive post-treatment care, Indian hospitals provide safe and reliable eye treatment for international patients.",
  },
];

const eyesServices = [
  {
    id: 1,
    title: "LASIK Eye Surgery",
    description:
      "LASIK is an advanced vision correction procedure that helps reduce dependence on glasses or contact lenses. Patients searching for the best LASIK eye surgery in Mumbai or LASIK eye surgery Pune choose India for advanced laser technology, experienced ophthalmologists, affordable treatment options, and faster recovery outcomes.",
    image: LasikEyeImage,
    alt: "LASIK eye surgery treatment in India",
  },
  {
    id: 2,
    title: "Cataract Surgery",
    description:
      "Cataract surgery in India uses modern lens implants and minimally invasive techniques to restore clear vision. International patients seeking affordable eye surgery cost in India prefer India because of experienced eye specialists, advanced hospitals, personalized treatment planning, and high-quality cataract care with international standards.",
    image: CataractSurgeryImage,
    alt: "Advanced cataract surgery in India",
  },
  {
    id: 3,
    title: "Retina Surgery",
    description:
      "Retina surgery helps treat retinal detachment, diabetic retinopathy, and other serious eye conditions. Patients looking for advanced eye operation in India often choose India for specialized retina surgeons, modern microsurgical technology, digital retinal imaging systems, and comprehensive eye care services for better vision protection.",
    image: RetinaSurgeryImage,
    alt: "Retina surgery treatment in India",
  },
  {
    id: 4,
    title: "Glaucoma Surgery",
    description:
      "Glaucoma surgery in India helps control eye pressure and prevent vision loss caused by optic nerve damage. International patients searching for eye surgery India cost choose India for advanced glaucoma treatment, experienced ophthalmologists, minimally invasive procedures, and affordable healthcare with modern medical infrastructure.",
    image: GlaucomaSurgeryImage,
    alt: "Glaucoma surgery in India for managing intraocular pressure",
  },
  {
    id: 5,
    title: "Cornea Surgery",
    description:
      "Cornea surgery in India treats corneal infections, scarring, keratoconus, and other vision-related disorders. Patients searching for laser eye surgery in Kerala often prefer India because of advanced corneal transplant procedures, modern laser technology, skilled specialists, and affordable treatment options for international patients.",
    image: CorneaSurgeryImage,
    alt: "Cornea surgery in India for treating corneal conditions",
  },
  {
    id: 6,
    title: "Squint Eye Surgery",
    description:
      "Squint eye surgery corrects eye misalignment and improves both vision coordination and appearance. Patients searching for squint eye surgery cost in India or cross eye surgery cost in India choose India for advanced surgical techniques, experienced ophthalmologists, affordable care, and excellent international patient support services.",
    image: SquintSurgeryImage,
    alt: "Squint eye surgery in India for correcting eye misalignment",
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

const trustPoints = [
  "Globally trained surgeons",
  "Expertise in minimally invasive techniques",
  "Modern diagnostic facilities",
  "Comprehensive vision care",
  "Strong focus on patient safety",
];

const specialtyBadges = [
  "Extensive surgical experience",
  "Advanced technology expertise",
  "International treatment standards",
  "Patient-centered care",
  "High success rates",
  "Personalized treatment planning",
];

const DOCTORS = [
  {
    name: "Prof. Dr. Mahipal S Sachdev",
    education:
      "MBBS, MD, MS (Ophthalmology), DNB, MNAMS, FRCS, FICO (UK), FAICO",
    spec: "Ophthalmologist, Cataract & Refractive Surgeon",
    desc: "Prof. Dr. Mahipal S Sachdev is a Padma Shri award-winning Ophthalmologist, Cataract Surgeon, and Refractive Eye Surgeon with over 42 years of experience. He specializes in SMILE Eye Surgery, LASIK, SILK Surgery, Cataract Surgery, Cornea Transplant, Keratoconus Treatment, and Dry Eye Management. As Chairman and Medical Director of the Centre for Sight Group of Eye Hospitals, he has pioneered several advanced eye surgery techniques in India, including SMILE, bladeless LASIK, and femtosecond cataract surgery. Dr. Sachdev has received numerous national and international recognitions for his contributions to ophthalmology and eye care innovation.",
    photoUrl: MahipalSachdevImage,
  },
  {
    name: "Dr. Sathi Devi A V",
    education: "Postgraduate Training in Ophthalmology, Fellowship in Glaucoma",
    spec: "Glaucoma Specialist",
    desc: "Dr. Sathi Devi A V is a highly experienced Glaucoma Specialist with over 24 years of expertise in the diagnosis and management of glaucoma and related eye disorders. She serves as HOD & Consultant and has been practicing exclusive glaucoma care at Narayana Nethralaya since 1998. Dr. Sathi completed her postgraduate training at the Minto Regional Institute of Ophthalmology, Bangalore, and pursued a fellowship at the Medical Research Foundation, Sankara Nethralaya, where she further specialized in glaucoma services. She is recognized for her extensive experience in advanced glaucoma management and comprehensive eye care.",
    photoUrl: SathiDeviImage,
  },
  {
    name: "Dr. Yathish S",
    education: "MBBS, DOMS, DNB (Ophthalmology), FCE",
    spec: "Cornea Specialist",
    desc: "Dr. Yathish S is an experienced Cornea Specialist with over 17 years of expertise in the diagnosis and treatment of corneal disorders. He serves as HOD & Consultant and specializes in cornea diseases, corneal transplants, and advanced corneal care. Dr. Yathish is skilled in managing complex corneal conditions and is dedicated to providing comprehensive eye care using the latest treatment techniques and technologies.",
    photoUrl: YathishSImage,
  },
  {
    name: "Dr. Anjali Kiran",
    education: "MBBS, DO, FNN (Oculoplasty, Orbit & Ocular Oncology)",
    spec: "Oculoplasty, Orbit & Ocular Oncology Specialist",
    desc: "Dr. Anjali Kiran is an experienced Oculoplasty, Orbit & Ocular Oncology Specialist with over 14 years of expertise in the diagnosis and treatment of orbital disorders, eyelid conditions, eye tumors, and reconstructive eye surgeries. She completed her MBBS from Karnatak University and her postgraduate training in Ophthalmology from J.J.M. Medical College, Davangere. Dr. Anjali further specialized through a Fellowship in Orbit, Oculoplasty & Ocular Oncology Services at Narayana Nethralaya in 2013. She currently serves as HOD & Consultant and is dedicated to providing advanced surgical and medical care for complex orbital, oculoplastic, and ocular oncology conditions.",
    photoUrl: AnjaliKiranImage,
  },
  {
    name: "Dr. Anand Vinekar",
    education:
      "MBBS, MS (Ophthalmology), DNB (Ophthalmology), FRCS (Glasgow), FPVR (USA), PhD (Maastricht University), PGDMLE",
    spec: "Pediatric Retina Specialist & Retinopathy of Prematurity (ROP) Expert",
    desc: "Dr. Anand Vinekar is a renowned Pediatric Retina Specialist with over 23 years of experience in pediatric retinal diseases and Retinopathy of Prematurity (ROP). He serves as the Founder Program Director of KIDROP and Head of the Department of Pediatric Retina at Narayana Nethralaya, Bengaluru. Dr. Vinekar has treated more than 5,500 infants with ROP and is internationally recognized for his contributions to infant retinal imaging, telemedicine, and blindness prevention. Under his leadership, the KIDROP Tele-ROP Program has become one of the world's largest ROP screening initiatives, completing over 320,000 screening sessions across more than 190 neonatal centers. He graduated from St. John's Medical College with 17 gold medals and has received numerous national and international awards for his contributions to pediatric ophthalmology, retinal care, and medical innovation.",
    photoUrl: AnandVinekarImage,
  },
  {
    name: "Dr. Naren Shetty",
    education: "MS (Ophthalmology), PhD (Maastricht University, Netherlands)",
    spec: "LASIK, SMILE & Cataract Surgeon",
    desc: "Dr. Naren Shetty is a renowned LASIK, SMILE, and Cataract Surgeon with over 12 years of experience in advanced refractive and cataract eye surgery. As Director and Head of Cataract & Refractive Services at Narayana Nethralaya, Bengaluru, he specializes in LASIK eye surgery, SMILE vision correction, Phakic IOL implantation, Premium IOLs, and complex cataract surgery. He has successfully performed more than 28,000 cataract and refractive procedures and is recognized internationally for his clinical research and innovation in ophthalmology. Dr. Shetty has authored numerous scientific publications, participated in multiple clinical trials, and received several national and international awards for excellence in cataract and refractive surgery.",
    photoUrl: NarenShettyImage,
  },
  {
    name: "Prof. Dr. Sri Ganesh",
    education: "MBBS, MS, DNB, DSc (Hon), FRCS (Glasg), FWCRS",
    spec: "Cataract, LASIK & Refractive Surgeon",
    desc: "Prof. Dr. Sri Ganesh is a leading Cataract, LASIK, and Refractive Surgeon with over 30 years of experience in advanced ophthalmology. As Chairman and Managing Director of Nethradhama Hospitals, Bengaluru, he specializes in cataract surgery, LASIK eye surgery, refractive surgery, vision correction procedures, and complex eye treatments. He has performed more than 100,000 cataract surgeries and over 50,000 refractive procedures, making him one of the most experienced eye surgeons in India. Dr. Sri Ganesh is internationally recognized for his contributions to ophthalmic education, research, innovation, and patient care. He has trained over 200 ophthalmologists worldwide and continues to advance eye care through clinical excellence and research-driven innovation.",
    photoUrl: SriGaneshImage,
  },
  {
    name: "Dr. Rohit Modi",
    education: "MBBS, MS (Ophthalmology), DNB (Ophthalmology), FAICO",
    spec: "Ophthalmologist, Cataract & Retina Surgeon",
    desc: "Dr. Rohit Modi is an experienced Ophthalmologist, Cataract Surgeon, and Retina Specialist with over 19 years of overall experience, including more than 11 years as a specialist. He has received advanced training from the renowned L.V. Prasad Eye Institute, India, and Associated Retina Consultants, USA. Dr. Modi is a Fellow of the Royal College of Surgeons, Glasgow, UK, and the International Council of Ophthalmology, UK. He has successfully performed over 10,000 eye surgeries and specializes in customized laser vision correction procedures, cataract surgery, retinal surgery, diabetic eye disease management, retinopathy of prematurity (ROP), and uveitis treatment. His extensive surgical expertise and patient-centered approach make him a trusted specialist for complex eye conditions.",
    photoUrl: RohitModiImage,
  },
  {
    name: "Dr. Noshir Shroff",
    education: "MBBS, MS (Ophthalmology)",
    spec: "Ophthalmologist & Eye Surgeon",
    desc: "Dr. Noshir Shroff is a highly experienced Ophthalmologist and Eye Surgeon with over 45 years of overall experience, including more than 43 years as a specialist. He completed his MBBS from the University of Delhi in 1975 and MS in Ophthalmology from the University of Delhi in 1978. Dr. Shroff is known for his expertise in comprehensive eye care, ophthalmologic examinations, diabetic retinopathy screening and treatment, ocular inflammation, uveitis management, and the diagnosis and treatment of various eye disorders. With decades of clinical experience, he is recognized as one of the leading eye specialists dedicated to providing advanced and patient-focused ophthalmic care.",
    photoUrl: NoshirShroffImage,
  },
  {
    name: "Dr. Rushad Shroff",
    education:
      "MBBS (KMC Manipal), MS (Ophthalmology), Fellowship in Cataract, Cornea, Refractive & Optics",
    spec: "LASIK, Cataract & Cornea Surgeon",
    desc: "Dr. Rushad Shroff is a leading LASIK, Cataract, and Cornea Surgeon and Medical Director at Shroff Eye Centre. He specializes in LASIK eye surgery, PRK, ICL implantation, femtosecond laser cataract surgery, corneal transplantation, keratoconus treatment, and dry eye management. Trained at premier institutions including KMC Manipal, RIO Trivandrum, and Narayana Nethralaya, Bengaluru, he is recognized for his expertise in advanced vision correction and corneal procedures. Dr. Shroff has published extensively in international ophthalmology journals and has received multiple prestigious awards for excellence in cataract and refractive surgery. His commitment to innovation and patient-centered care has established him as one of the leading eye surgeons in India.",
    photoUrl: RushadShroffImage,
  },
  {
    name: "Dr. Cyrus M. Shroff",
    education: "MBBS, MD (Ophthalmology)",
    spec: "Retina Specialist & Vitreo-Retinal Surgeon",
    desc: "Dr. Cyrus M. Shroff is a renowned Retina Specialist and Vitreo-Retinal Surgeon with over 47 years of experience in advanced retinal care. He founded the Retina & Vitreous Subspecialty Services at Shroff Eye Centre and has dedicated his career to the treatment of retinal diseases, diabetic retinopathy, retinal detachment, macular degeneration, vitreous disorders, and laser retinal procedures. Having performed more than 5,000 vitreo-retinal surgeries and over 10,000 retinal laser treatments, Dr. Shroff is widely recognized for his expertise in complex retinal conditions and surgical excellence. His extensive experience and commitment to innovation have made him one of the most trusted retina surgeons in India.",
    photoUrl: CyrusShroffImage,
  },
  {
    name: "Dr. Varshini Shanker",
    education: "MBBS, DNB (Ophthalmology)",
    spec: "Pediatric Eye Specialist, Squint & Neuro-Ophthalmologist",
    desc: "Dr. Varshini Shanker is a leading Pediatric Eye Specialist, Squint Surgeon, and Neuro-Ophthalmologist with over 24 years of experience in advanced eye care. She specializes in children's eye disorders, squint correction surgery, neuro-ophthalmology, nerve palsy treatment, binocular vision disorders, hereditary retinal diseases, and pediatric eye trauma. Trained at Sankara Nethralaya, Chennai, she has extensive expertise in managing complex eye conditions in children, including those with developmental delays. Dr. Varshini is committed to early diagnosis and advanced treatment of pediatric eye diseases and has contributed significantly to ophthalmic research, education, and public awareness programs.",
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
    title: "Blurred Vision",
    desc: "Blurred vision may result from cataracts, refractive errors, or retina disorders requiring advanced diagnosis and personalized eye treatment in India.",
  },
  {
    id: 2,
    title: "Eye Pain & Eye Strain",
    desc: "Eye pain and strain may indicate glaucoma, infections, or excessive screen exposure requiring professional ophthalmology evaluation and care.",
  },
  {
    id: 3,
    title: "Difficulty Seeing at Night",
    desc: "Poor night vision may be linked to cataracts, retina disorders, or age-related vision problems needing specialized eye treatment.",
  },
  {
    id: 4,
    title: "Double Vision",
    desc: "Double vision can occur due to squint conditions, nerve disorders, or muscle imbalance affecting eye coordination and visual clarity.",
  },
  {
    id: 5,
    title: "Watery Eyes & Excessive Tearing",
    desc: "Excessive tearing or watery eyes may result from infections, allergies, blocked tear ducts, or underlying corneal conditions requiring treatment.",
  },
];

const rightCards = [
  {
    id: 5,
    title: "Eye Redness & Irritation",
    desc: "Persistent redness, itching, or irritation may indicate allergies, infections, dry eyes, or corneal inflammation requiring expert eye care.",
  },
  {
    id: 6,
    title: "Frequent Headaches",
    desc: "Frequent headaches with vision problems may be caused by refractive errors, glaucoma, or eye strain affecting daily activities.",
  },
  {
    id: 7,
    title: "Light Sensitivity",
    desc: "Light sensitivity or glare issues may result from cataracts, inflammation, corneal disorders, or post-vision correction complications.",
  },
  {
    id: 8,
    title: "Vision Distortion",
    desc: "Distorted vision may indicate retina conditions like diabetic retinopathy or macular degeneration requiring immediate retina specialist consultation.",
  },
  {
    id: 9,
    title: "Loss of Peripheral Vision",
    desc: "Loss of side vision may signal glaucoma or optic nerve damage requiring timely diagnosis and advanced glaucoma treatment.",
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
    title: "Medical Visa Assistance",
    desc: "Guidance with invitation letters and visa documentation.",
  },
  {
    icon: <FaUserMd />,
    title: "Online Doctor Consultation",
    desc: "Share reports and receive expert opinions before traveling.",
  },
  {
    icon: <FaPlaneArrival />,
    title: "Airport Pickup & Travel Support",
    desc: "Comfortable transportation arrangements from arrival to discharge.",
  },
  {
    icon: <FaBed />,
    title: "Hotel & Accommodation Assistance",
    desc: "Support in finding nearby hotels and guesthouses for patients and attendants.",
  },
  {
    icon: <FaGlobe />,
    title: "Language Interpretation",
    desc: "Language coordinators are available for better communication and comfort.",
  },
  {
    icon: <FaHandshake />,
    title: "Personalized Treatment Coordination",
    desc: "Dedicated coordinators help manage appointments, treatment schedules, and follow-up care.",
  },
];

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

const faqData = [
  {
    id: 1,
    question: "Why do international patients choose Eye Surgery in India?",
    answer:
      "Many international patients from Kenya, Uganda, Tanzania, Nigeria, and South Sudan choose Eye Surgery in India because of experienced ophthalmologists, advanced hospitals, modern technology, and affordable treatment costs. India is known for providing high-quality vision care, faster appointments, and personalized support for international patients seeking LASIK, cataract, retina, and glaucoma treatment.",
  },
  {
    id: 2,
    question:
      "What is the Eye Surgery cost in India for international patients?",
    answer:
      "The Eye Surgery cost in India is significantly more affordable compared to many other countries while maintaining international treatment standards. The total cost may vary depending on the type of procedure, hospital, surgeon expertise, technology used, and recovery requirements. Many patients choose India for affordable and advanced eye treatment options.",
  },
  {
    id: 3,
    question: "What is the LASIK eye surgery cost in India?",
    answer:
      "The LASIK eye surgery cost in India depends on the laser technology, hospital reputation, surgeon experience, and the patient’s eye condition. India has become a preferred destination for LASIK because patients can access advanced blade-free laser vision correction at affordable prices with experienced eye specialists.",
  },
  {
    id: 4,
    question: "Which are considered the best eye hospitals in India?",
    answer:
      "Some of the best eye hospitals in India are located in Mumbai, Delhi, Chennai, Hyderabad, and Bangalore. These hospitals are known for advanced ophthalmology departments, modern surgical equipment, experienced ophthalmologists, retina specialists, and comprehensive international patient care services.",
  },
  {
    id: 5,
    question:
      "How do I choose the best ophthalmologist in India for eye treatment?",
    answer:
      "When selecting the best ophthalmologist in India, patients should consider the doctor’s experience, specialization, hospital accreditation, patient reviews, surgical success rates, and expertise in procedures such as LASIK surgery, cataract surgery, retina treatment, cornea surgery, and glaucoma management.",
  },
  {
    id: 6,
    question: "Is Cataract Surgery in India safe for international patients?",
    answer:
      "Yes. Cataract Surgery in India is considered safe and reliable when performed at reputed hospitals with experienced eye surgeons. Many hospitals follow international safety protocols, use advanced lens implant technology, and provide dedicated international patient support throughout the treatment and recovery process.",
  },
  {
    id: 7,
    question:
      "Do eye hospitals in India provide support for international patients?",
    answer:
      "Yes. Many leading eye hospitals in India offer complete international patient services including online consultations, medical visa assistance, airport pickup, accommodation support, language interpretation, treatment coordination, and post-treatment follow-up care for overseas patients.",
  },
  {
    id: 8,
    question:
      "How long do international patients need to stay in India after eye surgery?",
    answer:
      "The required stay in India depends on the type of eye surgery, the patient’s recovery progress, and follow-up evaluations recommended by the ophthalmologist. Procedures such as LASIK may require only a short stay, while complex retina or cornea surgeries may need additional recovery time. Most hospitals provide personalized treatment and recovery plans to help international patients travel safely and comfortably.",
  },
  {
    id: 9,
    question: "What types of eye treatments are commonly available in India?",
    answer:
      "India offers a wide range of advanced eye treatments including LASIK eye surgery, cataract surgery, retina surgery, glaucoma treatment, cornea transplant surgery, squint eye surgery, and pediatric ophthalmology care. International patients choose India because of modern eye care technology, experienced specialists, affordable treatment options, and internationally recognized hospitals.",
  },
  {
    id: 10,
    question:
      "Why is India considered a trusted destination for affordable eye treatment?",
    answer:
      "India is considered one of the leading destinations for affordable eye treatment because patients receive high-quality ophthalmology care at significantly lower costs compared to many countries. With experienced ophthalmologists, advanced surgical technology, internationally accredited hospitals, and dedicated international patient support services, India continues to attract patients seeking safe, effective, and affordable vision treatment.",
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
          content="Get affordable eye surgery in India with experienced ophthalmologists, advanced eye hospitals, LASIK, cataract surgery, retina treatment, and personalized eye care for international patients from Kenya, Uganda, Tanzania, Nigeria, and South Sudan."
        />

        <meta
          name="keywords"
          content="
              eye surgery in india,
              eye treatment in india,
              affordable eye surgery india,
              ophthalmology treatment india,
              cataract surgery india,
              lasik surgery india,
              retina treatment india,
              glaucoma treatment india,
              cornea transplant india,
              eye hospitals in india,
              ophthalmologists in india,
              laser eye surgery india,
              advanced eye care india,
              vision correction surgery india,
              retinal surgery india,
              pediatric ophthalmology india,
              eye care hospitals india,
              affordable ophthalmology care,
              eye treatment abroad,
              eye specialist india
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
          content="Eye Surgery in India | Affordable Eye Treatment"
        />

        <meta
          property="og:description"
          content="Affordable eye surgery in India with experienced ophthalmologists, advanced eye hospitals, and personalized treatment for international patients."
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
          content="Eye Surgery in India | Affordable Eye Treatment"
        />

        <meta
          name="twitter:description"
          content="Get advanced and affordable eye treatment in India with modern eye hospitals and experienced ophthalmology specialists."
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
        />

        {/* Gradient Overlay */}
        <div className="eye-hero-overlay" />

        {/* Content */}
        <div className="eye-hero-content">
          <span className="eye-hero-badge">
            Trusted by 50,000+ International Patients
          </span>

          <h1 className="eyecare-heading">
            Affordable Eye Surgery in India for International Patients
          </h1>

          <p>
            Get advanced and affordable Eye Surgery in India with experienced
            ophthalmologists, modern hospitals, and complete international
            patient support. Explore LASIK, cataract, retina, glaucoma, and
            cornea treatments in India.
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

      <section className="eyecare-section">
        <div className="eyecare-container">
          {/* ── Left Content Panel ── */}
          <div className="eyecare-left">
            <h1 className="eyecare-heading">
              Eye Surgery in India –{" "}
              <span className="eyecare-heading-accent">
                Advanced &amp; Affordable
              </span>{" "}
              Vision Care for International Patients
            </h1>

            <p className="eyecare-body">
              Eye problems can affect every part of daily life — from reading
              and driving to work, education, and independence. Today, thousands
              of international patients travel for Eye Surgery in India because
              of the country's advanced medical technology, experienced eye
              specialists, and affordable treatment options.
            </p>

            <p className="eyecare-body">
              India has become one of the most trusted destinations for eye care
              and medical tourism. Patients from Kenya, Uganda, Tanzania,
              Nigeria, and South Sudan choose India for high-quality treatment,
              modern hospitals, and personalized international patient support.
            </p>

            <h2 className="eyecare-trust-heading">Why Patients Trust Us</h2>

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
                alt="Ophthalmologist performing advanced eye examination in India"
                className="eyecare-img"
              />
            </div>

            <div className="eyecare-img-wrapper eyecare-img-bottom">
              <img
                src={EyeAbout1Image}
                alt="Ophthalmologist performing advanced eye examination in India"
                className="eyecare-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="wci-section">
        {/* Decorative background blobs */}
        <div className="wci-blob wci-blob--1" aria-hidden="true" />
        <div className="wci-blob wci-blob--2" aria-hidden="true" />

        <div className="wci-container">
          {/* Header */}
          <div className="wci-header">
            {/* <span className="wci-eyebrow">Medical Tourism · India</span> */}
            <h2 className="wci-heading">Why Choose India for Eye Surgery</h2>
            <p className="wci-subheading">
              India is globally recognized for providing advanced eye treatment
              at affordable costs without compromising on quality. International
              patients benefit from highly skilled doctors, advanced technology,
              and dedicated medical tourism assistance.
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

      <section className="eye-services-section">
        {/* Header */}
        <div className="eye-services-header">
          <h2 className="eye-services-title">
            Types of Eye Surgeries in India
          </h2>
          <p className="eye-services-description">
            From LASIK and cataract surgery to advanced retina treatment, our
            comprehensive eye care services are designed to restore vision,
            reduce discomfort, and improve quality of life for international
            patients seeking advanced eye treatment in India.
          </p>
        </div>

        {/* All Cards in One Grid */}
        <div className="eye-services-grid">
          {eyesServices.map((service) => (
            <EyesServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="bo-section">
        {/* Background image layer */}
        <div className="bo-bg" aria-hidden="true">
          <img
            src={BestOphthalmologistsBanner}
            alt="Eye surgery background"
            className="bo-bg__image"
          />
          <div className="bo-bg__overlay" />
        </div>

        <div className="bo-container">
          {/* ── Top: full-width heading block ── */}
          <div className="bo-top">
            <span className="bo-eyebrow">Best Ophthalmologists in India</span>

            <h1 className="bo-heading">
              India is home to highly qualified and experienced eye specialists
              who are recognized internationally for their expertise.
            </h1>
          </div>

          {/* ── Split: left description + right expertise ── */}
          <div className="bo-split">
            {/* LEFT */}
            <div className="bo-left">
              <p className="bo-left__body">
                Indian ophthalmologists regularly treat international patients
                with complex eye conditions and provide complete pre-operative
                and post-operative guidance.
              </p>

              {/* Specialty badges */}
              <div className="bo-badges">
                {specialtyBadges.map((b) => (
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
                Why International Patients Trust Indian Eye Specialists
              </p>

              <ul className="bo-trust">
                {trustPoints.map((pt) => (
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

      {/* ════ SECTION 4 — DOCTORS ════ */}
      <section className="doctor-section-light">
        <div className="doctor-container">
          <div className="doctor-title-wrap">
            <span className="doctor-label">Our Specialists</span>
            <h2 className="doctor-h2">Best Ophthalmologists in India</h2>
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

      <section className="eca-section">
        {/* Header */}
        <div className="eca-header">
          <h2 className="eca-heading">Symptoms & Eye Conditions Treated</h2>
          <p className="eca-subheading">
            India’s leading eye hospitals provide advanced diagnosis and
            treatment for a wide range of vision and eye-related disorders.
            Experienced ophthalmologists use modern diagnostic technology, laser
            procedures, and personalized treatment plans to help patients
            restore and protect their eyesight. International patients searching
            for Eye Surgery in India, eye operation in India, or affordable eye
            surgery cost in India often choose India for expert care, modern
            hospitals, and faster appointments.
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
              {/* Replace src with your actual eye image */}
              <img
                src={SymptomsEyeConditionTreated}
                alt="Close-up of a human eye"
                className="eca-image"
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

      <section className="ips">
        <div className="ips__container">
          <div className="ips__left">
            <h2 className="ips__heading">
              International Patient <em>Services</em>
            </h2>
            <p className="ips__sub">
              India’s medical tourism industry is designed to make treatment
              convenient and stress-free for overseas patients.
            </p>
            <p className="ips__services-label">Services Include</p>
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
                alt="International patient services"
                className="ips__img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="eye-reviews-section">
        <div className="eye-reviews-content">
          <h2 className="eye-reviews-heading">Our Clients Review</h2>

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
                      {/* <p className="eye-reviews-card-name">{r.name}</p> */}
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
            alt="Happy international eye patient in India"
            className="eye-reviews-image"
          />
        </div>
      </section>

      <section className="eye-faq-section" aria-labelledby="faq-heading">
        <div className="eye-faq-container">
          {/* Section Header */}
          <div className="eye-faq-header">
            <span className="eye-faq-badge">Ophthalmology Treatment FAQs</span>
            <h2 id="faq-heading" className="eye-faq-title">
              Frequently Asked Questions About eye Treatment in India
            </h2>
            <p className="eye-faq-subtitle">
              Get answers to common questions about eye care, best eye
              hospitals, and treatment options in India
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

      <section className="eye-cta-section">
        {/* Background Image */}
        <img
          src={CtaImage}
          alt="Book eye surgery consultation in India"
          className="eye-cta-bg-image"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="eye-cta-overlay" />

        {/* Content Container */}
        <div className="eye-cta-container">
          <div className="eye-cta-content">
            <span className="eye-cta-badge">Protect & Restore Your Vision</span>

            <h2 className="eye-cta-title">Book Your Eye Consultation</h2>

            <p className="eye-cta-subtitle">
              Start your ophthalmology treatment journey in India with
              experienced joint replacement specialists and internationally
              trusted hospitals.
            </p>

            <div className="eye-cta-benefits-list">
              <div className="eye-cta-benefit-point">
                <FaCheckCircle className="eye-cta-check-icon" />
                <span>Personalized treatment plans</span>
              </div>
              <div className="eye-cta-benefit-point">
                <FaCheckCircle className="eye-cta-check-icon" />
                <span>Transparent pricing</span>
              </div>
              <div className="eye-cta-benefit-point">
                <FaCheckCircle className="eye-cta-check-icon" />
                <span>Expert eye specialists</span>
              </div>
              <div className="eye-cta-benefit-point">
                <FaCheckCircle className="eye-cta-check-icon" />
                <span>International patient support</span>
              </div>
              <div className="eye-cta-benefit-point">
                <FaCheckCircle className="eye-cta-check-icon" />
                <span>Modern and safe eye care</span>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default EyeSurgeryIndia;
