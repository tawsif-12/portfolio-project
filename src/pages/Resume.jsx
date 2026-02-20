import { resume } from '../data/resume';
import SectionHeader from '../components/SectionHeader';
import {
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaDownload,
} from 'react-icons/fa';

function Resume() {
  const handleDownload = () => {
    // Create a link to download the PDF
    const link = document.createElement('a');
    link.href = resume.pdfUrl;
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Resume
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              {resume.summary}
            </p>
            <button onClick={handleDownload} className="btn-primary">
              <FaDownload className="inline mr-2" />
              Download PDF Resume
            </button>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-container bg-white dark:bg-gray-900">
        <SectionHeader
          title="Professional Experience"
          subtitle="My career journey and key accomplishments"
        />
        <div className="max-w-4xl mx-auto">
          {resume.experience.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-8 pb-12 border-l-2 border-primary last:pb-0"
            >
              <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-gray-900" />

              <div className="card">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 dark:text-gray-400 flex items-center">
                      <FaBriefcase className="mr-2" />
                      {exp.period}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-primary mr-2 mt-1">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <SectionHeader title="Education" />
        <div className="max-w-4xl mx-auto space-y-6">
          {resume.education.map((edu) => (
            <div key={edu.id} className="card">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-primary font-medium mb-1">
                    {edu.school}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {edu.location}
                  </p>
                  {edu.gpa && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      GPA: {edu.gpa}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-gray-600 dark:text-gray-400 flex items-center">
                    <FaGraduationCap className="mr-2" />
                    {edu.period}
                  </p>
                </div>
              </div>

              {edu.achievements && (
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-primary mr-2">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="section-container bg-white dark:bg-gray-900">
        <SectionHeader title="Certifications" subtitle="Professional credentials and certifications" />
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {resume.certifications.map((cert) => (
            <div key={cert.id} className="card">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center">
                  <FaAward className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-primary text-sm mb-1">{cert.issuer}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Issued: {cert.date}
                  </p>
                  {cert.credentialId && (
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Summary */}
      <section className="section-container bg-gray-50 dark:bg-gray-800">
        <SectionHeader title="Skills Summary" />
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h3>
            <div className="space-y-3">
              {resume.skills.technical.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Soft Skills
            </h3>
            <div className="space-y-3">
              {resume.skills.soft.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="section-container bg-primary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Download My Resume</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a PDF copy of my complete resume for your records
          </p>
          <button
            onClick={handleDownload}
            className="bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
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
