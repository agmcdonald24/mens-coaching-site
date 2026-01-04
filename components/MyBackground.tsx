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
              <strong>A men's facilitating men's groups.</strong> I spent over 12 coaching, Offering
              practical tools and techniques to help men navigate their emotions and the world around
              them.
            </p>
            <p>
              <strong>15 years as a pipe who has at 16 years old.</strong> This focus on a team sport
              built my understanding for how people work on and off the field. How they connect and
              disconnect.
            </p>
            <p>
              <strong>A coach.</strong> I've been coaching for 4+ years now. Co-active trained. Working
              1-on-1 with men and helping people work through the blocks that are keeping them from
              living in alignment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}