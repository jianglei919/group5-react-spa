import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Attractions from './pages/Attractions';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#main">Skip to main content</a>
      <NavBar />
      <main id="main" role="main" aria-live="polite">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="site-footer" role="contentinfo">
        <p>© {new Date().getFullYear()} Jaykumar Tusharbhai Panchal, Lei Jiang, Lwin Moe Oo, Vikrant Singh. All rights reserved.</p>
      </footer>
    </div>
  );
}
