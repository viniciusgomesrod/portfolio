import React from 'react';

const EducationCard = ({ title, institution, details, children }) => (
  <div className="education-card">
    <h3>{title}</h3>
    <p>{institution}</p>
    {details && <p className="education-detail">{details}</p>}
    {children}
  </div>
);

function Education({ onNavigateToDegreeDetails }) {
  return (
    <section id="education" className="education-certifications">
      <h2>My Education & Certifications</h2>
      <EducationCard
        title="Bachelor of Science in Software Engineering"
        institution="Pontifícia Universidade Católica de Minas Gerais - Fev 2021 - Dez 2024"
        details="Graduated with Honors"
      >
        <button
          className="view-project-btn"
          style={{ marginTop: '1.5rem' }}
          onClick={onNavigateToDegreeDetails}
        >
          Ver Detalhes do Curso
        </button>
      </EducationCard>
      <EducationCard
        title="AWS Certified Solutions Architect – Associate"
        institution="Amazon Web Services - Issued: Dec 2022"
      />
    </section>
  );
}

export default Education;