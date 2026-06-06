import React, { useState } from 'react';
import { Terminal, Cpu, Binary, Layout, FileCode2, Palette, Server, Database, Table, GitBranch, Layers, Link } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillsData = [
    { name: 'JavaScript', category: 'languages', level: 'Advanced', icon: Terminal },
    { name: 'Go (Golang)', category: 'languages', level: 'Intermediate', icon: Cpu },
    { name: 'Python', category: 'languages', level: 'Intermediate', icon: Binary },
    { name: 'ReactJS', category: 'frontend', level: 'Advanced', icon: Layout },
    { name: 'HTML5', category: 'frontend', level: 'Expert', icon: FileCode2 },
    { name: 'CSS3 / Vanilla CSS', category: 'frontend', level: 'Expert', icon: Palette },
    { name: 'Node.js', category: 'backend', level: 'Advanced', icon: Server },
    { name: 'MongoDB', category: 'backend', level: 'Advanced', icon: Database },
    { name: 'MySQL', category: 'backend', level: 'Advanced', icon: Table },
    { name: 'Git & GitHub', category: 'tools', level: 'Advanced', icon: GitBranch },
    { name: 'OOP & Data Structures', category: 'tools', level: 'Advanced', icon: Layers },
    { name: 'REST APIs', category: 'tools', level: 'Expert', icon: Link }
  ];

  const handleTabClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <section id="skills" className="skills-section container section-padding">
      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
        <div className="section-underline"></div>
      </div>

      <div className="skills-tabs">
        {['all', 'languages', 'frontend', 'backend', 'tools'].map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => handleTabClick(cat)}
            style={{ textTransform: 'capitalize' }}
          >
            {cat === 'backend' ? 'Backend & DB' : cat === 'tools' ? 'Tools & Concepts' : cat}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {skillsData.map((skill, index) => {
          const IconComponent = skill.icon;
          const isVisible = activeCategory === 'all' || skill.category === activeCategory;

          return (
            <div
              key={index}
              className="skill-card glass-panel"
              style={{
                display: isVisible ? 'flex' : 'none',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
              }}
            >
              <div className="skill-header">
                <IconComponent className="skill-icon" size={22} />
                <h3>{skill.name}</h3>
              </div>
              <span className="skill-level">{skill.level}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
