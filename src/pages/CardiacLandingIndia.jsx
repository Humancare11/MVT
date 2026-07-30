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
    desc: "Full cost breakdown before you travel — no hidden charges, ever.",
  },
  {
    emoji: <FaCheckCircle />,
    colorClass: "card-navy",
    title: "No Unnecessary Procedures",
    desc: "Evidence-based protocols with an ethics-first approach by board-certified specialists.",
  },
  {
    emoji: <FaHeart />,
    colorClass: "card-red",
    title: "Personalized Care",
    desc: "Dedicated patient coordinators who speak your language and understand your culture.",
  },
  {
    emoji: <FaMoneyBillWave />,
    colorClass: "card-navy",
    title: "Affordable Pricing",
    desc: "Heart surgery from $3,500 — saving you up to 80% vs Western countries.",
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
    education: "MBBS",
    spec: "Cardiologist",
    desc: "Dr. Rajesh M Rajani is a Cardiologist in Breach Candy, Mumbai and has an experience of 39 years in this field. Dr. Rajesh M Rajani practices at Breach Candy Hospital in Breach Candy, Mumbai. He completed MBBS from JJ Hospital & Grant Medical College in 1984,MD - Cardiology from JJ Hospital & Grant Medical College in 1988 and DM - Cardiology from KEM Hospital & Seth GS Medical College in 1991",
    photoUrl: RajeshRajaniImage,
  },
  {
    name: "Dr. Yunus Shafi Loya",
    education: "MBBS, MD, DM, Cardiologist",
    spec: "Cardiologist",
    desc: "Dr. Yunus Shafi Loya is an experienced Interventional Cardiologist in India with 25+ years of expertise in advanced heart treatment and minimally invasive cardiac procedures. His specialties include Angioplasty, Stenting, Atherectomy, Balloon Angioplasty, and Percutaneous Valve Repair. International patients choose him for advanced cardiac care, modern treatment techniques, and personalized patient support.",
    photoUrl: YunusLoyaImage,
  },
  {
    name: "Dr. Yash Lokhandwala",
    education: "MD, DM (Doctor), FACC(sp.Arrhythmias)",
    spec: "Cardiologist",
    desc: "Dr. Yash Lokhandwala is an experienced Cardiologist in India with 26+ years of expertise in advanced cardiac care and heart rhythm disorder treatment. Associated with Lilavati Hospital for over 10 years and trained in Holland, the doctor has performed approximately 15,000 cardiac procedures. Special interests include Bradycardia, Tachycardia, ECG diagnosis, and advanced heart rhythm treatment for international patients seeking affordable heart care in India.",
    photoUrl: YashLokhandwalaImage,
  },
  {
    name: "Dr. Zainulabedin Hamdulay",
    education:
      "MCh - Thoracic Surgery, MS - General Surgery, DNB - Cardiothoracic Surgery, MBBS",
    spec: "Cardiac Surgeon",
    desc: "Dr. Zainulabedin Hamdulay is a highly experienced Cardiac Surgeon in India with over 33 years of expertise in advanced heart surgery and cardiothoracic procedures. Based in Mumbai and associated with leading cardiac institutes, he has attended and performed more than 10,000 cardiac surgeries including coronary artery bypass surgery, complex valve repair, minimally invasive cardiac surgery (MICS-keyhole), and heart transplant procedures. International patients choose Dr. Hamdulay for advanced heart treatment in India because of his extensive surgical experience, internationally recognized expertise, and patient-focused cardiac care. He has participated in prestigious international cardiac surgery workshops and conferences in the USA, Canada, and the UK, and is known for innovative techniques in minimally invasive heart surgery and complex cardiac procedures.",
    photoUrl: ZainulabedinHamdulayImage,
  },
  {
    name: "Dr. Kamran Ahmed Khan",
    education:
      "MBBS, MCPS, FCPS Cardiology, Certification in Interventional Cardiology",
    spec: "Interventional Cardiologist",
    desc: "Dr. Kamran Ahmed Khan is a highly skilled Interventional Cardiologist with extensive experience in advanced cardiac care and minimally invasive heart procedures. Associated with the National Institute of Cardiovascular Disease since 2017, he completed his MBBS from Dow Medical College followed by internship, medicine training, and General Cardiology fellowship at Aga Khan University Hospital, Karachi. He earned his MCPS and FCPS Cardiology qualifications from the College of Physicians and Surgeons and further specialized in Interventional Cardiology with advanced certification from Queen Elizabeth II, Dalhousie University, Halifax, Nova Scotia, Canada. Dr. Kamran Ahmed Khan is recognized for his expertise in coronary interventions, advanced heart disease management, and evidence-based cardiac treatment. He actively participates in national scientific conferences, Continuing Medical Education (CME) workshops, and professional cardiac forums as a speaker and moderator. International patients seeking affordable and advanced heart treatment trust his experience, modern cardiac care approach, and commitment to patient-centered treatment.",
    photoUrl: KamranAhmedKhanImage,
  },
  {
    name: "Dr. K R Balakrishnan",
    education: "MBBS, MS (General Surgery), MCh (Cardiothoracic Surgery)",
    spec: "Cardiothoracic and Heart Transplant Surgeon",
    desc: "Dr. K R Balakrishnan is one of the leading Cardiothoracic and Heart Transplant Surgeons in India with over 40 years of experience in advanced cardiac surgery and transplant procedures. An MCh graduate in Cardiothoracic Surgery from KEM Hospital, University of Bombay, he is internationally recognized for his expertise in end-stage heart failure management, heart transplant surgery, VAD implant procedures, pediatric cardiac surgery, lung transplant, and combined heart and lung transplantation. Having successfully performed more than 18,000 cardiac surgeries and over 190 heart transplant procedures, Dr. Balakrishnan is regarded as a pioneer in advanced heart failure treatment in India. He achieved several major milestones including India’s first successful LVAD implant surgery as destination therapy in 2012 and India’s first successful HVAD implant surgery in 2013. His evidence-based surgical approach, extensive transplant expertise, and internationally recognized contributions to cardiothoracic surgery make him a trusted choice for international patients seeking advanced heart treatment in India.",
    photoUrl: KRBalakrishnanImage,
  },
  {
    name: "Dr. Naresh Trehan",
    education:
      "MBBS, Diplomate American Board of Surgery, Diplomate American Board of Cardiothoracic Surgery",
    spec: "Cardiovascular and Cardiothoracic Surgeon",
    desc: "Dr. Naresh Trehan is one of the most renowned Cardiovascular and Cardiothoracic Surgeons in India with over 40 years of experience in advanced heart surgery and cardiac care. He is the Chairman of Cardiac Services and Chairman & Managing Director of Medanta - The Medicity, Gurugram. Widely recognized as one of the best heart surgeons in India, Dr. Trehan has successfully performed more than 48,000 open-heart surgeries and complex cardiac procedures. His expertise includes coronary artery bypass grafting (CABG), heart valve replacement surgery, aortic aneurysm surgery, minimally invasive cardiac surgery, cardiothoracic surgery, and advanced heart treatment for international patients. Dr. Naresh Trehan is internationally respected for his excellence in treating coronary artery disease, heart blockages, rheumatic heart disease, and complex cardiovascular disorders using modern surgical techniques and evidence-based cardiac care. Patients from Kenya, Nigeria, Tanzania, Bangladesh, Oman, Ethiopia, Iraq, Uzbekistan, and many other countries travel to India for advanced heart surgery and specialized treatment under his care. His global reputation, extensive surgical experience, and leadership in establishing world-class cardiac healthcare infrastructure make him one of the most trusted cardiac surgeons in India.",
    photoUrl: NareshTrehanImage,
  },
  {
    name: "Dr. Suresh Rao",
    education: "MBBS, MS, MCh (CVTS), Dip.NB (CTS), FCPS, FIACS",
    spec: "Pediatric & Congenital Heart Surgeon",
    desc: "Dr. Suresh Rao is one of the most experienced Pediatric and Congenital Heart Surgeons in India with over 37 years of expertise in neonatal cardiac surgery, congenital heart defect correction, and pediatric cardiovascular surgery. He is the Director of the Children’s Heart Centre and is internationally recognized for pioneering advanced techniques in congenital heart surgery and cardiopulmonary bypass procedures. Dr. Rao has established two nationally reputed Congenital Heart Centres and has trained several leading congenital heart surgeons across India. His expertise includes neonatal heart surgery, pediatric cardiac surgery, congenital heart defect treatment, fetal cardiac care, and complex cardiothoracic procedures for children. Dr. Suresh Rao has received advanced international training in New Zealand, Australia, and the USA, including a Special Congenital Heart Surgery Fellowship from the University of Alabama at Birmingham, USA. International patients seeking advanced pediatric heart treatment in India choose Dr. Rao for his extensive surgical experience, globally trained expertise, and compassionate child-focused cardiac care.",
    photoUrl: SureshRaoImage,
  },
];

const REASONS = [
  {
    emoji: <FaMoneyBillWave />,
    title: "Affordable treatment without compromising quality",
    desc: "60–80% lower than UK, US, or South Africa",
    colorClass: "reason-red",
  },
  {
    emoji: <FaClock />,
    title: " No long waiting time",
    desc: "Surgery scheduled within days, not months",
    colorClass: "reason-navy",
  },
  {
    emoji: <FaRobot />,
    title: "Advanced technology (robotic & minimally invasive surgery)",
    desc: "Robotic surgery, TAVR, minimally invasive",
    colorClass: "reason-red",
  },
  {
    emoji: <FaHandshake />,
    title: "Cultural comfort & patient-friendly environment",
    desc: "African patient coordinators, halal food",
    colorClass: "reason-navy",
  },
  {
    emoji: <FaFileAlt />,
    title: " Easy visa & travel assistance",
    desc: "Medical visa in 3–5 days with our full support",
    colorClass: "reason-red",
  },
];

const SERVICES = [
  {
    icon: <FaHeartbeat />,
    title: "Heart Bypass Surgery (CABG)",
    desc: "Open-heart & minimally invasive bypass procedures",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Heart Valve Repair & Replacement",
    desc: "Mitral, aortic & tricuspid valve treatments",
  },
  {
    icon: <FaBullseye />,
    title: "Angioplasty & Stenting",
    desc: "Drug-eluting stents & rotational atherectomy",
  },
  {
    icon: <FaDotCircle />,
    title: "Heart Hole Surgery (ASD, VSD)",
  },
  {
    icon: <FaChild />,
    title: "Pediatric Heart Surgery",
    desc: "Congenital defects in infants and children",
  },
  {
    icon: <FaHeart />,
    title: "Heart Transplant",
    desc: "End-stage heart failure & transplant care",
  },
  {
    icon: <FaChartLine />,
    title: "Electrophysiology & Arrhythmia Treatment",
    desc: "Ablation, pacemakers & ICD implantation",
  },
  {
    icon: <FaClock />,
    title: "Aortic Aneurysm Repair",
    desc: "Open & endovascular aortic aneurysm surgery",
  },
];

const SUPPORT_STEPS = [
  {
    icon: <FaFileAlt />,
    title: "Medical Opinion",
    desc: "Expert review of your reports by our senior cardiologists.",
  },
  {
    icon: <FaPassport />,
    title: "Visa Assistance",
    desc: "Medical visa arranged in 3–5 days with full documentation support.",
  },
  {
    icon: <FaPlaneArrival />,
    title: "Airport Pickup",
    desc: "Personal welcome & comfortable transfer to your accommodation.",
  },
  {
    icon: <FaBed />,
    title: "Accommodation",
    desc: "Affordable guest houses and hotels located near the hospital.",
  },
  {
    icon: <FaBolt />,
    title: "Fast Admission",
    desc: "Priority admission with zero queues and dedicated care team.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Post-Treatment Follow-up",
    desc: "Telemedicine support and monitoring after you return home.",
  },
];

const TESTIMONIALS = [
  {
    initials: "AC",
    gradClass: "grad-red-dark",
    name: "Adebayo Chukwu",
    designation: "Lagos, Nigeria · Bypass Surgery (CABG)",
    quote:
      "Humancare World Wide supported me throughout my entire treatment journey — from travel assistance to my bypass surgery at Apollo Hospitals. The doctors were highly experienced, and the care I received exceeded my expectations. Today, I feel healthier and stronger than ever.",
    avatarBg: "#c0392b",
  },
  {
    initials: "FM",
    gradClass: "grad-navy-dark",
    name: "Fatima Mwangi",
    designation: "Nairobi, Kenya · Child ASD Surgery",
    quote:
      "My 4-year-old daughter underwent ASD heart surgery shortly after we arrived in India. Humancare World Wide handled everything smoothly and made us feel comfortable during a stressful time. The pediatric cardiac team at Max hospital was exceptional, and my daughter is now living a happy and active life.",
    avatarBg: "#1a3a5c",
  },
  {
    initials: "KO",
    gradClass: "grad-red-dark",
    name: "Kwame Osei",
    designation: "Accra, Ghana · Valve Replacement",
    quote:
      "Humancare World Wide connected me with one of the best cardiac specialists in India for my valve replacement surgery. From hospital coordination to post-treatment support, the entire experience was professional and reassuring. I am truly grateful for the compassionate care I received.",
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
    icon: <FaUser />,
    colorClass: "bullet-red",
    text: "25+ Years Experienced Cardiac Surgeons",
  },
  {
    icon: <FaLightbulb />,
    colorClass: "bullet-white",
    text: "Advanced Technology & Robotic Surgeries",
  },
  {
    icon: <FaGlobe />,
    colorClass: "bullet-red",
    text: "Trusted by 50,000+ International Patients",
  },
  {
    icon: <FaHeart />,
    colorClass: "bullet-white",
    text: "Dedicated Support for African Patients",
  },
];

const HERO_STATS = [
  { val: "60-80%", label: "Cost Savings", colorClass: "stat-red" },
  { val: "50K+", label: "Intl. Patients", colorClass: "stat-white" },
  { val: "25+", label: "Yrs Experience", colorClass: "stat-red" },
  { val: "24/7", label: "Support", colorClass: "stat-white" },
];

const features = [
  {
    id: 1,
    icon: <FaClipboardList />,
    title: "Transparent Planning",
    desc: "Clear cost breakdowns with no hidden charges or surprises.",
  },
  {
    id: 2,
    icon: <FaCheckCircle />,
    title: "No Unnecessary Procedures",
    desc: "Evidence-based care — only what you truly need.",
  },
  {
    id: 3,
    icon: <FaUserMd />,
    title: "Personalized Approach",
    desc: "Treatment plans tailored to each patient's unique condition.",
  },
  {
    id: 4,
    icon: <FaGlobe />,
    title: "Global Standards",
    desc: "World-class hospitals with internationally certified specialists.",
  },
];

/* ═══════════════════════════════════════════
   FAQ DATA
═══════════════════════════════════════════ */
const faqData = [
  {
    id: 1,
    question: "What is the best hospital for heart problems in India?",
    answer:
      "Top hospitals for heart care in India include All India Institute of Medical Sciences, Apollo Hospitals, and Fortis Healthcare, known for advanced cardiac treatments and experienced specialists.",
  },
  {
    id: 2,
    question: "Which hospital is the best in India for heart treatment?",
    answer:
      "India has several world-class hospitals, especially in Delhi, Mumbai, and Chennai, offering cutting-edge heart surgeries and diagnostics.",
  },
  {
    id: 3,
    question: "Is heart transplant possible in India?",
    answer:
      "Yes, heart transplant is widely available in India at leading hospitals with high success rates and advanced post-operative care.",
  },
  {
    id: 4,
    question: "Who is the No. 1 cardiologist in India?",
    answer:
      "India has many highly reputed cardiologists rather than a single “No.1.” The best doctor depends on your condition, treatment type, and hospital specialization.",
  },
  {
    id: 5,
    question: "How many heart transplants are done in India every year?",
    answer:
      "India performs hundreds of heart transplants annually, with numbers steadily increasing due to improved awareness and organ donation programs.",
  },
  {
    id: 6,
    question: "Which hospitals perform the most heart transplants in India?",
    answer:
      "Hospitals like Apollo Hospitals Chennai, Fortis Escorts Heart Institute, and Narayana Health are among the leaders in heart transplant procedures.",
  },
  {
    id: 7,
    question: "Which is the best heart hospital in the world?",
    answer:
      "Globally, hospitals in the US and Europe rank highly, but India is becoming a preferred destination due to affordable treatment and high-quality cardiac care.",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap"
        />
        <title>
          Affordable Cardiac Treatment in India | Affordable Heart Surgery &
          Bypass Surgery
        </title>
        <meta
          name="description"
          content="Get affordable cardiac treatment in India with top hospitals and expert surgeons. Save up to 80% on heart surgery, bypass surgery, and valve replacement with world-class care at JCI-accredited facilities."
        />
        <meta
          name="keywords"
          content="best heart hospitals in india, best hospital of heart in india,  best heart transplant hospital in india, best cardiac electrophysiologist in india, best electrophysiologist in chennai, best electrophysiologist in mumbai, best electrophysiologist in delhi"
        />
        <link
          rel="canonical"
          href="https://humancaremedicaltourism.com/cardiac-treatment-india"
        />
      </Helmet>

      {/* ════ SECTION 1 — HERO ════ */}
      <section className="cardiac-hero-section">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="cardiac treatment in India with advanced hospital care"
          className="hero-bg-image"
          loading="eager"
        />

        {/* Gradient Overlay */}
        <div className="hero-overlay" />

        {/* Content */}
        <div className="hero-content">
          <span className="cardiac-hero-badge">
            Trusted by 50,000+ International Patients
          </span>

          <h1>
            Affordable Cardiac Treatment in India | World-Class Heart Surgery
          </h1>

          <p>
            Get affordable cardiac treatment in India with world-class
            hospitals, experienced surgeons, and advanced technology. We help
            international patients access safe, cost-effective heart surgery in
            India with up to 80% savings compared to Western countries.
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

      {/* ════ SECTION 2 — WHY INDIA (two-column) ════ */}
      <section className="wi-section">
        <div className="wi-container">
          {/* Centered header */}
          <div className="wi-header">
            <span className="section-label-why">Why India?</span>

            <h2 className="wi-heading">
              Get the Best Heart Treatment in India at 60–80% Lower Cost
            </h2>

            <p className="wi-subtext">
              India is one of the top destinations globally for advanced cardiac
              care, offering high success rates, experienced surgeons, and
              internationally accredited hospitals.
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
          <img src={heartBg} alt="" className="ht-bg-img" />
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
              />
            </div>
          </div>

          {/* ── RIGHT — content ── */}
          <div className="ht-right">
            <p className="ht-eyebrow">Cardiac Care Excellence</p>

            <h1 className="ht-title">
              Affordable Heart Treatment{" "}
              <span className="ht-title--accent">
                Without Compromising Quality
              </span>
            </h1>

            <p className="ht-description">
              Get high-quality cardiac care at significantly lower cost compared
              to many countries, while maintaining global medical standards.
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
            <span className="hn-label">Our Hospital Network</span>
            <h2 className="hn-heading">
              Best Heart Hospitals in India for Cardiac Treatment
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
            <span className="doctor-label">Our Specialists</span>
            <h2 className="doctor-h2">
              Top Cardiac Specialists in India for Heart Surgery
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
      {/* ════ SECTION 5 — WHY INDIA REASONS (navy) ════ */}
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
              Why African Patients Choose India for Heart Treatment?
            </span>
            <h2 className="why-section-h2">
              Patients from Nigeria, Kenya, Tanzania, Uganda, Ghana, and
              Ethiopia trust India for affordable cardiac treatment with
              world-class care and advanced medical facilities.
            </h2>
          </div>
          <div className="cards-grid-5">
            {REASONS.map((r, i) => (
              <div key={i} className="hover-lift reason-card">
                <div className="reason-icon">{r.emoji}</div>
                <h3 className="reason-title">{r.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ════ SECTION 6 — SERVICES ════ */}
      <section className="services-section">
        <div className="services-container">
          <div className="service-title-wrap">
            <span className="service-label">Treatments</span>
            <h2 className="service-h2">Types of Heart Treatments We Offer</h2>
          </div>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="icon-wrap">{s.icon}</div>
                <div className="card-text">
                  {" "}
                  {/* ← add this wrapper */}
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
          />
        </div>

        {/* Right — Content */}
        <div className="support-content">
          <span className="support-label">End-to-End Support</span>
          <h2 className="support-h2">
            We Handle Everything You Focus on Recovery
          </h2>

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
                Testimonials
              </p>

              <h2 className="ts-heading">Let's Hear What They Say About Us</h2>

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
              alt="experienced cardiac surgeon at best heart hospital in India"
              className="ts-doctor-img"
              loading="lazy"
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
              Get answers to common questions about cardiac care, best heart
              hospitals, and treatment options in India
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
            Medical Coordinators Available 24/7
          </div>
          <h2 className="font-display hcs-heading">
            Get Cardiac Treatment Consultation in India
            <br />
            <span className="cta-h2-accent">24/7 Available</span>
          </h2>
          <p className="hcs-subtitle">
            Share your medical reports and get a expert opinion from India's top
            cardiac specialists. No obligations — just clarity and care.
          </p>
          <div className="cta-btns">
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-wa btn-wa--lg whatsapp-glow"
            >
              <WA size={6} /> WhatsApp Now
            </a>
            <a href="tel:+919833166697" className="btn-phone">
              <FaPhoneAlt /> Call Medical Coordinator
            </a>
          </div>
          <div className="cta-trust-row">
            {[
              { icon: <FaCheckCircle />, text: "JCI & NABH Accredited" },
              { icon: <FaLock />, text: "100% Secure & Confidential" },
              { icon: <FaClock />, text: "Opinion in 24 Hours" },
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
            alt="best heart hospital in India for affordable cardiac treatment"
            className="hcs-illo-img"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
