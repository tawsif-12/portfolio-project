import SectionHeader from '../components/SectionHeader';
import { profile } from '../data/profile';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

function Contact() {
  return (
    <div>
      {/* Header */}
      <section className="bg-theme-primary" style={{ transition: 'background-color 0.3s ease' }}>
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-theme-primary animate-fade-in-scale">
              Get In Touch
            </h1>
            <div className="section-divider mx-auto"></div>
            <p className="text-xl text-theme-secondary animate-fade-in-up delay-100">
              Have a project in mind? Let's discuss how I can help bring your
              ideas to life
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-container bg-theme-card" style={{ transition: 'background-color 0.3s ease' }}>
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            title="Contact Information"
            subtitle="Prefer to reach out directly? Here are my details"
            centered
          />

          <div className="space-y-6">
            {/* Email */}
            <div className="card flex items-start space-x-4 animate-fade-in-up delay-100">
              <div className="flex-shrink-0 w-12 h-12 bg-coral text-white rounded-lg flex items-center justify-center">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-theme-primary">
                  Email
                </h3>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-coral hover:underline"
                >
                  {profile.email}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="card flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-coral text-white rounded-lg flex items-center justify-center">
                <FaMapMarkerAlt className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-theme-primary">
                  Location
                </h3>
                <p className="text-theme-secondary">
                  {profile.location}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="card">
              <h3 className="font-semibold mb-4 text-theme-primary">
                Connect With Me
              </h3>
              <div className="flex space-x-4 justify-center">
                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-theme-card-alt text-theme-primary rounded-lg flex items-center justify-center hover:bg-coral hover:text-white transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-theme-card-alt text-theme-primary rounded-lg flex items-center justify-center hover:bg-coral hover:text-white transition-colors"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href={profile.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-theme-card-alt text-theme-primary rounded-lg flex items-center justify-center hover:bg-coral hover:text-white transition-colors"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="card border-2 border-coral bg-theme-card-alt">
              <h3 className="font-semibold mb-2 text-theme-primary">
                📅 Availability
              </h3>
              <p className="text-theme-secondary">
                Currently available for freelance projects and full-time
                opportunities. Response time: within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
