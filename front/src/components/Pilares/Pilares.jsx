import React from "react";
import {
  breath,
  gigante,
  hearth,
  hielo,
  jugoterapia,
  mindset,
  nature,
  tribu,
} from "../../assets/index";
const Pilares = () => {
  return (
    <div className=" py-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* <h2 className="text-3xl font-clash-700 text-gray-800 mb-8">Los 6 Pilares de la Salud</h2> */}
        <div className="flex flex-wrap gap-8 justify-center">
          {/* Aquí agregar las imágenes de los pilares */}
          <div className="w-1/3 lg:w-1/5 flex flex-col items-center">
            <img
              src={
                jugoterapia
              }
              alt="Pilar 1"
              className="w-20 h-20 mb-4 rounded-full"
            />
            <p className="font-clash-400 text-lg text-gray-600">
              Alimentación Saludable<br/>
              Jugoterapia
            </p>
          </div>
          {/* Repetir para los demás pilares */}
          <div className="w-1/3 lg:w-1/5 flex flex-col items-center">
            <img
              src={
                breath
              }
              alt="Pilar 1"
              className="w-20 h-20 mb-4 rounded-full"
            />
            <p className="font-clash-400 text-lg text-gray-600">
              Respiración Consciente.<br/>
              Breathwork 
            </p>
          </div>
          {/* Repetir para los demás pilares */}
          <div className="w-1/3 lg:w-1/5 flex flex-col items-center">
            <img
              src={
               nature
              }
              alt="Pilar 1"
              className="w-20 h-20 mb-4 rounded-full"
            />
            <p className="font-clash-400 text-lg text-gray-600">
            Conexión con la naturaleza
            </p>
          </div>
          {/* Repetir para los demás pilares */}
          <div className="w-1/3 lg:w-1/5 flex flex-col items-center">
            <img
              src={
                mindset
              }
              alt="Pilar 1"
              className="w-20 h-20 mb-4 rounded-full"
            />
            <p className="font-clash-400 text-lg text-gray-600">
              Mindset. Crecimiento personal{" "}
            </p>
          </div>
          {/* Repetir para los demás pilares */}
          <div className="w-1/3 lg:w-1/5 flex flex-col items-center">
            <img
              src={
                hearth
              }
              alt="Pilar 1"
              className="w-20 h-20 mb-4 rounded-full"
            />
            <p className="font-clash-400 text-lg text-gray-600">
              Amor. Auto cuidado.
            </p>
          </div>
          {/* Repetir para los demás pilares */}
          <div className="w-1/3 lg:w-1/5 flex flex-col items-center">
            <img
              src={
                gigante
              }
              alt="Pilar 1"
              className="w-20 h-20 mb-4 rounded-full"
            />
            <p className="font-clash-400 text-lg text-gray-600">
              Despierta tu gigante. <br/>Potencial humano
            </p>
          </div>
          {/* Repetir para los demás pilares */}
          <div className="w-1/3 lg:w-1/5 flex flex-col items-center">
            <img
              src={
                tribu
              }
              alt="Pilar 1"
              className="w-20 h-20 mb-4 rounded-full"
            />
            <p className="font-clash-400 text-lg text-gray-600">Tribu</p>
          </div>
          {/* Repetir para los demás pilares */}
          <div className="w-1/3 lg:w-1/5 flex flex-col items-center">
            <img
              src={
                hielo
              }
              alt="Pilar 1"
              className="w-20 h-20 mb-4 rounded-full"
            />
            <p className="font-clash-400 text-lg text-gray-600">Hielo (Proximamente)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pilares;
