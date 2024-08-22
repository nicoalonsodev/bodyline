import React from 'react'
import { owner } from '../../assets'
const AboutIrene = () => {
  return (
    <div id='irene' className="bg-[#a1bcc9] py-16">
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
  )
}

export default AboutIrene
