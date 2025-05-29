import React from 'react';

const mediaItems = [
  {
    title: '2024 Summit Recap',
    description: 'Highlights from last year’s event in Scottsdale, Arizona.',
    imgSrc: 'images/conference-recap.jpg',
    videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Replace with real video if you have it
  },
  {
    title: 'Highview Culture & Events',
    description: 'A glimpse into the culture and community behind Highview Capital.',
    imgSrc: 'images/event-crowd.jpg',
    videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

export default function Media() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-highviewBlue mb-12">
        Summit Media Highlights
      </h2>

      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Relive moments from past events and explore the energy and insights shared at the Highview Capital Summits.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-highviewBlue mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a
                href={item.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-highviewBlue text-white px-4 py-2 rounded hover:bg-blue-800 transition"
              >
                Watch Video
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}