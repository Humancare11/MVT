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
const Check = () => <FaCheck className="icon-check" />;

const WA_URL =
  "https://wa.me/919833166697?text=Hello%2C%20I%20am%20looking%20for%20medical%20treatment%20in%20Turkey";

const HOSPITALS = [
  {
    name: "Liv Hospital",
    image: livHospitalImage,
    type: "Multi-Speciality Hospital",
    locations: "Ankara, Gaziantep, Samsun",
    description:
      "Liv Hospital is one of the top hospitals in Turkey, known for delivering high-quality healthcare to patients from around the world. Located in Istanbul and other major Turkish cities, the hospital offers comprehensive treatments including cancer care, heart surgery, orthopedics, neurology, Women's Health, and organ transplantation. Its international patient services, experienced medical teams, and advanced technology have made Liv Hospital a preferred choice for medical tourism in Turkey.",
    specialties: [
      "Cardiology",
      "Oncology",
      "Orthopedics",
      "Organ Transplant",
      " Specialized Healthcare",
    ],
  },

  {
    name: "Güven Hospital",
    image: guvenHospitalImage,
    type: "Multi-Speciality Hospital",
    locations: "Location available on request",
    description:
      "Güven Hospital is a renowned healthcare institution in Ankara, offering advanced medical care across multiple specialties. The hospital is recognized for its experienced specialists, modern medical technology, and comprehensive treatment programs. International patients choose Güven Hospital for cardiology, oncology, orthopedics, neurology, and surgical procedures. Its patient-centered approach, high clinical standards, and dedicated international patient services make it a trusted destination for medical treatment in Turkey.",
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
      "Medical Park Hospital is one of Turkey’s leading healthcare providers, offering comprehensive medical services through its network of modern hospitals. Known for advanced diagnostics, specialized treatments, and experienced medical professionals, the hospital serves both local and international patients. Medical Park Hospital provides expert care in oncology, cardiology, orthopedics, neurology, and organ transplantation. Its commitment to quality healthcare, innovative technology, and international patient support has made it a preferred choice for medical treatment in Turkey.",
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
    locations: "Istanbul",
    description:
      "Istinye Dental Hospital is a trusted destination for advanced dental care in Turkey, providing comprehensive oral health services for local and international patients. The hospital specializes in dental implants, cosmetic dentistry, orthodontics, oral surgery, and restorative treatments using modern technology and personalized care plans. With experienced dental specialists and a patient-focused approach, Istinye Dental Hospital is recognized for delivering high-quality dental treatment in Turkey while supporting the growing demand for dental tourism and smile transformation procedures.",
    specialties: [
      "Dental Implants",
      "Cosmetic Dentistry",
      "Orthodontics",
      "Oral Surgery",
      "Restorative Dentistry",
      "More",
    ],
  },

  {
    name: "Memorial Health Group",
    image: memorialHealthImage,
    type: "Multi-Speciality Hospital",
    locations: "Ankara, Antalya, Kayseri, Diyarbakir, Mugla",
    description:
      "Memorial Health Group is one of the most recognized healthcare organizations in Turkey, offering advanced medical services through its network of modern hospitals and specialized medical centers. The group is known for excellence in oncology, organ transplantation, cardiology, neurosurgery, and robotic surgery. With internationally trained specialists, cutting-edge medical technology, and dedicated international patient services, Memorial Health Group attracts patients seeking high-quality medical treatment in Turkey and comprehensive healthcare solutions.",
    specialties: [
      "Oncology",
      "Organ Transplant",
      "Cardiology",
      "Orthopedics",
      "Robotic Surgery",
      "More",
    ],
  },
];

const specialties = [
  {
    id: 1,
    sectionTag: "Cardiology & Heart Care",
    title:
      "Advanced cardiac treatment in Turkey with experienced heart specialists and modern heart care technology.",
    description:
      "Turkey offers advanced cardiology and heart surgery services through internationally accredited hospitals equipped with modern cardiac technology and highly experienced specialists. Patients traveling for heart treatment in Turkey benefit from affordable procedures, shorter waiting times, and personalized international patient support.",
    treatments: [
      "Coronary Artery Bypass Surgery (CABG)",
      "Heart Valve Replacement",
      "Angiography & Angioplasty",
      "Pacemaker Implantation",
      "Pediatric Heart Surgery",
      "Minimally Invasive Cardiac Surgery",
    ],
    ctaLabel: "Talk to Heart Specialist",
    image: cardiologyImage,
    imageAlt: "Advanced Cardiology treatment in Turkey",
    reversed: false,
  },
  {
    id: 2,
    sectionTag: "Cancer Treatment & Oncology",
    title:
      "Comprehensive cancer care with advanced oncology treatments and specialized cancer hospitals in Turkey.",
    description:
      "Turkey has become a leading destination for cancer treatment, offering modern oncology centers, experienced cancer specialists, and advanced technologies such as robotic surgery, radiation therapy, and targeted treatment. International patients receive personalized treatment plans and complete support throughout their recovery journey.",
    treatments: [
      "Chemotherapy",
      "Radiation Therapy",
      "Bone Marrow Transplant",
      "Immunotherapy",
      "Surgical Oncology",
      "Robotic Cancer Surgery",
      "Breast Cancer Treatment",
    ],
    ctaLabel: "Talk to Oncology Specialist",
    image: oncologyImage,
    imageAlt: "Advanced Oncology treatment in Turkey",
    reversed: true,
  },
  {
    id: 3,
    sectionTag: "Organ Transplant Treatment",
    title:
      "Advanced organ transplant procedures with internationally experienced transplant specialists in Turkey.",
    description:
      "Leading transplant hospitals in Turkey provide advanced organ transplant services using modern surgical technology and specialized intensive care support. Patients receive expert care before, during, and after surgery through dedicated international patient departments.",
    treatments: [
      "Kidney Transplant",
      "Liver Transplant",
      "Bone Marrow Transplant",
      "Pediatric Organ Transplant",
      "Living Donor Transplant",
      "Post-Transplant Care",
    ],
    ctaLabel: "Talk to Orthopedic Specialist",
    image: organTransplantImage,
    imageAlt: "Organ transplant treatment",
    reversed: false,
  },
  {
    id: 4,
    sectionTag: "Orthopedic & Spine Surgery",
    title:
      "Modern orthopedic treatment in Turkey for joint pain, mobility problems, and sports injuries.",
    description:
      "Turkey is known for advanced orthopedic surgery and rehabilitation programs supported by experienced surgeons and modern medical technology. Patients benefit from affordable procedures, minimally invasive techniques, and personalized recovery care.",
    treatments: [
      "Knee Replacement Surgery",
      "Hip Replacement Surgery",
      "Spine Surgery",
      "ACL Reconstruction",
      "Shoulder Replacement",
      "Sports Injury Treatment",
    ],
    ctaLabel: "Talk to Orthopedic Specialist",
    image: kneeReplacementImage,
    imageAlt: "Knee replacement treatment",
    reversed: true,
  },
  {
    id: 5,
    sectionTag: "Neurosurgery & Neurology",
    title:
      "Specialized neurological treatment with advanced brain and spine surgery facilities in Turkey.",
    description:
      "Hospitals in Turkey provide advanced neurosurgery and neurology care using high-precision diagnostic systems and minimally invasive surgical techniques. International patients receive treatment for complex neurological conditions with expert monitoring and rehabilitation support.",
    treatments: [
      "Brain Tumor Surgery",
      "Spine Tumor Surgery",
      "Epilepsy Treatment",
      "Stroke Management",
      "Deep Brain Stimulation (DBS)",
      "Minimally Invasive Neurosurgery",
    ],
    ctaLabel: "Talk to Neuro Specialist",
    image: neurologyImage,
    imageAlt: "Advanced Neurology treatment in Turkey",
    reversed: false,
  },
  {
    id: 7,
    sectionTag: "Cosmetic & Plastic Surgery",
    title:
      "Modern cosmetic surgery procedures in Turkey with experienced plastic surgeons and advanced techniques.",
    description:
      "Turkey is internationally recognized for cosmetic and plastic surgery, attracting patients seeking high-quality procedures at affordable costs. Leading hospitals and cosmetic centers offer advanced surgical techniques, personalized consultations, and comfortable recovery support.",
    treatments: [
      "Rhinoplasty (Nose Surgery)",
      "Hair Transplant",
      "Liposuction",
      "Facelift Surgery",
      "Breast Surgery",
      "Tummy Tuck Surgery",
    ],
    ctaLabel: "Talk to Cosmetic Specialist",
    image: cosmeticSurgeryImage,
    imageAlt: "Advanced Cosmetic Surgery treatment in Turkey",
    reversed: true,
  },
  {
    id: 8,
    sectionTag: "Eye Surgery & Vision Care",
    title:
      "Advanced eye treatment and vision correction procedures with modern ophthalmology technology in Turkey.",
    description:
      "Turkey provides high-quality eye care and vision correction procedures through advanced ophthalmology centers and experienced eye specialists. International patients benefit from modern laser technologies, affordable treatment costs, and comprehensive recovery support.",
    treatments: [
      "LASIK Eye Surgery",
      "Cataract Surgery",
      "Retina Treatment",
      "Glaucoma Treatment",
      "Corneal Transplant",
      "Pediatric Eye Treatment",
    ],
    ctaLabel: "Talk to Eye Specialist",
    image: eyeSurgeryImage,
    imageAlt: "Advanced Eye Surgery treatment in Turkey",
    reversed: false,
  },
  {
    id: 9,
    sectionTag: "Dental Treatment & Smile Restoration",
    title:
      "Affordable dental treatment in Turkey with advanced dental technology and cosmetic dentistry solutions.",
    description:
      "Turkey has become one of the leading destinations for dental treatment, offering modern dental clinics, experienced dentists, and internationally recognized cosmetic dentistry procedures. Patients receive personalized dental care with advanced technology and affordable treatment packages.",
    treatments: [
      "Dental Implants",
      "Smile Makeover",
      "Dental Veneers",
      "Teeth Whitening",
      "Full Mouth Rehabilitation",
      "Orthodontic Treatment",
    ],
    ctaLabel: "Talk to Dental Specialist",
    image: dentalImage,
    imageAlt: "Advanced Dental Treatment in Turkey",
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
    text: "After months of searching for affordable heart surgery, we finally found hope in Turkey. The doctors were experienced, the hospital was modern, and the support team helped us throughout the journey. Today, my father is recovering well and living a healthier life.!",
    name: "Patient from Kenya",
  },
  {
    text: "I traveled from Nigeria for cancer treatment in Turkey and was surprised by how fast everything was arranged. From airport pickup to hospital appointments, the entire process was smooth and professional. The doctors explained every step clearly and treated me with great care.",
    name: "Patient from Nigeria",
  },
  {
    text: "My knee pain had made it difficult to walk for years. After my knee replacement surgery in Istanbul, I can finally move comfortably again. The hospital facilities were excellent, and the recovery support was better than we expected.",
  },
  {
    text: "We came to Turkey for neurology treatment after many years of trying to start a family. The medical team was supportive, kind, and highly experienced. We truly felt cared for throughout the entire treatment journey.",
  },
  {
    text: "The medical treatment in Turkey was affordable compared to other countries, but the quality of care was exceptional. The doctors, translators, and coordinators made us feel safe and supported from the first day until discharge.",
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
    question:
      "Which is the best hospital in Turkey for international patients?",
    answer:
      "Turkey has many internationally recognized hospitals offering advanced treatment across cardiology, oncology, orthopedics, neurology, and cosmetic surgery. The best hospital in Turkey depends on the patient’s medical condition, treatment requirements, and specialist availability.",
  },
  {
    id: 2,
    question: "Is medical treatment in Turkey affordable?",
    answer:
      "Yes, medical treatment in Turkey is often more affordable compared to Europe, the USA, and many other countries while maintaining high healthcare standards and advanced medical technology.",
  },
  {
    id: 3,
    question: "Are hospitals in Istanbul internationally accredited?",
    answer:
      "Many top hospitals in Istanbul are internationally accredited and follow global healthcare standards with advanced technology, experienced doctors, and dedicated international patient departments.",
  },
  {
    id: 4,
    question: "How much does surgery cost in Turkey?",
    answer:
      "The cost of surgery in Turkey depends on the type of treatment, hospital, surgeon experience, and duration of stay. However, many patients choose Turkey because treatments are significantly more cost-effective compared to Western countries.",
  },
  {
    id: 5,
    question: "Is Turkey safe for medical tourism?",
    answer:
      "Turkey is considered one of the most trusted destinations for medical tourism, with modern hospitals, experienced specialists, and organized support services for international patients traveling for treatment.",
  },
  {
    id: 6,
    question:
      "Do Turkish hospitals provide translators for international patients?",
    answer:
      "Yes, many hospitals in Turkey provide translators and international patient coordinators to help patients communicate comfortably with doctors and medical staff.",
  },
  {
    id: 7,
    question: "How long does it take to get a medical visa for Turkey?",
    answer:
      "Medical visa processing times may vary depending on the country and documentation, but many patients receive assistance with invitation letters and visa guidance to simplify the process.",
  },
  {
    id: 8,
    question: "Which surgeries and treatments are popular in Turkey?",
    answer:
      "Turkey is widely known for heart surgery, cancer treatment, orthopedic surgery, neurology treatment, cosmetic surgery, dental treatment, eye surgery, and organ transplantation.",
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

  // Truncate description helper
  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

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
          Best Hospital in Turkey | Affordable Medical Treatment for
          International Patients
        </title>

        <meta
          name="description"
          content="Get advanced medical treatment in Turkey with internationally accredited hospitals, experienced specialists, and affordable healthcare solutions. Trusted medical tourism Turkey services for patients from Kenya, Uganda, Tanzania, Nigeria, and South Sudan."
        />

        <meta
          name="keywords"
          content="
            best hospital in turkey,
            istanbul best hospital,
            top hospitals in istanbul,
            medical tourism turkey,
            turkish medical tourism,
            turkey treatments,
            top hospitals in turkey,
            best hospital in istanbul turkey,
            medical treatment in turkey,
            turkey best hospital,
            top 10 hospitals in istanbul,
            turkey surgeries,
            affordable treatment in turkey,
            international patient treatment turkey,
            healthcare in turkey,
            hospitals in turkey for international patients
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
          content="Best Hospital in Turkey | Affordable Medical Treatment"
        />

        <meta
          property="og:description"
          content="Affordable medical treatment in Turkey with experienced specialists, modern hospitals, and personalized care for international patients."
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
          content="Best Hospital in Turkey | Medical Tourism Turkey"
        />

        <meta
          name="twitter:description"
          content="Get affordable medical treatment in Turkey with internationally accredited hospitals and experienced specialists."
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
            Trusted by 50,000+ International Patients
          </span>

          <h1>Best Hospital in Turkey for International Patients</h1>

          <p>
            Get advanced medical treatment in Turkey with internationally
            accredited hospitals, experienced specialists, and affordable
            healthcare solutions. Humancare World Wide helps patients from
            Kenya, Uganda, Tanzania, Nigeria, and South Sudan connect with top
            hospitals in Istanbul for trusted treatment and personalized care.
          </p>

          <div className="turkey-hero-features">
            <ul>
              <li>International Patient Support</li>
              <li>Advanced Treatment Technology</li>
              <li>Affordable Medical Care</li>
              <li>Top Hospitals in Istanbul</li>
              <li>Personalized Treatment Assistance</li>
            </ul>
          </div>

          <div className="turkey-hero-ctas">
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

      {/* ════ SECTION 2 — ABOUT HEALTHCARE ════ */}
      <section className="turkey-about-section">
        <div className="turkey-about-container">
          {/* Left Side - Images */}
          <div className="turkey-about-images">
            <div className="turkey-about-image-wrapper">
              <img
                src={aboutImage1}
                alt="Modern hospital in Istanbul Turkey for international patients"
                loading="lazy"
        width={1920}
        height={1080}
        decoding="async"
      />
            </div>
            <div className="turkey-about-image-wrapper">
              <img
                src={aboutImage2}
                alt="Medical treatment in Turkey for African patients"
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
                Trusted Medical Tourism Partner
              </span>
              <h2>Affordable & Advanced Healthcare Solutions in Turkey</h2>
            </div>

            <p>
              Finding the right hospital in another country can feel
              overwhelming, especially when your health or your loved one's
              treatment is involved. At <strong>Humancare World Wide</strong>,
              we help patients from Kenya, Uganda, Tanzania, Nigeria, and South
              Sudan access advanced medical treatment in Turkey with confidence
              and peace of mind. From connecting you with the best hospital in
              Turkey to arranging appointments, travel assistance, and treatment
              coordination, our team supports you throughout every stage of your
              medical journey.
            </p>

            <p>
              Turkey is globally recognized for its modern healthcare system,
              internationally accredited hospitals, and highly experienced
              specialists across cardiology, oncology, orthopedics, neurology,
              cosmetic surgery, and many other specialties. Through our trusted
              hospital network in Istanbul and other leading medical cities,
              international patients can receive world-class treatment at
              affordable costs without long waiting periods. Our goal is to make
              medical tourism in Turkey simpler, safer, and more comfortable for
              every patient and family we assist.
            </p>

            <div className="turkey-about-features">
              <div className="turkey-about-feature-item">
                <FaCheckCircle className="turkey-feature-icon" />
                <span>
                  Access to top hospitals in Istanbul and internationally
                  trained specialists
                </span>
              </div>
              <div className="turkey-about-feature-item">
                <FaCheckCircle className="turkey-feature-icon" />
                <span>
                  Personalized treatment guidance and fast appointment
                  scheduling
                </span>
              </div>
              <div className="turkey-about-feature-item">
                <FaCheckCircle className="turkey-feature-icon" />
                <span>
                  Support for medical visas, travel arrangements, and
                  accommodation
                </span>
              </div>
              <div className="turkey-about-feature-item">
                <FaCheckCircle className="turkey-feature-icon" />
                <span>
                  Affordable treatment packages with advanced healthcare
                  technology
                </span>
              </div>
              <div className="turkey-about-feature-item">
                <FaCheckCircle className="turkey-feature-icon" />
                <span>
                  Dedicated assistance for patients from Africa throughout the
                  treatment journey
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 3 — WHY CHOOSE TURKEY ════ */}
      <section className="turkey-why-section">
        <div className="turkey-why-container">
          {/* Left Side - Content */}
          <div className="turkey-why-content">
            <div className="turkey-why-header">
              <h2>Why Choose Turkey for Medical Treatment?</h2>
            </div>

            <p>
              Turkey has emerged as one of the world's fastest-growing
              destinations for international healthcare, attracting thousands of
              patients every year who are seeking high-quality treatment at
              affordable costs. For many families from Kenya, Uganda, Tanzania,
              Nigeria, and South Sudan, accessing advanced healthcare locally
              can sometimes involve long waiting periods, limited treatment
              options, or extremely high expenses abroad. Medical treatment in
              Turkey offers a trusted alternative with internationally
              accredited hospitals, experienced specialists, and modern
              healthcare technology across a wide range of specialties.
            </p>

            <p>
              From complex heart surgeries and cancer treatment to orthopedic
              procedures, neurology, dental care, and cosmetic surgery, Turkish
              medical tourism continues to grow because patients can receive
              world-class care without the financial burden often associated
              with treatment in Europe or the United States. Hospitals in
              Istanbul and other leading Turkish cities are equipped with
              advanced diagnostic systems, robotic surgery technology, modern
              intensive care units, and dedicated international patient
              departments designed to support overseas patients throughout their
              medical journey.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="turkey-why-image">
            <img
              src={whyChooseTurkeyImage}
              alt="Why international patients choose Turkey for medical treatment"
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
            <h3>Affordable Treatment Without Compromising Quality</h3>
            <p>
              Turkey treatments are significantly more affordable compared to
              many Western countries while still maintaining high international
              healthcare standards.
            </p>
          </div>

          <div className="turkey-benefit-card">
            <div className="turkey-benefit-icon">
              <FaCheckCircle />
            </div>
            <h3>Access to Internationally Accredited Hospitals</h3>
            <p>
              Many top hospitals in Turkey follow global healthcare standards
              and offer advanced infrastructure, modern operation theaters, and
              specialized treatment centers.
            </p>
          </div>

          <div className="turkey-benefit-card">
            <div className="turkey-benefit-icon">
              <FaCheckCircle />
            </div>
            <h3>Experienced Specialists Across Multiple Medical Fields</h3>
            <p>
              Turkey is home to internationally trained doctors and surgeons
              with expertise in cardiology, oncology, orthopedics, Women's Health
              treatment, neurology, and more.
            </p>
          </div>

          <div className="turkey-benefit-card">
            <div className="turkey-benefit-icon">
              <FaCheckCircle />
            </div>
            <h3>Faster Appointments & Shorter Waiting Times</h3>
            <p>
              Patients can often begin consultations, diagnostics, and surgeries
              much faster compared to long waiting lists in many countries.
            </p>
          </div>

          <div className="turkey-benefit-card">
            <div className="turkey-benefit-icon">
              <FaCheckCircle />
            </div>
            <h3>Comfortable Experience for International Patients</h3>
            <p>
              From airport pickup and hotel arrangements to translators and
              personalized treatment coordination, medical tourism Turkey
              services are designed to make the journey smooth and stress-free
              for international patients and their families.
            </p>
          </div>
          <div className="turkey-benefit-card">
            <div className="turkey-benefit-icon">
              <FaCheckCircle />
            </div>
            <h3>Personalized Support for African Patients</h3>
            <p>
              Hospitals and medical tourism providers in Turkey offer dedicated
              international patient services, including English-speaking
              coordinators, cultural assistance, halal food options, and
              personalized care designed to help patients from Kenya, Uganda,
              Tanzania, Nigeria, and South Sudan feel comfortable throughout
              their treatment journey.
            </p>
          </div>
        </div>
      </section>

      {/* ════ SECTION 5 — Our Hospital Network ════ */}
      <section className="hn-section">
        <div className="hn-container">
          <div className="hn-title-wrap">
            <span className="hn-label">Our Hospital Network</span>
            <h2 className="hn-heading">Best Hospitals in Turkey</h2>
            <p className="hn-subtitle">
              Turkey is home to internationally accredited hospitals offering
              advanced treatment, experienced specialists, and personalized care
              for international patients seeking affordable medical treatment in
              Turkey.
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ SECTION 6 — Treatment Specialties ════ */}
      <section className="ts-section">
        {/* Section Header */}
        <div className="ts-header">
          <div className="ts-header__label">Treatment Specialties</div>
          <h2 className="ts-header__title">
            Top Treatments & Surgeries in Turkey
          </h2>
          <p className="ts-header__sub">
            Explore advanced medical treatment in Turkey with experienced
            specialists, modern technology, affordable costs, and personalized
            patient care.
          </p>
        </div>

        {/* Cards */}
        <div className="ts-cards">
          {specialties.map((specialty) => (
            <TreatmentCard key={specialty.id} specialty={specialty} />
          ))}
        </div>
      </section>

      {/* ════ SECTION 4 — Why Patients from Africa Prefer Turkey ════ */}
      <section className="turkey-africa-section">
        <div className="turkey-africa-container">
          {/* Left Side - Image */}
          <div className="turkey-africa-image">
            <img
              src={whyPatientsChooseUsImage}
              alt="African patients receiving medical treatment in Turkey"
              loading="lazy"
        width={1920}
        height={1280}
        decoding="async"
      />
          </div>

          {/* Right Side - Content */}
          <div className="turkey-africa-content">
            <h2>Why Patients from Africa Prefer Turkey</h2>

            <div className="turkey-africa-list">
              <div className="turkey-africa-item">
                <div className="turkey-africa-check">
                  <FaCheck />
                </div>
                <p>
                  Affordable medical treatment packages compared to Europe and
                  many other countries
                </p>
              </div>

              <div className="turkey-africa-item">
                <div className="turkey-africa-check">
                  <FaCheck />
                </div>
                <p>
                  Faster appointments and shorter waiting times for surgeries
                  and specialist consultations
                </p>
              </div>

              <div className="turkey-africa-item">
                <div className="turkey-africa-check">
                  <FaCheck />
                </div>
                <p>
                  International patient coordinators who communicate in English
                  and assist throughout the journey
                </p>
              </div>

              <div className="turkey-africa-item">
                <div className="turkey-africa-check">
                  <FaCheck />
                </div>
                <p>
                  Assistance with medical visa applications, travel planning,
                  and hospital appointments
                </p>
              </div>

              <div className="turkey-africa-item">
                <div className="turkey-africa-check">
                  <FaCheck />
                </div>
                <p>
                  Comfortable accommodation, airport pickup, and personalized
                  support for international patients
                </p>
              </div>

              <div className="turkey-africa-item">
                <div className="turkey-africa-check">
                  <FaCheck />
                </div>
                <p>
                  Availability of halal food options and culturally comfortable
                  environments for African families
                </p>
              </div>

              <div className="turkey-africa-item">
                <div className="turkey-africa-check">
                  <FaCheck />
                </div>
                <p>
                  Access to advanced hospitals in Turkey with experienced
                  specialists and modern medical technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 5 — Our Medical Tourism Services ════ */}
      <section className="turkey-services-section">
        <div className="turkey-services-container">
          {/* Section Header */}
          <div className="turkey-services-header">
            <span className="turkey-services-badge">Our Services</span>
            <h2>Our Medical Tourism Services</h2>

            <p className="turkey-services-description">
              At Humancare World Wide, we provide personalized support for
              patients traveling for medical treatment in Turkey. From your
              first consultation to your recovery journey, our team helps make
              Turkish medical tourism simple, comfortable, and stress-free for
              patients and families from Kenya, Uganda, Tanzania, Nigeria, and
              South Sudan. We work closely with top hospitals in Turkey to
              ensure patients receive quality healthcare, transparent guidance,
              and complete travel assistance throughout their treatment journey.
            </p>
          </div>

          {/* Services Grid */}
          <div className="turkey-services-grid">
            {/* Service 1 */}
            <div className="turkey-service-card">
              <div className="turkey-service-icon-wrapper">
                <FaStethoscope className="turkey-service-icon" />
                <span className="turkey-service-number">01</span>
              </div>
              <h3>Online Medical Consultation</h3>
              <p>
                Share your medical reports and receive expert opinions from
                experienced specialists before traveling to Turkey.
              </p>
            </div>

            {/* Service 2 */}
            <div className="turkey-service-card">
              <div className="turkey-service-icon-wrapper">
                <FaPassport className="turkey-service-icon" />
                <span className="turkey-service-number">02</span>
              </div>
              <h3>Medical Visa Assistance</h3>
              <p>
                Our team helps patients with medical visa documentation,
                invitation letters, and travel guidance for a smoother process.
              </p>
            </div>

            {/* Service 3 */}
            <div className="turkey-service-card">
              <div className="turkey-service-icon-wrapper">
                <FaPlane className="turkey-service-icon" />
                <span className="turkey-service-number">03</span>
              </div>
              <h3>Flight & Travel Support</h3>
              <p>
                We assist with flight planning and travel coordination to help
                patients and accompanying family members travel comfortably.
              </p>
            </div>

            {/* Service 4 */}
            <div className="turkey-service-card">
              <div className="turkey-service-icon-wrapper">
                <FaCar className="turkey-service-icon" />
                <span className="turkey-service-number">04</span>
              </div>
              <h3>Airport Pickup Services</h3>
              <p>
                Dedicated airport pickup and transportation support are arranged
                for international patients arriving in Turkey.
              </p>
            </div>

            {/* Service 5 */}
            <div className="turkey-service-card">
              <div className="turkey-service-icon-wrapper">
                <FaHotel className="turkey-service-icon" />
                <span className="turkey-service-number">05</span>
              </div>
              <h3>Hotel & Accommodation Arrangements</h3>
              <p>
                We help organize comfortable accommodation near hospitals for
                patients and their families during treatment and recovery.
              </p>
            </div>

            {/* Service 6 */}
            <div className="turkey-service-card">
              <div className="turkey-service-icon-wrapper">
                <FaLanguage className="turkey-service-icon" />
                <span className="turkey-service-number">06</span>
              </div>
              <h3>Translator & Language Assistance</h3>
              <p>
                Professional coordinators and translators help patients
                communicate easily with doctors and hospital staff.
              </p>
            </div>

            {/* Service 7 */}
            <div className="turkey-service-card">
              <div className="turkey-service-icon-wrapper">
                <FaCalendarCheck className="turkey-service-icon" />
                <span className="turkey-service-number">07</span>
              </div>
              <h3>Treatment Coordination</h3>
              <p>
                From hospital appointments to surgery scheduling and medical
                documentation, we manage the complete treatment process.
              </p>
            </div>

            {/* Service 8 */}
            <div className="turkey-service-card">
              <div className="turkey-service-icon-wrapper">
                <FaHeartbeat className="turkey-service-icon" />
                <span className="turkey-service-number">08</span>
              </div>
              <h3>Post-Treatment Follow-Up Care</h3>
              <p>
                Our support continues even after treatment with follow-up
                coordination, medical updates, and recovery guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 6 — Client Reviews ════ */}
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
            alt="International patient testimonial for medical treatment in Turkey"
            className="general-reviews-image"
        width={1200}
        height={800}
        decoding="async"
      />
        </div>
      </section>

      {/* ════ SECTION 7 — Why Choose Humancare World Wide ════ */}
      <section className="turkey-why-choose-section">
        <div className="turkey-why-choose-container">
          {/* Left Side - Content */}
          <div className="turkey-why-choose-content">
            <h2>Why Choose Humancare World Wide?</h2>

            <p>
              At Humancare World Wide, we understand that traveling abroad for
              medical treatment can feel challenging for patients and their
              families. Our goal is to make the entire medical journey simple,
              transparent, and stress-free by helping international patients
              connect with trusted hospitals and experienced specialists in
              Turkey. From the first consultation to post-treatment follow-up,
              our dedicated team provides complete assistance at every stage of
              the treatment process.
            </p>

            <p>
              We work closely with leading hospitals in Turkey to help patients
              access advanced healthcare, affordable treatment packages, and
              personalized medical support based on their healthcare needs.
              Whether you are seeking heart surgery, cancer treatment,
              orthopedic procedures, neurology, cosmetic surgery, or specialized
              medical care, our experienced coordinators ensure smooth
              communication, fast appointment scheduling, and complete travel
              support throughout your journey.
            </p>
            <div className="turkey-why-choose-image">
              <img
                src={whyHumancareImage}
                alt="Humancare World Wide - Medical tourism support for international patients"
                loading="lazy"
        width={740}
        height={493}
        decoding="async"
      />
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="turkey-why-choose-features">
            <h3>What Makes Us Different</h3>

            <div className="turkey-why-choose-grid">
              <div className="turkey-why-choose-item">
                <div className="turkey-why-choose-icon">
                  <FaUserMd />
                </div>
                <p>
                  Personalized guidance and treatment planning for every patient
                </p>
              </div>

              <div className="turkey-why-choose-item">
                <div className="turkey-why-choose-icon">
                  <FaHandshake />
                </div>
                <p>
                  Partnerships with trusted hospitals and experienced
                  specialists in Turkey
                </p>
              </div>

              <div className="turkey-why-choose-item">
                <div className="turkey-why-choose-icon">
                  <FaDollarSign />
                </div>
                <p>Affordable treatment packages with transparent support</p>
              </div>

              <div className="turkey-why-choose-item">
                <div className="turkey-why-choose-icon">
                  <FaHeadset />
                </div>
                <p>24/7 assistance for international patients and families</p>
              </div>

              <div className="turkey-why-choose-item">
                <div className="turkey-why-choose-icon">
                  <FaClipboardList />
                </div>
                <p>Complete coordination from consultation to recovery</p>
              </div>

              <div className="turkey-why-choose-item">
                <div className="turkey-why-choose-icon">
                  <FaGlobe />
                </div>
                <p>
                  Support with medical visas, travel, accommodation, and
                  hospital appointments
                </p>
              </div>

              <div className="turkey-why-choose-item">
                <div className="turkey-why-choose-icon">
                  <FaUsers />
                </div>
                <p>
                  Dedicated care coordinators for patients from Kenya, Uganda,
                  Tanzania, Nigeria, and South Sudan
                </p>
              </div>
            </div>
          </div>
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
          alt="International patient support for treatment in Turkey"
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
              Start Your Medical Journey to Turkey Today
            </span>

            <h2 className="general-cta-title">
              Get Expert Medical Treatment Without Long Waiting Times
            </h2>

            <p className="general-cta-subtitle">
              Receive personalized support, advanced healthcare access, and
              affordable treatment options from trusted hospitals in Turkey. Our
              team helps patients from Kenya, Uganda, Tanzania, Nigeria, and
              South Sudan connect with experienced specialists and
              internationally accredited hospitals for safe and comfortable
              medical care.
            </p>

            <div className="general-cta-benefits-list">
              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>Fast response from dedicated medical coordinators</span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>Confidential consultation and secure medical review</span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>
                  Complete support for international patients and families
                </span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>
                  Assistance with travel, visas, and hospital appointments
                </span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>
                  Personalized guidance throughout the treatment journey
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

export default TurkeyLandingPage;
