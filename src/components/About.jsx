import React from 'react';
import { Layout, Atom, Smartphone } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        
        <div className="section-header">
          <span className="section-badge">ABOUT ME</span>
          <h2 className="section-title">Crafting User-Centric Web Experiences</h2>
        </div>

        <div className="about-card">
          <div className="about-grid">
            
            <div className="about-text-content">
              <p className="about-paragraph">
                I'm <strong>Owais</strong>, a frontend developer focused on building responsive and interactive web applications. I enjoy turning ideas into clean, functional and user-friendly digital experiences.
              </p>
              <p className="about-paragraph">
                I work primarily with JavaScript and React, while continuously improving my frontend development skills through practical projects.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-pill">
                <div className="highlight-icon">
                  <Layout size={20} />
                </div>
                <div className="highlight-info">
                  <span className="highlight-title">Frontend Development</span>
                  <span className="highlight-sub">Modern HTML5, CSS3 & ES6+</span>
                </div>
              </div>

              <div className="highlight-pill">
                <div className="highlight-icon">
                  <Atom size={20} />
                </div>
                <div className="highlight-info">
                  <span className="highlight-title">React & JavaScript</span>
                  <span className="highlight-sub">Component-Driven Architecture</span>
                </div>
              </div>

              <div className="highlight-pill">
                <div className="highlight-icon">
                  <Smartphone size={20} />
                </div>
                <div className="highlight-info">
                  <span className="highlight-title">Responsive Design</span>
                  <span className="highlight-sub">Seamless Cross-Device Layouts</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
