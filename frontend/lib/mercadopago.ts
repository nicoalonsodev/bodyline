// Función para crear una preferencia de pago en Mercado Pago
interface CreatePaymentPreferenceProps {
  title: string
  price: number
  quantity: number
  buyerName: string
  buyerEmail: string
  buyerPhone: string
}

export async function createPaymentPreference({
  title,
  price,
  quantity,
  buyerName,
  buyerEmail,
  buyerPhone
}: CreatePaymentPreferenceProps) {
  try {
    // Llamada al endpoint del servidor
    const response = await fetch("/api/create-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        price,
        quantity,
        buyerName,
        buyerEmail,
        buyerPhone
      }),
    })

    // Check if the response is ok
    if (!response.ok) {
      // Try to get error details, but handle non-JSON responses
      let errorMessage = `Error ${response.status}: ${response.statusText}`

      try {
        // Attempt to parse as JSON, but don't fail if it's not JSON
        const errorData = await response.text()
        try {
          // Try to parse as JSON
          const jsonError = JSON.parse(errorData)
          errorMessage = jsonError.error || errorMessage
        } catch (jsonError) {
          // If not JSON, use the text response (truncated if too long)
          errorMessage = `${errorMessage}. Details: ${errorData.substring(0, 100)}${errorData.length > 100 ? "..." : ""}`
        }
      } catch (textError) {
        // If we can't even get the text, just use the status
        console.error("Could not read error response:", textError)
      }

      throw new Error(errorMessage)
    }

    // Parse the successful response
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error creating payment preference:", error)
    throw error
  }
}

