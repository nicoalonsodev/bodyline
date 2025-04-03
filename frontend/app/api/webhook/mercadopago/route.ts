import { NextResponse } from "next/server"
import { MercadoPagoConfig, Payment } from "mercadopago"

export async function POST(request: Request) {
  try {
    const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN
    if (!accessToken) {
      console.error("Mercado Pago access token is not configured")
      return NextResponse.json({ error: "Mercado Pago access token is not configured" }, { status: 500 })
    }
    
    // Configurar correctamente con la nueva API
    const client = new MercadoPagoConfig({
      accessToken: accessToken
    })
    
    // Crear cliente de pagos
    const paymentClient = new Payment(client)
    
    // Obtener el cuerpo de la solicitud como texto
    const bodyText = await request.text()
    console.log("Webhook recibido:", bodyText)
    
    let paymentId = null;
    let type = null;
    
    // Intentar parsear como JSON primero
    try {
      const jsonData = JSON.parse(bodyText)
      console.log("Datos JSON recibidos:", jsonData)
      
      // Formato estándar de webhook de Mercado Pago
      if (jsonData.data && jsonData.data.id) {
        paymentId = jsonData.data.id
      }
      
      if (jsonData.type) {
        type = jsonData.type
      } else if (jsonData.action) {
        // A veces viene como action en lugar de type
        type = jsonData.action.split('.')[0] // payment.created -> payment
      }
    } catch (e) {
      // Si no es JSON, intentar como URL params
      console.log("No es JSON, intentando como URLSearchParams")
      const params = new URLSearchParams(bodyText)
      type = params.get("type")
      paymentId = params.get("data.id")
      
      // Algunos webhooks pueden enviar id con formato diferente
      if (!paymentId) {
        paymentId = params.get("id")
      }
    }
    
    console.log("Tipo:", type, "ID de pago:", paymentId)
    
    // Solo procesar notificaciones de tipo 'payment'
    if ((type === "payment" || type === "payment.created" || type === "payment.updated") && paymentId) {
      console.log("Procesando notificación de pago:", paymentId)
      
      try {
        // Obtener información del pago usando la nueva API
        const paymentInfo = await paymentClient.get({ id: paymentId })
        console.log("Información de pago obtenida:", JSON.stringify(paymentInfo))
        
        // Verificar si el pago fue aprobado
        if (paymentInfo.status === "approved") {
          console.log("Pago aprobado, registrando información...")
          
          // Registrar en Google Sheets
          try {
            // Preparar los datos para Google Sheets
            const formData = new FormData()
            
            // Añadir datos del pago y del comprador
            if (paymentInfo.payer) {
              // Enviar datos del comprador según lo solicitado
              formData.append("FNAME", paymentInfo.additional_info?.payer?.first_name || "")  // Nombre del comprador
              formData.append("EMAIL", paymentInfo.external_reference || "")        // Email del comprador
              formData.append("PHONE", paymentInfo.additional_info?.payer?.phone?.number || "") // Teléfono del comprador (si disponible)
            }
          
            // Enviar datos a Google Sheets
            const sheetsResponse = await fetch(
              "https://script.google.com/macros/s/AKfycbySQ7llIeRrAiPQZjYwwD_GhUSCFjTEMIwVseCCD1L57Mgk_ya3NFHrcNeWKbCT_EIc/exec",
              {
                method: "POST",
                body: formData,
                mode: "no-cors", // Si es necesario, ajusta el modo según la configuración de tu Google Apps Script
              },
            )
          
            if (!sheetsResponse.ok) {
              console.error("Error al registrar en Google Sheets:", sheetsResponse.statusText)
            } else {
              console.log("Datos registrados en Google Sheets correctamente")
            }
          } catch (sheetError) {
            console.error("Error registrando en Google Sheets:", sheetError)
            // Continuamos con la respuesta exitosa aunque falle el registro en Sheets
          }
        } else {
          console.log("Pago no aprobado, estado:", paymentInfo.status)
        }
      } catch (paymentError) {
        console.error("Error obteniendo información del pago:", paymentError)
        // No retornamos error para que Mercado Pago no reintente continuamente
      }
    } else {
      console.log("Notificación no relacionada con pagos o sin ID")
    }
    
    // Siempre retornamos éxito para evitar reintentos innecesarios
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing webhook:", error)
    // A pesar del error, retornamos 200 para evitar reintentos
    return NextResponse.json({ success: false, message: "Error processing webhook but acknowledged" })
  }
}