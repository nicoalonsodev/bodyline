"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DTG,
  RESPIRAR,
  FLORECER,
  despierta_tu_gigante,
  respirar1_1,
  transformacion_integral_grupal,
} from "@/lib/assets"

const sessions = [
  {
    title: "DESPIERTA TU GIGANTE",
    description: "Programa de Respiración Intensivo. 7 días para vivir una experiencia transformadora.",
    image: DTG,
    pdfLink: despierta_tu_gigante,
  },
  {
    title: "RESPIRAR",
    description: "La respiración es la base de la vida. Aprender a respirar de forma funcional, óptima y consciente.",
    image: RESPIRAR,
    pdfLink: respirar1_1,
  },
  {
    title: "FLORECER",
    description: "Transformación integral para lograr una vida plena llena de salud, vitalidad, energía y equilibrio.",
    image: FLORECER,
    pdfLink: transformacion_integral_grupal,
  },
]

export default function SessionsShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-clash-700 text-[#00314b] mb-4">
            Nuestras <span className="font-clash-700">Sesiones</span>
          </h2>
          <div className="w-32 h-1 bg-[#00314b] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sessions.map((session, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={session.image || "/placeholder.svg"}
                  alt={session.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-clash-600 mb-2">{session.title}</h3>
                  <p className="text-sm font-clash-400 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {session.description}
                  </p>

                  <a
                    href={session.pdfLink}
                    download
                    className="inline-block bg-white text-[#00314b] font-clash-500 py-2 px-4 rounded-full text-sm 
                    transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    Descargar PDF
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="#therapys">
            <Button className="bg-[#00314b] hover:bg-[#00314b]/90">Ver todas las sesiones</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

