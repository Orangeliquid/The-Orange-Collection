import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Background from './components/Background';
import './App.css';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/The-Orange-Collection/" || location.pathname === "/";
  const isAboutPage = location.pathname === "/The-Orange-Collection/about" || location.pathname === "/about";
  const isContactPage = location.pathname === "/The-Orange-Collection/contact" || location.pathname === "/contact";

  return (
    <div className="relative text-center overflow-hidden">
      {(isHomePage || isAboutPage || isContactPage) && (
        <Background endpoint={location.pathname} />
      )}
      <div className="relative z-10 glass-effect">
        <Header />
        <main>
          <Routes>
            <Route path="/The-Orange-Collection/" element={<Home />} />
            <Route path="/The-Orange-Collection/about" element={<About />} />
            <Route path="/The-Orange-Collection/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
