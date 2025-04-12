
import React from 'react';
import { useLanguage } from '../pages/Index';

type Skill = {
  name: string;
  level: number;
  icon: string;
};

type Category = {
  title: string;
  skills: Skill[];
};

const SkillBar: React.FC<{ name: string; level: number; icon: string }> = ({ name, level, icon }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <span className="font-courier font-bold text-vintage-dark-brown">{name}</span>
        </div>
        <span className="font-courier text-sm text-vintage-brown">{level}%</span>
      </div>
      <div className="h-3 bg-white rounded-sm overflow-hidden border border-vintage-brown/30">
        <div 
          className="h-full bg-vintage-brown"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "My Skills",
      frontend: "Frontend",
      design: "Design",
      additionalSkills: "Additional Skills",
      skills: {
        frontend: [
          { name: "HTML5", level: 95, icon: "html" },
          { name: "CSS3", level: 90, icon: "css" },
          { name: "JavaScript", level: 75, icon: "js" },
          { name: "Responsive Design", level: 85, icon: "responsive" }
        ],
        design: [
          { name: "UI/UX", level: 80, icon: "ui" },
          { name: "Figma", level: 70, icon: "figma" },
          { name: "Photoshop", level: 65, icon: "ps" },
          { name: "Typography", level: 85, icon: "type" }
        ],
        additional: ["SEO Basics", "Performance Optimization", "Cross-browser Compatibility", "Version Control (Git)", "Accessibility", "CSS Animations", "CSS Grid", "Flexbox"]
      }
    },
    'pt-BR': {
      title: "Minhas Habilidades",
      frontend: "Frontend",
      design: "Design",
      additionalSkills: "Habilidades Adicionais",
      skills: {
        frontend: [
          { name: "HTML5", level: 95, icon: "html" },
          { name: "CSS3", level: 90, icon: "css" },
          { name: "JavaScript", level: 75, icon: "js" },
          { name: "Design Responsivo", level: 85, icon: "responsive" }
        ],
        design: [
          { name: "UI/UX", level: 80, icon: "ui" },
          { name: "Figma", level: 70, icon: "figma" },
          { name: "Photoshop", level: 65, icon: "ps" },
          { name: "Tipografia", level: 85, icon: "type" }
        ],
        additional: ["Noções de SEO", "Otimização de Performance", "Compatibilidade Entre Navegadores", "Controle de Versão (Git)", "Acessibilidade", "Animações CSS", "CSS Grid", "Flexbox"]
      }
    }
  };

  const t = translations[language];

  const skillCategories: Category[] = [
    {
      title: t.frontend,
      skills: t.skills.frontend
    },
    {
      title: t.design,
      skills: t.skills.design
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-white/50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">{t.title}</h2>
        
        <div className="vintage-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="font-courier text-2xl font-bold text-vintage-dark-brown mb-6">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skillIndex}
                      name={skill.name}
                      level={skill.level}
                      icon={skill.icon}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <h3 className="font-courier text-2xl font-bold text-vintage-dark-brown mb-6">
              {t.additionalSkills}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {t.skills.additional.map((skill, index) => (
                <span key={index} className="code-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
