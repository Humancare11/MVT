import React from "react";
import {
  HeartPulse,
  Bone,
  Brain,
  Activity,
  Baby,
  Smile,
  Sparkles,
  Eye,
  Phone,
} from "lucide-react";
import "./Treatments.css";
import { Helmet } from "react-helmet";

const treatments = [
  {
    icon: HeartPulse,
    name: "Cardiology",
    description:
      "Bypass surgery, valve replacement, angioplasty, and advanced cardiac procedures by renowned cardiologists.",
    price: "₹2,50,000",
    savings: "Save up to 80%",
    procedures: [
      "Coronary Bypass",
      "Valve Replacement",
      "Angioplasty",
      "Heart Transplant",
    ],
  },
  {
    icon: Bone,
    name: "Orthopedics",
    description:
      "Knee replacement, hip replacement, spine surgery, and orthopedic treatments with latest technology.",
    price: "₹1,50,000",
    savings: "Save up to 75%",
    procedures: [
      "Knee Replacement",
      "Hip Replacement",
      "Spine Surgery",
      "Sports Medicine",
    ],
  },
  {
    icon: Brain,
    name: "Neurology & Neurosurgery",
    description:
      "Brain tumor surgery, spine disorders, epilepsy treatment, and advanced neurological care.",
    price: "₹3,00,000",
    savings: "Save up to 70%",
    procedures: [
      "Brain Tumor Surgery",
      "Spine Surgery",
      "Epilepsy Treatment",
      "Deep Brain Stimulation",
    ],
  },
  {
    icon: Activity,
    name: "Oncology",
    description:
      "Comprehensive oncology care including surgery, chemotherapy, radiation therapy, and immunotherapy.",
    price: "₹4,00,000",
    savings: "Save up to 65%",
    procedures: [
      "Cancer Surgery",
      "Chemotherapy",
      "Radiation Therapy",
      "Immunotherapy",
    ],
  },
  {
    icon: Baby,
    name: "Gynecology",
    description:
      "Advanced reproductive medicine with high success rates at world-class fertility centers.",
    price: "₹1,20,000",
    savings: "Save up to 80%",
    procedures: ["IVF Treatment", "ICSI", "Egg Freezing", "Surrogacy Support"],
  },
  {
    icon: Smile,
    name: "Dental Care",
    description:
      "Complete dental solutions from implants to cosmetic dentistry with international quality standards.",
    price: "₹30,000",
    savings: "Save up to 85%",
    procedures: ["Dental Implants", "Veneers", "Root Canal", "Teeth Whitening"],
  },
  {
    icon: Sparkles,
    name: "Cosmetic Surgery",
    description:
      "Aesthetic procedures performed by board-certified plastic surgeons with natural-looking results.",
    price: "₹80,000",
    savings: "Save up to 75%",
    procedures: ["Rhinoplasty", "Liposuction", "Facelift", "Breast Surgery"],
  },
  {
    icon: Eye,
    name: "Ophthalmology",
    description:
      "LASIK, cataract surgery, and advanced ophthalmology treatments with precision technology.",
    price: "₹50,000",
    savings: "Save up to 70%",
    procedures: [
      "LASIK Surgery",
      "Cataract Surgery",
      "Glaucoma Treatment",
      "Retina Surgery",
    ],
  },
];

export default function TreatmentsPage() {
  return (
    <>
      {/* HELMET SECTION START */}
      <Helmet>
        <title>Medical Treatment in India | Advanced Healthcare</title>

        <meta
          name="description"
          content="Explore advanced medical treatments in India including cardiology, neurology, oncology, dental care, ophthalmology and cosmetic surgery at top hospitals."
        />

        <meta
          name="keywords"
          content="medical treatments india, affordable procedures india, surgery in india, healthcare services india, humancare treatments"
        />

        <link
          rel="canonical"
          href="https://humancaremedicaltourism.com/treatments"
        />
      </Helmet>
      {/* HELMET SECTION END */}

      {/* HERO SECTION START */}
      <section className="treatments-hero">
        <div>
          <span className="hero-badge-treatment">Medical Specialties</span>
          <h1>Advanced Medical Treatments</h1>
          <p>
            Access India's finest specialists and cutting-edge medical
            technology at a fraction of Western costs
          </p>
        </div>
      </section>
      {/* HERO SECTION END */}

      {/* TREATMENTS SECTION START */}
      <section className="treatments-section">
        <div className="section-header-treatments">
          <span className="hero-badge-treatments">Our Specialties</span>
          <h2>Medical Treatments We Offer</h2>
          <p>Comprehensive healthcare solutions across all major specialties</p>
        </div>

        <div className="treatments-grid">
          {treatments.map((item, index) => (
            <div className="treatment-card" key={index}>
              <div className="card-top">
                <div className="icon-box">
                  <item.icon />
                </div>
                <h3>{item.name}</h3>
                <p className="desc">{item.description}</p>

                <ul>
                  {item.procedures.map((proc, i) => (
                    <li key={i}>{proc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* TREATMENTS SECTION END */}

      {/* WHY INDIA SECTION START */}
      <section className="why-india">
        <div className="section-header-why light">
          {/* <span className="badge white">Why India</span> */}
          <h2>Benefits of Medical Treatment in India</h2>
          <p>
            Discover why thousands of international patients choose India for
            their healthcare needs
          </p>
        </div>

        <div className="why-grid">
          {[
            ["60–80% Cost Savings", "World-class treatment at lower costs"],
            ["Zero Wait Time", "Immediate access to top specialists"],
            ["English Speaking", "Easy communication with doctors"],
            ["Latest Technology", "Advanced medical equipment"],
          ].map((item, i) => (
            <div className="why-card" key={i}>
              <h4>{item[0]}</h4>
              <p>{item[1]}</p>
            </div>
          ))}
        </div>
      </section>
      {/* WHY INDIA SECTION END */}

      {/* CTA SECTION START */}
      <section className="treatments-cta">
        <h2>Ready to Begin Your Healthcare Journey?</h2>
        <p>
          Let our expert team guide you to the best medical treatment in India
        </p>

        <a href="tel:+919833166697" className="treatments-cta-button">
          <Phone />
          Contact Us Today
        </a>
      </section>
      {/* CTA SECTION END */}
    </>
  );
}
