import React from "react";
import "./medical-tourism-india.css";
import aboutImg from "../assets/about/about.webp";
import AboutImage from "../assets/about/medical-tourism-about-image.webp";
import WhyChoose from "../assets/about/why-choose-image.webp";
import apolloLogo from "../assets/hospitals/apollo.webp";
import fortisLogo from "../assets/hospitals/fortis.webp";
import medantaLogo from "../assets/hospitals/medanta.webp";
import manipalLogo from "../assets/hospitals/manipal.webp";
import narayanaLogo from "../assets/hospitals/narayana.webp";
import kokilabenLogo from "../assets/hospitals/kokilaben.webp";
import hcgLogo from "../assets/hospitals/hcg.webp";
import nanavatiLogo from "../assets/hospitals/nanavati.webp";
import {
  FaMicrochip,
  FaUserMd,
  FaHeart,
  FaStethoscope,
  FaHospital,
  FaPassport,
  FaPlane,
  FaCarAlt,
  FaCertificate,
  FaChartLine,
  FaDollarSign,
  FaLanguage,
  FaHandshake,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaComments,
} from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";

function MedicalTourismIndia() {
  return (
    <>
      {/* MEDICAL TOURISM HERO SECTION START */}
      <section className="medical-tourism-hero">
        <div className="medical-tourism-hero-content">
          <span className="medical-tourism-badge">MEDICAL TOURISM INDIA</span>
          <h1>World-Class Treatment in India at the Best Hospitals in India</h1>
          <p>
            Treatment in India offers world-class healthcare solutions for
            international patients seeking trusted and affordable medical care.
            With access to some of the best hospitals in India, internationally
            trained doctors, and advanced medical technology, patients receive
            high-quality treatment across a wide range of specialties. From
            complex heart surgeries and comprehensive cancer care to organ
            transplants and orthopedic procedures, treatment in India combines
            medical excellence, modern infrastructure, and cost-effective
            options, all while maintaining high standards of safety and
            successful outcomes.
          </p>
        </div>
      </section>
      {/* MEDICAL TOURISM HERO SECTION END */}

      {/* MEDICAL TOURISM ABOUT-US SECTION START */}
      <section className="medical-tourism-about">
        <div className="container">
          <div className="about-text">
            <h2 className="title">
              About India
              <span className="accent">Medical Tourism Services</span>
            </h2>
            <p className="subtitle">
              Your Reliable Partner for Treatment in India
            </p>

            <p>
              Choosing treatment abroad is a major decision. Our mission is to
              make your journey to India simple, transparent, and stress-free.
            </p>

            <p>
              Over the years, India has become one of the most preferred
              destinations for medical travelers due to its strong healthcare
              system and affordable treatment options. At Humancare, we connect
              international patients with the{" "}
              <strong>best hospitals in India,</strong> ensuring access to
              experienced specialists, advanced infrastructure, and personalized
              care.
            </p>
            <p>
              There are thousands of hospitals in India, but not all offer the
              same level of expertise and support for international patients. We
              carefully select accredited, reputable hospitals that maintain
              global standards of quality and patient safety.
            </p>

            <p>
              From your first consultation to your post-treatment recovery, we
              guide you at every step. Our goal is not only to help you find the
              right hospital, but to help you feel confident and supported
              throughout your entire treatment journey in India.
            </p>

            <a href="/about" className="read-more">
              Read More
            </a>
          </div>

          <div className="about-image">
            <img src={AboutImage} alt="Apollo Gleneagles Hospitals, Kolkata" />
          </div>
        </div>
      </section>
      {/* MEDICAL TOURISM ABOUT-US SECTION END */}

      {/* SERVICES CARDS SECTION START */}
        <section className="services-section">
          <div className="services-container">
            <div className="services-intro">
              <h2>Our Medical Tourism Services</h2>
              <p>
                We offer comprehensive, end-to-end assistance for international
                patients traveling for treatment in India. From the initial
                medical consultation and selecting the right hospital to arranging
                travel, accommodation, and post-treatment follow-up, our team
                manages every detail to ensure a seamless and stress-free
                experience. By partnering with some of the best hospitals in
                India, we connect you with experienced specialists, clear
                treatment plans, and cost-effective healthcare options. Our
                mission is to make your medical journey to India smooth, secure,
                and fully supported at every stage.
              </p>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <FaStethoscope size={30} />
                </div>
                <h3>Medical Consultation</h3>
                <p>
                  Receive expert opinions and a detailed treatment plan and cost
                  estimate within 24–48 hours by sharing your medical reports.
                </p>
                <a href="/services" className="service-cta">
                  Learn More
                </a>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <FaHospital size={30} />
                </div>
                <h3>Doctor & Hospital Selection</h3>
                <p>
                  We help you choose accredited hospitals and specialists based on
                  condition, budget and location preference.
                </p>
                <a href="/services" className="service-cta">
                  Learn More
                </a>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <FaPassport size={30} />
                </div>
                <h3>Medical Visa Assistance</h3>
                <p>
                  Assistance with visa documentation, hospital invitation letters
                  and embassy coordination for a smooth travel experience.
                </p>
                <a href="/services" className="service-cta">
                  Learn More
                </a>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <FaPlane size={30} />
                </div>
                <h3>Travel & Accommodation Support</h3>
                <p>
                  Flight booking and comfortable hotels near the hospital for a
                  convenient, stress-free stay.
                </p>
                <a href="/services" className="service-cta">
                  Learn More
                </a>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <FaCarAlt size={30} />
                </div>
                <h3>Airport Pickup & Local Coordination</h3>
                <p>
                  24/7 airport pickup, transfers, language assistance and local
                  support throughout your stay in India.
                </p>
                <a href="/services" className="service-cta">
                  Learn More
                </a>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <FaHeart size={30} />
                </div>
                <h3>Post-Treatment Follow-Up</h3>
                <p>
                  Ongoing recovery guidance and follow-up consultations after you
                  return home to ensure a smooth recovery.
                </p>
                <a href="/services" className="service-cta">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      {/* SERVICES CARDS SECTION END */}

      {/* WHY CHOOSE INDIA SECTION START */}
      <section className="why-choose">
        <div className="why-container">
          <div className="why-image">
            <img src={WhyChoose} alt="Doctor with patient" />
          </div>

          <div className="why-content">
            <h2>Why Choose Treatment in India?</h2>
            <p className="lead">
              India combines world-class medical expertise with affordable
              treatment and fast access to care — making it a smart choice for
              many international patients.
            </p>

            <div className="features">
              <div className="feature">
                <div className="feature-icon green">
                  <FaMicrochip size={20} />
                </div>
                <div className="feature-body">
                  <h4>Advanced Medical Technology & Infrastructure</h4>
                  <p>
                    Many top hospitals in India use robotic surgery, advanced
                    imaging, minimally invasive units and modern intensive care
                    facilities following globally recognized protocols.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon blue">
                  <FaUserMd size={20} />
                </div>
                <div className="feature-body">
                  <h4>Internationally Trained Doctors</h4>
                  <p>
                    Experienced specialists who trained and practiced
                    internationally provide expert care across cardiology,
                    oncology, neurology and orthopedics.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon red">
                  <BiRupee size={20} />
                </div>
                <div className="feature-body">
                  <h4>Affordable Yet High-Quality Care</h4>
                  <p>
                    Procedures in India are significantly more affordable
                    compared to the US, UK, and Europe, while maintaining
                    comparable safety standards and successful clinical
                    outcomes.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon purple">
                  <AiOutlineClockCircle size={20} />
                </div>
                <div className="feature-body">
                  <h4>Minimal Waiting Time</h4>
                  <p>
                    Hospitals in India typically offer timely diagnosis and
                    faster scheduling for major procedures compared with long
                    waiting lists elsewhere.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon teal">
                  <FaHeart size={18} />
                </div>
                <div className="feature-body">
                  <h4>Personalized Patient Care</h4>
                  <p>
                    Emphasis on patient comfort, clear communication and family
                    involvement ensures emotional and clinical support through
                    recovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WHY CHOOSE INDIA SECTION END */}

      {/* WHY TRUST INDIA SECTION START */}
      <section className="trust-section">
        <div className="trust-container">
          <div className="trust-header">
            <h2>Why International Patients Trust Hospitals in India</h2>
            <p>
              Thousands of patients from around the world choose India for
              medical treatment every year. Here's why they trust our healthcare
              system.
            </p>
          </div>

          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-icon">
                <FaCertificate size={24} />
              </div>
              <h3>International Accreditations</h3>
              <p>
                Many leading hospitals in India are accredited by recognized
                healthcare authorities, ensuring international safety and
                quality standards.
              </p>
            </div>

            <div className="trust-card">
              <div className="trust-icon">
                <FaChartLine size={24} />
              </div>
              <h3>High Success Rates</h3>
              <p>
                Whether cardiac bypass, joint replacement, cancer therapy, or
                organ transplant, the best hospitals in India report excellent
                clinical outcomes.
              </p>
            </div>

            <div className="trust-card">
              <div className="trust-icon">
                <FaDollarSign size={24} />
              </div>
              <h3>Transparent Pricing</h3>
              <p>
                Before beginning treatment in India, patients receive a clear
                cost breakdown. No hidden charges, no surprises.
              </p>
            </div>

            <div className="trust-card">
              <div className="trust-icon">
                <FaLanguage size={24} />
              </div>
              <h3>English-Speaking Medical Staff</h3>
              <p>
                Communication is easy and comfortable for international
                patients, reducing misunderstandings and anxiety.
              </p>
            </div>

            <div className="trust-card">
              <div className="trust-icon">
                <FaHospital size={24} />
              </div>
              <h3>Comprehensive International Departments</h3>
              <p>
                Dedicated patient coordinators manage appointments,
                documentation, and logistics.
              </p>
            </div>

            <div className="trust-card">
              <div className="trust-icon">
                <FaHandshake size={24} />
              </div>
              <h3>Compassionate Care Culture</h3>
              <p>
                India is known for its hospitality and human warmth. Patients
                often describe their treatment journey as caring, supportive,
                and respectful.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* WHY TRUST INDIA SECTION END */}

      {/* BEST CITIES SECTION START */}
      <section className="cities-section">
        <div className="cities-container">
          <div className="cities-header">
            <h2>Top Medical Cities with the Best Hospitals in India</h2>
            <p>
              India's major cities are home to world-class hospitals offering
              specialized treatments across all medical disciplines.
            </p>
          </div>

          <div className="cities-grid">
            <div className="city-card">
              <div className="city-icon">
                <FaMapMarkerAlt size={26} />
              </div>
              <h3>Delhi</h3>
              <p>
                Home to some of the best hospitals in India offering advanced
                cancer treatment, cardiac surgery, and multi-organ transplants.
              </p>
            </div>

            <div className="city-card">
              <div className="city-icon">
                <FaMapMarkerAlt size={26} />
              </div>
              <h3>Mumbai</h3>
              <p>
                A major medical hub with internationally reputed hospitals known
                for complex surgeries and specialized treatment programs.
              </p>
            </div>

            <div className="city-card">
              <div className="city-icon">
                <FaMapMarkerAlt size={26} />
              </div>
              <h3>Chennai</h3>
              <p>
                Often called the healthcare capital of India, especially
                renowned for heart surgery and organ transplant procedures.
              </p>
            </div>

            <div className="city-card">
              <div className="city-icon">
                <FaMapMarkerAlt size={26} />
              </div>
              <h3>Hyderabad</h3>
              <p>
                Rapidly growing healthcare destination with advanced
                multi-specialty hospitals.
              </p>
            </div>

            <div className="city-card">
              <div className="city-icon">
                <FaMapMarkerAlt size={26} />
              </div>
              <h3>Bengaluru</h3>
              <p>
                Technology-driven hospitals offering robotic surgery and
                minimally invasive procedures.
              </p>
            </div>

            <div className="city-card">
              <div className="city-icon">
                <FaMapMarkerAlt size={26} />
              </div>
              <h3>Kochi</h3>
              <p>
                Affordable yet high-quality hospitals in India providing
                excellent treatment across specialties.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* BEST CITIES SECTION END */}

      {/* ASSOCIATE HOSPITALS SECTION START */}
      <section className="hospitals-section">
        <div className="hospitals-container">
          <div className="hospitals-header">
            <h2>Our Trusted Partner Hospitals in India</h2>
            <p>
              We collaborate with some of the most reputed and best hospitals in
              India known for their medical excellence, advanced facilities, and
              international patient services.
            </p>
          </div>

          <div className="hospitals-scroll">
            <div className="hospitals-track">
              {/* First set of logos */}
              <div className="hospital-logo">
                <img src={apolloLogo} alt="Apollo Hospitals" />
              </div>
              <div className="hospital-logo">
                <img src={fortisLogo} alt="Fortis Healthcare" />
              </div>
              <div className="hospital-logo">
                <img src={medantaLogo} alt="Medanta" />
              </div>
              <div className="hospital-logo">
                <img src={manipalLogo} alt="Manipal Hospitals" />
              </div>
              <div className="hospital-logo">
                <img src={narayanaLogo} alt="Narayana Health" />
              </div>
              <div className="hospital-logo">
                <img src={kokilabenLogo} alt="Kokilaben Hospital" />
              </div>
              <div className="hospital-logo">
                <img src={hcgLogo} alt="HCG Hospitals" />
              </div>
              <div className="hospital-logo">
                <img src={nanavatiLogo} alt="Nanavati Hospital" />
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="hospital-logo">
                <img src={apolloLogo} alt="Apollo Hospitals" />
              </div>
              <div className="hospital-logo">
                <img src={fortisLogo} alt="Fortis Healthcare" />
              </div>
              <div className="hospital-logo">
                <img src={medantaLogo} alt="Medanta" />
              </div>
              <div className="hospital-logo">
                <img src={manipalLogo} alt="Manipal Hospitals" />
              </div>
              <div className="hospital-logo">
                <img src={narayanaLogo} alt="Narayana Health" />
              </div>
              <div className="hospital-logo">
                <img src={kokilabenLogo} alt="Kokilaben Hospital" />
              </div>
              <div className="hospital-logo">
                <img src={hcgLogo} alt="HCG Hospitals" />
              </div>
              <div className="hospital-logo">
                <img src={nanavatiLogo} alt="Nanavati Hospital" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ASSOCIATE HOSPITALS SECTION END */}

      {/* FINAL CTA SECTION START */}
      <section className="final-cta-section">
        <div className="final-cta-container">
          <div className="final-cta-content">
            <h2>Start Your Treatment Journey in India Today</h2>
            <p className="final-cta-description">
              Your search for safe, affordable, and high-quality treatment in
              India ends here.
            </p>
            <p className="final-cta-support">
              Connect with us to access the best hospitals in India and receive
              personalized guidance for your medical needs. Our team is ready to
              assist you with consultation, hospital selection, travel
              coordination, and complete support throughout your recovery.
            </p>

            <div className="final-cta-buttons">
              {/* Call Button */}
              <a href="tel:+919833166697" className="cta-btn cta-primary">
                <FaComments size={40} />
                <span>+91 98331 66697</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919833166697"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-whatsapp"
              >
                <FaWhatsapp size={40} />
                <span>WhatsApp Our Medical Team Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* FINAL CTA SECTION END */}
    </>
  );
}

export default MedicalTourismIndia;
