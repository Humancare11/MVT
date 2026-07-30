import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./SaudiEgypt.css";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
  FaPassport,
  FaPlane,
  FaHotel,
  FaLanguage,
  FaUserMd,
  FaVideo,
  FaHeartbeat,
  FaCheck,
  FaPlus,
  FaStar,
  FaHospital,
  FaMapMarkerAlt,
} from "react-icons/fa";

import heroImage from "../departments/dept-images/saudi-cairo/best-private-hospital-cairo-egypt.webp";

import aboutImage1 from "../departments/dept-images/saudi-cairo/advanced-medical-treatment-egypt.webp";
import aboutImage2 from "../departments/dept-images/saudi-cairo/medical-tourism-turkey-services.webp";

import whyPatientAfricaImage from "../departments/dept-images/saudi-cairo/international-patient-treatment-egypt.webp";

import aboutSaudiGermanImage from "../departments/dept-images/saudi-cairo/saudi-german-hospital-cairo.webp";

import SaudiGermanImage from "../assets/hospitals/saudi-german-hospital-cairo.webp";
import CleopatraGroupImage from "../assets/hospitals/cleopatra-group-cairo-egypt.webp";
import AsselMedicalImage from "../assets/hospitals/aseel-medical-care-hospital-hurghada-egypt.webp";

import ctaImage from "../departments/dept-images/saudi-cairo/medical-treatment-egypt-consultation.webp";

import reviewsImage from "../departments/dept-images/general-category/best-reviews-for-international-treatment.webp";

const WA_URL = "https://wa.me/919833166697";

const WA = ({ size = 5 }) => (
  <FaWhatsapp className={`icon-wa icon-wa--${size}`} />
);
const Check = () => <FaCheck className="icon-check" />;

// Stars Component
const Stars = () => (
  <div className="cancer-reviews-stars">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className="cancer-reviews-star" />
    ))}
  </div>
);

const reviews = [
  {
    text: "I came to Cairo from Kenya for heart surgery and was amazed by the care I received at German Saudi Hospital. The doctors were highly skilled, the facilities were modern, and the support team guided us through every step. Today, I feel healthier and grateful for their excellent treatment.",
    name: "Patient from Kenya",
  },
  {
    text: "After struggling to find affordable cancer treatment in my home country, I found hope in Egypt. The oncology team at German Saudi Hospital provided advanced treatment with compassion and professionalism. The entire process from consultation to recovery was smooth and well-organized.",
    name: "Patient from Nigeria",
  },
  {
    text: "I traveled from Uganda for orthopedic surgery at German Saudi Hospital Cairo. The medical team was experienced, the hospital was equipped with the latest technology, and I received personal attention throughout my stay. I can now walk without pain and live a normal life again.",
  },
  {
    text: "We came to Cairo for fertility treatment after years of disappointment. The IVF specialists at German Saudi Hospital were understanding, supportive, and highly professional. We are now expecting our first child and couldn't be more grateful for their care and expertise.",
  },
  {
    text: "The quality of medical care in Cairo exceeded my expectations. From the moment I arrived at the airport to my discharge from the hospital, everything was arranged professionally. The doctors explained everything clearly, and I felt safe throughout my entire treatment journey in Egypt.",
  },
];

const HOSPITALS = [
  {
    name: "Saudi German Hospital",
    image: SaudiGermanImage,
    type: "Multi-Speciality Hospital",
    locations: "Alexandria, Cairo",
    description:
      "Saudi German Hospital is a well-established healthcare provider known for delivering comprehensive medical services through advanced facilities and experienced specialists. The hospital offers expert care across multiple specialties, including cardiology, oncology, orthopedics, neurology, and general surgery. Supported by modern diagnostic technology and patient-focused treatment plans, Saudi German Hospital is committed to high clinical standards and quality healthcare outcomes. Its multidisciplinary approach and dedicated patient services make it a preferred destination for specialized medical care.",
    specialties: [
      "Cardiology",
      "Oncology",
      "Orthopedics",
      "Neurology",
      "General Surgery",
      "More",
    ],
  },

  {
    name: "Cleopatra Hospital",
    image: CleopatraGroupImage,
    type: "Multi-Speciality Hospital",
    locations: "Giza, Beni Suef, New Cairo (Tagamoa)",
    description:
      "Cleopatra Hospital is one of Egypt’s leading healthcare institutions, providing advanced medical services through modern facilities and a team of highly qualified specialists. The hospital offers comprehensive care across cardiology, oncology, orthopedics, neurology, and critical care, supported by advanced diagnostic and treatment technologies. Known for its commitment to patient safety, clinical excellence, and personalized healthcare solutions, Cleopatra Hospital serves both local and international patients seeking high-quality medical care in Cairo.",
    specialties: [
      "Cardiology",
      "Oncology",
      "Orthopedics",
      "Neurosurgery",
      "General Surgery",
    ],
  },

  {
    name: "Aseel Medical Care Hospital",
    image: AsselMedicalImage,
    type: "Multi-Speciality Hospital",
    locations: "Cairo, Egypt",
    description:
      "Aseel Medical Centre is a trusted healthcare facility dedicated to providing comprehensive medical services through experienced specialists and modern healthcare practices. The center offers personalized care across multiple specialties, including family medicine, internal medicine, pediatrics, women's health, and preventive healthcare. With a focus on patient well-being, advanced diagnostic support, and quality treatment outcomes, Aseel Medical Centre serves as a reliable destination for individuals and families seeking accessible and professional healthcare services.",
    specialties: [
      "Family Medicine",
      "Internal Medicine",
      "Pediatrics",
      "Women's Health",
      "Preventive Care",
      "More",
    ],
  },
];

const faqData = [
  {
    id: 1,
    question: "Is German Saudi Hospital Cairo good for international patients?",
    answer:
      "Yes, German Saudi Hospital Cairo is a preferred healthcare destination for international patients seeking advanced medical treatment in Egypt. The hospital offers experienced specialists, modern medical facilities, international patient support, and personalized healthcare services for patients traveling from Kenya, Uganda, Tanzania, Nigeria, South Sudan, and other countries.",
  },
  {
    id: 2,
    question: "What treatments are available at SGH Cairo?",
    answer:
      "SGH Cairo provides a wide range of medical treatments including cardiology, cancer treatment, orthopedic surgery, neurology, fertility treatment, gastroenterology, urology, cosmetic surgery, dental care, and advanced diagnostic services.",
  },
  {
    id: 3,
    question: "How much does treatment cost in Egypt?",
    answer:
      "Treatment costs in Egypt are generally more affordable compared to Europe and Gulf countries. The total cost depends on the medical condition, treatment type, hospital stay, and doctor recommendations. Patients can contact the hospital for a personalized treatment cost estimate.",
  },
  {
    id: 4,
    question: " Do doctors at Saudi German Hospital Cairo speak English?",
    answer:
      "Yes, many doctors, specialists, and international patient coordinators at Saudi German Hospital Cairo communicate in English to support international patients throughout their treatment journey.",
  },
  {
    id: 5,
    question: "Is Cairo safe for medical tourists?",
    answer:
      "Cairo is one of the leading destinations for medical tourism in Egypt and welcomes thousands of international patients every year. Hospitals and accommodation facilities provide dedicated support services to help patients travel and receive treatment comfortably and safely.",
  },
  {
    id: 6,
    question: "Does the hospital provide visa and travel assistance?",
    answer:
      "Yes, the international patient services team assists patients with medical visa guidance, appointment scheduling, airport pickup, accommodation support, and travel-related coordination for a smoother medical journey to Cairo.",
  },
];

const SaudiEgypt = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  // Generate slides (2 reviews per slide)
  const slides = [];
  for (let i = 0; i < reviews.length; i += 2) {
    slides.push(reviews.slice(i, i + 2));
  }

  const totalSlides = slides.length;

  // Slider functions
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
      </Helmet>
      {/* ════ SECTION 1 — HERO ════ */}
      <section className="saudi-hero-section">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="German Saudi Hospital Cairo for international patients in Egypt"
          className="saudi-hero-bg-image"
          loading="eager"
        />

        {/* Gradient Overlay */}
        <div className="saudi-hero-overlay" />

        {/* Content */}
        <div className="saudi-hero-content">
          <span className="saudi-hero-badge">
            Trusted by 50,000+ International Patients
          </span>

          <h1>
            German Saudi Hospital Cairo – Advanced Medical Treatment in Egypt
            for International Patients
          </h1>

          <p>
            Looking for affordable and advanced healthcare in Egypt?{" "}
            <strong>German Saudi Hospital Cairo</strong> is trusted by
            international patients from Kenya, Uganda, Tanzania, Nigeria, and
            South Sudan for high-quality medical treatment, experienced
            specialists, and modern healthcare facilities. As one of the{" "}
            <strong>best private hospitals in Cairo Egypt,</strong> Saudi German
            Cairo offers personalized patient care, advanced medical technology,
            and dedicated international patient support to make your treatment
            journey safe, comfortable, and stress-free.
          </p>

          <div className="saudi-hero-features">
            <ul>
              <li>Affordable Treatment Packages in Egypt</li>
              <li>Experienced Doctors & Multispecialty Care</li>
              <li>International Patient Assistance</li>
              <li>Advanced Medical Technology & Modern Facilities</li>
              <li>Easy Medical Travel Support from Africa to Cairo</li>
            </ul>
          </div>

          <p>
            Trusted by patients searching for the{" "}
            <strong>best hospitals in Egypt Cairo </strong>
            and comprehensive treatment services at SGH Cairo.
          </p>

          <div className="saudi-hero-ctas">
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
      <section className="saudi-about-section">
        <div className="saudi-about-container">
          {/* Left Side - Images */}
          <div className="saudi-about-images">
            <div className="saudi-about-image-wrapper">
              <img
                src={aboutImage1}
                alt="Advanced medical treatment hospital in Cairo Egypt"
                loading="lazy"
              />
            </div>
            <div className="saudi-about-image-wrapper">
              <img
                src={aboutImage2}
                alt="Medical tourism services in Cairo Egypt for African patients"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="saudi-about-content">
            <div className="saudi-about-header">
              <span className="saudi-about-subtitle">
                Trusted Medical Tourism Partner
              </span>
              <h2>
                Advanced Healthcare Excellence for International Patients in
                Cairo
              </h2>
            </div>

            <p>
              <strong>At German Saudi Hospital Cairo,</strong> we are committed
              to delivering high-quality healthcare services with compassion,
              innovation, and international medical standards. As one of the
              preferred destinations for medical tourism in Egypt, the hospital
              provides advanced treatment solutions for patients traveling from
              Kenya, Uganda, Tanzania, Nigeria, South Sudan, and other African
              countries. Our goal is to make every patient feel confident,
              comfortable, and supported throughout their medical journey in
              Cairo.
            </p>

            <p>
              With modern healthcare infrastructure, experienced specialists,
              advanced diagnostic technologies, and patient-focused care, Saudi
              German Cairo continues to build trust among international patients
              seeking safe and affordable treatment abroad. From initial
              consultation and treatment planning to recovery and follow-up
              support, our medical teams and international coordinators work
              together to provide personalized healthcare experiences designed
              around each patient’s unique medical needs.
            </p>

            <p>
              The hospital combines advanced medical expertise with
              compassionate patient care across multiple specialties including
              cardiology, oncology, orthopedics, neurology, fertility treatment,
              gastroenterology, cosmetic surgery, and critical care services.
              Every treatment plan is designed to support better outcomes,
              faster recovery, and a smoother healthcare experience for patients
              and their families.
            </p>

            <div className="saudi-about-features">
              <div className="saudi-about-feature-item">
                <FaCheckCircle className="saudi-feature-icon" />
                <span>Advanced Multispecialty Healthcare Services</span>
              </div>
              <div className="saudi-about-feature-item">
                <FaCheckCircle className="turkey-feature-icon" />
                <span>
                  Experienced Doctors & International Medical Standards
                </span>
              </div>
              <div className="saudi-about-feature-item">
                <FaCheckCircle className="saudi-feature-icon" />
                <span>Modern ICU, Emergency & Diagnostic Facilities</span>
              </div>
              <div className="saudi-about-feature-item">
                <FaCheckCircle className="turkey-feature-icon" />
                <span>
                  Affordable Treatment Options for International Patients
                </span>
              </div>
              <div className="saudi-about-feature-item">
                <FaCheckCircle className="saudi-feature-icon" />
                <span>
                  Dedicated Support for Medical Travel & Patient Assistance
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 3 — WHY CHOOSE ════ */}
      <section className="saudi-why-choose-section">
        <div className="saudi-why-choose-container">
          <div className="saudi-why-choose-header">
            <h2 className="saudi-why-choose-title">
              Why Choose German Saudi Hospital Cairo for Medical Treatment in
              Egypt?
            </h2>
            <p className="saudi-why-choose-description">
              German Saudi Hospital Cairo is recognized among the best private
              hospitals in Cairo Egypt, offering world-class healthcare services
              for local and international patients. With advanced medical
              technology, internationally trained specialists, and
              patient-centered care, Saudi German Cairo provides high-quality
              treatment across multiple specialties at affordable costs.
              Patients from Kenya, Uganda, Tanzania, Nigeria, and South Sudan
              trust the hospital for safe, modern, and accessible healthcare in
              Egypt.
            </p>
          </div>

          <div className="saudi-why-choose-grid">
            <div className="saudi-why-choose-card">
              <div className="saudi-why-choose-number">1</div>
              <h3>Advanced Medical Infrastructure</h3>
              <p>
                Modern operation theaters, advanced ICUs, digital diagnostic
                systems, and internationally maintained healthcare facilities
                make SGH Cairo one of the best hospitals in Egypt Cairo for
                advanced medical treatment.
              </p>
            </div>

            <div className="saudi-why-choose-card">
              <div className="saudi-why-choose-number">2</div>
              <h3>Experienced Doctors & Surgeons</h3>
              <p>
                Saudi German Cairo is home to highly qualified doctors,
                surgeons, and specialists with expertise in cardiology,
                oncology, orthopedics, neurology, fertility care, and many other
                medical fields.
              </p>
            </div>

            <div className="saudi-why-choose-card">
              <div className="saudi-why-choose-number">3</div>
              <h3>Multispecialty Healthcare Services</h3>
              <p>
                From routine health checkups to complex surgeries, German Saudi
                Hospital Cairo offers comprehensive treatment solutions under
                one roof with specialized departments and personalized care
                plans.
              </p>
            </div>

            <div className="saudi-why-choose-card">
              <div className="saudi-why-choose-number">4</div>
              <h3>Affordable Treatment in Egypt</h3>
              <p>
                Patients can access high-quality medical treatment at
                significantly lower costs compared to Europe and Gulf countries,
                making Cairo a preferred destination for affordable healthcare.
              </p>
            </div>

            <div className="saudi-why-choose-card">
              <div className="saudi-why-choose-number">5</div>
              <h3>International Patient Support</h3>
              <p>
                Dedicated international patient coordinators assist with medical
                visas, appointment scheduling, airport pickup, accommodation
                support, language assistance, and post-treatment follow-up care.
              </p>
            </div>

            <div className="saudi-why-choose-card">
              <div className="saudi-why-choose-number">6</div>
              <h3>Advanced Diagnostic Technology</h3>
              <p>
                Saudi German Cairo uses modern imaging systems, laboratory
                technologies, and precision diagnostic equipment to support
                accurate diagnosis and effective treatment planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 4 — AFRICA TRUST ════ */}
      <section className="saudi-africa-trust-section">
        <div className="saudi-africa-trust-container">
          <div className="saudi-africa-trust-header">
            <h2 className="saudi-africa-trust-title">
              Why Patients from Africa Trust Cairo for Advanced Medical
              Treatment
            </h2>
            <p className="saudi-africa-trust-description">
              Patients from Kenya, Uganda, Tanzania, Nigeria, and South Sudan
              are increasingly choosing Cairo for affordable and high-quality
              healthcare services. With modern hospitals, experienced
              specialists, shorter waiting times, and dedicated international
              patient support, Cairo has become a trusted destination for
              families seeking advanced medical treatment abroad. Hospitals like
              German Saudi Hospital Cairo provide compassionate care, advanced
              technology, and personalized treatment plans designed to support
              international patients throughout their medical journey.
            </p>
          </div>

          <div className="saudi-africa-trust-content">
            {/* Left Side - Image */}
            <div className="saudi-africa-trust-image">
              <img
                src={whyPatientAfricaImage}
                alt="African international patients receiving advanced medical treatment in Cairo Egypt"
                loading="lazy"
              />
            </div>

            {/* Right Side - Points */}
            <div className="saudi-africa-trust-points">
              <div className="saudi-trust-point">
                <div className="saudi-trust-point-number">1</div>
                <div className="saudi-trust-point-content">
                  <h3>Shorter Waiting Times</h3>
                  <p>
                    Many patients travel to Cairo to avoid long treatment delays
                    and receive faster access to specialist consultations,
                    diagnostic tests, surgeries, and advanced medical
                    procedures.
                  </p>
                </div>
              </div>

              <div className="saudi-trust-point">
                <div className="saudi-trust-point-number">2</div>
                <div className="saudi-trust-point-content">
                  <h3>Affordable Treatment Packages</h3>
                  <p>
                    Compared to Europe and Gulf countries, Egypt offers
                    cost-effective healthcare solutions without compromising on
                    quality, helping families manage treatment expenses more
                    comfortably.
                  </p>
                </div>
              </div>

              <div className="saudi-trust-point">
                <div className="saudi-trust-point-number">3</div>
                <div className="saudi-trust-point-content">
                  <h3>Modern Hospitals & Advanced Technology</h3>
                  <p>
                    Cairo is home to some of the best hospitals in Egypt Cairo,
                    equipped with advanced diagnostic systems, modern operation
                    theaters, specialized ICUs, and internationally maintained
                    healthcare facilities.
                  </p>
                </div>
              </div>

              <div className="saudi-trust-point">
                <div className="saudi-trust-point-number">4</div>
                <div className="saudi-trust-point-content">
                  <h3>Arabic & English-Speaking Support</h3>
                  <p>
                    International patients benefit from multilingual support
                    teams, including Arabic and English-speaking coordinators
                    who help make communication easier and treatment experiences
                    more comfortable.
                  </p>
                </div>
              </div>

              <div className="saudi-trust-point">
                <div className="saudi-trust-point-number">5</div>
                <div className="saudi-trust-point-content">
                  <h3>Easy Travel & Medical Visa Assistance</h3>
                  <p>
                    Patients from Kenya, Uganda, Tanzania, Nigeria, and South
                    Sudan can access convenient travel routes to Cairo with
                    assistance for medical visas, airport pickup, accommodation,
                    and appointment scheduling.
                  </p>
                </div>
              </div>

              <div className="saudi-trust-point">
                <div className="saudi-trust-point-number">6</div>
                <div className="saudi-trust-point-content">
                  <h3>Personalized Care for International Patients</h3>
                  <p>
                    Hospitals in Cairo focus on patient-centered healthcare,
                    offering individualized treatment plans, dedicated
                    coordinators, and continuous support for patients and their
                    families during every stage of treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 5 — INTERNATIONAL PATIENT SERVICES ════ */}
      <section className="saudi-services-section">
        <div className="saudi-services-container">
          <div className="saudi-services-header">
            <h2 className="saudi-services-title">
              International Patient Services for Safe & Comfortable Treatment in
              Cairo Egypt
            </h2>
            <p className="saudi-services-description">
              At German Saudi Hospital Cairo, international patients receive
              complete medical travel support from the moment they plan their
              journey until they safely return home. Our dedicated team helps
              patients from Kenya, Uganda, Tanzania, Nigeria, and South Sudan
              access advanced healthcare services with comfort, convenience, and
              personalized assistance. As part of growing medical tourism in
              Egypt, we focus on delivering smooth and stress-free healthcare
              experiences for patients seeking quality treatment in Cairo Egypt.
            </p>
          </div>

          <div className="saudi-services-grid">
            <div className="saudi-service-card">
              <div className="saudi-service-icon">
                <FaPassport />
              </div>
              <h3>Medical Visa Assistance</h3>
              <p>
                Our international patient team helps guide patients through the
                medical visa process by providing appointment documents,
                treatment invitations, and travel-related support for easier
                entry into Egypt.
              </p>
            </div>

            <div className="saudi-service-card">
              <div className="saudi-service-icon">
                <FaPlane />
              </div>
              <h3>Airport Pickup & Transportation</h3>
              <p>
                To ensure a comfortable arrival experience, patients can receive
                airport pickup assistance along with local transportation
                support between the hospital, hotel, and accommodation
                facilities.
              </p>
            </div>

            <div className="saudi-service-card">
              <div className="saudi-service-icon">
                <FaHotel />
              </div>
              <h3>Hotel & Accommodation Support</h3>
              <p>
                We help international patients and their families find suitable
                hotels, serviced apartments, and nearby accommodations based on
                comfort, budget, and treatment duration.
              </p>
            </div>

            <div className="saudi-service-card">
              <div className="saudi-service-icon">
                <FaLanguage />
              </div>
              <h3>Translator & Language Assistance</h3>
              <p>
                Arabic and English-speaking support staff help international
                patients communicate comfortably with doctors, hospital teams,
                and coordinators during their medical journey.
              </p>
            </div>

            <div className="saudi-service-card">
              <div className="saudi-service-icon">
                <FaVideo />
              </div>
              <h3>Online Doctor Consultation</h3>
              <p>
                Patients can connect with specialists through online
                consultations before traveling to Egypt to discuss medical
                conditions, review reports, and understand treatment options in
                advance.
              </p>
            </div>

            <div className="saudi-service-card">
              <div className="saudi-service-icon">
                <FaHeartbeat />
              </div>
              <h3>Follow-Up Care After Returning Home</h3>
              <p>
                Our support continues even after treatment. Patients receive
                follow-up consultation guidance, recovery support, and
                communication assistance after returning to their home country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 6 — ABOUT HOSPITAL PARALLAX ════ */}
      <section
        className="saudi-about-parallax-section"
        style={{ backgroundImage: `url(${aboutSaudiGermanImage})` }}
      >
        <div className="saudi-parallax-overlay"></div>
        <div className="saudi-parallax-content">
          <div className="saudi-parallax-container">
            <h2 className="saudi-parallax-title">
              About Saudi German Hospital Cairo – Trusted Healthcare Excellence
              in Egypt
            </h2>
            <p className="saudi-parallax-text ">
              Saudi German Hospital Cairo is one of the leading hospitals in
              Egypt, known for providing advanced medical care, modern treatment
              facilities, and patient-focused healthcare services. As part of
              the trusted Saudi German Hospitals network, the hospital offers
              world-class healthcare through experienced specialists, advanced
              technologies, and compassionate patient support. Located in Cairo,
              it is a preferred destination for international patients from
              Kenya, Uganda, Tanzania, Nigeria, South Sudan, and other African
              countries seeking affordable and high-quality medical treatment
              abroad. The hospital specializes in cardiology, oncology,
              orthopedics, neurology, fertility care, gastroenterology, urology,
              cosmetic surgery, and critical care. Equipped with modern ICUs,
              advanced operation theaters, diagnostic labs, and imaging
              technologies, the hospital ensures safe and effective treatment.
              Saudi German Hospital Cairo also provides dedicated international
              patient services, including medical travel assistance, language
              support, online consultations, accommodation guidance, and
              follow-up care, making medical tourism in Egypt comfortable and
              convenient.
            </p>
          </div>
        </div>
      </section>

      {/* ════ SECTION 7 — HOSPITAL NETWORK ════ */}
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

      {/* ════ SECTION 8 — Client Reviews ════ */}
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
            src={reviewsImage}
            alt="International patient reviews and success stories at German Saudi Hospital Cairo"
            className="general-reviews-image"
          />
        </div>
      </section>

      {/* ════ SECTION 9 — FAQ ════ */}
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

      {/* ════ SECTION 10 — CTA ════ */}
      <section className="general-cta-section">
        {/* Background Image */}
        <img
          src={ctaImage}
          alt="Medical consultation and international patient support at German Saudi Hospital Cairo"
          className="general-cta-bg-image"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="general-cta-overlay" />

        {/* Content Container */}
        <div className="general-cta-container">
          <div className="general-cta-content">
            <span className="general-cta-badge">
              Get Expert Medical Care at German Saudi Hospital Cairo
            </span>

            <h2 className="general-cta-title">
              Advanced treatment, experienced specialists, and dedicated
              international patient support for patients traveling from Africa
              to Egypt.
            </h2>

            <p className="general-cta-subtitle">
              Take the first step toward safe, affordable, and advanced medical
              treatment in Cairo Egypt. Our international patient team is ready
              to assist you with doctor consultations, treatment planning,
              medical travel guidance, and personalized healthcare support.
              Whether you are seeking a second opinion, surgery, or specialized
              treatment, Saudi German Hospital Cairo is committed to providing
              compassionate care and a smooth medical journey for you and your
              family.
            </p>

            <div className="general-cta-benefits-list">
              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>
                  Get Free Medical Opinion from Experienced Specialists
                </span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>Send Your Medical Reports for Quick Evaluation</span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>Dedicated International Patient Coordinators</span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>Fast Response & Confidential Consultation Support</span>
              </div>

              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>
                  Affordable Treatment Plans for International Patients
                </span>
              </div>
              <div className="general-cta-benefit-point">
                <FaCheckCircle className="general-cta-check-icon" />
                <span>
                  Assistance with Medical Visa, Travel & Accommodation
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
};

export default SaudiEgypt;
