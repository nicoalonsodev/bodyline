"use client"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import { motion } from "framer-motion"
import WhatsAppButton from "@/components/Whatsapp/WhatsappButton"
import AboutUs from "@/components/AboutUs/AboutUs"
import AboutIrene from "@/components/AboutIrene/AboutIrene"
import Community from "@/components/Community/Community"
import Therapys from "@/components/Therapys/Therapys"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="relative h-screen">
            <img className="absolute top-0 left-0 w-full h-full object-cover" src="/assets/banner.png" alt="Banner" />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center pt-[440px] lg:pt-[360px] px-4">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="text-white text-4xl poppins-semibold text-center"
              >
                NUTRICION Y BREATHWORK
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
                className="flex flex-col sm:flex-row gap-4 mt-8"
              >
                <a
                  href="https://wa.me/+5492996302273"
                  target="_blank"
                  rel="noreferrer"
                  className="tracking-widest poppins-regular bg-[#00314b] hover:bg-[#00314b]/90 duration-300 text-white px-6 py-3 rounded-3xl flex items-center justify-center"
                  
                >
                  QUIERO ASESORARME
                </a>
                <Link
                  href="/retiro-uno"
                  className="tracking-widest poppins-regular border-2 border-white hover:bg-white/20 duration-300 text-white px-6 py-3 rounded-3xl flex items-center justify-center"
                >
                  RETIRO UNO
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <AboutUs />
        <AboutIrene />
        <Therapys />
        <Community />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

