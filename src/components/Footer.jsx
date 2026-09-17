import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
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

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'jQuery',
    'Bootstrap 5',
    'PHP',
    'MySQLi',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB'
  ];

  return (
    <footer className="site-footer">
      <div className="section-container footer-container">
        
        {/* Main Footer Multi-Column Layout */}
        <div className="footer-grid">
          
          {/* Column 1: Developer Intro & Branding */}
          <div className="footer-col">
            <a 
              href="#hero" 
              className="footer-logo"
              onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
            >
              <span className="logo-bracket">&lt;</span>
              Owais
              <span className="logo-bracket">/&gt;</span>
            </a>
            <p className="footer-intro-text">
              Frontend-focused Web Developer building responsive and modern web experiences.
            </p>
            
            {/* Social Links */}
            <div className="footer-social-row">
              <a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a 
                href={`mailto:${socialLinks.email}`}
                className="footer-social-btn"
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-nav-list">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    className="footer-nav-link"
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Technologies & Projects */}
          <div className="footer-col">
            <h4 className="footer-col-title">Technologies</h4>
            <div className="footer-tech-tags">
              {technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>

            <div className="footer-work-snippet" style={{ marginTop: '22px' }}>
              <p className="footer-work-desc">Building practical web applications and interactive interfaces.</p>
              <a 
                href="#projects" 
                className="footer-inline-link"
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              >
                Explore Projects <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Column 4: Contact / CTA */}
          <div className="footer-col">
            <h4 className="footer-col-title">Let's Connect</h4>
            <p className="footer-cta-heading">Have a project or opportunity in mind?</p>
            <p className="footer-cta-sub">Let's build something together.</p>
            <button 
              className="btn-primary btn-sm"
              onClick={() => scrollToSection('contact')}
              style={{ width: 'fit-content' }}
            >
              Contact Me
              <ArrowUpRight size={16} />
            </button>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Owais. All rights reserved.</p>
          <p className="footer-tech-stack">Built with HTML, CSS, JavaScript, Bootstrap & React</p>
        </div>

      </div>
    </footer>
  );
}
