import React from 'react';

export default function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-extrabold mb-4 text-blue-800">Welcome to the Highview Capital Annual Summit 2025</h1>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
        Join us in Cherry Creek, Denver, CO from September 12–15 for inspiring sessions, networking, and exclusive insights from industry leaders.
      </p>
      <img
        src="/images/summit-hero.jpg"
        alt="Cherry Creek Denver Skyline"
        className="mx-auto mt-10 rounded-lg shadow-lg max-w-full"
      />
    </div>
  );
}