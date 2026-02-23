import { profile } from '../data/profile';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-theme-card border-t border-theme" style={{ transition: 'background-color 0.3s ease' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-theme-primary mb-3">
            © {currentYear} {profile.name}. All Rights Reserved.
          </p>
          <p className="text-xs text-theme-secondary leading-relaxed">
            This website and all of its contents, including but not limited to text, images, graphics, code, designs, and other materials, are protected by copyright law and international treaties. 
            Unauthorized reproduction, distribution, modification, or public display of any portion of this content, in whole or in part, without prior written permission from the copyright holder is strictly prohibited and may result in severe civil and criminal penalties. 
            All trademarks, service marks, and trade names referenced on this site are the property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
