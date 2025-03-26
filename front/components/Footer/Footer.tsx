"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { usePathname } from "next/navigation";

const Footer = ({ className = "" }) => {
  const pathname = usePathname();
  const isRetiroUno = pathname?.startsWith("/retiro-uno");

  // Navigation links for retiro-uno page
  const retiroUnoNavLinks = [
    { label: "Experiencias", href: "/retiro-uno#experiencias" },
    { label: "Agenda", href: "/retiro-uno#agenda" },
    { label: "Información", href: "/retiro-uno#informacion" },
    { label: "Anfitrionas", href: "/retiro-uno#anfitrionas" },
    { label: "Precios", href: "/retiro-uno#precios" },
    { label: "Politicas", href: "/retiro-uno/politicas" },
  ];

  return (
    <footer className={`text-white ${className || "bg-[#00314b]"}`}>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo y Descripción */}
          <div className="space-y-4">
            <div className="relative h-25 w-40">
              <Image
                src={
                  isRetiroUno
                    ? "/assets/retiro-uno/logo-beige.png"
                    : "/assets/logo-vertical.png"
                }
                alt={isRetiroUno ? "Retiro UNO Logo" : "Bodyline Logo"}
                className="w-[200px]"
                width={200}
                height={50}
              />
            </div>
            <p className="text-gray-300 font-clash-400">
              {isRetiroUno
                ? "Experiencia consciente y expansiva, nutrición plant-based y conexión con la naturaleza en nuestro retiro UNO."
                : "Transformando vidas a través de experiencias conscientes, nutrición plant-based y conexión con la naturaleza."}
            </p>
            <div className="flex space-x-4">
              {!isRetiroUno && (
                <>
                  <a
                    href={
                      isRetiroUno
                        ? "https://www.instagram.com/uno_origen.y.detino"
                        : "https://www.instagram.com/bodylinenqn"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="http://linkedin.com/in/irene-carreras-711653121"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://www.youtube.com/@irenecarrerasbodyline3323"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300"
                  >
                    <Youtube size={20} />
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-clash-600 mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {isRetiroUno ? (
                // Retiro UNO specific links
                retiroUnoNavLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))
              ) : (
                // Default Bodyline links
                <>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/retiro-uno"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Retiro UNO
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sobre-nosotros"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Sobre Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contacto"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Contacto
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/retiro-uno/politicas"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Políticas
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-clash-600 mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  {isRetiroUno ? "uno.retiros@gmail.com" : "info@bodyline.com"}
                </span>
              </li>
              {isRetiroUno ? (
                // Retiro UNO specific contact info
                <>
                  <li className="flex items-start gap-2">
                    <a
                      href="https://www.instagram.com/uno_origen.y.destino/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-gray-300 flex justify-center items-center gap-2"
                    >
                      <Instagram size={20} /> UNO: El llamado del Origen.
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <Phone size={18} className="mt-1 flex-shrink-0" />
                    <span className="text-gray-300">
                      Pily | +54 9 1135790710
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Phone size={18} className="mt-1 flex-shrink-0" />
                    <span className="text-gray-300">
                      Irene | +54 9 299 6302273
                    </span>
                  </li>
                </>
              ) : (
                // Default Bodyline contact info
                <>
                  <li className="flex items-start gap-2">
                    <Phone size={18} className="mt-1 flex-shrink-0" />
                    <span className="text-gray-300">+54 9 299 630 2273</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin size={18} className="mt-1 flex-shrink-0" />
                    <span className="text-gray-300">
                      Bariloche, Río Negro, Argentina
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 font-clash-400">
          <p>
            © {new Date().getFullYear()}{" "}
            {isRetiroUno ? "Retiro UNO" : "Bodyline"}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
