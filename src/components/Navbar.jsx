import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar container">
        <a href="#hero" className="logo" onClick={handleLinkClick}>
          <img src={profileImg} alt="Lakshmi Narashima" className="logo-img" />
          <span className="logo-accent">&lt;</span>Lakshmi Narashima<span className="logo-accent">.V /&gt;</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#about" className="nav-link" onClick={handleLinkClick}>About</a></li>
          <li><a href="#skills" className="nav-link" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#projects" className="nav-link" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#education" className="nav-link" onClick={handleLinkClick}>Education</a></li>
          <li><a href="#contact" className="nav-link" onClick={handleLinkClick}>Contact</a></li>
        </ul>

        <div className="nav-actions">
          <button
            id="theme-toggle"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === 'dark-theme' ? (
              <Sun size={20} className="sun-icon" />
            ) : (
              <Moon size={20} className="moon-icon" />
            )}
          </button>

          <button
            className="mobile-nav-toggle"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X size={24} className="close-icon" />
            ) : (
              <Menu size={24} className="menu-icon" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
