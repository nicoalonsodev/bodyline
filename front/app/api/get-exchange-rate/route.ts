import { NextResponse } from "next/server"
import { getDolarBlue } from "@/lib/utils"

export async function GET() {
  try {
    const data = await getDolarBlue()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in exchange rate route:", error)
    return NextResponse.json({ error: "Failed to fetch exchange rate" }, { status: 500 })
  }
}

