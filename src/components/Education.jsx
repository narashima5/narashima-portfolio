import React from 'react';
import { Server, BrainCircuit, Database, Cloud } from 'lucide-react';

export default function Education() {
  const certifications = [
    {
      title: "Foundations of Data Engineering",
      issuer: "AWS Certification",
      icon: Server
    },
    {
      title: "Introduction to GenAI",
      issuer: "AWS Certification",
      icon: BrainCircuit
    },
    {
      title: "Introduction to Data Science",
      issuer: "NPTEL Certification",
      icon: Database
    },
    {
      title: "Introduction to DevOps",
      issuer: "AWS Certification",
      icon: Cloud
    }
  ];

  return (
    <section id="education" className="education-section container section-padding">
      <div className="education-certs-grid">
        {/* Education Timeline */}
        <div className="education-wrapper">
          <div className="section-header align-left">
            <h2 class="section-title">Education</h2>
            <div className="section-underline"></div>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <span className="timeline-date">Pursuing</span>
                <h3>B.Tech. in Information Technology</h3>
                <h4 className="timeline-institution">Prathyusha Engineering College</h4>
                <p className="timeline-grade">GPA: <strong>7.9</strong> (Up to 5th Semester)</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <span className="timeline-date">2022 – 2023</span>
                <h3>HSC (Grade 12) CBSE</h3>
                <h4 className="timeline-institution">Vivekananda Vision School</h4>
                <p className="timeline-grade">Percentage: <strong>78.4%</strong></p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <span className="timeline-date">2020 – 2021</span>
                <h3>SSLC (Grade 10) CBSE</h3>
                <h4 className="timeline-institution">Vivekananda Vision School</h4>
                <p className="timeline-grade">Percentage: <strong>78%</strong></p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="certs-wrapper">
          <div className="section-header align-left">
            <h2 className="section-title">Certifications</h2>
            <div className="section-underline"></div>
          </div>
          <div className="certs-grid">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="cert-card glass-panel">
                  <div className="cert-icon">
                    <IconComponent size={20} />
                  </div>
                  <div className="cert-details">
                    <h3>{cert.title}</h3>
                    <p>{cert.issuer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
