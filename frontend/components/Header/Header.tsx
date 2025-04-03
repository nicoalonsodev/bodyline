"use client"

import { useState, useEffect } from "react"
import { logo, logoB, logo_w } from "@/lib/assets"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import "./Header.css"
import Link from "next/link"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState("/")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = (page: string) => {
    setCurrentPage(page)
    setIsMobileMenuOpen(false) // Close menu on nav click
  }

  return (
    <div>
      <header
        className={`${
          isScrolled ? "header-bg lg:shadow-2xl h-[80px] lg:h-[80px]" : "header h-[80px] lg:h-[95px]"
        } text-gray-300 p-4 z-40 font-lato-300 fixed w-full top-0 transition-all duration-500  ${
          isMobileMenuOpen ? "" : "border-b-[1px] border-gray-900"
        }`}
      >
        <div className="mx-auto flex items-center justify-between lg:hidden z-30 ">
          <div className="logo flex items-center space-x-4">
            <Link href="/">
              <img src={isScrolled ? logo_w : logo_w} alt="Logo" className="z-10" style={{ width: "136px" }} />
            </Link>
          </div>
          <Menu
            onClick={toggleMobileMenu}
            className={`${
              isMobileMenuOpen ? "hidden" : ""
            } duration-700 text-gray-50 text-4xl inline-block md:hidden cursor-pointer`}
          />
          <X
            onClick={toggleMobileMenu}
            className={`${
              isMobileMenuOpen ? "" : "hidden"
            } duration-700 text-gray-50 text-4xl inline-block md:hidden cursor-pointer`}
          />
        </div>
        <div
          className="mx-auto flex items-center justify-between hidden lg:flex poppins-light"
          style={{ maxWidth: "1150px", height: isScrolled ? "50px" : "70px" }}
        >
          <div className="logo flex items-center space-x-4">
            <Link href="/">
              <img
                src={isScrolled ? logo : logoB}
                alt="Logo"
                style={{
                  height: isScrolled ? "50px" : "40px",
                }}
              />
            </Link>
          </div>
          <nav className="flex-grow flex justify-center space-x-10">
            <div className="text-md poppins-semibold space-x-10">
              <a
                href="#bodyline"
                className={`${currentPage === "/proyectos" ? "active" : "a-h"} ${isScrolled ? "text-gray-700" : ""}`}
              >
                Bodyline
              </a>
              <a
                href="#irene"
                className={`${currentPage === "/sobre-nosotros" ? "active" : "a-h"} ${isScrolled ? "text-gray-700" : ""}`}
              >
                Irene
              </a>
              <a
                href="#contact"
                onClick={() => handleNavClick("/contacto")}
                className={`${currentPage === "/contacto" ? "active" : "a-h"} ${isScrolled ? "text-gray-700" : ""}`}
              >
                Contacto
              </a>

              <a
                href="#community"
                onClick={() => handleNavClick("/novedades")}
                className={`${currentPage === "/novedades" ? "active" : "a-h"} ${isScrolled ? "text-gray-700" : ""}`}
              >
                Comunidad
              </a>
            </div>
            <div
              className={`${
                isScrolled ? "text-gray-700 border-gray-700" : ""
              } flex items-center border-[1px] hover:border-[#00314b] hover:text-[#00314b] duration-300 px-3 rounded-full`}
            >
              <a href="#therapys" className="flex items-center gap-x-2 poppins-regular">
                Ver todas las sesiones
              </a>
            </div>
          </nav>
        </div>
      </header>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: -340 }}
            animate={{ y: 0 }}
            exit={{ y: -340 }}
            transition={{ duration: 0.7 }}
            className="fixed top-0 left-0 text-left w-full h-96 px-4 mt-10 bg-[#00314b] text-white poppins-semibold z-20 flex flex-col items-start justify-center space-y-4"
          >
            <a href="/" onClick={() => handleNavClick("/")} className="text-lg">
              Bodyline
            </a>
            <a href="#irene" onClick={() => handleNavClick("/proyectos")} className="text-lg">
              Irene
            </a>
            <a
              href="https://wa.me/+5492996302273"
              target="_blank"
              rel="noreferrer"
              onClick={() => handleNavClick("/sobre-nosotros")}
              className="text-lg"
            >
              Contacto
            </a>
            <a href="#community" onClick={() => handleNavClick("/contacto")} className="text-lg">
              Comunidad
            </a>

            <div>
              <a href="#therapys" className="flex items-center gap-x-2 poppins-regular">
                Ver todas las sesiones
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header

