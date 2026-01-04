export default function ReadyToStart() {
  const services = [
    {
      title: "1:1 Coaching",
      description:
        "Deep personalized work to help you overcome blocks, gain clarity, and step into alignment with who you really are.",
      features: [
        "Weekly 1-on-1 sessions",
        "Customized coaching plans",
        "Accountability & support",
        "Tools for emotional work"
      ]
    },
    {
      title: "Mens Group",
      description:
        "A community of men committed to authentic connection, vulnerability, and supporting each other in personal growth.",
      features: [
        "Weekly meetings in Pittsburgh",
        "Safe, confidential container",
        "Practice authentic relating",
        "Brotherhood & belonging"
      ]
    },
    {
      title: "Breathwork Sessions",
      description:
        "Transformative conscious breathing practices to release stored tension, trauma, and create space for healing.",
      features: [
        "Individual & group sessions",
        "Guided breathwork techniques",
        "Emotional release work",
        "Body-based healing"
      ]
    }
  ];

  return (
    <section className="py-20 bg-[rgb(245,242,235)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[rgb(184,144,87)] text-4xl sm:text-5xl font-bold text-center mb-16">
          Ready to Start?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-[rgb(184,144,87)] text-2xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <span className="text-[rgb(184,144,87)] mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}