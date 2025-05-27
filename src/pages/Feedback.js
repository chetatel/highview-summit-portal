import React, { useState } from 'react';

export default function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Here you would normally send feedback to your backend or service
    setSubmitted(true);
  }

  return (
    <div className="max-w-2xl mx-auto mt-12 px-6">
      <h2 className="text-4xl font-bold mb-6">Your Feedback Matters</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <textarea
            required
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Please share your thoughts about the summit..."
            className="p-3 border border-gray-300 rounded-md text-gray-700"
            rows={5}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Submit Feedback
          </button>
        </form>
      ) : (
        <p className="text-green-600 font-semibold">Thank you for your feedback!</p>
      )}
    </div>
  );
}