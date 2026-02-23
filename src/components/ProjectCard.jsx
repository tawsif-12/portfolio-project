import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function ProjectCard({ project }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`card group hover:scale-105 hover:shadow-2xl transform transition-all duration-500 ${
        isVisible ? 'scroll-scale visible' : 'scroll-scale'
      }`}
    >
      {/* Project Image */}
      <Link to={`/project/${project.id}`} className="block">
        <div className="relative overflow-hidden rounded-lg mb-4 bg-theme-card-alt h-48 cursor-pointer">
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
      </Link>

      {/* Project Info */}
      <div className="flex-1">
        <Link to={`/project/${project.id}`} className="block mb-2">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold text-theme-primary hover:text-coral transition-colors">
              {project.title}
            </h3>
          </div>
        </Link>

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
          <Link
            to={`/project/${project.id}`}
            className="flex items-center text-sm hover:text-coral transition-colors text-theme-secondary font-medium"
          >
            <FaArrowRight className="mr-1" /> View Details
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm hover:text-coral transition-colors text-theme-secondary"
              onClick={(e) => e.stopPropagation()}
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
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="mr-1" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
