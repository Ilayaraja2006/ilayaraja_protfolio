import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Code2, 
  User, 
  GraduationCap, 
  Award, 
  FolderGit2, 
  Mail, 
  FileText 
} from 'lucide-react';

export default function Navbar({ theme, toggleTheme, onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'skills', 'education', 'certifications', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home', icon: Code2 },
    { label: 'About', href: '#about', id: 'about', icon: User },
    { label: 'Skills', href: '#skills', id: 'skills', icon: Code2 },
    { label: 'Education', href: '#education', id: 'education', icon: GraduationCap },
    { label: 'Certifications', href: '#certifications', id: 'certifications', icon: Award },
    { label: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
    { label: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Moniker */}
        <a 
          href="#home" 
          className="navbar-brand"
          onClick={(e) => handleLinkClick(e, '#home')}
        >
          <div className="brand-icon-box">
            <span className="brand-code">&lt;IM /&gt;</span>
          </div>
          <div className="brand-text-group">
            <span className="brand-name">Ilayaraja M</span>
            <span className="brand-subtitle">Software Engineer</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links-list">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`nav-link-item ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Action Buttons */}
        <div className="navbar-actions">
          {/* Resume Quick Trigger */}
          <button 
            type="button"
            className="navbar-resume-btn" 
            onClick={onOpenResume}
            title="View & Download Resume"
            aria-label="View Resume"
          >
            <FileText size={16} />
            <span>Resume</span>
          </button>

          {/* Theme Toggle */}
          <button 
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun size={18} className="theme-icon sun" />
            ) : (
              <Moon size={18} className="theme-icon moon" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-inner container">
          <ul className="mobile-nav-list">
            {navLinks.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    <IconComponent size={18} />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-drawer-footer">
            <button 
              type="button"
              className="btn btn-primary btn-sm mobile-resume-action"
              onClick={() => {
                setIsOpen(false);
                onOpenResume();
              }}
            >
              <FileText size={16} />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
