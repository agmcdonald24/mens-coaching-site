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
              Greater capacity for emotional regulation - staying present when old patterns want you to run.
              The ability to tolerate discomfort long enough to actually get what you want. The safety to take risks that once seemed impossible.
              Deeper intimacy with yourself and others. Purpose that comes from alignment, not performance.
            </p>
            <p>
              This isn't about becoming superhuman. It's about becoming fully human - with all the mess, beauty, and aliveness that comes with it.
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