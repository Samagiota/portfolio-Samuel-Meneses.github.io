
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-[90vh] flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 py-16 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <span className="code-tag mb-4">{"<html>"}</span>
        </div>
        
        <h1 className="font-courier text-4xl md:text-6xl font-bold text-vintage-dark-brown mb-6 typewriter">
          Samuel Meneses
        </h1>
        
        <p className="font-oldstandard text-xl md:text-2xl text-vintage-text mb-8">
          HTML & CSS Developer | Creating Beautiful Web Experiences
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#projects" className="vintage-button">
            View My Work
          </a>
          <a href="#contact" className="vintage-button bg-white text-vintage-dark-brown hover:bg-vintage-accent/30">
            Contact Me
          </a>
        </div>

        <div className="code-tag">
          {"</html>"}
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-vintage-dark-brown hover:text-vintage-brown transition-colors duration-300"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={32} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
