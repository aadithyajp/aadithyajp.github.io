import React, { useEffect } from 'react';
import { portfolioData } from '../mock';
import { Moon, Sun, ExternalLink, Mail, Phone, MapPin, Linkedin, Github, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import '../styles/portfolio.css';

const Portfolio = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setMobileMenuOpen(false);
        }
      });
    });
  }, []);

  return (
    <div className="portfolio">
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Header */}
      <header className="portfolio-header">
        <div className="header-container">
          <div className="brand">
            <svg className="brand-mark" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Brand">
              <rect x="4" y="4" width="24" height="24" rx="6" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 16L16 12L20 16M16 12V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="brand-name">{portfolioData.personal.name}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-primary" aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#case-studies">Case Studies</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-actions">
            <button 
              onClick={toggleTheme} 
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <Button variant="outline" size="sm" asChild>
              <a href="#contact">Contact me</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="nav-mobile" aria-label="Mobile">
            <a href="#work" onClick={() => setMobileMenuOpen(false)}>Work</a>
            <a href="#case-studies" onClick={() => setMobileMenuOpen(false)}>Case Studies</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </nav>
        )}
      </header>

      <main id="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <p className="eyebrow">{portfolioData.personal.role}</p>
                <h1 className="hero-headline">{portfolioData.personal.tagline}</h1>
                <p className="hero-lede">{portfolioData.personal.summary}</p>
                <div className="hero-actions">
                  <Button size="lg" asChild>
                    <a href="#case-studies">See case studies</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin size={18} />
                      Open LinkedIn
                    </a>
                  </Button>
                </div>
              </div>

              <Card className="hero-card">
                <h3 className="hero-card-title">{portfolioData.metrics.title}</h3>
                <p className="hero-card-desc">{portfolioData.metrics.description}</p>
                <div className="metrics-grid">
                  {portfolioData.metrics.stats.map((stat, idx) => (
                    <div key={idx} className="metric-item">
                      <div className="metric-value">{stat.value}</div>
                      <div className="metric-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="work-section">
          <div className="container">
            <p className="kicker">What I do.</p>
            <h2 className="section-headline">{portfolioData.operatingSystem.title}</h2>
            <p className="section-lede">{portfolioData.operatingSystem.subtitle}</p>

            <div className="proof-grid">
              {portfolioData.operatingSystem.principles.map((principle, idx) => (
                <Card key={idx} className="principle-card">
                  <h3 className="principle-title">{principle.title}</h3>
                  <p className="principle-desc">{principle.description}</p>
                  <div className="tag-list">
                    {principle.tags.map((tag, tagIdx) => (
                      <Badge key={tagIdx} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="case-studies-section">
          <div className="wide">
            <p className="kicker">Selected work.</p>
            <h2 className="section-headline">Case studies that tell the real story.</h2>
            <p className="section-lede">These aren't just project descriptions—they're proof. Each case shows the problem I solved, the product I built, and the measurable impact it delivered.</p>

            <div className="case-grid">
              {portfolioData.caseStudies.map((caseStudy, idx) => (
                <Card key={idx} className="case-card">
                  <div className="case-meta">
                    <span>{caseStudy.client}</span>
                    <span className="meta-separator">•</span>
                    <span>{caseStudy.domain}</span>
                    <span className="meta-separator">•</span>
                    <span className="status-badge">{caseStudy.status}</span>
                  </div>
                  <h3 className="case-title">{caseStudy.title}</h3>
                  <p className="case-desc">{caseStudy.description}</p>
                  <ul className="impact-list">
                    {caseStudy.impacts.map((impact, impactIdx) => (
                      <li key={impactIdx}>{impact}</li>
                    ))}
                  </ul>
                  <div className="tag-list">
                    {caseStudy.tags.map((tag, tagIdx) => (
                      <Badge key={tagIdx} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience-section">
          <div className="container">
            <p className="kicker">Experience.</p>
            <h2 className="section-headline">Career timeline.</h2>
            <p className="section-lede">My product journey across DevOps platforms, payments, and travel-tech—focused on building products that solve real workflow problems.</p>

            <div className="timeline-grid">
              {portfolioData.experience.map((exp, idx) => (
                <Card key={idx} className="timeline-item">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role">{exp.role}</h3>
                      <p className="timeline-company">{exp.company}</p>
                    </div>
                    <p className="timeline-period">{exp.period}</p>
                  </div>
                  <p className="timeline-desc">{exp.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <div className="wide">
            <p className="kicker">Capability stack.</p>
            <h2 className="section-headline">What I bring across product environments.</h2>
            <p className="section-lede">I don't just ship features—I bring a full stack of product, technical, and business capabilities. Here's what I work with:</p>

            <div className="skills-grid">
              {portfolioData.skills.map((skillBlock, idx) => (
                <Card key={idx} className="skill-block">
                  <h3 className="skill-category">{skillBlock.category}</h3>
                  <ul className="skill-list">
                    {skillBlock.skills.map((skill, skillIdx) => (
                      <li key={skillIdx}>{skill}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Extensions Section */}
        <section className="extensions-section">
          <div className="container">
            <p className="kicker">Extended profile.</p>
            <h2 className="section-headline">More than a standard product portfolio.</h2>
            <p className="section-lede">My background spans analytics, data science, and multiple market verticals—giving me a broader toolkit for product decisions.</p>

            <div className="extensions-grid">
              {portfolioData.portfolioExtensions.map((extension, idx) => (
                <Card key={idx} className="extension-card">
                  <h3 className="extension-title">{extension.title}</h3>
                  <p className="extension-desc">{extension.description}</p>
                  {extension.links && (
                    <div className="extension-links">
                      {extension.links.map((link, linkIdx) => (
                        <a key={linkIdx} href={link.url} className="extension-link">
                          {link.label}
                          <ExternalLink size={16} />
                        </a>
                      ))}
                    </div>
                  )}
                  {extension.tags && (
                    <div className="tag-list">
                      {extension.tags.map((tag, tagIdx) => (
                        <Badge key={tagIdx} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="container about-container">
            <div className="about-content">
              <p className="kicker">About.</p>
              <h2 className="section-headline">{portfolioData.about.title}</h2>
              {portfolioData.about.content.map((paragraph, idx) => (
                <p key={idx} className="about-paragraph">{paragraph}</p>
              ))}
            </div>
            <div className="about-quote">
              <blockquote>
                <p>{portfolioData.about.quote}</p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <p className="kicker">Contact.</p>
            <h2 className="section-headline">Built for hiring conversations, referrals, and direct outreach.</h2>
            <p className="section-lede">If you're hiring for product roles in DevOps, cloud platforms, or technical B2B SaaS—or if you want to discuss product strategy—reach out.</p>

            <Card className="contact-card">
              <div className="contact-grid">
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <div>
                    <p className="contact-label">Email</p>
                    <a href={`mailto:${portfolioData.personal.email}`} className="contact-value">{portfolioData.personal.email}</a>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <div>
                    <p className="contact-label">Phone</p>
                    <a href={`tel:${portfolioData.personal.phone}`} className="contact-value">{portfolioData.personal.phone}</a>
                  </div>
                </div>
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <div>
                    <p className="contact-label">Location</p>
                    <p className="contact-value">{portfolioData.personal.location}</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Linkedin className="contact-icon" />
                  <div>
                    <p className="contact-label">LinkedIn</p>
                    <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-value">View profile</a>
                  </div>
                </div>
                <div className="contact-item">
                  <Github className="contact-icon" />
                  <div>
                    <p className="contact-label">GitHub</p>
                    <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="contact-value">View profile</a>
                  </div>
                </div>
                <div className="contact-item contact-recognition">
                  <div>
                    <p className="contact-label">Recognition</p>
                    <p className="contact-value">{portfolioData.personal.recognition}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="container">
          <p>Platform product owner focused on DevOps, cloud modernization, and enterprise SaaS. Building products that solve real workflow problems—with outcomes you can measure.</p>
          <p className="footer-copy">© 2025 {portfolioData.personal.name}. Built for hiring conversations and product leadership opportunities.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;