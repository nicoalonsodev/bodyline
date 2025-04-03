"use client"

import { useEffect } from "react"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import { useSearchParams } from "next/navigation"

export default function PaymentSuccess() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Registrar en Google Sheets cuando la página se carga
    const registerPayment = async () => {
      try {
        // Obtener datos de la URL
        const paymentId = searchParams.get("payment_id") || ""
        const status = searchParams.get("status") || "approved"
        const merchantOrderId = searchParams.get("merchant_order_id") || ""

        // Crear FormData para enviar a Google Sheets
        const formData = new FormData()
        formData.append("paymentId", paymentId)
        formData.append("status", status)
        formData.append("merchantOrderId", merchantOrderId)
        formData.append("date", new Date().toISOString())

        // Enviar datos a Google Sheets
        await fetch(
          "https://script.google.com/macros/s/AKfycbzZH7_GuBEMwlnWmeZ_0MuMSIdUgkD0miOCbuew8ps8OcTYYB491XItHXlnxXJb4AhOpg/exec",
          {
            method: "POST",
            body: formData,
            mode: "no-cors",
          },
        )

        console.log("Datos registrados en Google Sheets correctamente")
      } catch (error) {
        console.error("Error registrando en Google Sheets:", error)
      }
    }

    registerPayment()
  }, [searchParams])

  return (
    <div className="min-h-screen bg-[#f8f5f2] flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
          </div>

          <h1 className="text-2xl font-clash-700 text-[#00314b] mb-4">¡Pago Exitoso!</h1>

          <p className="text-gray-600 mb-6">
            Tu reserva para el Retiro "UNO" ha sido confirmada. Hemos enviado un correo electrónico con todos los
            detalles a tu dirección de email.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-clash-600 text-[#00314b] mb-2">Próximos pasos</h3>
            <ul className="text-left text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Revisa tu correo electrónico para ver la confirmación</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Completa el formulario de inscripción que te enviamos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Prepárate para vivir una experiencia transformadora</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <Link href="/retiro-uno">
              <Button className="w-full bg-[#00314b] hover:bg-[#00314b]/90">Volver a la página del retiro</Button>
            </Link>

            <Link href="/">
              <Button variant="outline" className="w-full">
                Ir al inicio
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

