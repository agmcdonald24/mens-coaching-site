export default function MyBackground() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[rgb(184,144,87)] text-4xl sm:text-5xl font-bold text-center mb-16">
          MY BACKGROUND
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="w-full h-80 rounded-lg overflow-hidden bg-gray-300">
            <img
              src="/images/background.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong>5 years facilitating men's groups.</strong>
            </p>
            <p>
              <strong>3 years of 1:1 coaching.</strong>
            </p>
            <p>
              <strong>Oxygen Advantage certified breathwork instructor</strong>
            </p>
            <p>
              <strong>Somatically trained and trauma-aware.</strong>
            </p>
            <p>
              I'm not here as a guru who has it all figured out.
              I'm here as a peer guide who's still doing the work - just a few steps ahead on the same path.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}