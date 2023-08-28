// pages/index.tsx
import React from 'react';
import SocialIconsBox from './SocialIconsBox';

const socialLinks = {
  github: 'https://github.com/LeoSalgueiro/',
  instagram: 'https://www.instagram.com/leo_navarro18/',
  facebook: 'https://www.facebook.com/leo.navarro.39/',
  linkedin: 'https://www.linkedin.com/in/leonel-navarro-85088210b/',
  email: 'leednavarro@gmail.com' // Agrega la propiedad para el correo electrónico
};

const IndexSocialBox: React.FC = () => {
  return (
    <div className="container mx-auto mt-6">
      <h1 className="text-2xl font-semibold mb-4 ">Redes Sociales</h1>
      <SocialIconsBox socialLinks={socialLinks} />
    </div>
  );
};

export default IndexSocialBox;
