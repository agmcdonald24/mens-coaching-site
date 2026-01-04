export default function WhatIOffer() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[rgb(184,144,87)] text-4xl sm:text-5xl font-bold text-center mb-16">
          WHAT I OFFER
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="w-full h-80 rounded-lg overflow-hidden bg-gray-300">
            <img
              src="/images/coaching-session.jpg"
              alt="Coaching session"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I work with a mix of group facilitation coaching, and breathwork.
              This is because these modalities have been transformative in my own personal
              work and I love utilizing them to support others in their growth. I work to
              provide an experience that focuses on two things - building embodiment and
              providing opportunities to practice intimacy & authentic relating in safe and
              supportive containers.
            </p>
            <p>
              I'll challenge you to choose what you really want, what you believe is possible, and to see yourself for all of
              your unique human experience. Standing for you in your highest and truest expression of yourself.
            </p>
            <p>
              I'll ask you to show up alongside me and others, bringing the fullness of who you are. Your creativity, curiosity,
              fears, joy, shame - whatever comes up.
            </p>
            <p>
              Because bringing the fullness of who you are into relationship, not editing down who you are, that is the path to
              more meaningful connection and belonging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}