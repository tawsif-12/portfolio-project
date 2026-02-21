function SectionHeader({ title, subtitle, centered = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-theme-primary animate-fade-in-scale">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg max-w-2xl text-theme-secondary animate-fade-in-up delay-100">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 w-20 h-1 bg-coral rounded ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}

export default SectionHeader;
