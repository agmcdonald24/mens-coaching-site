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
              src="/images/meanman.png"
              alt="Coaching session"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              This isn't rah-rah motivational content or drill sergeant accountability. This is deep, somatic work - building connection with yourself, understanding your deepest wounds, and creating foundation to honor your needs without abandoning yourself.
            </p>
            <p>
              I facilitate weekly men's groups where we practice vulnerability, witness each other's struggles, and build the brotherhood that many of us never had.
              I offer 1:1 coaching for men who want intensive, personalized support as they navigate their specific challenges. And I teach Oxygen Advantage breathwork as a tool for nervous system regulation - learning to stay present when activation wants you to run.
            </p>
            <p>
              My approach integrates somatic healing, shadow work, and the messy, non-linear reality of actual growth. This isn't quick-fix self-help. It's a lifelong commitment to a path that never ends - but transforms everything along the way.
            </p>
            <p>
              This isn't an easy path and it isn't for everyone. But if you're ready to stop running - from yourself, from intimacy, from the life you actually want to build - I'm here to walk it with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}