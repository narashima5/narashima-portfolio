import React from 'react';
import { Code2, GraduationCap, Award, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="about-section container section-padding">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div class="section-underline"></div>
      </div>
      <div className="about-grid">
        <div className="about-info">
          <h3 className="about-subtitle">Full-Stack Web Developer based in Chennai, TN</h3>
          <p>
            I am currently pursuing my B.Tech. in Information Technology at Prathyusha Engineering College. My passion lies in solving complex backend challenges and building fluid, interactive frontend designs. I bridge the gap between structure and aesthetics.
          </p>
          <p>
            With hands-on experience starting from academic projects to professional freelancing solutions, I've designed QR-based hackathon workflows, carbon emission trackers, and garage administration services. I enjoy working on scalable backend architectures and making database query systems perform efficiently.
          </p>
        </div>
        <div className="about-stats-grid">
          <div className="stat-card glass-panel">
            <div className="stat-icon"><Code2 size={24} /></div>
            <div className="stat-number">7+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card glass-panel">
            <div className="stat-icon"><GraduationCap size={24} /></div>
            <div className="stat-number">7.9</div>
            <div className="stat-label">B.Tech GPA</div>
          </div>
          <div className="stat-card glass-panel">
            <div className="stat-icon"><Award size={24} /></div>
            <div className="stat-number">4+</div>
            <div className="stat-label">Certifications</div>
          </div>
          <div className="stat-card glass-panel">
            <div className="stat-icon"><Briefcase size={24} /></div>
            <div className="stat-number">4</div>
            <div className="stat-label">Freelance Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
