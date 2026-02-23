import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCalendar, FaTag, FaCode } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));
  const [activeImage, setActiveImage] = useState(0);
  const [screenshotRef, isScreenshotVisible] = useScrollAnimation({ threshold: 0.1 });
  const [detailsRef, isDetailsVisible] = useScrollAnimation({ threshold: 0.1 });

  // Scroll to top when component mounts or project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!project) {
    return (
      <div className="section-container text-center bg-theme-primary" style={{ transition: 'background-color 0.3s ease' }}>
        <h1 className="text-4xl font-bold text-theme-primary mb-4">
          Project Not Found
        </h1>
        <p className="text-theme-secondary mb-8">
          The project you're looking for doesn't exist.
        </p>
        <Link to="/projects" className="btn-primary">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-theme-primary" style={{ transition: 'background-color 0.3s ease' }}>
      {/* Header */}
      <section className="bg-theme-card" style={{ transition: 'background-color 0.3s ease' }}>
        <div className="section-container">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-theme-secondary hover:text-coral mb-6 transition-colors animate-fade-in"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
          <div className="max-w-4xl animate-fade-in-scale">
            <div className="flex items-center space-x-3 mb-4">
              {project.featured && (
                <span className="bg-coral text-white text-sm px-3 py-1 rounded-full shadow-lg">
                  Featured
                </span>
              )}
              <span className="bg-theme-card-alt text-theme-primary text-sm px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-theme-primary mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-theme-secondary mb-6">
              {project.description}
            </p>
            <div className="flex items-center text-theme-secondary mb-6">
              <FaCalendar className="mr-2" />
              {project.date}
            </div>
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary hover:scale-105 transform transition-all"
                >
                  <FaExternalLinkAlt className="inline mr-2" />
                  View Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary hover:scale-105 transform transition-all"
                >
                  <FaGithub className="inline mr-2" />
                  View Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="section-container bg-theme-primary" style={{ transition: 'background-color 0.3s ease' }}>
          <div
            ref={screenshotRef}
            className={`${isScreenshotVisible ? 'scroll-scale visible' : 'scroll-scale'}`}
          >
            <h2 className="text-3xl font-bold text-theme-primary mb-8">
              <FaTag className="inline mr-3" />
              Project Screenshots
            </h2>
            
            {/* Main Active Screenshot */}
            <div className="mb-6 rounded-lg overflow-hidden shadow-2xl bg-theme-card-alt hover:shadow-coral transition-shadow duration-300">
              <img
                src={project.screenshots[activeImage]}
                alt={`${project.title} screenshot ${activeImage + 1}`}
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/800x450?text=Screenshot+${activeImage + 1}`;
                }}
              />
            </div>
            
            {/* Thumbnail Navigation */}
            {project.screenshots.length > 1 && (
              <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {project.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`rounded-lg overflow-hidden shadow-lg bg-theme-card-alt cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                      activeImage === index ? 'ring-4 ring-coral scale-105' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={screenshot}
                      alt={`${project.title} thumbnail ${index + 1}`}
                      className="w-full h-24 object-cover"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/400x225?text=Screenshot+${index + 1}`;
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="section-container bg-theme-card" style={{ transition: 'background-color 0.3s ease' }}>
        <div
          ref={detailsRef}
          className={`grid lg:grid-cols-3 gap-12 ${isDetailsVisible ? 'scroll-scale visible' : 'scroll-scale'}`}
        >
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-theme-primary mb-6">
              <FaCode className="inline mr-3" />
              About This Project
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-theme-secondary text-lg leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          </div>

          <div>
            {/* Tech Stack */}
            <div className="card mb-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-theme-primary mb-4">
                Tech Stack
              </h3>
              <div className="space-y-2">
                {project.techStack.map((tech, index) => (
                  <div
                    key={tech}
                    className="flex items-center px-3 py-2 bg-theme-card-alt rounded-lg hover:bg-coral hover:text-white transition-all duration-300 transform hover:translate-x-2"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="w-2 h-2 bg-coral rounded-full mr-3" />
                    <span>
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="card hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-theme-primary mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-theme-card-alt text-theme-secondary rounded-full text-sm hover:bg-coral hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="section-container bg-theme-primary" style={{ transition: 'background-color 0.3s ease' }}>
        <h2 className="text-3xl font-bold text-theme-primary mb-8 text-center">
          More Projects
        </h2>
        <div className="flex justify-center">
          <Link to="/projects" className="btn-primary hover:scale-105 transform transition-all">
            View All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
