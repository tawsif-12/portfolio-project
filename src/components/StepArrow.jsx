import { FaCrosshairs, FaSearchPlus, FaThLarge, FaChartLine, FaUsers, FaHandsHelping, FaProjectDiagram, FaTrophy } from 'react-icons/fa';

const StepArrow = ({ number, title, subtitle, description, period, achievements, color, icon, offset, delay = 0, isVisible = true }) => {
  const iconMap = {
    target: FaCrosshairs,
    search: FaSearchPlus,
    grid: FaThLarge,
    chart: FaChartLine,
    FaUsers: FaUsers,
    FaHandsHelping: FaHandsHelping,
    FaProjectDiagram: FaProjectDiagram,
    FaTrophy: FaTrophy
  };
  
  const IconComponent = iconMap[icon];
  
  return (
    <div 
      className={`relative mb-8 group ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
      style={{ 
        marginLeft: `${offset}px`,
        animationDelay: isVisible ? `${delay}s` : '0s'
      }}
    >
      {/* Diamond badge with number */}
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundColor: color,
          transform: 'rotate(45deg) translateY(-50%)',
          transformOrigin: 'center',
          top: '50%'
        }}
      >
        <span 
          className="text-white font-bold text-xl"
          style={{ transform: 'rotate(-45deg)' }}
        >
          {number}
        </span>
      </div>
      
      {/* Arrow shape container */}
      <div className="flex items-start ml-8">
        {/* Main arrow body */}
        <div 
          className="relative flex-1 py-6 px-8 pl-16 transition-all duration-300 group-hover:shadow-2xl min-h-[140px]"
          style={{ backgroundColor: color }}
        >
          {/* Arrow point on the right */}
          <div 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0"
            style={{
              borderTop: '70px solid transparent',
              borderBottom: '70px solid transparent',
              borderLeft: `32px solid ${color}`,
              transform: 'translateX(100%)'
            }}
          ></div>
          
          {/* Text content */}
          <div className="relative z-10">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex-1">
                <h4 className="text-white font-bold text-xl mb-1">
                  {title}
                </h4>
                <p className="text-white text-base font-medium opacity-95 mb-2">
                  {subtitle}
                </p>
              </div>
              {period && (
                <span className="text-white text-xs opacity-80 whitespace-nowrap bg-white bg-opacity-20 px-3 py-1 rounded-full">
                  {period}
                </span>
              )}
            </div>
            <p className="text-white text-sm opacity-90 mb-3">
              {description}
            </p>
            {achievements && achievements.length > 0 && (
              <div className="mt-3 pt-3 border-t border-white border-opacity-30">
                <ul className="space-y-1">
                  {achievements.slice(0, 3).map((achievement, idx) => (
                    <li key={idx} className="flex items-start text-white text-xs opacity-90">
                      <span className="mr-2 mt-0.5">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        {/* Circular icon badge */}
        <div 
          className="ml-12 w-16 h-16 rounded-full border-4 flex items-center justify-center flex-shrink-0 bg-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
          style={{ 
            borderColor: color
          }}
        >
          {IconComponent && <IconComponent className="w-7 h-7" style={{ color }} />}
        </div>
      </div>
    </div>
  );
};

export default StepArrow;
