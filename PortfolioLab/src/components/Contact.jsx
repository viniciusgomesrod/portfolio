import React from 'react';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
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
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para enviar o formulário
    // (ex: usando EmailJS, Formspree, ou um backend próprio)
    alert('Formulário enviado! (simulação)');
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <p className="contact-super-title">CONTATO</p>
        <h1>Contate-me para oportunidades</h1>
        <p className="contact-subtitle">
          Meu objetivo é transformar ideias em ótimos resultados. Se você procura uma parceria, 
          quer discutir um conceito ou simplesmente compartilhar ideias, estou aqui para conversar!
        </p>
      </header>

      <div className="contact-grid">
        {/* Painel da Esquerda: Informações */}
        <div className="info-panel">
          <ContactInfoItem 
            icon={<FaEnvelope />} 
            label="EMAIL" 
            value="viniciusgomes2202@gmail.com" 
          />
          <ContactInfoItem 
            icon={<FaWhatsapp />} 
            label="WHATSAPP" 
            value="+55 31 9 8598-4390" 
          />
          <ContactInfoItem 
            icon={<FaMapMarkerAlt />} 
            label="LOCALIZAÇÃO" 
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
              <label htmlFor="name">NOME</label>
              <input type="text" id="name" name="name" placeholder="Seu nome completo" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input type="email" id="email" name="email" placeholder="seu.email@exemplo.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">ASSUNTO</label>
              <input type="text" id="subject" name="subject" placeholder="Sobre o que é?" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">MENSAGEM</label>
              <textarea id="message" name="message" rows="5" placeholder="Sua mensagem..." required></textarea>
            </div>
            <button type="submit" className="submit-btn">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
