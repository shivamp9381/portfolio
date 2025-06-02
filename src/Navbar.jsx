import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX, FiFileText } from "react-icons/fi"; // Added FiFileText

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", to: "home" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ];

  const resumeLink =
    "https://drive.google.com/file/d/1YMWu1bHqWDU-aj6QuIruEX-SKsa7bId7/view?usp=sharing";

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed w-full z-50 bg-black/60 backdrop-blur-md shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Shivam</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {links.map(({ name, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-300 hover:text-white transition border-b-2 border-transparent hover:border-white"
              >
                {name}
              </Link>
            </li>
          ))}
          {/* Resume link */}
          <li>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-300 hover:text-white transition border-b-2 border-transparent hover:border-white"
            >
              <FiFileText className="text-lg" />
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-black/80 backdrop-blur-sm py-4 space-y-4">
          {links.map(({ name, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer text-gray-300 hover:text-white text-lg transition"
              >
                {name}
              </Link>
            </li>
          ))}
          {/* Resume link for mobile */}
          <li>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white text-lg transition"
              onClick={() => setMenuOpen(false)}
            >
              <FiFileText />
              Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
