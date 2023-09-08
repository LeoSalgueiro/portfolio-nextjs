// pages/Portafolio.tsx

import React from 'react';
import ExperienciaLaboral from './ExperienciaLaboral';

type Experiencia = {
  titulo: string;
  descripcion: string;
  detalles: string[];
};

const experiencias: Experiencia[] = [
  {
    titulo: 'Desarrollador Web',
    descripcion: 'Trabajé como desarrollador web en una agencia de diseño durante 2 años.',
    detalles: [
      'Desarrollé sitios web interactivos y responsivos utilizando HTML, CSS y JavaScript.',
      'Colaboré en proyectos para clientes de diversas industrias.',
      'Optimicé el rendimiento y la accesibilidad de los sitios web.'
    ]
  },
  {
    titulo: 'Diseñador Gráfico',
    descripcion: 'Fui diseñador gráfico freelance durante 1 año.',
    detalles: [
      'Diseñé logotipos y material de marketing para pequeñas empresas locales.',
      'Colaboré con clientes para reflejar su visión en el diseño.',
      'Entregué proyectos creativos y de alta calidad.'
    ]
  }
];

const Experiencia: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Mi Experiencia Laboral</h1>
      {experiencias.map((experiencia, index) => (
        <ExperienciaLaboral key={index} experiencia={experiencia} />
      ))}
    </div>
  );
};

export default Experiencia;
