import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setStatus('sending');
    setStatusMessage('');

    try {
      const response = await fetch("https://formsubmit.co/ajax/narashima9345@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage(`Thank you, ${formData.name}! Your message has been sent successfully.`);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
      setStatusMessage('Oops! Something went wrong. Please try again later.');
    }

    // Clear success or error status message after 5 seconds
    setTimeout(() => {
      setStatus('');
      setStatusMessage('');
    }, 5000);
  };

  return (
    <section id="contact" className="contact-section container section-padding">
      <div className="section-header">
        <h2 className="section-title">Get in Touch</h2>
        <div className="section-underline"></div>
      </div>
      <div className="contact-grid">
        <div className="contact-info-panel glass-panel">
          <h3>Let's Collaborate</h3>
          <p>If you're looking for a developer to help design interfaces, build REST APIs, implement databases, or create clean web dashboards, let's talk!</p>
          
          <div className="info-list">
            <div className="info-item">
              <div className="info-icon"><Mail size={20} /></div>
              <div className="info-text">
                <span>Email Me</span>
                <a href="mailto:narashima9345@gmail.com">narashima9345@gmail.com</a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><Phone size={20} /></div>
              <div className="info-text">
                <span>Call Me</span>
                <a href="tel:+919345769419">+91 93457 69419</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><MapPin size={20} /></div>
              <div className="info-text">
                <span>Location</span>
                <p>Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>

        <form id="contact-form" className="contact-form glass-panel" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="John Doe" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="john@example.com" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              placeholder="Let's build something cool..." 
              value={formData.message}
              onChange={handleChange}
              required 
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary btn-submit"
            disabled={status === 'sending'}
          >
            <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
            <Send size={16} />
          </button>
          
          {statusMessage && (
            <div className={`form-status ${status === 'success' ? 'success' : 'error'}`}>
              {statusMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
