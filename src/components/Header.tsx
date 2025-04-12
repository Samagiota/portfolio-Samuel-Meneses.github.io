
import React, { useState } from 'react';
import { Menu, X, Code, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'pt-BR' for Portuguese

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    // In a real app, we would use a context or state management to handle language throughout the app
    console.log(`Language changed to ${lang}`);
  };

  // Navigation items with translations
  const navItems = {
    'en': ['Home', 'About', 'Projects', 'Skills', 'Contact'],
    'pt-BR': ['Início', 'Sobre', 'Projetos', 'Habilidades', 'Contato']
  };

  return (
    <header className="py-4 px-6 md:px-12 lg:px-24 sticky top-0 z-50 bg-vintage-paper/90 backdrop-blur-sm border-b border-vintage-brown/20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-2 text-vintage-dark-brown">
            <Code size={24} />
            <span className="font-courier font-bold text-lg">SM</span>
          </a>
          
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-vintage-dark-brown hover:text-vintage-accent transition-colors">
              <Globe size={20} />
              <span className="ml-1 font-courier text-sm">
                {language === 'en' ? 'EN' : 'PT-BR'}
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => changeLanguage('en')}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('pt-BR')}>
                Português (Brasil)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems[language as keyof typeof navItems].map((item, index) => (
            <a
              key={item}
              href={`#${navItems['en'][index].toLowerCase()}`} // Keep the English IDs for the href
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
            {navItems[language as keyof typeof navItems].map((item, index) => (
              <a
                key={item}
                href={`#${navItems['en'][index].toLowerCase()}`} // Keep the English IDs for the href
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
