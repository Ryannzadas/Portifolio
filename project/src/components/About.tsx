import React from 'react';
import { Code, Coffee, Lightbulb, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Código Limpo",
      description: "Escrevo código limpo, bem documentado e seguindo as melhores práticas."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
      title: "Soluções Criativas",
      description: "Encontro soluções inovadoras para problemas complexos."
    },
    {
      icon: <Zap className="w-8 h-8 text-green-600" />,
      title: "Performance",
      description: "Otimizo aplicações para máxima performance e escalabilidade."
    },
    {
      icon: <Coffee className="w-8 h-8 text-orange-600" />,
      title: "Dedicação",
      description: "Comprometido com a entrega de projetos de alta qualidade."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Sou um desenvolvedor full stack apaixonado por Back-End, Web e desenvolvimento de jogos.
              Buscando sempre evoluir e criar soluções inovadoras.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Minha jornada começou com curiosidade em programação e evoluiu para uma paixão 
              genuína por fazer sistemas. Adoro aprender novas 
              tecnologias e aplicá-las em meus projetos.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Quando não estou codificando, gosto de estudar novas tendências tecnológicas.
              
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;