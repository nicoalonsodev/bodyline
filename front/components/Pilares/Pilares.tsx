"use client"

import { breath, gigante, hearth, hielo, jugoterapia, mindset, nature, tribu } from "@/lib/assets"
import { motion } from "framer-motion"

const Pilares = () => {
  return (
    <div className="py-12">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="w-1/3 lg:w-1/5 flex flex-col items-center">
            <img src="/assets/iconos/jugoterapia.png" alt="Pilar 1" className="w-20 h-20 mb-4 rounded-full" />
            <p className="font-clash-400 text-lg text-gray-600">
              Alimentación Saludable
              <br />
              Jugoterapia
            </p>
          </div>
          <div className="w-1/3 lg:w-1/5 flex flex-col items-center">
            <img src="/assets/iconos/breath.png" alt="Pilar 1" className="w-20 h-20 mb-4 rounded-full" />
            <p className="font-clash-400 text-lg text-gray-600">
              Respiración Consciente.
              <br />
              Breathwork
            </p>
          </div>
          <div className="w-1/3 lg:w-1/5 flex flex-col items-center">
            <img src="/assets/iconos/naturaleza.png" alt="Pilar 1" className="w-20 h-20 mb-4 rounded-full" />
            <p className="font-clash-400 text-lg text-gray-600">Conexión con la naturaleza</p>
          </div>
          <div className="w-1/3 lg:w-1/5 flex flex-col items-center">
            <img src="/assets/iconos/mindset.png" alt="Pilar 1" className="w-20 h-20 mb-4 rounded-full" />
            <p className="font-clash-400 text-lg text-gray-600">Mindset. Crecimiento personal </p>
          </div>
          <div className="w-1/3 lg:w-1/5 flex flex-col items-center">
            <img src="/assets/iconos/hearth.png" alt="Pilar 1" className="w-20 h-20 mb-4 rounded-full" />
            <p className="font-clash-400 text-lg text-gray-600">Amor. Auto cuidado.</p>
          </div>
          <div className="w-1/3 lg:w-1/5 flex flex-col items-center">
            <img src="/assets/iconos/gigante.png" alt="Pilar 1" className="w-20 h-20 mb-4 rounded-full" />
            <p className="font-clash-400 text-lg text-gray-600">
              Despierta tu gigante. <br />
              Potencial humano
            </p>
          </div>
          <div className="w-1/3 lg:w-1/5 flex flex-col items-center">
            <img src="/assets/iconos/tribu.png" alt="Pilar 1" className="w-20 h-20 mb-4 rounded-full" />
            <p className="font-clash-400 text-lg text-gray-600">Tribu</p>
          </div>
          <div className="w-1/3 lg:w-1/5 flex flex-col items-center">
            <img src="/assets/iconos/hielo.png" alt="Pilar 1" className="w-20 h-20 mb-4 rounded-full" />
            <p className="font-clash-400 text-lg text-gray-600">Hielo (Proximamente)</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Pilares

