import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Database } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Poke-Api",
      description: "Uma api de pokedex feita em Java.",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQH22Evv_Dwpmw/feedshare-shrink_2048_1536/B4DZcn.N.ZGUAo-/0/1748722311812?e=1755129600&v=beta&t=T0tP0zHk-j1rwTxzFfGSirnXGDtDKazeC9fT-s-kXXE",
      technologies: ["Java", "HTML5", "CSS3", "JavaScript", "Spring Boot"],
      github: "https://github.com/Ryannzadas/PokeApi-pokedex",
      demo: "https://demo.com",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Sistema de Biblioteca",
      description: "Uma biblioteca simples.",
      image: "/img/bibi.png",
      technologies: ["React Native", "Vite", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Ryannzadas/Biblioteca",
      demo: "https://biblioteca-psi-eight.vercel.app/",
      icon: <Globe className="w-6 h-6" />
    },

  ];

  return (
    <section id="projetos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meus Projetos</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, demonstrando diferentes tecnologias e soluções inovadoras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm">Código</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;