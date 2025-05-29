import React from 'react';

const documents = [
  {
    title: 'Welcome Packet',
    description:
      'An overview of the 2025 Highview Capital Annual Summit including venue info, dress code, and logistics.',
    file: '/docs/2025-summit-welcome-packet.pdf',
    image: 'images/docs-welcome.jpg',
  },
  {
    title: 'Summit Agenda PDF',
    description:
      'A printable version of the complete event schedule from September 12–15, 2025.',
    file: '/docs/2025-summit-agenda.pdf',
    image: 'images/docs-agenda.jpg',
  },
  {
    title: 'Speaker Highlights',
    description:
      'Detailed bios and session info for featured speakers and panelists.',
    file: '/docs/2025-speaker-highlights.pdf',
    image: 'images/docs-speakers.jpg',
  },
];

export default function Documents() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-highviewBlue mb-12">
        Summit Documents
      </h2>

      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Download key materials to help you prepare for the 2025 Highview Capital Annual Summit. We recommend reviewing each document before attending to ensure a smooth and informed experience.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={doc.image}
              alt={doc.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-highviewBlue mb-2">{doc.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{doc.description}</p>
              <a
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-highviewBlue text-white px-4 py-2 rounded hover:bg-blue-900 transition"
              >
                View PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}