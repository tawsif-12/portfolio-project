import { Link } from 'react-router-dom';
import { resume } from '../data/resume';
import SectionHeader from '../components/SectionHeader';
import ScrollAnimatedCard from '../components/ScrollAnimatedCard';
import {
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaDownload,
} from 'react-icons/fa';
import { generateResumePDF } from '../utils/resumePdfGenerator';

function Resume() {
  const handleDownload = () => {
    generateResumePDF();
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-theme-primary" style={{ transition: 'background-color 0.3s ease' }}>
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-theme-primary animate-fade-in-scale">
              Resume
            </h1>
            <div className="section-divider mx-auto"></div>
            <p className="text-xl mb-8 text-theme-secondary animate-fade-in-up delay-100">
              {resume.summary}
            </p>
            <button onClick={handleDownload} className="btn-primary animate-fade-in-up delay-200">
              <FaDownload className="inline mr-2" />
              Download PDF Resume
            </button>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-container bg-theme-card" style={{ transition: 'background-color 0.3s ease' }}>
        <SectionHeader
          title="Professional Experience"
          subtitle="My career journey and key accomplishments"
        />
        <div className="max-w-4xl mx-auto">
          {resume.experience.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-8 pb-12 border-l-2 border-coral last:pb-0"
            >
              <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-coral" style={{ borderWidth: '4px', borderColor: 'var(--card-bg)', borderStyle: 'solid' }} />

              <ScrollAnimatedCard animationType="slide-right" delay={index * 100}>
                <div className="card hover:shadow-xl transition-all duration-500">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-theme-primary">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-coral font-medium">
                      {exp.company}
                    </p>
                    <p className="text-sm text-theme-muted">
                      {exp.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="flex items-center text-theme-secondary">
                      <FaBriefcase className="mr-2" />
                      {exp.period}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-theme-secondary"
                    >
                      <span className="text-coral mr-2 mt-1">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </ScrollAnimatedCard>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="section-container bg-theme-primary" style={{ transition: 'background-color 0.3s ease' }}>
        <SectionHeader title="Education" />
        <div className="max-w-4xl mx-auto space-y-6">
          {resume.education.map((edu, index) => (
            <ScrollAnimatedCard key={edu.id} animationType="scale" delay={index * 100}>
              <div className="card hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-1 text-theme-primary">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-coral font-medium mb-1">
                    {edu.school}
                  </p>
                  <p className="text-sm text-theme-muted">
                    {edu.location}
                  </p>
                  {edu.gpa && (
                    <p className="text-sm mt-1 text-theme-secondary">
                      GPA: {edu.gpa}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <p className="flex items-center text-theme-secondary">
                    <FaGraduationCap className="mr-2" />
                    {edu.period}
                  </p>
                </div>
              </div>

              {edu.achievements && (
                <div className="mt-4">
                  <h4 className="font-semibold mb-2 text-theme-primary">
                    Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-theme-secondary"
                      >
                        <span className="text-coral mr-2">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              </div>
            </ScrollAnimatedCard>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="section-container bg-theme-card" style={{ transition: 'background-color 0.3s ease' }}>
        <SectionHeader title="Certifications" subtitle="Professional credentials and certifications" />
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {resume.certifications.map((cert, index) => (
            <ScrollAnimatedCard key={cert.id} animationType={index % 2 === 0 ? 'slide-left' : 'slide-right'} delay={index * 50}>
              <Link to={`/certificate/${cert.id}`}>
                <div className="card hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-coral text-white rounded-lg flex items-center justify-center">
                      <FaAward className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1 text-theme-primary group-hover:text-coral transition-colors">
                        {cert.name}
                      </h3>
                      <p className="text-coral text-sm mb-1">{cert.issuer}</p>
                      <p className="text-sm text-theme-secondary">
                        Issued: {cert.date}
                      </p>
                      {cert.credentialId && (
                        <p className="text-xs mt-2 text-theme-muted">
                          ID: {cert.credentialId}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollAnimatedCard>
          ))}
        </div>
      </section>

      {/* Skills Summary */}
      <section className="section-container bg-theme-primary" style={{ transition: 'background-color 0.3s ease' }}>
        <SectionHeader title="Skills Summary" />
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <ScrollAnimatedCard animationType="slide-left" delay={0}>
            <div className="card hover:shadow-xl transition-all duration-500">
            <h3 className="text-xl font-semibold mb-4 text-theme-primary">
              Technical Skills
            </h3>
            <div className="space-y-3">
              {resume.skills.technical.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center px-3 py-2 rounded-lg bg-theme-card-alt"
                >
                  <span className="w-2 h-2 bg-coral rounded-full mr-3 flex-shrink-0" />
                  <span className="text-theme-secondary">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
          </ScrollAnimatedCard>

          {/* Soft Skills */}
          <ScrollAnimatedCard animationType="slide-right" delay={100}>
            <div className="card hover:shadow-xl transition-all duration-500">
            <h3 className="text-xl font-semibold mb-4 text-theme-primary">
              Soft Skills
            </h3>
            <div className="space-y-3">
              {resume.skills.soft.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center px-3 py-2 rounded-lg bg-theme-card-alt"
                >
                  <span className="w-2 h-2 bg-coral rounded-full mr-3 flex-shrink-0" />
                  <span className="text-theme-secondary">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
          </ScrollAnimatedCard>
        </div>
      </section>

      {/* Download CTA */}
      <section className="section-container bg-theme-card" style={{ transition: 'background-color 0.3s ease' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-theme-primary animate-fade-in-scale">Download My Resume</h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-xl mb-8 text-theme-secondary animate-fade-in-up delay-100">
            Get a PDF copy of my complete resume for your records
          </p>
          <button
            onClick={handleDownload}
            className="btn-primary animate-bounce"
          >
            <FaDownload className="mr-2" />
            Download PDF
          </button>
        </div>
      </section>
    </div>
  );
}

export default Resume;
