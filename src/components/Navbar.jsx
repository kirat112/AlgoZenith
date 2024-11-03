// src/components/Header.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-end items-center p-4 bg-gray-100 border-b">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">img</span>
          <div className="w-8 h-8 rounded-full bg-gray-400"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
