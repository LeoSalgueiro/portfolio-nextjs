// components/ProyectoWeb.js
'use client'
import React from 'react';

const ProyectoWeb = () => {
  return (
    <div className="bg-semi-transparent shadow-md p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Proyecto Web</h2>
      <p className="text-gray-600">
        Los proyectos web son una parte esencial del mundo digital. Estos proyectos implican la creación de sitios web
        atractivos y funcionales para una variedad de propósitos. Ya sea que estés construyendo una tienda en línea,
        un blog personal o una aplicación web compleja, los proyectos web requieren habilidades de diseño, desarrollo
        y optimización.
      </p>
      <div className="mt-4">
        <p className="text-gray-700">Ejemplo de lo que podrías incluir en un proyecto web:</p>
        <ul className="list-disc pl-6">
          <li>Diseño atractivo y responsive</li>
          <li>Interfaz de usuario intuitiva</li>
          <li>Funcionalidades avanzadas</li>
          <li>Optimización para motores de búsqueda (SEO)</li>
          <li>Seguridad y protección de datos</li>
        </ul>
      </div>
    </div>
  );
};

export default ProyectoWeb;
