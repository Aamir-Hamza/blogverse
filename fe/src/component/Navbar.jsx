import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="logo">
          <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-200">
            BlogVerse
          </Link>
        </div>
        
        <ul className="flex space-x-8">
          <li>
            <Link 
              to="/home" 
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/create" 
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
            >
              Create Blog
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/profile" 
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;