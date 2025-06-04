import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Features', to: 'features' },
    { label: 'Categories', to: 'categories' },
    { label: 'Gallery', to: 'gallery' },
    { label: 'Events', to: 'events' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-black/80 to-purple-900/80 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-2xl font-bold text-purple-400 tracking-widest"
        >
          <span className="text-white">Event</span>Ify
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-white hover:text-purple-400 cursor-pointer transition"
            >
              {link.label}
            </Link>
          ))}

          {/* Login Button */}
          <button
            className="ml-4 px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow transition duration-300 font-medium"
            onClick={() => alert('Login Modal Coming Soon!')} // replace with modal handler later
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <motion.div
          className="md:hidden px-6 pb-4 bg-black/80 backdrop-blur-md"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-white hover:text-purple-400 cursor-pointer transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Login Button */}
            <button
              className="mt-2 w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
              onClick={() => alert('Login Modal Coming Soon!')}
            >
              Login
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
