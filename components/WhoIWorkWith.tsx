export default function WhoIWorkWith() {
  return (
    <section className="py-20 bg-[rgb(245,242,235)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[rgb(184,144,87)] text-4xl sm:text-5xl font-bold text-center mb-16">
          WHO I WORK WITH
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I work specifically with men who are ready to get real. Men who are tired of
              putting on a performance, showing up how they think they should be perceived.
            </p>
            <p>
              Men who want to heal, to feel, to connect and be known. To be vulnerable
              and authentic with the people in their lives and not be ashamed of who they
              really are.
            </p>
            <p>
              Men who are ready to step forward in their life. To stop waiting for someone
              to give them permission and to start living in alignment with what they
              actually want.
            </p>
          </div>

          {/* Image */}
          <div className="w-full h-80 rounded-lg overflow-hidden bg-gray-300">
            <img
              src="/images/group-fire.jpg"
              alt="Men around fire"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}