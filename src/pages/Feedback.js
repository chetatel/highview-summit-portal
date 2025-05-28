// src/pages/Feedback.js
import React, { useState } from 'react';

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Submit to Google Sheets
      await fetch('https://script.google.com/macros/s/AKfycbyQsMVEPY3lps-4vkZrSRWHYXTtWC3RusCQAo9NYhdY6KR5LP3uPqFxg51h88PE4cP3gA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // 2. Submit to Formspree
      await fetch('https://formspree.io/f/xdkgqple', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-20 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        We Value Your Feedback
      </h2>

      {submitted ? (
        <p className="text-center text-green-600 font-semibold text-lg">
          Thank you for sharing your feedback! Dani will review it promptly.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label htmlFor="feedback" className="block mb-2 font-semibold text-gray-700">
              Your Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              rows="5"
              required
              value={formData.feedback}
              onChange={handleChange}
              placeholder="Share your thoughts or suggestions"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded font-semibold hover:bg-blue-800 transition"
          >
            Submit Feedback
          </button>
        </form>
      )}
    </section>
  );
}