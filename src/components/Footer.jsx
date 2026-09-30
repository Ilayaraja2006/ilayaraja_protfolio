import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        <div className="footer-top-row">
          {/* Brand & Bio Column */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <span className="brand-code">&lt;IM /&gt;</span>
              <span className="brand-name">{personalData.name}</span>
            </div>
            <p className="footer-tagline">
              Aspiring Software Engineer & Final-Year B.E. Computer Science Engineering student focused on building intuitive web applications and exploring data-driven solutions.
            </p>
            <div className="footer-location-tag">
              <MapPin size={14} className="text-emerald" />
              <span>Singarapettai, Krishnagiri, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav-list">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="footer-nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Direct Actions */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Get in Touch</h4>
            <div className="footer-contact-items">
              <a href={`mailto:${personalData.email}`} className="footer-contact-link">
                <Mail size={15} className="text-blue" />
                <span>{personalData.email}</span>
              </a>
              <a href={`tel:${personalData.phone}`} className="footer-contact-link">
                <Phone size={15} className="text-emerald" />
                <span>{personalData.phone}</span>
              </a>
              <a 
                href={personalData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-contact-link"
              >
                <LinkedinIcon size={15} className="text-blue" />
                <span>linkedin.com/in/ilayaraja-muthusamy</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} <strong>{personalData.name}</strong>. All rights reserved.
          </p>

          <p className="made-with-text">
            Built with <strong>React 19 & Vite</strong> &bull; Crafted with care
          </p>

          <button 
            type="button"
            className="back-to-top-btn" 
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
