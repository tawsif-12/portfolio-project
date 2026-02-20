import { FaGithub, FaLinkedin, FaTwitter, FaMedium, FaHeart } from 'react-icons/fa';
import { profile } from '../data/profile';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    medium: FaMedium,
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Links */}
          <div className="flex space-x-6">
            {Object.entries(profile.socialLinks).map(([platform, url]) => {
              const Icon = socialIcons[platform];
              return Icon ? (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                  aria-label={platform}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ) : null;
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center md:justify-end">
              © {currentYear} {profile.name}. Made with{' '}
              <FaHeart className="mx-1 text-red-500" /> using React
            </p>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            Built with React, Vite, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
