function SectionHeader({ title, subtitle, centered = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 w-20 h-1 bg-primary rounded ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}

export default SectionHeader;
