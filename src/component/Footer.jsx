import React from "react";
import { NavLink, Link } from "react-router-dom";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import "./Footer.css";
import logo from "../assets/humancare.webp";

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              {/* <div className="footer-icon">
                <Phone size={20} />
              </div> */}
              <div>
                <Link to="/" className="logo">
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
            </div>

            <p className="footer-desc">
              Your trusted partner for world-class medical treatment in India at
              affordable costs. We provide complete support for international
              patients.
            </p>

            {/* <div className="footer-social">
              <a href="#"><Facebook size={16} /></a>
              <a href="#"><Twitter size={16} /></a>
              <a href="#"><Instagram size={16} /></a>
              <a href="#"><Linkedin size={16} /></a>
            </div> */}
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul className="quick-links">
              <li>
                <a className="footer-links" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="footer-links" href="/about">
                  About Us
                </a>
              </li>
              <li>
                <a className="footer-links" href="/services">
                  Services
                </a>
              </li>
              <li>
                <a className="footer-links" href="/process">
                  Patient Process
                </a>
              </li>
              <li>
                <a className="footer-links" href="/hospitals">
                  Hospitals{" "}
                </a>
              </li>
              <li>
                <a className="footer-links" href="/doctors">
                  Doctors
                </a>
              </li>
              <li>
                <a className="footer-links" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Our Treatments</h4>
            <ul className="quick-links">
              <li>
                <a className="footer-links" href="/treatments">
                  Heart Surgery
                </a>
              </li>
              <li>
                <a className="footer-links" href="/treatments">
                  Bone & Joint
                </a>
              </li>
              <li>
                <a className="footer-links" href="/treatments">
                  Neurology & Neurosurgery
                </a>
              </li>
              <li>
                <a className="footer-links" href="/treatments">
                  Cancer Treatment
                </a>
              </li>
              <li>
                <a className="footer-links" href="/treatments">
                  IVF & Fertility
                </a>
              </li>
              <li>
                <a className="footer-links" href="/treatments">
                  Dental Care
                </a>
              </li>
              <li>
                <a className="footer-links" href="/treatments">
                  Cosmetic Surgery
                </a>
              </li>
              <li>
                <a className="footer-links" href="/treatments">
                  Eye Care
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Contact Us</h4>

            <div className="footer-contact">
              <div>
                <Phone size={18} />
                <div>
                  <strong>24/7 Emergency</strong>
                  <a href="tel:+919833166697">+91 98331 66697</a>
                </div>
              </div>

              <div>
                <Mail size={18} />
                <div>
                  <strong>Email Us</strong>
                  <a href="mailto:medicaltourism@humancareworldwide.com">
                    medicaltourism@humancareworldwide.com
                  </a>
                </div>
              </div>

              <div>
                <MapPin size={18} />
                <div>
                  <strong>Office Address</strong>
                  <p>
                    544, Dheeraj Haritage, S. V. Road,
                    <br />
                    Junction, Milan Subway,
                    <br />
                    Santacruz (West), Mumbai,
                    <br />
                    Maharashtra 400054
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 HumanCare MVT. All rights reserved.</p>
          <div>
            <span>|</span>
            <a href="/privacy-policy">Privacy Policy</a>
            <span>|</span>
            <a href="/terms-and-conditions">Terms of Service</a>
            <span>|</span>
            {/* <a href="#">Refund Policy</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
