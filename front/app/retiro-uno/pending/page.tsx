"use client"
import { Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

export default function PaymentPending() {
  return (
    <div className="min-h-screen bg-[#f8f5f2] flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-100 p-4 rounded-full">
              <Clock className="h-16 w-16 text-yellow-600" />
            </div>
          </div>

          <h1 className="text-2xl font-clash-700 text-[#00314b] mb-4">Pago en Proceso</h1>

          <p className="text-gray-600 mb-6">
            Tu pago está siendo procesado. Una vez que se confirme, recibirás un correo electrónico con los detalles de
            tu reserva.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-clash-600 text-[#00314b] mb-2">¿Qué sucede ahora?</h3>
            <ul className="text-left text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold">•</span>
                <span>Tu pago está siendo procesado por la entidad financiera</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold">•</span>
                <span>Este proceso puede tomar hasta 48 horas hábiles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold">•</span>
                <span>Te notificaremos por correo electrónico cuando se confirme</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold">•</span>
                <span>No es necesario realizar un nuevo pago</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <Link href="/retiro-uno">
              <Button className="w-full bg-[#00314b] hover:bg-[#00314b]/90">Volver a la página del retiro</Button>
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

