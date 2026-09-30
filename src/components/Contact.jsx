import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  ExternalLink, 
  MessageSquare, 
  Sparkles 
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setModalOpen(true);
    }
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Hello Ilayaraja,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
  )}`;

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag green">
            <Mail size={14} />
            <span>Get In Touch</span>
          </span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Interested in discussing an entry-level software role, an internship opportunity, or academic collaboration? Reach out directly!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Information */}
          <div className="contact-info-column">
            <h3 className="contact-column-title">Direct Contact Information</h3>
            <p className="contact-column-desc">
              Feel free to call, email, or message me on LinkedIn. I actively check my inbox and appreciate any feedback or opportunities.
            </p>

            <div className="contact-cards-list">
              {/* Email Card */}
              <div className="contact-item-card glass-card">
                <div className="contact-item-icon-box">
                  <Mail size={22} className="text-blue" />
                </div>
                <div className="contact-item-details">
                  <span className="contact-item-label">Email Address</span>
                  <a href={`mailto:${personalData.email}`} className="contact-item-value link">
                    {personalData.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="contact-copy-btn"
                  onClick={() => handleCopy(personalData.email, 'email')}
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? (
                    <CheckCircle2 size={16} className="text-emerald" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="contact-item-card glass-card">
                <div className="contact-item-icon-box">
                  <Phone size={22} className="text-emerald" />
                </div>
                <div className="contact-item-details">
                  <span className="contact-item-label">Phone / WhatsApp</span>
                  <a href={`tel:${personalData.phone}`} className="contact-item-value link">
                    {personalData.phone}
                  </a>
                </div>
                <button
                  type="button"
                  className="contact-copy-btn"
                  onClick={() => handleCopy(personalData.phone, 'phone')}
                  title="Copy phone number to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedField === 'phone' ? (
                    <CheckCircle2 size={16} className="text-emerald" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* LinkedIn Card */}
              <div className="contact-item-card glass-card">
                <div className="contact-item-icon-box">
                  <LinkedinIcon size={22} className="text-blue" />
                </div>
                <div className="contact-item-details">
                  <span className="contact-item-label">LinkedIn Profile</span>
                  <a 
                    href={personalData.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-item-value link"
                  >
                    linkedin.com/in/ilayaraja-muthusamy
                  </a>
                </div>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-copy-btn"
                  title="Open LinkedIn profile"
                  aria-label="Open LinkedIn"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Location Card */}
              <div className="contact-item-card glass-card">
                <div className="contact-item-icon-box">
                  <MapPin size={22} className="text-emerald" />
                </div>
                <div className="contact-item-details">
                  <span className="contact-item-label">Location</span>
                  <span className="contact-item-value">
                    {personalData.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Real Validation */}
          <div className="contact-form-column">
            <div className="contact-form-wrapper glass-card">
              <div className="form-header">
                <MessageSquare size={20} className="text-blue" />
                <h3>Send a Message</h3>
              </div>
              <p className="form-subtext">
                Fill in the details below. We'll format your inquiry so you can transmit it directly.
              </p>

              <form onSubmit={handleSubmit} noValidate className="contact-form">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                  />
                  {errors.name && (
                    <div className="form-error-msg">
                      <AlertCircle size={14} />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. johndoe@example.com"
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                  />
                  {errors.email && (
                    <div className="form-error-msg">
                      <AlertCircle size={14} />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineer Opportunity / Project Inquiry"
                    className={`form-input ${errors.subject ? 'input-error' : ''}`}
                  />
                  {errors.subject && (
                    <div className="form-error-msg">
                      <AlertCircle size={14} />
                      <span>{errors.subject}</span>
                    </div>
                  )}
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                  ></textarea>
                  {errors.message && (
                    <div className="form-error-msg">
                      <AlertCircle size={14} />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary form-submit-btn">
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Transparent Communication Modal (Honoring "Do not pretend the form sends messages without a backend") */}
        {modalOpen && (
          <div className="cert-modal-backdrop" onClick={() => setModalOpen(false)}>
            <div className="cert-modal-card glass-card contact-submit-modal" onClick={(e) => e.stopPropagation()}>
              <div className="cert-modal-header">
                <div className="cert-issuer-badge">
                  <Sparkles size={16} className="text-emerald" />
                  <span>Message Ready for Transmission</span>
                </div>
                <button 
                  type="button"
                  className="modal-close-btn" 
                  onClick={() => setModalOpen(false)}
                >
                  ✕
                </button>
              </div>

              <div className="cert-modal-body">
                <h3 className="cert-modal-title">Ready to Send Your Message</h3>
                <p className="modal-transparency-note">
                  <strong>Notice:</strong> This portfolio runs directly in your browser without a backend mail server to prevent unauthorized relaying. Choose how you would like to deliver your message to <strong>{personalData.email}</strong>:
                </p>

                <div className="draft-preview-box">
                  <div><strong>From:</strong> {formData.name} ({formData.email})</div>
                  <div><strong>Subject:</strong> {formData.subject}</div>
                  <div className="draft-body-preview">
                    <strong>Message:</strong>
                    <p>{formData.message}</p>
                  </div>
                </div>
              </div>

              <div className="cert-modal-footer">
                <a
                  href={mailtoUrl}
                  className="btn btn-primary btn-sm"
                  onClick={() => setModalOpen(false)}
                >
                  <Mail size={15} />
                  <span>Open in Default Mail Client</span>
                </a>

                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    const fullText = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
                    handleCopy(fullText, 'modalDraft');
                  }}
                >
                  <Copy size={15} />
                  <span>
                    {copiedField === 'modalDraft' ? 'Draft Copied!' : 'Copy Draft to Clipboard'}
                  </span>
                </button>

                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setModalOpen(false)}
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
