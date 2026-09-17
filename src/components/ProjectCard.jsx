import React from 'react';
import { ExternalLink, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import './ProjectCard.css';

// Render custom abstract HTML/CSS visual previews based on project category
const renderProjectPreview = (category, title) => {
  switch (category) {
    case 'dashboard':
      return (
        <div className="project-visual-inner">
          <div className="preview-window-bar">
            <div className="preview-dots">
              <span className="preview-dot"></span>
              <span className="preview-dot"></span>
              <span className="preview-dot"></span>
            </div>
            <span className="preview-bar-title">admin-dashboard.app</span>
          </div>
          <div className="dash-grid">
            <div className="dash-card-mini">
              <div className="dash-lbl">Users</div>
              <div className="dash-val">1,420</div>
            </div>
            <div className="dash-card-mini">
              <div className="dash-lbl">Sales</div>
              <div className="dash-val">$24.8k</div>
            </div>
            <div className="dash-card-mini">
              <div className="dash-lbl">Orders</div>
              <div className="dash-val">380</div>
            </div>
          </div>
          <div className="dash-chart-bars">
            <div className="bar-col" style={{ height: '40%' }}></div>
            <div className="bar-col" style={{ height: '65%' }}></div>
            <div className="bar-col" style={{ height: '45%' }}></div>
            <div className="bar-col" style={{ height: '85%' }}></div>
            <div className="bar-col" style={{ height: '70%' }}></div>
            <div className="bar-col" style={{ height: '100%' }}></div>
          </div>
        </div>
      );

    case 'weather':
      return (
        <div className="project-visual-inner">
          <div className="preview-window-bar">
            <div className="preview-dots">
              <span className="preview-dot"></span>
              <span className="preview-dot"></span>
            </div>
            <span className="preview-bar-title">weather-app.io</span>
          </div>
          <div className="weather-preview">
            <div className="weather-search-bar">
              <span>Search city...</span>
              <span>🔍</span>
            </div>
            <div className="weather-main-row">
              <div>
                <div style={{ fontSize: '0.8125rem', fontWeight: '700' }}>New York, US</div>
                <div style={{ fontSize: '0.625rem', color: '#94a3b8' }}>Partly Cloudy</div>
              </div>
              <div className="temp-big">24°C</div>
            </div>
            <div className="weather-forecast-row">
              <div className="forecast-pill">Mon 22°</div>
              <div className="forecast-pill">Tue 24°</div>
              <div className="forecast-pill">Wed 26°</div>
              <div className="forecast-pill">Thu 21°</div>
            </div>
          </div>
        </div>
      );

    case 'expense':
      return (
        <div className="project-visual-inner">
          <div className="preview-window-bar">
            <div className="preview-dots">
              <span className="preview-dot"></span>
              <span className="preview-dot"></span>
            </div>
            <span className="preview-bar-title">expense-tracker.app</span>
          </div>
          <div className="expense-balance-box">
            <div style={{ fontSize: '0.625rem', color: '#94a3b8' }}>Total Balance</div>
            <div className="expense-amount">$4,250.00</div>
          </div>
          <div className="expense-list">
            <div className="expense-item">
              <span>Software Subscription</span>
              <span style={{ color: '#ef4444' }}>-$29.00</span>
            </div>
            <div className="expense-item">
              <span>Freelance Payment</span>
              <span style={{ color: '#34d399' }}>+$850.00</span>
            </div>
          </div>
        </div>
      );

    case 'cart':
      return (
        <div className="project-visual-inner">
          <div className="preview-window-bar">
            <div className="preview-dots">
              <span className="preview-dot"></span>
              <span className="preview-dot"></span>
            </div>
            <span className="preview-bar-title">store-cart.shop</span>
          </div>
          <div className="cart-grid">
            <div className="cart-item-card">
              <div style={{ fontSize: '0.6875rem', fontWeight: '700' }}>Wireless Pods</div>
              <div style={{ fontSize: '0.625rem', color: '#6366f1' }}>$129.00</div>
              <button className="cart-btn-mini">Add to Cart</button>
            </div>
            <div className="cart-item-card">
              <div style={{ fontSize: '0.6875rem', fontWeight: '700' }}>Smart Watch</div>
              <div style={{ fontSize: '0.625rem', color: '#6366f1' }}>$199.00</div>
              <button className="cart-btn-mini">Add to Cart</button>
            </div>
          </div>
        </div>
      );

    case 'notes':
      return (
        <div className="project-visual-inner">
          <div className="preview-window-bar">
            <div className="preview-dots">
              <span className="preview-dot"></span>
              <span className="preview-dot"></span>
            </div>
            <span className="preview-bar-title">quick-notes.app</span>
          </div>
          <div className="notes-grid-preview">
            <div className="note-card-mini note-indigo">
              <div style={{ fontWeight: '700' }}>Project Ideas</div>
              <div style={{ fontSize: '0.5625rem', color: '#94a3b8' }}>• Portfolio redesign...</div>
            </div>
            <div className="note-card-mini note-emerald">
              <div style={{ fontWeight: '700' }}>React Tips</div>
              <div style={{ fontSize: '0.5625rem', color: '#94a3b8' }}>• Use custom hooks...</div>
            </div>
            <div className="note-card-mini note-violet">
              <div style={{ fontWeight: '700' }}>Task Reminders</div>
              <div style={{ fontSize: '0.5625rem', color: '#94a3b8' }}>• Review PRs today...</div>
            </div>
            <div className="note-card-mini note-amber">
              <div style={{ fontWeight: '700' }}>Meeting Summary</div>
              <div style={{ fontSize: '0.5625rem', color: '#94a3b8' }}>• Frontend roadmap...</div>
            </div>
          </div>
        </div>
      );

    case 'calculator':
      return (
        <div className="project-visual-inner">
          <div className="preview-window-bar">
            <div className="preview-dots">
              <span className="preview-dot"></span>
              <span className="preview-dot"></span>
            </div>
            <span className="preview-bar-title">react-calculator.app</span>
          </div>
          <div className="calc-display">1,284.50</div>
          <div className="calc-keypad">
            <div className="calc-key">AC</div>
            <div className="calc-key">+/-</div>
            <div className="calc-key">%</div>
            <div className="calc-key operator">÷</div>
            <div className="calc-key">7</div>
            <div className="calc-key">8</div>
            <div className="calc-key">9</div>
            <div className="calc-key operator">×</div>
          </div>
        </div>
      );

    case 'todo':
      return (
        <div className="project-visual-inner">
          <div className="preview-window-bar">
            <div className="preview-dots">
              <span className="preview-dot"></span>
              <span className="preview-dot"></span>
            </div>
            <span className="preview-bar-title">todo-manager.app</span>
          </div>
          <div className="todo-preview-list">
            <div className="todo-row">
              <div className="todo-check"><Check size={8} color="#10b981" /></div>
              <span className="todo-text done">Setup Vite & React environment</span>
            </div>
            <div className="todo-row">
              <div className="todo-check"><Check size={8} color="#10b981" /></div>
              <span className="todo-text done">Design responsive project cards</span>
            </div>
            <div className="todo-row">
              <div className="todo-check" style={{ background: 'transparent' }}></div>
              <span className="todo-text">Deploy single-page application</span>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="project-visual-inner">
          <div className="preview-window-bar">
            <span className="preview-bar-title">{title}</span>
          </div>
        </div>
      );
  }
};

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      
      {/* Abstract UI Visual Preview */}
      <div className="project-visual-wrapper">
        {renderProjectPreview(project.category, project.title)}
      </div>

      {/* Card Details Body */}
      <div className="project-card-body">
        
        <div>
          <div className="project-card-top">
            <span className="project-number">PROJECT #{project.id}</span>
            <ArrowUpRight size={20} className="project-arrow-icon" />
          </div>

          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>

          {/* Tech Stack Badges */}
          <div className="project-tech-list">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
          </div>

          {/* Key Features List */}
          {project.features && (
            <div className="project-features-list">
              {project.features.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <Check size={14} className="feature-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Buttons Action Group */}
        <div className="project-card-actions">
          <a
            href={project.liveDemoUrl === 'LIVE_DEMO_URL' ? 'https://admin-dashboard-black-eta-50.vercel.app/' : project.liveDemoUrl}
            target={project.liveDemoUrl === 'LIVE_DEMO_URL' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>

          <a
            href={project.githubUrl === 'GITHUB_URL' ? 'https://github.com/OwaisRaza786/adminDashboard' : project.githubUrl}
            target={project.githubUrl === 'GITHUB_URL' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <GithubIcon size={15} />
            GitHub
          </a>
        </div>

      </div>
    </div>
  );
}
