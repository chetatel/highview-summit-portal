import React from 'react';

export default function Home() {
  return (
    <section className="text-center py-20 px-6 bg-white">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-highviewBlue">
        Welcome to the Highview Capital Annual Summit 2025
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
        Join us in <strong>Cherry Creek, Denver, Colorado</strong> from{' '}
        <strong>September 12–15, 2025</strong> for four days of strategic sessions, networking opportunities, and
        exclusive insights from top industry leaders.
      </p>
      <img
        src="images/summit-hero.jpg"
        alt="Denver Cherry Creek Skyline during Summit"
        className="mt-10 rounded-2xl shadow-xl max-w-4xl w-full mx-auto object-cover"
      />
    </section>
  );
}