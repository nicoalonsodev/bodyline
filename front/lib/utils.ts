import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getDolarBlue() {
  try {
    const response = await fetch("https://dolarapi.com/v1/dolares/blue")
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching dolar blue rate:", error)
    throw error
  }
}

export function formatARS(amount: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(amount)
}

export function formatUSD(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount)
}

