import { useState, useEffect, useRef } from "react";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./orthopedicTreatmentIndia.css";

import {
  FaArrowRight,
  FaBed,
  FaBolt,
  FaBullseye,
  FaChartLine,
  FaCheck,
  FaUser,
  FaUserMd,
  FaLightbulb,
  FaGlobe,
  FaHeart,
  FaHeartbeat,
  FaMoneyBillWave,
  FaClock,
  FaRobot,
  FaHandshake,
  FaFileAlt,
  FaMapMarkerAlt,
  FaPassport,
  FaPlaneArrival,
  FaPills,
  FaQuoteLeft,
  FaClipboardList,
  FaCheckCircle,
  FaChild,
  FaDotCircle,
  FaExchangeAlt,
  FaPhone,
  FaLock,
  FaShieldAlt,
  FaPhoneAlt,
  FaStar,
  FaWhatsapp,
  FaChevronDown,
  FaPlus,
  FaTimes,
} from "react-icons/fa";
import heroImage from "../departments/dept-images/orthopedics-treatment.webp";
import about from "../departments/dept-images/orthopedic-surgeon-india.webp";
import about1 from "../departments/dept-images/knee-replacement-patient-india.webp";
import about2 from "../departments/dept-images/robotic-knee-surgery-india.webp";
import whyChooseUs from "../departments/dept-images/why-choose-us.webp";

import SatyenNabarImage from "../departments/dept-images/orthopedic/dr-satyen-nabar.webp";
import DinshawPardiwalaImage from "../departments/dept-images/orthopedic/Dr.-Dinshaw-pardiwala.webp";
import VivekAllahbadiaImage from "../departments/dept-images/orthopedic/Dr.-Vivek-Allahbadia.webp";
import MihirBapatImage from "../departments/dept-images/orthopedic/Dr.-Mihir-Bapat.webp";
import DDTannaImage from "../departments/dept-images/orthopedic/Dr.-D.D.-Tanna.webp";
import AshokJohariImage from "../departments/dept-images/orthopedic/Dr.-Ashok-Johari.webp";

const WA = ({ size = 5 }) => (
  <FaWhatsapp className={`icon-wa icon-wa--${size}`} />
);

const WA_URL =
  "https://wa.me/919833166697?text=Hello%2C%20I%20need%20orthopedic%20treatment%20consultation";

// Icon components
const DiagnosisIcon = () => <FaUserMd />;
const SupportIcon = () => <FaGlobe />;
const RecoveryIcon = () => <FaHeartbeat />;
const TransparencyIcon = () => <FaFileAlt />;
const AdvancedIcon = () => <FaRobot />;

const cards = [
  {
    id: "01",
    tag: "Diagnosis",
    icon: <DiagnosisIcon />,
    title: "Comprehensive Diagnosis & Evaluation",
    items: [
      "X-rays & MRI review",
      "Joint mobility assessment",
      "Arthritis & pain evaluation",
      "Medical history analysis",
      "Age-based treatment planning",
    ],
  },
  {
    id: "02",
    tag: "Support",
    icon: <SupportIcon />,
    title: "Dedicated International Patient Support",
    items: [
      "Online doctor consultation",
      "Medical visa assistance",
      "Travel & accommodation",
      "Airport pickup support",
      "Language assistance",
    ],
  },
  {
    id: "03",
    tag: "Recovery",
    icon: <RecoveryIcon />,
    title: "Recovery & Rehabilitation Care",
    items: [
      "Personalized physiotherapy",
      "Mobility & walking training",
      "Pain management guidance",
      "Recovery monitoring",
      "Follow-up support",
    ],
  },
  {
    id: "04",
    tag: "Transparency",
    icon: <TransparencyIcon />,
    title: "Transparent Treatment & Cost Guidance",
    items: [
      "Recommended procedure info",
      "Hospital stay duration",
      "Recovery expectations",
      "Estimated treatment cost",
      "Rehabilitation planning",
    ],
    wide: true,
  },
  {
    id: "05",
    tag: "Advanced",
    icon: <AdvancedIcon />,
    title: "Advanced Orthopedic Treatment Planning",
    items: [
      "Total knee replacement",
      "Robotic knee replacement",
      "Bilateral knee replacement",
      "Joint preservation",
      "Revision knee surgery",
    ],
    wide: true,
  },
];

const Card = ({ card }) => (
  <div className={`approach-card ${card.wide ? "approach-card--wide" : ""}`}>
    <div className="approach-card__icon">{card.icon}</div>
    <span className="approach-card__tag">{card.tag}</span>
    <h3 className="approach-card__title">{card.title}</h3>
    <ul
      className={`approach-card__list ${card.wide ? "approach-card__list--grid" : ""}`}
    >
      {card.items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

import KneeReplacementImage from "../departments/dept-images/total-knee-replacement-surgery-in-india.webp";
import PartialKneeReplacementImage from "../departments/dept-images/partial-knee-replacement.webp";
import BilateralKneeReplacementImage from "../departments/dept-images/bilateral-knee-replacement.webp";
import RoboticKneeReplacementImage from "../departments/dept-images/robotic-knee-replacement.webp";
import ReviewKneeReplacementImage from "../departments/dept-images/revision-knee-replacement.webp";
import MinimalInvasiveKneeSurgeryImage from "../departments/dept-images/minimally-invasive-knee-surgery.webp";
import JointReplacementImage from "../departments/dept-images/orthopedics-treatment.webp";
import TraumaOrthopedicsImage from "../departments/dept-images/orthopedics-treatment.webp";

const orthopedicServices = [
  {
    id: 1,
    title: "Total Knee Replacement Surgery in India",
    description:
      "Advanced total knee replacement surgery in India helps patients with severe arthritis and chronic knee pain regain mobility, reduce stiffness, and improve daily movement.",
    image: KneeReplacementImage,
    alt: "Total knee replacement surgery in India for severe arthritis and chronic knee pain",
  },
  {
    id: 2,
    title: "Partial Knee Replacement",
    description:
      "Partial knee replacement in India is suitable for patients with limited joint damage, helping preserve healthy tissue while improving knee function and recovery time.",
    image: PartialKneeReplacementImage,
    alt: "Partial knee replacement treatment in India for damaged knee joint recovery",
  },
  {
    id: 3,
    title: "Bilateral Knee Replacement",
    description:
      "Affordable bilateral knee replacement cost in India allows patients with severe pain in both knees to receive advanced joint replacement treatment with long-term mobility benefits.",
    image: BilateralKneeReplacementImage,
    alt: "Bilateral knee replacement surgery in India for patients with pain in both knees",
  },
  {
    id: 4,
    title: "Robotic Knee Replacement",
    description:
      "The robotic knee replacement cost in India remains affordable for international patients seeking precise implant positioning, better alignment, and faster rehabilitation support.",
    image: RoboticKneeReplacementImage,
    alt: "Robotic knee replacement surgery in India with precision orthopedic technology",
  },
  {
    id: 5,
    title: "Revision Knee Replacement",
    description:
      "Revision knee replacement surgery in India is recommended for failed implants, persistent pain, or joint instability requiring advanced corrective orthopedic procedures.",
    image: ReviewKneeReplacementImage,
    alt: "Revision knee replacement surgery in India for failed or damaged knee implants",
  },
  {
    id: 6,
    title: "Minimally Invasive Knee Surgery",
    description:
      "Modern knee surgery in India also includes minimally invasive procedures designed to reduce tissue damage, shorten hospital stays, and support quicker recovery.",
    image: MinimalInvasiveKneeSurgeryImage,
    alt: "Minimally invasive knee surgery in India with faster recovery and smaller incisions",
  },
];

// ServiceCard Component
function OrthopedicServiceCard({ service }) {
  return (
    <div className="orthopedic-service-card">
      <img
        src={service.image}
        alt={service.alt}
        className="orthopedic-service-card-image"
        loading="lazy"
      />
      <div className="orthopedic-service-card-overlay" />
      <div className="orthopedic-service-card-content">
        <div className="orthopedic-service-card-top">
          <h3 className="orthopedic-service-card-title">{service.title}</h3>
        </div>
        <p className="orthopedic-service-card-desc">{service.description}</p>
      </div>
    </div>
  );
}

import apolloImage from "../departments/dept-images/best-dental-hospital-india.webp";

import medantaImage from "../departments/dept-images/best-dental-hospital-india.webp";

import fortisImage from "../departments/dept-images/multi-specialty-dental-hospital-india.webp";

import maxImage from "../departments/dept-images/top-dental-care-india.webp";

import kokilabenImage from "../departments/dept-images/orthopedic/best-orthopedic-hospital-in-india.webp";
import nanavatiImage from "../departments/dept-images/orthopedic/affordable-orthopedic-hospital-in-india.webp";
import jaslokImage from "../departments/dept-images/orthopedic/orthopedic-hospital-in-india.webp";

const HOSPITALS = [
  {
    name: "Max",
    sub: "Super Speciality Hospital",
    image: maxImage,
    location: "New Delhi, India",
    rating: 4.9,
    accreditations: ["NABH", "JCI"],
    specialties: [
      "Joint Replacement Surgery",
      "Spine Surgery",
      "Sports Injury Treatment",
    ],
  },
  {
    name: "Apollo",
    sub: "Hospitals",
    image: apolloImage,
    location: "Chennai, India",
    rating: 4.9,
    accreditations: ["JCI", "NABH"],
    specialties: [
      "Robotic Knee Replacement",
      "Hip Replacement Surgery",
      "Orthopedic Trauma Care",
    ],
  },
  {
    name: "Fortis",
    sub: "Memorial Research Institute",
    image: fortisImage,
    location: "Gurgaon, India",
    rating: 4.8,
    accreditations: ["JCI", "NABH"],
    specialties: [
      "Joint Replacement",
      "Arthroscopy & Sports Medicine",
      "Complex Trauma Surgery",
    ],
  },
  {
    name: "Kokilaben Dhirubhai Ambani",
    sub: "Hospital",
    image: kokilabenImage,
    location: "Mumbai, India",
    rating: 4.9,
    accreditations: ["JCI", "NABH"],
    specialties: [
      "Sports Orthopaedics",
      "Arthroscopic Surgery",
      "Shoulder & Knee Reconstruction",
    ],
  },
  {
    name: "Nanavati Max",
    sub: "Super Speciality Hospital",
    image: nanavatiImage,
    location: "Mumbai, India",
    rating: 4.8,
    accreditations: ["NABH"],
    specialties: [
      "Spine Surgery",
      "Minimally Invasive Orthopedics",
      "Joint Replacement Surgery",
    ],
  },
  {
    name: "Jaslok",
    sub: "Hospital & Research Centre",
    image: jaslokImage,
    location: "Mumbai, India",
    rating: 4.7,
    accreditations: ["NABH"],
    specialties: [
      "Hip & Knee Replacement",
      "Revision Joint Surgery",
      "Orthopedic Rehabilitation",
    ],
  },
];

const DOCTORS = [
  {
    name: "Dr. Satyen Nabar",
    education: "MBBS, MS (Orthopaedics)",
    spec: "Orthopaedic Surgeon, Joint Replacement Specialist, Sports Injury Expert",
    desc: "Dr. Satyen Nabar is a highly experienced Orthopaedic Surgeon with over 24 years of expertise in diagnosing and treating a wide range of musculoskeletal disorders, joint conditions, sports injuries, and complex orthopedic trauma cases. He is currently associated with Sujay Hospital and Research Centre, Mumbai, and is widely recognized for his patient-focused approach, precise diagnosis, and advanced surgical skills. Throughout his distinguished career, Dr. Nabar has successfully managed numerous complex orthopedic cases across leading healthcare institutions in India. He completed his MBBS followed by an MS in Orthopaedics and has continually enhanced his expertise through advanced orthopedic training, research, workshops, and academic contributions. Dr. Nabar specializes in joint replacement and revision surgeries of the knee, hip, shoulder, and elbow, helping patients regain mobility and improve their quality of life through modern surgical techniques. His expertise also extends to arthroscopic procedures for knee and shoulder conditions, sports injury management, complex fracture fixation, deformity correction surgeries, limb reconstruction procedures, and pediatric orthopedic trauma care. Known for his commitment to excellence, Dr. Nabar combines advanced orthopedic treatment methods with personalized rehabilitation strategies to ensure optimal patient outcomes. In addition to his clinical work, he has actively participated in orthopedic research, presented scientific papers, and contributed to various academic forums. His dedication to innovation and orthopedic excellence has earned him recognition and awards within the field. With extensive experience in both surgical and non-surgical orthopedic treatments, Dr. Satyen Nabar remains a trusted specialist for patients seeking comprehensive care for joint disorders, trauma injuries, sports-related conditions, and reconstructive orthopedic procedures.",
    photoUrl: SatyenNabarImage,
  },
  {
    name: "Dr. Dinshaw Pardiwala",
    education: "MS (Orthopaedics), DNB (Orthopaedics), FCPS",
    spec: "Sports Orthopaedic Surgeon, Arthroscopy Specialist, Shoulder Surgeon, Sports Medicine Expert",
    desc: "Dr. Dinshaw Pardiwala is one of India's most renowned Sports Orthopaedic Surgeons, with over 27 years of experience in sports medicine, arthroscopy, minimally invasive orthopedic surgery, shoulder surgery, and regenerative medicine. He serves as Director of Arthroscopy, Sports Orthopaedics & Shoulder Service and Head of the Centre for Sports Medicine at Kokilaben Dhirubhai Ambani Hospital, Mumbai. Widely regarded as a pioneer in sports injury management and arthroscopic surgery in India, Dr. Pardiwala has played a significant role in helping elite athletes return to peak performance following complex injuries. He completed his advanced orthopedic training with qualifications including MS (Orthopaedics), DNB (Orthopaedics), and FCPS. Over the course of his distinguished career, he has developed exceptional expertise in ligament reconstruction, knee arthroscopy, shoulder arthroscopy, cartilage restoration, sports trauma, joint preservation procedures, and minimally invasive orthopedic surgery. Dr. Pardiwala is internationally recognized for his contributions to arthroscopy and sports medicine. He is a committee member of the International Society of Arthroscopy, Knee Surgery and Orthopaedic Sports Medicine (ISAKOS), serves on the board of the Asia-Pacific Knee, Arthroscopy and Sports Medicine Society (APKASS), and is an active member of the Indian Arthroscopy Association and the Shoulder & Elbow Society of India. He has also served on the editorial boards of globally respected journals such as Arthroscopy and the American Journal of Sports Medicine. As India's representative on the International Cricket Council (ICC) Medical Committee and a trusted physician for multiple national sports teams, Dr. Pardiwala has treated some of India's most celebrated athletes across cricket, badminton, wrestling, boxing, rugby, and kabaddi. His patients include Olympic and international medalists such as Saina Nehwal, P. V. Sindhu, Parupalli Kashyap, Sushil Kumar, Yogeshwar Dutt, Vikas Krishan, and several leading Indian cricketers. Notably, among India's medal winners at the 2018 Commonwealth Games, 12 athletes had undergone sports injury surgeries under his care, contributing to multiple gold medal-winning performances. His research and innovations in arthroscopic surgery have earned international recognition, including the prestigious ISAKOS John Joyce Award. Known for combining advanced surgical techniques with athlete-focused rehabilitation programs, Dr. Dinshaw Pardiwala is widely recognized as one of India's leading experts in sports medicine, arthroscopy, and orthopedic surgery.",
    photoUrl: DinshawPardiwalaImage,
  },
  {
    name: "Dr. Vivek Allahbadia",
    education:
      "MBBS, D.Orth, MS (Orthopaedics), FCPS Orthopaedics, MCh Orthopaedics (UK)",
    spec: "Orthopaedic Surgeon, Joint Replacement Specialist, Robotic Knee Replacement Surgeon",
    desc: "Dr. Vivek Allahbadia is a highly accomplished Orthopaedic and Joint Replacement Surgeon with over 28 years of surgical experience and expertise in advanced knee replacement, robotic-assisted joint surgery, sports injury management, and complex reconstructive orthopaedic procedures. He is currently associated with Hinduja Healthcare Surgical, Khar, Mumbai, and is recognized as one of the pioneers of robotic knee replacement surgery in Mumbai. Dr. Allahbadia completed his MBBS, Diploma in Orthopaedics, MS in Orthopaedics, FCPS Orthopaedics, and MCh Orthopaedics (UK), building a strong foundation in advanced orthopedic care. He further enhanced his expertise through prestigious international fellowships and advanced training programs at leading centers across the United Kingdom, Singapore, Prague, and Australia. His fellowship training includes Joint Replacement Surgery at the renowned Northern General Hospital, Sheffield, United Kingdom, along with specialized exposure to advanced orthopedic and reconstructive procedures in Singapore and Prague. To stay at the forefront of technological advancements in orthopaedics, Dr. Allahbadia underwent specialized training in Computer Navigation Knee Replacement Surgery in Perth, Australia, and is a certified CORI Robotic Surgery Specialist. Throughout his distinguished career, he has successfully treated thousands of patients suffering from severe arthritis, joint degeneration, sports injuries, deformities, and complex orthopedic conditions. His expertise encompasses robotic knee replacement, total knee replacement, hip replacement surgery, revision joint replacement procedures, minimally invasive orthopaedic surgery, sports injury treatment, arthroscopic surgery, and computer-assisted joint reconstruction. Known for combining precision, innovation, and compassionate patient care, Dr. Allahbadia focuses on delivering personalized treatment plans that optimize mobility, reduce recovery time, and improve long-term outcomes. His commitment to adopting cutting-edge robotic technology and evidence-based surgical techniques has established him as one of Mumbai's leading specialists in joint replacement and advanced orthopedic surgery. Patients value his meticulous surgical approach, accurate diagnosis, and dedication to restoring pain-free movement and enhanced quality of life.",
    photoUrl: VivekAllahbadiaImage,
  },
  {
    name: "Dr. Mihir Bapat",
    education: "MS (Orthopaedics), DNB (Orthopaedics)",
    spec: "Spine Surgeon, Minimally Invasive Spine Surgery Specialist, Orthopaedic Spine Expert",
    desc: "Dr. Mihir Bapat is one of India's leading Spine Surgeons and currently serves as Vice Chairman – Orthopedics & Spinal Surgery at the Nanavati Max Institute of Advanced Orthopaedics, Spine & Joint Care, Mumbai. With over 25 years of experience and more than 8,000 successful spine surgeries to his credit, he is widely recognized for his expertise in minimally invasive spine surgery, complex spinal reconstruction, and advanced spinal deformity correction. Dr. Bapat leads multiple specialized spine programs, including the Spine Fusion Surgery Unit, Center of Spine Surgery, Microscopic and Endoscopic Disc Surgery Unit, and Back Pain Management Unit. Throughout his distinguished career, he has developed extensive expertise in treating degenerative spine disorders, slipped discs, spinal fractures, spinal tumors, scoliosis, kyphosis, spinal deformities, and chronic back pain conditions. His focus on minimally invasive and endoscopic spine procedures allows patients to benefit from smaller incisions, reduced pain, faster recovery, and improved surgical outcomes. Recognized internationally for his contributions to spinal surgery, Dr. Bapat has received numerous prestigious awards, including the Karmarkar Gold Medal in Surgery, the Pandurangi Award for Best Resident in Orthopaedics, and the highly regarded Global Outreach Fellowship awarded by the Scoliosis Research Society. He is actively involved in academic teaching and serves as a postgraduate educator affiliated with Mumbai University while also holding the distinction of being a Diplomate of the National Board. Dr. Bapat maintains strong affiliations with leading international spine organizations, including AO Spine Asia Pacific, and has contributed extensively to global spine research through numerous international publications, scientific presentations, and academic citations. Known for his surgical precision, evidence-based approach, and patient-centered care, Dr. Mihir Bapat is regarded as one of the foremost experts in spine surgery, spinal deformity correction, and minimally invasive spine treatment in India.",
    photoUrl: MihirBapatImage,
  },
  {
    name: "Dr. D. D. Tanna",
    education: "MS (Orthopaedics)",
    spec: "Orthopaedic Surgeon, Trauma Specialist, Joint Replacement Surgeon",
    desc: "Dr. D. D. Tanna is one of India's most respected and accomplished Orthopaedic Surgeons, with an exceptional career spanning over 55 years in orthopedic surgery, trauma care, fracture management, and joint replacement surgery. Currently serving as Mentor in Orthopaedics, Dr. Tanna has played a transformative role in shaping modern orthopedic practice in India through his pioneering surgical innovations, academic leadership, and dedication to training future generations of orthopedic surgeons. A distinguished academician, he served as Professor of Orthopaedics at Nair Hospital and Topiwala National Medical College, Mumbai, where he mentored countless MBBS and MS Orthopaedics students who have gone on to become leading orthopedic specialists across the country. Dr. Tanna is widely recognized as a pioneer in Indian orthopedics for introducing interlocking nailing techniques in India and successfully adapting this advanced fracture fixation method to local healthcare settings. He was also among the first orthopedic surgeons in the private sector to introduce and utilize C-Arm imaging technology, significantly advancing the precision of orthopedic trauma surgeries. His expertise encompasses complex trauma management, revision trauma surgery, failed fracture treatment, fracture fixation procedures, joint replacement surgery, and advanced orthopedic reconstruction. Beyond his clinical contributions, Dr. Tanna is an internationally recognized author and educator. His landmark publication, 'Tanna's Interlocking Book,' now in its fifth edition, is regarded as a definitive reference for orthopedic surgeons worldwide. He has also authored several influential orthopedic texts, including 'Orthopaedic Tidbits,' 'Orthopaedic Secrets,' and 'Proximal Femur Fracture.' In addition, he has published numerous scientific articles in leading national and international journals, contributing significantly to orthopedic research and education. Throughout his distinguished career, Dr. Tanna has held prestigious leadership positions, serving as President of the Trauma Society Association, Maharashtra Orthopaedic Association, and Mumbai Orthopaedic Association. He is also an Honorary Fellow of the Indian Orthopaedic Association and has been recognized with multiple Lifetime Achievement Awards from the Trauma Society and the All India Orthopaedic Association for his extraordinary contributions to orthopedic surgery. Known for his surgical excellence, innovation, and lifelong commitment to orthopedic education, Dr. D. D. Tanna remains a towering figure in Indian orthopedics and continues to influence the advancement of trauma care, fracture management, and joint reconstruction surgery.",
    photoUrl: DDTannaImage,
  },
  {
    name: "Dr. Ashok Johari",
    education: "MBBS, MS (Orthopaedics)",
    spec: "Paediatric Orthopaedic Surgeon, Cerebral Palsy Specialist, Pediatric Deformity Correction Expert",
    desc: "Dr. Ashok Johari is one of India's most respected Paediatric Orthopaedic Surgeons, with over 42 years of experience in the diagnosis, treatment, and surgical management of musculoskeletal disorders in children. Widely recognized for his pioneering contributions to pediatric orthopedics, Dr. Johari has earned both national and international acclaim as a surgeon, educator, researcher, and innovator. Throughout his distinguished career, he has dedicated himself to improving the lives of children affected by orthopedic disorders, congenital deformities, neuromuscular conditions, and complex mobility challenges. Dr. Johari is regarded as one of the driving forces behind the growth of Pediatric Orthopaedics in India and played a pivotal role in establishing and advancing the specialty across the country. He spearheaded the Pediatric Orthopaedic movement in India and is the founder of the Indian Academy of Cerebral Palsy (IACP), a landmark organization dedicated to improving care for children with cerebral palsy and related neurological disorders. His clinical expertise encompasses cerebral palsy management, pediatric deformity correction, clubfoot treatment, limb reconstruction, congenital orthopedic disorders, gait abnormalities, pediatric trauma, neuromuscular conditions, and complex orthopedic surgeries in children. In addition to his surgical excellence, Dr. Johari is a passionate educator who has trained and mentored numerous orthopedic surgeons, helping shape the future of pediatric orthopedic care in India. His commitment to social service is reflected through his active involvement in philanthropic initiatives such as the Johari Medical & Research Foundation (JMRF) and Child Care Foundation, organizations focused on delivering specialized orthopedic care to underprivileged children. Dr. Johari is also deeply engaged in clinical research and innovation, contributing to the development of advanced treatment techniques and rehabilitation strategies for children with orthopedic disabilities. Known for his compassionate approach, academic leadership, and dedication to improving children's mobility and quality of life, Dr. Ashok Johari remains one of India's foremost authorities in pediatric orthopedics and cerebral palsy management.",
    photoUrl: AshokJohariImage,
  },
];

import ReviewRightImage from "../departments/dept-images/happy-ortho-patient-india.webp";

const reviews = [
  {
    name: "Allison Hayes",
    text: '"I had been struggling with ortho pain for years. After my implant procedure in India, I finally have a healthy smile. The doctors were incredibly professional and caring."',
  },
  {
    name: "Brooke Sullivan",
    text: '"The entire experience from online consultation to treatment was seamless. The clinic in Mumbai was world-class, and I saved significantly compared to back home."',
  },
  {
    name: "Allison Hayes",
    text: '"I had been struggling with ortho pain for years. After my implant procedure in India, I finally have a healthy smile. The doctors were incredibly professional and caring."',
  },
  {
    name: "Allison Hayes",
    text: '"I had been struggling with ortho pain for years. After my implant procedure in India, I finally have a healthy smile. The doctors were incredibly professional and caring."',
  },
];
const Stars = () => (
  <div className="ortho-reviews-stars">
    {"★★★★★".split("").map((s, i) => (
      <span key={i}>{s}</span>
    ))}
  </div>
);

const faqData = [
  {
    id: 1,
    question:
      "Why do international patients choose an orthopedic surgeon in India for knee replacement surgery?",
    answer:
      "Many international patients from Kenya, Uganda, Tanzania, Nigeria, and South Sudan choose an orthopedic surgeon in India because of the combination of advanced medical technology, experienced specialists, internationally accredited hospitals, and affordable treatment options. India is known for providing high-quality orthopedic care with shorter waiting times and personalized international patient support.",
  },
  {
    id: 2,
    question:
      "Which are considered among the best orthopedic hospitals in India?",
    answer:
      "Some of the best orthopedic hospitals in India are known for advanced joint replacement procedures, robotic knee surgery, experienced orthopedic surgeons, and modern rehabilitation facilities. Cities such as Mumbai, Delhi, Chennai, Hyderabad, and Bangalore are home to internationally recognized hospitals offering comprehensive orthopedic treatment for international patients.",
  },
  {
    id: 3,
    question:
      "What is the knee surgery cost in India for international patients?",
    answer:
      "The knee surgery cost in India is generally much more affordable compared to countries like the USA, UK, and many private hospitals internationally. The total cost may vary depending on the type of procedure, hospital, implant choice, surgeon expertise, and recovery requirements. Many patients choose India because they can access advanced orthopedic treatment at a lower overall expense while maintaining high standards of care.",
  },
  {
    id: 4,
    question:
      "Why is Mumbai considered a popular destination for knee replacement surgery?",
    answer:
      "Mumbai is home to some of the best knee replacement hospitals in Mumbai, offering advanced orthopedic technology, robotic-assisted surgery, experienced joint replacement specialists, and dedicated international patient services. The city also provides convenient international connectivity, accommodation options, and multilingual support for overseas patients.",
  },
  {
    id: 5,
    question:
      "How do I choose the best orthopedic surgeon in India for my treatment?",
    answer:
      "When selecting an orthopedic surgeon in India, patients should consider the surgeon’s experience, specialization in joint replacement surgery, hospital accreditation, patient reviews, surgical success rates, and use of advanced technologies such as robotic-assisted knee replacement. Many leading orthopedic surgeons in India have extensive experience treating international patients.",
  },
  {
    id: 6,
    question:
      "Do the best orthopedic hospitals in India provide support for international patients?",
    answer:
      "Yes. Many of the best orthopedic hospitals in India have dedicated international patient departments that assist with online consultations, medical visa guidance, airport transfers, accommodation support, language assistance, and follow-up care after surgery. These services help make the treatment journey smoother for patients traveling from Africa and other countries.",
  },
  {
    id: 7,
    question:
      "What types of orthopedic treatments are commonly performed in India?",
    answer:
      "India offers a wide range of orthopedic procedures including total knee replacement, robotic knee replacement, hip replacement surgery, spine surgery, sports injury treatment, trauma care, revision joint replacement, and minimally invasive orthopedic procedures. Many hospitals use advanced surgical systems to improve precision and recovery outcomes.",
  },
  {
    id: 8,
    question:
      "How long should international patients stay in India after knee replacement surgery?",
    answer:
      "The required stay depends on the patient’s medical condition, recovery progress, and type of surgery performed. In many cases, patients may stay in India for a few weeks to complete surgery, physiotherapy, and follow-up evaluations before returning home. The treating orthopedic surgeon usually provides a personalized recovery timeline.",
  },
  {
    id: 9,
    question: "Are robotic knee replacement procedures available in India?",
    answer:
      "Yes. Many leading orthopedic hospitals in India now offer robotic knee replacement surgery. Robotic-assisted procedures help orthopedic surgeons improve implant positioning, surgical precision, alignment accuracy, and personalized treatment planning. International patients often choose robotic knee replacement in India because of its affordability and advanced technology.",
  },
  {
    id: 10,
    question:
      "Is orthopedic treatment in India safe for patients from Kenya, Uganda, Tanzania, Nigeria, and South Sudan?",
    answer:
      "Reputed orthopedic hospitals in India follow international safety standards, strict sterilization protocols, and advanced infection control measures. Many hospitals are experienced in treating international patients and provide coordinated care throughout the treatment and recovery process, helping patients feel comfortable and supported during their medical journey.",
  },
];

import CtaImage from "../departments/dept-images/book-ortho-consultation-india.webp";

const Check = () => <FaCheck className="icon-check" />;

export default function OrthopedicTreatmentIndia() {
  const [activeCard, setActiveCard] = useState(null);
  const topCards = cards.filter((c) => !c.wide);
  const bottomCards = cards.filter((c) => c.wide);
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFAQ(index);
    }
  };

  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  // Group reviews into pairs → [[r0,r1], [r2,r3], ...]
  const slides = [];
  for (let i = 0; i < reviews.length; i += 2) {
    slides.push(reviews.slice(i, i + 2));
  }

  const totalSlides = slides.length;

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetTimer();
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Close modal handler
  const closeModal = () => setSelectedDoctor(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (selectedDoctor) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [selectedDoctor]);
  return (
    <>
      {/* ════ SECTION 1 — HERO ════ */}
      <section className="orthopedic-hero-section">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Affordable orthopedic treatment in India with advanced knee replacement surgery for international patients"
          className="orthopedic-hero-bg-image"
          loading="eager"
        />

        {/* Gradient Overlay */}
        <div className="orthopedic-hero-overlay" />

        {/* Content */}
        <div className="orthopedic-hero-content">
          <span className="orthopedic-hero-badge">
            Trusted by 50,000+ International Patients
          </span>

          <h1>
            <h1>
              Affordable Orthopedic Treatment in India for International
              Patients
            </h1>
          </h1>

          <p>
            Orthopedic treatment in India is becoming one of the most preferred
            solutions for international patients seeking affordable and
            high-quality joint surgery. India offers advanced orthopedic
            technology, experienced specialists, and internationally accredited
            hospitals at significantly lower costs compared to the USA, UK, and
            Europe. Patients from Kenya, Uganda, Tanzania, Nigeria, and South
            Sudan choose India for safe, modern, and cost-effective orthopedic
            care.
          </p>

          <div className="orthopedic-hero-ctas">
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-wa whatsapp-glow"
            >
              <WA size={5} /> WhatsApp Consultation
            </a>

            <a href="tel:+919833166697" className="btn-outline">
              <FaPhoneAlt /> Contact Medical Coordinator
            </a>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          {/* ── Left: Image collage ── */}
          <div className="about-images">
            <div className="about-images__main">
              <img
                src={about}
                alt="Orthopedic surgeon in India performing advanced joint replacement treatment"
              />
            </div>
            <div className="about-images__stack">
              <div className="about-images__small">
                <img
                  src={about1}
                  alt="Physiotherapy and rehabilitation support after knee replacement surgery in India"
                />
              </div>
              <div className="about-images__small">
                <img
                  src={about2}
                  alt="Orthopedic doctor consultation in India for international joint replacement patients"
                />
              </div>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="about-content">
            {/* <p className="about-content__label">About Us</p> */}
            <h2 className="about-content__title">
              Orthopedic Surgery in India
            </h2>

            <div className="about-content__body">
              <p>
                India has become one of the leading destinations for advanced
                orthopedic and joint replacement treatment, attracting thousands
                of international patients every year. Patients from Kenya,
                Uganda, Tanzania, Nigeria, South Sudan, and many other countries
                travel to India seeking high-quality care from experienced
                <strong> orthopedic surgeons in India</strong> at affordable
                treatment costs.
              </p>
              <p>
                One of the biggest reasons patients choose{" "}
                <strong>knee replacement in India</strong> is the combination of
                affordability and medical expertise. Many Indian hospitals are
                equipped with advanced surgical technology, including
                robotic-assisted systems used for precision-based joint
                replacement procedures. These technologies help orthopedic
                specialists perform surgeries with improved implant positioning,
                better alignment, and enhanced recovery planning.
              </p>
              <p>
                International patients benefit from highly experienced doctors,
                many of whom have performed thousands of successful joint
                replacement procedures — whether total knee replacement,
                bilateral knee replacement, revision surgery, or minimally
                invasive orthopedic procedures across major cities such as
                Mumbai, Delhi, Chennai, and Ahmedabad.
              </p>
              <p>
                Patients searching for the{" "}
                <strong>best orthopedic hospitals in India</strong>
                often choose India not only because of affordability but also
                because of the compassionate care and personalized attention
                they receive throughout their treatment journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — APPROACH */}
      <section className="approach-section">
        <p className="approach-section__label">Our Approach</p>
        <h2 className="approach-section__title">
          Personalized Orthopedic Care, Designed Around Your Needs
        </h2>
        <p className="approach-section__sub">
          We understand that every patient experiences pain, mobility issues,
          and recovery differently. Our approach focuses on accurate diagnosis,
          personalized treatment, and complete recovery support.
        </p>

        <div className="approach-grid approach-grid--top">
          {topCards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>

        <div className="approach-grid approach-grid--bottom">
          {bottomCards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </section>

      <section className="why-section">
        <div className="why-container">
          {/* ── Left: Image ── */}
          <div className="why-image-col">
            <div className="why-image-wrapper">
              <img
                src={whyChooseUs}
                alt="Robotic knee replacement surgery in India using advanced orthopedic technology"
              />
            </div>
          </div>

          {/* ── Right: Header + Feature rows ── */}
          <div className="why-content-col">
            {/* <p className="why-label">Why Choose India</p> */}
            <h2 className="why-title">
              Why Patients Choose India for Orthopedic Treatment
            </h2>

            <div className="why-rows">
              {/* Row 1 */}
              <div className="why-row">
                <div className="why-row__icon why-row__icon--teal">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4.5 12.75l6 6 9-13.5" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <div className="why-row__body">
                  <h3 className="why-row__title">
                    Experienced Orthopedic Surgeons
                  </h3>
                  <p className="why-row__desc">
                    Many hospitals in India have highly qualified orthopedic
                    specialists with decades of experience in:
                  </p>
                  <div className="why-row__pills">
                    <span className="why-pill why-pill--teal">
                      Knee replacement surgery
                    </span>
                    <span className="why-pill why-pill--teal">
                      Hip replacement surgery
                    </span>
                    <span className="why-pill why-pill--teal">
                      Sports injury treatment
                    </span>
                    <span className="why-pill why-pill--teal">
                      Spine surgery
                    </span>
                    <span className="why-pill why-pill--teal">Trauma care</span>
                    <span className="why-pill why-pill--teal">
                      Robotic joint replacement
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="why-row">
                <div className="why-row__icon why-row__icon--blue">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <path d="M14 17.5h7M17.5 14v7" />
                  </svg>
                </div>
                <div className="why-row__body">
                  <h3 className="why-row__title">
                    Advanced Technology & Robotic Surgery
                  </h3>
                  <p className="why-row__desc">
                    Patients looking for{" "}
                    <strong>best robotic knee replacement in India </strong>
                    often choose robotic-assisted procedures because they may
                    offer:
                  </p>
                  <div className="why-row__pills">
                    <span className="why-pill why-pill--teal">
                      Better implant alignment
                    </span>
                    <span className="why-pill why-pill--teal">
                      Smaller incisions
                    </span>
                    <span className="why-pill why-pill--teal">
                      Reduced blood loss
                    </span>
                    <span className="why-pill why-pill--teal">
                      Faster rehabilitation
                    </span>
                    <span className="why-pill why-pill--teal">
                      Improved accuracy
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="why-row">
                <div className="why-row__icon why-row__icon--blue">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" />
                    <path d="M9 3.5A9 9 0 013.5 9" />
                  </svg>
                </div>
                <div className="why-row__body">
                  <h3 className="why-row__title">Affordable Treatment</h3>
                  <p className="why-row__desc">
                    One of the biggest reasons patients travel for{" "}
                    <strong>knee replacement in India</strong> is affordability.
                    Compared to treatment costs in Western countries, patients
                    can save a substantial amount while still receiving
                    high-quality medical care and modern hospital facilities.
                  </p>
                </div>
              </div>

              {/* Row 4 */}
              <div className="why-row">
                <div className="why-row__icon why-row__icon--blue">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <div className="why-row__body">
                  <h3 className="why-row__title">Faster Treatment Access</h3>
                  <p className="why-row__desc">
                    In many countries, patients wait months for orthopedic
                    procedures. India offers:
                  </p>
                  <div className="why-row__pills">
                    <span className="why-pill why-pill--teal">
                      Faster appointments
                    </span>
                    <span className="why-pill why-pill--teal">
                      Shorter surgery waiting periods
                    </span>
                    <span className="why-pill why-pill--teal">
                      Quick diagnostic evaluations
                    </span>
                    <span className="why-pill why-pill--teal">
                      Efficient treatment planning
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wo-section">
        <div className="wo-container">
          {/* ── Hero Banner ── */}
          <div className="wo-hero">
            <p className="wo-hero__label">Why Orthopedic Surgery in India?</p>
            <h2 className="wo-hero__title">
              5 Reasons International Patients Trust India for Orthopedic Care
            </h2>
          </div>

          {/* ── Card List ── */}
          <div className="wo-list">
            {/* Card 01 */}
            <div className="wo-item">
              <div className="wo-item__num">01</div>
              <div className="wo-item__body">
                <h3 className="wo-item__title">
                  Affordable Knee Replacement Surgery Cost in India
                </h3>
                <p className="wo-item__desc">
                  The <strong>knee replacement surgery cost in India</strong> is
                  considerably lower than in countries such as the USA, UK, or
                  many African nations offering private orthopedic care.
                </p>
                <div className="wo-item__tags">
                  <span className="wo-tag wo-tag--teal">
                    Advanced surgical procedures
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    International standard hospitals
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Skilled orthopedic specialists
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Comprehensive rehabilitation
                  </span>
                </div>
              </div>
            </div>

            {/* Card 02 */}
            <div className="wo-item">
              <div className="wo-item__num">02</div>
              <div className="wo-item__body">
                <h3 className="wo-item__title">
                  Modern Hospitals with Global Standards
                </h3>
                <p className="wo-item__desc">
                  Many of the{" "}
                  <strong>best orthopedic hospitals in India </strong>are
                  internationally accredited and equipped with:
                </p>
                <div className="wo-item__tags">
                  <span className="wo-tag wo-tag--teal">
                    Modern operation theaters
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Robotic surgery systems
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Advanced imaging technology
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Specialized orthopedic ICUs
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Dedicated rehabilitation departments
                  </span>
                </div>
              </div>
            </div>

            {/* Card 03 */}
            <div className="wo-item">
              <div className="wo-item__num">03</div>
              <div className="wo-item__body">
                <h3 className="wo-item__title">
                  Robotic Knee Replacement Technology
                </h3>
                <p className="wo-item__desc">
                  Patients seeking{" "}
                  <strong>robotic knee replacement cost in India</strong> are
                  often surprised that robotic-assisted surgery remains
                  affordable compared to many international destinations.
                  Robotic systems help surgeons achieve more precise implant
                  placement and personalized surgical planning.
                </p>
              </div>
            </div>

            {/* Card 04 */}
            <div className="wo-item">
              <div className="wo-item__num">04</div>
              <div className="wo-item__body">
                <h3 className="wo-item__title">
                  English-Speaking Medical Teams
                </h3>
                <p className="wo-item__desc">
                  Communication is an important concern for international
                  patients. Hospitals in India typically have:
                </p>
                <div className="wo-item__tags">
                  <span className="wo-tag wo-tag--teal">
                    English-speaking doctors
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    International patient coordinators
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Dedicated support teams
                  </span>
                </div>
              </div>
            </div>

            {/* Card 05 */}
            <div className="wo-item wo-item--last">
              <div className="wo-item__num">05</div>
              <div className="wo-item__body">
                <h3 className="wo-item__title">Medical Visa Assistance</h3>
                <p className="wo-item__desc">
                  Hospitals and medical tourism coordinators assist patients
                  with:
                </p>
                <div className="wo-item__tags">
                  <span className="wo-tag wo-tag--teal">
                    Medical invitation letters
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Visa documentation
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Treatment scheduling
                  </span>
                  <span className="wo-tag wo-tag--teal">
                    Airport assistance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="orthopedic-services-section">
        {/* Header */}
        <div className="orthopedic-services-header">
          <h2 className="orthopedic-services-title">
            Types of Knee Surgeries in India
          </h2>
          <p className="orthopedic-services-description">
            From joint replacement to sports injury treatment, our comprehensive
            orthopedic services are designed to restore mobility, reduce pain,
            and improve quality of life for international patients seeking
            advanced orthopedic care in India.
          </p>
        </div>

        {/* Row 1 — 3 cards */}
        <div className="orthopedic-services-grid orthopedic-services-grid-row">
          {orthopedicServices.slice(0, 3).map((service) => (
            <OrthopedicServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Row 2 — 3 cards */}
        <div className="orthopedic-services-grid">
          {orthopedicServices.slice(3, 6).map((service) => (
            <OrthopedicServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="hn-section">
        <div className="hn-container">
          <div className="hn-title-wrap">
            <span className="hn-label">Our Hospital Network</span>
            <h2 className="hn-heading">Best Orthopedic Hospitals in India</h2>
            <p className="hn-subtitle">
              India is home to many experienced joint replacement specialists
              known for handling complex orthopedic cases and advanced knee
              replacement procedures. Below are some well-known specialists
              often consulted by international patients seeking an orthopedic
              surgeon in India or the best knee replacement surgeon in India.
            </p>
          </div>
          <div className="hn-slider-wrapper">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={28}
              slidesPerView={1}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 3,
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 24,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 26,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 28,
                },
              }}
              className="hn-swiper"
            >
              {HOSPITALS.map((h, i) => (
                <SwiperSlide key={i}>
                  <div className="hn-card">
                    <div className="hn-card-top">
                      <div
                        className="hn-card-image"
                        style={{ backgroundImage: `url(${h.image})` }}
                      >
                        <div className="hn-card-overlay" />
                      </div>
                      <div className="hn-card-header">
                        <div className="hn-hospital-info">
                          <h3 className="hn-hospital-name">{h.name}</h3>
                          <p className="hn-hospital-sub">{h.sub}</p>
                        </div>
                      </div>
                    </div>

                    <div className="hn-card-body">
                      <div className="hn-specialties">
                        <p className="hn-specialties-label">
                          Orthopedic Specialties:
                        </p>
                        <ul className="hn-specialties-list">
                          {h.specialties.map((spec, j) => (
                            <li key={j} className="hn-specialty-item">
                              <Check />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ════ SECTION 4 — DOCTORS ════ */}
      <section className="doctor-section-light">
        <div className="doctor-container">
          <div className="doctor-title-wrap">
            <span className="doctor-label">Our Specialists</span>
            <h2 className="doctor-h2">Best Orthopedic Surgeons in India</h2>
            <p className="doctor-subtitle">
              India is home to many experienced joint replacement specialists
              known for handling complex orthopedic cases and advanced knee
              replacement procedures. Below are some well-known specialists
              often consulted by international patients seeking an orthopedic
              surgeon in India or the best knee replacement surgeon in India.
            </p>
          </div>
          <div className="doctor-cards-grid">
            {DOCTORS.map((d, i) => (
              <div key={i} className="doctor-card">
                <img
                  src={d.photoUrl}
                  alt={`${d.name} – ${d.spec}`}
                  className="doctor-card-photo"
                  loading="lazy"
                />
                <div className="doctor-card-body">
                  <div className="doctor-card-content">
                    <span className="doctor-spec">{d.spec}</span>
                    <h3 className="doctor-name">{d.name}</h3>
                    <h4 className="doctor-education">- {d.education}</h4>
                    <p className="doctor-desc">{truncateText(d.desc, 120)}</p>
                  </div>
                  <button
                    className="doctor-read-more custom-learn-more-btn"
                    onClick={() => setSelectedDoctor(d)}
                    aria-label={`Read more about ${d.name}`}
                  >
                    <span className="button-text">Read More</span>
                    <div className="circle"></div>
                    <div className="arrow"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ════ DOCTOR MODAL ════ */}
      {selectedDoctor && (
        <div className="doctor-modal-overlay" onClick={closeModal}>
          <div
            className="doctor-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-labelledby="modal-title"
            aria-modal="true"
          >
            <button
              className="doctor-modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            <div className="doctor-modal-content">
              <div className="doctor-modal-header">
                <img
                  src={selectedDoctor.photoUrl}
                  alt={selectedDoctor.name}
                  className="doctor-modal-image"
                />
                <div className="doctor-modal-info">
                  <span className="doctor-modal-spec">
                    {selectedDoctor.spec}
                  </span>
                  <h3 id="modal-title" className="doctor-modal-name">
                    {selectedDoctor.name}
                  </h3>
                  <p className="doctor-modal-education">
                    {selectedDoctor.education}
                  </p>
                </div>
              </div>

              <div className="doctor-modal-body">
                <h4 className="doctor-modal-section-title">About</h4>
                <p className="doctor-modal-desc">{selectedDoctor.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="ortho-reviews-section">
        <div className="ortho-reviews-content">
          <h2 className="ortho-reviews-heading">Our Clients Review</h2>

          {/* Slider wrapper */}
          <div className="ortho-reviews-slider-wrapper">
            <div
              className="ortho-reviews-slider-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((pair, slideIndex) => (
                <div key={slideIndex} className="ortho-reviews-slide">
                  {pair.map((r, cardIndex) => (
                    <div key={cardIndex} className="ortho-reviews-card">
                      <Stars />
                      <p className="ortho-reviews-card-text">{r.text}</p>
                      {/* <p className="ortho-reviews-card-name">{r.name}</p> */}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="ortho-reviews-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`ortho-reviews-dot ${currentSlide === index ? "active" : ""}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Rating summary */}
          <div className="ortho-reviews-summary">
            <div>
              <span className="ortho-reviews-rating-number">4.98</span>
              <span className="ortho-reviews-rating-label">Ratings</span>
              <div className="ortho-reviews-stars" style={{ marginTop: "6px" }}>
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="ortho-reviews-image-wrapper">
          <img
            src={ReviewRightImage}
            alt="Happy international ortho patient in India"
            className="ortho-reviews-image"
          />
        </div>
      </section>

      <section className="ortho-faq-section" aria-labelledby="faq-heading">
        <div className="ortho-faq-container">
          {/* Section Header */}
          <div className="ortho-faq-header">
            <span className="ortho-faq-badge">Orthopedic Treatment FAQs</span>
            <h2 id="faq-heading" className="ortho-faq-title">
              Frequently Asked Questions About ortho Treatment in India
            </h2>
            <p className="ortho-faq-subtitle">
              Get answers to common questions about ortho care, best ortho
              hospitals, and treatment options in India
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="ortho-faq-list">
            {faqData.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={faq.id}
                  className={`ortho-faq-item ${isActive ? "active" : ""}`}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="ortho-faq-question"
                    aria-expanded={isActive}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <h3 className="ortho-faq-question-text">{faq.question}</h3>
                    <FaPlus
                      className={`ortho-faq-icon ${isActive ? "rotate" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`ortho-faq-answer ${isActive ? "open" : ""}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                  >
                    <div className="ortho-faq-answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ortho-cta-section">
        {/* Background Image */}
        <img
          src={CtaImage}
          alt="Book orthopedic consultation in India for affordable knee replacement treatment"
          className="ortho-cta-bg-image"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="ortho-cta-overlay" />

        {/* Content Container */}
        <div className="ortho-cta-container">
          <div className="ortho-cta-content">
            <span className="ortho-cta-badge">YOUR SMILE STARTS HERE</span>

            <h2 className="ortho-cta-title">
              Book Your Orthopedic Consultation
            </h2>

            <p className="ortho-cta-subtitle">
              Start your orthopedic treatment journey in India with experienced
              joint replacement specialists and internationally trusted
              hospitals.
            </p>

            <div className="ortho-cta-benefits-list">
              <div className="ortho-cta-benefit-point">
                <FaCheckCircle className="ortho-cta-check-icon" />
                <span>Personalized treatment plans</span>
              </div>
              <div className="ortho-cta-benefit-point">
                <FaCheckCircle className="ortho-cta-check-icon" />
                <span>Transparent pricing</span>
              </div>
              <div className="ortho-cta-benefit-point">
                <FaCheckCircle className="ortho-cta-check-icon" />
                <span>Expert ortho specialists</span>
              </div>
              <div className="ortho-cta-benefit-point">
                <FaCheckCircle className="ortho-cta-check-icon" />
                <span>International patient support</span>
              </div>
              <div className="ortho-cta-benefit-point">
                <FaCheckCircle className="ortho-cta-check-icon" />
                <span>Modern and safe ortho care</span>
              </div>
            </div>

            <div className="ortho-hero-ctas">
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-wa whatsapp-glow"
              >
                <WA size={5} /> WhatsApp Consultation
              </a>

              <a href="tel:+919833166697" className="btn-outline">
                <FaPhoneAlt /> Contact Medical Coordinator
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
