import React from 'react';

export default function Media() {
  return (
    <div className="max-w-4xl mx-auto mt-10 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Summit Media Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src="/media/keynote.jpg" alt="Keynote speaker on stage" className="rounded shadow" />
        <img src="/media/networking.jpg" alt="Networking session" className="rounded shadow" />
        <img src="/media/discussion.jpg" alt="Breakout session discussion" className="rounded shadow" />
      </div>
    </div>
  );
}