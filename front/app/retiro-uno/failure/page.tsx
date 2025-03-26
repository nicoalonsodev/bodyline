"use client"
import { XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

export default function PaymentFailure() {
  return (
    <div className="min-h-screen bg-[#f8f5f2] flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-4 rounded-full">
              <XCircle className="h-16 w-16 text-red-600" />
            </div>
          </div>

          <h1 className="text-2xl font-clash-700 text-[#00314b] mb-4">Hubo un problema con tu pago</h1>

          <p className="text-gray-600 mb-6">
            Lo sentimos, no pudimos procesar tu pago. Por favor, intenta nuevamente o utiliza otro método de pago.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-clash-600 text-[#00314b] mb-2">¿Qué puedo hacer?</h3>
            <ul className="text-left text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Verifica que los datos de tu tarjeta sean correctos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Intenta con otra tarjeta o método de pago</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Contacta a tu banco para verificar si hay algún problema</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Si el problema persiste, contáctanos directamente</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <Link href="/retiro-uno">
              <Button className="w-full bg-[#00314b] hover:bg-[#00314b]/90">Intentar nuevamente</Button>
            </Link>

            <Button
              variant="outline"
              className="w-full text-gray-700"
              onClick={() => window.open("https://wa.me/+5492996302273", "_blank")}
            >
              Contactar soporte
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

