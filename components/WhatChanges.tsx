export default function WhatChanges() {
  return (
    <section className="py-20 bg-[rgb(245,242,235)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[rgb(184,144,87)] text-4xl sm:text-5xl font-bold text-center mb-16">
          WHAT CHANGES
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Someone I speak for intentional / significant change, I think a person when they
              heal can start to live life. The shift is that you become begins the initiator of
              your experience. You create the experiences that you want to have. Your relationships
              grow and deepen. You start to feel comfortable saying yes and no to the moments in your
              life. You build a center of self worth to stabilize and ground you. You choose from
              alignment, not performance.
            </p>
            <p>
              You build your capacity to work with difficult emotions and experiences. You recognize
              that those difficult emotions are signs, rather than flaws. You become intentional in
              your response.
            </p>
          </div>

          {/* Image */}
          <div className="w-full h-80 rounded-lg overflow-hidden bg-gray-300">
            <img
              src="/images/transformation.jpg"
              alt="Man in contemplation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}