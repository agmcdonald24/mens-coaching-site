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
                src="/images/me.png"
                alt="Childhood photo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200">
              <img
                src="/images/meman.png"
                alt="Adult photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Story Text */}
          <div className="text-white space-y-4 leading-relaxed">
            <p>
              I am a kid who grew up way too fast. A kid who got stuck in development and struggled to grow up at all.
              A kid who had no masculine or feminine role models, which left me entirely confused about what makes someone a man - and someone whose core wound is abandonment, which made it difficult to trust intimacy in any form.
            </p>
            <p>
              I grew up with a chip on my shoulder. With a defensive posture that hurt and pushed others away out of a deep fear and desire to protect myself.
              I had a sense of greater potential with no means to fully tap into it without completely self-destructing.
            </p>
            <p>
              It took rock bottom to start me down a path toward figuring things out. Broke. Dumped. Nearly homeless. Credit cards maxed.
              Every relationship either pushed away or choosing to leave. Waking up each morning with a desire to die.
            </p>
            <p>
              Until the pandemic. When life leveled the field. I got lucky. I didn't just survive the greatest disruption of our generation - I survived myself.
              A new opportunity to work fell into my lap. I got back on my feet. I found a therapist. I joined a group of men and was quickly promoted to leadership.
              I found purpose. And I've been making the most of that purpose ever since.
            </p>
            <p>
              I've been to the depths of my own psyche through plant medicines, through shadow work, through sharing my deepest shame and being witnessed.
              I've sat with countless men and held space for their experiences. Shared in their pain. Their struggles. And ultimately their triumph.
            </p>
            <p>
              Through this journey, I learned that healing isn't about becoming someone new - it's about remembering who you were before the wounds taught you to hide.
              That masculinity isn't something to perform, but something to embody through presence, vulnerability, and purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}