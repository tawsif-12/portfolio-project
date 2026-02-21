import { profile } from '../data/profile';
import { skills } from '../data/skills';
import SectionHeader from '../components/SectionHeader';
import SkillBadge from '../components/SkillBadge';
import ScrollAnimatedCard from '../components/ScrollAnimatedCard';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

function About() {
  return (
    <div>
      {/* About Header */}
      <section className="bg-theme-primary" style={{ transition: 'background-color 0.3s ease' }}>
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-theme-primary animate-fade-in-scale">
              About Me
            </h1>
            <div className="section-divider mx-auto"></div>
            <p className="text-xl leading-relaxed text-theme-secondary animate-fade-in-up delay-100">
              {profile.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-container bg-theme-card" style={{ transition: 'background-color 0.3s ease' }}>
        <SectionHeader
          title="Professional Experience"
          subtitle="My journey in the world of software development"
        />
        <div className="max-w-4xl mx-auto">
          {profile.experience.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-8 pb-12 border-l-2 border-coral last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-coral" style={{ borderWidth: '4px', borderColor: 'var(--card-bg)', borderStyle: 'solid' }} />
              
              <ScrollAnimatedCard animationType="fade-in" delay={index * 100}>
                <div className="card hover:shadow-xl transition-all duration-500">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                  <div>
                    <h3 className="text-2xl font-semibold text-theme-primary">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-coral font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="flex items-center text-theme-secondary">
                      <FaBriefcase className="mr-2" />
                      {exp.period}
                    </p>
                    <p className="text-sm text-theme-muted">
                      {exp.location}
                    </p>
                  </div>
                </div>
                <p className="text-theme-secondary">
                  {exp.description}
                </p>
                </div>
              </ScrollAnimatedCard>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="section-container bg-theme-primary" style={{ transition: 'background-color 0.3s ease' }}>
        <SectionHeader title="Education" />
        <div className="max-w-4xl mx-auto">
          {profile.education.map((edu, index) => (
            <ScrollAnimatedCard key={edu.id} animationType="scale" delay={index * 100}>
              <div className="card hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="text-2xl font-semibold mb-1 text-theme-primary">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-coral font-medium mb-2">
                      {edu.school}
                    </p>
                    <p className="text-theme-secondary">
                      {edu.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="flex items-center text-theme-secondary">
                      <FaGraduationCap className="mr-2" />
                      {edu.period}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimatedCard>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="section-container bg-theme-card" style={{ transition: 'background-color 0.3s ease' }}>
        <SectionHeader
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with"
        />
        
        {/* Programming Languages */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-theme-primary animate-fade-in-scale">
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
          <h3 className="text-2xl font-semibold mb-6 text-theme-primary animate-fade-in-scale">
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
          <h3 className="text-2xl font-semibold mb-6 text-theme-primary animate-fade-in-scale">
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
          <h3 className="text-2xl font-semibold mb-6 text-theme-primary animate-fade-in-scale">
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
          <h3 className="text-2xl font-semibold mb-6 text-theme-primary animate-fade-in-scale">
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
