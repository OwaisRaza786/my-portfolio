import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { socialLinks } from '../data/projects';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Demonstrate frontend form handling
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        
        <div className="section-header">
          <span className="section-badge">GET IN TOUCH</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Have an idea or opportunity? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left Info Column */}
          <div className="contact-info-card">
            <div>
              <h3 className="contact-heading">Let's connect</h3>
              <p className="contact-text">
                Have an idea or opportunity? I'd love to hear from you. Feel free to reach out through any of the channels below or fill out the form.
              </p>
            </div>

            <div className="contact-details-list">
              <a 
                href={socialLinks.email === 'YOUR_EMAIL' ? '#contact' : `mailto:${socialLinks.email}`}
                className="contact-item"
              >
                <div className="contact-item-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="contact-item-label">Email</span>
                  <span className="contact-item-value">{socialLinks.email}</span>
                </div>
              </a>

              <a 
                href={socialLinks.github === 'YOUR_GITHUB_URL' ? '#contact' : socialLinks.github}
                target={socialLinks.github === 'YOUR_GITHUB_URL' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-item-icon">
                  <GithubIcon size={20} />
                </div>
                <div>
                  <span className="contact-item-label">GitHub</span>
                  <span className="contact-item-value">{socialLinks.github}</span>
                </div>
              </a>

              <a 
                href={socialLinks.linkedin === 'YOUR_LINKEDIN_URL' ? '#contact' : socialLinks.linkedin}
                target={socialLinks.linkedin === 'YOUR_LINKEDIN_URL' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-item-icon">
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <span className="contact-item-label">LinkedIn</span>
                  <span className="contact-item-value">{socialLinks.linkedin}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                <Send size={18} />
                Send Message
              </button>

              <p className="form-notice">
                * Form is structured frontend-ready for backend / EmailJS integration.
              </p>

              {submitted && (
                <div className="form-success-toast">
                  <CheckCircle size={18} />
                  <span>Thank you! Your message has been received on the frontend demo.</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
