'use client'

// pages/index.tsx
import React from 'react';
import WebsiteBox from '@/app/components/complementos/WebsiteBox';

const IndexProjects: React.FC = () => {
  return (
    <div className="container mx-auto mt-6">
      <h1 className="text-2xl font-semibold mb-4">Websites Destacados</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <WebsiteBox
          imageUrl="fotosAbout/1.jpeg"
          title="Website 1"
          description="Descripción del Website 1."
        />
        <WebsiteBox
          imageUrl="fotosAbout/2.jpg"
          title="Website 2"
          description="Descripción del Website 2."
        />
        {/* Agrega más WebsiteBox aquí */}
      </div>
    </div>
  );
};

export default IndexProjects;
