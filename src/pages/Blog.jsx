import { useState } from 'react';
import { blogPosts } from '../data/blog';
import BlogCard from '../components/BlogCard';
import SectionHeader from '../components/SectionHeader';

function Blog() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Get all unique tags
  const allTags = [...new Set(blogPosts.flatMap((post) => post.tags))];

  // Filter posts
  const filteredPosts = blogPosts.filter((post) => {
    const tagMatch = !selectedTag || post.tags.includes(selectedTag);
    const searchMatch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return tagMatch && searchMatch;
  });

  // Sort by date (newest first)
  const sortedPosts = [...filteredPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const featuredPosts = sortedPosts.filter((post) => post.featured);
  const regularPosts = sortedPosts.filter((post) => !post.featured);

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Thoughts, tutorials, and insights on web development and
              technology
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tags Filter */}
      <section className="section-container bg-white dark:bg-gray-900">
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Filter by Tag
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                !selectedTag
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedTag === tag
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && !selectedTag && !searchQuery && (
          <div className="mb-16">
            <SectionHeader title="Featured Articles" />
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        {(selectedTag || searchQuery || regularPosts.length > 0) && (
          <div>
            {!selectedTag && !searchQuery && featuredPosts.length > 0 && (
              <SectionHeader title="All Articles" />
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedTag || searchQuery
                ? sortedPosts
                : regularPosts
              ).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {sortedPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No articles found. Try adjusting your search or filters.
            </p>
            <button
              onClick={() => {
                setSelectedTag(null);
                setSearchQuery('');
              }}
              className="mt-4 btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Blog;
