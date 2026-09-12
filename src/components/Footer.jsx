import React from 'react';
import { socialLinks } from '../data/projects';
import './Footer.css';

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="site-footer">
      <div className="section-container" style={{ padding: '0 24px' }}>
        <div className="footer-content">
          
          <div className="footer-brand">
            <a 
              href="#hero" 
              className="footer-logo"
              onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
            >
              <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>&lt;</span>
              Owais
              <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>/&gt;</span>
            </a>
            <span className="footer-role">Frontend Developer</span>
          </div>

          <ul className="footer-links">
            <li>
              <a 
                href={socialLinks.github === 'YOUR_GITHUB_URL' ? '#contact' : socialLinks.github}
                target={socialLinks.github === 'YOUR_GITHUB_URL' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="footer-link"
              >
                GitHub
              </a>
            </li>
            <span className="footer-divider-dot">•</span>
            <li>
              <a 
                href={socialLinks.linkedin === 'YOUR_LINKEDIN_URL' ? '#contact' : socialLinks.linkedin}
                target={socialLinks.linkedin === 'YOUR_LINKEDIN_URL' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="footer-link"
              >
                LinkedIn
              </a>
            </li>
            <span className="footer-divider-dot">•</span>
            <li>
              <a 
                href={socialLinks.email === 'YOUR_EMAIL' ? '#contact' : `mailto:${socialLinks.email}`}
                className="footer-link"
              >
                Email
              </a>
            </li>
          </ul>

          <div className="footer-copyright">
            © 2026 Owais. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}
