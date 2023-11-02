import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-600 text-white">
      <div>
        <Link to="/" className="flex items-center text-white no-underline">
          <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
              Whisper
          </span>
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/signup" className="text-gray-400 no-underline hover:text-white">Sign Up</Link>
        <Link to="/login" className="text-gray-400 no-underline hover:text-white">Log In</Link>
      </div>
    </nav>
  );
};

export default Navbar;