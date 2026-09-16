import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

const PROJECTS_PER_PAGE = 2;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  // Get current page projects
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);

    // Keep user in the Selected Projects section
    const section = document.getElementById('projects');
    if (section) {
      const navOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

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

        {/* Projects Grid displaying current page items */}
        <div className="projects-grid">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Client-side Pagination - only renders if total projects > 6 */}
        {totalPages > 1 && (
          <div className="pagination-container">
            <button
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous Page"
            >
              <ChevronLeft size={18} />
              <span>Previous</span>
            </button>

            <div className="pagination-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next Page"
            >
              <span>Next</span>
              <ChevronRight size={18} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
