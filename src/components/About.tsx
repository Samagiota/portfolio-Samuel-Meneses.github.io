
import React from 'react';
import { FileCode, User, Mail, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '../pages/Index';

const About = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "About Me",
      whoIAm: "Who I Am",
      intro: "Hello, I'm Samuel Meneses, a passionate HTML and CSS developer with a love for creating elegant, responsive web designs.",
      specialization: "I specialize in crafting pixel-perfect interfaces that blend aesthetics with functionality, ensuring websites not only look beautiful but also provide exceptional user experiences.",
      approach: "My approach combines traditional design principles with modern web technologies, creating websites that feel both timeless and contemporary.",
      personalInfo: "Personal Info",
      email: "Email",
      location: "Location",
      experience: "Experience",
      experienceYears: "5+ Years of Web Development",
      getInTouch: "Get In Touch"
    },
    'pt-BR': {
      title: "Sobre Mim",
      whoIAm: "Quem Sou Eu",
      intro: "Olá, sou Samuel Meneses, um desenvolvedor apaixonado por HTML e CSS com amor por criar designs web elegantes e responsivos.",
      specialization: "Eu me especializo em criar interfaces perfeitas que combinam estética com funcionalidade, garantindo que os sites não apenas pareçam bonitos, mas também proporcionem experiências excepcionais aos usuários.",
      approach: "Minha abordagem combina princípios de design tradicionais com tecnologias web modernas, criando sites que se sentem atemporais e contemporâneos.",
      personalInfo: "Informações Pessoais",
      email: "Email",
      location: "Localização",
      experience: "Experiência",
      experienceYears: "Mais de 5 anos em Desenvolvimento Web",
      getInTouch: "Entre em Contato"
    }
  };

  const t = translations[language];

  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-white/50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">{t.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="vintage-card">
            <div className="flex items-center mb-6">
              <User size={24} className="text-vintage-dark-brown mr-2" />
              <h3 className="font-courier text-2xl font-bold text-vintage-dark-brown">
                {t.whoIAm}
              </h3>
            </div>
            
            <p className="font-oldstandard text-lg mb-4">
              {t.intro}
            </p>
            
            <p className="font-oldstandard text-lg mb-4">
              {t.specialization}
            </p>
            
            <p className="font-oldstandard text-lg">
              {t.approach}
            </p>
          </div>
          
          <div className="vintage-card flex flex-col justify-between">
            <div className="flex items-center mb-6">
              <FileCode size={24} className="text-vintage-dark-brown mr-2" />
              <h3 className="font-courier text-2xl font-bold text-vintage-dark-brown">
                {t.personalInfo}
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail size={20} className="text-vintage-brown mr-4" />
                <div>
                  <p className="font-courier text-sm text-vintage-brown">{t.email}</p>
                  <p className="font-oldstandard">sanmeneses.developer@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin size={20} className="text-vintage-brown mr-4" />
                <div>
                  <p className="font-courier text-sm text-vintage-brown">{t.location}</p>
                  <p className="font-oldstandard">Imperatriz, Maranhão, Brazil</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Calendar size={20} className="text-vintage-brown mr-4" />
                <div>
                  <p className="font-courier text-sm text-vintage-brown">{t.experience}</p>
                  <p className="font-oldstandard">{t.experienceYears}</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="vintage-button mt-8 text-center"
            >
              {t.getInTouch}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
