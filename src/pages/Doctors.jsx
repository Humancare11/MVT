import React from "react";
import { Award } from "lucide-react";
import "./Doctors.css";
import Narendra from "../assets/dr-naresh-trehan.webp";
import Balkrisnan from "../assets/dr-naresh-trehan.webp";
import Mohd from "../assets/dr-naresh-trehan.webp";
import Adwani from "../assets/dr-naresh-trehan.webp";
import Amit from "../assets/dr-naresh-trehan.webp";
import Kaushal from "../assets/dr-naresh-trehan.webp";
import Hamdule from "../assets/dr-naresh-trehan.webp";
import Sudhansu from "../assets/dr-naresh-trehan.webp";
import Abhay from "../assets/dr-naresh-trehan.webp";
import Dinshaw from "../assets/dr-naresh-trehan.webp";
import Shailesh from "../assets/dr-naresh-trehan.webp";
import Kamran from "../assets/dr-naresh-trehan.webp";
import Sanjeev from "../assets/dr-naresh-trehan.webp";
import Fatuque from "../assets/dr-naresh-trehan.webp";
import zarir from "../assets/dr-naresh-trehan.webp";

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
    name: "Dr. Adwani",
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
  {
    name: "Dr. Sudhansu Bhattacharya",
    specialty: "Cardio-Thoracic & Vascular Surgeon",
    experience: "40+ years",
    image: Sudhansu,
  },
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
    experience: "30+ years",
    image: Fatuque,
  },
  {
    name: "Dr. Zarir Udwadia",
    specialty: "Chest Physician / Pulmonologist",
    experience: "30+ years",
    image: zarir,
  },
  {
    name: "Dr Sanjeev Amin",
    specialty: "Rheumatologist",
    experience: "30+ years",
    image: Sanjeev,
  },
  {
    name: "Dr Sanjeev Amin",
    specialty: "Rheumatologist",
    experience: "30+ years",
    image: Sanjeev,
  },
  {
    name: "Dr Sanjeev Amin",
    specialty: "Rheumatologist",
    experience: "30+ years",
    image: Sanjeev,
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
