import { 
  User, 
  Download, 
  CheckCircle2, 
  ExternalLink, 
  Target, 
  Sparkles 
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalData, focusAreas } from '../data/portfolioData';

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <User size={14} />
            <span>Profile Overview</span>
          </span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            A dedicated Computer Science Engineering student eager to build scalable web experiences and kickstart my professional career.
          </p>
        </div>

        {/* Main About Layout */}
        <div className="about-grid">
          {/* Left Column: Detailed Bio Card */}
          <div className="about-card glass-card">
            <div className="about-header-pill">
              <Sparkles size={16} className="text-blue" />
              <span>Professional Summary</span>
            </div>

            <p className="about-paragraph highlight">
              {personalData.profileSummary}
            </p>

            <div className="about-details-list">
              <div className="detail-item">
                <span className="detail-label">Full Name:</span>
                <span className="detail-value">{personalData.name}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Current Role:</span>
                <span className="detail-value">{personalData.role}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">{personalData.location}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <a href={`mailto:${personalData.email}`} className="detail-link">
                  {personalData.email}
                </a>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone:</span>
                <a href={`tel:${personalData.phone}`} className="detail-link">
                  {personalData.phone}
                </a>
              </div>
              <div className="detail-item">
                <span className="detail-label">LinkedIn:</span>
                <a 
                  href={personalData.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="detail-link"
                >
                  linkedin.com/in/ilayaraja-muthusamy
                  <ExternalLink size={13} style={{ display: 'inline', marginLeft: 4 }} />
                </a>
              </div>
            </div>

            {/* Resume Action Bar */}
            <div className="about-action-bar">
              <button 
                type="button"
                className="btn btn-emerald"
                onClick={onOpenResume}
              >
                <Download size={18} />
                <span>Download Resume</span>
              </button>

              <a 
                href={personalData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                <LinkedinIcon size={18} />
                <span>View LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Stats & Focus Areas */}
          <div className="about-stats-column">
            {/* Quick Stat Highlights */}
            <div className="stats-cards-grid">
              {personalData.stats.map((stat, idx) => (
                <div key={idx} className="stat-card glass-card">
                  <div className="stat-number gradient-text">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-subtext">{stat.subtext}</div>
                </div>
              ))}
            </div>

            {/* Core Focus Areas */}
            <div className="focus-areas-container glass-card">
              <h3 className="focus-title">
                <Target size={18} className="text-blue" />
                <span>Primary Areas of Interest</span>
              </h3>
              <p className="focus-subtitle">
                Academic disciplines and practical domains I am continually exploring:
              </p>
              <div className="focus-grid">
                {focusAreas.map((item, idx) => (
                  <div key={idx} className="focus-item">
                    <CheckCircle2 size={16} className="text-emerald focus-check" />
                    <div>
                      <strong className="focus-item-title">{item.title}</strong>
                      <p className="focus-item-desc">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
