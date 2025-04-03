"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hosts() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-clash-700 text-[#00314b] mb-4">Las Anfitrionas</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-clash-400">
            Conoce a quienes te guiarán en esta experiencia transformadora
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Pily */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6">
              <Image
                src="/hosts/pily.jpg"
                alt="Pily"
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=192&width=192"
                }}
              />
            </div>
            <h3 className="text-2xl font-clash-600 text-[#00314b] mb-4">Pily</h3>
            <div className="prose prose-lg text-gray-600 font-clash-400">
              <p>
                Hola, soy Pily una buscadora y eterna aprendiz del Ser. Mi misión comenzó cuando decidí emprender un
                viaje hacia mi autoconocimiento, sanación e indagación, donde fuí descubriendo qué había más allá del
                velo de la ilusión y los aspectos más superficiales del Ser Humano.
              </p>
              <p>
                Allí comencé a entregarme desde un lugar compasivo y amoroso a muchos procesos y experiencias
                trascendentales como el Yoga, la meditación, los sonidos sagrados, etc, para años después comenzar a
                conectar no solo mi Familia Estelar y mis Guías sino que también, ser canal de información de un Consejo
                Estelar comprendiendo que durante muchos años me estuvieron puliendo y preparando para este momento.
              </p>
              <p>
                Acompaño, guío y asisto procesos y caminos de Despertar de Conciencia y del Ser, así como también actúo
                como mensajera e intermediaria entre el cielo y tierra, transmitiendo mensajes de amor, expansión y
                evolución a todas las Almas que están en resonancia y coherencia con su Ser, realizando sanaciones y
                activaciones que nos permiten amplificar nuestra Conciencia y experiencia humana.
              </p>
              <p className="italic">
                "Conectar con tu Esencia es conectar con la Divinidad. Bienvenidos a este reencuentro de Almas"
              </p>
              <p>Con Amor, Pily.</p>
            </div>
          </motion.div>

          {/* Irene */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6">
              <Image src="/irene2.jpg" alt="Irene" fill className="object-cover" />
            </div>
            <h3 className="text-2xl font-clash-600 text-[#00314b] mb-4">Irene</h3>
            <div className="prose prose-lg text-gray-600 font-clash-400">
              <p>
                Hola! Soy Irene. Una apasionada del bienestar. Amo aventurarme y desafiarme siempre a más. Me encantan
                los jugos y todo lo que requiera conocerme más a mí misma. Mi clave, respirar!! He encontrado en ella
                una puerta maravillosa siendo una de las llaves que mas utilizo para el bien vivir! Cualquier momento o
                situación es bueno para respirar conscientemente.
              </p>
              <p>
                Soy nutricionista de profesión, health coach, facilitadora de Breathwork e instructora certificada de la
                academia hielo y amor. Suelo ser bien curiosa por lo que capacitarme, mantenerme aprendiendo, moverme en
                viajes de autodescubrimiento me mantiene motivada he inspirada. Todo lo que suelo compartir lo he
                probado en mi! De estas forma vivo lo que comparto al 100%.
              </p>
              <p>
                Mi propósito es compartir todo lo que he integrado y voy integrando en mi camino. He tenido el honor de
                aprender de grandes maestros y se que todo es medicina si nos abrimos a verla. Mi pasión es ayudar a
                otros a reconocerse, amarse y expandirse, recordando que todo está dentro de ti. Limpiar tus cuerpos y
                andar más liviano y feliz por esta vida que tantos regalos tiene para nosotros.
              </p>
              <p>
                Cada día es una nueva oportunidad para explorar, aprender y compartir. Estoy aquí para acompañarte en tu
                viaje hacia el bienestar y la autenticidad.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

