export default function ReadyToStart() {
  const services = [
    {
      title: "1:1 Coaching",
      description:
        "Personalized coaching tailored to your unique journey. Work directly with me to overcome challenges, clarify your purpose and step into your fullest masculine expression.",
      features: [
        "Weekly 1-on-1 sessions",
        "Customized coaching plans",
        "Goal setting and accountability",
        "Ongoing support and guidance"
      ]
    },
    {
      title: "Mens Group",
      description:
        "Join a community of men committed to personal growth, authentic connection, and living with purpose. Our weekly group provides a safe space to explore masculinity, vulnerability, and brotherhood.",
      features: [
        "Weekly meetings in Pittsburgh",
        "Safe, confidential container",
        "Authentic male connection",
        "Accountability and support"
      ]
    },
    {
      title: "Breathwork Sessions",
      description:
        "Experience transformative conscious breathing techniques that release stored tension, trauma, and emotional blockages. Breathwork creates space for deeper self-awareness and personal growth.",
      features: [
        "Individual & group sessions",
        "Guided breathing techniques",
        "Emotional release work",
        "Stress and anxiety reduction"
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