export default function Services() {
  const services = [
    {
      title: "Breathwork Sessions",
      description: "Experience transformative conscious breathing techniques that release stored tension, trauma, and emotional blockages. Breathwork creates space for deeper self-awareness and personal growth.",
      features: [
        "Individual and group sessions",
        "Guided breathing techniques",
        "Emotional release and healing",
        "Stress and anxiety reduction"
      ]
    },
    {
      title: "Men's Group",
      description: "Join a community of men committed to personal growth, authentic connection, and living with purpose. Our weekly group provides a safe space to explore masculinity, vulnerability, and brotherhood.",
      features: [
        "Weekly meetings in Pittsburgh",
        "Safe, confidential space",
        "Authentic male connection",
        "Accountability and support"
      ]
    },
    {
      title: "1-on-1 Coaching",
      description: "Personalized coaching tailored to your unique journey. Work directly with Andrew to overcome challenges, clarify your purpose, and step into your fullest masculine expression.",
      features: [
        "Customized coaching plans",
        "Deep personal exploration",
        "Goal setting and accountability",
        "Ongoing support and guidance"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive support for your journey to authentic masculinity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
