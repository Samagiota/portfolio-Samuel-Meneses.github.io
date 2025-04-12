
import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 bg-vintage-dark-brown text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Code size={20} />
            <span className="font-courier font-bold">Samuel Meneses</span>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center gap-1 mb-2">
              <span className="font-oldstandard text-sm">Handcrafted with</span>
              <Heart size={14} className="text-red-400" />
              <span className="font-oldstandard text-sm">using HTML & CSS</span>
            </div>
            
            <p className="font-courier text-xs text-white/60">
              &copy; {currentYear} Samuel Meneses. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <nav className="flex flex-wrap justify-center gap-6">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-courier text-sm text-white/80 hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
