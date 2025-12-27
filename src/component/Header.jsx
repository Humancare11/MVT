import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
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
          <a href="tel:+919820073734" className="emergency-btn">
            <Phone size={16} />
            Emergency
          </a>

          {/* MOBILE MENU BUTTON */}
          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE NAV */}
        {isOpen && (
          <div className="nav-mobile">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}

            <a href="tel:+919820073734" className="emergency-btn mobile">
              <Phone size={16} />
              Emergency Call
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
