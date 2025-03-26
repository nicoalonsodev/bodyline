"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
export default function Hosts() {
  return (
    <section
      className="py-20 px-4 md:px-8 relative overflow-hidden"
      style={{ backgroundColor: "#F5F3E9" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 relative"
        >
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl font-clash-700 text-[#2F4A2F] mb-4">
              Las anfitri
              <span className="relative">
                <svg
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-[#95A98B] opacity-40"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0L13.7 8.3L22 10L13.7 11.7L12 20L10.3 11.7L2 10L10.3 8.3L12 0Z" />
                </svg>
                onas
              </span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Pily */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center h-full"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden mb-8">
              <Image
                src="/assets/retiro-uno/pily.webp"
                alt="Pily"
                fill
                className="object-cover grayscale"
              />
            </div>
            <div className="prose prose-lg text-[#2F4A2F] max-w-none flex-grow">
              <p className="font-clash-400 text-lg leading-relaxed mb-6">
                Hola, soy Pily una buscadora y eterna aprendiz del Ser. Mi
                misión comenzó cuando decidí emprender un viaje hacia mi
                autoconocimiento, sanación e indagación, donde fuí descubriendo
                qué había más allá del velo de la ilusión y los aspectos más
                superficiales del Ser Humano.
              </p>
              <p className="font-clash-400 text-lg leading-relaxed mb-6">
                Allí comencé a entregarme desde un lugar compasivo y amoroso a
                muchos procesos y experiencias trascendentales como el Yoga, la
                meditación, los sonidos sagrados, etc, para años después
                comenzar a conectar no solo mi Familia Estelar y mis Guías sino
                que también, ser canal de información de un Consejo Estelar.
              </p>
              <p className="font-clash-400 text-lg leading-relaxed mb-6">
                Acompaño, guío y asisto procesos y caminos de Despertar de
                Conciencia y del Ser, así como también actúo como mensajera e
                intermediaria entre el cielo y tierra, transmitiendo mensajes de
                amor, expansión y evolución.
              </p>
              <div className="text-center mt-auto pt-6">
                <p className="font-clash-400 text-lg italic text-center mb-6">
                  "Conectar con tu Esencia es conectar con la Divinidad.
                  Bienvenidos a este reencuentro de Almas"
                </p>
                <p className="font-clash-400 text-gray-600 mb-2">Con Amor,</p>
                <span className="text-[#315032] text-3xl font-clash-400">
                  Pily
                </span>
                <div className="flex justify-center items-center gap-x-4 mt-2">
                  <a
                    href="https://www.instagram.com/encuentro.estelar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#315032] hover:text-[#223723] hover:scale-110 duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="mailto:encuentroestelar.1111@gmail.com"
                    className="text-[#315032] hover:text-[#223723] hover:scale-110 duration-300"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href="https://wa.me/541135790710"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#315032] hover:text-[#223723] hover:scale-110 duration-300"
                  >
                    <Phone size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Irene */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center h-full"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden mb-8">
              <Image
                src="/assets/retiro-uno/irene2.webp"
                alt="Irene"
                fill
                className="object-cover grayscale"
              />
            </div>
            <div className="prose prose-lg text-[#2F4A2F] max-w-none flex-grow">
              <p className="font-clash-400 text-lg leading-relaxed mb-6">
                Hola! Soy Irene. Una apasionada del bienestar. Amo aventurarme y
                desafiarme siempre a más. Me encantan los jugos y todo lo que
                requiera conocerme más a mí misma. Mi clave, respirar!! He
                encontrado en ella una puerta maravillosa siendo una de las
                llaves que mas utilizo para el bien vivir!
              </p>
              <p className="font-clash-400 text-lg leading-relaxed mb-6">
                Soy nutricionista de profesión, health coach, facilitadora de
                Breathwork e instructora certificada de la academia hielo y
                amor. Suelo ser bien curiosa por lo que capacitarme, mantenerme
                aprendiendo, moverme en viajes de autodescubrimiento me mantiene
                motivada he inspirada.
              </p>
              <p className="font-clash-400 text-lg leading-relaxed mb-6">
                Mi propósito es compartir todo lo que he integrado y voy
                integrando en mi camino. He tenido el honor de aprender de
                grandes maestros y se que todo es medicina si nos abrimos a
                verla.
              </p>
              <div className="text-center mt-auto pt-6">
                <p className="font-clash-400 text-lg italic text-center mb-6">
                  "Cada día es una nueva oportunidad para explorar, aprender y
                  compartir"
                </p>
                <p className="font-clash-400 text-gray-600 mb-2">Con Amor,</p>
                <span className="text-[#315032] text-3xl font-clash-400">
                  Irene
                </span>
              </div>
              <div className="flex justify-center items-center gap-x-4 mt-2">
                <a
                  href="https://www.instagram.com/bodylinenqn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#315032] hover:text-[#223723] hover:scale-110 duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.instagram.com/bodylinenqn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#315032] hover:text-[#223723] hover:scale-110 duration-300"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://www.instagram.com/bodylinenqn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#315032] hover:text-[#223723] hover:scale-110 duration-300"
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
