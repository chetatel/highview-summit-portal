import React from 'react';

const documents = [
  {
    title: 'Welcome Packet',
    description: 'An overview of the 2025 Highview Capital Annual Summit including venue info, dress code, and logistics.',
    file: '/docs/2025-summit-welcome-packet.pdf',
  },
  {
    title: 'Summit Agenda PDF',
    description: 'A printable version of the complete event schedule from September 12–15, 2025.',
    file: '/docs/2025-summit-agenda.pdf',
  },
  {
    title: 'Speaker Highlights',
    description: 'Detailed bios and session info for featured speakers and panelists.',
    file: '/docs/2025-speaker-highlights.pdf',
  },
  // Add more documents as needed
];

export default function Documents() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
        Summit Documents
      </h2>

      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Below are downloadable PDFs related to the 2025 Summit. Please review them prior to attending to ensure you're fully prepared.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {documents.map((doc, index) => (
          <div key={index} className="border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition duration-300 bg-white">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{doc.title}</h3>
            <p className="text-gray-600 mb-4">{doc.description}</p>
            <a
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
            >
              View PDF
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}