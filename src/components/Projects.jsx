import { 
  FolderGit2, 
  Clock, 
  CheckCircle2, 
  Code2, 
  ArrowUpRight,
  Info
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={14} />
            <span>Academic & Personal Work</span>
          </span>
          <h2 className="section-title">
            Featured & <span className="gradient-text">Planned Projects</span>
          </h2>
          <p className="section-subtitle">
            An authentic roadmap of active development and upcoming academic software projects.
          </p>
        </div>

        {/* Project Transparency Notice */}
        <div className="projects-notice-banner glass-card">
          <Info size={18} className="notice-icon text-blue" />
          <p>
            <strong>Transparent Project Statuses:</strong> To accurately reflect my academic journey, upcoming projects are strictly designated as <em>Planned</em>. Details, code repositories, and deployments will be updated as development progresses.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => {
            const isActive = project.statusType === 'active';

            return (
              <div 
                key={project.id} 
                className={`project-card glass-card ${isActive ? 'active-project' : 'planned-project'}`}
              >
                {/* Top Status Strip */}
                <div className="project-top-strip">
                  <div className="project-id-badge">
                    <Code2 size={14} className={isActive ? 'text-blue' : 'text-emerald'} />
                    <span>Project #0{project.id}</span>
                  </div>

                  <span className={`project-status-pill ${project.statusType}`}>
                    {isActive ? (
                      <>
                        <span className="status-dot-active"></span>
                        {project.status}
                      </>
                    ) : (
                      <>
                        <Clock size={13} />
                        {project.status}
                      </>
                    )}
                  </span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-desc">{project.description}</p>

                {/* Planned / Implemented Highlights */}
                <div className="project-highlights">
                  <span className="highlights-heading">
                    {isActive ? 'Implemented Features:' : 'Planned Scope & Highlights:'}
                  </span>
                  <ul className="highlights-list">
                    {project.highlights.map((h, hIdx) => (
                      <li key={hIdx}>
                        <CheckCircle2 size={14} className={isActive ? 'text-blue' : 'text-emerald'} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Chips */}
                <div className="project-tech-stack">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Link */}
                <div className="project-footer-action">
                  {isActive ? (
                    <a href="#home" className="project-link-btn active">
                      <span>Currently Viewing Live App</span>
                      <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <div className="project-planned-badge">
                      <Clock size={14} />
                      <span>Development Scheduled Soon</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
