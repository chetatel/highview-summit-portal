import React from 'react';

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-highviewBlue mb-8">
        About the Highview Capital Annual Summit
      </h2>

      <img
        src="images/denver-skyline.jpg"
        alt="Denver skyline"
        className="rounded-xl shadow-lg mb-10 mx-auto w-full max-h-[400px] object-cover"
      />

      <p className="text-lg text-gray-700 mb-6 text-justify">
        The Highview Capital Annual Summit is a premier gathering of business leaders, innovators,
        and partners, focused on strategic growth, knowledge exchange, and relationship-building.
        Held annually in <strong>Cherry Creek, Denver, Colorado</strong>, this event serves as a
        platform for sharing best practices, aligning goals, and celebrating collective successes.
      </p>

      <p className="text-lg text-gray-700 mb-6 text-justify">
        At the <strong>2025 Summit</strong>, attendees will experience curated sessions led by
        industry leaders, dynamic roundtable discussions, and meaningful networking opportunities.
        This year’s program is designed to inspire collaboration and spark new ventures that
        advance our shared mission.
      </p>

      <p className="text-lg text-gray-700 text-justify">
        Our mission is to foster an environment where executives can reflect, connect, and gain
        actionable insights—empowering teams and leaders alike to build long-term value.
      </p>
    </section>
  );
}