import React from "react";
import Pilares from "../Pilares/Pilares";
import { logo_detail3 } from "../../assets";
const AboutUs = () => {
  return (
    <div id="bodyline" className="relative w-screen bg-white flex flex-wrap items-center justify-center py-20 overflow-hidden">
      <div className="hidden lg:flex justify-start absolute  lg:top-32 left-0">
      <img
        src={logo_detail3}
        alt="detalle"
        className="w-1/5 "
      />
      </div>
      <div className="flex lg:hidden justify-start absolute bottom-32 lg:bottom-0   lg:top-32 left-0">
      <img
        src={logo_detail3}
        alt="detalle"
        className="w-1/5 "
      />
      </div>
      <div className="flex lg:hidden justify-end absolute bottom-[420px] lg:bottom-0  lg:top-32 right-0">
      <img
        src={logo_detail3}
        alt="detalle"
        className="w-1/5 rotate-180"
      />
      </div>
      
      <div className="max-w-4xl text-center p-6">
        <h2 className="text-3xl font-clash-700 text-gray-800 mb-4">
          Acerca de Bodyline
        </h2>
        <p className="text-lg font-clash-400 text-gray-600">
        Bodyline ofrece un servicio integral de transformación personalizada que abarca aspectos fundamentales de la salud, como la nutrición, la conexión con la naturaleza , el breathwork, la desintoxicación celular, jugoterapia, el auto cuidado, técnicas de mindset, crecimiento personal y mucho más. 
        
          Sus programas y sesiones  se centran en despertar ese gigante que tenemos dentro Abriendo las puertas que se requieran abrir. Siempre a tu ritmo. con un enfoque en disfrutar el proceso… adquiriendo las herramientas necesarias para autogestionar tu salud, Conocerte más, amarte más y brillar con luz propia. 
          <br />
          <br />
          A diferencia de otras opciones en el mercado, Bodyline se distingue por su enfoque personalizado, acompañando a los clientes en todo el proceso de transformación con mucho amor y respeto.
          <br />
          <br />
          La filosofía de la marca se basa en la creencia de que una transformación efectiva y duradera requiere un enfoque integral que aborde tanto la alimentación como la respiración y el autoconocimiento, buscando una mentalidad de crecimiento, con mejoras sostenible en el tiempo. 
          Sabiendo que la transformación ocurre cuando cambiamos nuestro estado del ser. 
Estás listo para Crear  tu propio libro del bienestar? Estás listo para despertar tu gigante? 
Estás listo para tu nuevo vos? 
Estás listo! 
Te esperamos con mucho gusto y amor dentro! 


        </p>
      </div>
      <Pilares />
    </div>
  );
};

export default AboutUs;
