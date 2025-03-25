"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import "./Header.css"
import { GiThreeLeaves } from "react-icons/gi"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState("/")
  const pathname = usePathname()
  const isRetiroUnoPage = pathname === "/retiro-uno"

  // Check if current path is one of the special paths
  const specialPaths = ["/retiro-uno/politicas", "/retiro-uno/success", "/retiro-uno/pending", "/retiro-uno/failure"]
  const isSpecialPath = specialPaths.includes(pathname)

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
    setIsMobileMenuOpen(false)
  }

  // Navigation links for retiro-uno page
  const retiroUnoNavLinks = [
    { label: "Experiencias", href: "#experiencias" },
    { label: "Agenda", href: "#agenda" },
    { label: "Información", href: "#informacion" },
    { label: "Anfitrionas", href: "#anfitrionas" },
    { label: "Precios", href: "#precios" },
  ]

  // Navigation links for home page
  const homeNavLinks = [
    { label: "Bodyline", href: "#bodyline" },
    { label: "Irene", href: "#irene" },
    { label: "Contacto", href: "#contact" },
    { label: "Comunidad", href: "#community" },
  ]

  // Function to handle navigation links
  const getNavHref = (hash: string) => {
    if (pathname === "/retiro-uno" && !isRetiroUnoPage) {
      return `/#${hash}`
    }
    return `#${hash}`
  }

  // Get the appropriate navigation links based on the current page
  const navLinks = isRetiroUnoPage ? retiroUnoNavLinks : homeNavLinks

  // If it's a special path, render only the centered UNO logo
  if (isSpecialPath) {
    return (
      <header className="bg-white py-4 shadow-md fixed w-full top-0 z-40">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <Link href="/retiro-uno" className="inline-block">
            <img src="/assets/retiro-uno/logo-green.png" alt="UNO Logo" className="h-auto" style={{ width: "120px" }} />
          </Link>
        </div>
      </header>
    )
  }

  return (
    <div>
      <header
        className={`${
          isScrolled
            ? "bg-[#F8F5F2] text-gray-700 lg:shadow-2xl h-[80px] lg:h-[80px]"
            : "bg-transparent text-white h-[80px] lg:h-[95px]"
        } p-4 z-40 font-lato-300 fixed w-full top-0 transition-all duration-500 ${
          isMobileMenuOpen ? "" : isScrolled ? "border-b-[1px] border-gray-200" : ""
        }`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between lg:hidden z-30">
            <div className="logo">
              <Link href="/">
                <img
                  src={
                    isRetiroUnoPage
                      ? isScrolled
                        ? "/assets/retiro-uno/logo-green.png"
                        : "/assets/retiro-uno/logo-beige.png"
                      : isScrolled
                        ? "/assets/logo.png"
                        : "/assets/Recurso_5.png"
                  }
                  alt="Logo"
                  className={`z-10 ${isRetiroUnoPage ? "w-[100px]" : "w-[136px]"}`}

                />
              </Link>
            </div>
            <div>
              <Menu
                onClick={toggleMobileMenu}
                className={`${isMobileMenuOpen ? "hidden" : ""} duration-700 ${
                  isScrolled ? "text-gray-700" : "text-gray-50"
                } text-4xl inline-block md:hidden cursor-pointer`}
              />
              <X
                onClick={toggleMobileMenu}
                className={`${isMobileMenuOpen ? "" : "hidden"} duration-700 ${
                  isScrolled ? "text-gray-700" : "text-gray-50"
                } text-4xl inline-block md:hidden cursor-pointer`}
              />
            </div>
          </div>
        </div>
        <div
          className="mx-auto flex items-center justify-between hidden lg:flex poppins-light"
          style={{ maxWidth: "1150px", height: isScrolled ? "50px" : "70px" }}
        >
          <div className="logo flex items-center space-x-4">
            <Link href="/">
              <img
                src={
                  isRetiroUnoPage
                    ? isScrolled
                      ? "/assets/retiro-uno/logo-green.png"
                      : "/assets/retiro-uno/logo-beige.png"
                    : isScrolled
                      ? "/assets/logo.png"
                      : "/assets/Recurso_5.png"
                }
                alt="Logo"
                style={{
                  height: isScrolled ? "50px" : "40px",
                }}
              />
            </Link>
          </div>
          <nav className="flex-grow flex justify-center space-x-10">
            <div className="text-md poppins-semibold space-x-10">
              {isRetiroUnoPage ? (
                // Navigation links for retiro-uno page
                <>
                  {retiroUnoNavLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className={`${
                        currentPage === link.href ? "active" : "a-h"
                      } ${isScrolled ? "text-gray-700" : "text-white"}`}
                    >
                      {link.label}
                    </a>
                  ))}
                </>
              ) : (
                // Navigation links for home page
                <>
                  {homeNavLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className={`${
                        currentPage === link.href ? "active" : "a-h"
                      } ${isScrolled ? "text-gray-700" : "text-white"}`}
                    >
                      {link.label}
                    </a>
                  ))}
                </>
              )}
            </div>
            {!isRetiroUnoPage && (
              <div
                className={`${
                  isScrolled ? "text-gray-700 border-gray-700" : "text-white border-white"
                } flex items-center border-[1px] hover:border-[#00314b] hover:text-[#00314b] duration-300 px-3 rounded-full`}
              >
                <a href="#therapys" className="flex items-center gap-x-2 poppins-regular">
                  Ver todas las sesiones <GiThreeLeaves />
                </a>
              </div>
            )}
            {isRetiroUnoPage && (
              <div
                className={`${
                  isScrolled ? "text-gray-700 border-gray-700" : "text-white border-white"
                } flex items-center border-[1px] hover:border-[#00314b] hover:text-[#00314b] duration-300 px-3 rounded-full`}
              >
                <a href="#faq" className="flex items-center gap-x-2 poppins-regular">
                  Preguntas Frecuentes <GiThreeLeaves />
                </a>
              </div>
            )}
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
            className={`fixed top-0 left-0 text-left w-full h-auto min-h-[400px] px-4 mt-[80px] ${isRetiroUnoPage ? 'bg-[#F8F5F2] text-gray-800' : 'bg-[#00314b] text-white'}  poppins-semibold z-20 flex flex-col items-start justify-center space-y-4 py-8`}
          >
            {isRetiroUnoPage ? (
              // Mobile navigation links for retiro-uno page
              <>
                {retiroUnoNavLinks.map((link, index) => (
                  <a key={index} href={link.href} onClick={() => handleNavClick(link.href)} className="text-lg">
                    {link.label}
                  </a>
                ))}
                <a href="#faq" onClick={() => handleNavClick("#faq")} className="text-lg">
                  Preguntas Frecuentes
                </a>
                <Link href="/" className="text-lg">
                  Volver al inicio
                </Link>
              </>
            ) : (
              // Mobile navigation links for home page
              <>
                {homeNavLinks.map((link, index) => (
                  <a key={index} href={link.href} onClick={() => handleNavClick(link.href)} className="text-lg">
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://wa.me/+5492996302273"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => handleNavClick("/sobre-nosotros")}
                  className="text-lg"
                >
                  Contacto
                </a>
                <div>
                  <a href="#therapys" className="flex items-center gap-x-2 poppins-regular">
                    Ver todas las sesiones
                    <GiThreeLeaves />
                  </a>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header

