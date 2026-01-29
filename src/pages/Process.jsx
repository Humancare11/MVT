import React, { useState } from "react";
import {
  FileText,
  Stethoscope,
  Calculator,
  Plane,
  HeartPulse,
  PhoneCall,
  Phone,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import "./Process.css";

const steps = [
  {
    icon: FileText,
    title: "Share Medical Reports",
    description:
      "Send us your medical reports, diagnostic tests, and any relevant health information.",
    details: [
      "Medical history",
      "Diagnosis reports",
      "Test results",
      "Current medications",
    ],
  },
  {
    icon: Stethoscope,
    title: "Doctor Opinion & Treatment Plan",
    description:
      "Our specialists review your case and suggest the best treatment plan.",
    details: [
      "Expert evaluation",
      "Treatment options",
      "Success rates",
      "Doctor profiles",
    ],
  },
  {
    icon: Calculator,
    title: "Cost Estimation & Confirmation",
    description: "Receive a transparent cost estimate with no hidden charges.",
    details: [
      "Treatment cost",
      "Hospital charges",
      "Accommodation",
      "Other services",
    ],
  },
  {
    icon: Plane,
    title: "Visa & Travel Support",
    description: "We assist with medical visa, flights, and hotel bookings.",
    details: [
      "Visa guidance",
      "Flight booking",
      "Hotel stay",
      "Travel insurance",
    ],
  },
  {
    icon: HeartPulse,
    title: "Treatment in India",
    description:
      "Our coordinator manages airport pickup, hospital admission, and care.",
    details: [
      "Airport pickup",
      "Hospital admission",
      "Coordinator support",
      "Family care",
    ],
  },
  {
    icon: PhoneCall,
    title: "Post-Treatment Follow-up",
    description:
      "We stay connected after treatment for recovery and follow-ups.",
    details: [
      "Recovery tracking",
      "Doctor follow-ups",
      "Medicine guidance",
      "Emergency help",
    ],
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How long does the entire process take?",
      a: "Usually 2–4 weeks depending on treatment and visa processing.",
    },
    {
      q: "What documents are required?",
      a: "Passport, medical reports, diagnosis documents, and test results.",
    },
    {
      q: "Can a family member accompany me?",
      a: "Yes, we assist with accommodation and support for companions.",
    },
    {
      q: "What about emergency care?",
      a: "Our 24/7 helpline and coordinator are always available.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <div
          className={`faq-card ${openIndex === index ? "open" : ""}`}
          key={index}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">
            <h4>{faq.q}</h4>
            <ChevronDown className="faq-icon" />
          </div>
          <div className="faq-answer">
            <p>{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PatientProcessPage() {
  return (
    <>
      {/* HERO */}
      <section className="process-hero-section">
        <div>
          <span className="hero-badge-section">Patient Journey</span>
          <h1>Your Path to Better Health</h1>
          <p>
            A simple, transparent process designed to make your medical journey
            stress-free
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="process-header">
          <span className="process-hero-badge">6-Step Process</span>
          <h2>How It Works</h2>
          <p>From first inquiry to complete recovery</p>
        </div>

        <div className="timeline">
          {steps.map((step, index) => (
            <div className="timeline-row" key={index}>
              {index < steps.length - 1 && <div className="line" />}

              <div className="step-number">{index + 1}</div>

              <div className="step-card">
                <div className="step-top">
                  <div className="step-icon">
                    <step.icon />
                  </div>
                  <div>
                    <h3 className="al">{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>

                <ul className="step-details">
                  {step.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="process-header">
          <span className="faq-hero-badge">Common Questions</span>
          <h2>Frequently Asked Questions</h2>
          <p>Quick answers to help you plan better</p>
        </div>

        <FAQAccordion />
      </section>

      {/* CTA */}
      <section className="process-cta">
        <h2>Ready to Start Your Journey?</h2>
        <p>Take the first step towards world-class healthcare in India</p>

        <div className="cta-buttons">
          <a
            href="https://wa.me/919833166697"
            target="_blank"
            rel="noreferrer"
            className="cta-whatsapp"
          >
            <MessageCircle /> Contact Us Today
          </a>
        </div>
      </section>
    </>
  );
}
