import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <h1>Vinicius Gomes Rodrigues</h1>
        <h2>Full-Stack Developer | AI & Cloud Enthusiast</h2>
        <p>
          I am a passionate and versatile Full Stack Developer with over 7 years of experience building robust and scalable web applications.
          My expertise spans across front-end frameworks like React and Vue, back-end technologies such as Node.js and Python,
          and database management including MongoDB and PostgreSQL.
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>viniciusgomes2202@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+55 (31) 9 8598-4390</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Belo Horizonte, MG</span>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/viniciusgomesrod/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/viniciusgomesrod" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
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
