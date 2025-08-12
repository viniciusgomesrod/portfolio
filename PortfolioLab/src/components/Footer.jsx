import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#resources">Resources</a>
          <a href="#legal">Legal</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
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
        <div className="copyright">
          © {new Date().getFullYear()} Thomás Oliveira. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;