import { useState } from 'react';
import { 
  Award, 
  Search, 
  ExternalLink, 
  CheckCircle, 
  ShieldCheck, 
  Image as ImageIcon,
  Info
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalCert, setActiveModalCert] = useState(null);

  const categories = ['All', 'UI/UX Design', 'Web Development', 'Data Analytics', 'Machine Learning', 'AI & Career'];

  const filteredCerts = certificationsData.filter((cert) => {
    const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
    const matchesSearch = 
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="certifications" className="section certs-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag green">
            <Award size={14} />
            <span>Professional Credentials</span>
          </span>
          <h2 className="section-title">
            Verified <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            14 verified professional credentials completed across UI/UX Design, Front-End Web Development, Machine Learning, and Google Data Analytics.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="certs-filter-wrapper glass-card">
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search by certificate title, skill, or issuer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="cert-search-input"
            />
            {searchQuery && (
              <button 
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
              >
                Clear
              </button>
            )}
          </div>

          <div className="category-pills">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                className={`category-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
                {cat === 'All' && <span className="pill-count">({certificationsData.length})</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Responsive Grid */}
        <div className="certs-grid">
          {filteredCerts.length > 0 ? (
            filteredCerts.map((cert) => (
              <div key={cert.id} className="cert-card glass-card">
                <div className="cert-card-top">
                  <div className="cert-issuer-badge">
                    <ShieldCheck size={14} className="text-emerald" />
                    <span>{cert.issuer}</span>
                  </div>
                  <span className="cert-cat-tag">{cert.category}</span>
                </div>

                <h3 className="cert-card-title">{cert.title}</h3>

                <div className="cert-skills-wrap">
                  {cert.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="cert-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="cert-card-footer">
                  <div className="cert-status-info">
                    <CheckCircle size={14} className="text-emerald" />
                    <span>Completed & Verified</span>
                  </div>

                  <button
                    type="button"
                    className="cert-verify-btn"
                    onClick={() => setActiveModalCert(cert)}
                    title="View details / Verification link"
                  >
                    <span>View Details</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results-box glass-card">
              <p>No certifications found matching "{searchQuery}".</p>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Certificate Details Modal */}
        {activeModalCert && (
          <div className="cert-modal-backdrop" onClick={() => setActiveModalCert(null)}>
            <div className="cert-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
              <div className="cert-modal-header">
                <div className="cert-issuer-badge">
                  <ShieldCheck size={16} className="text-emerald" />
                  <span>{activeModalCert.issuer} Verified Credential</span>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setActiveModalCert(null)}
                >
                  ✕
                </button>
              </div>

              <div className="cert-modal-body">
                <h3 className="cert-modal-title">{activeModalCert.title}</h3>
                <div className="cert-modal-category">
                  Category: <strong>{activeModalCert.category}</strong>
                </div>

                <div className="cert-modal-skills-section">
                  <span className="section-label">Covered Competencies:</span>
                  <div className="cert-skills-wrap">
                    {activeModalCert.skills.map((s, idx) => (
                      <span key={idx} className="cert-skill-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {activeModalCert.image ? (
                  <div className="cert-image-preview">
                    <img src={activeModalCert.image} alt={activeModalCert.title} />
                  </div>
                ) : (
                  <div className="cert-placeholder-banner">
                    <ImageIcon size={28} className="text-blue" />
                    <div>
                      <strong>Certificate Image / Verification Link</strong>
                      <p>
                        To attach your certificate PDF/image or direct Coursera/IBM verification URL, edit{' '}
                        <code>src/data/portfolioData.js</code> and update <code>credentialUrl</code> or <code>image</code>.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="cert-modal-footer">
                {activeModalCert.credentialUrl ? (
                  <a
                    href={activeModalCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <span>Open Official Verification</span>
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="cert-request-note">
                    <Info size={14} />
                    <span>Official credential verification available on request via email</span>
                  </span>
                )}
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setActiveModalCert(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
