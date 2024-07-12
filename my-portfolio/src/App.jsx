import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Test from './pages/Test';
import Header from './components/Header';
import Background from './components/Background'; // Adjust the path as necessary
import './App.css';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isContactPage = location.pathname === "/contact";

  return (
    <div className="relative text-center overflow-hidden">
      {(isHomePage || isAboutPage || isContactPage) && (
        <Background endpoint={location.pathname} />
      )}
      <div className="relative z-10 glass-effect">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
