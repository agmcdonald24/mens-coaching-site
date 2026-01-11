export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-16 min-h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/background.jpeg)' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-[rgb(184,144,87)] text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.5)' }}>
          The Coherent Man Project
        </h1>
        <p className="text-white text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Men's groups, 1:1 coaching, and breathwork for men ready to live authentically.
        </p>
      </div>
    </section>
  );
}
