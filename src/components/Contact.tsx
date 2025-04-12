
import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { useLanguage } from '../pages/Index';

const Contact = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Get In Touch",
      contactInfo: "Contact Information",
      email: "Email",
      location: "Location",
      socialProfiles: "Social Profiles",
      sendMessage: "Send Me a Message",
      name: "Name",
      subject: "Subject",
      message: "Message",
      submit: "Send Message"
    },
    'pt-BR': {
      title: "Entre em Contato",
      contactInfo: "Informações de Contato",
      email: "Email",
      location: "Localização",
      socialProfiles: "Perfis Sociais",
      sendMessage: "Envie-me uma Mensagem",
      name: "Nome",
      subject: "Assunto",
      message: "Mensagem",
      submit: "Enviar Mensagem"
    }
  };

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">{t.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="vintage-card">
            <h3 className="font-courier text-2xl font-bold text-vintage-dark-brown mb-6">
              {t.contactInfo}
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail size={20} className="text-vintage-brown mr-4" />
                <div>
                  <p className="font-courier text-sm text-vintage-brown">{t.email}</p>
                  <a href="mailto:sanmeneses.developer@gmail.com" className="font-oldstandard hover:text-vintage-dark-brown transition-colors">
                    sanmeneses.developer@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin size={20} className="text-vintage-brown mr-4" />
                <div>
                  <p className="font-courier text-sm text-vintage-brown">{t.location}</p>
                  <p className="font-oldstandard">Imperatriz, Maranhão, Brazil</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-courier text-lg font-bold text-vintage-dark-brown mb-4">
                {t.socialProfiles}
              </h4>
              
              <div className="flex gap-4">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-vintage-accent/20 rounded-full text-vintage-dark-brown hover:bg-vintage-brown hover:text-white transition-colors duration-200"
                  aria-label="GitHub profile"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-vintage-accent/20 rounded-full text-vintage-dark-brown hover:bg-vintage-brown hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="vintage-card">
            <h3 className="font-courier text-2xl font-bold text-vintage-dark-brown mb-6">
              {t.sendMessage}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-courier text-sm text-vintage-brown mb-1">
                  {t.name}
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="vintage-input w-full" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-courier text-sm text-vintage-brown mb-1">
                  {t.email}
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="vintage-input w-full" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block font-courier text-sm text-vintage-brown mb-1">
                  {t.subject}
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="vintage-input w-full" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-courier text-sm text-vintage-brown mb-1">
                  {t.message}
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="vintage-input w-full resize-none" 
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="vintage-button w-full">
                {t.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
