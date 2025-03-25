import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Políticas y Consentimiento | Retiro UNO",
  description:
    "Políticas de cancelación, responsabilidad y autorización para grabaciones del Retiro UNO: Origen y Destino.",
}

export default function PoliticasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

