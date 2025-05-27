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
    // Here you can add API integration or just show a success message
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-lg">
        <h3 className="text-4xl font-bold mb-12 text-center">Contact the Summit Team</h3>

        {submitted ? (
          <p className="text-center text-green-600 font-semibold text-lg">
            Thank you for reaching out! Dani will respond shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="jane@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Ask a question, request info, etc."
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

        <div className="mt-12 text-center text-sm text-gray-600">
          <p>
            For direct inquiries, contact <strong>Dani Penarroyo</strong>, Executive Assistant & Summit Coordinator.
          </p>
          <p>
            Email: <a href="mailto:dani@highviewcapital.com" className="text-blue-700 underline">dani@highviewcapital.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}