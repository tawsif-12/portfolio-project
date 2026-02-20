import { profile } from '../data/profile';
import { skills } from '../data/skills';
import SectionHeader from '../components/SectionHeader';
import SkillBadge from '../components/SkillBadge';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

function About() {
  return (
    <div>
      {/* About Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {profile.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-container bg-white dark:bg-gray-900">
        <SectionHeader
          title="Professional Experience"
          subtitle="My journey in the world of software development"
        />
        <div className="max-w-4xl mx-auto">
          {profile.experience.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-8 pb-12 border-l-2 border-primary last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-gray-900" />
              
              <div className="card">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 dark:text-gray-400 flex items-center">
                      <FaBriefcase className="mr-2" />
                      {exp.period}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {exp.location}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <SectionHeader title="Education" />
        <div className="max-w-4xl mx-auto">
          {profile.education.map((edu) => (
            <div key={edu.id} className="card">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-primary font-medium mb-2">
                    {edu.school}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {edu.description}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 dark:text-gray-400 flex items-center">
                    <FaGraduationCap className="mr-2" />
                    {edu.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="section-container bg-white dark:bg-gray-900">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with"
        />
        
        {/* Programming Languages */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Programming Languages
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.programmingLanguages.map((skill) => (
              <SkillBadge
                key={skill.name}
                skill={skill}
                category="frontend"
              />
            ))}
          </div>
        </div>

        {/* AI & Data Science */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            AI & Data Science
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.aiDataScience.map((skill) => (
              <SkillBadge
                key={skill.name}
                skill={skill}
                category="backend"
              />
            ))}
          </div>
        </div>

        {/* Database Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Databases
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.database.map((skill) => (
              <SkillBadge
                key={skill.name}
                skill={skill}
                category="database"
              />
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Tools & Platforms
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.tools.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} category="tools" />
            ))}
          </div>
        </div>

        {/* Frontend Development */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Frontend Development
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.frontend.map((skill) => (
              <SkillBadge
                key={skill.name}
                skill={skill}
                category="other"
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
