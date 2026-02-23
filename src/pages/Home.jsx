import { FaArrowRight, FaGithub, FaLinkedin, FaGraduationCap, FaEnvelope, FaMapMarkerAlt, FaAward, FaDownload, FaUsers, FaHandsHelping, FaProjectDiagram, FaCode, FaChalkboardTeacher, FaTrophy, FaLightbulb, FaUserTie, FaHandshake, FaComments, FaChartLine, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { resume } from '../data/resume';
import { leadership, activities } from '../data/leadership';
import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';
import SkillBadge from '../components/SkillBadge';
import StepArrow from '../components/StepArrow';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ScrollAnimatedCard from '../components/ScrollAnimatedCard';
import { generateResumePDF } from '../utils/resumePdfGenerator';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [leadershipRef, isLeadershipVisible] = useScrollAnimation({ threshold: 0.1, once: true });
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
    generateResumePDF();
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
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
            {/* Text Left */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-theme-primary animate-fade-in-scale">
                Hi, I'm{' '}
                <span className="text-coral animate-text-pulse">{profile.name}</span>
              </h1>
              <div className="section-divider"></div>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 text-theme-primary animate-fade-in-up delay-100">
                {profile.tagline}
              </p>
              <p className="text-base md:text-lg mb-8 max-w-xl text-theme-secondary font-medium animate-fade-in-up delay-200">
                CSE student passionate about AI, ML, and Data Science. I build data-driven applications, explore new technologies, and aim to create intelligent solutions with real-world impact.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 animate-fade-in-up delay-300">
                <button onClick={() => scrollToSection('projects')} className="btn-primary text-sm sm:text-base">
                  View My Work <FaArrowRight className="inline ml-2" />
                </button>
                <button onClick={() => scrollToSection('contact')} className="btn-secondary text-sm sm:text-base">
                  Get In Touch
                </button>
                <button onClick={handleDownload} className="btn-outline text-sm sm:text-base">
                  <FaDownload className="inline mr-2" />
                  <span className="hidden sm:inline">Download </span>Resume
                </button>
              </div>
              <div className="flex space-x-4 mt-8">
                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <FaGithub className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
              </div>
            </div>
            
            {/* Image Right with Decorative Elements */}
            <div className="flex justify-center md:justify-end relative">
              {/* Left angle bracket decoration - hidden on mobile */}
              <div 
                className="hidden lg:block absolute font-bold select-none pointer-events-none"
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
              <div className="relative flex items-center justify-center animate-float" style={{ zIndex: '1' }}>
                <div 
                  className="absolute rounded-full"
                  style={{
                    width: 'min(400px, 80vw)',
                    height: 'min(400px, 80vw)',
                    border: 'min(35px, 7vw) solid #e8533a',
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
                      width: 'min(330px, 70vw)',
                      height: 'min(330px, 70vw)'
                    }}
                  />
                ) : (
                  <div className="relative rounded-full bg-theme-card flex items-center justify-center" style={{ zIndex: '2', width: 'min(330px, 70vw)', height: 'min(330px, 70vw)' }}>
                    <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-theme-primary">
                      {profile.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Right angle bracket decoration - hidden on mobile */}
              <div 
                className="hidden lg:block absolute font-bold select-none pointer-events-none"
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
      <section id="about" className="section-container bg-theme-card">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <SectionHeader
            title="About Me"
          />
          <p className="text-xl leading-relaxed text-theme-secondary mt-6">
            {profile.bio}
          </p>
        </div>

        {/* Education */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-theme-primary text-center animate-fade-in-scale">Education</h3>
          {profile.education.map((edu, index) => (
            <ScrollAnimatedCard key={edu.id} animationType="scale" delay={index * 100}>
              <div className="card mb-6 hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-1 text-theme-primary">
                      {edu.degree}
                    </h3>
                    <p className="text-base sm:text-lg text-coral font-medium mb-2">
                      {edu.school}
                    </p>
                    <p className="text-sm sm:text-base text-theme-secondary">
                      {edu.description}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="flex items-center text-sm sm:text-base text-theme-secondary">
                      <FaGraduationCap className="mr-2" />
                      {edu.period}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimatedCard>
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
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-theme-primary">
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
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-theme-primary">
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
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-theme-primary">
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
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-theme-primary">
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
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-theme-primary">
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

      {/* Leadership & Activities Section */}
      <section id="activities" className="section-container bg-theme-card" style={{ transition: 'background-color 0.3s ease' }}>
        <SectionHeader
          title="Activities & Leadership"
          subtitle="My involvement in leadership roles and extracurricular activities"
        />
        
        {/* Leadership Process - Arrow Steps */}
        <div ref={leadershipRef}>
          <div className="max-w-4xl mx-auto">
            {leadership.map((item, index) => {
              const colors = ["#E8472A", "#9B59B6", "#2ABFBF", "#F5A623"];
              const number = String(index + 1).padStart(2, '0');
              
              return (
                <StepArrow
                  key={item.id}
                  number={number}
                  title={item.role}
                  subtitle={item.organization}
                  description={item.description}
                  period={item.period}
                  achievements={item.achievements}
                  image={item.image}
                  color={colors[index % colors.length]}
                  icon={item.icon}
                  offset={index * 40}
                  delay={index * 0.2}
                  isVisible={isLeadershipVisible}
                />
              );
            })}
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

      {/* Achievements Section */}
      <section id="achievements" className="section-container bg-theme-primary" style={{ transition: 'background-color 0.3s ease' }}>
        <SectionHeader 
          title="Certifications & Achievements" 
          subtitle="Professional credentials and accomplishments"
        />
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {resume.certifications.map((cert) => (
            <ScrollAnimatedCard key={cert.id} animationType="scale" delay={0.1}>
              <Link to={`/certificate/${cert.id}`} className="block">
                <div className="card hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                  {cert.image && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img 
                        src={cert.image} 
                        alt={cert.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-coral text-white rounded-lg flex items-center justify-center">
                      <FaAward className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1 text-theme-primary group-hover:text-coral transition-colors">
                        {cert.name}
                      </h3>
                      <p className="text-coral text-sm mb-1">{cert.issuer}</p>
                      <p className="text-sm text-theme-secondary">
                        Issued: {cert.date}
                      </p>
                      {cert.description && (
                        <p className="text-sm mt-2 text-theme-secondary line-clamp-2">
                          {cert.description}
                        </p>
                      )}
                      {cert.credentialId && (
                        <p className="text-xs mt-2 text-theme-muted">
                          ID: {cert.credentialId}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollAnimatedCard>
          ))}
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
            <a
              href={`mailto:${profile.email}`}
              className="card flex items-start space-x-4 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-coral text-white rounded-lg flex items-center justify-center">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-theme-primary">
                  Email
                </h3>
                <p className="text-coral hover:underline">
                  {profile.email}
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-start space-x-4 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-coral text-white rounded-lg flex items-center justify-center">
                <FaGithub className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-theme-primary">
                  GitHub
                </h3>
                <p className="text-coral hover:underline">
                  View my repositories
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-start space-x-4 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-coral text-white rounded-lg flex items-center justify-center">
                <FaLinkedin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-theme-primary">
                  LinkedIn
                </h3>
                <p className="text-coral hover:underline">
                  Connect with me
                </p>
              </div>
            </a>

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
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
