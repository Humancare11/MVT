import React from "react";
import { Link } from "react-router-dom";
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
  MessageCircle,
} from "lucide-react";
import "./Treatments.css";

const treatments = [
  {
    icon: HeartPulse,
    name: "Heart Surgery",
    description:
      "Bypass surgery, valve replacement, angioplasty, and advanced cardiac procedures by renowned cardiologists.",
    price: "₹2,50,000",
    savings: "Save up to 80%",
    procedures: ["Coronary Bypass", "Valve Replacement", "Angioplasty", "Heart Transplant"],
  },
  {
    icon: Bone,
    name: "Bone & Joint",
    description:
      "Knee replacement, hip replacement, spine surgery, and orthopedic treatments with latest technology.",
    price: "₹1,50,000",
    savings: "Save up to 75%",
    procedures: ["Knee Replacement", "Hip Replacement", "Spine Surgery", "Sports Medicine"],
  },
  {
    icon: Brain,
    name: "Neurology & Neurosurgery",
    description:
      "Brain tumor surgery, spine disorders, epilepsy treatment, and advanced neurological care.",
    price: "₹3,00,000",
    savings: "Save up to 70%",
    procedures: ["Brain Tumor Surgery", "Spine Surgery", "Epilepsy Treatment", "Deep Brain Stimulation"],
  },
  {
    icon: Activity,
    name: "Cancer Treatment",
    description:
      "Comprehensive oncology care including surgery, chemotherapy, radiation therapy, and immunotherapy.",
    price: "₹4,00,000",
    savings: "Save up to 65%",
    procedures: ["Cancer Surgery", "Chemotherapy", "Radiation Therapy", "Immunotherapy"],
  },
  {
    icon: Baby,
    name: "IVF & Fertility",
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
    name: "Eye Care",
    description:
      "LASIK, cataract surgery, and advanced ophthalmology treatments with precision technology.",
    price: "₹50,000",
    savings: "Save up to 70%",
    procedures: ["LASIK Surgery", "Cataract Surgery", "Glaucoma Treatment", "Retina Surgery"],
  },
];

export default function TreatmentsPage() {
  return (
    <>
      {/* HERO */}
      <section className="treatments-hero">
        <span className="hero-badge">Medical Specialties</span>
        <h1>World-Class Treatments at Affordable Prices</h1>
        <p>
          Access India's finest specialists and cutting-edge medical technology
          at a fraction of Western costs
        </p>
      </section>

      {/* COST COMPARISON */}
      {/* <section className="cost-banner">
        <span className="cost-title">Compare & Save:</span>
        <div className="cost-box">
          <div>
            <small>Heart Bypass in USA</small>
            <strong>$150,000</strong>
          </div>
          <span className="arrow">→</span>
          <div>
            <small>Heart Bypass in India</small>
            <strong>$5,000</strong>
          </div>
        </div>
      </section> */}

      {/* TREATMENTS */}
      <section className="treatments-section">
        <div className="section-header">
          <span className="hero-badge">Our Specialties</span>
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

              {/* <div className="card-bottom">
                <div>
                  <small>Starting from</small>
                  <strong>{item.price}</strong>
                </div>
                <span className="saving">{item.savings}</span>
              </div> */}
            </div>
          ))}
        </div>
      </section>

      {/* WHY INDIA */}
      <section className="why-india">
        <div className="section-header light">
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

      {/* CTA */}
     <section className="about-cta">
             <h2>Ready to Begin Your Healthcare Journey?</h2>
             <p>
               Let our expert team guide you to the best medical treatment in India
             </p>
     
             <a href="tel:+918655835979" className="cta-button">
               <Phone />
               Contact Us Today
             </a>
           </section>

    </>
  );
}


