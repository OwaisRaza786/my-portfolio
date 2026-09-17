import React, { useState, useEffect } from 'react';
import { ArrowRight, Code2, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import './Hero.css';

const roles = [
  'Web Developer',
  'Frontend Developer',
  'Backend Developer'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && displayedText !== currentRole) {
      // 1. Typing character by character (55ms)
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }, 55);
    } else if (!isDeleting && displayedText === currentRole) {
      // 2. Complete role displayed -> pause for 1200ms
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1200);
    } else if (isDeleting && displayedText !== '') {
      // 3. Deleting character by character (35ms)
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      }, 35);
    } else if (isDeleting && displayedText === '') {
      // 4. Role completely deleted -> pause 300ms before typing next role
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }, 300);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

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
    <section id="hero" className="hero-section">
      <div className="section-container">
        <div className="hero-grid">
          
          {/* Left Text Content */}
          <div className="hero-content">
            <div className="availability-badge">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            <span className="hero-greeting">HELLO, I'M</span>
            <h1 className="hero-name">Owais</h1>
            
            {/* Developer Typewriter Heading */}
            <div className="hero-role-wrapper">
              <h2 className="hero-role">
                <span className="hero-role-text">{displayedText}</span>
                <span className="typewriter-cursor">|</span>
              </h2>
            </div>
            
            <p className="hero-description">
              Building clean, responsive and interactive web experiences with modern frontend technologies.
            </p>

            <div className="hero-cta-group">
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
              >
                View My Work
                <ArrowRight size={18} />
              </button>

              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Abstract Developer Visual */}
          <div className="hero-visual">
            
            <div className="code-window">
              <div className="window-header">
                <div className="window-dots">
                  <span className="window-dot dot-red"></span>
                  <span className="window-dot dot-yellow"></span>
                  <span className="window-dot dot-green"></span>
                </div>
                <div className="window-tabs">
                  <span className="window-tab active">
                    <Code2 size={12} /> Developer.jsx
                  </span>
                  <span className="window-tab">styles.css</span>
                </div>
              </div>

              <div className="window-body">
                <div className="code-line">
                  <span className="line-num">1</span>
                  <span className="code-content">
                    <span className="token-keyword">import</span> React <span className="token-keyword">from</span> <span className="token-string">'react'</span><span className="token-punct">;</span>
                  </span>
                </div>
                
                <div className="code-line">
                  <span className="line-num">2</span>
                  <span className="code-content">
                    <span className="token-comment">// Building modern digital experiences</span>
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-num">3</span>
                  <span className="code-content">
                    <span className="token-keyword">export default function</span> <span className="token-component">FrontendDeveloper</span><span className="token-punct">()</span> &#123;
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-num">4</span>
                  <span className="code-content" style={{ paddingLeft: '16px' }}>
                    <span className="token-keyword">const</span> developer = &#123;
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-num">5</span>
                  <span className="code-content" style={{ paddingLeft: '32px' }}>
                    name: <span className="token-string">'Owais'</span><span className="token-punct">,</span>
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-num">6</span>
                  <span className="code-content" style={{ paddingLeft: '32px' }}>
                    focus: <span className="token-string">'React & JavaScript'</span><span className="token-punct">,</span>
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-num">7</span>
                  <span className="code-content" style={{ paddingLeft: '32px' }}>
                    quality: <span className="token-string">'Clean & Responsive'</span>
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-num">8</span>
                  <span className="code-content" style={{ paddingLeft: '16px' }}>
                    &#125;<span className="token-punct">;</span>
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-num">9</span>
                  <span className="code-content" style={{ paddingLeft: '16px' }}>
                    <span className="token-keyword">return</span> <span className="token-punct">&lt;</span><span className="token-component">UserExperience</span> <span className="token-prop">level</span>=<span className="token-string">"Premium"</span> <span className="token-punct">/&gt;;</span>
                  </span>
                </div>

                <div className="code-line">
                  <span className="line-num">10</span>
                  <span className="code-content">
                    &#125;
                  </span>
                </div>
              </div>

              <div className="window-footer">
                <span className="status-tag">
                  <CheckCircle2 size={13} /> Ready to compile
                </span>
                <span>UTF-8</span>
              </div>
            </div>

            {/* Floating Tech Badges */}
            <div className="floating-badge badge-top-right">
              <Sparkles size={16} color="#6366f1" />
              <span>React & ES6+</span>
            </div>

            <div className="floating-badge badge-bottom-left">
              <Terminal size={16} color="#10b981" />
              <span>Responsive UI</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
