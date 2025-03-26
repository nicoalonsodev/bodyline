"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react"
import { createPaymentPreference } from "@/lib/mercadopago"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { CheckCircle } from "lucide-react"
import { formatARS, formatUSD } from "@/lib/utils"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  preSelectedPackage?: string
}

interface ExchangeRate {
  compra: number
  venta: number
  fechaActualizacion: string
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, preSelectedPackage }) => {
  const [step, setStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState("mercadopago")
  const [paymentAmount, setPaymentAmount] = useState("full")
  const [packageType, setPackageType] = useState(preSelectedPackage || "promotion")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [preferenceId, setPreferenceId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showPackageSelection, setShowPackageSelection] = useState(!preSelectedPackage)
  const [error, setError] = useState<string | null>(null)
  const [exchangeRate, setExchangeRate] = useState<ExchangeRate | null>(null)
  const [isLoadingRate, setIsLoadingRate] = useState(false)
  const [isPromotionActive, setIsPromotionActive] = useState(true)

  useEffect(() => {
    if (preSelectedPackage) {
      console.log("Paquete preseleccionado:", preSelectedPackage)
      setPackageType(preSelectedPackage)
      setShowPackageSelection(false)
    } else {
      setShowPackageSelection(true)
    }
  }, [preSelectedPackage])

  useEffect(() => {
    // Initialize Mercado Pago SDK
    try {
      const publicKey = process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY
      console.log("Initializing Mercado Pago with public key:", publicKey ? "Set" : "Not set")

      if (publicKey) {
        initMercadoPago(publicKey)
      } else {
        console.warn("Mercado Pago public key is not set")
      }
    } catch (error) {
      console.error("Error initializing Mercado Pago:", error)
    }
  }, [])

  useEffect(() => {
    const fetchExchangeRate = async () => {
      setIsLoadingRate(true)
      try {
        const response = await fetch("/api/get-exchange-rate")
        const data = await response.json()
        setExchangeRate(data)
      } catch (error) {
        console.error("Error fetching exchange rate:", error)
        toast.error("Error al obtener la tasa de cambio")
      } finally {
        setIsLoadingRate(false)
      }
    }

    fetchExchangeRate()
  }, [])

  useEffect(() => {
    // Get current year
    const currentYear = new Date().getFullYear()

    // Check if current date is after March 22 of the current year
    const currentDate = new Date()
    const promotionEndDate = new Date(`${currentYear}-03-22T23:59:59`)

    console.log("Current date:", currentDate)
    console.log("Promotion end date:", promotionEndDate)
    console.log("Is promotion active?", currentDate <= promotionEndDate)

    setIsPromotionActive(currentDate <= promotionEndDate)

    // If promotion is not active and package type is promotion, switch to regular
    if (currentDate > promotionEndDate && packageType === "promotion") {
      setPackageType("regular")
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const getPackagePrice = (type: string) => {
    // Precios base para cada tipo de paquete
    const prices = {
      promotion: 1255,
      regular: 1000,
    }

    // Obtener el precio base para el tipo seleccionado
    const basePrice = prices[type as keyof typeof prices] || prices.promotion

    return basePrice
  }

  const getDepositAmount = (type: string) => {
    return Math.round(getPackagePrice(type) * 0.25)
  }

  const getPackageName = () => {
    switch (packageType) {
      case "promotion":
        return "Precio Promocional"
      case "regular":
        return "Precio Regular"
      default:
        return "Precio Promocional"
    }
  }

  const handleContinue = async () => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.phone) {
        toast.error("Por favor completa todos los campos")
        return
      }

      // Expresión regular para validar email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        toast.error("Por favor ingresa un correo electrónico válido")
        return
      }

      setStep(step + 1)
    } else if (step === 2) {
      if (paymentMethod === "mercadopago") {
        setIsLoading(true)
        setError(null)

        try {
          console.log("Creating payment preference...")

          const paymentData = {
            title: `Retiro UNO - ${getPackageName()} ${paymentAmount === "deposit" ? "(Depósito)" : ""}`,

            price: paymentAmount === "deposit" ? getDepositAmount(packageType) : getPackagePrice(packageType),
            quantity: 1,
            buyerName: formData.name,
            buyerEmail: formData.email,
            buyerPhone: formData.phone,
          }

          console.log("Payment data:", paymentData)

          const response = await createPaymentPreference(paymentData)

          console.log("Payment preference created:", response)

          if (response && response.id) {
            setPreferenceId(response.id)
            setStep(3)
          } else {
            throw new Error("No se recibió un ID de preferencia válido. Respuesta: " + JSON.stringify(response))
          }
        } catch (error) {
          console.error("Error creating payment preference:", error)
          // setError(error.message || "Hubo un error al procesar el pago. Por favor intenta nuevamente.")
          toast.error("Hubo un error al procesar el pago. Por favor intenta nuevamente.")
        } finally {
          setIsLoading(false)
        }
      } else {
        setStep(4)
      }
    }
  }

  const handleBack = () => {
    if (step === 4) {
      // From transfer payment instructions, go back to payment method selection
      setStep(2)
    } else if (step > 1) {
      setStep(step - 1)
    } else {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-clash-600 text-[#315032]">
                  {step === 1 && "Información Personal"}
                  {step === 2 && "Método de Pago"}
                  {step === 3 && "Completar Pago"}
                  {step === 4 && "Instrucciones de Transferencia"}
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-[#315032] text-white" : "bg-gray-200 text-gray-500"}`}
                    >
                      1
                    </div>
                    <div className="ml-2 text-sm font-clash-500 text-gray-700">Información</div>
                  </div>
                  <div className={`flex-1 h-1 mx-4 ${step >= 2 ? "bg-[#315032]" : "bg-gray-200"}`}></div>
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-[#315032] text-white" : "bg-gray-200 text-gray-500"}`}
                    >
                      2
                    </div>
                    <div className="ml-2 text-sm font-clash-500 text-gray-700">Pago</div>
                  </div>
                  <div className={`flex-1 h-1 mx-4 ${step >= 3 ? "bg-[#315032]" : "bg-gray-200"}`}></div>
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-[#315032] text-white" : "bg-gray-200 text-gray-500"}`}
                    >
                      3
                    </div>
                    <div className="ml-2 text-sm font-clash-500 text-gray-700">Confirmación</div>
                  </div>
                </div>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600">
                  <p className="font-clash-500">Error: {error}</p>
                  <p className="text-sm mt-1">Por favor intenta nuevamente o elige otro método de pago.</p>
                </div>
              )}

              {/* Paso 1: Información Personal */}
              {step === 1 && (
                <div>
                  {showPackageSelection && (
                    <div className="mb-6">
                      <Label htmlFor="packageType" className="block mb-2 text-gray-700">
                        Selecciona tu paquete
                      </Label>
                      <RadioGroup
                        value={packageType}
                        onValueChange={setPackageType}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        <div className="flex flex-col h-full">
                          <RadioGroupItem
                            value="promotion"
                            id="promotion"
                            className="peer sr-only"
                            disabled={!isPromotionActive}
                          />
                          <Label
                            htmlFor="promotion"
                            className={`flex flex-col h-full rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-[#315032] peer-data-[state=checked]:border-[#315032] peer-data-[state=checked]:bg-[#315032]/5 ${!isPromotionActive ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                          >
                            <div className="flex flex-col h-full">
                              <div className="text-center mb-4">
                                <h3 className="font-clash-600 text-[#315032]">Precio Promocional</h3>
                                <p className="text-sm text-gray-500 mb-2">Hasta el 22 de Marzo o agotar 10 cupos</p>
                                {!isPromotionActive && (
                                  <p className="text-xs text-red-500 font-semibold">Promoción finalizada</p>
                                )}
                                <p className="font-clash-700 text-xl">${getPackagePrice("promotion")} USD</p>
                              </div>
                              <ul className="text-left space-y-2 flex-grow">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                  <span className="text-gray-600">
                                    Hospedaje en Wake up Patagonia, a orillas del Lago Gutiérrez
                                  </span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                  <span className="text-gray-600">Alimentación completa (4 comidas diarias)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                  <span className="text-gray-600">Todas las experiencias y actividades del Retiro</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                  <span className="text-gray-600">
                                    Servicio de transporte desde aeropuerto o terminal de Bariloche
                                  </span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                  <span className="text-gray-600">
                                    Sesión individual con ambas anfitrionas + sesiones grupales previas
                                  </span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                  <span className="text-gray-600">Fotografías y videos profesionales del retiro</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                  <span className="text-gray-600 text-xs">
                                    *No incluye tickets aéreos ni traslados hasta Bariloche
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </Label>
                        </div>

                        <div className="flex flex-col h-full">
                          <RadioGroupItem value="regular" id="regular" className="peer sr-only" />
                          <Label
                            htmlFor="regular"
                            className="flex flex-col h-full rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-[#315032] peer-data-[state=checked]:border-[#315032] peer-data-[state=checked]:bg-[#315032]/5 cursor-pointer"
                          >
                            <div className="flex flex-col h-full">
                              <div className="text-center mb-4">
                                <h3 className="font-clash-600 text-[#315032]">Precio Regular</h3>
                                <p className="text-sm text-gray-500 mb-2">Después del 22 de Marzo</p>
                                <p className="font-clash-700 text-xl">${getPackagePrice("regular")} USD</p>
                              </div>
                              <ul className="text-left space-y-2 flex-grow">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                  <span className="text-gray-600">
                                    Hospedaje en Wake up Patagonia, a orillas del Lago Gutiérrez
                                  </span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                  <span className="text-gray-600">Alimentación completa (4 comidas diarias)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                  <span className="text-gray-600">Todas las experiencias y actividades del Retiro</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                  <span className="text-gray-600">
                                    Servicio de transporte desde aeropuerto o terminal de Bariloche
                                  </span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                  <span className="text-gray-600">
                                    Sesión individual con ambas anfitrionas + sesiones grupales previas
                                  </span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                  <span className="text-gray-600">Fotografías y videos profesionales del retiro</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                  <span className="text-gray-600 text-xs">
                                    *No incluye tickets aéreos ni traslados hasta Bariloche
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}

                  {!showPackageSelection && (
                    <div className="mb-6 bg-[#315032]/5 p-4 rounded-xl">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-clash-600 text-[#315032]">
                            {packageType === "promotion"
                              ? "Precio Promocional"
                              : packageType === "regular"
                                ? "Precio Regular"
                                : "Premium"}
                          </h3>
                          <p className="text-gray-600">${getPackagePrice(packageType)} USD</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowPackageSelection(true)}
                          className="text-sm text-gray-700"
                        >
                          Cambiar
                        </Button>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4 mb-6">
                    <div>
                      <Label htmlFor="name" className="block mb-2 text-gray-700">
                        Nombre completo
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ingresa tu nombre completo"
                        required
                        className="rounded-xl text-gray-700"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="block mb-2 text-gray-700">
                        Correo electrónico
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        required
                        className="rounded-xl text-gray-700"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="block mb-2 text-gray-700">
                        Teléfono
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+54 9 11 1234 5678"
                        required
                        className="rounded-xl text-gray-700"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Paso 2: Método de Pago */}
              {step === 2 && (
                <div>
                  <div className="mb-6">
                    <Label htmlFor="paymentMethod" className="block mb-2 text-gray-700">
                      Selecciona tu método de pago
                    </Label>
                    <RadioGroup
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      <div className="h-full">
                        <RadioGroupItem value="mercadopago" id="mercadopago" className="peer sr-only" />
                        <Label
                          htmlFor="mercadopago"
                          className="flex flex-col h-full items-center justify-center rounded-xl border-2 border-muted bg-white p-6 hover:bg-gray-50 hover:border-[#315032] peer-data-[state=checked]:border-[#315032] peer-data-[state=checked]:bg-[#315032]/5 cursor-pointer"
                        >
                          <div className="text-center">
                            <h3 className="font-clash-600 text-[#315032] mb-2">Mercado Pago</h3>
                            <p className="text-sm text-gray-500">Tarjeta de crédito/débito o transferencia</p>
                          </div>
                        </Label>
                      </div>

                      <div className="h-full">
                        <RadioGroupItem value="transfer" id="transfer" className="peer sr-only" />
                        <Label
                          htmlFor="transfer"
                          className="flex flex-col h-full items-center justify-center rounded-xl border-2 border-muted bg-white p-6 hover:bg-gray-50 hover:border-[#315032] peer-data-[state=checked]:border-[#315032] peer-data-[state=checked]:bg-[#315032]/5 cursor-pointer"
                        >
                          <div className="text-center">
                            <h3 className="font-clash-600 text-[#315032] mb-2">Transferencia Bancaria</h3>
                            <p className="text-sm text-gray-500">Datos para transferencia directa o link de PayPal</p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="mb-6 mt-8">
                    <Label htmlFor="paymentAmount" className="block mb-2 text-gray-700">
                      Selecciona el monto a pagar
                    </Label>
                    <RadioGroup
                      value={paymentAmount}
                      onValueChange={setPaymentAmount}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      <div className="h-full">
                        <RadioGroupItem value="full" id="full" className="peer sr-only" />
                        <Label
                          htmlFor="full"
                          className="flex flex-col h-full items-center justify-center rounded-xl border-2 border-muted bg-white p-6 hover:bg-gray-50 hover:border-[#315032] peer-data-[state=checked]:border-[#315032] peer-data-[state=checked]:bg-[#315032]/5 cursor-pointer"
                        >
                          <div className="text-center">
                            <h3 className="font-clash-600 text-[#315032] mb-2">Pago Completo</h3>
                            <p className="text-sm text-gray-500">Paga el monto total ahora</p>
                          </div>
                        </Label>
                      </div>

                      <div className="h-full">
                        <RadioGroupItem value="deposit" id="deposit-amount" className="peer sr-only" />
                        <Label
                          htmlFor="deposit-amount"
                          className="flex flex-col h-full items-center justify-center rounded-xl border-2 border-muted bg-white p-6 hover:bg-gray-50 hover:border-[#315032] peer-data-[state=checked]:border-[#315032] peer-data-[state=checked]:bg-[#315032]/5 cursor-pointer"
                        >
                          <div className="text-center">
                            <h3 className="font-clash-600 text-[#315032] mb-2">Reserva con 25%</h3>
                            <p className="text-sm text-gray-500">Asegura tu lugar con el depósito inicial</p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl mb-6">
                    <h3 className="font-clash-600 text-[#4A5D4C] mb-2">Resumen de tu compra</h3>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Retiro UNO - {getPackageName()}</span>
                      <div className="text-right">
                        <div className="font-clash-500">{formatUSD(getPackagePrice(packageType))}</div>
                        {exchangeRate && (
                          <div className="text-sm text-gray-500">
                            {formatARS(getPackagePrice(packageType) * exchangeRate.venta)}
                          </div>
                        )}
                      </div>
                    </div>
                    {paymentAmount === "deposit" && (
                      <>
                        <Separator className="my-2" />
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Depósito (25%)</span>
                          <div className="text-right">
                            <div className="font-clash-500">{formatUSD(getDepositAmount(packageType))}</div>
                            {exchangeRate && (
                              <div className="text-sm text-gray-500">
                                {formatARS(getDepositAmount(packageType) * exchangeRate.venta)}
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                          * El saldo restante deberá ser pagado antes del 1 de Enero de 2025
                        </p>
                      </>
                    )}
                    <Separator className="my-2" />
                    <div className="flex justify-between font-clash-600">
                      <span className="text-[#4A5D4C]">Total a pagar ahora</span>
                      <div className="text-right">
                        <div className="text-gray-700">
                          {formatUSD(
                            paymentAmount === "deposit" ? getDepositAmount(packageType) : getPackagePrice(packageType),
                          )}
                        </div>
                        {exchangeRate && (
                          <div className="text-sm text-gray-500">
                            {formatARS(
                              (paymentAmount === "deposit"
                                ? getDepositAmount(packageType)
                                : getPackagePrice(packageType)) * exchangeRate.venta,
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    {exchangeRate && (
                      <p className="text-xs text-gray-500 mt-2 text-right">
                        Cotización Dólar Blue: {formatARS(exchangeRate.venta)}
                        <br />
                        Última actualización: {new Date(exchangeRate.fechaActualizacion).toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Paso 3: Pago con Mercado Pago */}
              {step === 3 && (
                <div>
                  <div className="bg-gray-50 p-4 rounded-xl mb-6">
                    <h3 className="font-clash-600 text-[#315032] mb-4">Completa tu pago</h3>
                    {preferenceId ? (
                      <div className="flex justify-center">
                        <Wallet initialization={{ preferenceId }} />
                      </div>
                    ) : (
                      <div className="text-center py-4">
                        <p>Cargando opciones de pago...</p>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 text-center mb-4">
                    Al completar el pago, recibirás un correo electrónico con la confirmación y los detalles de tu
                    reserva.
                  </p>
                </div>
              )}

              {/* Paso 4: Transferencia Bancaria */}
              {step === 4 && (
                <div>
                  <div className="bg-gray-50 p-6 rounded-xl mb-6">
                    <h3 className="font-clash-600 text-[#315032] mb-4">Opciones de pago</h3>

                    <div className="mb-4">
                      <h4 className="font-clash-600 text-[#315032] mb-2">PayPal (USD)</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-500">Reserva con 25%</p>
                          <a
                            href="https://www.paypal.com/ncp/payment/HQXUL45Z5BXFU"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-clash-500 text-blue-600 hover:underline"
                          >
                            https://www.paypal.com/ncp/payment/HQXUL45Z5BXFU
                          </a>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Reserva con 50%</p>
                          <a
                            href="https://www.paypal.com/ncp/payment/NKZMX7TAW8YD8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-clash-500 text-blue-600 hover:underline"
                          >
                            https://www.paypal.com/ncp/payment/NKZMX7TAW8YD8
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-clash-600 text-[#315032] mb-2">Transferencia Bancaria (ARS)</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-500">Banco</p>
                          <p className="font-clash-500">Banco Nación Argentina</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Titular</p>
                          <p className="font-clash-500">Irene Bodyline</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">CUIT/CUIL</p>
                          <p className="font-clash-500">27-12345678-9</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">CBU</p>
                          <p className="font-clash-500">0110012345678901234567</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Alias</p>
                          <p className="font-clash-500">BODYLINE.RETIRO.UNO</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Monto a transferir</p>
                          <p className="font-clash-700">
                            $
                            {paymentAmount === "deposit" ? getDepositAmount(packageType) : getPackagePrice(packageType)}{" "}
                            USD o su equivalente en pesos argentinos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-xl mb-6 border border-yellow-200">
                    <h4 className="font-clash-600 text-yellow-800 mb-2">Importante</h4>
                    <p className="text-sm text-yellow-700">
                      Una vez realizado el pago, por favor contacta a Irene o Pily para confirmar tu reserva.
                    </p>
                    <p className="text-sm text-yellow-700 mt-2">
                      Si abonas el 25% en pesos argentinos o en dólares, deberás abonar el 25% restante para llegar al
                      50% hasta un mes después de reservado el cupo. El 50% restante se abona en efectivo en el retiro.
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 text-center mb-4">
                    Al recibir tu comprobante, te enviaremos un correo electrónico con la confirmación y los detalles de
                    tu reserva.
                  </p>
                </div>
              )}

              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={handleBack} className="rounded-xl text-gray-700">
                  {step === 1 ? "Cancelar" : "Atrás"}
                </Button>
                {step < 3 && (
                  <Button
                    onClick={handleContinue}
                    className="bg-[#315032] hover:bg-[#5a915c]/90 rounded-xl"
                    disabled={isLoading}
                  >
                    {isLoading ? "Procesando..." : "Continuar"}
                  </Button>
                )}
                {step === 4 && (
                  <Button onClick={onClose} className="bg-[#315032] hover:bg-[#5a915c]/90 rounded-xl">
                    Finalizar
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default PaymentModal

