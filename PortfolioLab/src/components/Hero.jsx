import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <h1>Thomás Ramos Oliveira</h1>
        <h2>Full-Stack Developer | AI & Cloud Enthusiast</h2>
        <p>
          I am a passionate and versatile Full Stack Developer with over 7 years of experience building robust and scalable web applications.
          My expertise spans across front-end frameworks like React and Vue, back-end technologies such as Node.js and Python,
          and database management including MongoDB and PostgreSQL.
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>th.ramos.oliveira@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+55 (31) 99318-6223</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Belo Horizonte, MG</span>
          </div>
          <div className="social-links">
            <a href="https://linkedin.com/in/th-oliveira" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/th-oliveira" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://twitter.com/th_oliveiradev" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <div className="profile-circle"></div>
      </div>
    </section>
  );
}

export default Hero;