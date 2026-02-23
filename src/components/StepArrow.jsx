import { FaCrosshairs, FaSearchPlus, FaThLarge, FaChartLine, FaUsers, FaHandsHelping, FaProjectDiagram, FaTrophy, FaHandshake } from 'react-icons/fa';

const StepArrow = ({ number, title, subtitle, description, period, achievements, color, icon, image, offset, delay = 0, isVisible = true }) => {
  const iconMap = {
    target: FaCrosshairs,
    search: FaSearchPlus,
    grid: FaThLarge,
    chart: FaChartLine,
    FaUsers: FaUsers,
    FaHandsHelping: FaHandsHelping,
    FaProjectDiagram: FaProjectDiagram,
    FaTrophy: FaTrophy,
    FaHandshake: FaHandshake
  };
  
  const IconComponent = iconMap[icon];
  
  // Use offset only on larger screens
  const responsiveOffset = typeof window !== 'undefined' && window.innerWidth >= 768 ? offset : 0;
  
  return (
    <div 
      className={`relative mb-6 md:mb-8 group ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
      style={{ 
        marginLeft: `${responsiveOffset}px`,
        animationDelay: isVisible ? `${delay}s` : '0s'
      }}
    >
      {/* Diamond badge with number */}
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundColor: color,
          transform: 'rotate(45deg) translateY(-50%)',
          transformOrigin: 'center',
          top: '50%'
        }}
      >
        <span 
          className="text-white font-bold text-base md:text-xl"
          style={{ transform: 'rotate(-45deg)' }}
        >
          {number}
        </span>
      </div>
      
      {/* Arrow shape container */}
      <div className="flex items-start ml-6 md:ml-8">
        {/* Main arrow body */}
        <div 
          className="relative flex-1 py-4 md:py-6 px-4 md:px-8 pl-10 md:pl-16 transition-all duration-300 group-hover:shadow-2xl min-h-[120px] md:min-h-[140px]"
          style={{ backgroundColor: color }}
        >
          {/* Arrow point on the right - hidden on small screens */}
          <div 
            className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0"
            style={{
              borderTop: '70px solid transparent',
              borderBottom: '70px solid transparent',
              borderLeft: `32px solid ${color}`,
              transform: 'translateX(100%)'
            }}
          ></div>
          
          {/* Text content */}
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-4 mb-2">
              <div className="flex-1">
                <h4 className="text-white font-bold text-lg md:text-xl mb-1">
                  {title}
                </h4>
                <p className="text-white text-sm md:text-base font-medium opacity-95 mb-2">
                  {subtitle}
                </p>
              </div>
              {period && (
                <span className="text-white text-xs opacity-80 whitespace-nowrap bg-white bg-opacity-20 px-2 md:px-3 py-1 rounded-full">
                  {period}
                </span>
              )}
            </div>
            <p className="text-white text-xs md:text-sm opacity-90 mb-3">
              {description}
            </p>
            {image && (
              <div className="mt-3 mb-3">
                <img 
                  src={image} 
                  alt={title}
                  className="rounded-lg w-full h-32 md:h-40 object-cover border-2 border-white border-opacity-30"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}
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
        
        {/* Circular icon badge - hidden on mobile */}
        <div 
          className="hidden md:flex ml-8 lg:ml-12 w-12 h-12 md:w-16 md:h-16 rounded-full border-4 items-center justify-center flex-shrink-0 bg-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
          style={{ 
            borderColor: color
          }}
        >
          {IconComponent && <IconComponent className="w-6 h-6 md:w-7 md:h-7" style={{ color }} />}
        </div>
      </div>
    </div>
  );
};

export default StepArrow;
