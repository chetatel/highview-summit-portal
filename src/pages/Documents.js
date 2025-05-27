import React from 'react';

export default function Documents() {
  const documents = [
    { name: 'Summit Program.pdf', url: '/documents/Summit_Program_2025.pdf' },
    { name: 'Investment Report Q1.pdf', url: '/documents/Investment_Report_Q1.pdf' },
    { name: 'Market Analysis.pdf', url: '/documents/Market_Analysis.pdf' },
  ];

  return (
    <div className="max-w-3xl mx-auto mt-12 px-6">
      <h2 className="text-4xl font-bold mb-6">Important Documents</h2>
      <ul className="list-disc list-inside space-y-3 text-blue-600">
        {documents.map(({ name, url }) => (
          <li key={name}>
            <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}