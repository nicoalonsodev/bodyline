import React from "react";
import { logo_vertical } from "../../assets"; // Asegúrate de importar tu logo correctamente

const Footer = () => {
  return (
    <footer className="bg-[#00314b] text-white py-8">
         <div className="flex items-center justify-center">
          <img src={logo_vertical} alt="Logo" className="w-[200px]" />
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
       
        <nav className="space-y-2 text-md poppins-semibold">
          <a href="#bodyline" className="block hover:text-gray-400">
            Bodyline
          </a>
          <a href="#irene" className="block hover:text-gray-400">
            Irene
          </a>
          <a href="#contact" className="block hover:text-gray-400">
            Contacto
          </a>
          <a href="#community" className="block hover:text-gray-400">
            Comunidad
          </a>
          <a href="#therapys" className="block hover:text-gray-400">
            Ver todas las terapias
          </a>
        </nav>
      </div>
      <div className="text-center mt-8 text-sm text-gray-400">
        © 2024 Bodyline. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
