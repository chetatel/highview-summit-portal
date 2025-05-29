import React from 'react';

export default function Speakers() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-highviewBlue mb-12">
        2025 Featured Speakers
      </h2>

      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        We’re gathering the most influential voices across industries to share insights, inspire action, and spark meaningful conversations.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-xl shadow-md">
          <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
          <h3 className="text-xl font-semibold text-highviewBlue">TBA</h3>
          <p className="text-gray-500">Speaker details will be announced soon.</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md">
          <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
          <h3 className="text-xl font-semibold text-highviewBlue">TBA</h3>
          <p className="text-gray-500">Speaker details will be announced soon.</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md">
          <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
          <h3 className="text-xl font-semibold text-highviewBlue">TBA</h3>
          <p className="text-gray-500">Speaker details will be announced soon.</p>
        </div>
      </div>
    </section>
  );
}