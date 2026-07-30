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
import hcgImage from "../departments/dept-images/general-category/hcg-cancer-treatment-specialist.webp";
import maxImage from "../departments/dept-images/general-category/top-oncology-hospital-india.webp";
import ApolloApcc from "../departments/dept-images/general-category/apollo-proton-cancer-centre-top-cancer-treatment.webp";
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

import reviewsImage from "../departments/dept-images/general-category/best-reviews-for-international-treatment.webp";

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
    text: "Humancare World Wide made my cardiac treatment journey in India smooth and stress-free. Their team handled everything from visa to hospital admission. Highly recommended for international patients!",
    name: "Patient from Kenya",
  },
  {
    text: "I received world-class cancer treatment at an affordable cost. The medical coordinator was available 24/7 and the hospital facilities were excellent. Thank you Humancare!",
    name: "Patient from Uganda",
  },
  {
    text: "The entire process was seamless - from getting expert opinions to post-surgery follow-ups. The language support and accommodation assistance were incredibly helpful.",
    name: "Patient from Tanzania",
  },
  {
    text: "I had my knee replacement surgery in India through Humancare. The doctors were highly experienced and the treatment cost was 70% less than my home country. Great experience!",
    name: "Patient from Nigeria",
  },
  {
    text: "Professional service from start to finish. They connected me with top specialists and provided complete travel support. My family and I felt well taken care of throughout.",
    name: "Patient from South Sudan",
  },
  {
    text: "Outstanding medical care and personal attention. The patient coordinator was always responsive and the hospital staff treated me with compassion. Highly satisfied with the service.",
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
    title: "Advanced Heart & Cardiology Treatment in India",
    description:
      "India is globally recognized for affordable and advanced cardiac treatment with experienced heart specialists and modern technology.",
    treatments: [
      "Heart Bypass Surgery",
      "Angioplasty",
      "Valve Replacement",
      "Pediatric Cardiology",
      "TAVI/TAVR Procedures",
    ],
    ctaLabel: "Talk to Heart Specialist",
    image: cardiologyImage,
    imageAlt: "Cardiology treatment",
    reversed: false,
  },
  {
    id: 2,
    sectionTag: "Oncology",
    title: "Comprehensive Cancer Treatment in India",
    description:
      "Advanced oncology care using modern radiation therapy, immunotherapy, robotic surgery, and personalized treatment planning.",
    treatments: [
      "Chemotherapy",
      "Radiation Therapy",
      "Bone Marrow Transplant",
      "Immunotherapy",
      "Surgical Oncology",
    ],
    ctaLabel: "Talk to Oncology Specialist",
    image: oncologyImage,
    imageAlt: "Oncology treatment",
    reversed: true,
  },
  {
    id: 3,
    sectionTag: "Orthopedics",
    title: "Orthopedic & Joint Replacement Treatment",
    description:
      "Experience superior orthopedic care with minimally invasive procedures, joint replacements, and spine surgeries performed by globally trained specialists.",
    treatments: [
      "Knee Replacement",
      "Hip Replacement",
      "Spine Surgery",
      "Sports Injury Repair",
      "Arthroscopy",
    ],
    ctaLabel: "Talk to Orthopedic Specialist",
    image: joinReplacementImage,
    imageAlt: "Orthopedic treatment",
    reversed: false,
  },
  {
    id: 4,
    sectionTag: "Neurology",
    title: "Expert Neurological & Brain Treatment in India",
    description:
      "India's top neurologists and neurosurgeons deliver advanced care for complex brain, spine, and nervous system disorders with precision and compassion.",
    treatments: [
      "Brain Tumor Surgery",
      "Stroke Management",
      "Epilepsy Treatment",
      "Deep Brain Stimulation",
      "Spinal Cord Disorders",
    ],
    ctaLabel: "Talk to Neurology Specialist",
    image: neurologyImage,
    imageAlt: "Neurology treatment",
    reversed: true,
  },
  {
    id: 5,
    sectionTag: "Dental Care",
    title: "Advanced Dental Implant & Cosmetic Dentistry in India",
    description:
      "India’s leading dental specialists provide affordable and high-quality dental treatments using advanced technology for smile restoration, full mouth rehabilitation, and cosmetic dentistry.",
    treatments: [
      "Dental Implants",
      "Full Mouth Rehabilitation",
      "Smile Makeover",
      "All-on-4 Dental Implants",
      "Crowns & Bridges",
    ],
    ctaLabel: "Talk to Dental Specialist",
    image: dentalImage,
    imageAlt: "Dental implant treatment in India",
    reversed: false,
  },
];

const faqData = [
  {
    id: 1,
    question:
      "Why do international patients choose India for medical treatment?",
    answer:
      "India is one of the world’s leading destinations for advanced and affordable healthcare. International patients choose India because of experienced doctors, modern hospitals, advanced medical technology, shorter waiting times, and significantly lower treatment costs compared to many Western countries.",
  },
  {
    id: 2,
    question:
      "How can Humancare World Wide help me during my treatment journey?",
    answer:
      "Humancare World Wide provides complete medical tourism assistance including doctor consultations, hospital selection, medical visa support, travel coordination, airport pickup, accommodation assistance, language support, and personalized patient care throughout your treatment journey in India.",
  },
  {
    id: 3,
    question: "What medical treatments are available in India?",
    answer:
      "India offers advanced treatment across multiple specialties including cardiology, cancer care, dental implants, orthopedic surgery, eye treatment, neurology, organ transplants, spine surgery, fertility treatment, and robotic surgery.",
  },
  {
    id: 4,
    question: "Are hospitals in India safe for international patients?",
    answer:
      "Yes. Many top hospitals in India are internationally accredited with JCI and NABH certifications. These hospitals follow strict international healthcare protocols, infection control standards, and advanced patient safety measures.",
  },
  {
    id: 5,
    question: "How affordable is medical treatment in India?",
    answer:
      "Medical treatment in India is highly affordable compared to countries like the USA, UK, and Europe. International patients can often save between 60% to 80% on treatment costs without compromising on healthcare quality.",
  },
  {
    id: 6,
    question: "Can I get a medical opinion before traveling to India?",
    answer:
      "Yes. You can share your medical reports with Humancare World Wide and receive online consultations or second medical opinions from experienced specialists in India before making travel decisions.",
  },
  {
    id: 7,
    question:
      "Which are the best hospitals in India for international patients?",
    answer:
      "India has many internationally recognized hospitals including Apollo Hospitals, Fortis Healthcare, Max Healthcare, Medanta, Manipal Hospitals, Narayana Health, and other advanced multi-specialty healthcare institutions.",
  },
  {
    id: 8,
    question: "Do Indian hospitals provide support for foreign patients?",
    answer:
      "Yes. Most leading hospitals in India have dedicated international patient departments that assist with travel, interpreters, visa documentation, accommodation, appointment scheduling, and personalized patient services.",
  },
  {
    id: 9,
    question: "How do I start the treatment process in India?",
    answer:
      "You can begin by contacting Humancare World Wide and sharing your medical reports. Our team will connect you with the right specialists, provide treatment plans, cost estimates, and guide you through the entire medical travel process.",
  },
  {
    id: 10,
    question: "How long does it take to receive treatment in India?",
    answer:
      "Treatment timelines vary depending on the medical condition and procedure. However, one major advantage of India is faster appointment scheduling and minimal waiting periods for surgeries and specialist consultations.",
  },
  {
    id: 11,
    question: "Can my family member travel with me to India?",
    answer:
      "Yes. International patients can travel with attendants or family members. Humancare World Wide also helps arrange accommodation and travel support for companions during the treatment period.",
  },
  {
    id: 12,
    question: "Will language be a problem during treatment in India?",
    answer:
      "No. English is widely spoken in Indian hospitals by doctors, nurses, and hospital staff. Translation assistance can also be arranged for patients who prefer additional language support.",
  },
  {
    id: 13,
    question: "Do I need a medical visa for treatment in India?",
    answer:
      "Yes. Most international patients require an Indian medical visa. Humancare World Wide assists with hospital invitation letters and complete visa documentation support.",
  },
  {
    id: 14,
    question: "How quickly can I get a medical visa for India?",
    answer:
      "Medical visa processing times depend on your country and embassy procedures, but many patients receive approvals within a short period after submitting required documents.",
  },
  {
    id: 15,
    question:
      "Can Humancare World Wide help with airport pickup and accommodation?",
    answer:
      "Yes. We provide airport pickup, hotel booking assistance, guest house arrangements, and accommodation support near your selected hospital in India.",
  },
  {
    id: 16,
    question: "Do hospitals in India offer advanced medical technology?",
    answer:
      "Yes. Many Indian hospitals use advanced technologies such as robotic surgery systems, Proton Beam Therapy, CyberKnife, AI-based diagnostics, minimally invasive surgical techniques, and advanced imaging systems.",
  },
  {
    id: 17,
    question: "Is cardiac treatment in India affordable?",
    answer:
      "Yes. India is globally recognized for affordable and advanced cardiac treatment including bypass surgery, angioplasty, valve replacement, and minimally invasive heart procedures.",
  },
  {
    id: 18,
    question: "Why choose India for cancer treatment?",
    answer:
      "India offers comprehensive cancer care with experienced oncologists, modern radiation technology, immunotherapy, targeted therapy, robotic surgery, and personalized treatment plans at affordable costs.",
  },
  {
    id: 19,
    question: "Are dental implants in India safe and affordable?",
    answer:
      "Yes. India has internationally trained dental specialists offering advanced implant procedures, smile makeovers, and full-mouth rehabilitation using modern digital dentistry technology at lower costs.",
  },
  {
    id: 20,
    question: "What orthopedic treatments are available in India?",
    answer:
      "India provides advanced orthopedic treatments including knee replacement, hip replacement, spine surgery, arthroscopy, sports injury treatment, and robotic joint replacement surgery.",
  },
  {
    id: 21,
    question: "Can I get eye surgery in India?",
    answer:
      "Yes. India is well known for advanced eye care treatments including LASIK, cataract surgery, retina treatment, cornea transplant, glaucoma treatment, and pediatric ophthalmology.",
  },
  {
    id: 22,
    question: "Do Indian hospitals provide organ transplant services?",
    answer:
      "Yes. India has highly specialized transplant centers offering liver transplant, kidney transplant, heart transplant, and bone marrow transplant programs with experienced medical teams.",
  },
  {
    id: 23,
    question: "What is included in international patient support services?",
    answer:
      "International patient services may include medical visa support, airport pickup, accommodation assistance, translators, appointment scheduling, treatment coordination, rehabilitation support, and post-treatment follow-up care.",
  },
  {
    id: 24,
    question: "Can I receive follow-up care after returning home?",
    answer:
      "Yes. Many hospitals and doctors in India offer online follow-up consultations and telemedicine support after you return to your home country.",
  },
  {
    id: 25,
    question: "Why should I choose Humancare World Wide?",
    answer:
      "Humancare World Wide focuses on providing compassionate, transparent, and personalized medical tourism support for international patients seeking high-quality healthcare in India. Our goal is to make your medical journey safe, smooth, and stress-free.",
  },
];

const DOCTORS = [
  {
    name: "Dr. Vishnu Agarwal",
    education: "MBBS, MS - General Surgery, Surgical Oncology Fellowship",
    spec: "Surgical Oncologist, Robotic Cancer Surgeon, Laparoscopic Oncosurgeon",
    desc: "Dr. Vishnu Agarwal is a highly accomplished Surgical Oncologist with over 15 years of experience specializing in laparoscopic and robotic cancer surgeries. He completed his MBBS and MS in General Surgery from Mumbai University and pursued advanced training in Surgical Oncology at the prestigious Tata Memorial Hospital, Mumbai. To further enhance his expertise in minimally invasive cancer treatment, Dr. Vishnu Agarwal completed a fellowship in Laparoscopic and Robotic Gynaecology and Colorectal Cancer Surgery at St. Mary’s Hospital, Seoul, South Korea, along with advanced robotic surgical training in France. He is widely recognized for delivering precision-driven minimally invasive cancer surgeries that promote faster recovery, reduced post-operative complications, and improved patient outcomes. Dr. Vishnu Agarwal has extensive expertise in the management of gynecological cancers, including advanced laparoscopic and robotic surgeries for endometrial, ovarian, and cervical cancers. He is also a pioneer in breast cancer surgery and performed the first robotic surgery for a breast tumor in India. Over his distinguished career, he has successfully performed more than a thousand breast cancer surgeries, including mastectomies, breast-conserving surgeries, sentinel lymph node biopsies, and oncoplastic procedures. His expertise further extends to minimally invasive colorectal cancer surgeries, where he has managed several highly complex cases with exceptional outcomes. Having treated over 6,000 national and international patients, Dr. Vishnu Agarwal is known for combining advanced robotic technology with compassionate, patient-focused cancer care. He actively participates in surgical teaching programs, live demonstrations, and academic training sessions, contributing significantly to the advancement of modern surgical oncology.",
    photoUrl: VishnuAgarwalImage,
  },
  {
    name: "Dr. Vivek Allahbadia",
    education:
      "MBBS, D.Orth, MS (Orthopaedics), FCPS Orthopaedics, MCh Orthopaedics (UK)",
    spec: "Orthopaedic Surgeon, Robotic Joint Replacement Specialist",
    desc: "Dr. Vivek Allahbadia is a highly experienced Orthopaedic and Joint Replacement Surgeon with over 28 years of expertise in robotic knee replacement, hip replacement surgery, sports injury treatment, and advanced orthopedic care. Internationally trained in the UK, Singapore, Prague, and Australia, he is recognized as one of Mumbai's pioneers in robotic joint replacement surgery. His specialties include robotic knee replacement, total hip replacement, revision joint replacement, minimally invasive orthopedic surgery, and sports injury management. Patients from around the world choose Dr. Allahbadia for advanced orthopedic treatment, modern surgical techniques, and personalized rehabilitation programs.",
    photoUrl: VivekAllahbadiaImage,
  },
  {
    name: "Dr. Naresh Trehan",
    education:
      "MBBS, Diplomate American Board of Surgery, Diplomate American Board of Cardiothoracic Surgery",
    spec: "Cardiovascular and Cardiothoracic Surgeon",
    desc: "Dr. Naresh Trehan is one of the most renowned Cardiovascular and Cardiothoracic Surgeons in India with over 40 years of experience in advanced heart surgery and cardiac care. Founder and Chairman of Medanta - The Medicity, Gurugram, he has successfully performed more than 48,000 cardiac surgeries. His expertise includes coronary artery bypass grafting (CABG), heart valve replacement, aortic aneurysm surgery, minimally invasive cardiac surgery, and complex cardiovascular procedures. International patients from across Africa, the Middle East, and Asia choose Dr. Trehan for advanced heart treatment, world-class surgical expertise, and exceptional patient outcomes.",
    photoUrl: NareshTrehanImage,
  },
  {
    name: "Dr. K R Balakrishnan",
    education: "MBBS, MS (General Surgery), MCh (Cardiothoracic Surgery)",
    spec: "Cardiothoracic and Heart Transplant Surgeon",
    desc: "Dr. K R Balakrishnan is one of India's leading Heart Transplant and Cardiothoracic Surgeons with over 40 years of experience in advanced cardiac and transplant surgery. He has performed more than 18,000 cardiac procedures and over 190 heart transplants. His expertise includes heart transplant surgery, ventricular assist device (VAD) implantation, pediatric cardiac surgery, lung transplantation, and advanced heart failure management. Widely recognized as a pioneer in transplant medicine, Dr. Balakrishnan is trusted by international patients seeking complex heart treatment and transplant care in India.",
    photoUrl: KRBalakrishnanImage,
  },
  {
    name: "Prof. Dr. Mahipal S Sachdev",
    education:
      "MBBS, MD, MS (Ophthalmology), DNB, MNAMS, FRCS, FICO (UK), FAICO",
    spec: "Ophthalmologist, Cataract & Refractive Surgeon",
    desc: "Prof. Dr. Mahipal S Sachdev is a Padma Shri award-winning Ophthalmologist and one of India's most respected eye surgeons with over 42 years of experience. He specializes in LASIK, SMILE eye surgery, cataract surgery, cornea transplantation, keratoconus treatment, and advanced vision correction procedures. As Chairman and Medical Director of the Centre for Sight Group of Eye Hospitals, he has pioneered several modern eye surgery techniques in India and is widely recognized for excellence in ophthalmology and patient care.",
    photoUrl: MahipalSachdevImage,
  },

  {
    name: "Dr. C. Sharath Babu",
    education: "BDS, MDS, FICOI",
    spec: "Dental Implantologist, Prosthodontist",
    desc: "Dr. C. Sharath Babu is a highly experienced Dental Implantologist and Prosthodontist with over 15 years of expertise in dental implants, full-mouth rehabilitation, smile designing, and advanced restorative dentistry. He specializes in implant surgery, cosmetic dental treatments, and comprehensive oral rehabilitation procedures. Known for combining modern dental technology with patient-focused care, Dr. Sharath Babu is a preferred choice for international patients seeking affordable and high-quality dental treatment in India.",
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
  // Group reviews into pairs → [[r0,r1], [r2,r3], ...]
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
          Medical Treatment in India | Affordable Healthcare for International
          Patients
        </title>

        <meta
          name="description"
          content="Get affordable medical treatment in India with top hospitals, experienced doctors, advanced technology, and complete support for international patients from Kenya, Uganda, Tanzania, Nigeria, and South Sudan."
        />

        <meta
          name="keywords"
          content="
      medical treatment in india,
      affordable healthcare india,
      medical tourism india,
      treatment in india for international patients,
      best hospitals in india,
      healthcare in india,
      cardiology treatment india,
      cancer treatment india,
      dental treatment india,
      orthopedic surgery india,
      neurology treatment india,
      eye surgery india,
      robotic surgery india,
      medical visa assistance india,
      international patient care india,
      affordable surgery in india,
      top doctors in india,
      medical tourism company india,
      advanced treatment india,
      humancare world wide
    "
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://humancaremedicaltourism.com/medical-treatment-in-india"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Medical Treatment in India | Affordable Healthcare for International Patients"
        />

        <meta
          property="og:description"
          content="Connect with top hospitals and experienced specialists in India for affordable and advanced medical treatment with complete international patient support."
        />

        <meta
          property="og:image"
          content="https://humancaremedicaltourism.com/images/medical-treatment-in-india.webp"
        />

        <meta
          property="og:url"
          content="https://humancaremedicaltourism.com/medical-treatment-in-india"
        />

        <meta property="og:type" content="website" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Medical Treatment in India | Affordable Healthcare"
        />

        <meta
          name="twitter:description"
          content="Affordable medical treatment in India with top hospitals, advanced technology, and trusted support for international patients."
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
          alt="International patient receiving medical treatment in India"
          className="general-hero-bg-image"
          loading="eager"
        />

        {/* Gradient Overlay */}
        <div className="general-hero-overlay" />

        {/* Content */}
        <div className="general-hero-content">
          <span className="general-hero-badge">
            Trusted by 50,000+ International Patients
          </span>

          <h1 className="general-hero-heading">
            Your Health, Our Mission: World-Class Medical Treatment in India
          </h1>

          <p className="general-hero-subheading">
            Humancare World Wide helps patients from Kenya, Uganda, Tanzania,
            Nigeria, and South Sudan connect with the best hospitals in India
            for advanced cardiology, cancer treatment, dental implants,
            orthopedic surgery, and eye care. We guide you through every step,
            from doctor consultation and medical visa assistance to hospital
            admission and recovery support.
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

      <section className="why-choose-india-section">
        <div className="why-choose-container">
          <div className="why-choose-header">
            <h2 className="why-choose-heading">
              Why Choose India for Medical Treatment?
            </h2>
            <p className="why-choose-subheading">
              India has become one of the world’s leading destinations for
              affordable and advanced healthcare. International patients choose
              India because of world-class hospitals, experienced doctors,
              modern medical technology, and significantly lower treatment
              costs.
            </p>
          </div>

          <div className="why-choose-cards-grid">
            {/* Card 1: Advanced Medical Technology */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaRobot />
              </div>
              <h3 className="why-choose-card-title">
                Advanced Medical Technology
              </h3>
              <p className="why-choose-card-text">
                Robotic surgery systems, Proton Beam Therapy, CyberKnife,
                advanced imaging systems, and minimally invasive procedures
              </p>
            </div>

            {/* Card 2: Affordable Treatment Costs */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaMoneyBillWave />
              </div>
              <h3 className="why-choose-card-title">
                Affordable Treatment Costs
              </h3>
              <p className="why-choose-card-text">
                Save up to 70–80% compared to treatment costs in Western
                countries.
              </p>
            </div>

            {/* Card 3: Globally Experienced Doctors */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaUserMd />
              </div>
              <h3 className="why-choose-card-title">
                Globally Experienced Doctors
              </h3>
              <p className="why-choose-card-text">
                US/UK-trained specialists with years of international
                experience.
              </p>
            </div>

            {/* Card 4: Faster Treatment Access */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaClock />
              </div>
              <h3 className="why-choose-card-title">Faster Treatment Access</h3>
              <p className="why-choose-card-text">
                Minimal waiting time for surgeries and specialist consultations.
              </p>
            </div>

            {/* Card 5: International Patient Care */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaGlobe />
              </div>
              <h3 className="why-choose-card-title">
                International Patient Care
              </h3>
              <p className="why-choose-card-text">
                Dedicated teams for travel, language support, and accommodation
                assistance.
              </p>
            </div>

            {/* Card 6: Personalized Recovery Support */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaHeartbeat />
              </div>
              <h3 className="why-choose-card-title">
                Personalized Recovery Support
              </h3>
              <p className="why-choose-card-text">
                Post-treatment rehabilitation and online follow-up consultation
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════ WHY CHOOSE HUMANCARE WORLDWIDE ════ */}
      <section className="humancare-support-section">
        <div className="humancare-support-container">
          <div className="humancare-support-image">
            <img
              src={WhyHumancare}
              alt="Medical tourism support services in India for international patients"
              loading="lazy"
            />
            <div className="humancare-image-overlay" />
          </div>

          <div className="humancare-support-content">
            <h2 className="humancare-support-heading">
              WHY CHOOSE HUMANCARE MEDICAL TOURISM?
            </h2>
            <p className="humancare-support-subheading">
              Complete Support Throughout Your Medical Journey
            </p>

            <div className="humancare-services-list">
              <div className="humancare-service-item">
                <FaUserMd className="humancare-service-icon" />
                <div className="humancare-service-text">
                  <h3>Medical Consultation</h3>
                  <p>Get treatment opinions from top specialists.</p>
                </div>
              </div>

              <div className="humancare-service-item">
                <FaGlobe className="humancare-service-icon" />
                <div className="humancare-service-text">
                  <h3>Medical Visa Assistance</h3>
                  <p>Fast visa invitation and documentation support.</p>
                </div>
              </div>

              <div className="humancare-service-item">
                <FaPhoneAlt className="humancare-service-icon" />
                <div className="humancare-service-text">
                  <h3>Travel & Airport Pickup</h3>
                  <p>End-to-end transport coordination.</p>
                </div>
              </div>

              <div className="humancare-service-item">
                <FaHeartbeat className="humancare-service-icon" />
                <div className="humancare-service-text">
                  <h3>Accommodation Support</h3>
                  <p>Affordable hotels and apartments near hospitals.</p>
                </div>
              </div>

              <div className="humancare-service-item">
                <FaClock className="humancare-service-icon" />
                <div className="humancare-service-text">
                  <h3>Dedicated Patient Coordinator</h3>
                  <p>24/7 personal support throughout treatment.</p>
                </div>
              </div>

              <div className="humancare-service-item">
                <FaGlobe className="humancare-service-icon" />
                <div className="humancare-service-text">
                  <h3>Language Assistance</h3>
                  <p>Translators for Swahili, Hausa, Arabic, and more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hn-section">
        <div className="hn-container">
          <div className="hn-title-wrap">
            <span className="hn-label">Our Hospital Network</span>
            <h2 className="hn-heading">
              Best Hospitals in India for International Patients
            </h2>
            <p className="hn-subtitle">
              Humancare World Wide partners with some of the top hospitals in
              India known for advanced medical care, international patient
              services, and high treatment success rates.
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
                          alt={`${h.name} ${h.sub} - ${h.location} - Best hospital for ${h.specialties[0]} in india for international patients`}
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

      <section className="ts-section">
        {/* Section Header */}
        <div className="ts-header">
          <div className="ts-header__label">Treatment Specialties</div>
          <h2 className="ts-header__title">
            Explore World-Class Treatment Specialties in India
          </h2>
          <p className="ts-header__sub">
            Designed to deliver advanced care, faster recovery, and better
            patient outcomes across leading medical disciplines.
          </p>
        </div>

        {/* Cards */}
        <div className="ts-cards">
          {specialties.map((specialty) => (
            <TreatmentCard key={specialty.id} specialty={specialty} />
          ))}
        </div>
      </section>

      {/* ════ SECTION 4 — DOCTORS ════ */}
      <section className="doctor-section-light">
        <div className="doctor-container">
          <div className="doctor-title-wrap">
            <span className="doctor-label">Our Specialists</span>
            <h2 className="doctor-h2">
              Best Doctors & Specialists in India for International Patients
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

      {/* ════ MEDICAL JOURNEY PROCESS ════ */}
      <section className="journey-process-section">
        <div className="journey-process-container">
          {/* Section Header */}
          <div className="journey-process-header">
            <h2 className="journey-process-heading">MEDICAL JOURNEY PROCESS</h2>
            <p className="journey-process-subheading">
              Your Treatment Journey Made Simple
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
              <h3 className="journey-step-title">Share Medical Reports</h3>
              <p className="journey-step-description">
                Send us your medical reports and diagnostic documents for
                initial assessment.
              </p>
            </div>

            {/* Step 2 */}
            <div className="journey-step-card">
              <div className="journey-step-number">02</div>
              <div className="journey-step-icon">
                <FaStethoscope />
              </div>
              <h3 className="journey-step-title">Get Expert Opinion</h3>
              <p className="journey-step-description">
                Receive professional consultation from India's top medical
                specialists.
              </p>
            </div>

            {/* Step 3 */}
            <div className="journey-step-card">
              <div className="journey-step-number">03</div>
              <div className="journey-step-icon">
                <FaClipboardList />
              </div>
              <h3 className="journey-step-title">Receive Treatment Plan</h3>
              <p className="journey-step-description">
                Get a detailed treatment plan with cost estimates and timeline.
              </p>
            </div>

            {/* Step 4 */}
            <div className="journey-step-card">
              <div className="journey-step-number">04</div>
              <div className="journey-step-icon">
                <FaPassport />
              </div>
              <h3 className="journey-step-title">Visa & Travel Support</h3>
              <p className="journey-step-description">
                Complete assistance with visa invitation letters and travel
                arrangements.
              </p>
            </div>

            {/* Step 5 */}
            <div className="journey-step-card">
              <div className="journey-step-number">05</div>
              <div className="journey-step-icon">
                <FaHospital />
              </div>
              <h3 className="journey-step-title">Hospital Admission</h3>
              <p className="journey-step-description">
                Seamless hospital admission with dedicated patient coordinator
                support.
              </p>
            </div>

            {/* Step 6 */}
            <div className="journey-step-card">
              <div className="journey-step-number">06</div>
              <div className="journey-step-icon">
                <FaHandHoldingHeart />
              </div>
              <h3 className="journey-step-title">Recovery & Follow-Up</h3>
              <p className="journey-step-description">
                Post-treatment care with online follow-ups and recovery
                monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="general-reviews-section">
        <div className="general-reviews-content">
          <h2 className="general-reviews-heading">Our Clients Review</h2>

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
                      {/* <p className="general-reviews-card-name">{r.name}</p> */}
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
            alt="Happy international general patient in India"
            className="general-reviews-image"
          />
        </div>
      </section>

      <section className="general-faq-section" aria-labelledby="faq-heading">
        <div className="general-faq-container">
          {/* Section Header */}
          <div className="general-faq-header">
            <span className="general-faq-badge">
              Frequently Asked Questions
            </span>
            {/* <p className="general-faq-subtitle">
              Get answers to common questions about general care, best general
              hospitals, and treatment options in India
            </p> */}
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

      <section className="general-cta-section">
        {/* Background Image */}
        <img
          src={ctaImage}
          alt="Medical treatment in India for international patients"
          className="general-cta-bg-image"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="general-cta-overlay" />

        {/* Content Container */}
        <div className="general-cta-container">
          <div className="general-cta-content">
            <span className="general-cta-badge">
              Trusted Medical Tourism Partner for African Patients
            </span>

            <h2 className="general-cta-title">
              Start Your Medical Treatment Journey in India Today
            </h2>

            <p className="general-cta-subtitle">
              Connect with experienced doctors and the best hospitals in India
              for advanced cardiology, cancer treatment, dental implants,
              orthopedic surgery, eye care, and more with complete international
              patient support.
            </p>

            <div className="general-cta-benefits-list">
              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>Best Medical opinion from specialists</span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>Affordable treatment packages in India</span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>Medical visa & travel assistance</span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>Partnered with top hospitals in India</span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>24/7 international patient support</span>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default GeneralCategory;
