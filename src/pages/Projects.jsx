import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState(null);

  // Get unique categories and tags
  const categories = ['All', ...new Set(projects.map((p) => p.category))];
  const allTags = [...new Set(projects.flatMap((p) => p.tags))];

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const categoryMatch =
      selectedCategory === 'All' || project.category === selectedCategory;
    const tagMatch = !selectedTag || project.tags.includes(selectedTag);
    return categoryMatch && tagMatch;
  });

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              A collection of projects I've worked on, showcasing my skills and
              passion for development
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="section-container bg-white dark:bg-gray-900">
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Filter by Category
          </h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedTag(null);
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {selectedTag && (
          <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg flex items-center justify-between">
            <p className="text-gray-700 dark:text-gray-300">
              Filtered by tag: <strong>{selectedTag}</strong>
            </p>
            <button
              onClick={() => setSelectedTag(null)}
              className="text-primary hover:text-primary-dark font-medium"
            >
              Clear
            </button>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No projects found with the selected filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedTag(null);
              }}
              className="mt-4 btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Popular Tags */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Popular Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {allTags.slice(0, 15).map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSelectedTag(tag);
                  setSelectedCategory('All');
                }}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
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
      </section>
    </div>
  );
}

export default Projects;
