import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaWhatsapp
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // substitua por integração real (API, email service, etc.)
    alert(
      `Mensagem enviada!\nNome: ${formData.name}\nEmail: ${formData.email}\nAssunto: ${formData.subject}\nMensagem: ${formData.message}`
    );
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact-section">
      <div className="contact-header">
        <small className="contact-subtitle">CONTACT</small>
        <h2 className="contact-title">Contact us for opportunities</h2>
        <p className="contact-desc">
          My goal is to shape ideas and work as a team to achieve great results.
          Whether you're looking for a partnership, want to discuss a concept,
          or just share ideas, I'm here to talk!
        </p>
      </div>

      <div className="contact-container">
        {/* LEFT - informações estáticas */}
        <aside className="contact-left">
          <div className="info-card">
            <div className="info-row">
              <FaEnvelope className="info-icon" />
              <div className="info-text">
                <div className="info-label">EMAIL</div>
                <div className="info-value">viniciusgomes2202@gmail.com</div>
              </div>
            </div>

            <div className="info-row">
              <FaWhatsapp className="info-icon" />
              <div className="info-text">
                <div className="info-label">WHATSAPP</div>
                <div className="info-value">+55 31 9 8598-4390</div>
              </div>
            </div>

            <div className="info-row">
              <FaMapMarkerAlt className="info-icon" />
              <div className="info-text">
                <div className="info-label">LOCATION</div>
                <div className="info-value">Contagem / Belo Horizonte, MG - Brazil</div>
              </div>
            </div>
          </div>

          <div className="social-row">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </aside>

        {/* RIGHT - formulário */}
        <form className="contact-right" onSubmit={handleSubmit}>
          <div className="field-row">
            <label htmlFor="name">NAME</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </div>

          <div className="field-row">
            <label htmlFor="email">EMAIL</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="field-row">
            <label htmlFor="subject">SUBJECT</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is about?"
              required
            />
          </div>

          <div className="field-row">
            <label htmlFor="message">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              required
            />
          </div>

          <div className="btn-row">
            <button type="submit" className="send-btn">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
