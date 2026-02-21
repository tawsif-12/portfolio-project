import { useScrollAnimation } from '../hooks/useScrollAnimation';

function ScrollAnimatedCard({ children, className = '', animationType = 'fade-in', delay = 0 }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  
  const animationClass = {
    'fade-in': 'scroll-fade-in',
    'scale': 'scroll-scale',
    'slide-left': 'scroll-slide-left',
    'slide-right': 'scroll-slide-right'
  }[animationType] || 'scroll-fade-in';

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default ScrollAnimatedCard;
