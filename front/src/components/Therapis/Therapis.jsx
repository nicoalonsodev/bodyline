import React from "react";
import TherapyCard from "../TherapyCard/TherapyCard";
import {
  owner,
  flores,
  food,
  nutricion1_1,
  respirar1_1,
  despierta_tu_gigante,
  transformacion_integral_grupal,
  workshop_respiracion,
  logo_despierta_tu,
  logo_florecer,
  logo_nutricion,
  logo_respiracion,
  logo_work_respiracion
} from "../../assets";

const FeaturedProperties = () => {
  const properties = [
    {
      image: owner,
      title: "Despierta un Gigante",
      description: `
        Programa de Respiración Intensivo. 7 días para vivir una experiencia transformadora. Conecta con tu alquimia y despierta al gigante que hay en vos. 
        Costo:
        - Individual 1 a 1: 350 USD (en horarios que se ajusten a tu agenda)
        - Grupal: 175 USD (sujeto a fechas y lanzamientos, cupos limitados).
        Paso 1: Preparación - Workshop taller, 1 sesión vía Zoom de 3 horas aprox.
        Paso 2: Activación - 2 sesiones diarias de respiración durante 5 días.
        Paso 3: Desafío - 3 sesiones diarias de breathwork vía Zoom.`,
      pdfLink: nutricion1_1,
      logo: logo_despierta_tu
    },
    {
      image: flores,
      title: "Respirar | Sesiones 1:1",
      description: `
        La respiración es la base de la vida. Aprender a respirar de forma funcional, óptima y consciente es incorporar mayor bienestar a tu vida. 
        Las sesiones son 1:1 y duran una hora. Frecuencia de las sesiones: las que gustes. No necesitas experiencia previa.`,
      pdfLink: respirar1_1,
      logo: logo_respiracion
    },
    {
      image: food,
      title: "Florecer: Transformación Integral",
      description: `
        Acompaño a personas que quieran revertir malestar crónico de raíz. Busca lograr una vida plena llena de salud, vitalidad, energía y equilibrio.
        Esta transformación integral te ayudará a limpiar tu cuerpo, conocer tu esencia y lograr una verdadera transformación si así lo deseas.`,
      pdfLink: transformacion_integral_grupal,
      logo: logo_florecer
    },
    {
      image: owner,
      title: "Nutrición | Sesiones 1:1",
      description: `
        Las consultas nutricionales son un buen inicio para dar los primeros pasos en tu cambio con la alimentación. Amigarte con el alimento, empezar a ordenar, incorporar más de eso que te hace bien. 
        Las consultas son de forma online, de 1 hora de duración, y la frecuencia generalmente es una vez al mes o cada 20 días. Incluye material en PDF y videos útiles.`,
      pdfLink: nutricion1_1,
      logo: logo_nutricion
    },
    {
      image: food,
      title: "Workshop Respiración",
      description: `
        Respirar es la clave para el buen vivir. El workshop es grupal o individual en vivo, vía Zoom. 
        3 horas para adentrarnos en las profundidades de la respiración. Un taller dinámico con teoría, mucha práctica y experimentación.`,
      pdfLink: workshop_respiracion,
      logo: logo_work_respiracion
    },
  ];

  return (
    <div id="therapys" className="py-20">
      <div className="w-full flex flex-col items-center py-6">
        <h1 className="text-3xl lg:text-4xl font-clash-400 text-[#00314b] text-center lg:text-left">
          Nuestras{" "}
          <span className="font-clash-700 text-[#00314b]">Sesiones</span>
        </h1>
        <hr className="w-32 border-t-[3px] border-[#00314b] mt-2" />
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {properties.map((property, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 flex justify-center">
            <TherapyCard
              image={property.image}
              title={property.title}
              description={property.description}
              pdfLink={property.pdfLink}
              logo={property.logo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
