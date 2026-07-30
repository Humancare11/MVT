import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./CancerLandingIndia.css";
import { Helmet } from "react-helmet";

import {
  FaCheck,
  FaUserMd,
  FaMoneyBillWave,
  FaClock,
  FaRobot,
  FaGlobe,
  FaShieldAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaPlus,
  FaHospital,
  FaMicroscope,
  FaGlobeAfrica,
  FaHandHoldingUsd,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";
import heroImage from "../departments/dept-images/cancer-treatment-india-hero.webp";
import OncologyAboutImage from "../departments/dept-images/oncology-care-india.webp";
import OncologyAboutImage1 from "../departments/dept-images/oncology-treatment-in-india.webp";

import oncologyImage1 from "../departments/dept-images/oncology-consultation-india.webp";
import oncologyImage2 from "../departments/dept-images/cancer-specialist-india.webp";
import oncologyImage3 from "../departments/dept-images/oncology-treatment-team-india.webp";

import BloodCancer from "../departments/dept-images/blood-cancer-treatment-india.webp";
import CyberKnife from "../departments/dept-images/cyberknife-treatment-india.webp";
import MouthCancer from "../departments/dept-images/mouth-cancer-treatment-india.webp";
import LungCancer from "../departments/dept-images/lung-cancer-treatment-india.webp";
import Chemotherapy from "../departments/dept-images/chemotherapy-india.webp";
import RadiationTherapy from "../departments/dept-images/radiation-therapy-india.webp";
import CervicalCancer from "../departments/dept-images/cervical-cancer-treatment-india.webp";
import BreastLumpectomy from "../departments/dept-images/breast-cancer-treatment-india.webp";
import BreastCancer from "../departments/dept-images/breast-cancer-treatment-in-india.webp";
import BoneMarrowTransplant from "../departments/dept-images/bone-marrow-transplant-india.webp";
import ProstateCancer from "../departments/dept-images/prostate-cancer-treatment-india.webp";
import CancerTreatment from "../departments/dept-images/cancer-treatment.webp";
import StemCellTherapy from "../departments/dept-images/stem-cell-therapy.webp";
import StomachCancer from "../departments/dept-images/stomach-cancer-treatment-india.webp";
import ColonCancer from "../departments/dept-images/colon-cancer-treatment-india.webp";
import EsophagealCancer from "../departments/dept-images/esophageal-cancer-treatment-india.webp";

import InternationalPatientServicesImage from "../departments/dept-images/international-patient-services-india.webp";

import ThumbnailImage from "../departments/dept-images/thumbail-eye-surgery.webp";

import CtaImage from "../departments/dept-images/cta-oncology-image.webp";

import apolloImage from "../departments/dept-images/oncology/best-oncology-hospital-india.webp";

import medantaImage from "../departments/dept-images/medanta-hospital-for-oncology-treatment-in-india.webp";

import fortisImage from "../departments/dept-images/oncology/multi-specialty-oncology-hospital-india.webp";

import hcgImage from "../departments/dept-images/oncology/hcg-cancer-treatment-specialist.webp";

import maxImage from "../departments/dept-images/oncology/top-oncology-hospital-india.webp";

import ApolloApcc from "../departments/dept-images/oncology/apollo-proton-cancer-centre-top-cancer-treatment.webp";

import VishnuAgarwalImage from "../departments/dept-images/oncology/vishnu-agarwal.webp";
import KamranKhanImage from "../departments/dept-images/oncology/kamran-khan.webp";
import ManishGAgarwalImage from "../departments/dept-images/oncology/manish-agarwal.webp";
import SaritaShrivastvaImage from "../departments/dept-images/oncology/sarita-shrivastva.webp";
import GanapathiBhatImage from "../departments/dept-images/oncology/ganapathi-bhat.webp";
import AbhayBhaveImage from "../departments/dept-images/oncology/abhay-bhave.webp";
import MuzammilShaikhImage from "../departments/dept-images/oncology/muzammil-shaikh.webp";
import SureshAdvaniImage from "../departments/dept-images/oncology/suresh-advani.webp";
import SandeepGoyleImage from "../departments/dept-images/oncology/sandeep-goyle.webp";
import RKDeshpandeImage from "../departments/dept-images/oncology/rk-deshpande.webp";
import TusharThoratImage from "../departments/dept-images/oncology/Dr.-Tushar-Thorat.webp";

const WA = ({ size = 5 }) => (
  <FaWhatsapp className={`icon-wa icon-wa--${size}`} />
);

const WA_URL =
  "https://wa.me/919833166697?text=Hello%2C%20I%20need%20oncology%20treatment%20consultation";

const Check = () => <FaCheck className="icon-check" />;

const trustSignals = [
  {
    icon: <FaUserMd />,
    label: "Experienced medical, surgical, and radiation oncologists",
  },
  {
    icon: <FaHospital />,
    label: "Affordable cancer treatment abroad with transparent pricing",
  },
  {
    icon: <FaMicroscope />,
    label: "Robotic cancer surgery & precision oncology",
  },
  {
    icon: <FaGlobeAfrica />,
    label: "Advanced immunotherapy and targeted therapy in India",
  },
  {
    icon: <FaHandHoldingUsd />,
    label: "International patient departments with English-speaking staff",
  },
  {
    icon: <FaHandHoldingUsd />,
    label: "Modern cancer hospitals with global treatment standards",
  },
  {
    icon: <FaHandHoldingUsd />,
    label: "Faster treatment access and personalized care plans",
  },
];

const cancersServices = [
  {
    id: 1,
    title: "Blood Cancer",
    description:
      "Advanced blood cancer treatment in India includes chemotherapy, targeted therapy, immunotherapy, and bone marrow transplant procedures. Experienced hematology specialists provide personalized care for leukemia, lymphoma, and myeloma using modern diagnostic and treatment technologies.",
    image: BloodCancer,
    alt: "Blood cancer treatment in India",
  },
  {
    id: 2,
    title: "CyberKnife Treatment",
    description:
      "CyberKnife treatment in India offers non-invasive and highly precise radiation therapy for tumors affecting the brain, spine, lungs, prostate, and other organs. This advanced technology helps target cancer cells accurately while reducing damage to surrounding healthy tissues.",
    image: CyberKnife,
    alt: "CyberKnife cancer treatment in India",
  },
  {
    id: 3,
    title: "Mouth Cancer",
    description:
      "Mouth cancer treatment in India includes surgery, radiation therapy, chemotherapy, and reconstructive procedures based on the stage and location of the tumor. Early diagnosis and multidisciplinary oncology care help improve recovery and treatment outcomes for international patients.",
    image: MouthCancer,
    alt: "Mouth cancer treatment in India",
  },
  {
    id: 4,
    title: "Lung Cancer",
    description:
      "Lung cancer treatment in India includes minimally invasive surgery, chemotherapy, immunotherapy, targeted therapy, and precision radiation oncology. Patients searching for affordable lung cancer treatment abroad choose India for experienced specialists, advanced technology, and personalized treatment plans.",
    image: LungCancer,
    alt: "Lung cancer treatment in India",
  },
  {
    id: 5,
    title: "Chemotherapy",
    description:
      "Chemotherapy in India is provided using modern oncology protocols and careful patient monitoring. Treatment plans are personalized based on cancer type, stage, and patient health condition, helping improve treatment effectiveness while managing side effects safely.",
    image: Chemotherapy,
    alt: "Chemotherapy treatment in India",
  },
  {
    id: 6,
    title: "Radiation Therapy",
    description:
      "Radiation therapy in India uses advanced technologies such as IMRT, IGRT, and precision radiation oncology to treat different types of cancers. Modern radiation treatment helps improve accuracy, reduce side effects, and support faster recovery for patients.",
    image: RadiationTherapy,
    alt: "Radiation therapy treatment in India",
  },
  {
    id: 7,
    title: "Cervical Cancer",
    description:
      "Cervical cancer treatment in India includes surgery, chemotherapy, radiation therapy, and targeted oncology care. Leading cancer hospitals provide advanced diagnosis and personalized treatment plans for early-stage and advanced cervical cancer patients from international locations.",
    image: CervicalCancer,
    alt: "Cervical cancer treatment in India",
  },
  {
    id: 8,
    title: "Breast Lumpectomy",
    description:
      "Breast lumpectomy in India is performed by experienced surgical oncology teams using breast-conserving techniques whenever possible. This procedure helps remove cancerous tissue while preserving the appearance of the breast and supporting quicker recovery.",
    image: BreastLumpectomy,
    alt: "Breast lumpectomy treatment in India",
  },
  {
    id: 9,
    title: "Breast Cancer",
    description:
      "Breast cancer treatment in India includes surgery, chemotherapy, radiation therapy, hormone therapy, and targeted therapy. Patients benefit from multidisciplinary oncology care, modern breast imaging technologies, and experienced breast cancer specialists across leading cancer hospitals.",
    image: BreastCancer,
    alt: "Breast cancer treatment in India",
  },
  {
    id: 10,
    title: "BMT (Bone Marrow Transplant)",
    description:
      "Bone marrow transplant in India is available for patients with leukemia, lymphoma, aplastic anemia, and other blood disorders. Advanced transplant units, experienced hematology specialists, and affordable treatment costs make India a preferred destination for BMT treatment.",
    image: BoneMarrowTransplant,
    alt: "Bone marrow transplant treatment in India",
  },
  {
    id: 11,
    title: "Prostate Cancer",
    description:
      "Prostate cancer treatment in India includes robotic surgery, radiation therapy, hormone therapy, immunotherapy, and targeted oncology care. International patients often choose India for affordable robotic prostate surgery and access to experienced uro-oncology specialists.",
    image: ProstateCancer,
    alt: "Prostate cancer treatment in India",
  },
  {
    id: 12,
    title: "Cancer Treatment",
    description:
      "Cancer treatment in India combines advanced medical technology, experienced oncologists, and personalized care plans for different types of cancers. Patients benefit from affordable oncology treatment, shorter waiting times, and dedicated international patient support services.",
    image: CancerTreatment,
    alt: "Cancer treatment in India",
  },
  {
    id: 13,
    title: "Stem Cell Therapy",
    description:
      "Stem cell therapy in India is used in selected oncology and hematology treatments under expert medical supervision. Advanced medical centers provide personalized treatment protocols and supportive care for eligible patients requiring regenerative or transplant-based therapies.",
    image: StemCellTherapy,
    alt: "Stem cell therapy in India",
  },
  {
    id: 14,
    title: "Stomach Cancer",
    description:
      "Stomach cancer treatment in India includes surgical oncology, chemotherapy, targeted therapy, and radiation therapy based on the stage of cancer. Multidisciplinary treatment planning helps improve recovery and long-term treatment outcomes for international patients.",
    image: StomachCancer,
    alt: "Stomach cancer treatment in India",
  },
  {
    id: 15,
    title: "Colon Cancer",
    description:
      "Colon cancer treatment in India includes minimally invasive surgery, chemotherapy, immunotherapy, and precision radiation therapy. Advanced diagnostic technologies and experienced gastrointestinal oncology specialists help provide personalized cancer care for better outcomes.",
    image: ColonCancer,
    alt: "Colon cancer treatment in India",
  },
  {
    id: 16,
    title: "Esophageal Cancer",
    description:
      "Esophageal cancer treatment in India includes surgery, chemotherapy, radiation therapy, and targeted treatment approaches. Leading oncology hospitals provide advanced thoracic oncology care with personalized treatment plans and rehabilitation support for international patients.",
    image: EsophagealCancer,
    alt: "Esophageal cancer treatment in India",
  },
];

const steps = [
  {
    number: "01",
    title: "Share Medical Reports",
    description:
      "Patients can send scans, biopsy reports, pathology slides, and previous treatment records online for review.",
  },
  {
    number: "02",
    title: "Online Consultation",
    description:
      "International patient coordinators arrange virtual consultations with cancer specialists in India.",
  },
  {
    number: "03",
    title: "Personalized Treatment Plan & Cost Estimate",
    description:
      "Doctors provide treatment recommendations, expected duration, and estimated treatment costs.",
  },
  {
    number: "04",
    title: "Medical Visa & Travel Assistance",
    description:
      "Hospitals assist with medical visa invitation letters, airport pickup, hotel stay, and local travel support.",
  },
  {
    number: "05",
    title: "Cancer Treatment in India",
    description:
      "Patients receive treatment using advanced oncology technology and personalized care protocols.",
  },
  {
    number: "06",
    title: "Recovery & Follow-Up Support",
    description:
      "Post-treatment monitoring, online follow-ups, rehabilitation, and medication guidance continue even after returning home.",
  },
];

const DOCTORS = [
  {
    name: "Dr. Vishnu Agarwal",
    education: "MBBS, MS - General Surgery, Surgical Oncology Fellowship",
    spec: "Surgical Oncologist, Robotic Cancer Surgeon, Laparoscopic Oncosurgeon",
    desc: "Dr. Vishnu Agarwal is a highly accomplished Surgical Oncologist with over 15 years of experience specializing in laparoscopic and robotic cancer surgeries. He completed his MBBS and MS in General Surgery from Mumbai University and pursued advanced training in Surgical Oncology at the prestigious Tata Memorial Hospital, Mumbai. To further enhance his expertise in minimally invasive cancer treatment, Dr. Vishnu Agarwal completed a fellowship in Laparoscopic and Robotic Gynaecology and Colorectal Cancer Surgery at St. Mary’s Hospital, Seoul, South Korea, along with advanced robotic surgical training in France. He is widely recognized for delivering precision-driven minimally invasive cancer surgeries that promote faster recovery, reduced post-operative complications, and improved patient outcomes. Dr. Vishnu Agarwal has extensive expertise in the management of gynecological cancers, including advanced laparoscopic and robotic surgeries for endometrial, ovarian, and cervical cancers. He is also a pioneer in breast cancer surgery and performed the first robotic surgery for a breast tumor in India. Over his distinguished career, he has successfully performed more than a thousand breast cancer surgeries, including mastectomies, breast-conserving surgeries, sentinel lymph node biopsies, and oncoplastic procedures. His expertise further extends to minimally invasive colorectal cancer surgeries, where he has managed several highly complex cases with exceptional outcomes. Having treated over 6,000 national and international patients, Dr. Vishnu Agarwal is known for combining advanced robotic technology with compassionate, patient-focused cancer care. He actively participates in surgical teaching programs, live demonstrations, and academic training sessions, contributing significantly to the advancement of modern surgical oncology.",
    photoUrl: VishnuAgarwalImage,
  },
  {
    name: "Dr. Kamran Khan",
    education: "MBBS, MS - General Surgery",
    spec: "General Surgeon, Surgical Oncologist, Robotic Cancer Surgeon",
    desc: "Dr. Kamran Khan is a highly experienced General Surgeon and Surgical Oncologist with over 35 years of overall experience, including 32 years as a specialist. He specializes in minimally invasive and robotic surgeries for gastrointestinal and gynecologic cancers. With extensive clinical experience gained during his tenure at the renowned Tata Memorial Hospital (TMH), Mumbai, Dr. Kamran Khan is known for combining advanced surgical technology with precise, tissue-preserving oncologic techniques to deliver effective cancer care. His expertise includes laparoscopic and robotic cancer surgeries, pelvic oncology procedures, gastrointestinal oncology, and advanced gynecologic cancer management. Dr. Kamran Khan follows an evidence-based, patient-focused surgical approach aimed at minimizing surgical trauma, reducing post-operative complications, and promoting faster recovery. Recognized for his meticulous surgical planning, technical excellence, and commitment to patient safety, he has built a strong reputation in modern oncologic surgery. His training and research fellowship at Tata Memorial Hospital further strengthened his expertise in advanced minimally invasive cancer procedures and contemporary surgical oncology pathways.",
    photoUrl: KamranKhanImage,
  },
  {
    name: "Dr. Manish G. Agarwal",
    education:
      "MBBS, MS (Orthopaedics), DNB (Orthopaedics), Diploma in Tissue Banking",
    spec: "Orthopaedic Oncosurgeon, Surgical Oncologist, Paediatric Orthopaedic Specialist",
    desc: "Dr. Manish Agarwal is a renowned Orthopaedic Oncologist at the Department of Surgical Oncology at Sir H. N. Reliance Foundation Hospital and is also practicing at Nanavati Max Super Specialty Hospital, Mumbai. He has over two decades of experience in Orthopaedic Oncology. and is widely recognised as one of the pioneers of Orthopaedic Oncology in India. Dr. Agarwal completed his M.B.B.S. and M.S. from Seth GS Medical College and KEM Hospital, Mumbai. After completing his fellowship at Tata Memorial Hospital (June to December, 1993), he joined KEM Hospital as a Lecturer. In 2000, he joined Tata Memorial Hospital as a full time orthopaedic oncologist. He has published numerous papers in national and international journals, and has presented his research at various conferences and seminars. Dr. Agarwal has trained many young orthopaedic surgeons in orthopaedic oncology and has been actively involved in organising and participating in teaching programmes and workshops for orthopaedic surgeons across India. ",
    photoUrl: ManishGAgarwalImage,
  },
  {
    name: "Dr. Sarita Shrivastva",
    education: "MBBS, MD - Radiotherapy, DM - Medical Oncology",
    spec: "Medical Oncologist",
    desc: "Dr. Sarita Shrivastva is an experienced Medical Oncologist with over 16 years of overall experience, including 6 years as a specialist in oncology. She specializes in comprehensive cancer care, including chemotherapy, targeted therapy, and advanced oncology treatments. Dr. Sarita Shrivastva completed her MBBS, MD in Radiotherapy, and DM in Medical Oncology, receiving extensive training in the diagnosis, staging, and treatment of various cancers. She strongly believes in preventive oncology and emphasizes the importance of cancer screening and early detection to improve treatment outcomes and increase the chances of cure. With deep expertise in radiation oncology, chemotherapy, and personalized cancer therapies, she is committed to providing evidence-based and up-to-date cancer treatment solutions tailored to each patient’s condition. Known for her compassionate and patient-focused approach, Dr. Sarita Shrivastva focuses on delivering accurate diagnosis, advanced treatment planning, and holistic cancer care to ensure the best possible outcomes for her patients.",
    photoUrl: SaritaShrivastvaImage,
  },
  {
    name: "Dr. Ganapathi Bhat",
    education:
      "DNB (General Medicine), M.N.A.M.S, Affiliate AACR Medical Oncology & Hemato-Oncology (Clinical) and Stem Cell Transplant",
    spec: "Medical Oncologist, Hemato-Oncologist, Bone Marrow Transplant Specialist",
    desc: "Dr. Ganapathi Bhat is a highly respected Medical Oncologist and Bone Marrow Transplant Specialist with extensive expertise in the treatment of hematological malignancies, solid tumors, immunotherapy, targeted therapy, and stem cell transplantation. He currently serves as Senior Consultant in the Department of Medical Oncology and Bone Marrow Transplant at Jaslok Hospital & Research Centre, Mumbai, India. With decades of clinical experience, Dr. Bhat has established himself as a leading expert in autologous and allogeneic hematopoietic stem cell transplantation, advanced chemotherapy protocols, immunotherapy, and precision oncology. His areas of specialization include bone marrow transplantation, CAR-T cell therapy, targeted therapies, bispecific antibody treatments for leukemia and multiple myeloma, radioimmunotherapy for lymphoma, and Peptide Receptor Radionuclide Therapy (PRRT) for neuroendocrine tumors and metastatic prostate cancer. Dr. Bhat has also been actively involved in the clinical application of mesenchymal stem cells in regenerative medicine. He gained significant international experience while working at Kuwait Cancer Control Centre, where he specialized in lymphoma management and bone marrow transplantation. To further enhance his expertise, he completed advanced training in Blood Cell Transplantation at ULM University, Germany, and attended prestigious ESH-EBMT Hematopoietic Stem Cell Transplantation programs in France and Spain. Dr. Bhat is affiliated with several renowned international oncology and hematology organizations, including the Asian-Pacific Blood and Bone Marrow Transplantation Group, European Hematology Association, European Society for Medical Oncology, American Association for Cancer Research, and the College of Chest Physicians of India. Beyond clinical practice, he is actively involved in academic research, mentoring MSc, PhD, and Fellowship students in Medical Oncology under Mumbai University and MUHS. He has authored numerous scientific publications, book chapters, and research papers, contributing significantly to advancements in oncology and stem cell transplantation. Throughout his distinguished career, Dr. Ganapathi Bhat has received multiple prestigious honors, including the National Health Achievers Award for Best Oncologist of India, the Excellent Medical Oncologist Award, and the Iconic Healthcare Leader Award. His commitment to innovation, research, and patient-centered cancer care has made him one of India's leading specialists in medical oncology and bone marrow transplantation.",
    photoUrl: GanapathiBhatImage,
  },
  {
    name: "Dr. Abhay Bhave",
    education:
      "MBBS, MD, FRCPA (Fellow of the Royal College of Pathologists of Australasia)",
    spec: "Medical Oncologist, Haemato-Oncologist, Bone Marrow Transplant Specialist",
    desc: "Dr. Abhay Bhave is a highly experienced Medical Oncologist, Haemato-Oncologist, and Bone Marrow Transplant Specialist with over 30 years of expertise in the diagnosis and treatment of complex blood disorders and cancers. He currently serves as Senior Consultant in Medical Oncology, Haemato-Oncology, and Bone Marrow Transplantation at S L Raheja Hospital – A Fortis Associate, Mumbai. Dr. Bhave completed his MBBS and MD from the prestigious Lokmanya Tilak Municipal Medical College and further advanced his specialization through training in Haematology at Christian Medical College, Vellore. He also holds the distinguished FRCPA (Fellow of the Royal College of Pathologists of Australasia), reflecting his international recognition in the field of hematology and oncology. Throughout his distinguished career, Dr. Bhave has developed extensive expertise in the management of anemia, thrombocytopenia (low platelet disorders), deep vein thrombosis, blood cancers, lymphoma, and bone marrow transplantation. His patient-centered approach, combined with evidence-based treatment strategies, has helped numerous patients achieve successful outcomes in both benign and malignant hematological conditions. Dr. Bhave has gained valuable international experience through his work at Sultan Qaboos University Hospital in Oman and Westmead Hospital in Sydney, Australia. During his tenure with the Australian Red Cross Blood Service, he played a crucial role in blood safety management, blood transfusion services, and coordinating blood supplies across New South Wales. In addition to his clinical achievements, Dr. Bhave has been actively involved in community healthcare initiatives, organizing anemia and thalassemia screening camps and conducting educational programs on blood donation and cancer awareness. A respected researcher and academician, he has authored more than 40 publications in national and international medical journals and has contributed to the development of national clinical guidelines for Myelodysplastic Syndrome, Deep Vein Thrombosis, and the use of newer anticoagulant therapies. Dr. Bhave is also dedicated to medical education and has served as a lecturer at leading medical institutions, sharing his knowledge and expertise with future healthcare professionals. His exceptional contributions to hematology and oncology have earned him several accolades, including the prestigious Ekta Manch Award for community service. Known for his clinical excellence, compassionate patient care, and commitment to advancing hematological sciences, Dr. Abhay Bhave remains one of India's most respected specialists in haemato-oncology and bone marrow transplantation.",
    photoUrl: AbhayBhaveImage,
  },
  {
    name: "Dr. Muzammil Shaikh",
    education:
      "MBBS, MD (Internal Medicine), DM (Medical Oncology), DNB (Medical Oncology)",
    spec: "Medical Oncologist, Precision Oncology Specialist, Cancer Care Expert",
    desc: "Dr. Muzammil Shaikh is a highly accomplished Medical Oncologist with more than 20 years of experience in the diagnosis and treatment of a wide range of cancers. He currently serves as Consultant Medical Oncologist at P.D. Hinduja National Hospital & Medical Research Centre, Mumbai, where he has been providing advanced cancer care since 2013. Dr. Shaikh completed his MBBS from the prestigious Grant Medical College & Sir J.J. Hospital, University of Mumbai, followed by an MD in Internal Medicine from Seth G.S. Medical College & KEM Hospital, Mumbai. He further pursued super-specialty training in Medical Oncology by obtaining a DM in Medical Oncology from The Gujarat Cancer & Research Institute and a DNB in Medical Oncology from the National Board, New Delhi. To strengthen his expertise in modern cancer therapies, Dr. Shaikh underwent international training through a perceptorship in metastatic colorectal malignancies in Liverpool, United Kingdom, and completed an observership at the world-renowned M.D. Anderson Cancer Center in Houston, Texas, USA. Throughout his career, he has gained extensive experience in managing both common and complex cancers using evidence-based treatment approaches, including chemotherapy, targeted therapy, immunotherapy, precision oncology, and personalized cancer treatment strategies. Dr. Shaikh has a special interest in Precision and Molecular Oncology, enabling him to tailor cancer treatments based on genetic and molecular profiling to improve outcomes and minimize treatment-related side effects. His clinical expertise spans breast cancer, ovarian cancer, lung cancer, gastrointestinal cancers, hepatobiliary cancers, head and neck cancers, genitourinary cancers, bone and soft tissue sarcomas, as well as geriatric oncology and palliative cancer care. Known for his patient-centric approach, Dr. Shaikh focuses on delivering comprehensive cancer care that combines advanced medical treatments with compassionate support throughout the patient's cancer journey. His commitment to innovation, clinical excellence, and personalized oncology care has earned him recognition as one of Mumbai's leading medical oncologists.",
    photoUrl: MuzammilShaikhImage,
  },
  {
    name: "Dr. Suresh Advani",
    education: "MBBS, MD (General Medicine), FICP, MNAMS, FNAMS, UICC, IRCETT",
    spec: "Medical Oncologist, Haematologist, Bone Marrow Transplant Pioneer, Pediatric Oncologist",
    desc: "Dr. Suresh Advani is one of India's most distinguished Medical Oncologists and Haematologists, with over 50 years of exceptional experience in cancer care, hematology, and bone marrow transplantation. He currently serves as Mentor in the Department of Medical Oncology at Sir H. N. Reliance Foundation Hospital, Mumbai. Dr. Advani graduated from Bombay University in 1969 and completed his MD in General Medicine in 1973. He further enhanced his expertise through specialized international training in Bone Marrow Transplantation and Medical Oncology at the prestigious Fred Hutchinson Cancer Research Center, Seattle, USA, under the International Cancer Research Technology Transfer (ICRETT) program in 1981. In 1986, he completed an advanced fellowship through the Yamagiwa-Yoshida Memorial International Cancer Study Grant awarded by the International Union Against Cancer (UICC). Widely recognized as the pioneer of Bone Marrow Transplantation (BMT) programs in India, Dr. Advani has played a transformative role in advancing cancer treatment and hematology services across the country. His expertise encompasses medical oncology, hematological malignancies, pediatric oncology, bone marrow transplantation, targeted therapies, and precision cancer treatment. Throughout his illustrious career, he has contributed significantly to the development of modern oncology practices in India and has been instrumental in introducing innovative cancer therapies. As Professor of Medical Oncology at Tata Memorial Hospital, Mumbai, he has mentored generations of oncologists and healthcare professionals while shaping the future of cancer care. Dr. Advani has authored more than 600 scientific publications in national and international journals and serves on the editorial boards of several prestigious medical publications. A brilliant academician, he was a first-rank holder in Anatomy and Physiology during his medical education. His remarkable contributions to oncology, research, education, and patient care have earned him numerous national and international honors, including the prestigious Padma Bhushan awarded by the Government of India in 2012. Known for his pioneering vision, clinical excellence, and lifelong dedication to cancer treatment, Dr. Suresh Advani remains one of the most respected and influential figures in the field of medical oncology and hematology in India.",
    photoUrl: SureshAdvaniImage,
  },
  {
    name: "Dr. Sandeep Goyle",
    education:
      "MBBS, MD (General Medicine), MRCP (London), CCST (Medical Oncology, UK), DNB (General Medicine), FCPS (General Medicine)",
    spec: "Medical Oncologist, Cancer Specialist, Chemotherapy & Immunotherapy Expert",
    desc: "Dr. Sandeep Goyle is a renowned Medical Oncologist with over 18 years of experience in the treatment and management of various cancers using advanced systemic therapies. He currently serves as the Head of Medical Oncology and is recognized for his expertise in chemotherapy, targeted therapy, immunotherapy, and precision-based cancer treatment. Dr. Goyle completed his MBBS and MD in General Medicine from premier medical institutions in Mumbai before pursuing advanced specialist training in Medical Oncology at leading teaching hospitals in the United Kingdom. He earned the prestigious MRCP (London) qualification and completed his CCST (Certificate of Completion of Specialist Training) in Medical Oncology in the UK, further strengthening his expertise in modern cancer management. After returning to India, Dr. Goyle played a pivotal role in establishing the Department of Medical Oncology and Chemotherapy Daycare services at Kokilaben Dhirubhai Ambani Hospital in 2008. Since then, he has been instrumental in delivering comprehensive cancer care through evidence-based treatment protocols and multidisciplinary oncology management. His clinical focus is on systemic cancer therapies, including chemotherapy, targeted therapies, immunotherapy, and personalized cancer treatment approaches designed to improve outcomes and quality of life for patients. Dr. Goyle has extensive experience in treating a wide spectrum of solid tumors and hematological malignancies, utilizing the latest advancements in oncology to provide individualized treatment plans. Known for his patient-centered approach, he combines international expertise with compassionate care, helping patients navigate every stage of their cancer journey. His commitment to innovation, clinical excellence, and advanced cancer therapeutics has established him as one of Mumbai's leading medical oncologists.",
    photoUrl: SandeepGoyleImage,
  },
  {
    name: "Dr. R. K. Deshpande",
    education: "MBBS, MS (General Surgery)",
    spec: "Thoracic Surgical Oncologist, Cancer Surgeon, Pediatric Oncology Specialist",
    desc: "Dr. R. K. Deshpande, also known as Dr. Ramakant Deshpande, is one of India's most distinguished Surgical Oncologists with over 44 years of experience in cancer surgery and thoracic oncology. He currently serves as the Director of the Asian Institute of Oncology, Mumbai, and is widely recognized as a pioneer in thoracic cancer surgery in India. Dr. Deshpande completed his MBBS from Karnataka Medical College, Hubli, and pursued his MS in General Surgery at the prestigious Tata Memorial Hospital, Mumbai. To further advance his expertise in cancer surgery, he underwent specialized training at the renowned Memorial Sloan Kettering Cancer Center, New York, USA. He began his oncology career at Kidwai Memorial Institute of Oncology, Bengaluru, in 1982 before joining Tata Memorial Hospital, Mumbai, where he served as a leading Surgical Oncologist and Chief of Thoracic Services from 1985 to 2002. Throughout his illustrious career, Dr. Deshpande has been instrumental in advancing thoracic oncology and minimally invasive cancer surgery in India. He holds the distinction of introducing thoracoscopic surgery at Tata Memorial Hospital, revolutionizing the surgical management of thoracic tumors through minimally invasive techniques. His expertise includes the treatment of lung cancer, esophageal cancer, breast cancer, and pediatric cancers, with a particular focus on thoracic malignancies and endoscopic surgical procedures. Dr. Deshpande has authored more than 50 scientific publications in national and international medical journals and has contributed chapters on lung cancer management to leading oncology textbooks published by the National Book Trust of India. He has organized numerous national and international oncology conferences and remains actively involved in cancer awareness programs, public education initiatives, and the promotion of early cancer detection. Known for his surgical precision, innovation, and patient-centered approach, Dr. R. K. Deshpande has earned immense respect within the oncology community and continues to be a leading authority in thoracic surgical oncology and advanced cancer surgery in India.",
    photoUrl: RKDeshpandeImage,
  },
  {
    name: "Dr. Tushar Thorat",
    education:
      "MBBS, MS (General Surgery), M.Ch. (Plastic Surgery), DNB (Plastic Surgery)",
    spec: "Plastic & Reconstructive Surgeon, Oncoplastic Surgeon, Microsurgery Specialist",
    desc: "Dr. Tushar Thorat is a highly skilled Plastic and Reconstructive Surgeon with over 8 years of experience in advanced reconstructive, microsurgical, and oncoplastic procedures. He currently serves as a Consultant in the Departments of Plastic & Reconstructive Surgery and Surgical Oncology at Sir H. N. Reliance Foundation Hospital, Mumbai. Dr. Thorat completed his MBBS before pursuing an MS in General Surgery in 2011 and an M.Ch. in Plastic Surgery in 2014 from the prestigious Nair Hospital, Mumbai. He further strengthened his academic credentials by obtaining a DNB in Plastic Surgery in 2015 while serving as a faculty member at KEM Hospital, Mumbai. To gain international expertise in advanced reconstructive and aesthetic procedures, Dr. Thorat completed a prestigious International Fellowship in Microsurgery and Aesthetic Surgery at the Department of Plastic Surgery, Hanyang University College of Medicine, Seoul, South Korea. Throughout his career, he has developed extensive expertise in reconstructive surgery following cancer treatment, trauma, burns, and congenital deformities. His specialization includes microsurgical reconstruction, oncoplastic surgery, craniofacial surgery, cosmetic surgery, hair transplantation, laser skin treatments, and complex soft tissue reconstruction. Dr. Thorat has played a transformative role in restoring both function and appearance for patients affected by cancer, severe injuries, burns, and congenital anomalies, helping thousands regain confidence, dignity, and an improved quality of life. In addition to his clinical practice, he has actively contributed to academic medicine by teaching plastic surgery residents at Seth G.S. Medical College and presenting scientific papers at numerous national and international medical conferences. He has also completed advanced certifications in Microsurgery, Craniofacial Surgery, Cosmetic Surgery, Hair Transplantation, and Laser Skin Treatments. Known for combining surgical precision with artistic reconstruction techniques, Dr. Tushar Thorat is widely recognized for delivering personalized, patient-centered care and exceptional reconstructive outcomes across a broad spectrum of complex surgical conditions.",
    photoUrl: TusharThoratImage,
  },
];

const HOSPITALS = [
  {
    name: "Apollo",
    sub: "Hospitals",
    image: apolloImage,
    location: "New Delhi, India",
    rating: 4.9,
    accreditations: ["JCI", "NABH"],
    specialties: [
      "Medical Oncology",
      "Radiation Oncology",
      "Bone Marrow Transplant",
    ],
  },
  {
    name: "Medanta",
    sub: "The Medicity",
    image: medantaImage,
    location: "Gurgaon, India",
    rating: 4.8,
    accreditations: ["JCI", "NABH"],
    specialties: [
      "Surgical Oncology",
      "Immunotherapy",
      "Precision Cancer Care",
    ],
  },

  {
    name: "Apollo Proton Cancer Centre",
    sub: "Healthcare",
    image: ApolloApcc,
    location: "Gurgaon, India",
    rating: 4.8,
    accreditations: ["JCI", "NABH"],
    specialties: [
      "Surgical Oncology",
      "Immunotherapy",
      "Precision Cancer Care",
    ],
  },
  {
    name: "Fortis",
    sub: "Healthcare",
    image: fortisImage,
    location: "Delhi NCR, India",
    rating: 4.7,
    accreditations: ["JCI", "NABH"],
    specialties: [
      "Breast Cancer Treatment",
      "Radiation Therapy",
      "Hematology & Oncology",
    ],
  },
  {
    name: "Max",
    sub: "Healthcare",
    image: maxImage,
    location: "Delhi, India",
    rating: 4.8,
    accreditations: ["NABH", "ISO"],
    specialties: [
      "Targeted Therapy",
      "PET-CT Diagnostics",
      "Cancer Rehabilitation",
    ],
  },
  {
    name: "HCG",
    sub: "Cancer Centre",
    image: hcgImage,
    location: "Bengaluru, India",
    rating: 4.8,
    accreditations: ["NABH", "NABL"],
    specialties: [
      "Medical Oncology",
      "Radiation Oncology",
      "Bone Marrow Transplant",
    ],
  },
];

const faqData = [
  {
    id: 1,
    question:
      "Why do international patients choose India for cancer treatment?",
    answer:
      "India offers affordable cancer treatment, experienced oncologists, advanced medical technology, internationally accredited hospitals, and dedicated international patient support services.",
  },
  {
    id: 2,
    question: "How much does cancer treatment cost in India?",
    answer:
      "Cancer treatment costs in India depend on the cancer type, treatment plan, hospital, and duration, but are generally lower than South Africa, the UK, and the USA.",
  },
  {
    id: 3,
    question: "Is chemotherapy affordable in India?",
    answer:
      "Yes, chemotherapy cost in India is comparatively affordable while maintaining high treatment standards, modern oncology protocols, and personalized patient care.",
  },
  {
    id: 4,
    question: "What types of cancers are treated in India?",
    answer:
      "Hospitals in India treat prostate cancer, lung cancer, breast cancer, blood cancer, colon cancer, stomach cancer, cervical cancer, and many other complex cancers.",
  },
  {
    id: 5,
    question: "Is robotic surgery available for cancer treatment in India?",
    answer:
      "Yes, many leading oncology hospitals in India offer robotic cancer surgery for prostate cancer, gastrointestinal cancers, and other complex oncology procedures.",
  },
  {
    id: 6,
    question: "Do hospitals in India provide medical visa assistance?",
    answer:
      "Most international patient departments help with medical visa invitation letters, documentation support, and travel coordination for overseas patients.",
  },
  {
    id: 7,
    question: "How can I get a treatment plan before traveling to India?",
    answer:
      "Patients can share medical reports online and receive an expert opinion, estimated treatment plan, and approximate treatment cost before traveling.",
  },
  {
    id: 8,
    question:
      "Are international patient coordinators available in Indian hospitals?",
    answer:
      "Yes, dedicated coordinators assist international patients with appointments, accommodation, airport pickup, interpreters, and follow-up support.",
  },
  {
    id: 9,
    question:
      "How long do cancer patients usually stay in India for treatment?",
    answer:
      "The duration depends on the treatment type, cancer stage, surgery requirements, chemotherapy cycles, and recovery progress recommended by the oncology team.",
  },
  {
    id: 10,
    question: "How do I choose the best oncologist in India?",
    answer:
      "Patients should consider doctor experience, specialization, hospital infrastructure, treatment technology, patient reviews, and multidisciplinary cancer care expertise.",
  },
];

// CancerServiceCard Component
function EyesServiceCard({ service }) {
  return (
    <div className="cancer-service-card">
      <img
        src={service.image}
        alt={service.alt}
        className="cancer-service-card-image"
        loading="lazy"
      />
      <div className="cancer-service-card-overlay" />
      <div className="cancer-service-card-content">
        <div className="cancer-service-card-top">
          <h3 className="cancer-service-card-title">{service.title}</h3>
        </div>
        <p className="cancer-service-card-desc">{service.description}</p>
      </div>
    </div>
  );
}

const reviews = [
  {
    name: "Grace N., Kenya",
    text: "“My mother was diagnosed with breast cancer in Nairobi, and we were very confused about where to go for treatment. Humancare World Wide helped us arrange everything in India, from the hospital appointment to airport pickup. The doctors were excellent and my mother is recovering well now. We are truly grateful.”",
  },
  {
    name: "— Daniel O., Uganda",
    text: "“Thank you to Humancare World Wide for supporting my family during my leukemia treatment in India. Their team stayed connected with us throughout the journey and helped us with medical visa processing and accommodation. The treatment was successful and the care was beyond our expectations.”",
  },
  {
    name: "— Amina S., Tanzania",
    text: "“My father needed urgent liver cancer treatment, and the Humancare team guided us step by step. We were worried about costs and travel, but they explained everything clearly and helped us choose the right hospital. We felt supported from beginning to end.”",
  },
  {
    name: "— Esther M., Nigeria",
    text: "“When my husband was diagnosed with colon cancer in Lagos, we were under a lot of stress and didn’t know where to begin. Humancare World Wide helped us connect with a top oncology hospital in India and handled all the arrangements quickly. The doctors explained the treatment clearly, and the support team checked on us regularly during our stay. Today, my husband is doing much better and we are thankful for the care and guidance we received.”",
  },
];
const Stars = () => (
  <div className="eye-reviews-stars">
    {"★★★★★".split("").map((s, i) => (
      <span key={i}>{s}</span>
    ))}
  </div>
);

export default function OncologyTreatmentIndia() {
  const [hoveredId, setHoveredId] = useState(null);
  const [active, setActive] = useState(null);
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

  // Truncate description helper
  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

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
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap"
        />
        {/* Primary SEO */}
        <title>
          Cancer Treatment in India | Affordable Oncology Care for International
          Patients
        </title>

        <meta
          name="description"
          content="Get affordable cancer treatment in India with experienced oncologists, advanced cancer hospitals, robotic surgery, chemotherapy, radiation therapy, and personalized oncology care for international patients from Kenya, Uganda, Tanzania, Nigeria, and South Sudan."
        />

        <meta
          name="keywords"
          content="
                    cancer treatment in india,
                    oncology treatment in india,
                    affordable cancer care india,
                    oncology specialists in india,
                    cancer hospitals in india,
                    chemotherapy in india,
                    radiation therapy india,
                    robotic cancer surgery india,
                    immunotherapy in india,
                    targeted therapy india,
                    breast cancer treatment india,
                    lung cancer treatment india,
                    prostate cancer treatment india,
                    bone marrow transplant india,
                    oncology surgery india,
                    cancer care hospitals india,
                    advanced oncology care,
                    cancer treatment abroad,
                    medical oncology india,
                    radiation oncology india
                  "
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://humancaremedicaltourism.com/cancer-treatment-in-india"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Cancer Treatment in India | Affordable Oncology Care"
        />

        <meta
          property="og:description"
          content="Affordable oncology treatment in India with experienced cancer specialists, advanced hospitals, and personalized care for international patients."
        />

        <meta
          property="og:image"
          content="https://humancaremedicaltourism.com/src/departments/dept-images/cancer-treatment-india-hero.webp"
        />

        <meta
          property="og:url"
          content="https://humancaremedicaltourism.com/cancer-treatment-in-india"
        />

        <meta property="og:type" content="website" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Cancer Treatment in India | Affordable Oncology Care"
        />

        <meta
          name="twitter:description"
          content="Get advanced and affordable cancer treatment in India with modern oncology hospitals and experienced cancer specialists."
        />

        <meta
          name="twitter:image"
          content="https://humancaremedicaltourism.com/src/departments/dept-images/cancer-treatment-india-hero.webp"
        />

        {/* Geo SEO */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />

        {/* Language */}
        <meta httpEquiv="content-language" content="en" />
      </Helmet>
      {/* ════ SECTION 1 — HERO ════ */}
      <section className="oncology-hero-section">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Affordable Cancer treatment in India for international patients"
          className="oncology-hero-bg-image"
          loading="eager"
        />

        {/* Gradient Overlay */}
        <div className="oncology-hero-overlay" />

        {/* Content */}
        <div className="oncology-hero-content">
          <span className="oncology-hero-badge">
            Trusted by 50,000+ International Patients
          </span>

          <h1>Cancer Treatment in India for International Patients</h1>

          <p>
            India is one of the leading destinations for affordable and advanced
            oncology care. International patients trust Indian cancer hospitals
            for experienced oncology specialists, modern technology, and
            personalized treatment plans.
          </p>

          <div className="oncology-hero-ctas">
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

      <section className="cancer-care-section">
        <div className="cancer-care-container">
          {/* ── Left Content Panel ── */}
          <div className="cancer-care-left">
            <h2 className="cancer-care-heading">
              <span className="cancer-care-heading-accent">
                Affordable Cancer Treatment in India with Top Oncologists
              </span>
            </h2>

            <p className="cancer-care-body">
              Looking for experienced oncology specialists in India for advanced
              and affordable cancer care? India is trusted by international
              patients for modern oncology care, experienced cancer specialists,
              and compassionate support.
            </p>

            <p className="cancer-care-body">
              From prostate oncology and lung oncology care to chemotherapy,
              immunotherapy, robotic surgery, and radiation therapy, India
              offers high-quality cancer care at affordable costs compared to
              South Africa, the UK, and the USA.
            </p>
            <p className="cancer-care-body">
              Patients from Kenya, Uganda, Tanzania, Nigeria, and other African
              countries choose India for personalized treatment plans, advanced
              technology, shorter waiting times, and dedicated international
              patient services.
            </p>

            <h2 className="cancer-care-trust-heading">
              Why International Patients Choose India
            </h2>

            <ul className="cancer-care-trust-list">
              {trustSignals.map((item, idx) => (
                <li key={idx} className="cancer-care-trust-item">
                  <span className="cancer-care-trust-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="cancer-care-trust-label">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right Image Panel ── */}
          <div className="cancer-care-right">
            <div className="cancer-care-img-wrapper cancer-care-img-top">
              <img
                src={OncologyAboutImage}
                alt="Advanced oncology care in India"
                className="cancer-care-img"
              />
            </div>

            <div className="cancer-care-img-wrapper cancer-care-img-bottom">
              <img
                src={OncologyAboutImage1}
                alt="Oncology treatment in India with advanced cancer care"
                className="cancer-care-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 3 — WHY CHOOSE INDIA ════ */}
      <section className="why-choose-india-section">
        <div className="why-choose-container">
          <div className="why-choose-header">
            <h2 className="why-choose-heading">
              Why Choose India for Cancer Treatment?
            </h2>
            <p className="why-choose-subheading">
              India has become a preferred destination for patients seeking
              affordable and high-quality oncology care.
            </p>
          </div>

          <div className="why-choose-cards-grid">
            {/* Card 1: Affordable Treatment Costs */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaMoneyBillWave />
              </div>
              <h3 className="why-choose-card-title">
                Affordable Treatment Costs
              </h3>
              <p className="why-choose-card-text">
                India offers advanced cancer treatment at significantly lower
                costs compared to South Africa, the UK, and the USA.
                International patients can access high-quality oncology care,
                modern treatment technologies, and experienced cancer
                specialists without the financial burden often associated with
                cancer treatment abroad. Transparent pricing and personalized
                treatment plans also help patients plan their medical journey
                with confidence.
              </p>
            </div>

            {/* Card 2: Internationally Accredited Hospitals */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaShieldAlt />
              </div>
              <h3 className="why-choose-card-title">
                Internationally Accredited Hospitals
              </h3>
              <p className="why-choose-card-text">
                Many <strong>oncology hospitals in India</strong> are
                internationally recognized for their advanced infrastructure,
                patient safety standards, and multidisciplinary cancer care.
                These hospitals provide modern diagnostic facilities,
                specialized oncology departments, and dedicated international
                patient services, ensuring a safe, comfortable, and trusted
                treatment experience for patients traveling from African
                countries and other international destinations.
              </p>
            </div>

            {/* Card 3: Experienced Oncology Specialists */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaUserMd />
              </div>
              <h3 className="why-choose-card-title">
                Experienced Oncology Specialists
              </h3>
              <p className="why-choose-card-text">
                India is home to highly experienced medical oncologists,
                surgical oncologists, radiation oncologists, and cancer surgeons
                who manage complex cancer cases every day. Patients benefit from
                personalized treatment planning, multidisciplinary tumor board
                discussions, and access to specialists for prostate cancer, lung
                cancer, breast cancer, and other advanced oncology treatments
                across leading hospitals in major Indian cities.
              </p>
            </div>

            {/* Card 4: Advanced Oncology Technology */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaRobot />
              </div>
              <h3 className="why-choose-card-title">
                Advanced Oncology Technology
              </h3>
              <p className="why-choose-card-text">
                Leading cancer hospitals in India use advanced technologies such
                as robotic surgery, PET-CT imaging, precision radiation therapy,
                immunotherapy, targeted therapy, and genomic-based treatment
                planning. These modern treatment approaches help improve
                treatment accuracy, reduce side effects, support faster
                recovery, and provide personalized cancer care for both
                early-stage and advanced cancer patients.
              </p>
            </div>

            {/* Card 5: Dedicated International Patient Services */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaGlobe />
              </div>
              <h3 className="why-choose-card-title">
                Dedicated International Patient Services
              </h3>
              <p className="why-choose-card-text">
                International patients traveling to India for cancer treatment
                receive complete support throughout their medical journey.
                Hospitals assist with medical visa documentation, airport
                pickup, accommodation arrangements, appointment scheduling,
                interpreter services, and post-treatment follow-up coordination.
                Dedicated international patient teams help make the treatment
                process smoother, more comfortable, and stress-free for patients
                and their families.
              </p>
            </div>

            {/* Card 6: Short Waiting Time */}
            <div className="why-choose-card">
              <div className="why-choose-card-icon">
                <FaClock />
              </div>
              <h3 className="why-choose-card-title">Short Waiting Time</h3>
              <p className="why-choose-card-text">
                Unlike many countries where cancer treatment may involve long
                waiting periods, hospitals in India often provide faster access
                to consultations, diagnostics, surgery, chemotherapy, and
                radiation therapy. Early diagnosis and timely treatment can play
                an important role in improving outcomes, making India a
                preferred destination for patients seeking quicker oncology care
                and immediate medical attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION — PATIENT JOURNEY ════ */}
      <section className="patient-journey-section">
        <div className="patient-journey-container">
          {/* ── Left: Image ── */}
          <div className="patient-journey-image">
            <img
              src={InternationalPatientServicesImage}
              alt="International patient services for cancer treatment in India"
              className="patient-journey-img"
            />
          </div>

          {/* ── Right: Content ── */}
          <div className="patient-journey-content">
            <h2 className="patient-journey-heading">
              International Patient Journey
            </h2>

            <p className="patient-journey-text">
              From initial consultation to post-treatment follow-up, we guide
              international patients through every step of their cancer
              treatment journey in India with complete support and personalized
              care coordination.
            </p>

            <div className="patient-journey-steps">
              {steps.map((step, index) => (
                <div className="patient-journey-step" key={index}>
                  <div className="step-number-badge">{step.number}</div>
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ SECTION 4 — ONCOLOGY TREATMENT IN INDIA ════ */}
      <section className="oncology-treatment-section">
        <div className="oncology-treatment-container">
          {/* ── Left: Images Grid ── */}
          <div className="oncology-treatment-images">
            <div className="oncology-img-wrapper oncology-img-1">
              <img
                src={oncologyImage1}
                alt="Oncology consultation with cancer specialist in India"
                className="oncology-img"
              />
            </div>
            <div className="oncology-img-wrapper oncology-img-2">
              <img
                src={oncologyImage2}
                alt="Cancer specialist providing oncology treatment in India"
                className="oncology-img"
              />
            </div>
            <div className="oncology-img-wrapper oncology-img-3">
              <img
                src={oncologyImage3}
                alt="Multidisciplinary oncology treatment team in India"
                className="oncology-img"
              />
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="oncology-treatment-content">
            <span className="oncology-treatment-label">
              WHAT IS INCLUDED IN CANCER TREATMENT IN INDIA
            </span>

            <h2 className="oncology-treatment-heading">
              Oncology Treatment in India
            </h2>

            <p className="oncology-treatment-text">
              India is now recognized globally for advanced oncology treatment,
              highly trained cancer specialists, and affordable healthcare
              infrastructure.
            </p>

            <p className="oncology-treatment-text">
              International patients choose India because they can access modern
              cancer care without the extremely high treatment costs often seen
              in Western countries.
            </p>

            <h3 className="oncology-treatment-subheading">
              Why Patients Travel to India for Cancer Treatment
            </h3>

            <div className="oncology-treatment-cards">
              {/* Card 1: Advanced Cancer Technology */}
              <div className="oncology-treatment-card">
                <h4 className="oncology-card-title">
                  Experienced Cancer Specialists
                </h4>
                <p className="oncology-card-text">
                  India is home to some of the most experienced medical
                  oncology, surgical oncology, and radiation oncology experts.
                  International patients often choose leading oncology centers
                  in Mumbai, Delhi, Chennai, Hyderabad, Bangalore, Ahmedabad,
                  and Kolkata for specialized cancer care.
                </p>
              </div>

              {/* Card 2: International Treatment Standards */}
              <div className="oncology-treatment-card">
                <h4 className="oncology-card-title">
                  International Treatment Standards
                </h4>
                <p className="oncology-card-text">
                  Many <strong>cancer hospitals in India</strong> follow
                  international clinical protocols and have globally accredited
                  facilities focusing on patient safety, infection control,
                  personalized oncology care, multidisciplinary treatment
                  planning, and evidence-based approaches.
                </p>
              </div>

              {/* Card 3: Affordable Cancer Treatment */}
              <div className="oncology-treatment-card">
                <h4 className="oncology-card-title">
                  Affordable Cancer Treatment
                </h4>
                <p className="oncology-card-text">
                  One of the biggest reasons patients choose India is
                  affordability. Advanced oncology care in India can often cost
                  50–80% less than treatment in South Africa, the UK, Europe, or
                  the USA while still providing advanced medical care.
                </p>
              </div>

              {/* Card 4: Benefits for International Patients */}
              <div className="oncology-treatment-card">
                <h4 className="oncology-card-title">
                  Benefits for International Patients
                </h4>
                <p className="oncology-card-text">
                  Short waiting periods, faster diagnosis and treatment
                  initiation, English-speaking medical teams, dedicated
                  international patient departments, advanced diagnostic
                  facilities, and personalized treatment coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cancer-services-section">
        {/* Header */}
        <div className="cancer-services-header">
          <h2 className="cancer-services-title">
            Types of Cancer Treatments in India
          </h2>
          <p className="cancer-services-description">
            IIndia offers advanced and personalized prostate oncology care
            treatment in india using modern technologies, robotic surgery, and
            multidisciplinary treatment approaches. Patients looking for the
            <strong>advanced prostate oncology care</strong> often travel to
            Mumbai, Ahmedabad, Chennai, and Delhi for robotic surgery, radiation
            therapy, hormone therapy, and immunotherapy.
          </p>
        </div>

        {/* All Cards in One Grid */}
        <div className="cancer-services-grid">
          {cancersServices.map((service) => (
            <EyesServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="hn-section">
        <div className="hn-container">
          <div className="hn-title-wrap">
            <span className="hn-label">Our Hospital Network</span>
            <h2 className="hn-heading">
              Best Cancer Hospitals in India for Oncology Treatment
            </h2>
            <p className="hn-subtitle">
              We partner with India’s top NABH & JCI-accredited hospitals
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
                          Oncology Specialties:
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
            <h2 className="doctor-h2">
              Best Oncologists in India for Cancer Treatment
            </h2>
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

      {/* <section className="doctor-section-light">
        <div className="doctor-container">
          <div className="doctor-title-wrap">
            <span className="doctor-label">Our Specialists</span>
            <h2 className="doctor-h2">Best Oncologists in India</h2>
            <p className="doctor-subtitle">
              India is home to highly experienced oncology specialists known for
              treating complex cancer cases using multidisciplinary approaches,
              advanced diagnostics, robotic surgery, immunotherapy, and
              precision radiation therapy. Leading cancer specialists across
              Mumbai, Delhi, Chennai, Hyderabad, Bangalore, and Ahmedabad
              provide personalized oncology care for prostate cancer, lung
              cancer, breast cancer, blood cancer, and other advanced cancer
              conditions.
            </p>
          </div>
          <div className="doctor-cards-grid">
            {DOCTORS.map((d, i) => (
              <div key={i} className="doctor-card">
                <img
                  src={d.photoUrl}
                  alt={`${d.name} - ${d.spec} in India specializing in cancer surgery and ophthalmology`}
                  className="doctor-card-photo"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <div className="doctor-card-body">
                  <span className="doctor-spec">{d.spec}</span>
                  <h3 className="doctor-name">{d.name}</h3>
                  <p className="doctor-desc">{d.desc}</p>
                  <button className="doctor-btn">See profile</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="cancer-reviews-section">
        <div className="cancer-reviews-content">
          <h2 className="cancer-reviews-heading">Our Clients Review</h2>

          {/* Slider wrapper */}
          <div className="cancer-reviews-slider-wrapper">
            <div
              className="cancer-reviews-slider-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((pair, slideIndex) => (
                <div key={slideIndex} className="cancer-reviews-slide">
                  {pair.map((r, cardIndex) => (
                    <div key={cardIndex} className="cancer-reviews-card">
                      <Stars />
                      <p className="cancer-reviews-card-text">{r.text}</p>
                      {/* <p className="cancer-reviews-card-name">{r.name}</p> */}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="cancer-reviews-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`cancer-reviews-dot ${currentSlide === index ? "active" : ""}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="cancer-reviews-image-wrapper">
          <img
            src={ThumbnailImage}
            alt="Happy international cancer patient in India"
            className="cancer-reviews-image"
          />
        </div>
      </section>

      <section className="cancer-faq-section" aria-labelledby="faq-heading">
        <div className="cancer-faq-container">
          {/* Section Header */}
          <div className="cancer-faq-header">
            <span className="cancer-faq-badge">Oncology Treatment FAQs</span>
            <h2 id="faq-heading" className="cancer-faq-title">
              Frequently Asked Questions About Cancer Treatment in India
            </h2>
            <p className="cancer-faq-subtitle">
              Get answers to common questions about cancer care, best cancer
              hospitals, and treatment options in India
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="cancer-faq-list">
            {faqData.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={faq.id}
                  className={`cancer-faq-item ${isActive ? "active" : ""}`}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="cancer-faq-question"
                    aria-expanded={isActive}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <h3
                      id={`faq-question-${faq.id}`}
                      className="cancer-faq-question-text"
                    >
                      {faq.question}
                    </h3>
                    <FaPlus
                      className={`cancer-faq-icon ${isActive ? "rotate" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`cancer-faq-answer ${isActive ? "open" : ""}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                  >
                    <div className="cancer-faq-answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cancer-cta-section">
        {/* Background Image */}
        <img
          src={CtaImage}
          alt="Book oncology consultation in India"
          className="cancer-cta-bg-image"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="cancer-cta-overlay" />

        {/* Content Container */}
        <div className="cancer-cta-container">
          <div className="cancer-cta-content">
            <span className="cancer-cta-badge">
              Advanced Cancer Care for International Patients
            </span>

            <h2 className="cancer-cta-title">
              Book Your Oncology Consultation
            </h2>

            <p className="cancer-cta-subtitle">
              Start your oncology treatment journey in India with experienced
              cancer specialists and internationally trusted hospitals.
            </p>

            <div className="cancer-cta-benefits-list">
              <div className="cancer-cta-benefit-point">
                <FaCheckCircle className="cancer-cta-check-icon" />
                <span>Personalized treatment plans</span>
              </div>
              <div className="cancer-cta-benefit-point">
                <FaCheckCircle className="cancer-cta-check-icon" />
                <span>Transparent pricing</span>
              </div>
              <div className="cancer-cta-benefit-point">
                <FaCheckCircle className="cancer-cta-check-icon" />
                <span>Expert cancer specialists</span>
              </div>
              <div className="cancer-cta-benefit-point">
                <FaCheckCircle className="cancer-cta-check-icon" />
                <span>International patient support</span>
              </div>
              <div className="cancer-cta-benefit-point">
                <FaCheckCircle className="cancer-cta-check-icon" />
                <span>Modern and safe cancer care</span>
              </div>
            </div>

            <div className="cancer-hero-ctas">
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
