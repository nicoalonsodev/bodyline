"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Instagram,
  CheckCircle,
  Star,
} from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import PaymentModal from "@/components/PaymentModal/PaymentModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Hosts from "@/components/Hosts/Hosts";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import DaysItinerary from "@/components/DaysItinerary/DaysItinerary";
import WhatsAppButton from "@/components/Whatsapp/WhatsappButton";

export default function RetiroUno() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [registeredCount, setRegisteredCount] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>(
    undefined
  );
  const totalSpots = 22;
  // Para calcular Fechad e caducidad del primer precio
  const currentDate = new Date();
  const cutoffDate = new Date("2025-03-22");
  const isLaunchPeriodOver = currentDate > cutoffDate || registeredCount >= 10;

  // Referencias para animaciones
  const scheduleRef = useRef(null);
  const pricingRef = useRef(null);

  const scheduleInView = useInView(scheduleRef, { once: true, amount: 0.3 });
  const pricingInView = useInView(pricingRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const fetchRegisteredCount = async () => {
      try {
        const response = await fetch("/api/get-subscribers");
        const data = await response.json();
        setRegisteredCount(data.count || 0);
      } catch (error) {
        console.error("Error fetching registered count:", error);
      }
    };

    fetchRegisteredCount();
  }, []);

  const remainingSpots = totalSpots - registeredCount;

  const handleReserveClick = () => {
    setIsPaymentModalOpen(true);
  };

  const handlePackageClick = (packageType: string) => {
    const currentDate = new Date();
    const cutoffDate = new Date("2025-03-22"); // Using current year based on today's date
    const isLaunchPeriodOver =
      currentDate > cutoffDate || registeredCount >= 10;

    // If trying to select the launch price option when it's no longer available
    if (packageType === "promotion" && isLaunchPeriodOver) {
      // You could show an alert or message to the user
      alert("Lo sentimos, el precio de lanzamiento ya no está disponible.");
      return;
    }

    setSelectedPackage(packageType);
    setIsPaymentModalOpen(true);
  };

  const experiences = [
    {
      title: "Conexión con la naturaleza",
      description:
        "Paseos guiados por senderos rodeados de paisajes impresionantes, donde podrás contemplar la majestuosidad de la Patagonia y sentir la energía de la tierra.",
    },
    {
      title: "Respiración",
      description:
        "Como la base y la fundacion de la vida. Como respiras vives. Diferentes técnicas para sumergirte en lo mas profundo de tu ser. Activaciones de la pineal y mucho más.",
    },
    {
      title: "Yoga y Movimiento",
      description:
        "Clases de yoga, donde el movimiento se convierte en una danza con la naturaleza. También se incluirán actividades lúdicas y dinámicas grupales que fomenten la alegría y la conexión.",
    },
    {
      title: "Blindfold Yoga",
      description:
        '"I shut my eyes in order to see". Yoga con los ojos vendados, es una práctica profunda que nos invita a habitar el espacio interior, activando y potenciando nuestros sentidos extrasensoriales.',
    },
    {
      title: "Alimentación consciente",
      description:
        "Una alimentación basada en plantas, limpia para que experimentes una nueva forma de nutrir tus cuerpos, promoviendo la claridad mental y la conexión interna.",
    },
    {
      title: "Quinta esencia",
      description:
        "Técnica de sanación y activación vibracional - energética para los viajeros de luz. Reconectando con la verdadera naturaleza del ser y recuperar la consciencia propia energética.",
    },
    {
      title: "Canalizaciones",
      description:
        "Serán parte del diario compartir. Abrirte a recibir los mensajes presentes.",
    },
    {
      title: "Sanación Pleyadiana",
      description:
        "Técnica energética y vibracional que eleva, transforma y restructura todo lo que no está alineado con tu ser generando cambios profundos para estimular el potencial interno.",
    },
    {
      title: "Hielo curandero",
      description:
        "Congela lo viejo y le dá espacio a lo nuevo. Prácticas de inmersión en agua fría y técnicas de respiración que te ayudarán a fortalecer tu sistema inmunológico y aumentar tu vitalidad.",
    },
    {
      title: "Meditación y reflexión",
      description:
        "Espacios de meditación guiada en entornos naturales, donde podrás explorar tu interior, reflexionar sobre tu vida y abrirte a nuevas posibilidades.",
    },
    {
      title: "Terapias sonoras",
      description:
        "Energía, Frecuencia y Vibración. La música nos acompañará en esta experiencia transformadora. El sonido es el curandero que abre caminos al interior.",
    },
    {
      title: "Ceremonias de cacao",
      description:
        "Una experiencia para integrar los saberes. Corazones abiertos para recibir la medicina del cacao, que con su espíritu maravilloso, nos permitirá sincronizarnos.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F2] overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen w-full  overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/retiro-uno/montaña1.jpg"
            alt="UNO Retiro Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <div className="text-white/80 text-sm tracking-widest mb-2">
              RETIRO | PATAGONIA ARGENTINA
            </div>
            <Badge className="mb-4 bg-white/20 text-white backdrop-blur-sm border-none px-4 py-1">
              21-25 de Mayo 2024 • Bariloche, Argentina
            </Badge>
            <h1 className="text-5xl md:text-7xl font-clash-700 text-white mb-6">
              Retiro UNO
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-clash-400 mb-8 max-w-2xl mx-auto">
              Te invitamos a sumergirte en una experiencia transformadora en la
              majestuosa Patagonia Argentina, donde la naturaleza se convierte
              en el escenario perfecto para la revelación de tu ser.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/uno-retiros/30min"  target="_blank">
                {" "}
                <Button
                  // onClick={handleReserveClick}
                  className="w-full bg-[#315032] hover:bg-[#315032]/90 text-white px-8 py-6 rounded-full text-lg"
                >
                  {/* Reserva tu Lugar */}
                  Hablemos y Reserva Tu Lugar
                </Button>
              </a>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg"
                onClick={() =>
                  document
                    .getElementById("detalles")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Conoce más
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introducción */}
      <section
        id="detalles"
        className="py-20 px-4 md:px-8 bg-[#F8F5F2] relative"
      >
        {/* Estrellas decorativas */}
        <svg
          className="absolute top-4 right-6 transform -translate-x-1/2 text-[#95A98B] opacity-40"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L13.7 8.3L22 10L13.7 11.7L12 20L10.3 11.7L2 10L10.3 8.3L12 0Z" />
        </svg>
        <div className="absolute bottom-20 left-10">
          <Star className="h-6 w-6 text-[#315032]/10" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-[#315032]/80 text-sm tracking-widest mb-4 text-center">
            RETIRO | PATAGONIA ARGENTINA
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-clash-700 text-[#315032] mb-6">
                Descubre la experiencia transformadora del Retiro "UNO"
              </h2>
              <p className="text-lg text-gray-700 font-clash-400 mb-6">
                Durante 5 días, te invitamos a reconectar contigo mismo en un
                entorno verde, rodeado de montañas imponentes, bosques frondosos
                y aguas cristalinas. Este retiro está diseñado para que
                encuentres tu verdadero valor, tu esencia y tu potencial,
                recordando quién eres en lo más profundo de tu ser.
              </p>
              <p className="text-lg text-gray-700 font-clash-400 mb-6">
                Nuestro propósito, es que cada participante vuelva a conectar
                con su esencia a través de herramientas naturales y prácticas
                que fomenten el autodescubrimiento y la recuperación del propio
                poder.
              </p>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge className="bg-[#a1bcc9]/20 text-[#315032] hover:bg-[#a1bcc9]/30 px-4">
                  Conexión Natural
                </Badge>
                <Badge className="bg-[#a1bcc9]/20 text-[#315032] hover:bg-[#a1bcc9]/30 px-4">
                  Transformación
                </Badge>
                <Badge className="bg-[#a1bcc9]/20 text-[#315032] hover:bg-[#a1bcc9]/30 px-4">
                  Autodescubrimiento
                </Badge>
              </div>
            </motion.div>

            <div className="flex justify-center items-center w-full">
              <div className="w-full max-w-md h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://fast.wistia.net/embed/iframe/d2au58kmc6?videoFoam=true"
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                  allowtransparency="true"
                  frameBorder="0"
                  scrolling="no"
                  title="Retiro UNO Video"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Numeración de página */}
        <div className="absolute bottom-8 right-8 text-[#315032]/70 font-clash-400">
          <span className="text-2xl">.02</span>
        </div>
      </section>

      {/* Experiencias Section */}
      <section
        id="experiencias"
        className="py-20 px-4 md:px-8 bg-[#F8F5F2] relative"
      >
        {/* Estrellas decorativas */}
        <div className="absolute top-40 left-10">
          <Star className="h-8 w-8 text-[#315032]/10" />
        </div>
        <div className="absolute bottom-60 right-20">
          <Star className="h-6 w-6 text-[#315032]/10" />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <div className="text-[#315032]/80 text-sm tracking-widest mb-4">
            RETIRO | PATAGONIA ARGENTINA
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-clash-700 text-[#315032] mb-4">
              Experiencias
            </h2>
            <p className="text-xl text-[#315032]/80 font-clash-400 mb-6 max-w-2xl mx-auto">
              Lo que vivirás en el Retiro "UNO"
            </p>
            <div className="w-32 h-1 bg-[#315032] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full" // Asegura que el contenedor tenga altura completa
              >
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <h3 className="text-xl font-clash-700 text-[#315032] mb-4">
                    {experience.title}
                  </h3>
                  <p className="text-gray-600 font-clash-400 flex-grow">
                    {experience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Numeración de página */}
        <div className="absolute bottom-8 right-8 text-[#315032]/70 font-clash-400">
          <span className="text-2xl">.03</span>
        </div>

        {/* Silueta de montañas */}
      </section>

      {/* Agenda */}
      <section
        id="agenda"
        ref={scheduleRef}
        className="py-20 px-4 md:px-8 bg-[#F8F5F2] relative"
      >
        {/* Estrellas decorativas */}
        <div className="absolute top-20 right-20">
          <Star className="h-8 w-8 text-[#315032]/10" />
        </div>
        <div className="absolute bottom-40 left-10">
          <Star className="h-6 w-6 text-[#315032]/10" />
        </div>

        {/* Itinerario de Dias */}
        <DaysItinerary />

        {/* Numeración de página */}
        <div className="absolute bottom-8 right-8 text-[#315032]/70 font-clash-400">
          <span className="text-2xl">.04</span>
        </div>
      </section>

      {/* Información Logística */}
      <section
        id="informacion"
        className="py-20 px-4 md:px-8 bg-[#f8f5f2] relative"
      >
        {/* Estrellas decorativas */}
        <svg
          className="absolute top-20 left-10 transform -translate-x-1/2 text-[#95A98B] opacity-40"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L13.7 8.3L22 10L13.7 11.7L12 20L10.3 11.7L2 10L10.3 8.3L12 0Z" />
        </svg>
        <svg
          className="absolute -top-12 left-2/3 transform -translate-x-1/2 text-[#95A98B] opacity-40"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L13.7 8.3L22 10L13.7 11.7L12 20L10.3 11.7L2 10L10.3 8.3L12 0Z" />
        </svg>

        <div className="max-w-6xl mx-auto">
          <div className="text-[#315032]/80 text-sm tracking-widest mb-4 text-center">
            RETIRO | PATAGONIA ARGENTINA
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/retiro-uno/Montaña-uno.jpeg"
                alt="Ubicación del Retiro UNO"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-[#315032]/20"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-clash-700 text-[#315032] mb-6">
                Información
              </h2>
              <div className="w-32 h-1 bg-[#315032] mb-8"></div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#a1bcc9]/20 p-3 rounded-full shrink-0">
                    <Calendar className="h-6 w-6 text-[#315032]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-clash-700 text-[#315032] mb-2">
                      Fechas
                    </h4>
                    <p className="text-gray-600 font-clash-400">
                      21 de Mayo al 25 de Mayo.
                      <br />
                      Retiro de 5 días 4 noches.
                      <br />
                      Ingreso 21 de Mayo 12 hs - Salida el 25 de mayo a las 16
                      hs
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#a1bcc9]/20 p-3 rounded-full shrink-0">
                    <MapPin className="h-6 w-6 text-[#315032]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-clash-700 text-[#315032] mb-2">
                      Lugar
                    </h4>
                    <p className="text-gray-600 font-clash-400">
                      Wake up Patagonia, Bariloche, a orillas del Lago Gutiérrez
                      (en Ruta Nacional 40 al kilómetro 2022 camino al Sur, a 15
                      minutos de la ciudad de Bariloche y 20 minutos del
                      aeropuerto de Bariloche).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#a1bcc9]/20 p-3 rounded-full shrink-0">
                    <Users className="h-6 w-6 text-[#315032]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-clash-700 text-[#315032] mb-2">
                      Intercambio
                    </h4>
                    <p className="text-gray-600 font-clash-400">
                      Lanzamiento hasta el 22 de Marzo o hasta agotar 10 cupos:
                      USD 1255
                      <br />
                      Inscripciones posteriores a la fecha lanzamiento: USD 1555
                      <br />
                      Reserva tu lugar con el 25% del total.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#a1bcc9]/20 p-3 rounded-full shrink-0">
                    <CheckCircle className="h-6 w-6 text-[#315032]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-clash-700 text-[#315032] mb-2">
                      Inscripciones
                    </h4>
                    <p className="text-gray-600 font-clash-400">
                      Pily | +54 9 1135790710
                      <br />
                      Irene | +54 9 299 6302273
                    </p>
                    <li className="flex items-start gap-2">
                      <a
                        href="https://www.instagram.com/uno_origen.y.destino/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 font-clash-400 flex justify-center items-center gap-2"
                      >
                        <Instagram size={20} /> UNO: El llamado del Origen.
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Numeración de página */}
        <div className="absolute bottom-8 right-8 text-[#315032]/70 font-clash-400">
          <span className="text-2xl">.05</span>
        </div>
      </section>

      <section id="anfitrionas">
        <Hosts />
      </section>

      {/* Precios y Reserva */}
      <section
        id="precios"
        ref={pricingRef}
        className="py-20 px-4 md:px-8 bg-white relative"
      >
        {/* Estrellas decorativas */}
        <div className="absolute top-20 right-10">
          <Star className="h-8 w-8 text-[#315032]/10" />
        </div>
        <div className="absolute bottom-40 left-20">
          <Star className="h-6 w-6 text-[#315032]/10" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-[#315032]/80 text-sm tracking-widest mb-4 text-center">
            RETIRO | PATAGONIA ARGENTINA
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-clash-700 text-[#315032] mb-4">
              La experiencia incluye:
            </h2>
            <div className="w-32 h-1 bg-[#315032] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              {/* First pricing card - Primer Precio (Launch Price) */}
              <Card
                className={`h-full border-none shadow-md transition-shadow flex flex-col bg-[#f8f5f2] ${
                  isLaunchPeriodOver ? "opacity-70" : "hover:shadow-lg"
                }`}
              >
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-clash-700 text-[#315032] mb-2">
                      Primer Precio
                    </h3>
                    <p className="text-gray-600 font-clash-400 mb-6">
                      Hasta el 22 de Marzo o agotar 10 cupos
                    </p>
                    {isLaunchPeriodOver && (
                      <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md mb-4 font-clash-400">
                        No disponible
                      </div>
                    )}
                    <div className="mb-6">
                      <span className="text-4xl font-clash-400 text-[#315032]">
                        $1,255 USD
                      </span>
                    </div>
                    <ul className="text-left space-y-3 mb-8 flex-grow">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#315032]" />
                        <span className="text-gray-600 font-clash-400">
                          Hospedaje en Wake up Patagonia, a orillas del Lago
                          Gutiérrez
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#315032]" />
                        <span className="text-gray-600 font-clash-400">
                          Alimentación completa (4 comidas diarias)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#315032]" />
                        <span className="text-gray-600 font-clash-400">
                          Todas las experiencias y actividades del Retiro
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#315032]" />
                        <span className="text-gray-600 font-clash-400">
                          Servicio de transporte desde aeropuerto o terminal de
                          Bariloche
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#315032]" />
                        <span className="text-gray-600 font-clash-400">
                          Sesión individual con ambas anfitrionas + sesiones
                          grupales previas
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#315032]" />
                        <span className="text-gray-600 font-clash-400">
                          Fotografías y videos profesionales del retiro
                        </span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-500 italic mb-6 font-clash-400">
                      *No incluye tickets aéreos ni traslados hasta Bariloche
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Button
                      onClick={() => handlePackageClick("promotion")}
                      className={`w-full py-6 rounded-full ${
                        isLaunchPeriodOver
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-[#315032] hover:bg-[#315032]/90 text-white"
                      }`}
                      disabled={isLaunchPeriodOver}
                    >
                      {isLaunchPeriodOver ? "No Disponible" : "Reservar Ahora"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={pricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col"
            >
              {/* Second pricing card - Precio Regular */}
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow flex flex-col bg-[#f8f5f2]">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-clash-700 text-[#315032] mb-2">
                      Precio Regular
                    </h3>
                    <p className="text-gray-600 font-clash-400 mb-6">
                      Después del 22 de Marzo
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-clash-400 text-[#315032]">
                        $1,555 USD
                      </span>
                    </div>
                    <ul className="text-left space-y-3 mb-8 flex-grow">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#315032]" />
                        <span className="text-gray-600 font-clash-400">
                          Hospedaje en Wake up Patagonia, a orillas del Lago
                          Gutiérrez
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#315032]" />
                        <span className="text-gray-600 font-clash-400">
                          Alimentación completa (4 comidas diarias)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#315032]" />
                        <span className="text-gray-600 font-clash-400">
                          Todas las experiencias y actividades del Retiro
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#315032]" />
                        <span className="text-gray-600 font-clash-400">
                          Servicio de transporte desde aeropuerto o terminal de
                          Bariloche
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#315032]" />
                        <span className="text-gray-600 font-clash-400">
                          Sesión individual con ambas anfitrionas + sesiones
                          grupales previas
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#315032]" />
                        <span className="text-gray-600 font-clash-400">
                          Fotografías y videos profesionales del retiro
                        </span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-500 italic mb-6 font-clash-400">
                      *No incluye tickets aéreos ni traslados hasta Bariloche
                    </p>
                  </div>
                  <div className="mt-auto">
                    <a href="https://calendly.com/uno-retiros/30min"  target="_blank">
                    <Button
                      // onClick={() => handlePackageClick("regular")}
                      className="w-full bg-[#315032] hover:bg-[#315032]/90 text-white py-6 rounded-full"
                    >
                      {/* Reservar Ahora */}
                    Hablemos y Reservá Tu Lugar
                    </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 font-clash-400 mb-4">
              Reserva tu lugar con solo el 25% del valor total
            </p>
            <div className="inline-block bg-[#a1bcc9]/20 px-4 py-3 rounded-lg">
              <div className="flex items-center gap-4">
                <Users className="h-5 w-5 text-[#315032]" />
                <div>
                  <p className="text-lg text-[#315032] font-clash-400">
                    {remainingSpots > 0
                      ? `Quedan ${remainingSpots} de ${totalSpots} cupos disponibles.`
                      : "Ya no quedan cupos disponibles."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Numeración de página */}
        <div className="absolute bottom-8 right-8 text-[#315032]/70 font-clash-400">
          <span className="text-2xl">.06</span>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 md:px-8 bg-[#f8f5f2] relative">
        {/* Estrellas decorativas */}
        <div className="absolute top-20 left-10">
          <Star className="h-8 w-8 text-[#315032]/10" />
        </div>
        <div className="absolute bottom-40 right-20">
          <Star className="h-6 w-6 text-[#315032]/10" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-[#315032]/80 text-sm tracking-widest mb-4 text-center">
            RETIRO | PATAGONIA ARGENTINA
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-clash-700 text-[#315032] mb-4">
              Preguntas Frecuentes
            </h2>
            <div className="w-32 h-1 bg-[#315032] mx-auto"></div>
          </div>

          <div className="space-y-6">
            {[
              {
                question:
                  "¿Necesito experiencia previa en breathwork o meditación?",
                answer:
                  "No se requiere experiencia previa. El retiro está diseñado para todos los niveles, desde principiantes hasta practicantes avanzados. Todas las técnicas se enseñan paso a paso y se adaptan a las necesidades individuales.",
              },
              {
                question: "¿Qué debo llevar al retiro?",
                answer:
                  "Este retiro es un portal hacia la reconexión con tu esencia más pura. Más allá de los objetos materiales, lo más importante es venir con el corazón abierto y el alma lista para recibir, liberar y recordar. Te enviaremos  una lista amorosa, consciente y expansiva de lo que te acompañará en este viaje sagrado.",
              },
              {
                question:
                  "¿La alimentación se adapta a necesidades dietéticas especiales?",
                answer:
                  "Sí, todas las comidas son plant-based y podemos adaptarnos a requerimientos específicos como alergias o intolerancias. Por favor, infórmanos de tus necesidades al momento de la inscripción.",
              },
              {
                question: "¿Cómo llego al lugar del retiro?",
                answer:
                  "El retiro incluye traslados desde y hacia el aeropuerto de Bariloche. Te recomendamos llegar el día de inicio antes de las 14:00 hrs y programar tu vuelo de regreso después de las 14:00 hrs del último día.",
              },
              {
                question: "¿Puedo pagar en cuotas?",
                answer:
                  "Sí, ofrecemos opciones de pago en cuotas a través de Mercado Pago. Durante el proceso de pago podrás seleccionar el número de cuotas que mejor se adapte a tus necesidades.",
              },
              {
                question: "¿Qué pasa si necesito cancelar mi reserva?",
                answer: `Entendemos que pueden surgir imprevistos. <a href="/retiro-uno/politicas" class="underline text-[#315032] hover:text-[#315032]/80">Hacé click acá</a> para leer las políticas conscientes que armamos para ti!`,
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-[#315032]/20 pb-6">
                <h3 className="text-xl font-clash-700 text-[#315032] mb-2">
                  {faq.question}
                </h3>
                <p
                  className="text-gray-600 font-clash-400"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 font-clash-400 mb-6">
              ¿Tienes más preguntas? No dudes en contactarnos
            </p>
            <Button
              variant="outline"
              className="border-[#315032] text-[#315032] hover:bg-[#315032] hover:text-white"
              onClick={() =>
                window.open("https://wa.me/+5492996302273", "_blank")
              }
            >
              Contáctanos por WhatsApp
            </Button>
          </div>
        </div>

        {/* Numeración de página */}
        <div className="absolute bottom-8 right-8 text-[#315032]/70 font-clash-400">
          <span className="text-2xl">.07</span>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 md:px-8 bg-[#F8F5F2] relative">
        {/* Estrellas decorativas */}
        <div className="absolute top-20 right-20">
          <Star className="h-8 w-8 text-[#315032]/10" />
        </div>
        <div className="absolute bottom-20 left-10">
          <Star className="h-6 w-6 text-[#315032]/10" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#315032]/80 text-sm tracking-widest mb-4">
            RETIRO | PATAGONIA ARGENTINA
          </div>

          <h2 className="text-3xl md:text-4xl font-clash-700 text-[#315032] mb-6">
            ¿Estás listo para transformar tu vida?
          </h2>
          <p className="text-lg text-gray-700 font-clash-400 max-w-3xl mx-auto mb-8">
            El Retiro "UNO" es una oportunidad única para reconectar con tu
            esencia, despertar tu potencial y comenzar un nuevo capítulo en tu
            vida. Los lugares son limitados, ¡asegura el tuyo ahora!
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button
              onClick={handleReserveClick}
              className="bg-[#315032] hover:bg-[#315032]/90 text-white px-8 py-6 rounded-full text-lg"
            >
              Reserva tu lugar ahora
            </Button>
            <div className="mt-4 bg-[#315032]/10 rounded-lg py-2 px-4 flex items-center gap-2">
              <Users className="h-4 w-4 text-[#315032]" />
              <p className="text-sm text-[#315032] font-clash-400">
                {remainingSpots > 0
                  ? `Quedan ${remainingSpots} de ${totalSpots} cupos disponibles.`
                  : "Ya no quedan cupos disponibles."}
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 font-clash-400 italic">
              "Tu misma ERES, tu mismo ERES"
            </p>
            <p className="text-gray-700 font-clash-400 mt-2">
              ¡Te estamos esperando! Con mucho amor,
            </p>
            <p className="text-[#315032] font-clash-400 mt-2 text-xl">
              Irene y Pily
            </p>
          </div>
        </div>

        {/* Numeración de página */}
        <div className="absolute bottom-8 right-8 text-[#315032]/70 font-clash-400">
          <span className="text-2xl">.08</span>
        </div>
      </section>

      <Footer className="bg-[#315032]" />

      {/* Modal de Pago */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => {
          setIsPaymentModalOpen(false);
          setSelectedPackage(undefined);
        }}
        preSelectedPackage={selectedPackage}
      />
      <WhatsAppButton />
    </div>
  );
}
