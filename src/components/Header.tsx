
import React, { useState } from 'react';
import { Menu, X, Code } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 px-6 md:px-12 lg:px-24 sticky top-0 z-50 bg-vintage-paper/90 backdrop-blur-sm border-b border-vintage-brown/20">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-vintage-dark-brown">
          <Code size={24} />
          <span className="font-courier font-bold text-lg">SM</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-courier text-vintage-text hover:text-vintage-dark-brown transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <button className="md:hidden text-vintage-dark-brown" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-6 bg-white/90 backdrop-blur-sm border-b border-vintage-brown/20">
          <nav className="flex flex-col space-y-4">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-courier text-vintage-text hover:text-vintage-dark-brown transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
