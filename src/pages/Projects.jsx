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
      <section className="bg-theme-primary" style={{ transition: 'background-color 0.3s ease' }}>
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-theme-primary animate-fade-in-scale">
              My Projects
            </h1>
            <div className="section-divider mx-auto"></div>
            <p className="text-base sm:text-lg md:text-xl text-theme-secondary animate-fade-in-up delay-100">
              A collection of projects I've worked on, showcasing my skills and
              passion for development
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="section-container bg-theme-card" style={{ transition: 'background-color 0.3s ease' }}>
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-theme-primary">
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
                    ? 'bg-coral text-white'
                    : 'tech-badge'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {selectedTag && (
          <div className="mb-8 p-4 bg-theme-card-alt rounded-lg flex items-center justify-between">
            <p className="text-theme-secondary">
              Filtered by tag: <strong className="text-theme-primary">{selectedTag}</strong>
            </p>
            <button
              onClick={() => setSelectedTag(null)}
              className="text-coral hover:text-coral-light font-medium"
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
            <p className="text-xl text-theme-secondary">
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
          <h3 className="text-lg font-semibold mb-4 text-theme-primary">
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
                    ? 'bg-coral text-white'
                    : 'tech-badge'
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
