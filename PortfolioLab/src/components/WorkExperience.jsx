import React from 'react';

const ProjectCard = ({ title, info, description, tags, buttonText }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p className="project-info">{info}</p>
    <p>{description}</p>
    <div className="project-tags">
      {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
    </div>
    <button className="view-project-btn">{buttonText}</button>
  </div>
);

function WorkExperience() {
  const experiences = [
    {
      title: 'AI-Powered Content Platform',
      info: 'Tech Innovations Inc – Mar 2020 - Present',
      description: 'Developed a full-stack platform leveraging Generative AI for content creation and optimization. Implemented real-time collaboration features that integrated with various third-party APIs.',
      tags: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'AWS'],
      buttonText: 'View Project'
    },
    {
      title: 'Cloud Infrastructure Optimization',
      info: 'Cloud Solutions LLC – Jan 2020 - Feb 2023',
      description: 'Designed and implemented scalable cloud infrastructure solutions. Optimized database queries, reducing response times by 35%.',
      tags: ['AWS', 'Terraform', 'Kubernetes', 'Python'],
      buttonText: 'View Case Study'
    },
  ];

  return (
    <section id="work" className="work-experience">
      <h2>My Work & Experience</h2>
      {experiences.map(exp => <ProjectCard key={exp.title} {...exp} />)}
    </section>
  );
}

export default WorkExperience;