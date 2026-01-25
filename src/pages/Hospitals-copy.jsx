import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import "./Hospitals.css";

import Apollo from "../assets/hospitals/apollo.jpeg";
import Manipal from "../assets/hospitals/manipal.jpeg";
import Fortis from "../assets/hospitals/fortis.jpeg";
import Narayana from "../assets/hospitals/narayana.jpeg";
import Aster from "../assets/aster.jpeg";
import Max from "../assets/max.jpeg";
import Care from "../assets/care.jpeg";
import Kims from "../assets/kims.jpeg";
import Medicover from "../assets/medicover.jpeg";

import Samitivej from "../assets/hospitals/samitivej-hospital.jpeg";
import Bangkok from "../assets/hospitals/Bangkok-hospital.jpeg";
import Phyathai from "../assets/hospitals/phythai-1&2-hospital.jpeg";
import Gleneagles from "../assets/hospitals/gleneagles-hospital-singapore.jpeg";
import Raffles from "../assets/hospitals/raffles-hospital.jpeg";
import MountElizabeth from "../assets/hospitals/mount-elizabeth-hospital.jpeg";
import Crawfurd from "../assets/hospitals/crawfurd-hospital.jpeg";
import Kpj from "../assets/hospitals/kpj-hospital.jpeg";
import Liv from "../assets/hospitals/liv-hospital.jpeg";
import Medipol from "../assets/hospitals/medipol-hospital.jpeg";
import Guven from "../assets/hospitals/guven-hospital.jpeg";

const hospitals = [
  {
    name: "Güven Hospital (Güven International)",
    logo: Guven,
    description:
      "Güven Hospital is a major private healthcare institution in Ankara, Turkey, offering a wide range of internationally‑oriented medical services with decades of experience, modern facilities, and a strong focus on international patient care and safety.",
    accreditations: [
      "Joint Commission International (JCI)",
      "Global Healthcare Accreditation (GHA)",
      "Planetree Person‑Centered Care",
    ],
    locations: [
      "Ankara, Turkey (Güven Hospital Campus, Güven Çayyolu Surgical Medical Center & Healthy Life Campus)",
    ],
    specialties: [
      "Organ Transplantation",
      "Oncology & Cancer Care",
      "Cardiovascular Surgery & Cardiology",
      "Neurosurgery & Neurology",
      "Orthopaedics & Traumatology",
      "Ophthalmology",
      "Urology",
      "Gastroenterology & Internal Medicine",
      "Obstetrics & Gynaecology",
      "Emergency & Critical Care",
      "IVF & Reproductive Medicine",
      "Physical Medicine & Rehabilitation",
      "Diagnostic Imaging & Laboratory Services",
    ],
  },

  {
    name: "Medipol Health Group (Medipol Global)",
    logo: Medipol,
    description:
      "Medipol Health Group is a leading private healthcare network based in Turkey, operating an extensive integrated hospital system with advanced clinical services, modern medical technology, and international patient support — serving both domestic and global patients across multiple specialties.",
    accreditations: [
      "JCI (Joint Commission International) Academic Medical Center accreditation",
    ],
    locations: [
      "Turkey (Istanbul and other regions)",
      /* Representative offices worldwide (for international patients) */
    ],
    specialties: [
      "Oncology & Cancer Care",
      "Cardiology & Cardiovascular Surgery",
      "Neurology & Neuroscience",
      "Orthopaedics & Sports Medicine",
      "Organ Transplantation (including bone marrow)",
      "IVF & Reproductive Medicine",
      "Gastroenterology & Digestive Health",
      "Paediatrics & Child Health",
      "Emergency & Critical Care",
      "Diagnostic Imaging & Advanced Technology Services",
    ],
  },

  {
    name: "Liv Hospital",
    logo: Liv,
    description:
      "Liv Hospital is a leading private healthcare network based in Turkey, offering internationally accredited, patient‑centred medical services across a wide range of specialties with advanced technology and global patient support, trusted by patients from over 150 countries.",
    accreditations: [
      "JCI (Joint Commission International) – global healthcare quality standard",
      "SRC Centers of Excellence status at select locations",
    ],
    locations: [
      "Istanbul (Ulus, Vadistanbul)",
      "Ankara",
      "Samsun",
      "Gaziantep",
      "İSÜ Liv Hospital Bahçeşehir",
      "International affiliates (Liv Bona Dea Hospital, Baku; Liv Duna Medical Center, Hungary)",
    ],
    specialties: [
      "Oncology & Cancer Care",
      "Cardiology & Heart Health",
      "Neurosurgery",
      "Orthopaedics & Joint & Sports Medicine",
      "IVF & Reproductive Medicine",
      "Regenerative Medicine & Stem Cell Therapies",
      "Plastic & Cosmetic Surgery",
      "Gastroenterology",
      "Emergency & Critical Care",
      "Diagnostic Imaging & Comprehensive Health Screening",
    ],
  },

  {
    name: "KPJ Healthcare",
    logo: Kpj,
    description:
      "KPJ Healthcare is Malaysia’s largest private healthcare provider, operating an extensive network of specialist hospitals and care facilities focused on delivering high-quality, patient-centred medical services and fostering clinical excellence across the region.",
    accreditations: [
      "Joint Commission International (JCI)",
      "Malaysian Society for Quality in Health (MSQH)",
    ],
    locations: [
      "Malaysia (nationwide hospitals and care centres)",
      "Indonesia",
      "Thailand",
      "Bangladesh",
    ],
    specialties: [
      "Cardiology & Heart Care",
      "Oncology & Cancer Care",
      "Orthopaedics & Joint Surgery",
      "Neurology & Neuroscience",
      "Gastroenterology & Digestive Health",
      "Paediatrics & Child Health",
      "Obstetrics & Gynaecology",
      "Minimally Invasive & Robotic Surgery",
      "Emergency & Critical Care",
      "Diagnostic Imaging & Laboratory Services",
    ],
  },

  {
    name: "Crawfurd Hospital",
    logo: Crawfurd,
    description:
      "Crawfurd Hospital is a private healthcare institution in Singapore focused on personalised and holistic patient care, offering hospitalisation, surgical services, diagnostic imaging, and preventive health screening in a comfortable setting.",
    accreditations: [
      "Joint Commission International (JCI) – reported accreditation (note: may vary; verify with hospital directly)",
    ],
    locations: ["Singapore (19 Adam Road)"],
    specialties: [
      "General Surgery (including elective gastrointestinal & key-hole procedures)",
      "Internal Medicine & Chronic Disease Management",
      "Endoscopy Services",
      "Pain Management & Interventional Treatments",
      "Diagnostic Imaging (MRI, CT, X-Ray, Ultrasound)",
      "Health Screening & Preventive Care",
      "Outpatient Clinics & Consultation",
      "Inpatient & Day Surgery Care",
    ],
  },

  {
    name: "Mount Elizabeth Hospital",
    logo: MountElizabeth,
    description:
      "Mount Elizabeth Hospital is a leading private tertiary care hospital in Singapore, part of the IHH Healthcare network, offering comprehensive multispecialty clinical services, advanced medical treatments, and internationally recognised standards of care for local and international patients.",
    accreditations: [
      "JCI (Joint Commission International) Gold Seal of Approval",
      "Singapore Quality Class (SQC)",
    ],
    locations: ["Singapore (Orchard Road)", "Singapore (Novena)"],
    specialties: [
      "Cardiology & Cardiovascular Care",
      "Oncology & Cancer Care",
      "Neuroscience & Brain & Spine Care",
      "Orthopaedics & Sports Medicine",
      "Transplant Services (Liver, Kidney, etc.)",
      "Gastroenterology & Digestive Health",
      "Maternity, Obstetrics & Gynaecology",
      "Minimally Invasive & Robotic Surgery",
      "Urgent & Emergency Care",
      "Diagnostic Imaging & Laboratory Services",
    ],
  },

  {
    name: "Raffles Medical Group",
    logo: Raffles,
    description:
      "Raffles Medical Group is a leading integrated private healthcare provider headquartered in Singapore, offering a comprehensive continuum of care from primary to tertiary care across Asia, with an extensive network of clinics, specialist centres, hospitals, and health services.",
    accreditations: [
      "JCI (Joint Commission International)",
      "Ministry of Health Singapore (Emergency Care Collaboration & Trauma Centre)",
    ],
    locations: [
      "Singapore (nationwide clinics and Raffles Hospital, Bugis)",
      "China (Beijing, Shanghai, Chongqing, Tianjin, Dalian, Nanjing, Hong Kong SAR)",
      "Japan (Osaka, Fukuoka)",
      "Vietnam (Hanoi, Ho Chi Minh City, Vung Tau)",
      "Cambodia (Phnom Penh)",
    ],
    specialties: [
      "Primary & Family Medicine",
      "Emergency & Acute Critical Care",
      "Specialist Outpatient Clinics (multi-discipline)",
      "Dental & Oral Health",
      "Traditional Chinese Medicine",
      "Health Screening & Preventive Care",
      "Diagnostic Radiology & Laboratory",
      "Insurance & Wellness Services",
      "Hospital & Inpatient Care (Raffles Hospital)",
      "Corporate Healthcare Solutions",
    ],
  },

  {
    name: "Gleneagles Hospital",
    logo: Gleneagles,
    description:
      "Gleneagles Hospital is a premier private tertiary care hospital in Singapore, part of the IHH Healthcare network, offering comprehensive medical and surgical care with internationally recognised standards and a focus on patient-centred service.",
    accreditations: [
      "JCI (Joint Commission International)",
      "Singapore Quality Class (SQC)",
    ],
    locations: ["Singapore (Napier Road)"],
    specialties: [
      "Oncology & Cancer Care",
      "Cardiology & Heart Health",
      "Gastroenterology & Digestive Health",
      "Orthopaedics & Sports Medicine",
      "Obstetrics & Gynaecology",
      "Liver Transplant & Hepatobiliary Care",
      "General Surgery",
      "Neonatal & Maternity Services",
      "Urgent & Emergency Care",
      "Diagnostic Imaging & Laboratory Services",
    ],
  },

  {
    name: "Thai Health Solutions",
    logo: Phyathai,
    description:
      "Thai Health Solutions is a healthcare service platform and official partner of Phyathai Hospitals in Thailand, providing global access to advanced medical care, treatment packages, specialist consultations, and seamless coordination with leading hospitals in Bangkok.",
    accreditations: [
      "Partnered with JCI-accredited Phyathai 2 Hospital",
      "Hospital Accreditation (HA) – via partner hospitals",
    ],
    locations: ["Bangkok, Thailand (serving international patients globally)"],
    specialties: [
      "Cardiology & Heart Care",
      "Orthopedics & Joint Replacement",
      "Pediatrics & Child Health",
      "Dentistry & Oral Surgery",
      "ENT (Ear, Nose & Throat)",
      "Beauty & Dermatology",
      "Fertility & Reproductive Medicine",
      "Gastrointestinal & Liver Care",
      "Sleep Disorders & Diagnostic Screening",
      "General Health Screening & Preventive Programs",
    ],
  },

  {
    name: "Bangkok Hospital",
    logo: Bangkok,
    description:
      "Bangkok Hospital is a leading private tertiary care hospital in Thailand, part of the Bangkok Dusit Medical Services (BDMS) network, offering comprehensive multispecialty medical services and internationally recognized clinical care, trusted by patients from around the world.",
    accreditations: [
      "JCI (Joint Commission International)",
      "Hospital Accreditation (HA) of Thailand",
      "ISO & other international certifications",
    ],
    locations: [
      "Bangkok (Headquarters)",
      "Phuket",
      "Pattaya",
      "Chiang Mai",
      /* plus other BDMS network hospitals across Thailand */
    ],
    specialties: [
      "Cardiology & Cardiovascular Surgery",
      "Oncology (Cancer Care)",
      "Neurology & Neuroscience",
      "Orthopedics & Joint Replacement",
      "Gastroenterology & Liver Care",
      "Obstetrics & Gynecology",
      "Pediatrics & Child Health",
      "Emergency & Critical Care",
      "Advanced Diagnostic & Robotic Surgery",
    ],
  },

  {
    name: "Samitivej Hospital",
    logo: Samitivej, // Thailand-based international hospital group
    description:
      "Samitivej Hospitals is a leading private hospital group in Thailand, part of Bangkok Dusit Medical Services (BDMS), known for world-class multispecialty care and significant international patient services, including medical tourism and expatriate care.",
    accreditations: [
      "JCI (Joint Commission International)",
      "Hospital Accreditation Thailand",
      "WHO & UNICEF recognitions",
    ],
    locations: [
      "Bangkok (multiple campuses including Sukhumvit & Srinakarin)",
      "Chonburi",
      "Pattaya region",
      "Bangkok Chinatown",
    ],
    specialties: [
      "Multi-Specialty (Tertiary care across all major disciplines)",
      "Pediatrics & Children’s Health",
      "Cardiology & Heart Surgery",
      "Orthopedics",
      "Oncology",
      "Women’s Health & Maternity",
      "Gastroenterology",
      "Emergency & Critical Care",
      "Preventive & Precision Medicine",
    ],
  },

  {
    name: "Apollo Hospitals",
    logo: Apollo,
    description:
      "One of India’s largest private hospital chains with a national network of over 70+ hospitals — known for multispecialty care and medical tourism services.",
    accreditations: ["JCI", "NABH"],
    locations: ["Delhi", "Chennai", "Mumbai", "Bangalore", "Hyderabad"],
    specialties: ["Multi-Specialty"],
  },
  {
    name: "Manipal Hospitals",
    logo: Manipal,
    description:
      "Among India’s largest hospital groups with 30+ hospitals nationwide.",
    accreditations: ["JCI", "NABH"],
    locations: ["Goa", "Hyderabad", "Bangalore", "Kolkata"],
    specialties: ["Multi-Specialty"],
  },
  {
    name: "Fortis Healthcare",
    logo: Fortis,
    description:
      "A major private hospital operator in India with 30+ facilities across cities.",
    accreditations: ["JCI", "NABH"],
    locations: ["Delhi", "Mumbai", "Bangalore", "Gurgaon"],
    specialties: ["Multi-Specialty"],
  },
  {
    name: "Narayana Health",
    logo: Narayana,
    description:
      "Major private hospital network known for cardiac and multispecialty care.",
    accreditations: ["JCI", "NABH"],
    locations: ["Guwahati", "Jaipur", "Bangalore", "Kolkata"],
    specialties: ["Multi-Specialty"],
  },
  {
    name: "Aster DM Healthcare",
    logo: Aster,
    description:
      "Operates 15–20 hospitals in India, with ongoing expansion plans.",
    accreditations: ["JCI", "NABH"],
    locations: ["Kochi", "Hyderabad", "Bangalore", "Chennai"],
    specialties: ["Multi-Specialty"],
  },
  {
    name: "Max Healthcare",
    logo: Max,
    description:
      "Large hospital network with facilities in Delhi-NCR and major cities.",
    accreditations: ["JCI", "NABH"],
    locations: ["Delhi NCR", "Ludhiana", "Bathinda", "Dehradun"],
    specialties: ["Multi-Specialty"],
  },
  {
    name: "CARE Hospitals",
    logo: Care,
    description:
      "Corporate hospital chain with multiple facilities across India.",
    accreditations: ["JCI", "NABH"],
    locations: ["Hyderabad", "Visakhapatnam", "Vijayawada", "Bhubaneswar"],
    specialties: ["Multi-Specialty"],
  },
  {
    name: "KIMS Hospitals",
    logo: Kims,
    description: "One of India’s leading corporate healthcare groups.",
    accreditations: ["JCI", "NABH"],
    locations: ["Secunderabad", "Visakhapatnam", "Rajahmundry", "Maharashtra"],
    specialties: ["Multi-Specialty"],
  },
  {
    name: "Medicover Hospitals",
    logo: Medicover,
    description:
      "Part of a global healthcare provider, operating multiple hospitals in India.",
    accreditations: ["JCI", "NABH"],
    locations: ["Hyderabad", "Bangalore", "Chennai", "Pune"],
    specialties: ["Multi-Specialty"],
  },
];

export default function HospitalsPage() {
  return (
    <>
      {/* HERO */}
      <section className="hospitals-hero-section">
        <div>
          <span className="hero-badge-hospitals">Medical Specialties</span>
          <h1>World-Class Treatments at Affordable Prices</h1>
          <p>
            Access India's finest specialists and cutting-edge medical
            technology at a fraction of Western costs.
          </p>
        </div>
      </section>

      {/* HOSPITAL LIST */}

      <section className="partner-hospitals-main">
        <div className="partner-hospitals-subsection">
          <div className="partner-header">
            <span className="partner-hospitals-hero-badge">
              Hospital Network
            </span>
            <h2>Our Partner Hospitals</h2>
            <p>
              We collaborate with India's most prestigious healthcare
              institutions.
            </p>
          </div>

          <div className="partner-list">
            {hospitals.map((h, i) => (
              <div className="partner-card" key={i}>
                {/* LEFT */}
                <div className="partner-left">
                  <div className="logo-placeholder">
                    <img src={h.logo} alt={h.name} />
                  </div>

                  <h3>{h.name}</h3>

                  <div className="accreditations">
                    {h.accreditations.map((a, idx) => (
                      <span key={idx}>{a}</span>
                    ))}
                  </div>
                </div>

                {/* MIDDLE */}
                <div className="partner-middle">
                  <p className="partner-desc">{h.description}</p>

                  <div className="specialties">
                    {h.specialties.map((s, idx) => (
                      <span key={idx}>{s}</span>
                    ))}
                  </div>

                  <div className="locations">
                    <MapPin size={16} />
                    {h.locations.join(" • ")}
                  </div>
                </div>

                {/* RIGHT */}
                <div className="partner-right">
                  <a
                    href="https://wa.me/918655835979"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-btn"
                  >
                    Get Treatment Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta">
        <h2>Need Help Choosing the Right Hospital?</h2>
        <p>Our experts will guide you to the best option.</p>
        <Link to="tel:+918655835979" className="outline-btn white">
          <Phone size={18} /> Get Personalized Recommendation
        </Link>
      </section>
    </>
  );
}
