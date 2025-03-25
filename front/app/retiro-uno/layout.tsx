import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Retiro UNO | Experiencia Transformadora en Patagonia",
  description:
    "Sumérgete en una experiencia transformadora en la majestuosa Patagonia Argentina. Reconecta con tu esencia a través de breathwork, naturaleza y más.",
  openGraph: {
    title: "Retiro UNO | Experiencia Transformadora en Patagonia",
    description:
      "Sumérgete en una experiencia transformadora en la majestuosa Patagonia Argentina. Reconecta con tu esencia a través de breathwork, naturaleza y más.",
    images: [
      {
        url: "/assets/retiro-uno/Montaña-uno.jpeg",
        width: 1200,
        height: 630,
        alt: "Retiro UNO en Patagonia",
      },
    ],
  },
}

export default function RetiroUnoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

