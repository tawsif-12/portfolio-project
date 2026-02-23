import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { resume } from '../data/resume';
import { FaArrowLeft, FaCalendar, FaAward, FaCertificate, FaCheckCircle, FaTags } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function CertificateDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const cert = resume.certifications.find((c) => c.id === parseInt(id));
  const [headerRef, isHeaderVisible] = useScrollAnimation({ threshold: 0.1 });
  const [imageRef, isImageVisible] = useScrollAnimation({ threshold: 0.1 });
  const [detailsRef, isDetailsVisible] = useScrollAnimation({ threshold: 0.1 });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!cert) {
    return (
      <div className="section-container text-center bg-theme-primary" style={{ transition: 'background-color 0.3s ease' }}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-theme-primary mb-4">
          Certificate Not Found
        </h1>
        <p className="text-sm sm:text-base text-theme-secondary mb-8">
          The certificate you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-theme-primary" style={{ transition: 'background-color 0.3s ease' }}>
      {/* Header Section */}
      <section className="bg-theme-card border-b border-theme" style={{ transition: 'background-color 0.3s ease' }}>
        <div className="section-container">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-theme-secondary hover:text-coral mb-6 transition-colors animate-fade-in"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
          
          <div
            ref={headerRef}
            className={`max-w-4xl animate-fade-in-scale ${isHeaderVisible ? 'visible' : ''}`}
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-coral bg-opacity-10 text-coral text-sm px-4 py-2 rounded-full shadow-lg backdrop-blur-sm border border-coral border-opacity-30">
                <FaCertificate className="inline mr-2" />
                Certificate of Completion
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-theme-primary">
              {cert.name}
            </h1>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 text-base sm:text-lg mb-6 text-theme-secondary">
              <div className="flex items-center">
                <FaAward className="mr-2 text-coral" />
                <span className="text-sm sm:text-base">Issued by: {cert.issuer}</span>
              </div>
              <div className="flex items-center">
                <FaCalendar className="mr-2 text-coral" />
                <span className="text-sm sm:text-base">Completed: {cert.date}</span>
              </div>
            </div>
            
            {cert.credentialId && (
              <div className="bg-theme-card-alt backdrop-blur-sm rounded-lg p-4 inline-block border border-theme">
                <p className="text-sm text-theme-secondary">
                  <strong className="text-theme-primary">Credential ID:</strong> {cert.credentialId}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Certificate Image */}
      {cert.image && (
        <section className="section-container bg-theme-primary" style={{ transition: 'background-color 0.3s ease' }}>
          <div
            ref={imageRef}
            className={`max-w-4xl mx-auto ${isImageVisible ? 'scroll-scale visible' : 'scroll-scale'}`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-theme-primary mb-6 sm:mb-8 text-center">
              <FaCertificate className="inline mr-2 sm:mr-3 text-coral" />
              Certificate Preview
            </h2>
            <div className="rounded-lg overflow-hidden shadow-2xl bg-theme-card border-2 sm:border-4 border-coral border-opacity-20 hover:border-opacity-40 hover:shadow-coral transition-all duration-300">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-auto"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/800x600?text=Certificate`;
                }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Certificate Details */}
      <section className="section-container bg-theme-card" style={{ transition: 'background-color 0.3s ease' }}>
        <div
          ref={detailsRef}
          className={`max-w-4xl mx-auto ${isDetailsVisible ? 'scroll-scale visible' : 'scroll-scale'}`}
        >
          <h2 className="text-3xl font-bold text-theme-primary mb-8">
            About This Certificate
          </h2>
          
          <div className="card mb-8 hover:shadow-xl transition-shadow duration-300">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-theme-secondary text-lg leading-relaxed">
                {cert.description || `This certificate validates the completion of ${cert.name} from ${cert.issuer}. It demonstrates proficiency and dedication in mastering the skills and knowledge required in this domain.`}
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="card hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-theme-primary mb-4 flex items-center">
                <FaCheckCircle className="mr-2 text-coral" />
                What I Learned
              </h3>
              <ul className="space-y-3">
                {cert.skills ? cert.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start text-theme-secondary">
                    <span className="mr-2 mt-1 text-coral">✓</span>
                    <span>{skill}</span>
                  </li>
                )) : (
                  <>
                    <li className="flex items-start text-theme-secondary">
                      <span className="mr-2 mt-1 text-coral">✓</span>
                      <span>Industry-relevant skills and knowledge</span>
                    </li>
                    <li className="flex items-start text-theme-secondary">
                      <span className="mr-2 mt-1 text-coral">✓</span>
                      <span>Practical application of concepts</span>
                    </li>
                    <li className="flex items-start text-theme-secondary">
                      <span className="mr-2 mt-1 text-coral">✓</span>
                      <span>Best practices and methodologies</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="card hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-theme-primary mb-4 flex items-center">
                <FaAward className="mr-2 text-coral" />
                Certificate Benefits
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-theme-secondary">
                  <span className="mr-2 mt-1 text-coral">✓</span>
                  <span>Industry recognition</span>
                </li>
                <li className="flex items-start text-theme-secondary">
                  <span className="mr-2 mt-1 text-coral">✓</span>
                  <span>Skill validation</span>
                </li>
                <li className="flex items-start text-theme-secondary">
                  <span className="mr-2 mt-1 text-coral">✓</span>
                  <span>Career advancement opportunities</span>
                </li>
                <li className="flex items-start text-theme-secondary">
                  <span className="mr-2 mt-1 text-coral">✓</span>
                  <span>Shareable on social platforms</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Related Topics */}
          {cert.relatedTopics && cert.relatedTopics.length > 0 && (
            <div className="card mb-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-theme-primary mb-4 flex items-center">
                <FaTags className="mr-2 text-coral" />
                Related Topics
              </h3>
              <div className="flex flex-wrap gap-3">
                {cert.relatedTopics.map((topic, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-theme-card-alt text-theme-secondary rounded-full text-sm border border-coral border-opacity-20 hover:border-opacity-50 hover:bg-coral hover:text-white transition-all duration-300 cursor-default"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Issuer Information */}
          <div className="card bg-theme-card-alt border border-coral border-opacity-20 hover:border-opacity-40 transition-all duration-300">
            <h3 className="text-xl font-semibold text-theme-primary mb-4">
              About {cert.issuer}
            </h3>
            <p className="text-theme-secondary">
              {cert.issuerInfo || `${cert.issuer} is a recognized institution providing quality education and professional certifications that help advance careers and validate expertise in various domains.`}
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-container bg-theme-primary" style={{ transition: 'background-color 0.3s ease' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-theme-primary mb-4">
            View More Certifications
          </h2>
          <p className="text-theme-secondary mb-8">
            Explore other certificates and achievements in my portfolio
          </p>
          <Link to="/#achievements" className="btn-primary hover:scale-105 transform transition-all">
            View All Certifications
          </Link>
        </div>
      </section>
    </div>
  );
}

export default CertificateDetail;
