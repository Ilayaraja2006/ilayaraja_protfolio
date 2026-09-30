import { 
  GraduationCap, 
  School, 
  Calendar, 
  CheckCircle2 
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </span>
          <h2 className="section-title">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            My formal engineering education and foundational higher secondary schooling.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="education-timeline">
          {educationData.map((edu, idx) => (
            <div key={idx} className="education-timeline-item">
              {/* Timeline Indicator Column */}
              <div className="timeline-marker">
                <div className="timeline-node">
                  {idx === 0 ? (
                    <GraduationCap size={20} className="text-blue" />
                  ) : (
                    <School size={20} className="text-emerald" />
                  )}
                </div>
                {idx < educationData.length - 1 && <div className="timeline-connector"></div>}
              </div>

              {/* Education Card */}
              <div className="education-card glass-card">
                <div className="edu-top-row">
                  <div>
                    <div className="edu-badge-row">
                      <span className="edu-type-badge">{edu.badge}</span>
                      {edu.status && (
                        <span className="edu-status-badge">
                          <span className="edu-pulse-dot"></span>
                          {edu.status}
                        </span>
                      )}
                    </div>
                    <h3 className="edu-institution-name">{edu.institution}</h3>
                    <h4 className="edu-degree-name">{edu.degree}</h4>
                    {edu.stream && <div className="edu-stream">Stream: {edu.stream}</div>}
                  </div>

                  {/* Score Highlight Box */}
                  <div className="edu-score-box">
                    <span className="edu-score-type">{edu.scoreType}</span>
                    <span className="edu-score-value gradient-text">{edu.score}</span>
                    <span className="edu-period">
                      <Calendar size={13} style={{ display: 'inline', marginRight: 4 }} />
                      {edu.period}
                    </span>
                  </div>
                </div>

                {/* Key Points */}
                <div className="edu-details-list">
                  {edu.details.map((detail, dIdx) => (
                    <div key={dIdx} className="edu-detail-bullet">
                      <CheckCircle2 size={16} className="text-emerald edu-bullet-icon" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
