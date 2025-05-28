// src/pages/Home.js
import React from 'react';

export default function Home() {
  return (
    <section className="text-center mt-20 px-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-blue-900">
        Welcome to the Highview Capital Annual Summit 2025
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
        Join us in <strong>Cherry Creek, Denver, Colorado</strong> from <strong>September 12–15, 2025</strong> for four
        days of strategic sessions, networking opportunities, and exclusive insights from top industry leaders.
      </p>
      <img
        src="/images/summit-hero.jpg"
        alt="Denver Cherry Creek Skyline during Summit"
        className="mt-10 rounded-xl shadow-lg max-w-full mx-auto"
      />
    </section>
  );
}