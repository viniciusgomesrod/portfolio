import React from 'react';
import './ProjectDashBoard.module.css';

// A linha de importação para creativeWorkIllustration FOI REMOVIDA AQUI.

const ProjectDashboard = () => {
  const projects = [
    {
      id: 1,
      // O caminho da imagem permanece no objeto, mas a tag <img> será removida abaixo.
      // O CSS cuidará da tela preta para a miniatura do projeto.
      image: '/src/assets/project-thumbnails/ai-platform.jpg', 
      title: "AI-Powered Content Platform",
      description: "Developed a full-stack platform leveraging Generative AI for content creation and optimization. Features include natural language generation, semantic search, and integrated version control.",
      technologies: ["React", "Node.js", "MongoDB", "OpenAI API"],
      date: "August 2023",
      liveDemoUrl: "#",
      sourceCodeUrl: "#"
    },
    {
      id: 2,
      image: '/src/assets/project-thumbnails/ecommerce.jpg',
      title: "E-commerce Redesign & Re-platforming",
      description: "Spearheaded the complete redesign and re-platforming of a major e-commerce website, boosting conversion rates by 25% and improving user experience with a modern, intuitive interface and optimized checkout flow.",
      technologies: ["Vue.js", "Spring Boot", "MySQL", "Stripe API"],
      date: "June 2023",
      liveDemoUrl: "#",
      sourceCodeUrl: "#"
    },
    {
      id: 3,
      image: '/src/assets/project-thumbnails/expense-tracker.jpg',
      title: "Mobile Expense Tracker",
      description: "Built a cross-platform mobile application for personal finance tracking with intuitive data visualization and budget management. Features include category-based spending analysis, recurring transaction handling, and cloud synchronization.",
      technologies: ["React Native", "Firebase", "Redux"],
      date: "April 2023",
      liveDemoUrl: "#",
      sourceCodeUrl: "#"
    },
    {
      id: 4,
      image: '/src/assets/project-thumbnails/chat-app.jpg',
      title: "Real-time Chat Application",
      description: "Designed and implemented a real-time chat application with group messaging, file sharing capabilities, and end-to-end encryption. Built for high scalability and low latency communication.",
      technologies: ["Socket.IO", "Node.js", "React", "Redis"],
      date: "February 2023",
      liveDemoUrl: "#",
      sourceCodeUrl: "#"
    },
    {
      id: 5,
      image: '/src/assets/project-thumbnails/meal-planner.jpg',
      title: "Recipe & Meal Planner",
      description: "Developed a web application for discovering recipes, creating personalized meal plans, and generating intelligent shopping lists. Integrates dietary preferences and nutritional information.",
      technologies: ["Next.js", "PostgreSQL", "Tailwind CSS", "API Gateway"],
      date: "December 2022",
      liveDemoUrl: "#",
      sourceCodeUrl: "#"
    },
    {
      id: 6,
      image: '/src/assets/project-thumbnails/devops-dashboard.jpg',
      title: "DevOps Automation Dashboard",
      description: "Created a comprehensive dashboard to monitor CI/CD pipelines, manage deployments, and visualize performance metrics for DevOps teams. Streamlined development workflows and reduced deployment times.",
      technologies: ["Python", "Django", "Grafana", "Docker Swarm"],
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
          <button className="explore-button">Explore Projects</button>
        </div>
        {/* A DIV ABAIXO VAI SIMULAR A IMAGEM COM UM FUNDO PRETO */}
        <div className="creative-work-illustration-placeholder"></div>
      </section>

      <section className="featured-projects-section">
        <h2 className="section-heading">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-thumbnail-wrapper">
                {/* Aqui, manterei a tag <img>, mas como o arquivo não existe, o navegador não a exibirá.
                    O CSS para .project-thumbnail-wrapper dará o fundo preto. */}
                <img src={project.image} alt={project.title} className="project-thumbnail" />
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

      <footer className="main-footer">
        <div className="footer-links">
            <a href="#">Resources</a>
            <a href="#">Legal</a>
            <a href="#">Contact Us</a>
        </div>
        <div className="made-with-section">
        </div>
        <div className="social-icons">
          {/* Adicione ícones de redes sociais aqui */}
        </div>
      </footer>
    </div>
  );
};

export default ProjectDashboard;