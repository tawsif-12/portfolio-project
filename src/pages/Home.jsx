import { FaArrowRight, FaGithub, FaLinkedin, FaGraduationCap, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaAward, FaDownload } from 'react-icons/fa';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { resume } from '../data/resume';
import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';
import SkillBadge from '../components/SkillBadge';
import { useState } from 'react';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const topSkills = [
    ...skills.programmingLanguages.slice(0, 4),
    ...skills.aiDataScience.slice(0, 3),
    ...skills.database.slice(0, 2),
  ];

  // Get unique categories
  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  // Filter projects
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter((project) => project.category === selectedCategory);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume.pdfUrl;
    link.download = 'resume.pdf';
    link.click();
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="bg-theme-primary relative overflow-hidden" style={{ transition: 'background-color 0.3s ease' }}>
        <div className="section-container min-h-[80vh] flex items-center relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            {/* Text Left */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-theme-primary">
                Hi, I'm{' '}
                <span className="text-coral">{profile.name}</span>
              </h1>
              <div className="section-divider"></div>
              <p className="text-2xl mb-6 text-theme-primary">
                {profile.tagline}
              </p>
              <p className="text-lg mb-8 max-w-xl text-theme-secondary font-medium">
                CSE student passionate about AI, ML, and Data Science. I build data-driven applications, explore new technologies, and aim to create intelligent solutions with real-world impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollToSection('projects')} className="btn-primary">
                  View My Work <FaArrowRight className="inline ml-2" />
                </button>
                <button onClick={() => scrollToSection('contact')} className="btn-secondary">
                  Get In Touch
                </button>
              </div>
              <div className="flex space-x-4 mt-8">
                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <FaGithub className="w-8 h-8" />
                </a>
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <FaLinkedin className="w-8 h-8" />
                </a>
              </div>
            </div>
            
            {/* Image Right with Decorative Elements */}
            <div className="flex justify-center md:justify-end relative">
              {/* Left angle bracket decoration */}
              <div 
                className="absolute font-bold select-none pointer-events-none"
                style={{
                  color: '#e8533a',
                  fontSize: '12rem',
                  lineHeight: '1',
                  left: '-8rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  opacity: '0.3',
                  fontWeight: '300',
                  zIndex: '0'
                }}
              >
                &lt;
              </div>
              
              {/* Circular coral ring background with shadow */}
              <div className="relative flex items-center justify-center" style={{ zIndex: '1' }}>
                <div 
                  className="absolute rounded-full"
                  style={{
                    width: '400px',
                    height: '400px',
                    border: '35px solid #e8533a',
                    opacity: '0.8',
                    boxShadow: '0 0 60px rgba(232, 83, 58, 0.5), 0 0 100px rgba(232, 83, 58, 0.3), inset 0 0 40px rgba(232, 83, 58, 0.5), inset 0 0 80px rgba(232, 83, 58, 0.3)'
                  }}
                ></div>
                
                {/* Profile Image - centered */}
                {profile.avatar ? (
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="relative rounded-full object-cover object-center"
                    style={{ 
                      zIndex: '2',
                      width: '330px',
                      height: '330px'
                    }}
                  />
                ) : (
                  <div className="relative rounded-full bg-theme-card flex items-center justify-center" style={{ zIndex: '2', width: '330px', height: '330px' }}>
                    <span className="text-6xl font-bold text-theme-primary">
                      {profile.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Right angle bracket decoration */}
              <div 
                className="absolute font-bold select-none pointer-events-none"
                style={{
                  color: '#e8533a',
                  fontSize: '12rem',
                  lineHeight: '1',
                  right: '-8rem',
                  bottom: '10%',
                  opacity: '0.3',
                  fontWeight: '300',
                  zIndex: '0'
                }}
              >
                &gt;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container bg-theme-card" style={{ transition: 'background-color 0.3s ease' }}>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <SectionHeader
            title="About Me"
          />
          <p className="text-xl leading-relaxed text-theme-secondary mt-6">
            {profile.bio}
          </p>
        </div>

        {/* Education */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-3xl font-bold mb-8 text-theme-primary text-center">Education</h3>
          {profile.education.map((edu) => (
            <div key={edu.id} className="card mb-6">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-2xl font-semibold mb-1 text-theme-primary">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-coral font-medium mb-2">
                    {edu.school}
                  </p>
                  <p className="text-theme-secondary">
                    {edu.description}
                  </p>
                </div>
                <div className="text-right">
                  <p className="flex items-center text-theme-secondary">
                    <FaGraduationCap className="mr-2" />
                    {edu.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container bg-theme-primary" style={{ transition: 'background-color 0.3s ease' }}>
        <SectionHeader
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with"
        />
        
        {/* Programming Languages */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-theme-primary">
            Programming Languages
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.programmingLanguages.map((skill) => (
              <SkillBadge
                key={skill.name}
                skill={skill}
                category="frontend"
              />
            ))}
          </div>
        </div>

        {/* AI & Data Science */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-theme-primary">
            AI & Data Science
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.aiDataScience.map((skill) => (
              <SkillBadge
                key={skill.name}
                skill={skill}
                category="backend"
              />
            ))}
          </div>
        </div>

        {/* Database Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-theme-primary">
            Databases
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.database.map((skill) => (
              <SkillBadge
                key={skill.name}
                skill={skill}
                category="database"
              />
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-theme-primary">
            Tools & Platforms
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.tools.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} category="tools" />
            ))}
          </div>
        </div>

        {/* Frontend Development */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-theme-primary">
            Frontend Development
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.frontend.map((skill) => (
              <SkillBadge
                key={skill.name}
                skill={skill}
                category="other"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container bg-theme-card" style={{ transition: 'background-color 0.3s ease' }}>
        <SectionHeader
          title="My Projects"
          subtitle="A collection of projects showcasing my skills and passion for development"
        />
        
        {/* Filters */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-theme-primary">
            Filter by Category
          </h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-coral text-white'
                    : 'tech-badge'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-theme-secondary">
              No projects found with the selected filters.
            </p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Resume/Certifications Section */}
      <section id="resume" className="section-container bg-theme-primary" style={{ transition: 'background-color 0.3s ease' }}>
        <SectionHeader 
          title="Certifications & Resume" 
          subtitle="Professional credentials and downloadable resume"
        />
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          {resume.certifications.map((cert) => (
            <div key={cert.id} className="card">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-coral text-white rounded-lg flex items-center justify-center">
                  <FaAward className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1 text-theme-primary">
                    {cert.name}
                  </h3>
                  <p className="text-coral text-sm mb-1">{cert.issuer}</p>
                  <p className="text-sm text-theme-secondary">
                    Issued: {cert.date}
                  </p>
                  {cert.credentialId && (
                    <p className="text-xs mt-2 text-theme-muted">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Resume */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-theme-primary">Download My Resume</h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-xl mb-8 text-theme-secondary">
            Get a PDF copy of my complete resume for your records
          </p>
          <button
            onClick={handleDownload}
            className="btn-primary"
          >
            <FaDownload className="mr-2 inline" />
            Download PDF
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container bg-theme-card" style={{ transition: 'background-color 0.3s ease' }}>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <SectionHeader
            title="Get In Touch"
            subtitle="Have a project in mind? Let's discuss how I can help bring your ideas to life"
          />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            {/* Email */}
            <div className="card flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-coral text-white rounded-lg flex items-center justify-center">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-theme-primary">
                  Email
                </h3>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-coral hover:underline"
                >
                  {profile.email}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="card flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-coral text-white rounded-lg flex items-center justify-center">
                <FaMapMarkerAlt className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-theme-primary">
                  Location
                </h3>
                <p className="text-theme-secondary">
                  {profile.location}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="card">
              <h3 className="font-semibold mb-4 text-theme-primary">
                Connect With Me
              </h3>
              <div className="flex space-x-4 justify-center">
                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-theme-card-alt text-theme-primary rounded-lg flex items-center justify-center hover:bg-coral hover:text-white transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-theme-card-alt text-theme-primary rounded-lg flex items-center justify-center hover:bg-coral hover:text-white transition-colors"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href={profile.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-theme-card-alt text-theme-primary rounded-lg flex items-center justify-center hover:bg-coral hover:text-white transition-colors"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="card border-2 border-coral bg-theme-card-alt">
              <h3 className="font-semibold mb-2 text-theme-primary">
                📅 Availability
              </h3>
              <p className="text-theme-secondary">
                Currently available for freelance projects and full-time
                opportunities. Response time: within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-container bg-theme-primary" style={{ transition: 'background-color 0.3s ease' }}>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-theme-primary">
            Let's Work Together
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-xl mb-8 text-theme-secondary">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <button onClick={() => scrollToSection('contact')} className="btn-primary">
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
