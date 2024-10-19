import React, { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Angel Tapia</h1>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center">
            <Home size={20} className="mr-1" />
            Home
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 animate-fadeIn">
          <a href="#" className="block py-2 text-gray-600 hover:text-gray-900 flex items-center" onClick={() => setIsMenuOpen(false)}>
            <Home size={20} className="mr-1" />
            Home
          </a>
          <a href="#about" className="block py-2 text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#projects" className="block py-2 text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" className="block py-2 text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;