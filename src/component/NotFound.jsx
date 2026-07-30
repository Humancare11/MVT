import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="notfound-wrapper">
      <div className="notfound-container">
        <p className="notfound-code">404</p>
        <h1 className="notfound-title">Page Not Found</h1>
        <p className="notfound-desc">
          Sorry, the page you're looking for doesn't exist or may have been
          moved. Let's get you back on track.
        </p>

        <div className="notfound-actions">
          <Link to="/" className="notfound-btn primary">
            <FaHome /> Back to Home
          </Link>
          <Link to="/contact" className="notfound-btn secondary">
            <FaPhoneAlt /> Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
