
import React from 'react';
import { FileCode, User, Mail, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-white/50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="vintage-card">
            <div className="flex items-center mb-6">
              <User size={24} className="text-vintage-dark-brown mr-2" />
              <h3 className="font-courier text-2xl font-bold text-vintage-dark-brown">
                Who I Am
              </h3>
            </div>
            
            <p className="font-oldstandard text-lg mb-4">
              Hello, I'm Samuel Meneses, a passionate HTML and CSS developer with a love for creating 
              elegant, responsive web designs.
            </p>
            
            <p className="font-oldstandard text-lg mb-4">
              I specialize in crafting pixel-perfect interfaces that blend aesthetics with functionality, 
              ensuring websites not only look beautiful but also provide exceptional user experiences.
            </p>
            
            <p className="font-oldstandard text-lg">
              My approach combines traditional design principles with modern web technologies, 
              creating websites that feel both timeless and contemporary.
            </p>
          </div>
          
          <div className="vintage-card flex flex-col justify-between">
            <div className="flex items-center mb-6">
              <FileCode size={24} className="text-vintage-dark-brown mr-2" />
              <h3 className="font-courier text-2xl font-bold text-vintage-dark-brown">
                Personal Info
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail size={20} className="text-vintage-brown mr-4" />
                <div>
                  <p className="font-courier text-sm text-vintage-brown">Email</p>
                  <p className="font-oldstandard">samuel@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin size={20} className="text-vintage-brown mr-4" />
                <div>
                  <p className="font-courier text-sm text-vintage-brown">Location</p>
                  <p className="font-oldstandard">São Paulo, Brazil</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Calendar size={20} className="text-vintage-brown mr-4" />
                <div>
                  <p className="font-courier text-sm text-vintage-brown">Experience</p>
                  <p className="font-oldstandard">5+ Years of Web Development</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="vintage-button mt-8 text-center"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
