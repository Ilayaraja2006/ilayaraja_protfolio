import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Info
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalData, educationData, softSkills, certificationsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Attempt download of /resume.pdf
    const link = document.createElement('a');
    link.href = personalData.resumeUrl;
    link.download = 'Ilayaraja_M_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-modal-backdrop" onClick={onClose}>
      <div className="resume-modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="resume-modal-top-bar">
          <div className="resume-bar-title">
            <FileText size={18} className="text-blue" />
            <span>Digital Resume &bull; {personalData.name}</span>
          </div>

          <div className="resume-bar-actions">
            <button 
              type="button" 
              className="btn btn-primary btn-sm"
              onClick={handleDownload}
              title="Download PDF"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </button>

            <button 
              type="button" 
              className="btn btn-secondary btn-sm"
              onClick={handlePrint}
              title="Print Resume"
            >
              <Printer size={14} />
              <span>Print</span>
            </button>

            <button 
              type="button" 
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close resume modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Informative Tip */}
        <div className="resume-tip-banner">
          <Info size={16} className="text-blue" />
          <span>
            Tip: Place your physical PDF as <code>public/resume.pdf</code> to enable one-click local file download, or print this formatted digital resume directly.
          </span>
        </div>

        {/* Printable/Viewable Resume Sheet */}
        <div className="resume-sheet">
          {/* Header */}
          <div className="resume-sheet-header">
            <h1 className="resume-name">{personalData.name}</h1>
            <p className="resume-headline">{personalData.role}</p>
            <div className="resume-contacts-row">
              <span><Mail size={13} /> {personalData.email}</span>
              <span><Phone size={13} /> {personalData.phone}</span>
              <span><MapPin size={13} /> {personalData.location}</span>
            </div>
            <div className="resume-linkedin-row">
              <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon size={13} /> linkedin.com/in/ilayaraja-muthusamy
              </a>
            </div>
          </div>

          <hr className="resume-divider" />

          {/* Profile */}
          <div className="resume-section-block">
            <h2 className="resume-section-title">Professional Profile</h2>
            <p className="resume-text">{personalData.profileSummary}</p>
          </div>

          {/* Education */}
          <div className="resume-section-block">
            <h2 className="resume-section-title">Education</h2>
            {educationData.map((edu, idx) => (
              <div key={idx} className="resume-edu-item">
                <div className="resume-edu-header">
                  <strong>{edu.institution}</strong>
                  <span className="resume-date">{edu.period}</span>
                </div>
                <div className="resume-edu-degree">
                  <span>{edu.degree}</span>
                  <span className="resume-edu-score">
                    {edu.scoreType}: <strong>{edu.score}</strong>
                  </span>
                </div>
                {edu.stream && <div className="resume-stream-note">Stream: {edu.stream}</div>}
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="resume-section-block">
            <h2 className="resume-section-title">Technical & Soft Skills</h2>
            <div className="resume-skills-grid">
              <div>
                <strong>Technical (Basic Level):</strong>
                <p>Python (Basic), HTML (Basic), CSS (Basic), Java (Basic)</p>
              </div>
              <div>
                <strong>Soft Skills:</strong>
                <p>{softSkills.map((s) => s.name).join(', ')}</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="resume-section-block">
            <h2 className="resume-section-title">
              Certifications ({certificationsData.length})
            </h2>
            <ul className="resume-certs-list">
              {certificationsData.map((c) => (
                <li key={c.id}>
                  <strong>{c.title}</strong> &mdash; <span>{c.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
