import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    formType: 'Contact',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formspreeURL = 'https://formspree.io/f/manorglp'; // your Formspree URL here

    toast.loading('Sending your message...', { id: 'submitToast' });

    try {
      const response = await fetch(formspreeURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: '',
        formType: 'Contact',
      });

      confetti();

      toast.success('Message sent successfully!', { id: 'submitToast' });
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Oops! Something went wrong. Please try again later.', { id: 'submitToast' });
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-20 text-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-highviewBlue mb-10">
          Contact the Summit Team
        </h2>

        <img
          src="images/contact-team.jpg"
          alt="Summit team in discussion"
          className="rounded-xl shadow-lg mb-12 mx-auto w-full max-h-[400px] object-cover"
        />

        {submitted ? (
          <div className="text-center text-green-700 text-lg font-medium">
            <p>Thank you for reaching out!</p>
            <p>Dani will respond shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 shadow-lg rounded-lg">
            <input type="hidden" name="formType" value="Contact" />

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
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-highviewBlue"
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
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-highviewBlue"
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
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-highviewBlue"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-highviewBlue text-white py-3 rounded font-semibold hover:bg-blue-900 transition"
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
              className="text-highviewBlue hover:underline"
            >
              dani@highviewcapital.com
            </a>
          </p>
          <p>
            Phone:{' '}
            <a
              href="tel:+17602848557"
              className="text-highviewBlue hover:underline"
            >
              (760) 284-8557
            </a>
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