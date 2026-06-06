import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  // Retrieve saved theme preference, defaulting to 'dark-theme'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark-theme';
  });

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark-theme' ? 'light-theme' : 'dark-theme'));
  };

  // Sync theme changes with body class and localStorage
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Scroll active section link highlighter
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const activeLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);
        
        if (activeLink) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            activeLink.classList.add('active');
          } else {
            activeLink.classList.remove('active');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Background aesthetics */}
      <div className="bg-grid"></div>
      <div className="bg-blur bg-blur-1"></div>
      <div className="bg-blur bg-blur-2"></div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <p>&copy; {new Date().getFullYear()} Lakshmi Narashima V. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#hero">Back to Top</a>
          </div>
        </div>
      </footer>
    </>
  );
}
