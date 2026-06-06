import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectsData = [
    {
      title: "SmartEvaluate",
      category: "Personal Project",
      type: "personal",
      description: "A comprehensive hackathon management system featuring QR-code based entry validation and an automated, streamlined evaluation workflow for judges to rate submissions.",
      tags: ["ReactJS", "NodeJS", "QR Integration"],
      github: "https://github.com/narashima5",
      live: null
    },
    {
      title: "Faculty Activity Evaluation System",
      category: "Personal Project",
      type: "personal",
      description: "A full-stack system designed to log, audit, and evaluate monthly faculty activities. Automatically aggregates achievements and generates granular performance reports.",
      tags: ["ReactJS", "NodeJS", "MongoDB Atlas"],
      github: "https://github.com/narashima5",
      live: null
    },
    {
      title: "CGPA Calculator",
      category: "Personal Project",
      type: "personal",
      description: "A clean, responsive web calculator utility optimized for calculating both individual semester GPA and overall cumulative GPA (CGPA) on various academic scales.",
      tags: ["HTML5", "CSS3", "Vanilla JS"],
      github: "https://github.com/narashima5/symposium",
      live: "https://symposium-one.vercel.app/"
    },
    {
      title: "CETS (Carbon Emission Tracking System)",
      category: "Freelance Project",
      type: "freelance",
      description: "Designed and built a responsive analytical dashboard tracking industrial carbon emissions. Provides interactive charts, reporting systems, and analytical forecasts.",
      tags: ["ReactJS", "Data Analytics", "CSS Grids"],
      github: null,
      live: "#",
      liveLabel: "Available Soon"
    },
    {
      title: "Solwer Service Partner App",
      category: "Freelance Project",
      type: "freelance",
      description: "Collaborated as a core frontend engineer to create a responsive management dashboard system for garage service providers, enabling scheduling and dispatch.",
      tags: ["React-Native", "CSS variables", "API Integration"],
      github: null,
      live: "https://play.google.com/store/apps/details?id=com.solwer.servicepartner&hl=en_IN",
      liveLabel: "View App"
    },
    {
      title: "Solwer Customer App",
      category: "Freelance Project",
      type: "freelance",
      description: "Created the customer-facing interface for the Solver garage booking application, ensuring smooth responsiveness and accessibility across mobile browsers.",
      tags: ["React-Native", "CSS variables", "API Integration", "Mobile UI"],
      github: null,
      live: "https://play.google.com/store/apps/details?id=com.solwer.customer&hl=en_IN",
      liveLabel: "View App"
    },
    {
      title: "DuPay",
      category: "Freelance Project",
      type: "freelance",
      description: "Designed and implemented the homepage and user dashboard views for the duPay website, maintaining smooth transitions and modern aesthetic requirements.",
      tags: ["ReactJS", "CSS3", "UI/UX"],
      github: null,
      live: "https://dupay.ae/en",
      liveLabel: "Live Link"
    }
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section id="projects" className="projects-section container section-padding">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <div className="section-underline"></div>
      </div>

      <div className="projects-tabs">
        <button
          className={`project-tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterClick('all')}
        >
          All Projects
        </button>
        <button
          className={`project-tab-btn ${activeFilter === 'personal' ? 'active' : ''}`}
          onClick={() => handleFilterClick('personal')}
        >
          Personal Projects
        </button>
        <button
          className={`project-tab-btn ${activeFilter === 'freelance' ? 'active' : ''}`}
          onClick={() => handleFilterClick('freelance')}
        >
          Freelance Projects
        </button>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => {
          const isVisible = activeFilter === 'all' || project.type === activeFilter;

          return (
            <div
              key={index}
              className="project-card glass-panel"
              style={{
                display: isVisible ? 'flex' : 'none',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(15px)'
              }}
            >
              <div className="project-category">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="tag">{tag}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{ marginRight: '4px', verticalAlign: 'middle' }}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="proj-link">
                    <ExternalLink size={16} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    {project.liveLabel || 'Live Demo'}
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
