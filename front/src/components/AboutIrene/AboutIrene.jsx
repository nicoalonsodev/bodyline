import React from "react";
import { irene2 } from "../../assets";
import { motion } from "framer-motion";
const AboutIrene = () => {
  return (
    <div id="irene" className="bg-[#a1bcc9] py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Texto Descriptivo */}
        <motion.div
          className="lg:w-1/2 p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-clash-700 text-gray-800 mb-4">
            ¿Quién es Irene?
          </h2>
          <p className="text-lg font-clash-400 text-gray-700 mb-8">
            Una apasionada del bienestar. Amo aventurarme y desafiarme siempre a
            más. Me encantan los jugos y todo lo que requiera conocerme más a mí
            misma. Mi clave respirar ! ! He encontrado en ella una puerta
            maravillosa siendo una de las llaves que mas utilizo para el bien
            vivir! Cualquier momento o situación es bueno para respirar
            conscientemente. Soy nutricionista de profesión, health coach y
            facilitadora de Breathwork. Suelo ser bien curiosa por lo que
            capacitarme y mantenerme aprendiendo me mantiene motivada he
            inspirada. Todo lo que suelo compartir lo he probado en mi! De estas
            forma vivo lo que comparto al 100%
          </p>
          <a
            href="#"
            className="inline-block bg-black text-white font-poppins py-3 px-6 rounded-full text-sm hover:bg-gray-800"
          >
            QUIERO SABER MÁS
          </a>
        </motion.div>

        {/* Imagen Circular */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="lg:w-1/2 flex justify-center lg:justify-end p-8"
        >
          <div className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden">
            <img
              src={irene2}
              alt="Dafer"
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <img src={irene2} alt="Logo" className="w-3/4 opacity-75" />
            </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutIrene;
