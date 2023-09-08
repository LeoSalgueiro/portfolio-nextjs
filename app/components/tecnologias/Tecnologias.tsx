// components/Tecnologias.js

import React from 'react';

const tecnologias = [
  { nombre: 'C#', logo: '/logosTecnologias/csharp.svg' },
  { nombre: 'Node.js', logo: '/logosTecnologias/nodejs.svg' },
  { nombre: 'Ant-Design', logo: '/logosTecnologias/antdesign.svg' },
  { nombre: 'Arduino', logo: '/logosTecnologias/arduino.svg' },
  { nombre: 'Bootstrap', logo: '/logosTecnologias/bootstrap.svg' },
  { nombre: 'docker', logo: '/logosTecnologias/docker.svg' },
  { nombre: 'Express', logo: '/logosTecnologias/express.svg' },
  { nombre: 'Heroku', logo: '/logosTecnologias/heroku.svg' },
  { nombre: 'HTML5', logo: '/logosTecnologias/html5.svg' },
  { nombre: 'JavaScript', logo: '/logosTecnologias/javascript.svg' },
  { nombre: 'JQuery', logo: '/logosTecnologias/jquery.svg' },
  { nombre: 'MongoDB', logo: '/logosTecnologias/mongodb.svg' },
  { nombre: 'MSSQL', logo: '/logosTecnologias/mssql.svg' },
  { nombre: 'NestJS', logo: '/logosTecnologias/nestjs.svg' },
  { nombre: 'NPM', logo: '/logosTecnologias/npm.svg' },
  { nombre: 'PhotoShop', logo: '/logosTecnologias/photoshop.svg' },
  { nombre: 'Postman', logo: '/logosTecnologias/postman.svg' },
  { nombre: 'ASP .NET', logo: '/logosTecnologias/puntonet.svg' },
  { nombre: 'Raspberry', logo: '/logosTecnologias/raspberrypi.svg' },
  { nombre: 'React', logo: '/logosTecnologias/react.svg' },
  { nombre: 'TypeScript', logo: '/logosTecnologias/typescript.svg' },
  
  // Agrega más tecnologías y logotipos según tus necesidades 
  { nombre: 'Tailwindcss', logo: 'https://img.shields.io/badge/TailwindCSS-06B6D4.svg?style=flat&logo=tailwindcss&logoColor=white' },
  { nombre: 'NextJS', logo: 'https://img.shields.io/badge/Next JS-191919.svg?style=flat&logo=Next.js&logoColor=white' },
  { nombre: 'VS Code', logo: 'https://img.shields.io/badge/VS Code-007ACC.svg?style=flat&logo=visualstudiocode&logoColor=darkblue' },
  { nombre: 'Axios', logo: 'https://img.shields.io/badge/Axios-542875.svg?style=flat&logo=axios&logoColor=black' },
  { nombre: 'CSS3', logo: 'https://img.shields.io/badge/CSS3-1572B6.svg?style=flat&logo=css3&logoColor=white' },
  { nombre: 'Git', logo: 'https://img.shields.io/badge/Git-F05032.svg?style=flat&logo=git&logoColor=white' },
  { nombre: 'GitHub', logo: 'https://img.shields.io/badge/GitHub-181717.svg?style=flat&logo=github&logoColor=white' },
  { nombre: 'GitLab', logo: 'https://img.shields.io/badge/GitLab-FC6D26.svg?style=flat&logo=gitlab&logoColor=white' },

  { nombre: 'Handlebars', logo: 'https://img.shields.io/badge/Handelbars-e61.svg?style=flat&logo=handlebarsdotjs&logoColor=white' },

  { nombre: 'JSON Web Tokens', logo: 'https://img.shields.io/badge/JSON Web Tokens-191919.svg?style=flat&logo=jsonwebtokens&logoColor=white' },

  { nombre: 'Linux', logo: 'https://img.shields.io/badge/Linux-FCC624.svg?style=flat&logo=linux&logoColor=black' },


  { nombre: 'Trello', logo: 'https://img.shields.io/badge/Trello-0052CC.svg?style=flat&logo=trello&logoColor=white' },
];

const TecnologiasListado = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {tecnologias.map((tecnologia, index) => (
          <div key={index} className="text-center">
            <img src={tecnologia.logo} alt={tecnologia.nombre} className="w-auto h-8 mx-auto mb-2" />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TecnologiasListado;
