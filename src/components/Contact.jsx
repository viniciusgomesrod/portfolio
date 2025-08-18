import React from 'react';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'; 

const ContactInfoItem = ({ icon, label, value }) => (
  <div className="contact-item">
    <div className="contact-item-icon">{icon}</div>
    <div className="contact-item-text">
      <span className="contact-item-label">{label}</span>
      <span className="contact-item-value">{value}</span>
    </div>
  </div>
);

const Contact = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'service_j5udu7x',       // Substitua pelo seu SERVICE_ID real
      'template_jj8bjpd',      // Substitua pelo seu TEMPLATE_ID real
      e.target,
      'dU0ti3m3BhhrwyZ8_'  // Substitua pela sua PUBLIC_KEY real
    )
    .then(() => {
      alert(t('contactSection.formSentAlert') || 'Mensagem enviada com sucesso!');
      e.target.reset(); // Limpa o formulário após o envio
    })
    .catch((error) => {
      alert(t('contactSection.formErrorAlert') || 'Erro ao enviar: ' + error.text);
    });
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <p className="contact-super-title">{t('contactSection.sectionTitle')}</p>
        <h1>{t('contactSection.headerTitle')}</h1>
        <p className="contact-subtitle">{t('contactSection.headerSubtitle')}</p>
      </header>

      <div className="contact-grid">
        {/* Painel da Esquerda: Informações */}
        <div className="info-panel">
          <ContactInfoItem 
            icon={<FaEnvelope />} 
            label={t('contactSection.emailLabel')} 
            value="viniciusgomes2202@gmail.com" 
          />
          <ContactInfoItem 
            icon={<FaWhatsapp />} 
            label={t('contactSection.whatsappLabel')} 
            value="+55 31 9 8598-4390"
          />
          <ContactInfoItem 
            icon={<FaMapMarkerAlt />} 
            label={t('contactSection.locationLabel')} 
            value="Belo Horizonte, MG - Brasil" 
          />
          <div className="social-links">
            <a href="https://www.linkedin.com/in/viniciusgomesrod/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/viniciusgomesrod" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Painel da Direita: Formulário */}
        <div className="form-panel">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('contactSection.nameLabel')}</label>
              <input type="text" id="name" name="name" placeholder={t('contactSection.placeholderName')} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('contactSection.emailLabel')}</label>
              <input type="email" id="email" name="email" placeholder={t('contactSection.placeholderEmail')} required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">{t('contactSection.subjectLabel')}</label>
              <input type="text" id="subject" name="subject" placeholder={t('contactSection.placeholderSubject')} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contactSection.messageLabel')}</label>
              <textarea id="message" name="message" rows="5" placeholder={t('contactSection.placeholderMessage')} required></textarea>
            </div>
            <button type="submit" className="submit-btn">{t('contactSection.submitBtn')}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;