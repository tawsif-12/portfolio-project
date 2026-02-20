import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import {
  FaArrowLeft,
  FaCalendar,
  FaClock,
  FaUser,
  FaShareAlt,
} from 'react-icons/fa';

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="section-container text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Post Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The blog post you're looking for doesn't exist.
        </p>
        <Link to="/blog" className="btn-primary">
          Back to Blog
        </Link>
      </div>
    );
  }

  // Get related posts (same tags)
  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        p.tags.some((tag) => post.tags.includes(tag))
    )
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

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
          <div className="max-w-4xl mx-auto">
            {post.featured && (
              <span className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full mb-4">
                Featured
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center">
                <FaUser className="mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <FaCalendar className="mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              {post.readTime && (
                <div className="flex items-center">
                  <FaClock className="mr-2" />
                  {post.readTime}
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              <FaShareAlt className="mr-2" />
              Share this article
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-container bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div
              className="text-gray-700 dark:text-gray-300 leading-relaxed"
              style={{ whiteSpace: 'pre-wrap' }}
            >
              {post.content}
            </div>
          </article>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-container bg-gray-50 dark:bg-gray-800">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.slug}`}
                className="card hover:scale-105 transform transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-primary transition-colors">
                  {relatedPost.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {new Date(relatedPost.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
                  {relatedPost.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-container bg-primary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Enjoyed this article?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Check out more articles or get in touch to discuss your project
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/blog"
              className="bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              More Articles
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPost;
