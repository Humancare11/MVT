import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import "./Contactsection.css";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        email,
        service,
        message,
      }),
    });

    const data = await res.json();
    alert(data.message);

    setName("");
    setPhone("");
    setEmail("");
    setService("");
    setMessage("");
  };

  return (
    <section className="contact-wrapper">
      <div className="contact-grid">
        <div className="contact-left">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-desc">
            For non-emergency inquiries, quotes, or questions, please use the
            form. For immediate medical emergencies, call our 24/7 dispatch
            line.
          </p>

          <div className="contact-card emergency">
            <Phone className="contact-icon red" />
            <div>
              <h4>Emergency 24/7</h4>
              <p>+91 86558 35979</p>
            </div>
          </div>

          <div className="contact-card whatsapp">
            <MessageCircle className="contact-icon green" />
            <div>
              <h4>Whatsapp Us</h4>
              <p>+91 86558 35979</p>
            </div>
          </div>

          <div className="contact-card email">
            <Mail className="contact-icon blue" />
            <div>
              <h4>General Inquiries</h4>
              <p>medicaltourism@humancareworldwide.com</p>
            </div>
          </div>

          <div className="contact-card address">
            <MapPin className="contact-icon gray" />
            <div>
              <h4>Headquarters</h4>
              <p>
                544, Dheeraj Haritage, S. V. Road, Junction, Milan Subway,
                Santacruz (West), Mumbai, Maharashtra 400054
              </p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="">Select Service</option>
              <option>Homecare</option>
              <option>Ambulance</option>
              <option>Doctor Consultation</option>
              <option>Medical Travel</option>
            </select>

            <textarea
              rows="5"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit" className="submit-btn">
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
