
import React from 'react';
import { Code, Heart } from 'lucide-react';
import { useLanguage } from '../pages/Index';

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const translations = {
    en: {
      handcrafted: "Handcrafted with",
      using: "using HTML & CSS",
      rights: "All rights reserved.",
      navItems: ['Home', 'About', 'Projects', 'Skills', 'Contact']
    },
    'pt-BR': {
      handcrafted: "Feito à mão com",
      using: "usando HTML & CSS",
      rights: "Todos os direitos reservados.",
      navItems: ['Início', 'Sobre', 'Projetos', 'Habilidades', 'Contato']
    }
  };

  const t = translations[language];
  
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
              <span className="font-oldstandard text-sm">{t.handcrafted}</span>
              <Heart size={14} className="text-red-400" />
              <span className="font-oldstandard text-sm">{t.using}</span>
            </div>
            
            <p className="font-courier text-xs text-white/60">
              &copy; {currentYear} Samuel Meneses. {t.rights}
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <nav className="flex flex-wrap justify-center gap-6">
            {t.navItems.map((item, index) => (
              <a
                key={item}
                href={`#${['home', 'about', 'projects', 'skills', 'contact'][index]}`}
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
