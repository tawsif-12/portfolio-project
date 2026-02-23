import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { profile } from '../data/profile';

function Navbar({ isDarkMode, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { path: 'home', label: 'Home' },
    { path: 'about', label: 'About' },
    { path: 'skills', label: 'Skills' },
    { path: 'activities', label: 'Activities' },
    { path: 'projects', label: 'Projects' },
    { path: 'achievements', label: 'Achievements' },
    { path: 'contact', label: 'Contact' },
  ];

  // Scroll spy effect - highlight active section in navbar (only on home page)
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.path));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].path);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle scrolling to section after navigation
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(sectionId);
        }
      }, 100);
    }
  }, [location]);

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
        setIsOpen(false);
      }
    } else {
      // Navigate to home page with hash
      navigate(`/#${sectionId}`);
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-theme-primary border-b border-theme sticky top-0 z-50" style={{ transition: 'background-color 0.3s ease' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={() => scrollToSection('home')} className="flex items-center space-x-3">
            <img src="/img/logo.png" alt="Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-theme-text">
              Portfolio <span className="text-coral">| Towsif</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => scrollToSection(link.path)}
                className={activeSection === link.path ? 'nav-link text-coral' : 'nav-link'}
              >
                {link.label}
              </button>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-theme-card transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <HiMoon className="w-6 h-6 text-coral" />
              ) : (
                <HiSun className="w-6 h-6 text-coral" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-theme-card transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <HiMoon className="w-5 h-5 text-coral" />
              ) : (
                <HiSun className="w-5 h-5 text-coral" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-theme-card transition-colors text-theme-primary"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-theme-primary border-t border-theme">
          <div className="px-4 py-3 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => scrollToSection(link.path)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 ${
                  activeSection === link.path
                    ? 'bg-coral text-white'
                    : 'hover:bg-theme-card text-theme-primary'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
