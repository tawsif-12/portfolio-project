import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <div className="card group hover:scale-105 transform transition-all duration-300">
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-200 dark:bg-gray-700 h-48">
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
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span className="text-sm">No image available</span>
          </div>
        )}
        {project.featured && (
          <span className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Project Info */}
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <Link to={`/projects/${project.id}`}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-primary transition-colors">
              {project.title}
            </h3>
          </Link>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs px-2 py-1 text-gray-500">
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
              className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              <FaGithub className="mr-1" /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              <FaExternalLinkAlt className="mr-1" /> Live Demo
            </a>
          )}
          <Link
            to={`/projects/${project.id}`}
            className="flex items-center text-sm text-primary hover:text-primary-dark transition-colors ml-auto"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
