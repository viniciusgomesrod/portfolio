import React from 'react';

const educations = [
    {
        degree: 'Master of Science in Computer Science',
        institution: 'Stanford University',
        period: 'Sep 2018 - May 2020'
    },
    // Adicione outras formações aqui
];

const certifications = [
    {
        name: 'AWS Certified Solutions Architect – Associate',
        issuer: 'Amazon Web Services (AWS)',
        date: 'Issued: Dec 2022'
    },
    // Adicione outras certificações aqui
]

const Education = () => {
    return (
        <section id="education" className="education-certifications">
            <h2>My Education & Certifications</h2>
            <div className="education-grid">
                {educations.map((edu, index) => (
                    <div key={index} className="education-card">
                        <h3>{edu.degree}</h3>
                        <p>{edu.institution} • {edu.period}</p>
                    </div>
                ))}
                 {certifications.map((cert, index) => (
                    <div key={index} className="education-card">
                        <h3>{cert.name}</h3>
                        <p>{cert.issuer} • {cert.date}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;