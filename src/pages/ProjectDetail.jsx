import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCalendar } from 'react-icons/fa';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="section-container text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Project Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The project you're looking for doesn't exist.
        </p>
        <Link to="/projects" className="btn-primary">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="section-container">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary mb-6 transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-4">
              {project.featured && (
                <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">
                  Featured
                </span>
              )}
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              {project.description}
            </p>
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
              <FaCalendar className="mr-2" />
              {project.date}
            </div>
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
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
                  className="btn-secondary"
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
        <section className="section-container bg-white dark:bg-gray-900">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Screenshots
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-700 aspect-video"
              >
                <img
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/800x450?text=Screenshot+${index + 1}`;
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              About This Project
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          </div>

          <div>
            {/* Tech Stack */}
            <div className="card mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Tech Stack
              </h3>
              <div className="space-y-2">
                {project.techStack.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
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
      <section className="section-container bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          More Projects
        </h2>
        <div className="flex justify-center">
          <Link to="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
