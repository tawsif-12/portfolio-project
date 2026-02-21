import { Link } from 'react-router-dom';
import { FaClock, FaCalendar } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function BlogCard({ post }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div ref={ref} className={`card group hover:scale-105 hover:shadow-xl transform transition-all duration-500 ${isVisible ? 'scroll-fade-in visible' : 'scroll-fade-in'}`}>
      <Link to={`/blog/${post.slug}`}>
        <div className="mb-4">
          {post.featured && (
            <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded-full mb-2">
              Featured
            </span>
          )}
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors mb-2">
            {post.title}
          </h3>
          
          {/* Meta Info */}
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
            <div className="flex items-center">
              <FaCalendar className="mr-1" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            {post.readTime && (
              <div className="flex items-center">
                <FaClock className="mr-1" />
                {post.readTime}
              </div>
            )}
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="text-primary hover:text-primary-dark font-medium transition-colors">
          Read more →
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
