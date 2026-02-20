import { FaStar, FaQuoteLeft } from 'react-icons/fa';

function TestimonialCard({ testimonial }) {
  return (
    <div className="card relative">
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 text-primary opacity-20">
        <FaQuoteLeft className="w-12 h-12" />
      </div>

      {/* Rating */}
      {testimonial.rating && (
        <div className="flex space-x-1 mb-4">
          {[...Array(testimonial.rating)].map((_, index) => (
            <FaStar key={index} className="w-4 h-4 text-yellow-400" />
          ))}
        </div>
      )}

      {/* Message */}
      <p className="text-gray-700 dark:text-gray-300 mb-6 italic relative z-10">
        "{testimonial.message}"
      </p>

      {/* Author Info */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0 overflow-hidden">
          {testimonial.avatar ? (
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 font-semibold">
              {testimonial.name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">
            {testimonial.name}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
