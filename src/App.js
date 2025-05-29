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
    <Router basename="/highview-summit-portal">
      <nav className="p-4 bg-gray-100">
        <Link to="/home" className="mr-6 text-highviewBlue hover:underline">Home</Link>
        <Link to="/about" className="mr-6 text-highviewBlue hover:underline">About</Link>
        <Link to="/agenda" className="mr-6 text-highviewBlue hover:underline">Agenda</Link>
        <Link to="/documents" className="mr-6 text-highviewBlue hover:underline">Documents</Link>
        <Link to="/feedback" className="mr-6 text-highviewBlue hover:underline">Feedback</Link>
        <Link to="/media" className="mr-6 text-highviewBlue hover:underline">Media</Link>
        <Link to="/speakers" className="mr-6 text-highviewBlue hover:underline">Speakers</Link>
        <Link to="/contact" className="mr-6 text-highviewBlue hover:underline">Contact</Link>
      </nav>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/media" element={<Media />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}