import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import toast from 'react-hot-toast';

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    formType: 'Summit Feedback',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formspreeURL = 'https://formspree.io/f/xdkgqple'; // Replace with your feedback form URL

    toast.loading('Sending your feedback...', { id: 'feedbackToast' });

    try {
      const response = await fetch(formspreeURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Feedback submission failed with status ${response.status}`);
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        feedback: '',
        formType: 'Summit Feedback',
      });

      confetti();

      toast.success('Thank you for your feedback!', { id: 'feedbackToast' });
    } catch (error) {
      console.error('Feedback submission error:', error);
      toast.error('Oops! Could not send feedback. Please try again later.', { id: 'feedbackToast' });
    }
  };

  return (
    <section id="feedback" className="bg-gray-50 py-20 text-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-highviewBlue mb-10">
          Summit Feedback
        </h2>

        <img
          src="images/summit-feedback.jpg"
          alt="Summit feedback session"
          className="rounded-xl shadow-lg mb-12 mx-auto w-full max-h-[400px] object-cover"
        />

        {submitted ? (
          <div className="text-center text-green-700 text-lg font-medium">
            <p>Thanks for your feedback!</p>
            <p>We appreciate your input and will review it carefully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 shadow-lg rounded-lg">
            <input type="hidden" name="formType" value="Summit Feedback" />

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
                placeholder="John Smith"
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
                placeholder="john@example.com"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-highviewBlue"
              />
            </div>

            <div>
              <label htmlFor="feedback" className="block mb-1 font-semibold">
                Your Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                rows="6"
                value={formData.feedback}
                onChange={handleChange}
                required
                placeholder="Please share your thoughts about the Summit."
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-highviewBlue"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-highviewBlue text-white py-3 rounded font-semibold hover:bg-blue-900 transition"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </section>
  );
}