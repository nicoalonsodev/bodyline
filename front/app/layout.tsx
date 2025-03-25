import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bodyline | Nutrición y Breathwork",
  description: "Bodyline: Transformación integral con nutrición, breathwork, y más. Salud y bienestar personalizados",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
        <ToastContainer position="bottom-right" />
      </body>
    </html>
  )
}

import "./globals.css"

import "./globals.css"

import "./globals.css"

