
import React, { useState, createContext, useContext } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Create a language context to share the language state across components
export type LanguageType = 'en' | 'pt-BR';
type LanguageContextType = {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

const Index = () => {
  const [language, setLanguage] = useState<LanguageType>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default Index;
