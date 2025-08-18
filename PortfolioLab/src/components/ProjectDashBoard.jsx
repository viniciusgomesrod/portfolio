import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/ProjectDashboard.module.css';

const ProjectDashBoard = () => {
  const { t } = useTranslation();
  const projects = t("projectsDashboard.projects", { returnObjects: true });

  return (
    <div className="dashboard-container">
      <section className="creative-work-hero">
        <div className="creative-work-content">
          <h1>{t("projectsDashboard.heroTitle")}</h1>
          <p className="creative-work-subtitle">{t("projectsDashboard.heroSubtitle")}</p>
        </div>
        <div className="creative-work-illustration">
          <div className="gradient-circle"></div>
        </div>
      </section>

      <section className="featured-projects-section">
        <h2 className="section-heading">{t("projectsDashboard.featuredProjects")}</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <div className="image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="project-info-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-date">{project.date}</div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.technologies?.map((tech, idx) => (
                    <span key={idx} className="tag">{tech}</span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-demo-btn"
                  >
                    {t("projectsDashboard.liveDemo")}
                    <span className="btn-icon">→</span>
                  </a>
                  <a
                    href={project.sourceCodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="source-code-btn"
                  >
                    {t("projectsDashboard.sourceCode")}
                    <span className="btn-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75 5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48a5.07 5.07 0 0 0-.09 3.77 5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87m0-2.97c-3 .73-5.55 1.61-5.55 5.9h14.56c0-4.29-2.55-5.17-5.55-5.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDashBoard;