import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Phone } from 'lucide-react';
import resumePdf from '../assets/resume/Narashima_Resume.pdf';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    "Full-Stack Web Applications",
    "Scalable Backend Architectures",
    "High-Performance UIs",
    "Modern Cloud Solutions"
  ];

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const determineDelay = () => {
      if (isDeleting) return 50;
      if (charIndex === currentWord.length) return 2000; // Pause at end of word
      if (charIndex === 0 && !isDeleting) return 500;    // Pause before typing next word
      return 100;                                         // Normal typing speed
    };

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex(prev => (prev + 1) % words.length);
      }
    }, determineDelay());

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section id="hero" className="hero-section container">
      <div className="hero-content">
        <div className="badge-glowing">Available for Opportunities</div>
        <h1 className="hero-title">
          Hi, I am <span className="text-gradient">Lakshmi Narashima V</span>
        </h1>
        <h2 className="hero-subtitle">
          I build <span id="typewriter" className="typewriter-text">{displayText}</span>
          <span className="cursor">|</span>
        </h2>
        <p className="hero-description">
          Passionate and results-driven Full-Stack Web Developer specialized in crafting responsive, scalable, and high-performance applications using React.js, Node.js, and Go. Armed with a strong foundation in data structures and modern web technologies, I love transforming complex ideas into intuitive, user-centric digital experiences. Ready to contribute to impact-driven projects and build the future of the web.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            <span>Get in Touch</span>
            <ArrowRight size={18} />
          </a>
          <a href={resumePdf} className="btn btn-secondary" download="Narashima_Resume.pdf">
            <span>Download CV</span>
            <Download size={18} />
          </a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/narashima" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="https://linkedin.com/in/narashima" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="mailto:narashima9345@gmail.com" className="social-icon-link" aria-label="Email">
            <Mail size={20} />
          </a>
          <a href="tel:+919345769419" className="social-icon-link" aria-label="Phone">
            <Phone size={20} />
          </a>
        </div>
      </div>
      <div className="hero-illustration">
        <div className="blob-wrapper">
          <div className="blob-glow"></div>
          <div className="code-terminal glass-panel">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-title">developer.go</span>
            </div>
            <div className="terminal-body">
              <pre><code dangerouslySetInnerHTML={{ __html: `
<span class="keyword">package</span> main

<span class="keyword">import</span> <span class="string">"fmt"</span>

<span class="keyword">type</span> Developer <span class="keyword">struct</span> {
    Name   <span class="type">string</span>
    Skills []<span class="type">string</span>
}

<span class="keyword">func</span> <span class="function">main</span>() {
    dev := Developer{
        Name:   <span class="string">"Lakshmi Narashima"</span>,
        Skills: []<span class="type">string</span>{"Go", "React", "Node"},
    }
    fmt.Printf("Building with %v\\n", dev.Skills)
}
`.trim() }} /></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
