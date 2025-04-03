import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Retiro UNO | Bodyline",
  description:
    "Una experiencia transformadora de 5 días para reconectar con tu esencia, despertar tu potencial y vivir en armonía con la naturaleza.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <ToastContainer position="bottom-right" />
      </body>
    </html>
  )
}

import "./globals.css"

import "./globals.css"



import './globals.css'