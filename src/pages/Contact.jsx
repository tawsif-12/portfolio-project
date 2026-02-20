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
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Have a project in mind? Let's discuss how I can help bring your
              ideas to life
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-container bg-white dark:bg-gray-900">
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            title="Contact Information"
            subtitle="Prefer to reach out directly? Here are my details"
            centered
          />

          <div className="space-y-6">
            {/* Email */}
            <div className="card flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Email
                </h3>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-primary hover:underline"
                >
                  {profile.email}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="card flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center">
                <FaMapMarkerAlt className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {profile.location}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="card">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Connect With Me
              </h3>
              <div className="flex space-x-4 justify-center">
                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href={profile.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="card bg-blue-50 dark:bg-blue-900 border-2 border-primary">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                📅 Availability
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
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
