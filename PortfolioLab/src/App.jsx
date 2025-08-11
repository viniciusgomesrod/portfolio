import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './App.css';
import ProjectDashboard from './ProjectDashBoard.jsx';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch(activeSection) {
      case 'projects':
        return <ProjectDashboard />;
      default:
        return (
          <>
            {/* Hero Section */}
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
                    <span>alice.johnson@example.com</span>
                  </div>
                  <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <span>(450) 123-4567</span>
                  </div>
                  <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <span>San Francisco, CA</span>
                  </div>
                  
                  <div className="social-links">
                    <a href="https://linkedin.com/in/alicej" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="social-icon" />
                    </a>
                    <a href="https://github.com/alicej" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="social-icon" />
                    </a>
                    <a href="https://twitter.com/alicej" target="_blank" rel="noopener noreferrer">
                      <FaTwitter className="social-icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="hero-image">
                <div className="profile-circle"></div>
              </div>
            </section>

            {/* Work Experience */}
            <section id="work" className="work-experience">
              <h2>My Work & Experience</h2>
              
              <div className="project-card">
                <h3>AI-Powered Content Platform</h3>
                <p className="project-info">Tech Innovations Inc – Mar 2020 - Present</p>
                <p>
                  Developed a full-stack platform leveraging Generative AI for content creation and optimization. 
                  Implemented real-time collaboration features that integrated with various third-party APIs.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">MongoDB</span>
                  <span className="tag">OpenAI API</span>
                  <span className="tag">AWS</span>
                </div>
                <button className="view-project-btn">View Project</button>
              </div>

              <div className="project-card">
                <h3>Cloud Infrastructure Optimization</h3>
                <p className="project-info">Cloud Solutions LLC – Jan 2020 - Feb 2023</p>
                <p>
                  Designed and implemented scalable cloud infrastructure solutions. 
                  Optimized database queries, reducing response times by 35%.
                </p>
                <div className="project-tags">
                  <span className="tag">AWS</span>
                  <span className="tag">Terraform</span>
                  <span className="tag">Kubernetes</span>
                  <span className="tag">Python</span>
                </div>
                <button className="view-project-btn">View Case Study</button>
              </div>

              <div className="project-card">
                <h3>E-commerce Platform Redesign</h3>
                <p className="project-info">Digital Retail Inc – Jun 2018 - Dec 2019</p>
                <p>
                  Led the complete redesign of a high-traffic e-commerce platform, 
                  resulting in a 22% increase in conversion rates.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">GraphQL</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">TypeScript</span>
                </div>
                <button className="view-project-btn">View Project</button>
              </div>
            </section>

            {/* Education */}
            <section id="education" className="education-certifications">
              <h2>My Education & Certifications</h2>
              
              <div className="education-card">
                <h3>Master of Science in Computer Science</h3>
                <p>Stanford University - Sep 2018 - May 2020</p>
                <p className="education-detail">Specialization in Artificial Intelligence and Distributed Systems</p>
              </div>

              <div className="education-card">
                <h3>Bachelor of Science in Software Engineering</h3>
                <p>University of California - Sep 2014 - May 2018</p>
                <p className="education-detail">Graduated with Honors</p>
              </div>

              <div className="education-card">
                <h3>AWS Certified Solutions Architect – Associate</h3>
                <p>Amazon Web Services - Issued: Dec 2022</p>
              </div>

              <div className="education-card">
                <h3>Certified Kubernetes Administrator</h3>
                <p>Cloud Native Computing Foundation - Issued: Mar 2021</p>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <div className="logo">Alice Johnson</div>
        <nav>
          <ul>
            <li>
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('about');
                }}
                className={activeSection === 'about' ? 'active' : ''}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#work" 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('work');
                }}
                className={activeSection === 'work' ? 'active' : ''}
              >
                Work
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('projects');
                }}
                className={activeSection === 'projects' ? 'active' : ''}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('education');
                }}
                className={activeSection === 'education' ? 'active' : ''}
              >
                Education
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('contact');
                }}
                className={activeSection === 'contact' ? 'active' : ''}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {renderSection()}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#resources">Resources</a>
            <a href="#legal">Legal</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <a href="https://linkedin.com/in/alicej" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/alicej" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://twitter.com/alicej" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} Alice Johnson. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;