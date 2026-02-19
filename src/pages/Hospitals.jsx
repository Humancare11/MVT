import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./Hospitals.css";
import { Helmet } from "react-helmet";

import Apollo from "../assets/hospitals-photos/apollo.webp";
import Manipal from "../assets/hospitals-photos/manipal.webp";
import Fortis from "../assets/hospitals-photos/fortis.webp";
import Narayana from "../assets/hospitals-photos/narayana.webp";
import Aster from "../assets/hospitals-photos/aster.webp";
import Max from "../assets/hospitals-photos/max.webp";
import Care from "../assets/hospitals-photos/care.webp";
import Kims from "../assets/hospitals-photos/kims.webp";
import Medicover from "../assets/hospitals-photos/medicover.webp";

import Samitivej from "../assets/hospitals-photos/samitivej-hospital.webp";
import Bangkok from "../assets/hospitals-photos/Bangkok-hospital.webp";
import Phyathai from "../assets/hospitals-photos/phythai-1&2-hospital.webp";
import Gleneagles from "../assets/hospitals-photos/gleneagles-hospital-singapore.webp";
import Raffles from "../assets/hospitals-photos/raffles-hospital.webp";
import MountElizabeth from "../assets/hospitals-photos/mount-elizabeth-hospital.webp";
import Crawfurd from "../assets/hospitals-photos/crawfurd-hospital.webp";
import Kpj from "../assets/hospitals-photos/kpj-hospital.webp";
import Liv from "../assets/hospitals-photos/liv-hospital.webp";
import Medipol from "../assets/hospitals-photos/medipol-hospital.webp";
import Guven from "../assets/hospitals-photos/guven.webp";

// --- Mock API data (kept in this file as requested) ---
const _mockHospitalData = [
  {
    id: 1,
    name: "Apollo Hospitals",
    address:
      "Plot no 13, Parsik Hill Rd, off Uran Road, Sector 23, CBD Belapur, Navi Mumbai, Maharashtra 400614",
    desc: "Apollo Hospitals is one of India’s largest and most trusted private healthcare groups, offering comprehensive multispecialty medical services across a vast national network. Renowned for clinical excellence, advanced technology, and leadership in medical tourism, Apollo delivers world-class patient care across major specialties.",
    specialties: [
      "Cardiology",
      "Oncology",
      "Neurology",
      "Orthopedics",
      "Gastroenterology",
      "Nephrology & Urology",
      "Pulmonology",
      "Endocrinology",
      "Gynecology & Obstetrics",
      "Pediatrics",
      "Transplant Medicine",
      "Robotic & Minimally Invasive Surgery",
    ],
    image: Apollo,
    phone: "+919833166697",
    locations: ["CBD Belapur, Navi Mumbai"],
    tabsLocation: ["India"],
  },

  {
    id: 2,
    name: "Manipal Hospitals",
    address: "Manipal Hospital, Sector 6 Dwarka, Dwarka, Delhi, 110075",
    desc: "Manipal Hospitals is a leading integrated healthcare provider in India, operating a wide network of multispecialty hospitals. Known for high clinical standards and patient-centric care, the group delivers advanced medical services supported by modern infrastructure and experienced medical professionals.",
    specialties: [
      "Cardiology",
      "Oncology",
      "Neurology",
      "Neurosurgery",
      "Gastroenterology",
      "Orthopedics",
      "Nephrology",
      "Liver Transplantation & Hepato-Pancreato-Biliary Surgery",
      "Paediatrics",
      "Obstetrics & Gynecology",
      "Emergency & Critical Care",
      "Robotic Surgery",
    ],
    image: Manipal,
    phone: "+919833166697",
    locations: ["Goa", "Hyderabad", "Bangalore", "Kolkata"],
    tabsLocation: ["India"],
  },

  {
    id: 3,
    name: "Fortis Healthcare",
    address: "India",
    desc: "Fortis Healthcare is a prominent private hospital network in India, providing high-quality multispecialty medical services across major cities. The group is recognized for its strong clinical outcomes, advanced diagnostics, and commitment to delivering ethical and patient-focused healthcare.",
    specialties: [
      "Cardiology & Cardiac Surgery",
      "Oncology",
      "Orthopedics",
      "Neurology & Neurosurgery",
      "Gastroenterology",
      "Nephrology & Urology",
      "Emergency & Critical Care",
      "Transplant Services",
      "Pulmonology",
      "Radiology & Diagnostics",
    ],
    image: Fortis,
    phone: "+919833166697",
    locations: ["Delhi", "Mulund, Mumbai"],
    tabsLocation: ["India"],
  },

  {
    id: 4,
    name: "Narayana Health",
    address: "India",
    desc: "Narayana Health is a major healthcare provider in India, widely respected for its expertise in cardiac sciences alongside comprehensive multispecialty care. The group combines clinical excellence with affordable healthcare delivery across multiple regions of the country.",
    specialties: [
      "Cardiology & Cardiac Surgery",
      "Oncology",
      "Orthopedics",
      "Neurology",
      "Gastroenterology",
      "Nephrology & Urology",
      "Paediatrics",
      "Emergency & Trauma Care",
      "Pulmonology",
      "Endocrinology",
    ],
    image: Narayana,
    phone: "+919833166697",
    locations: ["India"],
    tabsLocation: ["India"],
  },

  {
    id: 16,
    name: "Aster DM Healthcare",
    address:
      "Kuttisahib Road Cheranelloor, South Chittoor, Kochi, Kerala 682027",
    desc: "Aster DM Healthcare is a well-established international healthcare group with a strong presence in India. The network offers advanced multispecialty medical services, supported by skilled clinicians, modern technology, and a strong focus on quality and patient safety.",
    specialties: [
      "Cardiology",
      "Oncology",
      "Orthopedics",
      "Neurology",
      "Gastroenterology",
      "Nephrology & Urology",
      "Emergency & Critical Care",
      "Pulmonology",
      "Obstetrics & Gynecology",
      "Radiology & Diagnostics",
    ],
    image: Aster,
    phone: "+919833166697",
    locations: ["Kochi"],
    tabsLocation: ["India"],
  },

  {
    id: 17,
    name: "Max Healthcare",
    address: "India",
    desc: "Max Healthcare is one of India’s leading hospital networks, delivering comprehensive multispecialty care with a strong presence in the Delhi-NCR region. The group is known for its clinical expertise, cutting-edge infrastructure, and commitment to excellence in patient outcomes.",
    specialties: [
      "Cardiology & Cardiac Surgery",
      "Oncology",
      "Neurology",
      "Orthopedics",
      "Gastroenterology",
      "Emergency & Critical Care",
      "Obstetrics & Gynecology",
      "Sports Medicine",
      "Pulmonology",
      "Nephrology & Urology",
    ],
    image: Max,
    phone: "+919833166697",
    locations: ["India"],
    tabsLocation: ["India"],
  },

  {
    id: 18,
    name: "CARE Hospitals",
    address: "India",
    desc: "CARE Hospitals is a prominent corporate healthcare chain in India, offering a wide range of multispecialty medical services. The group is recognized for its strong clinical capabilities, advanced treatment protocols, and patient-centric approach across multiple locations.",
    specialties: [
      "Cardiology",
      "Oncology",
      "Neurology",
      "Orthopedics",
      "Gastroenterology",
      "Emergency & Critical Care",
      "Pulmonology",
      "Nephrology & Urology",
      "Obstetrics & Gynecology",
      "Radiology & Imaging",
    ],
    image: Care,
    phone: "+919833166697",
    locations: ["India"],
    tabsLocation: ["India"],
  },

  {
    id: 19,
    name: "KIMS Hospitals",
    address: "1, Vinod Nagar Rd, Anayara, Thiruvananthapuram, Kerala 695029",
    desc: "KIMS Hospitals is a leading healthcare group in India, providing high-quality multispecialty services across several regions. The network is known for its medical expertise, modern facilities, and consistent focus on delivering reliable and ethical healthcare.",
    specialties: [
      "Cardiology",
      "Oncology",
      "Neurology",
      "Orthopedics",
      "Gastroenterology",
      "Nephrology & Urology",
      "Emergency & Critical Care",
      "Pulmonology",
      "Obstetrics & Gynecology",
      "Radiology & Diagnostics",
    ],
    image: Kims,
    phone: "+919833166697",
    locations: ["Kerala"],
    tabsLocation: ["India"],
  },

  {
    id: 20,
    name: "Medicover Hospitals",
    address:
      "The Lane of IBIS Hotels, Behind Cyber Towers, In, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081",
    desc: "Medicover Hospitals is part of a global healthcare organization, delivering comprehensive multispecialty medical services across India. The network emphasizes evidence-based treatment, modern clinical infrastructure, and accessible, high-quality patient care.",
    specialties: [
      "Cardiology",
      "Oncology",
      "Orthopedics",
      "Neurology",
      "Gastroenterology",
      "Nephrology & Urology",
      "Emergency & Critical Care",
      "Pulmonology",
      "Obstetrics & Gynecology",
      "Radiology & Imaging",
    ],
    image: Medicover,
    phone: "+919833166697",
    locations: ["Hyderabad"],
    tabsLocation: ["India"],
  },

  {
    id: 1,
    name: "Güven Hospital (Güven International)",
    address: "Kavaklıdere, Şimşek Street No. 29, 06540 Çankaya, Ankara, Turkey",
    desc: "Güven Hospital is a major private healthcare institution in Ankara, Turkey, offering a wide range of internationally-oriented medical services with decades of experience, modern facilities, and a strong focus on international patient care and safety.",
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
    image: Guven,
    phone: "+919833166697",
    locations: ["Ankara, Turkey"],
    tabsLocation: ["Turkey"],
  },

  {
    id: 2,
    name: "Medipol Health Group (Medipol Global)",
    address:
      "TEM Highway, Göztepe Exit No. 1, 34214 Bağcılar, Istanbul, Turkey",
    desc: "Medipol Health Group is a leading private healthcare network based in Turkey, operating an extensive integrated hospital system with advanced clinical services, modern medical technology, and international patient support — serving both domestic and global patients across multiple specialties.",
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
    image: Medipol,
    phone: "+919833166697",
    locations: ["Turkey"],
    tabsLocation: ["Turkey"],
  },

  {
    id: 3,
    name: "Liv Hospital",
    address:
      "Ulus, Ahmet Adnan Saygun Avenue, Canan Street, 34340 Beşiktaş, Istanbul, Turkey",
    desc: "Liv Hospital is a leading private healthcare network based in Turkey, offering internationally accredited, patient-centred medical services across a wide range of specialties with advanced technology and global patient support, trusted by patients from over 150 countries.",
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
    image: Liv,
    phone: "+919833166697",
    locations: ["Turkey", "Azerbaijan", "Hungary"],
    tabsLocation: ["Turkey"],
  },

  {
    id: 4,
    name: "KPJ Healthcare",
    address:
      "Malaysia (nationwide hospitals and care centres), Indonesia, Thailand, Bangladesh",
    desc: "KPJ Healthcare is Malaysia’s largest private healthcare provider, operating an extensive network of specialist hospitals and care facilities focused on delivering high-quality, patient-centred medical services and fostering clinical excellence across the region.",
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
    image: Kpj,
    phone: "+919833166697",
    locations: ["Malaysia", "Indonesia", "Thailand", "Bangladesh"],
    tabsLocation: ["Malaysia"],
  },

  {
    id: 5,
    name: "Crawfurd Hospital",
    address: "19 Adam Rd, Singapore 289891",
    desc: "Crawfurd Hospital is a private healthcare institution in Singapore focused on personalised and holistic patient care, offering hospitalisation, surgical services, diagnostic imaging, and preventive health screening in a comfortable setting.",
    specialties: [
      "General Surgery",
      "Internal Medicine & Chronic Disease Management",
      "Endoscopy Services",
      "Pain Management & Interventional Treatments",
      "Diagnostic Imaging",
      "Health Screening & Preventive Care",
      "Outpatient Clinics",
      "Inpatient & Day Surgery Care",
    ],
    image: Crawfurd,
    phone: "+919833166697",
    locations: ["Singapore"],
    tabsLocation: ["Singapore"],
  },

  {
    id: 6,
    name: "Mount Elizabeth Hospital",
    address: "3 Mount Elizabeth, Singapore 228510",
    desc: "Mount Elizabeth Hospital is a leading private tertiary care hospital in Singapore, part of the IHH Healthcare network, offering comprehensive multispecialty clinical services, advanced medical treatments, and internationally recognised standards of care for local and international patients.",
    specialties: [
      "Cardiology & Cardiovascular Care",
      "Oncology & Cancer Care",
      "Neuroscience & Brain & Spine Care",
      "Orthopaedics & Sports Medicine",
      "Transplant Services",
      "Gastroenterology",
      "Maternity & Gynaecology",
      "Minimally Invasive Surgery",
      "Emergency Care",
      "Diagnostic Imaging",
    ],
    image: MountElizabeth,
    phone: "+919833166697",
    locations: ["Singapore"],
    tabsLocation: ["Singapore"],
  },

  {
    id: 7,
    name: "Raffles Medical Group",
    address: "Singapore",
    desc: "Raffles Medical Group is a leading integrated private healthcare provider headquartered in Singapore, offering a comprehensive continuum of care from primary to tertiary care across Asia.",
    specialties: [
      "Primary & Family Medicine",
      "Emergency & Acute Care",
      "Specialist Clinics",
      "Dental & Oral Health",
      "Traditional Chinese Medicine",
      "Health Screening",
      "Diagnostic Radiology & Laboratory",
      "Corporate Healthcare Solutions",
    ],
    image: Raffles,
    phone: "+919833166697",
    locations: ["Singapore", "China", "Japan", "Vietnam", "Cambodia"],
    tabsLocation: ["Singapore"],
  },

  {
    id: 8,
    name: "Gleneagles Hospital",
    address: "6A Napier Rd, Singapore 258500",
    desc: "Gleneagles Hospital is a premier private tertiary care hospital in Singapore, part of the IHH Healthcare network, offering comprehensive medical and surgical care with internationally recognised standards and a focus on patient-centred service.",
    specialties: [
      "Oncology & Cancer Care",
      "Cardiology & Heart Health",
      "Gastroenterology",
      "Orthopaedics & Sports Medicine",
      "Obstetrics & Gynaecology",
      "Liver Transplant & Hepatobiliary Care",
      "General Surgery",
      "Neonatal & Maternity Services",
      "Emergency Care",
      "Diagnostic Imaging",
    ],
    image: Gleneagles,
    phone: "+919833166697",
    locations: ["Singapore", "Malaysia"],
    tabsLocation: ["Singapore", "Malaysia"],
  },

  {
    id: 9,
    name: "Phyathai Health Solutions",
    address: "Bangkok, Thailand",
    desc: "Thai Health Solutions is a healthcare service platform and official partner of Phyathai Hospitals in Thailand, providing global access to advanced medical care, treatment packages, specialist consultations, and seamless coordination with leading hospitals in Bangkok.",
    specialties: [
      "Cardiology & Heart Care",
      "Orthopedics & Joint Replacement",
      "Pediatrics & Child Health",
      "Dentistry & Oral Surgery",
      "ENT",
      "Beauty & Dermatology",
      "Fertility & Reproductive Medicine",
      "Gastrointestinal & Liver Care",
      "Sleep Disorders",
      "Health Screening",
    ],
    image: Phyathai,
    phone: "+919833166697",
    locations: ["Thailand"],
    tabsLocation: ["Thailand"],
  },

  {
    id: 10,
    name: "Bangkok Hospital",
    address:
      "2 Soi Phetchaburi 47 Yaek 10, Bang Kapi, Huai Khwang, Bangkok 10310, Thailand",
    desc: "Bangkok Hospital is a leading private tertiary care hospital in Thailand, part of the Bangkok Dusit Medical Services (BDMS) network, offering comprehensive multispecialty medical services and internationally recognized clinical care.",
    specialties: [
      "Cardiology & Cardiovascular Surgery",
      "Oncology",
      "Neurology",
      "Orthopedics & Joint Replacement",
      "Gastroenterology & Liver Care",
      "Obstetrics & Gynecology",
      "Pediatrics",
      "Emergency & Critical Care",
      "Robotic Surgery",
    ],
    image: Bangkok,
    phone: "+919833166697",
    locations: ["Thailand"],
    tabsLocation: ["Thailand"],
  },

  {
    id: 11,
    name: "Samitivej Hospital",
    address:
      "133 Sukhumvit 49, Khlong Tan Nuea, Watthana, Bangkok 10110, Thailand",
    desc: "Samitivej Hospitals is a leading private hospital group in Thailand, part of BDMS, known for world-class multispecialty care and international patient services.",
    specialties: [
      "Multi-Specialty",
      "Pediatrics",
      "Cardiology",
      "Orthopedics",
      "Oncology",
      "Women’s Health",
      "Gastroenterology",
      "Emergency Care",
      "Preventive Medicine",
    ],
    image: Samitivej,
    phone: "+919833166697",
    locations: ["Thailand"],
    tabsLocation: ["Thailand"],
  },
];

// simple in-file 'API' that returns hospital data (simulates async)
const fetchHospitals = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(_mockHospitalData), 220);
  });
};

export default function HospitalsPage() {
  const [hospitals, setHospitals] = useState([]);
  const [activeTab, setActiveTab] = useState("All");

  // derive unique locations from hospital data; include 'All' first
  const uniqueLocations = useMemo(() => {
    const set = new Set();
    hospitals.forEach((h) => {
      // prefer `tabsLocation` from API; fall back to `locations`
      const src = Array.isArray(h.tabsLocation)
        ? h.tabsLocation
        : Array.isArray(h.locations)
          ? h.locations
          : [];
      src.forEach((l) => set.add(l));
    });
    return ["All", ...Array.from(set)];
  }, [hospitals]);

  // Manual desired tab order: change this array to the exact sequence you want.
  const desiredTabOrder = [
    "All",
    "India",
    "Thailand",
    "Malaysia",
    "Singapore",
    "Turkey",
  ];
  // Build the final display order: include desired order items that exist in the data,
  // then append any remaining locations not listed in `desiredTabOrder`.
  const displayTabs = useMemo(() => {
    const available = uniqueLocations.filter((t) => t !== "All");
    const ordered = desiredTabOrder.filter(
      (t) => t !== "All" && available.includes(t),
    );
    const rest = available.filter((t) => !ordered.includes(t));
    return ["All", ...ordered, ...rest];
  }, [uniqueLocations]);

  const filteredHospitals =
    activeTab === "All"
      ? hospitals
      : hospitals.filter((h) => {
          const src = Array.isArray(h.tabsLocation)
            ? h.tabsLocation
            : Array.isArray(h.locations)
              ? h.locations
              : [];
          return src.includes(activeTab);
        });

  useEffect(() => {
    let mounted = true;
    fetchHospitals().then((data) => {
      if (mounted) setHospitals(data);
    });
    return () => (mounted = false);
  }, []);

  return (
    <>
      {/* HELMET SECTION START */}
      <Helmet>
        <title>Best Hospitals in India | Trusted Medical Centers</title>

        <meta
          name="description"
          content="Explore top hospitals in India including Apollo Hospital New Delhi and other leading healthcare centers for advanced and affordable treatment."
        />

        <meta
          name="keywords"
          content="best hospitals in india, top hospitals india, accredited hospitals india, multispecialty hospitals india, humancare hospitals"
        />

        <link
          rel="canonical"
          href="https://humancaremedicaltourism.com/hospitals"
        />
      </Helmet>
      {/* HELMET SECTION END */}

      {/* HERO SECTION START */}
      <section className="hospitals-hero-section">
        <div>
          <span className="hero-badge-hospitals">Medical Specialties</span>
          <h1>Top Hospitals & Medical Centers</h1>
          <p>
            Access India's finest specialists and cutting-edge medical
            technology at a fraction of Western costs.
          </p>
        </div>
      </section>
      {/* HERO SECTION END */}

      {/* LOCATION TABS START */}
      <div className="location-tabs">
        <div className="tabs-inner">
          {displayTabs.map((tab) => (
            <button
              key={tab}
              className={`hospital-tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
              data-tab={tab}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {/* LOCATION TABS END */}

      {/* HOSPITALS LIST START */}
      <section className="hospitals-list-section">
        <div className="main-hospitals-card">
          {filteredHospitals.map((h, idx) => (
            <Link
              key={`${h.id}-${idx}`}
              to={`/hospital-details/${h.id}`}
              className="hc-card-link"
            >
              <div className="hc-card">
                <div className="hc-left">
                  <img
                    src={h.image}
                    alt={h.name}
                    className="hc-thumb"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                  />
                </div>

                <div className="hc-middle">
                  <div className="hc-middle-top">
                    <span className="hc-super-label">SUPER SPECIALITY</span>
                    <h2 className="hc-title">{h.name}</h2>
                    <div className="hc-address">{h.address}</div>

                    <p className="hc-desc">{h.desc.slice(0, 60)}...</p>
                  </div>

                  <div className="hc-info-row">
                    <div className="hc-specialties">
                      {h.specialties.slice(0, 2).map((s, i) => (
                        <span key={i} className="hc-specialty-chip">
                          {s}
                        </span>
                      ))}
                      {h.specialties.length > 4 && (
                        <span className="hc-specialty-chip hc-more">
                          +{h.specialties.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="other-locations">
                    {h.locations && h.locations.length > 0 && (
                      <>
                        <strong>Other Locations:</strong>{" "}
                        {h.locations.join(", ")}
                      </>
                    )}
                  </div>

                  <div className="hc-right">
                    <button
                      className="hc-book-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        const msg = `Hello, I want to book an appointment at ${h.name}`;
                        const url = `https://wa.me/${h.phone.replace(/[^0-9+]/g, "")}?text=${encodeURIComponent(
                          msg,
                        )}`;
                        window.open(url, "_blank", "noopener,noreferrer");
                      }}
                    >
                      View and Book Appointments
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* HOSPITALS LIST END */}
    </>
  );
}

// expose the in-file fetch so details page can reuse it
export { fetchHospitals };
