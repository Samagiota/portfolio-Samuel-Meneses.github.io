
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveLink: string;
  githubLink: string;
};

const ProjectCard: React.FC<Project> = ({ title, description, tags, image, liveLink, githubLink }) => {
  return (
    <div className="vintage-card group">
      <div className="relative overflow-hidden mb-6 border border-vintage-brown/30 rounded-sm">
        <div className="absolute inset-0 bg-vintage-dark-brown/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full text-vintage-dark-brown hover:bg-vintage-paper transition-colors duration-200"
            aria-label={`View ${title} live site`}
          >
            <ExternalLink size={20} />
          </a>
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full text-vintage-dark-brown hover:bg-vintage-paper transition-colors duration-200"
            aria-label={`View ${title} GitHub repository`}
          >
            <Github size={20} />
          </a>
        </div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="font-courier text-xl font-bold text-vintage-dark-brown mb-2">{title}</h3>
      <p className="font-oldstandard text-vintage-text mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="code-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Vintage E-commerce",
      description: "A responsive e-commerce website with a vintage aesthetic, featuring product galleries and cart functionality.",
      tags: ["HTML", "CSS", "Responsive"],
      image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Portfolio Template",
      description: "A customizable portfolio template for creative professionals with smooth animations.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Restaurant Website",
      description: "An elegant website for a local restaurant featuring menu, reservation system, and testimonials.",
      tags: ["HTML", "CSS", "Responsive"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveLink: "#",
      githubLink: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="vintage-button">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
