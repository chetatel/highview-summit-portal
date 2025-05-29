import React, { useState } from 'react';

export default function Feedback() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Add integration for Google Apps Script + Formspree/EmailJS here

    console.log('Feedback submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-highviewBlue mb-8">
        Share Your Feedback
      </h2>

      <img
        src="images/feedback.jpg"
        alt="Feedback concept"
        className="rounded-xl shadow-lg mb-10 mx-auto w-full max-h-[400px] object-cover"
        loading="lazy"
      />

      <p className="text-center text-gray-600 mb-8">
        We value your thoughts on the 2025 Highview Capital Annual Summit. Your feedback helps us continuously improve and elevate the experience year after year.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-highviewBlue"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-highviewBlue"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-highviewBlue"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-highviewBlue text-white py-3 rounded hover:bg-blue-900 transition"
          >
            Submit Feedback
          </button>
        </form>
      ) : (
        <div className="bg-green-100 text-green-800 p-6 rounded text-center shadow">
          Thank you for your feedback! We appreciate your insights and support.
        </div>
      )}
    </section>
  );
}