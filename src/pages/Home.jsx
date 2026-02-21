import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';

function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const topSkills = [
    ...skills.programmingLanguages.slice(0, 4),
    ...skills.aiDataScience.slice(0, 3),
    ...skills.database.slice(0, 2),
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-theme-primary relative overflow-hidden" style={{ transition: 'background-color 0.3s ease' }}>
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
              <p className="text-base mb-8 max-w-xl text-theme-secondary">
                {profile.bio}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn-primary">
                  View My Work <FaArrowRight className="inline ml-2" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Get In Touch
                </Link>
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
                    boxShadow: '0 0 60px rgba(232, 83, 58, 0.5), 0 0 100px rgba(232, 83, 58, 0.3), inset 0 0 30px rgba(232, 83, 58, 0.3)'
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

      {/* Featured Projects Section */}
      <section className="section-container bg-theme-card" style={{ transition: 'background-color 0.3s ease' }}>
        <SectionHeader
          title="Featured Projects"
          subtitle="Some of my recent work that I'm most proud of"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </section>

      {/* Skills Snapshot */}
      <section className="section-container bg-theme-primary" style={{ transition: 'background-color 0.3s ease' }}>
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Technologies I work with on a regular basis"
        />
        <div className="scroll-container">
          {topSkills.map((skill) => (
            <div key={skill.name} className="tech-badge">
              <p className="font-medium">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/about" className="btn-outline">
            View All Skills
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-theme-card" style={{ transition: 'background-color 0.3s ease' }}>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-theme-primary">
            Let's Work Together
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-xl mb-8 text-theme-secondary">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <Link to="/contact" className="btn-primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
