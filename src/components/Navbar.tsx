import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white bg-opacity-30 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
        <div className="flex items-center space-x-3">
  <img src="/icon.png" alt="Logo" className="h-10 w-10 rounded-full" />
  <span className="text-2xl font-bold text-purple-600">Portfolio</span>
</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-purple-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">About</a>
            <a href="#projects" className="text-gray-600 hover:text-purple-600 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-purple-600">About</a>
              <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Projects</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;