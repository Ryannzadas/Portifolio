import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
              <img
                src="/img/Captura_de_tela_2025-07-06_124456.png"
                alt="Foto João Ryan"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              João Ryan
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Desenvolvedor Full Stack
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Apaixonado por criar soluções digitais inovadoras. Especializado em desenvolvimento web moderno 
              com foco em experiência do usuário e performance.
            </p>
          </div>

          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contato');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Entre em Contato
            </a>
            <a
              href="#projetos"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projetos');
              }}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Ver Projetos
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Ryannzadas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-ryan-941769268/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:joaoryan2005@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('sobre')}
            className="animate-bounce text-blue-600 hover:text-blue-700 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
