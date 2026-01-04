export default function MyStory() {
  return (
    <section id="story" className="py-20 bg-[rgb(20,30,70)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[rgb(184,144,87)] text-4xl sm:text-5xl font-bold text-center mb-16">
          My Story
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Photos */}
          <div className="flex flex-col items-center space-y-6">
            <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200">
              <img
                src="/images/childhood-photo.jpg"
                alt="Childhood photo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200">
              <img
                src="/images/adult-photo.jpg"
                alt="Adult photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Story Text */}
          <div className="text-white space-y-4 leading-relaxed">
            <p>
              I was a shy child as can be seen in this. A shy nervous quiet kid who was anxious to socialize and struggled to engage
              with my peers. This was my first introduction to the confines and expectations of masculinity. It limited my
              authentic self expression and my ability to be real.
            </p>
            <p>
              When I got older I became bigger and more capable. Took on more leadership roles and filled into a performance of
              traditional masculinity. I picked my battles, wore a facade of strength, practiced stoicism, provided for the people
              around me, stayed disconnected from my emotions and from the people around me.
            </p>
            <p>
              It's taken the lows in my adult life when this mode of being just didn't work anymore to seek another way. When being
              strong isolated me, stoicism made me disconnect from my family and friends, inability to talk feelings led to the end
              of relationships, filling a provider role without addressing my own needs first led to burn out.
            </p>
            <p>
              Mens work (breathwork, coaching) has shown me the tools and path to another way of being in the world. One that has
              made me more whole. One that asks me to be in my body, feeling deeply the pain, joy, love, fear and welcoming it all.
              One that reminds me to lead myself and others with compassion and connection first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}