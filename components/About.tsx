export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              About Andrew McDonald
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                As a men's coach and facilitator based in Pittsburgh, I am dedicated to guiding men toward their fullest masculine expression. Through years of personal work and professional training, I have discovered the transformative power of authentic men's work.
              </p>
              <p>
                My approach combines breathwork, group facilitation, and personalized coaching to help men break through limiting beliefs, heal past wounds, and step into their power as leaders, partners, and members of their communities.
              </p>
              <p>
                Whether you're seeking to deepen your relationships, find your purpose, or simply become a more authentic version of yourself, I'm here to support your journey with compassion, accountability, and unwavering commitment to your growth.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="text-3xl font-bold text-gray-900">5+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="text-3xl font-bold text-gray-900">100+</p>
                <p className="text-gray-600">Men Supported</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Why Men's Work Matters</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Break free from societal conditioning and discover your authentic self</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Develop emotional intelligence and healthy relationship skills</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Find purpose, direction, and meaning in your life</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Build authentic connections with other men and experience true brotherhood</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
