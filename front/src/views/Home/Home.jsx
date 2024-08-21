import React from "react";
import Header from "../../components/Header/Header";
import banner from "../../assets/banner.png";
import Pilares from "../../components/Pilares/Pilares";
import { owner } from "../../assets";
import InstagramSection from "../../components/InstagramSection/InstagramSection";
import AboutUs from "../../components/AboutUs/AboutUs";
import DescriptionContact from "../../components/DescriptionContact/DescriptionContact";
import ContactForm from "../../components/ContactForm/ContactForm";
import Therapys from "../../components/Therapis/Therapis";
const Home = () => {
  return (
    <div className="font-clash-400">
      <Header />
      <div className="relative w-screen h-screen">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={banner}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-[360px]">
          <h1 className="text-white text-4xl poppins-semibold text-center">
            Natural Health + Wellness Solutions
          </h1>
          <div>
            <a
              href="/"
              className="tracking-widest poppins-regular bg-[#00314b] hover:bg-[#00314b] duration-300 text-white px-3 py-2 rounded-3xl flex items-center justify-center gap-x-2 mt-8"
            >
              SOLICITAR ASESOR
            </a>
          </div>
        </div>
      </div>

      {/* Sección de Descripción de Bodyline */}
      <AboutUs />

      <div className="bg-blue-100 py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Texto Descriptivo */}
          <div className="lg:w-1/2 p-8">
            <h2 className="text-4xl font-clash-700 text-gray-800 mb-4">
              ¿Quién es Irene?
            </h2>
            <p className="text-lg font-clash-400 text-gray-600 mb-8">
              Dafers (Daniel Fernando Silva Niño) es la primera persona en
              llevar la medicina del hielo como terapia de sanación física y
              espiritual a Latinoamérica. Aprendió de la mano de Wim (hombre
              hielo más famoso del mundo), conviviendo con él y acompañándolo
              por algunos años en su expansión y crecimiento a nuevos horizontes
              y direcciones. En su transitar, muchos maestros de artes
              marciales, gurús de yoga, monjes Shaolin, abuel@s y chamanes
              indígenas llegaron para guiarlo en el camino de la respiración
              consciente, el chamanismo y la naturaleza.
            </p>
            <a
              href="#"
              className="inline-block bg-black text-white font-poppins py-3 px-6 rounded-full text-sm hover:bg-gray-800"
            >
              QUIERO SABER MÁS
            </a>
          </div>

          {/* Imagen Circular */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end p-8">
            <div className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden">
              <img
                src={owner}
                alt="Dafer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={owner} alt="Logo" className="w-3/4 opacity-75" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <InstagramSection />

      <Therapys />
      <DescriptionContact />
    </div>
  );
};

export default Home;
