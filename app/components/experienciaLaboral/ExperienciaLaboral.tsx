// components/ExperienciaLaboral.tsx

import React from 'react';

type Experiencia = {
  titulo: string;
  descripcion: string;
  detalles: string[];
};

type Props = {
  experiencia: Experiencia;
};

const ExperienciaLaboral: React.FC<Props> = ({ experiencia }) => {
  return (
    <div className="bg-semi-transparent shadow-md p-6 rounded-lg mb-4">
      <h2 className="text-2xl font-semibold mb-2">{experiencia.titulo}</h2>
      <p className="text-gray-600">{experiencia.descripcion}</p>
      <div className="mt-4">
        <p className="text-gray-700">Detalles de la experiencia:</p>
        <ul className="list-disc pl-6">
          {experiencia.detalles.map((detalle, index) => (
            <li key={index}>{detalle}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienciaLaboral;
