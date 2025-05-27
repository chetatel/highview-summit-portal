import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-24 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold mb-4">Welcome to the 2025 Highview Capital Summit</h2>
        <p className="text-xl mb-8">September 12–15 | Cherry Creek, Denver, CO</p>
        <a
          href="#agenda"
          className="bg-white text-blue-700 font-semibold px-8 py-3 rounded shadow hover:bg-gray-100 transition"
        >
          View Agenda
        </a>
      </div>
    </section>
  );
}