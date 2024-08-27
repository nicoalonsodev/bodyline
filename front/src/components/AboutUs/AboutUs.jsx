import React from "react";
import Pilares from "../Pilares/Pilares";
import { logo_detail3 } from "../../assets";
const AboutUs = () => {
  return (
    <div id="bodyline" className="relative w-screen bg-white flex flex-wrap items-center justify-center py-20 overflow-hidden">
      <div className="flex justify-start absolute top-32 left-0">
      <img
        src={logo_detail3}
        alt="detalle"
        className="w-1/5 "
      />
      </div>
      
      <div className="max-w-4xl text-center p-6">
        <h2 className="text-3xl font-clash-700 text-gray-800 mb-4">
          Acerca de Bodyline
        </h2>
        <p className="text-lg font-clash-400 text-gray-600">
          Bodyline ofrece un servicio integral de transformación personalizada
          que abarca aspectos fundamentales de la salud, como la nutrición y el
          breathwork. Su programa de 6 meses se centra en mejorar la salud
          física y mental de los clientes mediante asesorías individualizadas
          uno a uno. A diferencia de otras opciones en el mercado, Bodyline se
          distingue por su enfoque personalizado, acompañando a los clientes en
          todo el proceso de transformación.
          <br />
          <br />
          La filosofía de la marca se basa en la creencia de que una
          transformación efectiva y duradera requiere un enfoque integral que
          aborde tanto la alimentación como la respiración, buscando mejorar la
          salud de manera sostenible en el tiempo.
        </p>
      </div>
      <Pilares />
    </div>
  );
};

export default AboutUs;
