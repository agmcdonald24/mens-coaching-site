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
              I work with men in their late 20s to 40s who are capable of more but can't quite access it.
              Men who feel stuck in patterns they intellectually understand but can't seem to break.
              Men who've achieved success on paper but still feel disconnected from themselves and incapable of real intimacy.
              Men who know they're built for depth, purpose, and aliveness - but every time they reach for it, old wounds pull them back into self-sabotage or withdrawal.
            </p>
            <p>
              If you're reading this and something resonates, you're probably one of them.
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