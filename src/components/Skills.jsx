import { 
  Code2, 
  Sparkles, 
  Users, 
  Clock, 
  Compass, 
  MessageSquare, 
  CheckCircle2, 
  Info,
  Terminal,
  FileCode2,
  Cpu
} from 'lucide-react';
import { technicalSkills, softSkills } from '../data/portfolioData';

const iconMap = {
  Users: Users,
  Clock: Clock,
  Compass: Compass,
  MessageSquare: MessageSquare
};

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag green">
            <Code2 size={14} />
            <span>Capabilities & Competencies</span>
          </span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">
            A transparent overview of my foundational programming skills and interpersonal competencies.
          </p>
        </div>

        {/* Transparent Disclaimer Banner */}
        <div className="skills-notice-banner glass-card">
          <Info size={20} className="notice-icon text-blue" />
          <div className="notice-content">
            <span className="notice-title">Foundational Programming Proficiency</span>
            <p className="notice-text">
              My technical programming skills (Python, HTML, CSS, Java) are at the <strong>basic / foundational level</strong>. I am actively strengthening these fundamentals through coursework, independent practice, and problem solving.
            </p>
          </div>
        </div>

        {/* Skills Two-Column Layout */}
        <div className="skills-main-grid">
          {/* Column 1: Technical Skills */}
          <div className="skills-column">
            <div className="skills-col-header">
              <div className="skills-col-title-group">
                <Terminal size={22} className="text-blue" />
                <h3>Technical Skills</h3>
              </div>
              <span className="skill-level-badge">Foundational / Basic</span>
            </div>

            <div className="tech-skills-stack">
              {technicalSkills.map((skill, idx) => (
                <div key={idx} className="tech-skill-card glass-card">
                  <div className="tech-skill-top">
                    <div className="tech-skill-name-wrap">
                      <FileCode2 size={20} className="text-blue skill-card-icon" />
                      <div>
                        <h4 className="tech-skill-name">{skill.name}</h4>
                        <span className="tech-skill-cat">{skill.category}</span>
                      </div>
                    </div>
                    <span className="skill-basic-pill">
                      {skill.level}
                    </span>
                  </div>

                  <p className="tech-skill-description">
                    {skill.description}
                  </p>

                  <div className="skill-progress-wrap">
                    <div className="skill-progress-bar-bg">
                      <div 
                        className="skill-progress-fill" 
                        style={{ width: `${skill.proficiency}%` }}
                        aria-valuenow={skill.proficiency}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="skill-progress-labels">
                      <span>Foundational</span>
                      <span>{skill.proficiency}% Baseline</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Soft Skills */}
          <div className="skills-column">
            <div className="skills-col-header">
              <div className="skills-col-title-group">
                <Users size={22} className="text-emerald" />
                <h3>Soft Skills</h3>
              </div>
              <span className="skill-level-badge green">Interpersonal & Agile</span>
            </div>

            <div className="soft-skills-grid">
              {softSkills.map((skill, idx) => {
                const IconComponent = iconMap[skill.icon] || Sparkles;
                return (
                  <div key={idx} className="soft-skill-card glass-card">
                    <div className="soft-icon-circle">
                      <IconComponent size={22} className="text-emerald" />
                    </div>
                    <h4 className="soft-skill-title">{skill.name}</h4>
                    <p className="soft-skill-desc">{skill.description}</p>
                    <div className="soft-skill-footer">
                      <CheckCircle2 size={14} className="text-emerald" />
                      <span>Academic & Team Project Proven</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Practical Learning Commitment Card */}
            <div className="learning-growth-card glass-card">
              <div className="growth-icon-wrap">
                <Cpu size={24} className="text-blue" />
              </div>
              <div>
                <h4 className="growth-title">Continuous Growth Mindset</h4>
                <p className="growth-desc">
                  Focused on translating theoretical Computer Science fundamentals into practical code. Regularly exploring documentation, participating in coding exercises, and expanding my front-end and analytics toolkit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
