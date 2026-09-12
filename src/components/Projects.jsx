import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        
        <div className="section-header">
          <span className="section-badge">PORTFOLIO</span>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">
            A collection of applications I've built while developing my frontend skills.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
