"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import Image from "next/image"
import { motion } from "framer-motion"
import WhatsAppButton from "@/components/Whatsapp/WhatsappButton"
import AboutUs from "@/components/AboutUs/AboutUs"
import AboutIrene from "@/components/AboutIrene/AboutIrene"
import Community from "@/components/Community/Community"
import SessionsShowcase from "@/components/SessionsShowcase/SessionsShowcase"
import Therapys from "@/components/Therapys/Therapys"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden">
          <Image
            src="/banner.png"
            alt="Bodyline - Nutrición y Breathwork"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-white text-4xl poppins-semibold text-center"
            >
              NUTRICION Y BREATHWORK
            </motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="https://wa.me/+5492996302273"
                  target="_blank"
                  rel="noreferrer"
                  className="tracking-widest poppins-regular bg-[#00314b] hover:bg-[#00314b]/90 text-white px-6 py-3 rounded-full"
                >
                  QUIERO ASESORARME
                </a>
                <Link href="/retiro-uno">
                  <Button className="bg-white text-[#00314b] hover:bg-white/90 px-6 py-3 rounded-full">
                    Ver Retiro UNO
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <AboutUs />
        <AboutIrene />
        <SessionsShowcase />
        <Therapys />
        <Community />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

