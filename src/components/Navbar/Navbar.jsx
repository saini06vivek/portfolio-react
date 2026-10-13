import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('portfolio-theme') === 'dark';
  });

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll('.page-section');

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: '-15% 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.5]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo" onClick={closeMenu}>
        Vek<span>XD</span>
      </a>

      <div className={`navbar-links ${menuOpen ? 'menu-open' : ''}`}>
        {['home', 'about', 'projects', 'contact'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`nav-link ${activeSection === section ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>

      <div className="navbar-right">
        <button
          className="navbar-actions"
          type="button"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={() => setDarkMode((previous) => !previous)}
        >
          {darkMode ? <Moon size={21} /> : <Sun size={21} />}
        </button>

        <button
          className="navbar-menu-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
