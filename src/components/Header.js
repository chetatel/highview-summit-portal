import React from 'react';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Highview Capital Summit 2025</h1>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="#agenda" className="hover:underline">Agenda</a></li>
            <li><a href="#speakers" className="hover:underline">Speakers</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}