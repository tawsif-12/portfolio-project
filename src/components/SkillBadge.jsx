import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as MdIcons from 'react-icons/md';
import { VscCode } from 'react-icons/vsc';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function SkillBadge({ skill, category }) {
  // Map category to color
  const categoryColors = {
    frontend: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700',
    backend: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-300 dark:border-green-700',
    database: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700',
    tools: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 border-orange-300 dark:border-orange-700',
    other: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600',
  };

  const colorClass = categoryColors[category] || categoryColors.other;

  // Get icon component
  const getIcon = (iconName) => {
    if (!iconName) return null;
    
    // Check different icon libraries
    const Icon = FaIcons[iconName] || SiIcons[iconName] || MdIcons[iconName] || (iconName === 'VscCode' ? VscCode : null);
    
    return Icon ? <Icon className="w-5 h-5" /> : null;
  };

  const Icon = getIcon(skill.icon);

  // Level indicator
  const levelDots = {
    beginner: 1,
    intermediate: 2,
    advanced: 3,
    expert: 4,
  };

  const dots = levelDots[skill.level] || 3;
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`flex items-center justify-between px-4 py-3 rounded-lg border-2 bg-theme-card-alt text-theme-primary border-theme transition-all duration-300 hover:scale-110 hover:border-coral hover:shadow-lg ${isVisible ? 'scroll-fade-in visible' : 'scroll-fade-in'}`}
    >
      <div className="flex items-center space-x-3">
        {Icon && <span className="flex-shrink-0 text-coral">{Icon}</span>}
        <span className="font-medium">{skill.name}</span>
      </div>
      
      {skill.level && (
        <div className="flex space-x-1 ml-2">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: index < dots ? '#e8533a' : 'var(--text-muted)' }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SkillBadge;
