import React from "react";
import { Award } from "lucide-react";
import "./Doctors.css";
import Narendra from "../assets/docters/dr-naresh-trehan.jpeg";
import Balkrisnan from "../assets/docters/balakrishna.jpeg";
import Mohd from "../assets/docters/mohamed-rela.jpeg";
import Adwani from "../assets/docters/suresh-advani.jpeg";
import Amit from "../assets/docters/amit-maydeo.jpeg";
import Kaushal from "../assets/docters/kaushal-pandey.jpeg";
import Hamdule from "../assets/docters/hamdulay.jpg";
// import Sudhansu from "../assets/docters/dr-naresh-trehan.jpeg";
import Abhay from "../assets/docters/abhay-bhave.jpeg";
import Dinshaw from "../assets/docters/dinshaw-pardiwala.jpg";
import Shailesh from "../assets/docters/shailesh_raina.jpg";
import Kamran from "../assets/docters/kamran-khan.jpg";
import Sanjeev from "../assets/docters/sanjiv-amin.jpg";
import Fatuque from "../assets/docters/fatuque-udwadia.jpeg";
import zarir from "../assets/docters/zarir-udwadia.jpeg";
// -----------------DELHI--------------------------------------------------------------
import Rakesh from "../assets/docters/rakesh-gupta.jpeg";
import Soin from "../assets/docters/soin.jpeg";
import Ashok from "../assets/docters/ashok-rajgopala.jpg";
import Sandeep from "../assets/docters/sandeep-vaishya.jpeg";
// import Rajeev from "../assets/docters/dr-naresh-trehan.jpeg";
import Rohit from "../assets/docters/rohit-bansil.jpg";
// --------------------------HYDERABAD--------------------------------------------------
import Nageshwar from "../assets/docters/nageshwar-reddy.jpeg";
import Gopi from "../assets/docters/gopi-chand.jpeg";
import Sudheer from "../assets/docters/sudheer-koganti.jpeg";
import Gurava from "../assets/docters/gurav-reddy.jpg";
import SKGupta from "../assets/docters/s-k-gupta.jpeg";
import AVSSuresh from "../assets/docters/AVS-Suresh.jpeg";
// ------------------------BANGALORE----------------------------------------------------
// import DeviPrasad from "../assets/docters/dr-naresh-trehan.jpeg";
import SandeepN from "../assets/docters/sandeep-nayak.jpeg";
import Gopinath from "../assets/docters/kodaganur-gopinath.jpeg";
import Kamini from "../assets/docters/kamini-rao.jpg";
import Shobha from "../assets/docters/shobha-nandavar.jpeg";
import Kamal from "../assets/docters/kamal-kiran.jpeg";
import Venkataram from "../assets/docters/venkataram-mysore.jpg";
import Anil from "../assets/docters/Anil-kumar.jpg";
// import DeviPrasad from "../assets/docters/dr-naresh-trehan.jpge";
// import SandeepN from "../assets/docters/dr-naresh-trehan.jpeg";
// import Gopinath from "../assets/docters/dr-naresh-trehan.jpeg";
// import Kamini from "../assets/docters/dr-naresh-trehan.jpeg";
// import Shobha from "../assets/docters/dr-naresh-trehan.jpeg";
// import Kamal from "../assets/docters/dr-naresh-trehan.jpeg";
// import Venkataram from "../assets/docters/dr-naresh-trehan.jpeg";
// import Anil from "../assets/docters/dr-naresh-trehan.jpeg";
// ------------------------CHENNAI-------------------------------------------------------
import Thiagarajan from "../assets/docters/thiagarajan-srinivasan.jpeg";
import Vijayan from "../assets/docters/vijayan.jpeg";

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
    name: "Dr. Mohd Rela",
    specialty:
      "Liver Transplant Surgeon & HPB (Hepato-Pancreato-Biliary) Surgery",
    experience: "28+ years",
    image: Mohd,
  },
  {
    name: "Dr. Suresh Adwani",
    specialty: "Oncologist",
    experience: "45+ years",
    image: Adwani,
  },
  {
    name: "Dr. Amit Maidev",
    specialty: "Gastroenterologist",
    experience: "35+ years",
    image: Amit,
  },
  {
    name: "Dr. Kaushal Pandey",
    specialty: "Cardio-Thoracic & Vascular Surgeon",
    experience: "35+ years",
    image: Kaushal,
  },
  {
    name: "Dr. Hamdule",
    specialty: "Cardio-Thoracic & Vascular Surgeon",
    experience: "30+ years",
    image: Hamdule,
  },
  // {
  //   name: "Dr. Sudhansu Bhattacharya",
  //   specialty: "Cardio-Thoracic & Vascular Surgeon",
  //   experience: "40+ years",
  //   image: Sudhansu,
  // },
  {
    name: "Dr. Abhay Bhave",
    specialty: "Haematologist",
    experience: "30+ years",
    image: Abhay,
  },
  {
    name: "Dr Dinshaw Pardiwala",
    specialty: "Sports Medicine Specialist",
    experience: "25+ years",
    image: Dinshaw,
  },
  {
    name: "Dr Shailesh Raina",
    specialty: "Renal (Kidney) Transplant Surgeon",
    experience: "35+ years",
    image: Shailesh,
  },
  {
    name: "Dr. Kamran Khan",
    specialty: "Oncologic Surgeon / Cancer Surgeon",
    experience: "25+ years",
    image: Kamran,
  },
  {
    name: "Dr. Sanjeev Amin",
    specialty: "Rheumatologist",
    experience: "30+ years",
    image: Sanjeev,
  },
  {
    name: "Dr. Fatuque Udwadia",
    specialty: "Critical Care Medicine",
    experience: "70+ years",
    image: Fatuque,
  },
  {
    name: "Dr. Zarir Udwadia",
    specialty: "Chest Physician / Pulmonologist",
    experience: "30+ years",
    image: zarir,
  },

  // -----------------DELHI----------------------------------
  {
    name: "Dr. Rakesh Gupta",
    specialty:
      "Over 25 years of experience in general medicine and internal medicine.",
    experience: "25+ years",
    image: Rakesh,
  },
  {
    name: "Dr. A.S. Soin",
    specialty:
      "Internationally recognized pioneer in liver transplantation and hepatobiliary surgery",
    experience: "35+ years",
    image: Soin,
  },
  {
    name: "Dr. Ashok Rajgopal",
    specialty:
      "One of India’s most experienced orthopaedic surgeons, especially for knee surgeries (arthroplasty, arthroscopy).",
    experience: "45+ years",
    image: Ashok,
  },
  {
    name: "Dr. Sandeep Vaishya",
    specialty:
      "Expert in minimally invasive neurosurgery, skull base tumors, spinal surgery, image-guided procedures, brachial plexus surgery, and more.",
    experience: "30+ years",
    image: Sandeep,
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
    image: Rohit,
  },

  // --------------------------HYDERABAD-------------------------------------
  {
    name: "Dr. D. Nageshwar Reddy",
    specialty: "Gastroenterology Pioneer",
    experience: "50+ years",
    image: Nageshwar,
  },
  {
    name: "Dr. Gopi Chand Mannam",
    specialty: "Cardiac Surgeon & Leader",
    experience: "40+ years",
    image: Gopi,
  },
  {
    name: "Dr. Sudheer Koganti",
    specialty: "Cardiology Specialist",
    experience: "15+ years",
    image: Sudheer,
  },
  {
    name: "Dr. A. V. Gurava Reddy",
    specialty: "Orthopedic Surgeon & Joint Replacement Expert",
    experience: "30+ years",
    image: Gurava,
  },
  {
    name: "Dr. S.K. Gupta",
    specialty: "Interventional Cardiologist",
    experience: "20+ years",
    image: SKGupta,
  },
  {
    name: "Dr. AVS Suresh",
    specialty: "Medical Oncologist & Hematologist",
    experience: "20+ years",
    image: AVSSuresh,
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
    image: SandeepN,
  },
  {
    name: "Dr. Kodaganur S. Gopinath",
    specialty: "Surgical Oncologist",
    experience: "45+ years",
    image: Gopinath,
  },
  {
    name: "Dr. Kamini A. Rao",
    specialty: "Reproductive Medicine & IVF Specialist",
    experience: "40+ years",
    image: Kamini,
  },
  {
    name: "Dr. Shobha Nandavar",
    specialty: "neurology specialists",
    experience: "20+ years",
    image: Shobha,
  },
  {
    name: "Dr. Kamal Kiran Mukkavilli",
    specialty: "nephrologist and kidney transplant specialist.",
    experience: "20+ years",
    image: Kamal,
  },
  {
    name: "Dr. Venkataram Mysore",
    specialty:
      "Dermatologist with global awards and leadership roles in international societies.",
    experience: "35+ years",
    image: Venkataram,
  },
  {
    name: "Dr. Anil Kumar T",
    specialty:
      "Expert in minimally invasive and robotic uro-oncologic surgeries.",
    experience: "10+ years",
    image: Anil,
  },

  // ------------------------CHENNAI---------------------------------------------
  {
    name: "Dr. Thiagarajan Srinivasan",
    specialty: "Liver Transplant & HPB Surgery",
    experience: "20+ years",
    image: Thiagarajan,
  },
  {
    name: "Dr. J. Vijayan",
    specialty: "Gastroenterology & Hepatology",
    experience: "40+ years",
    image: Vijayan,
  },
];

export default function DoctorsPage() {
  return (
    <>
      <section className="doctors-hero">
        <span className="hero-badge">Medical Specialties</span>
        <h1>World-Class Treatments at Affordable Prices</h1>
        <p>
          Access India's finest specialists and cutting-edge medical technology
          at a fraction of Western costs
        </p>
      </section>
      {/* HERO */}

      {/* DOCTORS LIST */}
      <section className="doctors-section">
        <div className="doctors-grid">
          {doctors.map((doc, index) => (
            <div className="doctor-card" key={index}>
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
          ))}
        </div>

        <p className="doctors-footer">
          Our network includes 300+ specialist doctors across various medical
          fields
        </p>
      </section>
    </>
  );
}
