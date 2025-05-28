import React from 'react';

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">
        About the Highview Capital Annual Summit
      </h2>

      <img
        src="/images/denver-skyline.jpg"
        alt="Denver skyline"
        className="rounded-xl shadow-lg mb-10 mx-auto"
      />

      <p className="text-lg text-gray-700 mb-6">
        The Highview Capital Annual Summit is a premier gathering of business leaders, innovators,
        and partners, focused on strategic growth, knowledge exchange, and relationship-building.
        Held annually in Cherry Creek, Denver, Colorado, this event serves as a platform for sharing
        best practices, aligning goals, and celebrating collective successes.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        At the <strong>2025 Summit</strong>, attendees will experience curated sessions led by
        industry leaders, dynamic roundtable discussions, and meaningful networking opportunities.
        This year’s program is designed to inspire collaboration and spark new ventures that
        advance our shared mission.
      </p>

      <p className="text-lg text-gray-700">
        Our mission is to foster an environment where executives can reflect, connect, and gain
        actionable insights—empowering teams and leaders alike to build long-term value.
      </p>
    </section>
  );
}