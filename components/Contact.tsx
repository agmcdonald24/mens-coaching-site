"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend API or form service
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[rgb(184,144,87)] text-4xl sm:text-5xl font-bold text-center mb-16">
          Start Your Journey
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get in Touch</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Location:</strong> Pittsburgh, PA</p>
                <p><strong>Email:</strong> andrew@menscoachpgh.com</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Men's Group</h3>
              <p className="text-gray-700">Weekly meetings - Sundays at 6PM</p>
            </div>

            <div className="mt-8 p-6 bg-[rgb(245,242,235)] rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Open House - January 5th</h4>
              <p className="text-gray-700">
                New to men's work? Join us for a free open house to experience the group and meet other men on the path.
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-[rgb(245,242,235)] rounded-lg p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">I'll be in touch soon.</p>
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(184,144,87)] bg-white"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(184,144,87)] bg-white"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(184,144,87)] bg-white"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="interest" className="block text-gray-700 font-semibold mb-2">
                      I'm interested in *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(184,144,87)] bg-white"
                    >
                      <option value="">Select an option</option>
                      <option value="mens-group">Men's Group</option>
                      <option value="open-house">Open House - January 5th</option>
                      <option value="breathwork">Breathwork Sessions</option>
                      <option value="coaching">1-on-1 Coaching</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(184,144,87)] bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[rgb(20,30,70)] text-white py-3 px-6 rounded-md font-semibold hover:bg-[rgb(30,40,80)] transition-colors"
                  >
                    Send Message
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
