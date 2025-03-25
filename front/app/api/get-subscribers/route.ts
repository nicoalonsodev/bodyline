import { NextResponse } from "next/server"

const SHEET_ID = process.env.GOOGLE_SHEET_ID
const API_KEY = process.env.GOOGLE_SHEET_API_KEY
const RANGE = "A:A" // Columna donde están los registros

export async function GET() {
  try {
    if (!SHEET_ID || !API_KEY) {
      return NextResponse.json({ error: "API key or Sheet ID missing" }, { status: 500 })
    }

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
    const response = await fetch(url)
    const data = await response.json()

    if (!data.values) {
      return NextResponse.json({ count: 0 })
    }

    // Restamos 1 porque suele haber una fila de encabezado
    return NextResponse.json({ count: data.values.length - 1 })
  } catch (error) {
    console.error("Error fetching subscribers:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
