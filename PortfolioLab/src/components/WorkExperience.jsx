import React from 'react';

const projects = [
  {
    title: 'AI-Powered Content Platform',
    company: 'Tech Innovations Inc.',
    period: 'Mar 2023 - Present',
    description: 'Developed a full-stack platform leveraging Generative AI for content creation and optimization. Implemented real-time collaboration features and integrated with various third-party APIs, significantly boosting content workflow efficiency.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API', 'Docker']
  },
  // Adicione outros projetos aqui
];

const WorkExperience = () => {
  return (
    <section id="work" className="work-experience">
      <h2>My Work & Experience</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-info">{project.company} • {project.period}</p>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
            <button className="view-project-btn">View Project</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;