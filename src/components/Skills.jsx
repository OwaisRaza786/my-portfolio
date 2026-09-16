import React from 'react';
import { 
  FileCode, 
  Palette, 
  LayoutGrid, 
  Zap, 
  Layers, 
  Server, 
  Atom, 
  Cpu, 
  Database 
} from 'lucide-react';
import { skillsList } from '../data/projects';
import './Skills.css';

const getSkillIcon = (iconName) => {
  switch (iconName) {
    case 'html5': return <FileCode size={24} />;
    case 'css3': return <Palette size={24} />;
    case 'bootstrap': return <LayoutGrid size={24} />;
    case 'javascript': return <Zap size={24} />;
    case 'jquery': return <Layers size={24} />;
    case 'php': return <Server size={24} />;
    case 'react': return <Atom size={24} />;
    case 'node': return <Cpu size={24} />;
    case 'mysqli': return <Database size={24} />;
    default: return <Zap size={24} />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        
        <div className="section-header">
          <span className="section-badge">TECH STACK</span>
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            Core technologies and tools I utilize to craft modern web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon-wrapper">
                {getSkillIcon(skill.icon)}
              </div>
              <div className="skill-details">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-category">{skill.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
