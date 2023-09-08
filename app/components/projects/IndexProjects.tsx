'use client'

// pages/index.tsx
import React from 'react';
import WebsiteBox from '@/app/components/complementos/WebsiteBox';
//import '../../app/globals.css'

const IndexProjects: React.FC = () => {
  return (
    <div className="container mx-auto mt-6">
            <h1 className="text-2xl font-semibold mt-6 mb-4">Websites Destacados Desktop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <WebsiteBox
          imageUrl="imagesProjects/important/6.PNG"
          title="Agenda de vendedores"
          description="Sitio web mobile first que se utiliza para designar la agenda de visitas de vendedores y cobradores. Inicio de sesión vendedor o cobrador"
        />
        <WebsiteBox
          imageUrl="imagesProjects/important/7.PNG"
          title="Agenda de vendedores"
          description="Sitio web mobile first que se utiliza para designar la agenda de visitas de vendedores y cobradores. Pantalla principal de Supervisores y administradores"
        />
      </div>

      <hr className='mt-6'/>

      <h1 className="text-2xl font-semibold mt-6 mb-4">Websites Destacados Mobiles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <WebsiteBox
          imageUrl="imagesProjects/important/1.PNG"
          title="Recibos digitales, listado de clientes"
          description="Sitio web mobile first que se utiliza para realizar recibos digitales a los clientes. Listado de clientes"
        />
        <WebsiteBox
          imageUrl="imagesProjects/important/2.PNG"
          title="Recibos digitales, carga de información de recibo"
          description="Sitio web mobile first que se utiliza para realizar recibos digitales a los clientes. Carga de recibo"
        />

        <WebsiteBox
          imageUrl="imagesProjects/important/3.PNG"
          title="Agenda de vendedores"
          description="Sitio web mobile first que se utiliza para designar la agenda de visitas de vendedores y cobradores. Inicio de sesión supoervisor o administrador"
        />
        <WebsiteBox
          imageUrl="imagesProjects/important/1.PNG"
          title="Agenda de vendedores"
          description="Sitio web mobile first que se utiliza para realizar recibos digitales a los clientes. Carga de recibo"
        />
        {/* Agrega más WebsiteBox aquí */}
      </div>


    </div>
  );
}; 

export default IndexProjects;
