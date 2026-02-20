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
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="section-container min-h-[80vh] flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{' '}
                <span className="text-primary">{profile.name}</span>
              </h1>
              <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6">
                {profile.tagline}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
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
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  <FaGithub className="w-8 h-8" />
                </a>
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  <FaLinkedin className="w-8 h-8" />
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary to-blue-600 rounded-lg shadow-2xl flex items-center justify-center">
                  {profile.avatar ? (
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <span className="text-white text-6xl font-bold">
                      {profile.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-container bg-white dark:bg-gray-900">
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
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Technologies I work with on a regular basis"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {topSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
            >
              <p className="font-medium text-gray-900 dark:text-white">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/about" className="btn-secondary">
            View All Skills
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-primary text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8 text-blue-100">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
