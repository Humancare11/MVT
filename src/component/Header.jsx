import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import "./Header.css";
import logo from "../assets/humancare.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on Escape and prevent body scroll when menu is open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Treatments", path: "/treatments" },
    { name: "Doctors", path: "/doctors" },
    { name: "Hospitals", path: "/hospitals" },
    { name: "Process", path: "/process" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="header-wrapper">
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-inner">
            {/* LOGO */}
            <Link to="/" className="logo">
              <img src={logo} alt="Logo" />
            </Link>

            {/* DESKTOP NAV */}
            <div className="nav-desktop">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* EMERGENCY BUTTON */}
            {/* <a href="tel:+918655835979" className="emergency-btn">
              <Phone size={16} />
              Emergency
            </a> */}

            <div className="social-icons">
              <div className="social-links">
                <a
                  href="https://www.facebook.com/humancareworldwide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook size={15} />
                </a>
                <a
                  href="https://x.com/wwhumancare"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter size={15} />
                </a>
                <a
                  href="https://www.linkedin.com/company/human-care-world-wide/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href="https://wa.me/+918655835979"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="whatsapp"
                >
                  <FaWhatsapp size={15} />
                </a>
                <a
                  href="https://www.instagram.com/humancareworldwideofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={15} />
                </a>
                <a
                  href="https://www.youtube.com/@HumancareWorldWide"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube size={15} />
                </a>
              </div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* MOBILE NAV (always rendered for smooth transitions) */}
          <div
            id="mobile-nav"
            className={`nav-mobile ${isOpen ? "open" : "closed"}`}
            aria-hidden={!isOpen}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="mobile-nav-link"
              >
                {item.name}
              </NavLink>
            ))}

            <a href="tel:+918655835979" className="emergency-btn mobile">
              <Phone size={16} />
              Emergency Call
            </a>
            {/* Mobile social links shown on very small screens (<=500px) */}
            <div className="mobile-social-links">
              <div className="social-links">
                <a
                  href="https://www.facebook.com/humancareworldwide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook size={15} />
                </a>
                <a
                  href="https://x.com/wwhumancare"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter size={15} />
                </a>
                <a
                  href="https://www.linkedin.com/company/human-care-world-wide/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href="https://wa.me/+918655835979"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="whatsapp"
                >
                  <FaWhatsapp size={15} />
                </a>
                <a
                  href="https://www.instagram.com/humancareworldwideofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={15} />
                </a>
                <a
                  href="https://www.youtube.com/@HumancareWorldWide"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
