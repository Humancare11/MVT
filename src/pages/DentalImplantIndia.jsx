import { useState, useEffect, useRef } from "react";
import "./DentalImplantIndia.css";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Helmet } from "react-helmet";

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
    title: "Smile Makeover",
    description:
      "Improve your smile with customized cosmetic treatments, including veneers, crowns, teeth whitening, smile correction, and gum contouring. Designed to enhance appearance and confidence while maintaining natural-looking results.",
    image: SmileMakeoverImage,
    alt: "Smile makeover treatment in India",
  },
  {
    id: 2,
    title: "Dental Implants",
    description:
      "Replace missing teeth with durable, natural-looking implants single tooth, full-mouth, All-on-4, and implant-supported dentures. Highly affordable in India without compromising quality.",
    image: DentalImplantImage,
    alt: "Dental implant procedure in India",
  },
  {
    id: 3,
    title: "Painless Root Canal",
    description:
      "Advanced rotary systems and digital imaging for faster, comfortable root canals with reduced discomfort, improved precision, and better recovery. Transparently priced for international patients.",
    image: PainlessRootCanalImage,
    alt: "Painless root canal treatment in India",
  },
  {
    id: 4,
    title: "Cosmetic Dentistry",
    description:
      "Veneers, composite bonding, teeth reshaping, smile correction, and laser whitening — performed by experienced cosmetic dentists using modern techniques and high-quality materials.",
    image: CosmeticDentistryImage,
    alt: "Cosmetic dentistry and smile correction in India",
  },
  {
    id: 5,
    title: "Ortho & Endodontics",
    description:
      "Traditional braces, clear aligners, invisible braces, and advanced endodontic care including root canal retreatment. Affordable packages with modern dental infrastructure across India.",
    image: Orthodontics,
    alt: "Orthodontic and braces treatment in India",
  },
  {
    id: 6,
    title: "Teeth Whitening",
    description:
      "Laser teeth whitening and professional bleaching remove stains and brighten your smile safely. Fast, effective, and cost-effective procedures for a radiant, confident result.",
    image: WhiteningTeethImage,
    alt: "Professional teeth whitening treatment in India",
  },
  {
    id: 7,
    title: "Invisible Braces",
    description:
      "Clear aligners for discreet orthodontic correction — ideal for adults, working professionals, and teenagers seeking effective, aesthetic solutions without visible metal braces.",
    image: InvisibleBracesImage,
    alt: "Invisible braces and aligners treatment in India",
  },
  {
    id: 8,
    title: "Advanced Gum Care",
    description:
      "Deep cleaning, gum infection treatment, reshaping, laser gum therapy, and preventive periodontal care — essential for strong teeth and successful long-term dental implants.",
    image: AdvancedGumCareImage,
    alt: "Advanced gum care treatment in India",
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
    title: "Free Online Consultation",
    desc: "Share your dental reports, X-rays, or scans online to receive:",
    items: [
      "Personalized treatment plan",
      "Estimated treatment cost",
      "Implant recommendations",
      "Travel guidance for India",
    ],
  },
  {
    num: "02.",
    title: "Travel & Arrival Support",
    desc: "Dedicated international patient teams assist with:",
    items: [
      "Visa guidance",
      "Airport pickup",
      "Hotel arrangements",
      "Local travel support",
      "Appointment coordination",
    ],
  },
  {
    num: "03.",
    title: "Implant Procedure",
    desc: "Advanced digital planning and modern surgical techniques ensure safe, accurate results:",
    items: [
      "Implant placement",
      "Healing phase",
      "Crown attachment",
      "Bite adjustment & final restoration",
    ],
  },
  {
    num: "04.",
    title: "Recovery & Follow-Up",
    desc: "After treatment, patients receive complete aftercare support:",
    items: [
      "Detailed aftercare instructions",
      "Oral hygiene guidance",
      "Online follow-up consultations",
      "Recovery support",
    ],
  },
];

const features = [
  {
    title: "Preventive & Routine Care",
    desc: "Regular check-ups, professional cleaning, fluoride applications, and early diagnosis to prevent future complications.",
  },
  {
    title: "Restorative Solutions",
    desc: "Fillings, crowns, bridges, dentures, implants, bone grafting, and full-mouth rehabilitation.",
  },
  {
    title: "Cosmetic & Smile Design",
    desc: "Teeth whitening, veneers, gum contouring, clear aligners, and personalized smile enhancements.",
  },
  {
    title: "Advanced Procedures",
    desc: "Oral surgery, jaw correction, reconstructive treatments, and antimicrobial therapies.",
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
    spec: "Dentist",
    desc: "Dr. Shoeb Shaikh is a highly experienced Dentist and Periodontist with over 18 years of expertise in advanced dental care and gum disease treatment. He completed his BDS from J.G.D.C, Akola and earned his MDS in Periodontology from D Y Patil University, School of Dentistry. Dr. Shoeb Shaikh has worked as a Lecturer at JGDC, Akola and has contributed articles on gum surgeries in reputed dental magazines. He serves as an Honorary Consultant at Kalsekar Hospital, Andheri and several private clinics in Mumbai. In 2013, he launched the initiative 'The Rite to Bite' to provide free gum surgeries for underprivileged patients and spread awareness about gum disease. He also started the lecture series 'Dentist's Professional Development' to guide upcoming and practicing dentists in clinical practice management. Dr. Shoeb Shaikh has been a Guest Speaker at D Y Patil University and the World Dental Show, and was honored with the 'Emerging Dental Speaker Of The Year' award at the Indian Health Professional Awards 2016. He is also the Director of ANSH Academy of Dental Excellence, conducting lectures and professional dental courses across various fields of dentistry.",
    photoUrl: ShoebShaikhImage,
  },
  {
    name: "Dr. Anisa Shaikh",
    education: "BDS",
    spec: "Dentist, Cosmetic/Aesthetic Dentist",
    desc: "Dr. Anisa Shaikh is an experienced Dentist and Cosmetic/Aesthetic Dentist with over 24 years of overall experience, including 19 years as a specialist. She completed her Bachelor of Dental Surgery (BDS) from the prestigious Nair Hospital Dental College, Mumbai, where she was a University Topper and Gold Medalist. Driven by her passion for advanced dental care, Dr. Anisa Shaikh pursued advanced dental training in the United States, with a special focus on Pediatric Dentistry. She established Healthy Teeth Dental Clinic, a modern state-of-the-art dental center equipped with advanced technology and international-quality treatment standards. Dr. Anisa Shaikh leads a skilled team of visiting dental consultants specializing in various branches of dentistry, ensuring comprehensive dental care for patients. Known for her patient-centric approach, she has successfully balanced her professional excellence with family life while delivering trusted and affordable dental treatments.",
    photoUrl: AnisaShaikhImage,
  },
  {
    name: "Dr. Binal Shah",
    education: "BDS",
    spec: "Dental Surgeon, Implantologist, Cosmetic/Aesthetic Dentist",
    desc: "Dr. Binal Shah is a highly experienced Dental Surgeon, Implantologist, and Cosmetic/Aesthetic Dentist with over 17 years of overall experience, including 16 years as a specialist. Known for her precision, compassionate care, and expertise in smile transformation, she has earned a reputation as one of the trusted dentists in Chembur, Mumbai. Dr. Binal Shah specializes in advanced dental treatments for both children and adults, focusing on gentle, pain-free, and effective procedures that enhance oral health and confidence. She combines modern dental technology with personalized treatment planning to deliver high-quality dental care. Her approach includes comprehensive smile analysis, advanced digital diagnostics, aesthetic dental enhancements, and long-term oral health guidance, ensuring comfortable and successful treatment outcomes for every patient.",
    photoUrl: BinalShahImage,
  },
  {
    name: "Dr. Varun Saoji",
    education: "BDS, MDS - Orthodontics and Dentofacial Orthopaedics",
    spec: "Dentist, Orthodontist, Implantologist",
    desc: "Dr. Varun Saoji is an experienced Dentist, Orthodontist, and Implantologist with over 14 years of expertise in advanced orthodontic and dental treatments. He completed both his graduation and post-graduation from the renowned KLES Institute of Dental Sciences, Belgaum, Karnataka. Dr. Varun Saoji specializes in Orthodontics and Dentofacial Orthopaedics, with clinical expertise in non-extraction orthodontic treatments, adult orthodontics, lingual orthodontics, and interdisciplinary orthodontic care. He is committed to staying updated with the latest advancements in dental technology and is a certified practitioner of Invisalign and Clearpath aligner systems. Known for his precision-driven and patient-focused approach, Dr. Varun Saoji provides personalized orthodontic solutions designed to improve dental alignment, oral health, and smile aesthetics.",
    photoUrl: VarunSaojiImage,
  },
  {
    name: "Dr. Binila S. Babu",
    education: "BDS, MDS - Conservative Dentistry & Endodontics",
    spec: "Dentist, Endodontist, Conservative Dentistry Specialist",
    desc: "Dr. Binila S. Babu is a highly experienced Consultant in Conservative Dentistry and Endodontics with over a decade of expertise in advanced dental care and complex endodontic treatments. She completed her BDS from Dr. M.G.R. Medical University, Chennai and earned her MDS from Rajiv Gandhi University of Health Sciences, Bangalore. Currently associated with Aster Medcity Kochi, Dr. Binila specializes in advanced root canal treatments, esthetic and restorative dentistry, minimally invasive dental procedures, and the management of complex dental trauma, including sports-related injuries. She is dedicated to preserving natural teeth through precision endodontics and modern restorative techniques, ensuring excellent functional and aesthetic outcomes for her patients. Alongside her clinical practice, Dr. Binila serves as a Professor and Postgraduate Guide in Conservative Dentistry and Endodontics and is actively involved in academic research with several publications in reputed national and international journals. She is currently pursuing her PhD under Kerala University of Health Sciences (KUHS). Dr. Binila S. Babu is a Fellow of the International College of Dentists (FICD) and recipient of the IDA Kerala Excellence Award 2025 for her outstanding contributions to dentistry. She is also an active member of several professional organizations, including CAESOK, IDA Kochi, IES, IACDE, and ACDI.",
    photoUrl: BinilaSBabuImage,
  },
  {
    name: "Dr. Sameer Punathil",
    education: "BDS, MDS - Pedodontics and Preventive Dentistry",
    spec: "Dentist, Pedodontist, Preventive Dentistry Specialist",
    desc: "Dr. Sameer P is an experienced Consultant in Pedodontics and Preventive Dentistry with extensive expertise in pediatric dental care and preventive oral health management. He completed his BDS from Mysore University in 1999 and later pursued his MDS in Pedodontics and Preventive Dentistry from Rajiv Gandhi University of Health Sciences in 2009. With years of clinical and academic experience, Dr. Sameer P has served as an Assistant Professor at Malabar Dental College, Edappal, and currently works as the Head of the Department of Pedodontics and Preventive Dentistry at Anjaneya Institute of Dental Sciences. He is also associated with Aster MIMS Calicut as a Visiting Consultant, where he provides specialized pediatric dental treatments. His areas of expertise include pediatric dentistry, preventive dental care, pulpectomy procedures, dental infection management, and child oral health education. Dr. Sameer P has actively contributed to dental research and scientific conferences with multiple paper presentations and academic sessions. He has also been recognized for his achievements in pediatric dentistry, including receiving the First Prize for the poster presentation 'Recipe for Healthy Teeth' at the Annual Conference of the Indian Society of Pedodontics and Preventive Dentistry.",
    photoUrl: SameerPImage,
  },
  {
    name: "Dr. C. Sharath Babu",
    education: "BDS, MDS, FICOI",
    spec: "Dentist, Prosthodontist, Implantologist",
    desc: "Dr. C. Sharath Babu is a highly experienced Prosthodontist and Implantologist with over 15 years of expertise in advanced dental care, implantology, and smile restoration treatments. Currently associated with Medicover Hospitals, Hitech City, Hyderabad, he is recognized for his compassionate patient care, accurate diagnosis, and advanced dental solutions. Dr. Sharath Babu completed his BDS from AME's Dental College and Hospital, Raichur in 2003 and earned his MDS in Prosthodontics from Dr. NTR University of Health Sciences, Vijayawada in 2010. He further enhanced his expertise by obtaining the prestigious FICOI (Fellowship of the International Congress of Oral Implantologists) in 2014. His advanced training also includes a Mastership in Implantology from the Asian Institute of Advanced Dentistry and a Professional Advanced Prosthetic Course in OSSTEM Implantology. Dr. C. Sharath Babu specializes in implant surgery, full-mouth rehabilitation, cosmetic smile designing, aesthetic dental restorations, and complex dental rehabilitation procedures. Known for combining technical precision with patient comfort, he focuses on delivering functional, long-lasting, and aesthetically pleasing dental outcomes.",
    photoUrl: CSharathBabuImage,
  },
  {
    name: "Dr. Apurva Gujarathi",
    education: "BDS, MDS (Pedodontics)",
    spec: "Pediatric Dentist, Cosmetic Dentist, Preventive Dental Care Specialist",
    desc: "Dr. Apurva Gujarathi is a highly experienced Pediatric Dentist and Cosmetic Dental Specialist with over 16 years of overall clinical experience, including more than 15 years of specialization in pediatric dentistry. He is widely recognized for providing comprehensive dental care for infants, children, adolescents, and young patients in a child-friendly and comfortable environment. Dr. Gujarathi completed his BDS followed by an MDS in Pedodontics, developing advanced expertise in preventive, restorative, and pediatric dental treatments. He practices at specialized pediatric dental centers in Andheri East and Andheri West, Mumbai, where he has established dedicated child-focused dental facilities equipped with pediatric operatories and play areas designed to create a positive and stress-free dental experience for children. His clinical expertise covers preventive dentistry, dental restorations, treatment of traumatic dental injuries, dental prophylaxis, teeth scaling and polishing, cavity management, pediatric root canal treatments, fluoride therapy, habit correction, and comprehensive oral health care for children from birth through adolescence. Dr. Gujarathi is known for his gentle approach, patience, and ability to effectively manage children's dental anxiety, making dental visits comfortable and enjoyable for young patients. He is committed to promoting early oral health education and preventive dental care, helping children develop healthy dental habits that last a lifetime. As an active member of the Indian Society of Pedodontics and Preventive Dentistry, Dr. Gujarathi remains updated with the latest advancements in pediatric dental care and minimally invasive treatment techniques. His dedication to delivering high-quality, child-centered dental services has earned him the trust of parents and an excellent reputation in pediatric dentistry.",
    photoUrl: ApurvaGujarathiImage,
  },
];

const faqData = [
  {
    id: 1,
    question:
      "Why should I consider India for dental treatments from Kenya, Uganda, Tanzania, Nigeria, or South Sudan?",
    answer:
      "India has become a preferred destination for quality dental care among patients from Africa. Many clinics use advanced technology, experienced specialists, and international standards of hygiene. Patients often appreciate the availability of comprehensive treatments under one roof, shorter waiting times, and the opportunity to combine treatment with recovery in a culturally welcoming environment.",
  },
  {
    id: 2,
    question: "What are dental implants and who can benefit from them?",
    answer:
      "Dental implants are titanium posts that act as artificial tooth roots, supporting crowns, bridges, or dentures. They are ideal for people who have lost one or more teeth due to injury, decay, or other reasons. Implants help restore chewing function, speech clarity, and natural appearance, offering a long-term solution compared to traditional options.",
  },
  {
    id: 3,
    question: "How do I choose the best dentist or dental clinic in India?",
    answer:
      "Look for clinics with qualified specialists (MDS doctors), modern equipment such as digital imaging and surgical guides, and positive patient feedback. Many top dentists in cities like Mumbai, Bangalore, Ahmedabad, Coimbatore, and Vijayawada have extensive experience treating international patients. Checking qualifications, years of experience, and use of advanced tools like dental loupes for precision can help you make an informed choice.",
  },
  {
    id: 4,
    question:
      "What dental procedures are commonly sought by international patients?",
    answer:
      "Popular treatments include dental implants, crowns and caps, bridges, smile makeovers, root canal treatments, and cosmetic dentistry. Clinics across India offer full-mouth rehabilitation and restorative procedures using high-quality materials that meet global standards.",
  },
  {
    id: 5,
    question: "Which cities in India are good for dental care?",
    answer:
      "Major cities such as Mumbai, Bangalore, Ahmedabad, Coimbatore, Delhi, and Vijayawada have well-equipped dental centers. These locations offer easy international connectivity, good accommodation options, and access to highly experienced dental teams.",
  },
  {
    id: 6,
    question:
      "What is the typical process for someone coming from Africa for dental treatment in India?",
    answer:
      "The process usually starts with an online consultation where you share your dental records, X-rays, or photos. The dentist provides a personalized treatment plan. Once you arrive, you undergo a detailed examination, followed by the procedure. Most clinics assist with airport transfers, accommodation guidance, and follow-up care even after you return home.",
  },
  {
    id: 7,
    question:
      "How safe is dental treatment in India for international patients?",
    answer:
      "Reputable clinics maintain strict sterilization protocols, use disposable materials where required, and follow infection control guidelines similar to international standards. Many dentists have trained or practiced abroad and regularly handle patients from different countries, ensuring comfortable and safe experiences.",
  },
  {
    id: 8,
    question: "Do clinics in India use advanced technology?",
    answer:
      "Yes. Leading dental practices are equipped with 3D imaging (CBCT), CAD/CAM systems for precise crowns, intraoral scanners, and surgical microscopes or loupes for enhanced accuracy. This technology helps in planning and executing treatments with better outcomes and faster recovery.",
  },
  {
    id: 9,
    question:
      "How long do I need to stay in India for dental implant or crown procedures?",
    answer:
      "The duration depends on the complexity of your case. Single implants or simple crowns may require one visit of 5–10 days, while full-mouth cases or those needing bone grafting might need two visits spaced a few months apart. Your dentist will provide a clear timeline during consultation.",
  },
  {
    id: 10,
    question:
      "What support is available for patients from Kenya, Uganda, Tanzania, Nigeria, and South Sudan?",
    answer:
      "Many clinics offer dedicated international patient coordinators who assist with visa-related queries, language support (English is widely spoken), dietary preferences, and post-treatment guidance. Some also provide virtual follow-ups after you return to your country.",
  },
  {
    id: 11,
    question: "Are dental crowns and caps a good option for damaged teeth?",
    answer:
      "Yes. Crowns (also called caps) are custom-made covers that restore the shape, strength, and appearance of severely damaged or root-canal-treated teeth. They are durable and can be matched to your natural tooth color for a seamless smile.",
  },
  {
    id: 12,
    question:
      "How can I get started with my dental treatment journey in India?",
    answer:
      "Simply reach out via the contact form or WhatsApp with your dental concerns and any available records. The team will guide you through the next steps, including a no-obligation consultation with a specialist.",
  },
];

const reviews = [
  {
    name: "Daniel Mwangi",
    text: "I traveled from Kenya for dental implants in India and Humancare World Wide helped me throughout the entire process. From choosing the right clinic to arranging appointments, everything was smooth and well organized. The doctors were excellent and the treatment was completely painless.",
  },

  {
    name: "Aisha Bello",
    text: "The dental implant treatment in India exceeded my expectations. The clinic was modern, the dentists were highly experienced, and the support team from Humancare World Wide stayed connected with me before and after the procedure. I felt safe and comfortable during my journey.",
  },

  {
    name: "Joseph Okello",
    text: "I had missing teeth for years and finally decided to get dental implants in India. The treatment quality was excellent and much more affordable than other countries. The entire process was professionally managed and the recovery was faster than I expected.",
  },

  {
    name: "Grace Nanyonga",
    text: "I came to India for a smile makeover and dental crown treatment. The doctors explained everything clearly and the final results look very natural. I also appreciated the travel assistance and regular follow-up support during my stay.",
  },

  {
    name: "Emmanuel Peter",
    text: "Humancare World Wide made my dental treatment journey stress-free. They assisted with hotel arrangements, hospital coordination, and every appointment during my stay in India. The implant procedure went smoothly and I’m extremely happy with my new smile.",
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
        {/* Primary SEO */}
        <title>
          Dental Implants in India | Affordable Dental Treatment for
          International Patients
        </title>

        <meta
          name="description"
          content="Get affordable dental implants in India with advanced technology, experienced dentists, and modern clinics. Trusted dental treatment in India for patients from Kenya, Uganda, Tanzania, Nigeria, and South Sudan."
        />

        <meta
          name="keywords"
          content="
              dental in india
              dental implants india
              dental implant cost in india
              dental implant cost in mumbai
              dental implant cost bangalore
              price of dental implants in india
              dental loupes india
              partha dental vijayawada
              dental treatment price list in india
              dental crown cost in india
              dental cap cost in india
              dental cap price in india
              best dentist in india
              dental crown price in india
              dentist in ahmedabad
              best dentist in coimbatore
              dentist bareilly
              top 10 dentist in coimbatore
              teeth cap price in india
              tooth cap price in delhi
              implant cost in india
              implant cost in mumbai
            "
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
          content="Dental Implants in India | Affordable Dental Treatment"
        />

        <meta
          property="og:description"
          content="Affordable dental implants in India with experienced dentists, advanced clinics, and personalized care for international patients."
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
          content="Dental Implants in India | Affordable Dental Treatment"
        />

        <meta
          name="twitter:description"
          content="Get affordable dental treatment in India with modern clinics and experienced implant specialists."
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
          alt="Affordable dental implants in India for international patients"
          className="dental-hero-bg-image"
          loading="eager"
        />

        {/* Gradient Overlay */}
        <div className="dental-hero-overlay" />

        {/* Content */}
        <div className="dental-hero-content">
          <span className="dental-hero-badge">
            Trusted by 50,000+ International Patients
          </span>

          <h1>
            Dental Implants in India – Affordable &amp; Advanced Dental
            Treatment
          </h1>

          <p>
            Dental implants in India are becoming one of the most preferred
            solutions for international patients seeking affordable and
            high-quality dental care. India offers advanced dental technology,
            experienced specialists, and internationally accredited clinics at
            significantly lower costs compared to the USA, UK, and Europe.
            Patients from Kenya, Uganda, Tanzania, Nigeria, and South Sudan
            choose India for safe, modern, and cost-effective smile restoration
            treatments.
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
          <div className="dental-why-choose-subtitle">Why Choose Us</div>
          <h2 className="dental-why-choose-title">
            Why Choose Dental Treatment in India?
          </h2>
          <p className="dental-why-choose-description">
            Patients from Kenya, Uganda, Tanzania, Nigeria, South Sudan, and
            many other countries increasingly choose India because of the
            combination of affordability, quality treatment, and faster access
            to dental care.
          </p>
        </div>

        {/* Main 3-column layout */}
        <div className="dental-why-choose-grid">
          {/* LEFT COLUMN */}
          <div className="dental-why-choose-column">
            <FeatureItem
              icon={<AffordableIcon />}
              title="Affordable Treatment Costs"
              desc={
                <>
                  Dental implants in India can cost up to{" "}
                  <strong>70% less</strong> than Western countries, making India
                  a top dental tourism destination.
                </>
              }
            />
            <FeatureItem
              icon={<DoctorIcon />}
              title="Experienced Dental Specialists"
              desc="Highly qualified implantologists, cosmetic dentists, orthodontists, and oral surgeons with modern expertise."
            />
            <FeatureItem
              icon={<PaymentIcon />}
              title="Flexible Payment Options"
              desc="Accessible financial plans tailored for international patients from Kenya, Uganda, Tanzania, Nigeria and beyond."
            />
          </div>

          {/* CENTER IMAGE */}
          <div className="dental-why-choose-center">
            <img
              src={WhyChooseIndiaImage}
              alt="Advanced dental treatment in India with experienced dentists"
              className="dental-why-choose-image"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="dental-why-choose-column">
            <FeatureItem
              align="right"
              icon={<EmergencyIcon />}
              title="Emergency Services"
              desc="Quick access to emergency dental care with dedicated international patient coordinators available to assist."
            />
            <FeatureItem
              align="right"
              icon={<ReviewIcon />}
              title="Positive Patient Reviews"
              desc="Thousands of international patients trust Indian dental clinics for world-class outcomes and compassionate care."
            />
            <FeatureItem
              align="right"
              icon={<TechIcon />}
              title="Advanced Technology"
              desc={
                <ul className="dental-tech-list">
                  {[
                    "Digital smile designing",
                    "3D CBCT scans",
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
          <h2 className="dental-services-title">Our Services</h2>
          <p className="dental-services-description">
            Whether you need a single dental procedure or a complete smile
            transformation, our advanced dental treatments are designed to
            restore oral health, improve aesthetics, and enhance confidence for
            international patients visiting India.
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
            Whether you need a single dental procedure or a complete smile
            transformation, our advanced dental treatments are designed to
            restore oral health, improve aesthetics, and enhance confidence for
            international patients visiting India.
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
              />
              <img
                src={Dental2}
                alt="Experienced dental team at work"
                className="dental-comprehensive-image"
              />
            </div>
            <img
              src={Dental1}
              alt="Modern dental clinic facility in India"
              className="dental-comprehensive-image-large"
            />
          </div>

          <div className="dental-comprehensive-content">
            <div className="dental-comprehensive-header">
              <p className="dental-comprehensive-subtitle">
                What Is Included in Dental Treatment in India?
              </p>
              <h2 className="dental-comprehensive-title">
                Comprehensive Care With a Personal Touch
              </h2>
              <p className="dental-comprehensive-description">
                We combine expert care, advanced technology, and a warm
                atmosphere to ensure every visit is comfortable, efficient, and
                tailored to your needs.
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
            <span className="hn-label">Our Hospital Network</span>
            <h2 className="hn-heading">
              Best Dental Hospitals & Clinics in India
            </h2>
            <p className="hn-subtitle">
              We partner with India’s top NABH & JCI-accredited hospitals
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
                          Dentist Specialties:
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
              Top Dentist In India for International Patients
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

      <section className="dental-reviews-section">
        <div className="dental-reviews-content">
          <h2 className="dental-reviews-heading">Our Clients Review</h2>

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
            alt="Happy international dental patient in India"
            className="dental-reviews-image"
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
              Get answers to common questions about dental care, best dental
              hospitals, and treatment options in India
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
        />

        {/* Gradient Overlay */}
        <div className="dental-cta-overlay" />

        {/* Content Container */}
        <div className="dental-cta-container">
          <div className="dental-cta-content">
            <span className="dental-cta-badge">YOUR SMILE STARTS HERE</span>

            <h2 className="dental-cta-title">Book Your Dental Consultation</h2>

            <p className="dental-cta-subtitle">
              Start your smile restoration journey with affordable and advanced
              dental implant treatment in India.
            </p>

            <div className="dental-cta-benefits-list">
              <div className="dental-cta-benefit-point">
                <FaCheckCircle className="dental-cta-check-icon" />
                <span>Personalized treatment plans</span>
              </div>
              <div className="dental-cta-benefit-point">
                <FaCheckCircle className="dental-cta-check-icon" />
                <span>Transparent pricing</span>
              </div>
              <div className="dental-cta-benefit-point">
                <FaCheckCircle className="dental-cta-check-icon" />
                <span>Expert dental specialists</span>
              </div>
              <div className="dental-cta-benefit-point">
                <FaCheckCircle className="dental-cta-check-icon" />
                <span>International patient support</span>
              </div>
              <div className="dental-cta-benefit-point">
                <FaCheckCircle className="dental-cta-check-icon" />
                <span>Modern and safe dental care</span>
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
