// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Agenda from './pages/Agenda';
import Documents from './pages/Documents';
import Feedback from './pages/Feedback';
import Media from './pages/Media';
import Speakers from './pages/Speakers';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-100 text-center">
        <Link to="/home" className="mx-2 text-blue-700 hover:underline">Home</Link>
        <Link to="/about" className="mx-2 text-blue-700 hover:underline">About</Link>
        <Link to="/agenda" className="mx-2 text-blue-700 hover:underline">Agenda</Link>
        <Link to="/documents" className="mx-2 text-blue-700 hover:underline">Documents</Link>
        <Link to="/feedback" className="mx-2 text-blue-700 hover:underline">Feedback</Link>
        <Link to="/media" className="mx-2 text-blue-700 hover:underline">Media</Link>
        <Link to="/speakers" className="mx-2 text-blue-700 hover:underline">Speakers</Link>
        <Link to="/contact" className="mx-2 text-blue-700 hover:underline">Contact</Link>
      </nav>

      <main className="p-6">
        <Routes>
          {/* Default to Home if at root */}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/media" element={<Media />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>
    </Router>
  );
}