import React from 'react';
import { Smartphone, Atom, CloudLightning } from 'lucide-react';
import { servicesList } from '../data/projects';
import './Services.css';

const getServiceIcon = (index) => {
  switch (index) {
    case 0: return <Smartphone size={26} />;
    case 1: return <Atom size={26} />;
    case 2: return <CloudLightning size={26} />;
    default: return <Atom size={26} />;
  }
};

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="section-container">
        
        <div className="section-header">
          <span className="section-badge">SERVICES</span>
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">
            Core frontend capabilities focused on quality, user experience, and modern web standards.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="service-card">
              <div>
                <div className="service-header">
                  <span className="service-number">{service.number}</span>
                  <div className="service-icon-box">
                    {getServiceIcon(index)}
                  </div>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
