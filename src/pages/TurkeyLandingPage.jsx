import { useState, useEffect, useRef } from "react";
import "./TurkeyLandingPage.css";
import { Helmet } from "react-helmet";

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaCheckCircle,
  FaCheck,
  FaHospital,
  FaMapMarkerAlt,
  FaStethoscope,
  FaPassport,
  FaPlane,
  FaCar,
  FaHotel,
  FaLanguage,
  FaCalendarCheck,
  FaHeartbeat,
  FaStar,
  FaUserMd,
  FaHandshake,
  FaDollarSign,
  FaHeadset,
  FaClipboardList,
  FaGlobe,
  FaUsers,
  FaPlus,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";

import heroImage from "../departments/dept-images/turkey-country/best-hospital-in-turkey.webp";

import aboutImage1 from "../departments/dept-images/turkey-country/medical-treatment-turkey.webp";
import aboutImage2 from "../departments/dept-images/turkey-country/medical-tourism-turkey-services.webp";

import whyChooseTurkeyImage from "../departments/dept-images/turkey-country/advanced-healthcare-in-turkey.webp";

import livHospitalImage from "../assets/hospitals/liv-hospital-in-turkey.webp";
import guvenHospitalImage from "../assets/hospitals/guven-hospital-turkey-ankara.webp";
import medicalParkImage from "../assets/hospitals/medical-park-istanbul-turkey.webp";
import istinyeDentalImage from "../assets/hospitals/istinye-dental-hospital-in-turkey.webp";
import memorialHealthImage from "../assets/hospitals/memorial-hospital-group-in-turkey.webp";

import cardiologyImage from "../departments/dept-images/turkey-country/cardiology-treatment-in-turkey.webp";
import oncologyImage from "../departments/dept-images/turkey-country/oncology.webp";
import organTransplantImage from "../departments/dept-images/turkey-country/organ-transplant.webp";
import kneeReplacementImage from "../departments/dept-images/turkey-country/knee-replacement.webp";
import neurologyImage from "../departments/dept-images/turkey-country/neurosurgen.webp";
import cosmeticSurgeryImage from "../departments/dept-images/turkey-country/cosmetic-surgery.webp";
import eyeSurgeryImage from "../departments/dept-images/turkey-country/eye-treatment.webp";
import dentalImage from "../departments/dept-images/turkey-country/dental-treatment.webp";

import whyPatientsChooseUsImage from "../departments/dept-images/turkey-country/why-patient-from-africa.webp";

import whyHumancareImage from "../departments/dept-images/turkey-country/medical-tourism-support-turkey.webp";

import ThumbnailImage from "../departments/dept-images/turkey-country/international-patient-testimonials-turkey.webp";

import ctaImage from "../departments/dept-images/turkey-country/medical-treatment-turkey-consultation.webp";

const WA = ({ size = 5 }) => (
  <FaWhatsapp className={`icon-wa icon-wa--${size}`} />
);

const WA_URL =
  "https://wa.me/919833166697?text=Hello%2C%20I%20am%20looking%20for%20medical%20treatment%20in%20Turkey";

const HOSPITALS = [
  {
    name: "Liv Hospital",
    image: livHospitalImage,
    type: "Multi-Speciality Hospital",
    locations: "Istanbul, Ankara, Samsun",
    description:
      "A hospital option in Turkey offering multiple medical specialties and services for local and international patients. Patients should review the relevant department, specialist availability and hospital facilities for their individual requirements.",
    cta: "Get Hospital Details",
    specialties: [
      "Cardiology",
      "Oncology",
      "Orthopedics",
      "Organ Transplant",
      "Specialized Healthcare",
    ],
  },
  {
    name: "Acıbadem / Güven Hospital",
    image: guvenHospitalImage,
    type: "Multi-Speciality Hospital",
    locations: "Ankara & Istanbul, Turkey",
    description:
      "A hospital network in Turkey with multiple clinical departments and services. International patients can explore relevant specialties and coordinate appointments according to their healthcare requirements.",
    cta: "Explore Hospital",
    specialties: [
      "Cardiology",
      "Oncology",
      "Orthopedics",
      "Neurosurgery",
      "General Surgery",
    ],
  },
  {
    name: "Medical Park Hospital",
    image: medicalParkImage,
    type: "Multi-Speciality Hospital",
    locations:
      "Istanbul, Adana, Ankara, Izmir, Kocaeli, Mersin, Samsun, Trabzon",
    description:
      "A hospital group in Turkey providing services across multiple medical specialties. Hospital selection should be based on the required specialty, facilities and individual healthcare needs.",
    cta: "View Hospital Information",
    specialties: [
      "Oncology",
      "Cardiology",
      "Orthopedics",
      "Organ Transplant",
      "Neurology",
    ],
  },
  {
    name: "Istinye Dental Hospital",
    image: istinyeDentalImage,
    type: "Dental Specialty Hospital",
    locations: "Istanbul, Turkey",
    description:
      "A specialized dental hospital in Istanbul providing oral health services including dental implants, orthodontics, oral surgery and restorative treatments for local and international patients.",
    cta: "View Hospital Details",
    specialties: [
      "Dental Implants",
      "Cosmetic Dentistry",
      "Orthodontics",
      "Oral Surgery",
      "Restorative Dentistry",
    ],
  },
  {
    name: "Memorial Health Group",
    image: memorialHealthImage,
    type: "Multi-Speciality Hospital",
    locations: "Istanbul, Ankara, Antalya, Kayseri, Diyarbakir",
    description:
      "A hospital group in Turkey with services across various medical specialties. Patients can review relevant departments, specialist availability and international patient support.",
    cta: "Get Hospital Assistance",
    specialties: [
      "Oncology",
      "Organ Transplant",
      "Cardiology",
      "Orthopedics",
      "Robotic Surgery",
    ],
  },
];

const specialties = [
  {
    id: 1,
    sectionTag: "Oncology Care",
    title: "Cancer Treatment",
    description:
      "Oncology services may include medical, surgical and radiation oncology according to diagnosis, clinical evaluation and treatment requirements.",
    treatments: [
      "Medical Oncology",
      "Surgical Oncology",
      "Radiation Oncology",
      "Chemotherapy Coordination",
      "Personalized Treatment Planning",
    ],
    ctaLabel: "Learn More",
    image: oncologyImage,
    imageAlt: "Cancer Treatment in Turkey",
    reversed: false,
  },
  {
    id: 2,
    sectionTag: "Radiation Oncology",
    title: "Radiation Therapy",
    description:
      "Radiation oncology teams may provide radiation-based treatment as part of care when clinically appropriate.",
    treatments: [
      "External Beam Radiation",
      "Intensity-Modulated Radiation",
      "Stereotactic Radiosurgery",
      "Brachytherapy",
      "Treatment Planning",
    ],
    ctaLabel: "Learn More",
    image: organTransplantImage,
    imageAlt: "Radiation Therapy in Turkey",
    reversed: true,
  },
  {
    id: 3,
    sectionTag: "Surgical Specialties",
    title: "Surgical Treatment",
    description:
      "Specialist surgical teams may provide procedures according to the patient's condition, clinical assessment and hospital capabilities.",
    treatments: [
      "General Surgery",
      "Minimally Invasive Procedures",
      "Laparoscopic Surgery",
      "Pre-Surgical Assessment",
      "Post-Operative Care",
    ],
    ctaLabel: "Learn More",
    image: cosmeticSurgeryImage,
    imageAlt: "Surgical Treatment in Turkey",
    reversed: false,
  },
  {
    id: 4,
    sectionTag: "Orthopedic Care",
    title: "Orthopedic Treatment",
    description:
      "Orthopedic services may address bone, joint, muscle, ligament and mobility-related conditions.",
    treatments: [
      "Joint Assessment",
      "Knee & Hip Procedures",
      "Spine Care",
      "Sports Injury Management",
      "Rehabilitation Support",
    ],
    ctaLabel: "Learn More",
    image: kneeReplacementImage,
    imageAlt: "Orthopedic Treatment in Turkey",
    reversed: true,
  },
  {
    id: 5,
    sectionTag: "Neurosciences",
    title: "Neurology & Neurosurgery",
    description:
      "Specialists evaluate neurological conditions and surgical requirements when clinically appropriate.",
    treatments: [
      "Neurological Evaluation",
      "Brain & Spine Surgery",
      "Diagnostic Investigations",
      "Stroke Management",
      "Specialist Consultations",
    ],
    ctaLabel: "Learn More",
    image: neurologyImage,
    imageAlt: "Neurology and Neurosurgery in Turkey",
    reversed: false,
  },
  {
    id: 6,
    sectionTag: "Cardiovascular Care",
    title: "Cardiology & Cardiac Care",
    description:
      "Cardiology teams evaluate and manage cardiovascular conditions through appropriate diagnostic and treatment services.",
    treatments: [
      "Cardiovascular Evaluation",
      "Diagnostic Angiography",
      "Heart Valve Assessment",
      "Cardiac Consultations",
      "Arrhythmia Management",
    ],
    ctaLabel: "Learn More",
    image: cardiologyImage,
    imageAlt: "Cardiology and Cardiac Care in Turkey",
    reversed: true,
  },
  {
    id: 7,
    sectionTag: "Diagnostic Services",
    title: "Diagnostic Imaging",
    description:
      "Hospitals may provide imaging and diagnostic services to support medical evaluation and treatment planning.",
    treatments: [
      "MRI & CT Scans",
      "PET-CT Imaging",
      "Ultrasound Services",
      "Digital X-Ray",
      "Laboratory Investigations",
    ],
    ctaLabel: "Learn More",
    image: eyeSurgeryImage,
    imageAlt: "Diagnostic Imaging in Turkey",
    reversed: false,
  },
  {
    id: 8,
    sectionTag: "Dental Specialties",
    title: "Dental Treatment",
    description:
      "Dental specialists provide evaluation and treatment planning for oral and dental healthcare requirements.",
    treatments: [
      "Dental Implants",
      "Cosmetic Dentistry",
      "Oral Surgery",
      "Restorative Care",
      "Orthodontic Evaluation",
    ],
    ctaLabel: "Learn More",
    image: dentalImage,
    imageAlt: "Dental Treatment in Turkey",
    reversed: true,
  },
];

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

const reviews = [
  {
    text: "“Our family received thorough guidance for heart care in Turkey. The hospital was modern, the doctors were experienced, and the international patient team assisted us throughout the journey.”",
    name: "Patient from Kenya",
  },
  {
    text: "“Traveling from Nigeria for oncology consultations in Turkey went smoothly. From airport pickup to hospital appointments, the coordination was prompt and professional, and the medical team explained our options clearly.”",
    name: "Patient from Nigeria",
  },
  {
    text: "“The orthopedic team in Istanbul evaluated my joint condition and provided clear surgical and rehabilitation care. The hospital facilities and recovery support were very helpful.”",
    name: "Patient from Ghana",
  },
  {
    text: "“We consulted specialists in Turkey for neurological care. The medical team was attentive and experienced, and the coordinators supported our family at every stage.”",
    name: "Patient from Tanzania",
  },
  {
    text: "“The medical facilities and patient support in Turkey were well organized. The coordinators and hospital staff assisted us with communication, consultations, and post-treatment follow-up.”",
    name: "Patient from Uganda",
  },
];

// Stars Component
const Stars = () => (
  <div className="cancer-reviews-stars">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className="cancer-reviews-star" />
    ))}
  </div>
);

const faqData = [
  {
    id: 1,
    question: "Which is the best hospital in Turkey?",
    answer:
      "There is no single hospital that is suitable for every patient or every medical condition. The appropriate hospital depends on the required specialty, medical condition, specialist availability, facilities, location and individual requirements.",
  },
  {
    id: 2,
    question: "How do I choose the best hospital in Turkey?",
    answer:
      "Consider the relevant medical department, specialist availability, hospital facilities, international patient services, location, verified credentials and the healthcare provider's evaluation.",
  },
  {
    id: 3,
    question: "Are hospitals in Turkey available for international patients?",
    answer:
      "Yes. Many hospitals in Turkey provide international patient services and assist patients travelling from other countries.",
  },
  {
    id: 4,
    question: "How much does medical treatment cost in Turkey?",
    answer:
      "Costs vary according to the medical condition, treatment approach, hospital, specialist, investigations, procedures and duration of care.",
  },
  {
    id: 5,
    question: "Can I share my medical reports before travelling to Turkey?",
    answer:
      "Yes. Relevant medical reports can be shared for appointment and hospital coordination. The treating healthcare professional makes the clinical assessment.",
  },
  {
    id: 6,
    question: "Can you help me choose a hospital in Turkey?",
    answer:
      "Our team can assist with exploring hospital options based on your stated healthcare requirements and coordinating communication with healthcare providers.",
  },
  {
    id: 7,
    question: "Can you arrange a doctor appointment in Turkey?",
    answer:
      "Appointment coordination may be provided based on the selected hospital, specialist availability and patient's requirements.",
  },
  {
    id: 8,
    question: "Can you help with accommodation in Turkey?",
    answer:
      "International patient support may include coordination assistance for accommodation, airport transfers and local transportation.",
  },
  {
    id: 9,
    question: "How long does medical treatment in Turkey take?",
    answer:
      "The duration varies according to the medical condition, recommended treatment, hospital schedule, recovery requirements and follow-up plan.",
  },
  {
    id: 10,
    question: "Can I get a second medical opinion in Turkey?",
    answer:
      "Patients may request coordination for a specialist consultation when seeking another professional medical opinion.",
  },
  {
    id: 11,
    question: "Are treatment outcomes guaranteed?",
    answer:
      "No medical outcome should be presented as guaranteed. Treatment suitability and outcomes vary according to individual circumstances and should be discussed with the treating healthcare professional.",
  },
  {
    id: 12,
    question: "How can I contact Human Care Medical Tourism?",
    answer:
      "You can contact our team to discuss your healthcare requirements, hospital options, specialist appointments, treatment information, estimated costs and international patient support.",
  },
];

function TurkeyLandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

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

  // FAQ toggle function
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Handle keyboard navigation for FAQ
  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFAQ(index);
    }
  };

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
          Best Hospital in Turkey for International Patients | Human Care Medical Tourism
        </title>

        <meta
          name="description"
          content="Explore hospital and healthcare options in Turkey with support for specialist appointments, treatment coordination, hospital information, travel arrangements and international patient services."
        />

        <meta
          name="keywords"
          content="
            best hospital in Turkey,
            best hospital in Turkey for international patients,
            hospitals in Turkey for international patients,
            medical treatment in Turkey,
            medical tourism in Turkey,
            hospitals in Turkey,
            medical specialists in Turkey,
            treatment cost in Turkey,
            medical treatment cost in Turkey,
            international patient services Turkey,
            healthcare in Turkey,
            hospital treatment in Turkey
          "
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://humancaremedicaltourism.com/best-hospital-in-turkey"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Best Hospital in Turkey for International Patients | Human Care Medical Tourism"
        />

        <meta
          property="og:description"
          content="Explore hospital and healthcare options in Turkey with support for specialist appointments, treatment coordination, hospital information, travel arrangements and international patient services."
        />

        <meta
          property="og:image"
          content="https://humancaremedicaltourism.com/images/best-hospital-in-turkey.webp"
        />

        <meta
          property="og:url"
          content="https://humancaremedicaltourism.com/best-hospital-in-turkey"
        />

        <meta property="og:type" content="website" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Best Hospital in Turkey for International Patients | Human Care Medical Tourism"
        />

        <meta
          name="twitter:description"
          content="Explore hospital and healthcare options in Turkey with support for specialist appointments, treatment coordination, hospital information, travel arrangements and international patient services."
        />

        <meta
          name="twitter:image"
          content="https://humancaremedicaltourism.com/images/best-hospital-in-turkey.webp"
        />

        {/* Geo SEO */}
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="Turkey" />

        {/* Language */}
        <meta httpEquiv="content-language" content="en" />
      </Helmet>

      {/* ════ SECTION 1 — HERO ════ */}
      <section className="turkey-hero-section">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Best hospital in Turkey for international patients"
          className="turkey-hero-bg-image"
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1080}
          decoding="async"
        />

        {/* Gradient Overlay */}
        <div className="turkey-hero-overlay" />

        {/* Content */}
        <div className="turkey-hero-content">
          <span className="turkey-hero-badge">
            International Patient Support in Turkey
          </span>

          <h1>Best Hospital in Turkey for International Patients</h1>

          <p>
            Explore hospital and healthcare options in Turkey with support for
            specialist appointments, treatment coordination, hospital
            information, travel arrangements and international patient services.
          </p>

          <p style={{ marginTop: "12px", opacity: 0.9 }}>
            Connect with our medical tourism team to understand available hospital
            options, medical specialties, treatment information, estimated costs
            and the process for planning healthcare in Turkey.
          </p>

          <div className="turkey-hero-ctas">
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-wa whatsapp-glow"
            >
              <WA size={5} /> Get Hospital Assistance
            </a>

            <a href="tel:+919833166697" className="btn-outline">
              <FaPhoneAlt /> Speak With Our Team
            </a>
          </div>
        </div>
      </section>

      {/* ════ SECTION 2 — INTRODUCTION / HEALTHCARE INFORMATION ════ */}
      <section className="turkey-about-section">
        <div className="turkey-about-container">
          {/* Left Side - Images */}
          <div className="turkey-about-images">
            <div className="turkey-about-image-wrapper">
              <img
                src={aboutImage1}
                alt="Healthcare support and hospital coordination in Turkey"
                loading="lazy"
                width={1920}
                height={1080}
                decoding="async"
              />
            </div>
            <div className="turkey-about-image-wrapper">
              <img
                src={aboutImage2}
                alt="Medical tourism support services in Turkey"
                loading="lazy"
                width={1920}
                height={1280}
                decoding="async"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="turkey-about-content">
            <div className="turkey-about-header">
              <span className="turkey-about-subtitle">
                Healthcare Coordination
              </span>
              <h2>Find the Right Healthcare Support in Turkey</h2>
            </div>

            <p>
              Turkey has hospitals and medical specialists across a wide range of
              healthcare specialties. International patients can explore available
              healthcare options according to their medical requirements,
              specialist availability, hospital facilities and individual
              circumstances.
            </p>

            <p>
              Our team helps international patients coordinate the practical
              aspects of planning healthcare in Turkey, including hospital
              communication, specialist appointments, medical-report sharing and
              travel-related arrangements.
            </p>

            <div className="turkey-about-features">
              <div className="turkey-about-feature-item">
                <FaCheckCircle className="turkey-feature-icon" />
                <span>Hospital and specialist coordination</span>
              </div>
              <div className="turkey-about-feature-item">
                <FaCheckCircle className="turkey-feature-icon" />
                <span>Medical report sharing and appointment assistance</span>
              </div>
              <div className="turkey-about-feature-item">
                <FaCheckCircle className="turkey-feature-icon" />
                <span>Treatment information coordination</span>
              </div>
              <div className="turkey-about-feature-item">
                <FaCheckCircle className="turkey-feature-icon" />
                <span>Hospital and consultation scheduling</span>
              </div>
              <div className="turkey-about-feature-item">
                <FaCheckCircle className="turkey-feature-icon" />
                <span>Available cost information</span>
              </div>
              <div className="turkey-about-feature-item">
                <FaCheckCircle className="turkey-feature-icon" />
                <span>Travel and accommodation coordination</span>
              </div>
              <div className="turkey-about-feature-item">
                <FaCheckCircle className="turkey-feature-icon" />
                <span>Airport and local transfer assistance</span>
              </div>
              <div className="turkey-about-feature-item">
                <FaCheckCircle className="turkey-feature-icon" />
                <span>International patient support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 3 — WHY CHOOSE TURKEY FOR MEDICAL TREATMENT? ════ */}
      <section className="turkey-why-section">
        <div className="turkey-why-container">
          {/* Left Side - Content */}
          <div className="turkey-why-content">
            <div className="turkey-why-header">
              <h2>Why Choose Turkey for Medical Treatment?</h2>
            </div>

            <p>
              Turkey is considered by international patients seeking access to
              hospitals and specialists across multiple medical fields. Healthcare
              options vary by hospital, specialty and individual medical
              requirements.
            </p>

            <p>
              Hospitals in Turkey provide services across a range of medical and
              surgical specialties, allowing patients to explore care according to
              their healthcare requirements. With modern facilities and dedicated
              international patient departments, patients receive coordinated
              support for appointments, medical documentation, travel, and
              treatment planning.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="turkey-why-image">
            <img
              src={whyChooseTurkeyImage}
              alt="Medical treatment in Turkey for international patients"
              loading="lazy"
              width={500}
              height={750}
              decoding="async"
            />
          </div>
        </div>

        {/* Benefits Cards Grid */}
        <div className="turkey-benefits-grid">
          <div className="turkey-benefit-card">
            <div className="turkey-benefit-icon">
              <FaCheckCircle />
            </div>
            <h3>Healthcare Options Across Multiple Specialties</h3>
            <p>
              Hospitals in Turkey provide services across a range of medical and
              surgical specialties, allowing patients to explore care according to
              their healthcare requirements.
            </p>
          </div>

          <div className="turkey-benefit-card">
            <div className="turkey-benefit-icon">
              <FaCheckCircle />
            </div>
            <h3>Medical Specialists</h3>
            <p>
              Patients can explore specialist services across areas such as
              oncology, cardiology, orthopedics, neurology, gastroenterology,
              urology and other clinical departments.
            </p>
          </div>

          <div className="turkey-benefit-card">
            <div className="turkey-benefit-icon">
              <FaCheckCircle />
            </div>
            <h3>Hospital Facilities</h3>
            <p>
              Depending on the hospital, facilities may include diagnostic
              departments, imaging services, surgical units, intensive care
              services, rehabilitation and other clinical departments.
            </p>
          </div>

          <div className="turkey-benefit-card">
            <div className="turkey-benefit-icon">
              <FaCheckCircle />
            </div>
            <h3>International Patient Services</h3>
            <p>
              Many hospitals provide international-patient support for
              appointments, documentation, communication and other practical
              requirements.
            </p>
          </div>

          <div className="turkey-benefit-card">
            <div className="turkey-benefit-icon">
              <FaCheckCircle />
            </div>
            <h3>Medical Tourism Coordination</h3>
            <p>
              International patients can receive assistance with hospital
              coordination, accommodation, airport transfers, local
              transportation and other travel-related requirements.
            </p>
          </div>

          <div className="turkey-benefit-card">
            <div className="turkey-benefit-icon">
              <FaCheckCircle />
            </div>
            <h3>Treatment Cost Information</h3>
            <p>
              Healthcare costs vary according to the medical condition, treatment
              approach, hospital, specialist, investigations, procedures and
              duration of care.
            </p>
          </div>
        </div>
      </section>

      {/* ════ SECTION 4 — HOSPITALS IN TURKEY ════ */}
      <section className="hn-section">
        <div className="hn-container">
          <div className="hn-title-wrap">
            <span className="hn-label">Hospital Options</span>
            <h2 className="hn-heading">Best Hospitals in Turkey for International Patients</h2>
            <p className="hn-subtitle">
              Hospitals should be compared according to the medical specialty
              required, available facilities, specialist availability, location,
              international-patient services and the patient's individual healthcare
              needs.
            </p>
          </div>
          <div className="hn-grid">
            {HOSPITALS.map((h, i) => (
              <div className="hn-card" key={i}>
                <div
                  className="hn-card-photo"
                  style={{ backgroundImage: `url(${h.image})` }}
                >
                  <div className="hn-card-photo-overlay" />
                  <div className="hn-card-photo-content">
                    <div className="hn-card-icon">
                      <FaHospital />
                    </div>
                    <span className="hn-card-type-label">{h.type}</span>
                  </div>
                </div>

                <div className="hn-card-info">
                  <h3 className="hn-card-name">{h.name}</h3>
                  <p className="hn-card-location">
                    <FaMapMarkerAlt className="hn-card-location-icon" />
                    {h.locations}
                  </p>
                  <p className="hn-card-desc">{h.description}</p>

                  <div className="hn-card-tags">
                    {h.specialties.map((spec, j) => (
                      <span className="hn-tag" key={j}>
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div style={{ marginTop: "16px" }}>
                    <a
                      href={WA_URL}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.88rem",
                        fontWeight: "600",
                        color: "#0284c7",
                        textDecoration: "none",
                      }}
                    >
                      {h.cta || "View Hospital Details"}
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ SECTION 5 — TOP TREATMENTS & MEDICAL SPECIALTIES ════ */}
      <section className="ts-section">
        {/* Section Header */}
        <div className="ts-header">
          <div className="ts-header__label">Treatment Specialties</div>
          <h2 className="ts-header__title">
            Top Treatments & Medical Specialties in Turkey
          </h2>
          <p className="ts-header__sub">
            The specialty and treatment options below reflect common areas of care
            available in Turkey. Treatment plans are determined through
            professional clinical evaluation.
          </p>
        </div>

        {/* Cards */}
        <div className="ts-cards">
          {specialties.map((specialty) => (
            <TreatmentCard key={specialty.id} specialty={specialty} />
          ))}
        </div>
      </section>

      {/* ════ SECTION 6 — WHY PATIENTS CHOOSE MEDICAL TOURISM IN TURKEY ════ */}
      <section className="turkey-africa-section">
        <div className="turkey-africa-container">
          {/* Left Side - Image */}
          <div className="turkey-africa-image">
            <img
              src={whyPatientsChooseUsImage}
              alt="International patients receiving medical treatment in Turkey"
              loading="lazy"
              width={1920}
              height={1280}
              decoding="async"
            />
          </div>

          {/* Right Side - Content */}
          <div className="turkey-africa-content">
            <h2>Why Patients Choose Medical Tourism in Turkey</h2>

            <p style={{ marginBottom: "20px", color: "rgba(255,255,255,0.85)", lineHeight: "1.6" }}>
              International patients may consider Turkey based on access to
              hospitals and specialists, available healthcare specialties,
              international patient services, travel accessibility and the range of
              healthcare facilities available.
            </p>

            <div className="turkey-africa-list">
              <div className="turkey-africa-item">
                <div className="turkey-africa-check">
                  <FaCheck />
                </div>
                <p>Access to multiple medical specialties</p>
              </div>

              <div className="turkey-africa-item">
                <div className="turkey-africa-check">
                  <FaCheck />
                </div>
                <p>Hospital and specialist options</p>
              </div>

              <div className="turkey-africa-item">
                <div className="turkey-africa-check">
                  <FaCheck />
                </div>
                <p>International patient departments</p>
              </div>

              <div className="turkey-africa-item">
                <div className="turkey-africa-check">
                  <FaCheck />
                </div>
                <p>Medical consultation and appointment coordination</p>
              </div>

              <div className="turkey-africa-item">
                <div className="turkey-africa-check">
                  <FaCheck />
                </div>
                <p>Travel and accommodation support</p>
              </div>

              <div className="turkey-africa-item">
                <div className="turkey-africa-check">
                  <FaCheck />
                </div>
                <p>Hospital and local transportation assistance</p>
              </div>

              <div className="turkey-africa-item">
                <div className="turkey-africa-check">
                  <FaCheck />
                </div>
                <p>Treatment and cost information</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 7 — INTERNATIONAL MEDICAL TOURISM SERVICES ════ */}
      <section className="turkey-services-section">
        <div className="turkey-services-container">
          {/* Section Header */}
          <div className="turkey-services-header">
            <span className="turkey-services-badge">Coordination Services</span>
            <h2>International Medical Tourism Services</h2>

            <p className="turkey-services-description">
              Our international patient services are designed to help coordinate the
              non-clinical requirements involved in planning healthcare in Turkey.
            </p>
          </div>

          {/* Services Grid */}
          <div className="turkey-services-grid">
            {/* Service 1 */}
            <div className="turkey-service-card">
              <div className="turkey-service-icon-wrapper">
                <FaCalendarCheck className="turkey-service-icon" />
                <span className="turkey-service-number">01</span>
              </div>
              <h3>Hospital Appointment Assistance</h3>
              <p>
                Support with coordinating appointments with selected hospitals and
                departments.
              </p>
            </div>

            {/* Service 2 */}
            <div className="turkey-service-card">
              <div className="turkey-service-icon-wrapper">
                <FaClipboardList className="turkey-service-icon" />
                <span className="turkey-service-number">02</span>
              </div>
              <h3>Medical Report Coordination</h3>
              <p>
                Assistance with sharing relevant medical reports with the
                healthcare provider.
              </p>
            </div>

            {/* Service 3 */}
            <div className="turkey-service-card">
              <div className="turkey-service-icon-wrapper">
                <FaStethoscope className="turkey-service-icon" />
                <span className="turkey-service-number">03</span>
              </div>
              <h3>Specialist Consultation Coordination</h3>
              <p>
                Support with arranging consultations according to the patient's
                stated healthcare requirement.
              </p>
            </div>

            {/* Service 4 */}
            <div className="turkey-service-card">
              <div className="turkey-service-icon-wrapper">
                <FaHotel className="turkey-service-icon" />
                <span className="turkey-service-number">04</span>
              </div>
              <h3>Travel & Accommodation Assistance</h3>
              <p>
                Coordination support for accommodation, airport transfers and local
                transportation.
              </p>
            </div>

            {/* Service 5 */}
            <div className="turkey-service-card">
              <div className="turkey-service-icon-wrapper">
                <FaHospital className="turkey-service-icon" />
                <span className="turkey-service-number">05</span>
              </div>
              <h3>Hospital Admission Support</h3>
              <p>
                Practical coordination related to hospital admission and
                international-patient requirements.
              </p>
            </div>

            {/* Service 6 */}
            <div className="turkey-service-card">
              <div className="turkey-service-icon-wrapper">
                <FaLanguage className="turkey-service-icon" />
                <span className="turkey-service-number">06</span>
              </div>
              <h3>Communication Support</h3>
              <p>
                Assistance with communication between international patients and
                healthcare providers.
              </p>
            </div>

            {/* Service 7 */}
            <div className="turkey-service-card">
              <div className="turkey-service-icon-wrapper">
                <FaHeartbeat className="turkey-service-icon" />
                <span className="turkey-service-number">07</span>
              </div>
              <h3>Follow-Up Coordination</h3>
              <p>
                Support with future appointments and communication with the
                hospital when required.
              </p>
            </div>

            {/* Service 8 */}
            <div className="turkey-service-card">
              <div className="turkey-service-icon-wrapper">
                <FaUserMd className="turkey-service-icon" />
                <span className="turkey-service-number">08</span>
              </div>
              <h3>Second Medical Opinion Coordination</h3>
              <p>
                Assistance in coordinating another professional medical opinion when
                requested by the patient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 8 — PATIENT EXPERIENCES ════ */}
      <section className="general-reviews-section">
        <div className="general-reviews-content">
          <h2 className="general-reviews-heading">Our Patients' Experiences</h2>
          <p
            style={{
              maxWidth: "600px",
              margin: "0 0 24px 0",
              color: "#64748b",
              fontSize: "0.95rem",
              lineHeight: "1.5",
            }}
          >
            Every patient's healthcare experience is different. Genuine patient
            feedback can help visitors understand the service experience, but
            individual testimonials should not be presented as a guarantee of
            medical outcomes.
          </p>

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
                      {r.name && (
                        <p
                          className="general-reviews-card-name"
                          style={{
                            marginTop: "12px",
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            color: "#0f172a",
                          }}
                        >
                          {r.name}
                        </p>
                      )}
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
            alt="International patient feedback for healthcare in Turkey"
            className="general-reviews-image"
            width={1200}
            height={800}
            decoding="async"
          />
        </div>
      </section>

      {/* ════ SECTION 9 — WHY CHOOSE HUMAN CARE MEDICAL TOURISM ════ */}
      <section className="turkey-why-choose-section">
        <div className="turkey-why-choose-container">
          {/* Left Side - Content */}
          <div className="turkey-why-choose-content">
            <h2>Why Choose Human Care Medical Tourism?</h2>

            <p>
              Human Care Medical Tourism supports international patients with the
              practical coordination required when planning healthcare in Turkey.
            </p>

            <p>
              From exploring hospital options and scheduling specialist
              consultations to assisting with medical reports, travel, and
              accommodation, our dedicated team provides organized support
              throughout the non-clinical process.
            </p>
            <div className="turkey-why-choose-image">
              <img
                src={whyHumancareImage}
                alt="Human Care Medical Tourism - Support for international patients in Turkey"
                loading="lazy"
                width={740}
                height={493}
                decoding="async"
              />
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="turkey-why-choose-features">
            <h3>Our Support Highlights</h3>

            <div className="turkey-why-choose-grid">
              <div className="turkey-why-choose-item">
                <div className="turkey-why-choose-icon">
                  <FaHospital />
                </div>
                <h4>Hospital Coordination</h4>
                <p>
                  Assistance with exploring hospital options based on the stated
                  healthcare requirement.
                </p>
              </div>

              <div className="turkey-why-choose-item">
                <div className="turkey-why-choose-icon">
                  <FaUserMd />
                </div>
                <h4>Specialist Appointment Support</h4>
                <p>
                  Coordination assistance for consultations with relevant healthcare
                  professionals.
                </p>
              </div>

              <div className="turkey-why-choose-item">
                <div className="turkey-why-choose-icon">
                  <FaPassport />
                </div>
                <h4>International Patient Assistance</h4>
                <p>
                  Support with practical requirements for patients travelling to
                  Turkey.
                </p>
              </div>

              <div className="turkey-why-choose-item">
                <div className="turkey-why-choose-icon">
                  <FaGlobe />
                </div>
                <h4>Travel Coordination</h4>
                <p>
                  Assistance with accommodation, airport transfers and local
                  transportation.
                </p>
              </div>

              <div className="turkey-why-choose-item">
                <div className="turkey-why-choose-icon">
                  <FaLanguage />
                </div>
                <h4>Clear Communication</h4>
                <p>
                  Support with communication between patients and healthcare
                  providers.
                </p>
              </div>

              <div className="turkey-why-choose-item">
                <div className="turkey-why-choose-icon">
                  <FaCalendarCheck />
                </div>
                <h4>Follow-Up Assistance</h4>
                <p>
                  Coordination support for future hospital appointments when
                  required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 10 — FAQ SECTION ════ */}
      <section className="general-faq-section" aria-labelledby="faq-heading">
        <div className="general-faq-container">
          {/* Section Header */}
          <div className="general-faq-header">
            <span className="general-faq-badge">
              Frequently Asked Questions
            </span>
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

      {/* ════ SECTION 11 — FINAL CTA SECTION ════ */}
      <section className="general-cta-section">
        {/* Background Image */}
        <img
          src={ctaImage}
          alt="International patient support for healthcare in Turkey"
          className="general-cta-bg-image"
          loading="lazy"
          width={740}
          height={493}
          decoding="async"
        />

        {/* Gradient Overlay */}
        <div className="general-cta-overlay" />

        {/* Content Container */}
        <div className="general-cta-container">
          <div className="general-cta-content">
            <span className="general-cta-badge">
              Hospital & Healthcare Assistance
            </span>

            <h2 className="general-cta-title">
              Get Expert Medical Treatment Support in Turkey
            </h2>

            <p className="general-cta-subtitle">
              Get assistance with hospital options, specialist appointment
              coordination, treatment information, estimated costs, travel
              arrangements and international patient services.
            </p>

            <div className="general-cta-benefits-list">
              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>Hospital and specialist coordination</span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>Treatment information and available cost estimates</span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>
                  Travel, accommodation and airport transfer coordination
                </span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>
                  Dedicated non-clinical international patient support
                </span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>
                  Support with communication between patients and healthcare providers
                </span>
              </div>
            </div>

            <div className="general-hero-ctas">
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-wa whatsapp-glow"
              >
                <WA size={5} /> Get Hospital Assistance
              </a>

              <a href="tel:+919833166697" className="btn-outline">
                <FaPhoneAlt /> Speak With Our Team
              </a>
            </div>

            <p
              style={{
                marginTop: "24px",
                fontSize: "0.82rem",
                opacity: 0.8,
                lineHeight: "1.5",
                maxWidth: "700px",
              }}
            >
              Medical disclaimer: Healthcare information is provided for general
              informational purposes. Diagnosis, treatment suitability, expected
              outcomes, duration and final cost vary according to individual
              circumstances and should be discussed with a qualified healthcare
              professional.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default TurkeyLandingPage;
