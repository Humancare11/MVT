import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import "./Contactsection.css";

import Breadcrumb from "../component/Breadcrumb";

const WhatsAppIcon = ({ size = 40, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const ENDPOINT = "https://humancaremedicaltourism.com/Contact.php";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nationality, setNationality] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // { type: "success" | "error", text: string }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setStatus(null);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("nationality", nationality);
      formData.append("message", message);

      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: formData,
      });

      // Read as text first: if PHP emits a warning or HTML error page,
      // res.json() throws and you lose the real reason.
      const raw = await res.text();

      let data;
      try {
        data = JSON.parse(raw);
      } catch {
        console.error("Server did not return JSON:", raw);
        setStatus({
          type: "error",
          text: "Server error. Please call us on +91 98331 66697.",
        });
        return;
      }

      if (!res.ok || data.status !== "success") {
        setStatus({
          type: "error",
          text:
            data.message || "Could not send your request. Please try again.",
        });
        return;
      }

      setStatus({ type: "success", text: data.message || "Request sent." });
      setName("");
      setPhone("");
      setEmail("");
      setNationality("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        text: "Network error. Please try again later.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Breadcrumb currentPage="Contact Us" />
      <section className="contact-wrapper">
        <div className="contact-grid">
          <div className="contact-left">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-desc">
              For non-emergency inquiries, quotes, or questions, please use the
              form. For immediate medical emergencies, call our 24/7 dispatch
              line.
            </p>

            <a
              className="contact-card emergency"
              href="tel:+919833166697"
              aria-label="Call Emergency +919833166697"
            >
              <Phone className="contact-icon red" />
              <div>
                <h4>Emergency 24/7</h4>
                <p>+91 98331 66697</p>
              </div>
            </a>

            <a
              className="contact-card whatsapp"
              href="https://wa.me/919833166697"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp +91 98331 66697"
            >
              <WhatsAppIcon className="contact-icon green" />
              <div>
                <h4>Whatsapp Us</h4>
                <p>+91 98331 66697</p>
              </div>
            </a>

            <a
              className="contact-card email"
              href="mailto:medicaltourism@humancareworldwide.com"
              aria-label="Email General Inquiries"
            >
              <Mail className="contact-icon blue" />
              <div>
                <h4>General Inquiries</h4>
                <p>medicaltourism@humancareworldwide.com</p>
              </div>
            </a>

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
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate={false}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                aria-label="Your Name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                aria-label="Your Email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                aria-label="Your Phone Number"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <input
                type="text"
                name="nationality"
                placeholder="Nationality"
                aria-label="Nationality"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Concern"
                aria-label="Your Concern"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button type="submit" className="submit-btn" disabled={sending}>
                {sending ? "Sending..." : "Send Request"}
              </button>

              {status && (
                <p
                  className={`form-status ${status.type}`}
                  role="status"
                  aria-live="polite"
                >
                  {status.text}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
