import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TextSpan from "./TextSpan";
import { FaBars, FaTimes } from "react-icons/fa";
import StyledBox from "./StyledBox"; // Import StyledBox

function Header() {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = headerRef.current;
    const xPos = (offsetX / offsetWidth) * 150;
    const yPos = (offsetY / offsetHeight) * 150;
    headerRef.current.style.backgroundPosition = `${xPos}% ${yPos}%`;
  };

  const handleMouseLeave = () => {
    headerRef.current.style.backgroundPosition = "center";
  };

  const title = "Orangeliquid".split("");

  const colors = [
    "text-red-700",
    "text-orange-500",
    "text-yellow-500",
    "text-green-500",
    "text-blue-500",
    "text-indigo-500",
    "text-purple-500",
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      ref={headerRef}
      className="px-8 py-8 bg-slate-900"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <StyledBox className="w-full from-orange-600 to-purple-600">
        <nav className="container mx-auto flex justify-between items-center mt-4">
          <a
            href="https://github.com/Orangeliquid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="text-4xl md:text-5xl font-bold font-pacifico"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              {title.map((letter, index) => (
                <TextSpan key={index}>
                  <span className={`${colors[index % colors.length]}`}>
                    {letter}
                  </span>
                </TextSpan>
              ))}
            </motion.div>
          </a>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-50 focus:outline-none hover:rotate-180 duration-300 hover:text-purple-500"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <ul className={`hidden md:flex space-x-4 text-2xl font-bold text-gray-50`}>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <Link to="/" className="hover:opacity-75 font-montserrat">
                Home
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <Link to="/about" className="hover:opacity-75 font-montserrat">
                About
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              <Link
                to="/contact"
                className="hover:opacity-75 font-montserrat"
              >
                Contact
              </Link>
            </motion.li>
          </ul>
        </nav>
        {isMenuOpen && (
          <div className="absolute m-10 top-full left-0 right-0 bg-opacity-90 flex flex-col items-center justify-center z-50 font-bold text-gray-50">
            <StyledBox className="w-full max-w-md from-purple-600 to-orange-600">
              <ul className="flex flex-col items-center space-y-4 text-2xl">
                <li>
                  <Link to="/" className="hover:opacity-75 font-montserra" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:opacity-75 font-montserrat" onClick={toggleMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:opacity-75 font-montserrat" onClick={toggleMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </StyledBox>
          </div>
        )}
      </StyledBox>
    </motion.header>
  );
}

export default Header;
