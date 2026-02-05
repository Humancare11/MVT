import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  HeartPulse,
  Plane,
  Building2,
  Clock,
  Shield,
  Star,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  Bone,
  Brain,
  Baby,
  Smile,
  Sparkles,
  CheckCircle,
  Award,
  UserCheck,
  BadgeDollarSign,
  Eye,
  HeartHandshake,
  Languages,
  ShieldCheck,
  User,
  ShieldPlus,
  Stethoscope,
  Utensils,
  Droplets,
  Users,
  Wind,
  FlaskConical,
  Activity,
} from "lucide-react";

import "./Home.css";
import heroImage from "../assets/react.svg";
import Testimonials from "../component/Testimonials";
import Contactsection from "../component/Contactsection";
import Apollo from "../assets/hospitals/apollo-1.webp";
import Aster from "../assets/hospitals/aster-11.webp";
import Fortis from "../assets/hospitals/fortis.webp";
import Gleneagles from "../assets/hospitals/gleneagles.webp";
import Hcg from "../assets/hospitals/hcg.webp";
import Kims from "../assets/hospitals/kims-1.webp";
import Kokilaben from "../assets/hospitals/kokilaben-1.webp";
import Manipal from "../assets/hospitals/manipal.webp";
import Medanta from "../assets/hospitals/medanta.webp";
import Medicover from "../assets/hospitals/medicover.webp";
import Nanavati from "../assets/hospitals/nanavati.webp";
import Narayana from "../assets/hospitals/narayana.webp";

import Narendra from "../assets/docters/dr-naresh-trehan.webp";
import Balkrisnan from "../assets/docters/balakrishna.webp";
import Fatuque from "../assets/docters/fatuque-udwadia.webp";
import Nageshwar from "../assets/docters/nageshwar-reddy.webp";
import aboutImage from "../assets/home-image-1.webp";

const hospitals = [
  {
    name: "Apollo Hospitals",
    specialty: "Multi-Specialty Hospital",
    // location: "Gurugram, India",
    image: Apollo,
  },
  {
    name: "Aster Hospitals",
    specialty: "Multi-Specialty Hospital",
    // location: "Gurugram, India",
    image: Aster,
  },
  {
    name: "Fortis Healthcare",
    specialty: "Multi-Specialty Hospital",
    // location: "Multiple Locations",
    image: Fortis,
  },
  {
    name: "Gleneagles Healthcare",
    specialty: "Multi-Specialty Hospital",
    // location: "Multiple Locations",
    image: Gleneagles,
  },
  {
    name: "hcg Healthcare",
    specialty: "Multi-Specialty Hospital",
    // location: "Multiple Locations",
    image: Hcg,
  },
  {
    name: "KIMS Healthcare",
    specialty: "Multi-Specialty Hospital",
    // location: "Multiple Locations",
    image: Kims,
  },
  {
    name: "Kokilaben Healthcare",
    specialty: "Multi-Specialty Hospital",
    // location: "Multiple Locations",
    image: Kokilaben,
  },
  {
    name: "Medanta Healthcare",
    specialty: "Multi-Specialty Hospital",
    // location: "Multiple Locations",
    image: Medanta,
  },
  {
    name: "Manipal Hospitals",
    specialty: "Multi-Specialty Hospital",
    // location: "New Delhi, India",
    image: Manipal,
  },
  {
    name: "Medicover Hospitals",
    specialty: "Multi-Specialty Hospital",
    // location: "New Delhi, India",
    image: Medicover,
  },
  {
    name: "Nanavati Hospitals",
    specialty: "Multi-Specialty Hospital",
    // location: "New Delhi, India",
    image: Nanavati,
  },
  {
    name: "Narayana Health",
    specialty: "Multi-Specialty Hospital",
    // location: "India & Overseas",
    image: Narayana,
  },
];

const data = [
  {
    icon: <Award size={40} />,
    title: "NABH & JCI Accredited Hospitals",
    desc: "We partner with internationally accredited hospitals that meet global safety and quality standards.",
  },
  {
    icon: <UserCheck size={40} />,
    title: "Dedicated Patient Coordinator",
    desc: "A personal coordinator manages medical, travel, and communication needs throughout your journey.",
  },
  {
    icon: <BadgeDollarSign size={40} />,
    title: "Transparent Pricing",
    desc: "Clear treatment cost estimates shared upfront with full financial transparency.",
  },
  {
    icon: <Eye size={40} />,
    title: "No Hidden Charges",
    desc: "What we quote is what you pay—no unexpected or extra costs.",
  },
  {
    icon: <HeartHandshake size={40} />,
    title: "End-to-End Support",
    desc: "Comprehensive assistance from initial consultation to post-treatment follow-up.",
  },
  {
    icon: <Languages size={40} />,
    title: "Multi-Language Assistance",
    desc: "Smooth communication support for patients from different countries and cultures.",
  },
  {
    icon: <Clock size={40} />,
    title: "24/7 Emergency Support",
    desc: "Round-the-clock assistance for urgent medical or travel needs.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Complete Privacy & Security",
    desc: "Round-the-clock assistance for urgent medical or travel needs.",
  },
];

const doctors = [
  {
    name: "Dr. Narendra trehan",
    specialty: "Cardiovascular & Cardiothoracic Surgeon",
    experience: "40+ years",
    image: Narendra,
  },
  {
    name: "Dr. Balkrisnan",
    specialty: "Cardiothoracic / Heart Surgery",
    experience: "40+ years",
    image: Balkrisnan,
  },
  {
    name: "Dr. Fatuque Udwadia",
    specialty: "Critical Care Medicine",
    experience: "70+ years",
    image: Fatuque,
  },
  {
    name: "Dr. D. Nageshwar Reddy",
    specialty: "Gastroenterology Pioneer",
    experience: "50+ years",
    image: Nageshwar,
  },
];

const trustHighlights = [
  {
    icon: Clock,
    title: "24/7 Patient Care Support",
    description:
      "Dedicated medical coordinators available anytime for guidance and emergency assistance.",
  },
  {
    icon: Building2,
    title: "Globally Accredited Hospitals",
    description:
      "Access to JCI & NABH-accredited hospitals and renowned specialists across multiple countries.",
  },
  {
    icon: Plane,
    title: "Visa, Travel & Stay Management",
    description:
      "Complete support including medical visa, flights, accommodation, airport pickup, and local transport.",
  },
  {
    icon: Shield,
    title: "Transparent & Affordable Packages",
    description:
      "Ethical pricing with no hidden charges—quality healthcare without financial stress.",
  },
];

const treatments = [
  { icon: HeartPulse, name: "Heart Surgery", price: "₹2,50,000" },
  { icon: Bone, name: "Bone & Joint", price: "₹1,50,000" },
  { icon: Brain, name: "Neurology", price: "₹3,00,000" },
  { icon: Baby, name: "IVF & Fertility", price: "₹1,20,000" },
  { icon: Smile, name: "Dental Care", price: "₹30,000" },
  { icon: Sparkles, name: "Cosmetic Surgery", price: "₹80,000" },
];

const whyChooseUs = [
  "NABH & JCI Accredited Hospitals",
  "Dedicated Patient Coordinator",
  "Transparent Pricing",
  "No Hidden Charges",
  "End-to-End Support",
  "Multi-Language Assistance",
];

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    country: "UAE",
    text: "HumanCare MVT made my cardiac surgery journey stress-free.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    name: "Grace Adeyemi",
    country: "Nigeria",
    text: "My mother received excellent cancer treatment in India.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    name: "Mohammad Rahman",
    country: "Bangladesh",
    text: "Affordable knee replacement surgery changed my life.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
  },
];

export default function HomePage() {
  return (
    <>
      <Helmet>
        {/* 🔹 Primary SEO */}
        <title>
          HumanCare Medical Tourism | Affordable Healthcare & Top Hospitals in
          India
        </title>

        <meta
          name="description"
          content="HumanCare Medical Tourism connects international patients with top JCI & NABH accredited hospitals and expert doctors in India. Get affordable treatment with complete travel, visa, and patient support."
        />

        <meta
          name="keywords"
          content="medical tourism in India, affordable medical treatment India, best hospitals India, international patient care, medical travel support"
        />

        <link rel="canonical" href="https://humancaremedicaltourism.com/" />

        {/* 🔹 Open Graph (Social Media Previews) */}
        <meta
          property="og:title"
          content="HumanCare Medical Tourism – Top Healthcare in India"
        />
        <meta
          property="og:description"
          content="Find world-class medical treatment in India with top hospitals and personalized patient support. Save on major treatments while receiving the best care."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://humancaremedicaltourism.com/"
        />
        <meta
          property="og:image"
          content="https://humancaremedicaltourism.com/og-image.jpg"
        />

        {/* 🔹 Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="HumanCare Medical Tourism – India"
        />
        <meta
          name="twitter:description"
          content="Access top Indian hospitals, expert doctors, and affordable procedures with HumanCare Medical Tourism."
        />
        <meta
          name="twitter:image"
          content="https://humancaremedicaltourism.com/og-image.jpg"
        />

        {/* 🔹 FAQ Schema (Structured Data) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is HumanCare Medical Tourism?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "HumanCare Medical Tourism is a full-service medical travel company that helps international patients access world-class treatment in India, including hospital coordination, travel support, and post-treatment care.",
                },
              },
              {
                "@type": "Question",
                name: "Which hospitals do you work with?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We partner with JCI & NABH accredited hospitals in India that offer high quality and safe healthcare across specialties.",
                },
              },
              {
                "@type": "Question",
                name: "How can I start my medical journey?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can contact us via phone or WhatsApp for a free consultation and personalized treatment plan tailored to your medical needs.",
                },
              },
              {
                "@type": "Question",
                name: "Do you assist with travel and visa arrangements?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we provide complete support for medical visas, flights, accommodation, and on-ground logistics for international patients.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="layout">
        {/* HERO SECTION start  */}
        <section className="hero">
          <div className="hero-left">
            <span className="hero-badge-red">
              Trusted Medical Value Travel Partner
            </span>

            <h1 className="hero-title-new">
              Across Borders,{" "}
              <span className="hero-highlight-red">Made Affordable</span>
            </h1>

            <p className="hero-desc-new">
              Access top accredited hospitals in India and worldwide with expert
              medical coordination. Save up to 70–80% on treatment in India, or
              choose your preferred country for specialized care, managed
              seamlessly by our team.
            </p>

            <div className="hero-buttons">
              <a
                href="tel:+919833166697"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn red-btn"
              >
                <Phone size={18} />
                Book Free Consultation
              </a>
              <a
                href="https://wa.me/+919833166697"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn green-btn"
              >
                <MessageCircle size={18} />
                WhatsApp Chat
              </a>
            </div>
          </div>

          <div className="hero-right">
            {trustHighlights.map((item, i) => (
              <div className="trust-card-new" key={i}>
                <item.icon className="trust-icon-new" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* HERO SECTION end  */}

        {/* ABOUT  start*/}
        <section className="about">
          <div className="about-grid">
            {/* LEFT */}
            <div>
              <span className="about-badge">About Us</span>

              <h2 className="about-title">
                Your Trusted Partner for Global Healthcare
              </h2>

              <p className="about-subtext">
                Humanacare Medical Value Travel is a leading medical tourism and
                patient transfer company with 21+ years of experience in
                connecting international patients to world-class healthcare in
                India and across the globe.
              </p>

              <p className="about-desc">
                We simplify cross-border healthcare by managing every step of
                the journey — from medical opinions and hospital coordination to
                travel, stay, and post-treatment follow-up. Our long-standing
                expertise, ethical practices, and strong hospital network ensure
                patients receive the right treatment, at the right place, at the
                right cost.
              </p>

              <div className="about-points">
                {[
                  "Personalized Medical Coordination",
                  "Expert Guidance from Industry Professionals",
                  "24/7 Patient Support & Assistance",
                ].map((p) => (
                  <div className="point-new" key={p}>
                    <CheckCircle2 size={18} className="point-icon-new" />
                    {p}
                  </div>
                ))}
              </div>

              <Link to="/about" className="about-btn">
                Read More About Us <ArrowRight size={18} />
              </Link>
            </div>

            {/* RIGHT */}
            <div className="about-image-box-new">
              <img
                src={aboutImage}
                className="about-image-new"
                loading="lazy"
                alt="About HumanCare Medical Tourism"
                width="800"
                height="533"
                style={{ aspectRatio: "3/2" }}
              />

              <div className="experience-card-new">
                <h3>21+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </section>
        {/* about SECTION end  */}

        {/* hospitals section Start */}
        <section className="hospitals-section">
          <span className="hospitals-badge">Specialist Hospitals</span>

          <h2 className="hospitals-title">Trusted Partner Hospitals</h2>

          <p className="hospitals-subtitle">
            We partner with India’s leading accredited hospitals, offering
            advanced technology, expert doctors, and safe, world-class care for
            international patients.
          </p>

          <div className="hospitals-grid">
            {hospitals.map((hospital, index) => (
              <div className="hospital-card" key={index}>
                <div className="hospital-image">
                  <img
                    src={hospital.image}
                    alt={hospital.name}
                    loading="lazy"
                    width="400"
                    height="300"
                    decoding="async"
                  />
                </div>

                <h3>{hospital.name}</h3>
                <p className="hospital-specialty">{hospital.specialty}</p>
                <p className="hospital-location">{hospital.location}</p>
              </div>
            ))}
          </div>

          <div className="hospitals-cta">
            <a href="/hospitals" className="explore-btn">
              Explore More Hospitals
            </a>
          </div>
        </section>
        {/* hospital section end */}

        {/* TREATMENTS start */}
        <section className="treatments">
          <div className="treatment-container">
            <span className="treat-badge">Our Specialties</span>

            <h2 className="treat-title">Popular Medical Treatments</h2>

            <p className="treat-subtext">
              Access advanced medical treatments from globally trained
              specialists at internationally accredited hospitals—delivered with
              quality, safety, and affordability.
            </p>

            <div className="treat-grid">
              {[
                { icon: HeartPulse, name: "Cardiology" },
                { icon: Brain, name: "Neurology" },
                { icon: ShieldPlus, name: "Oncology" },
                { icon: Eye, name: "Ophthalmology" },
                { icon: Stethoscope, name: "Internal Medicine" },
                { icon: Utensils, name: "Gastroenterology" },
                { icon: Sparkles, name: "Dermatology" },
                { icon: Droplets, name: "Hematology" },
                { icon: Baby, name: "Gynecology" },
                { icon: Users, name: "Pediatrics" },
                { icon: Bone, name: "Orthopedics" },
                { icon: Smile, name: "Dentists" },
                { icon: Wind, name: "Pulmonology" },
                { icon: Activity, name: "Nephrology" },
                { icon: FlaskConical, name: "Urology" },
              ].map((item, i) => (
                <div className="treat-card" key={i}>
                  <div className="treat-icon-wrap">
                    <item.icon className="treat-icon" size={32} />
                  </div>
                  <h3 className="treat-name">{item.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* TREATMENTS end */}

        {/* doctors section start*/}
        <section className="doctors-section-home">
          <span className="doctors-badge">Expert Doctors</span>

          <h2 className="doctors-title">Our Medical Specialists</h2>

          <p className="doctors-subtitle">
            Our network includes experienced, internationally trained doctors
            from top accredited hospitals. Each specialist is selected for
            clinical expertise, proven outcomes, and commitment to safe,
            high-quality care for international patients.
          </p>

          <div className="doctors-grid-home">
            {doctors.map((doc, index) => (
              <div className="doctor-card" key={index}>
                <div className="doctor-image">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    loading="lazy"
                    width="300"
                    height="300"
                    decoding="async"
                  />
                </div>

                <h3>{doc.name}</h3>
                <p className="doctor-specialty">{doc.specialty}</p>
                <div className="doctor-exp">
                  <User />
                  <span>{doc.experience}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="hospitals-cta-home">
            <p className="doctors-footer-home">
              Our network includes 300+ specialist doctors across various
              medical fields
            </p>
            <a href="/doctors" className="explore-btn">
              Explore More Doctors
            </a>
          </div>
        </section>
        {/* doctors section end*/}

        {/* WHY CHOOSE US start*/}
        <section className="why-choose">
          <div className="choose-container">
            <span className="choose-badge">Why Choose Us</span>

            <h2 className="choose-title">Your Health, Our Priority</h2>

            <p className="choose-subtext">
              With 21+ years of experience in medical tourism, we deliver
              trusted healthcare solutions with complete transparency,
              personalized care, and end-to-end support—so you can focus on
              healing while we manage the rest.
            </p>

            <div className="choose-grid">
              {[
                "Accredited Partner Hospitals",
                "Dedicated Patient Coordinator",
                "Transparent & Ethical Pricing",
                "No Hidden Costs",
                "End-to-End Medical Support",
                "Multi-Language Assistance",
              ].map((item, index) => (
                <div className="choose-card" key={index}>
                  <CheckCircle className="choose-icon" size={22} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* <button className="choose-btn">
      Learn More →
    </button> */}
          </div>
        </section>
        {/* WHY CHOOSE US end*/}

        {/* Advantages start*/}
        <section className="advantages-section">
          <p className="tag">Our Advantages</p>
          <h2 className="title">What Makes Us Different</h2>
          <p className="subtitle">
            We deliver ethical, patient-first healthcare support that goes
            beyond treatment—ensuring confidence, comfort, and complete
            transparency at every step.
          </p>

          <div className="grid-box">
            {data.map((item, index) => (
              <div className="card" key={index}>
                <div className="icon-box">{item.icon}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Advantages end*/}

        {/* HOW IT WORKS section start */}
        <section className="study-hero">
          <div className="overlay"></div>

          <div className="hero-content">
            <h1>How It Works</h1>
            <p>
              Understand our step-by-step process from consultation to complete
              recovery. Quick, simple and fully transparent.
            </p>

            <div className="hero-buttons-home">
              <Link to="/process" className="btn secondary">
                Know More <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
        {/* HOW IT WORKS section end */}

        <Contactsection />
      </div>
    </>
  );
}
