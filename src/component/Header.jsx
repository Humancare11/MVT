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

 const handleLangChange = (lang) => {
  let tries = 0;

  const interval = setInterval(() => {
    tries++;

    const googleSelect = document.querySelector(".goog-te-combo");

    if (googleSelect) {
      googleSelect.value = lang;

      googleSelect.dispatchEvent(new Event("change", { bubbles: true }));

      clearInterval(interval);
    }

    if (tries > 50) clearInterval(interval);
  }, 150);
};




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

            {/* Logo */}
            <Link to="/" className="logo">
              <img src={logo} alt="Logo" />
            </Link>

            {/* Desktop Menu */}
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

            {/* Language Dropdown */}
                    <select
  onChange={(e) => handleLangChange(e.target.value)}
  className="lang-select"
  style={{
    padding: "6px",
    marginLeft: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  }}
>
  <option value="en">English</option>
  <option value="ar">Arabic</option>
  <option value="bn">Bengali</option>
</select>

            {/* Social Icons */}
            <div className="social-icons">
              <div className="social-links">
                <a href="https://www.facebook.com/humancareworldwide/" target="_blank"><Facebook size={15} /></a>
                <a href="https://x.com/wwhumancare" target="_blank"><Twitter size={15} /></a>
                <a href="https://www.linkedin.com/company/human-care-world-wide/posts/?feedView=all" target="_blank"><Linkedin size={15} /></a>
                <a href="https://wa.me/+918655835979" target="_blank"><FaWhatsapp size={15} /></a>
                <a href="https://www.instagram.com/humancareworldwideofficial/" target="_blank"><Instagram size={15} /></a>
                <a href="https://www.youtube.com/@HumancareWorldWide" target="_blank"><Youtube size={15} /></a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div id="mobile-nav" className={`nav-mobile ${isOpen ? "open" : "closed"}`}>
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

            {/* Mobile Language Dropdown */}
           <select
  onChange={(e) => handleLangChange(e.target.value)}
  className="lang-select"
  style={{
    padding: "6px",
    marginLeft: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  }}
>
  <option value="en">English</option>
  <option value="ar">Arabic</option>
  <option value="bn">Bengali</option>
</select>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
