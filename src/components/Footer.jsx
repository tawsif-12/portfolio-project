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
    <footer className="bg-theme-card border-t border-theme" style={{ transition: 'background-color 0.3s ease' }}>
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
                  className="nav-link"
                  aria-label={platform}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ) : null;
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm flex items-center justify-center md:justify-end text-theme-secondary">
              © {currentYear} {profile.name}. Made with{' '}
              <FaHeart className="mx-1 text-coral" /> using React
            </p>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-6 pt-6 border-t border-theme text-center">
          <p className="text-xs text-theme-muted mb-3">
            Built with React, Vite, and Tailwind CSS
          </p>
          
          {/* Copyright License */}
          <div className="text-xs text-theme-muted max-w-3xl mx-auto">
            <p className="mb-2">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
            <p className="text-xs">
              This website and its content are protected by copyright law. 
              Unauthorized reproduction or distribution of this content, or any portion of it, 
              may result in civil and criminal penalties.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
