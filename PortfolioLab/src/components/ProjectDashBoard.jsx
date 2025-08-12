import React from 'react';
import '../styles/ProjectDashboard.module.css';

const ProjectDashboard = () => {
  const projects = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', 
      title: "AI-Powered Content Platform",
      description: "Developed a full-stack platform leveraging Generative AI for content creation and optimization. Features include natural language generation, semantic search, and integrated version control.",
      technologies: ["React", "Node.js", "MongoDB", "OpenAI API"],
      date: "August 2023",
      liveDemoUrl: "#",
      sourceCodeUrl: "#"
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: "E-commerce Redesign & Re-platforming",
      description: "Spearheaded the complete redesign of a major e-commerce website, boosting conversion rates and improving user experience with a modern, intuitive interface.",
      technologies: ["Vue.js", "Spring Boot", "MySQL", "Stripe API"],
      date: "June 2023",
      liveDemoUrl: "#",
      sourceCodeUrl: "#"
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: "Mobile Expense Tracker",
      description: "Built a cross-platform mobile application for personal finance tracking with intuitive data visualization and budget management features.",
      technologies: ["React Native", "Firebase", "Redux"],
      date: "April 2023",
      liveDemoUrl: "#",
      sourceCodeUrl: "#"
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: "Real-time Chat Application",
      description: "Designed and implemented a real-time chat application with group messaging, file sharing capabilities, and end-to-end encryption for high scalability.",
      technologies: ["Socket.IO", "Node.js", "React", "Redis"],
      date: "February 2023",
      liveDemoUrl: "#",
      sourceCodeUrl: "#"
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: "Recipe & Meal Planner",
      description: "Developed a web application for discovering recipes, creating personalized meal plans, and generating intelligent shopping lists based on dietary preferences.",
      technologies: ["Next.js", "PostgreSQL", "Tailwind CSS"],
      date: "December 2022",
      liveDemoUrl: "#",
      sourceCodeUrl: "#"
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      title: "DevOps Automation Dashboard",
      description: "Created a dashboard to monitor CI/CD pipelines, manage deployments, and visualize performance metrics, streamlining development workflows.",
      technologies: ["Python", "Django", "Grafana", "Docker"],
      date: "October 2022",
      liveDemoUrl: "#",
      sourceCodeUrl: "#"
    }
  ];

  return (
    <div className="dashboard-container">
      <section className="creative-work-hero">
        <div className="creative-work-content">
          <h1>My Creative Work</h1>
          <p className="creative-work-subtitle">A showcase of innovative solutions and passionate development across various domains.</p>
        </div>
        <div className="creative-work-illustration-placeholder"></div>
      </section>

      <section className="featured-projects-section">
        <h2 className="section-heading">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-thumbnail-wrapper">
                <img src={project.image} alt={project.title} className="project-thumbnail" width={1000} />
              </div>
              <div className="project-info-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tag">{tech}</span>
                  ))}
                </div>
                <div className="project-date">{project.date}</div>
                <div className="project-buttons">
                  <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="live-demo-btn">Live Demo</a>
                  <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer" className="source-code-btn">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDashboard;