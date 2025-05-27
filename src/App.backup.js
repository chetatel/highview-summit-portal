import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
      <nav style={{ padding: '1rem', backgroundColor: '#f5f5f5' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
        <Link to="/agenda" style={{ marginRight: '1rem' }}>Agenda</Link>
        <Link to="/documents" style={{ marginRight: '1rem' }}>Documents</Link>
        <Link to="/feedback" style={{ marginRight: '1rem' }}>Feedback</Link>
        <Link to="/media" style={{ marginRight: '1rem' }}>Media</Link>
        <Link to="/speakers" style={{ marginRight: '1rem' }}>Speakers</Link>
        <Link to="/contact" style={{ marginRight: '1rem' }}>Contact</Link>
      </nav>

      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
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