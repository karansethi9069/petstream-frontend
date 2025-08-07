// src/components/layout/Navbar.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ isScrolled, currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isHomePage = currentPath === '/';
  const linkColor = isScrolled || !isHomePage ? 'text-gray-700' : 'text-white';
  const activeLinkColor = isScrolled || !isHomePage ? 'text-primary-700' : 'text-white';

  return (
    <nav>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-gray-700 focus:outline-none"
      >
        {/* {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />} */}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`font-medium hover:text-primary-600 transition-colors ${
                currentPath === link.path
                  ? `${activeLinkColor} font-semibold`
                  : linkColor
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}

        {/* New About Us link */}
        <li>
          <NavLink
            to="/about/us"
            className={({ isActive }) =>
              `font-medium hover:text-primary-600 transition-colors ${
                isActive ? `${activeLinkColor} font-semibold` : linkColor
              }`
            }
          >
            About Us
          </NavLink>
        </li>

        <li>
          <Link
            to="/contact"
            className="btn btn-primary"
          >
            Get a Quote
          </Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-90 z-50">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {/* <FaTimes size={24} /> */}
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-white text-xl font-medium hover:text-primary-400 transition-colors ${
                    currentPath === link.path ? 'text-primary-400 font-semibold' : ''
                  }`}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* New About Us link */}
            <li>
              <NavLink
                to="/about/us"
                className={({ isActive }) =>
                  `text-white text-xl font-medium hover:text-primary-400 transition-colors ${
                    isActive ? 'text-primary-400 font-semibold' : ''
                  }`
                }
                onClick={toggleMenu}
              >
                About Us
              </NavLink>
            </li>

            <li>
              <Link
                to="/contact"
                className="btn btn-primary text-xl"
                onClick={toggleMenu}
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
