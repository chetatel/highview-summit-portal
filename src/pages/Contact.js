import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Integrate with backend or email API for real submissions
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 max-w-xl">
        <h3 className="text-4xl font-bold text-center text-blue-800 mb-10">
          Contact the Summit Team
        </h3>

        {submitted ? (
          <div className="text-center text-green-700 text-lg font-medium">
            <p>Thank you for reaching out!</p>
            <p>Dani will respond shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 shadow rounded">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Jane Doe"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="jane@example.com"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Ask a question, request info, etc."
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded font-semibold hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="mt-12 text-center text-sm text-gray-600 space-y-3">
          <p>
            For direct inquiries, contact <strong>Dani Penarroyo</strong>, Executive Assistant & Summit Coordinator.
          </p>
          <p>
            Email:{' '}
            <a
              href="mailto:dani@highviewcapital.com"
              className="text-blue-700 hover:underline"
            >
              dani@highviewcapital.com
            </a>
          </p>
          <p>
            Phone: <a href="tel:+17602848557" className="text-blue-700 hover:underline">(760) 284-8557</a>
          </p>
          <p className="mt-4 font-semibold">Office Address:</p>
          <address className="not-italic text-gray-700">
            Highview Capital LLC<br />
            11755 Wilshire Blvd, Suite 1400<br />
            Los Angeles, CA 90025
          </address>
        </div>
      </div>
    </section>
  );
}