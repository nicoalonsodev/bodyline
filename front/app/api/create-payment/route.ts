import { NextResponse } from "next/server"
import { MercadoPagoConfig, Preference } from "mercadopago"
import { getDolarBlue } from "@/lib/utils"

export async function POST(request: Request) {
  try {
    // Check if access token is available
    const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN
    if (!accessToken) {
      console.error("Mercado Pago access token is not configured")
      return NextResponse.json({ error: "Mercado Pago access token is not configured" }, { status: 500 })
    }

    // Configurar mercadopago correctamente
    const client = new MercadoPagoConfig({
      accessToken: accessToken
    })

    // Crear cliente de preferencias
    const preferenceClient = new Preference(client)

    // Parse request body
    let body
    try {
      body = await request.json()
    } catch (error) {
      console.error("Error parsing request body:", error)
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
    }

    const { title, price, quantity, buyerName, buyerEmail, buyerPhone } = body

    // Validate required fields
    if (!title || !price || !quantity || !buyerName || !buyerEmail || !buyerPhone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Get current dolar blue rate and convert price to ARS
    const dolarBlue = await getDolarBlue()
    const priceInARS = Math.ceil(Number(price) * dolarBlue.venta)

    console.log("Creating payment preference with data:", {
      title,
      priceUSD: price,
      priceARS: priceInARS,
      quantity,
      buyerName,
      buyerEmail,
      buyerPhone,
      siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    })

    // Check if site URL is available
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
    if (!siteUrl) {
      console.error("Site URL is not configured")
      return NextResponse.json({ error: "Site URL is not configured" }, { status: 500 })
    }

    // Crear preferencia de pago con el nuevo formato
    const preferenceData = {
      items: [
        {
          title,
          unit_price: priceInARS, // Using converted price in ARS
          quantity: Number(quantity),
          currency_id: 'ARS',
        },
      ],
      payer: {
        phone: {
          number: buyerPhone,
        },
        name: buyerName,
        email: buyerEmail,
      },
      external_reference: buyerEmail,
      back_urls: {
        success: `${siteUrl}/retiro-uno/success`,
        failure: `${siteUrl}/retiro-uno/failure`,
        pending: `${siteUrl}/retiro-uno/pending`,
      },
      auto_return: "approved",
      notification_url: `${siteUrl}/api/webhook/mercadopago`,
    }

    try {
      const response = await preferenceClient.create({ body: preferenceData })
      console.log("Mercado Pago preference created:", response.id)
      // Return the response with the ARS price for reference
      return NextResponse.json({ 
        ...response, 
        priceARS: priceInARS,
        exchangeRate: dolarBlue.venta
      })
    } catch (mpError: any) {
      console.error("Mercado Pago API error:", mpError)
      return NextResponse.json(
        {
          error: "Error creating Mercado Pago preference",
          details: mpError.message || "Unknown error",
        },
        { status: 500 },
      )
    }
  } catch (error: any) {
    console.error("Unhandled error in create-payment route:", error)
    return NextResponse.json(
      { error: "Internal server error", details: error.message || "Unknown error" },
      { status: 500 },
    )
  }
}