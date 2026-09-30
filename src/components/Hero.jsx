import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Download,
  GraduationCap,
  Award
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';
import profilePhoto from '../assets/profile.jpeg';

export default function Hero({ onOpenResume }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Decorative ambient background glows */}
      <div className="hero-ambient-glow glow-1"></div>
      <div className="hero-ambient-glow glow-2"></div>

      <div className="container hero-container">
        {/* Left Column: Hero Content */}
        <div className="hero-content">
          {/* Welcome status badge */}
          <div className="hero-badge animate-fade-in">
            <span className="hero-pulse-dot"></span>
            <span className="badge-text">Open to Entry-Level Software Roles</span>
          </div>

          <h1 className="hero-title animate-fade-in">
            Hi, I'm <span className="gradient-text">{personalData.name}</span>
          </h1>

          <div className="hero-subtitle-group">
            <h2 className="hero-role">{personalData.role}</h2>
            <div className="hero-meta-badge">
              <GraduationCap size={15} />
              <span>Final-Year B.E. CSE Student (2023–2027)</span>
            </div>
          </div>

          <p className="hero-description">
            {personalData.profileSummary}
          </p>

          {/* Quick Info Pills */}
          <div className="hero-info-pills">
            <span className="info-pill">
              <MapPin size={14} className="pill-icon" />
              <span>Singarapettai, Tamil Nadu</span>
            </span>
            <a
              href={`mailto:${personalData.email}`}
              className="info-pill interactive"
              title="Send email"
            >
              <Mail size={14} className="pill-icon" />
              <span>{personalData.email}</span>
            </a>
          </div>

          {/* Call to Actions */}
          <div className="hero-cta-group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => scrollTo('projects')}
            >
              <span>View Projects</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => scrollTo('contact')}
            >
              <span>Contact Me</span>
              <Mail size={18} />
            </button>

            <button
              type="button"
              className="btn btn-secondary hero-resume-cta"
              onClick={onOpenResume}
              title="Download or Preview Resume"
            >
              <Download size={18} />
              <span>Resume</span>
            </button>
          </div>

          {/* Social Proof & Quick Links */}
          <div className="hero-social-strip">
            <span className="social-label">Connect:</span>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              title="Connect on LinkedIn"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href={`tel:${personalData.phone}`}
              className="hero-social-link"
              title="Call phone number"
              aria-label="Phone contact"
            >
              <Phone size={18} />
              <span>{personalData.phone}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Professional Profile Photo Showcase */}
        <div className="hero-visual">
          <div className="hero-photo-wrapper animate-float">
            <div className="photo-outer-glow"></div>

            <div className="photo-card-frame glass-card">
              <div className="photo-inner-container">
                <img
                  src={profilePhoto}
                  alt={`${personalData.name} - ${personalData.role}`}
                  className="hero-profile-image"
                  onError={(e) => {
                    e.currentTarget.src = personalData.photo;
                  }}
                />
                <div className="photo-overlay-gradient"></div>
                <div className="photo-status-badge">
                  <span className="status-ping"></span>
                  <span>Available for Opportunities</span>
                </div>
              </div>

              {/* Photo Caption Strip */}
              <div className="photo-caption-bar">
                <div className="caption-text-group">
                  <span className="caption-name">{personalData.name}</span>
                  <span className="caption-role">B.E. Computer Science Engineering</span>
                </div>
                <div className="caption-college-badge">TNCET</div>
              </div>
            </div>

            {/* Floating Highlights Badges */}
            <div className="floating-card photo-badge-top glass-card">
              <GraduationCap size={18} className="text-emerald" />
              <div>
                <div className="badge-stat">7.80 CGPA</div>
                <div className="badge-desc">Tamilnadu College of Eng.</div>
              </div>
            </div>

            <div className="floating-card photo-badge-bottom glass-card">
              <Award size={18} className="text-blue" />
              <div>
                <div className="badge-stat">14 Verified Badges</div>
                <div className="badge-desc">Google & IBM Credentials</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
