import React from "react";

const speakers = [
  {
    name: "Steve Russell",
    title: "Senior Managing Director, Highview Capital",
    bio: "Steve leads our capital growth strategy and investment portfolio with 20+ years of experience.",
  },
  {
    name: "Jane Doe",
    title: "Chief Investment Officer",
    bio: "Jane specializes in emerging markets and leads innovation in investment strategies.",
  },
  {
    name: "John Smith",
    title: "Market Analyst",
    bio: "John provides deep insights into market trends and economic forecasts.",
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h3 className="text-4xl font-bold mb-12 text-center">Featured Speakers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {speakers.map(({ name, title, bio }) => (
            <div key={name} className="bg-gray-100 rounded-lg shadow p-6 text-center">
              <div className="w-32 h-32 bg-blue-600 text-white rounded-full mx-auto flex items-center justify-center text-3xl font-bold mb-4">
                {name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h4 className="text-xl font-semibold">{name}</h4>
              <p className="text-sm text-gray-600 italic">{title}</p>
              <p className="mt-4 text-gray-700">{bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}