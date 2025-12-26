import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      {/* Background image */}
      <Image
          src="/images/IMG_1298.jpeg"
          alt="Men's coaching hero background"
          fill
          priority
          className="object-cover" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Guiding Men to Their<br />
            Fullest Masculine Expression
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your life through authentic men's work, breathwork, and personalized coaching in Pittsburgh.
          </p>

          {/* CTA for Open House */}
          <div className="bg-blue-600 rounded-lg p-8 max-w-2xl mx-auto mb-8 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Men's Group Open House
            </h2>
            <p className="text-xl mb-2">January 5th, 2025</p>
            <p className="text-gray-100 mb-6">
              Join us for an introduction to men's work and experience the power of authentic brotherhood.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Reserve Your Spot
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Explore Services
            </a>
            <a
              href="#about"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
