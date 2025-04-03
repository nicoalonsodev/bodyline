import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
  return (
    <footer className="bg-[#00314b] text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div className="space-y-4">
            <div className="relative h-12 w-40">
              <Image src="/logo-light.png" alt="Bodyline Logo" fill className="object-contain" />
            </div>
            <p className="text-gray-300 font-clash-400">
              Transformando vidas a través de experiencias conscientes, nutrición plant-based y conexión con la
              naturaleza.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-clash-600 mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/retiro-uno" className="text-gray-300 hover:text-white transition-colors">
                  Retiro UNO
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-clash-600 mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">info@bodyline.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">+54 9 299 630 2273</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">Bariloche, Río Negro, Argentina</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-clash-600 mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4 font-clash-400">
              Suscríbete para recibir información sobre nuestros próximos retiros y eventos.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Tu email"
                className="bg-[#00314b] border-gray-600 text-white placeholder:text-gray-400 focus:border-white"
              />
              <Button className="w-full bg-white text-[#00314b] hover:bg-gray-200">Suscribirse</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 font-clash-400">
          <p>© {new Date().getFullYear()} Bodyline. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

