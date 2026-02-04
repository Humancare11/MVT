import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Award, Search, MapPin, Briefcase, X } from "lucide-react";
import "./Doctors.css";
import { Helmet } from "react-helmet";
// -----------------Mumbai--------------------------------------------------------------
import Narendra from "../assets/docters/dr-naresh-trehan.webp";
import Balkrisnan from "../assets/docters/balakrishna.webp";
import Mohd from "../assets/docters/mohamed-rela.webp";
import Adwani from "../assets/docters/suresh-advani.webp";
import Amit from "../assets/docters/amit-maydeo.webp";
import Kaushal from "../assets/docters/kaushal-pandey.webp";
import Hamdule from "../assets/docters/hamdulay.webp";
// import Sudhansu from "../assets/docters/dr-naresh-trehan.webp";
import Abhay from "../assets/docters/abhay-bhave.webp";
import Dinshaw from "../assets/docters/dinshaw-pardiwala.webp";
import Shailesh from "../assets/docters/shailesh_raina.webp";
import Kamran from "../assets/docters/kamran-khan.webp";
import Sanjeev from "../assets/docters/sanjiv-amin.webp";
import Fatuque from "../assets/docters/fatuque-udwadia.webp";
import zarir from "../assets/docters/zarir-udwadia.webp";
// -----------------DELHI--------------------------------------------------------------
import Rakesh from "../assets/docters/rakesh-gupta.webp";
import Soin from "../assets/docters/soin.webp";
import Ashok from "../assets/docters/ashok-rajgopala.webp";
import Sandeep from "../assets/docters/sandeep-vaishya.webp";
// import Rajeev from "../assets/docters/dr-naresh-trehan.webp";
import Rohit from "../assets/docters/rohit-bansil.webp";
// --------------------------HYDERABAD--------------------------------------------------
import Nageshwar from "../assets/docters/nageshwar-reddy.webp";
import Gopi from "../assets/docters/gopi-chand.webp";
import Sudheer from "../assets/docters/sudheer-koganti.webp";
import Gurava from "../assets/docters/gurav-reddy.webp";
import SKGupta from "../assets/docters/s-k-gupta.webp";
import AVSSuresh from "../assets/docters/AVS-Suresh.webp";
// ------------------------BANGALORE----------------------------------------------------
// import DeviPrasad from "../assets/docters/dr-naresh-trehan.webp";
import SandeepN from "../assets/docters/sandeep-nayak.webp";
import Gopinath from "../assets/docters/kodaganur-gopinath.webp";
import Kamini from "../assets/docters/kamini-rao.webp";
import Shobha from "../assets/docters/shobha-nandavar.webp";
import Kamal from "../assets/docters/kamal-kiran.webp";
import Venkataram from "../assets/docters/venkataram-mysore.webp";
import Anil from "../assets/docters/Anil-kumar.webp";
// ------------------------CHENNAI-------------------------------------------------------
import Thiagarajan from "../assets/docters/thiagarajan-srinivasan.webp";
import Vijayan from "../assets/docters/vijayan.webp";

const doctors = [
  // -----------------MUMBAI----------------------------------------------
  {
    name: "Dr. Narendra trehan",
    specialty: "Cardiovascular & Cardiothoracic Surgeon",
    experience: "40+ years",
    city: "Mumbai",
    department: "Cardiothoracic & Cardiovascular Surgery",
    image: Narendra,
    description:
      "Over 40+ years of experience in heart surgery; founder and MD of Medanta – The Medicity; internationally known for advanced heart surgery including bypass, valve replacement, and surgical management of congenital and acquired heart diseases.",
  },
  {
    name: "Dr. Balkrisnan",
    specialty: "Cardiothoracic / Heart Surgery",
    experience: "40+ years",
    city: "Mumbai",
    department: "Cardiothoracic Surgery",
    image: Balkrisnan,
    description:
      "Likely referring to senior cardiothoracic surgeons with transplant experience.",
  },
  {
    name: "Dr. Mohd Rela",
    specialty:
      "Liver Transplant Surgeon & HPB (Hepato-Pancreato-Biliary) Surgery",
    experience: "28+ years",
    city: "Mumbai",
    department: "Liver Transplant & Hepatobiliary Surgery",
    image: Mohd,
    description:
      "One of the world’s best-known liver transplant specialists; has performed over 6,000 liver transplants, including rare procedures like pediatric and auxiliary transplants. Listed in the Guinness Book of Records for a transplant on a 5-day-old baby. Served as Professor of Liver Surgery & Transplantation in the UK and leads Dr. Rela Institute & Medical Centre, Chennai.",
  },
  {
    name: "Dr. Suresh Adwani",
    specialty: "Oncologist",
    experience: "45+ years",
    city: "Mumbai",
    department: "Oncology",
    image: Adwani,
    description:
      "Medical oncologist focusing on cancer chemotherapy, targeted therapy, and immunotherapy for solid tumors and hematologic cancers.",
  },
  {
    name: "Dr. Amit Maidev",
    specialty: "Gastroenterologist",
    experience: "35+ years",
    city: "Mumbai",
    department: "Gastroenterology",
    image: Amit,
    description:
      "Senior gastroenterologist with experience in diagnosing and managing liver, pancreatic, and GI tract diseases; skilled in endoscopy, hepatology workups, and motility disorders.",
  },
  {
    name: "Dr. Kaushal Pandey",
    specialty: "Cardio-Thoracic & Vascular Surgeon",
    experience: "35+ years",
    city: "Mumbai",
    department: "Cardiothoracic & Vascular Surgery",
    image: Kaushal,
    description:
      "Senior surgeon in CVTS with extensive experience in heart and vascular surgery (including bypass surgery, valve replacements, congenital heart disease surgery).",
  },
  {
    name: "Dr. Hamdule",
    specialty: "Cardio-Thoracic & Vascular Surgeon",
    experience: "30+ years",
    city: "Mumbai",
    department: "Cardiothoracic & Vascular Surgery",
    image: Hamdule,
    description:
      "Experienced cardiac surgeon, performing open-heart surgeries, CABG, valve repair/replacement — broadly aligned with senior CVTS practice.",
  },

  {
    name: "Dr. Abhay Bhave",
    specialty: "Haematologist",
    experience: "30+ years",
    city: "Mumbai",
    department: "Hematology",
    image: Abhay,
    description:
      "Senior expert in hematology — covering blood disorders, anemia, coagulation issues, bone marrow evaluation, and hematologic malignancies.",
  },
  {
    name: "Dr Dinshaw Pardiwala",
    specialty: "Sports Medicine Specialist",
    experience: "25+ years",
    city: "Mumbai",
    department: "Sports Medicine & Orthopaedics",
    image: Dinshaw,
    description:
      "Expert in musculoskeletal injuries, sports injuries, arthroscopy, and rehabilitation; works with athletes and active individuals for injury prevention and recovery.",
  },
  {
    name: "Dr Shailesh Raina",
    specialty: "Renal (Kidney) Transplant Surgeon",
    experience: "35+ years",
    city: "Mumbai",
    department: "Kidney Transplant & Urology",
    image: Shailesh,
    description:
      "Senior transplant surgeon with extensive experience in kidney transplantation and related surgical care, including cadaver and living donor transplants.",
  },
  {
    name: "Dr. Kamran Khan",
    specialty: "Oncologic Surgeon / Cancer Surgeon",
    experience: "25+ years",
    city: "Mumbai",
    department: "Surgical Oncology",
    image: Kamran,
    description:
      "Surgical oncologist managing cancer resections — including breast, GI, head and neck, and other solid tumors — with experience in complex tumor surgeries and multidisciplinary cancer care.",
  },
  {
    name: "Dr. Sanjeev Amin",
    specialty: "Rheumatologist",
    experience: "30+ years",
    city: "Mumbai",
    department: "Rheumatology",
    image: Sanjeev,
    description:
      "Specialist in rheumatic and autoimmune diseases (e.g., rheumatoid arthritis, lupus, spondyloarthritis); offers long-term management of chronic inflammatory disorders.",
  },
  {
    name: "Dr. Fatuque Udwadia",
    specialty: "Critical Care Medicine",
    experience: "70+ years",
    city: "Mumbai",
    department: "Critical Care Medicine",
    image: Fatuque,
    description:
      "Senior critical care specialist with extensive experience in managing ICU-level emergencies, sepsis, multi-organ failure, ventilation support, and complex acute care cases.",
  },
  {
    name: "Dr. Zarir Udwadia",
    specialty: "Chest Physician / Pulmonologist",
    experience: "30+ years",
    city: "Mumbai",
    department: "Pulmonology & Respiratory Medicine",
    image: zarir,
    description:
      "Leading chest specialist focusing on respiratory diseases including TB, COPD, asthma, interstitial lung disease, and advanced pulmonary diagnostics and management.",
  },

  // -----------------DELHI----------------------------------
  {
    name: "Dr. Rakesh Gupta",
    specialty: "General Medicine and Internal Medicine.",
    experience: "25+ years",
    city: "Delhi",
    department: "General Medicine / Internal Medicine",
    image: Rakesh,
    description:
      "A senior Internal Medicine and General Physician with decades of experience, Dr. Rakesh Gupta is known for diagnosing and treating a wide range of medical conditions, including chronic lifestyle diseases and acute illnesses. He practices at Apollo Hospitals, Delhi and is appreciated for his patient-focused and thorough approach.",
  },
  {
    name: "Dr. A.S. Soin",
    specialty: "Liver Transplantation and Hepatobiliary Surgery",
    experience: "35+ years",
    city: "Delhi",
    department: "Liver Transplant & Hepatobiliary Surgery",
    image: Soin,
    description:
      "Dr. Arvinder Singh Soin is one of India’s most renowned liver transplant surgeons. Based at Medanta – The Medicity, Gurugram, he pioneered liver transplantation in India and has performed thousands of successful transplants. He is a Padma Shri awardee and a global authority in hepatobiliary surgery.",
  },
  {
    name: "Dr. Ashok Rajgopal",
    specialty:
      "One of India’s most experienced orthopaedic surgeons, especially for knee surgeries (arthroplasty, arthroscopy).",
    experience: "45+ years",
    city: "Delhi",
    department: "Liver Transplant & Hepatobiliary Surgery",
    image: Ashok,
    description:
      "A legendary orthopaedic and knee replacement surgeon, Dr. Ashok Rajgopal is internationally recognized for joint replacement surgery. With tens of thousands of knee surgeries to his credit, he has played a major role in advancing orthopaedics in India and is a Padma Shri recipient.",
  },
  {
    name: "Dr. Sandeep Vaishya",
    specialty: "Expert In Neurosurgery, skull base tumors, spinal surgery",
    experience: "30+ years",
    city: "Delhi",
    department: "Neurosurgery",
    image: Sandeep,
    description:
      "Dr. Sandeep Vaishya is a highly respected neurosurgeon specializing in brain and spine surgery. He is known for expertise in minimally invasive neurosurgery, Gamma Knife surgery, and complex brain tumors, and practices at Fortis Memorial Research Institute, Gurugram.",
  },
  // {
  //   name: "Dr. Rajeev Seth",
  //   specialty: "Rheumatologist",
  //   experience: "30+ years",
  //   image: Rajeev,
  // },
  {
    name: "Dr. Rohit Bansil",
    specialty: "Neurosurgeon & Spine Specialist",
    experience: "15+ years",
    city: "Delhi",
    department: "Neurosurgery & Spine Surgery",
    image: Rohit,
    description:
      "Dr. Rohit Bansil is a neurosurgeon and spine specialist at BLK-Max Super Speciality Hospital, New Delhi. He specializes in minimally invasive spine surgery and complex brain and nerve procedures, and is known for his modern surgical techniques and patient-centric care.",
  },

  // --------------------------HYDERABAD-------------------------------------
  {
    name: "Dr. D. Nageshwar Reddy",
    specialty: "Gastroenterology Pioneer",
    experience: "50+ years",
    city: "Hyderabad",
    department: "Gastroenterology",
    image: Nageshwar,
    description:
      "A world-renowned gastroenterologist and therapeutic endoscopy expert, Dr. D. Nageshwar Reddy is the founder and chairman of Asian Institute of Gastroenterology and has received major civilian honours (Padma Shri, Padma Bhushan, and Padma Vibhushan) for his contributions to digestive disease management and endoscopy. He is widely recognized in India and internationally for GI care and research.",
  },
  {
    name: "Dr. Gopi Chand Mannam",
    specialty: "Cardiac Surgeon & Leader",
    experience: "40+ years",
    city: "Hyderabad",
    department: "Cardiac Surgery",
    image: Gopi,
    description:
      "A highly experienced cardiothoracic surgeon with over four decades of practice, Dr. Gopi Chand Mannam specializes in heart surgery, CABG (bypass), and complex cardiac procedures. He has performed tens of thousands of surgeries and is known for cardiac surgical excellence.",
  },
  {
    name: "Dr. Sudheer Koganti",
    specialty: "Cardiology Specialist",
    experience: "15+ years",
    city: "Hyderabad",
    department: "Cardiology",
    image: Sudheer,
    description:
      "Dr. Sudheer Koganti is an interventional cardiologist known for expertise in heart disease prevention and angioplasty/cardiac interventions. He has appeared in educational content discussing heart health and advanced interventional procedures",
  },
  {
    name: "Dr. A. V. Gurava Reddy",
    specialty: "Orthopedic Surgeon & Joint Replacement Expert",
    experience: "30+ years",
    city: "Hyderabad",
    department: "Orthopaedics & Joint Replacement",
    image: Gurava,
    description:
      "Dr. A. V. Gurava Reddy is a leading orthopedic and joint replacement surgeon known nationally for performing a high volume of hip and knee replacements and for advancing joint replacement care. He has extensive clinical experience and has contributed to orthopedic surgery awareness and training.",
  },
  {
    name: "Dr. S.K. Gupta",
    specialty: "Interventional Cardiologist",
    experience: "20+ years",
    city: "Hyderabad",
    department: "Interventional Cardiology",
    image: SKGupta,
    description:
      "I couldn’t find a well-known Dr. S. K. Gupta specifically linked to Bangalore with verified specialty details. That name may correspond to multiple doctors in different fields (e.g., orthopedics, internal medicine, radiology) — if you can share a specialty or hospital, I can give a precise summary.",
  },
  {
    name: "Dr. AVS Suresh",
    specialty: "Medical Oncologist & Hematologist",
    experience: "20+ years",
    city: "Hyderabad",
    department: "Medical Oncology & Hematology",
    image: AVSSuresh,
    description:
      "Dr. AVS Suresh is a Senior Consultant Medical Oncologist and Hematologist at Continental Hospitals, Gachibowli, Hyderabad, with over 20 years of experience in cancer care. He specializes in treating solid tumors (breast, lung, gastrointestinal, head & neck cancers) and blood cancers (leukemia, lymphoma, multiple myeloma). An AIIMS New Delhi alumnus, Dr. Suresh is skilled in chemotherapy, immunotherapy, targeted and precision oncology, and has performed 500+ stem cell and bone marrow transplants, making him a highly trusted expert for complex hemato-oncology cases.",
  },

  // ------------------------BANGALORE-------------------------------------
  // {
  //   name: "Dr. Devi Prasad Shetty",
  //   specialty: "Cardiac Surgeon",
  //   experience: "35+ years",
  //   image: DeviPrasad,
  // },
  {
    name: "Dr. Sandeep Nayak",
    specialty: "Surgical Oncologist",
    experience: "25+ years",
    city: "Bangalore",
    department: "Surgical Oncology",
    image: SandeepN,
    description:
      "Dr. Sandeep Nayak is a leading surgical oncologist based in Bangalore, known for robotic and minimally invasive cancer surgery, especially for thyroid and colorectal cancers. He pioneered techniques like robotic thyroidectomy (RABIT) and holds leadership roles in oncology services at major hospitals in the city.",
  },
  {
    name: "Dr. Kodaganur S. Gopinath",
    specialty: "Surgical Oncologist",
    experience: "45+ years",
    city: "Bangalore",
    department: "Surgical Oncology",
    image: Gopinath,
    description:
      "A Padma Shri–awardee surgical oncologist from Bangalore, Dr. Gopinath is a pioneer in cancer surgery and research. He founded the Bangalore Institute of Oncology and is known for expertise in head & neck and breast cancer surgery, combining clinical care with research contributions.",
  },
  {
    name: "Dr. Kamini A. Rao",
    specialty: "Reproductive Medicine & IVF Specialist",
    experience: "40+ years",
    city: "Bangalore",
    department: "Reproductive Medicine & IVF",
    image: Kamini,
    description:
      "Dr. Kamini A. Rao is a pioneer in reproductive medicine and IVF in India, based in Bangalore. She has over 40 years of experience in infertility treatment and assisted reproductive technologies, and has been honoured with the Padma Shri for her work. She co-founded dedicated fertility centres and has helped thousands of couples with advanced reproductive care.",
  },
  {
    name: "Dr. Shobha Nandavar",
    specialty: "Neurology Specialists",
    experience: "20+ years",
    city: "Bangalore",
    department: "Neurology",
    image: Shobha,
    description:
      "Dr. Shobha Nandavar is an extremely brilliant and distinguishing Neurologist in Bangalore, with more than 20 years of experience in her profession, spanning many positions and hospitals across the state. She is awarded with Clinical Fellowship in Cerebrovascular diseases from the University of Calgary, Canada where she has worked for 2 years. She specialises in the treatment of stroke. Dr. Shobha has presented vast number of research papers and publications pertaining to diverse concerns in Neurology. Many of her articles have been selected to be presented at both national and International levels.",
  },
  {
    name: "Dr. Kamal Kiran Mukkavilli",
    specialty: "Nephrologist and Kidney Transplant Specialist.",
    experience: "20+ years",
    city: "Bangalore",
    department: "Nephrology & Kidney Transplant",
    image: Kamal,
    description:
      "Dr. Kamal Kiran Mukkavilli is an Indian nephrologist and kidney transplant specialist known for performing complex kidney transplants, including ABO-incompatible and high-risk cross-match procedures. His main practice is outside Bangalore (e.g., Hyderabad), but his contributions to nephrology and transplant medicine are widely recognized in India.",
  },
  {
    name: "Dr. Venkataram Mysore",
    specialty:
      "Dermatologist with global awards and leadership roles in international societies.",
    experience: "35+ years",
    city: "Bangalore",
    department: "Nephrology & Kidney Transplant",
    image: Venkataram,
    description:
      "Dr. Venkataram Mysore is a well-known dermatologist specializing in cosmetic dermatology, laser treatments, and hair disorders. He has authored multiple books and scientific papers and is recognized internationally in dermatology education and practice (often associated with Bangalore and national dermatology forums).",
  },
  {
    name: "Dr. Anil Kumar T",
    specialty:
      "Expert in minimally invasive and robotic uro-oncologic surgeries.",
    experience: "10+ years",
    city: "Bangalore",
    department: "Urology & Uro-Oncology",
    image: Anil,
    description:
      "Dr. Anil Kumar T is a highly regarded urologist, uro-oncologist, and robotic surgeon based in Bangalore. He heads the Urology, Uro-Oncology & Robotic Surgery department at Zymus Hospital and also practices at Apollo Hospitals, Jayanagar and other clinics in the city. He holds an MBBS, MS, and MCh in Urology from Christian Medical College (CMC), Vellore, and has fellowships in Minimally Access Surgery, Uro-Oncology and Robotic Surgery, including a UICC Fellowship in Geneva. Dr. Kumar is known for his expertise in minimally invasive, laparoscopic, and robotic-assisted uro-oncologic surgeries, treating complex cancers of the kidney, bladder, prostate and testis with advanced precision techniques that offer faster recovery and reduced trauma.",
  },

  // ------------------------CHENNAI---------------------------------------------
  {
    name: "Dr. Thiagarajan Srinivasan",
    specialty: "Liver Transplant & HPB Surgery",
    experience: "20+ years",
    city: "Chennai",
    department: "Liver Transplant & Hepatobiliary Surgery",
    image: Thiagarajan,
    description:
      "Dr. Thiagarajan Srinivasan is a world-renowned liver transplant and hepatopancreatobiliary (HPB) surgeon based in Chennai, serving as the Director of the Institute of Liver Diseases, Transplant & HPB Surgery at MGM Healthcare. He has performed thousands of liver transplants (living, deceased donor, pediatric) and hundreds of complex HPB surgeries, and is known for pioneering advanced and minimally invasive liver procedures in India.",
  },
  {
    name: "Dr. J. Vijayan",
    specialty: "Gastroenterology & Hepatology",
    experience: "40+ years",
    city: "Chennai",
    department: "Gastroenterology & Hepatology",
    image: Vijayan,
    description:
      "Dr. J. Vijayan is a senior surgical gastroenterologist and general surgeon practicing in Chennai with decades of experience. He is known for expertise in gastrointestinal, hepatobiliary, and advanced laparoscopic surgeries, including liver surgery, pancreas procedures, and hernia repair, and uses minimally invasive techniques to optimize patient outcomes.",
  },
];

export default function DoctorsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Applied filters from URL
  const appliedSearch = searchParams.get("search") || "";
  const appliedCity = searchParams.get("city") || "";
  const appliedDepartment = searchParams.get("department") || "";

  // Local state for form inputs (before clicking search)
  const [search, setSearch] = useState(appliedSearch);
  const [city, setCity] = useState(appliedCity);
  const [department, setDepartment] = useState(appliedDepartment);

  // Auto-generate dropdown values
  const cities = [...new Set(doctors.map((doc) => doc.city).filter(Boolean))];
  const departments = [
    ...new Set(doctors.map((doc) => doc.department).filter(Boolean)),
  ];

  // Handle search button click
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (city) params.set("city", city);
    if (department) params.set("department", department);
    setSearchParams(params);
  };

  // Clear all filters
  const handleClear = () => {
    setSearch("");
    setCity("");
    setDepartment("");
    setSearchParams(new URLSearchParams());
  };

  // Filter logic using applied filters from URL
  const filteredDoctors = doctors.filter((doc) => {
    // Name search filter
    const matchesSearch =
      !appliedSearch ||
      doc.name.toLowerCase().includes(appliedSearch.toLowerCase());

    // City filter - only apply if city is selected
    const matchesCity = !appliedCity || doc.city === appliedCity;

    // Department filter - only apply if department is selected
    const matchesDepartment =
      !appliedDepartment || doc.department === appliedDepartment;

    return matchesSearch && matchesCity && matchesDepartment;
  });

  // For modal
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <>
      {/* HELMET SECTION START */}
      <Helmet>
        <title>
          Best Doctors in India | Experienced Medical Specialists - HumanCare
        </title>

        <meta
          name="description"
          content="Explore experienced and internationally trained doctors across multiple specialties in India. HumanCare Medical Tourism connects patients with trusted medical specialists."
        />

        <meta
          name="keywords"
          content="best doctors in india, medical specialists india, experienced surgeons india, find doctors india, humancare doctors"
        />

        <link
          rel="canonical"
          href="https://humancaremedicaltourism.com/doctors"
        />
      </Helmet>
      {/* HELMET SECTION END */}

      {/* HERO SECTION START */}
      <section className="doctors-hero-section">
        <div>
          <span className="hero-badge-doctors">Medical Specialties</span>
          <h1>World-Class Treatments at Affordable Prices</h1>
          <p>
            Access India's finest specialists and cutting-edge medical
            technology at a fraction of Western costs
          </p>
        </div>
      </section>
      {/* HERO SECTION END */}

      {/* FILTER BAR SECTION START */}
      <div className="filter-bar">
        <div className="filter-container">
          <div className="filter-group">
            <Search className="filter-icon" size={20} />
            <input
              type="text"
              placeholder="Search by doctor name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <MapPin className="filter-icon" size={20} />
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">Select City</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <Briefcase className="filter-icon" size={20} />
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="">Select Department</option>
              {departments.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-actions">
            <button className="search-btn" onClick={handleSearch}>
              <Search size={18} />
              Search
            </button>
            <button className="clear-btn" onClick={handleClear}>
              <X size={18} />
              Clear
            </button>
          </div>
        </div>
      </div>
      {/* FILTER BAR SECTION END */}

      {/* DOCTORS LIST SECTION START */}
      <section className="doctors-section">
        <div className="doctors-grid">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doc, index) => (
              <div
                className="doctor-card"
                key={index}
                onClick={() => setSelectedDoctor(doc)}
                role="button"
                tabIndex={0}
              >
                <div className="doctor-image">
                  <img src={doc.image} alt={doc.name} />
                </div>

                <h3>{doc.name}</h3>
                <p className="specialty">{doc.specialty}</p>
                <div className="experience">
                  <Award />
                  {doc.experience}
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">
              No doctors found matching your search criteria.
            </p>
          )}
        </div>

        {filteredDoctors.length > 0 && (
          <p className="doctors-footer">
            Showing {filteredDoctors.length} of {doctors.length} specialist
            doctors
          </p>
        )}
      </section>
      {/* DOCTORS LIST SECTION END */}

      {/* DOCTOR DETAILS MODAL SECTION START */}
      {selectedDoctor && (
        <div
          className="docker-modal-overlay"
          onClick={() => setSelectedDoctor(null)}
        >
          <div
            className="docker-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="docker-modal-close"
              onClick={() => setSelectedDoctor(null)}
              aria-label="Close details"
            >
              <X />
            </button>

            <div className="docker-modal-body">
              <div className="docker-modal-info">
                <h2 className="docker-modal-name">{selectedDoctor.name}</h2>
                <p className="docker-modal-specialty">
                  {selectedDoctor.specialty}
                </p>
                <p className="docker-modal-experience">
                  Experience: {selectedDoctor.experience}
                </p>
                <p className="docker-modal-description">
                  {selectedDoctor.description || "No description available."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* DOCTOR DETAILS MODAL SECTION END */}
    </>
  );
}
