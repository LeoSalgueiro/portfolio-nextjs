'use client'

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const goToID = (id: string) => {
    const miDiv = document.getElementById(id);
    if (miDiv) {
      miDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full dark:bg-gray-950 dark:text-white  z-50">
      <div className="container mx-auto flex items-center justify-between h-full">
        <a href="#" className="text-xl font-bold text-blue-500 dark:text-white">Portfolio</a>
        <button
          className="md:hidden text-blue-500 hover:text-blue-600 dark:text-white"
          onClick={toggleNavbar}
        >
          ☰
        </button>
        <div className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <a onClick={()=> goToID('Home')} className="block py-4 mt-4 md:inline-block md:mt-0 text-blue-500 dark:text-white hover:bg-gray-900 pl-4 pr-4 hover:cursor-pointer">Home</a>
          <a onClick={()=> goToID('Destacados')} className="block py-4 mt-4 md:inline-block md:mt-0 text-blue-500 dark:text-white hover:bg-gray-900 pl-4 pr-4 hover:cursor-pointer">Destacados</a>
          <a onClick={()=> goToID('Experience')} className="block py-4 mt-4 md:inline-block md:mt-0 text-blue-500 dark:text-white hover:bg-gray-900 pl-4 pr-4 hover:cursor-pointer">Experiencia</a>
          <a onClick={()=> goToID('Tecnologies')} className="block py-4 mt-4 md:inline-block md:mt-0 text-blue-500 dark:text-white hover:bg-gray-900 pl-4 pr-4 hover:cursor-pointer">Tecnologías</a>
          <a onClick={()=> goToID('Aboutme')} className="block py-4 mt-4 md:inline-block md:mt-0 text-blue-500 dark:text-white hover:bg-gray-900 pl-4 pr-4 hover:cursor-pointer">Sobre Mí</a>
          <a onClick={()=> goToID('Contact')} className="block py-4 mt-4 md:inline-block md:mt-0 text-blue-500 dark:text-white hover:bg-gray-900 pl-4 pr-4 hover:cursor-pointer">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


