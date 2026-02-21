import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <div className="card group hover:scale-105 transform transition-all duration-300">
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-4 bg-theme-card-alt h-48">
        {project.screenshots && project.screenshots[0] ? (
          <img
            src={project.screenshots[0]}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x200?text=' + project.title;
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-theme-muted">
            <span className="text-sm">No image available</span>
          </div>
        )}
        {project.featured && (
          <span className="absolute top-2 right-2 bg-coral text-white text-xs px-2 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Project Info */}
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <Link to={`/projects/${project.id}`}>
            <h3 className="text-xl font-semibold hover:text-coral transition-colors text-theme-primary">
              {project.title}
            </h3>
          </Link>
        </div>

        <p className="text-sm mb-4 line-clamp-2 text-theme-secondary">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-theme-card-alt text-theme-secondary"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs px-2 py-1 text-theme-muted">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm hover:text-coral transition-colors text-theme-secondary"
            >
              <FaGithub className="mr-1" /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm hover:text-coral transition-colors text-theme-secondary"
            >
              <FaExternalLinkAlt className="mr-1" /> Live Demo
            </a>
          )}
          <Link
            to={`/projects/${project.id}`}
            className="flex items-center text-sm text-coral hover:text-coral-light transition-colors ml-auto"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
