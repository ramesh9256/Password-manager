import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="m-auto bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg py-4 px-6 w-[50%] rounded-lg mt-6 
                    sm:w-[80%] md:w-[60%] lg:w-[50%]">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <h1 className="text-white text-2xl font-bold tracking-wider animate-pulse">
          Password Manager
        </h1>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link
            to="/"
            className="text-white text-lg font-semibold hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Add
          </Link>
          <Link
            to="/show"
            className="text-white text-lg font-semibold hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Get
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
