"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { irene2 } from "@/lib/assets"

export default function AboutIrene() {
  return (
    <section id="irene" className="relative bg-[#a1bcc9] py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
        <motion.div
          className="lg:w-1/2 p-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-clash-700 text-[#00314b] mb-4">¿Quién es Irene?</h2>
          <p className="text-lg font-clash-400 text-gray-700 mb-8">
            Una apasionada del bienestar. Amo aventurarme y desafiarme siempre a más. Me encantan los jugos y todo lo
            que requiera conocerme más a mí misma. Mi clave respirar! He encontrado en ella una puerta maravillosa
            siendo una de las llaves que mas utilizo para el bien vivir! Cualquier momento o situación es bueno para
            respirar conscientemente. Soy nutricionista de profesión, health coach, instructora certificada de la academia hielo y amor y facilitadora de Breathwork. Suelo
            ser bien curiosa por lo que capacitarme y mantenerme aprendiendo me mantiene motivada he inspirada. Todo lo
            que suelo compartir lo he probado en mi! De estas forma vivo lo que comparto al 100%
          </p>
          <Button
            variant="default"
            className="bg-black hover:bg-gray-800 text-white font-clash-400"
            onClick={() => window.open("https://wa.me/+5492996302273", "_blank")}
          >
            QUIERO SABER MÁS
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="lg:w-1/2 flex justify-center lg:justify-end p-4"
        >
          <div className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden">
            <Image src="/assets/irene2.PNG" alt="Irene" fill className="object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

