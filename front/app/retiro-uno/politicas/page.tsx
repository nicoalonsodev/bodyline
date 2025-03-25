import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"

export default function PoliticasPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F2]">
      <Header />

      <main className="container max-w-4xl mx-auto px-4 py-12 md:py-16">
        <Link href="/retiro-uno" className="inline-flex items-center text-[#315032] hover:text-[#315032]/80 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Retiro UNO
        </Link>

        <h1 className="text-3xl md:text-4xl font-clash-700 text-[#315032] mb-8">Políticas y Consentimiento</h1>

        <div className="space-y-12">
          {/* Política de Cancelación */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-clash-700 text-[#315032] mb-4">
              Política de Cancelación Consciente – Retiro UNO: Origen y Destino
            </h2>
            <div className="prose prose-green max-w-none text-gray-700">
              <p>
                Este retiro es un espacio sagrado de transformación profunda, y cada persona que reserva su lugar está
                tomando un compromiso energético consigo misma y con el grupo. Por esta razón, hemos diseñado una
                política de cancelación consciente, alineada con la responsabilidad y el respeto por el proceso de cada
                alma.
              </p>

              <h3 className="text-xl font-clash-600 mt-6 mb-3">Condiciones de cancelación y reembolso:</h3>

              <h4 className="font-clash-600 mt-4 mb-2">1. Reservas y pagos:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Para asegurar tu lugar, se requiere el pago del 25% del valor total del retiro.</li>
                <li>
                  El saldo restante a completar el 50%, deberá ser abonado un mes después del pago de la reserva. El 50%
                  restante, del total del retiro, se abonará el primer día de retiro.
                </li>
              </ul>

              <h4 className="font-clash-600 mt-4 mb-2">2. Cancelaciones hasta un mes antes del retiro:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Si decides cancelar tu asistencia hasta 30 días antes del inicio del retiro, se te reembolsará el 25%
                  del monto abonado (equivalente al 50% del pago total del retiro).
                </li>
                <li>
                  El 25% restante del adelanto no es reembolsable, ya que cubre los costos operativos y organizativos
                  destinados a tu participación.
                </li>
              </ul>

              <h4 className="font-clash-600 mt-4 mb-2">3. Cancelaciones dentro del último mes previo al retiro:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>No se aceptarán cancelaciones ni se realizarán reembolsos.</li>
                <li>
                  Entendemos que pueden surgir imprevistos, pero al confirmar tu participación, asumes un compromiso
                  energético y logístico que no es posible reubicar a último momento.
                </li>
              </ul>

              <h4 className="font-clash-600 mt-4 mb-2">4. Transferencia de cupo:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Si no puedes asistir, tienes la opción de ceder tu lugar a otra persona que resuene con la experiencia
                  y cumpla con los requisitos del retiro.
                </li>
                <li>
                  Para esto, es necesario comunicarlo con al menos 15 días de anticipación y proporcionar los datos de
                  la persona que tomará tu lugar.
                </li>
              </ul>

              <p className="mt-6">
                Esta política ha sido creada desde el respeto y la conciencia, honrando la energía invertida en la
                organización de este encuentro y el compromiso que cada alma asume al decir sí a este llamado.
              </p>

              <p>Si tienes dudas o necesitas más información, contáctanos.</p>

              <p className="text-center mt-6">
                🙏✨ Gracias por ser parte de este viaje de reconexión y transformación.
              </p>
            </div>
          </section>

          {/* Política de Responsabilidad */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-clash-700 text-[#315032] mb-4">
              Política de Responsabilidad – Retiro UNO: Origen y Destino
            </h2>
            <div className="prose prose-green max-w-none text-gray-700">
              <p>
                El retiro UNO: Origen y Destino es una experiencia de profunda transformación, expansión y reconexión
                con la esencia del Ser. Cada participante es responsable de su proceso, de su bienestar físico, mental y
                emocional, y del compromiso con su propia evolución. Para garantizar una experiencia armoniosa y
                alineada con la energía del encuentro, establecemos las siguientes políticas de responsabilidad:
              </p>

              <div className="my-6 border-t border-[#315032]/20"></div>

              <h3 className="text-xl font-clash-600 mt-6 mb-3">
                1. Responsabilidad sobre el estado de salud física, mental y emocional
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-clash-600">Autoconocimiento y bienestar:</span>
                  <br />
                  Cada participante es responsable de evaluar su estado de salud y determinar si se encuentra en
                  condiciones óptimas para vivir esta experiencia expansiva.
                </li>
                <li>
                  <span className="font-clash-600">Condiciones médicas preexistentes:</span>
                  <br />
                  Si tienes alguna condición médica (física, psicológica o emocional) que pueda requerir atención
                  especial, te pedimos que lo informes con anticipación para evaluar si el retiro es adecuado para ti en
                  este momento de tu proceso.
                </li>
                <li>
                  <span className="font-clash-600">Uso de medicación y tratamientos:</span>
                  <br />
                  Si estás bajo tratamiento médico, psiquiátrico o psicológico, es tu responsabilidad asegurarte de que
                  puedes participar sin comprometer tu bienestar ni el de los demás. En caso de estar en tratamiento con
                  psicofármacos, es necesario comunicarlo antes de la inscripción.
                </li>
                <li>
                  <span className="font-clash-600">Consumo de sustancias:</span>
                  <br />
                  Durante el retiro no se permite el consumo de alcohol, tabaco, sustancias psicoactivas o cualquier
                  otro elemento que altere la conciencia y pueda interferir con el proceso individual o grupal.
                </li>
              </ul>

              <div className="my-6 border-t border-[#315032]/20"></div>

              <h3 className="text-xl font-clash-600 mt-6 mb-3">2. Información relevante para la participación</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-clash-600">Experiencia personal y energética:</span>
                  <br />
                  Este retiro implica prácticas de introspección, meditación, respiración consciente y conexión
                  energética profunda, exposición a aguas frías. Es importante que cada participante comprenda que su
                  experiencia será única y estará directamente relacionada con su nivel de apertura, integración y
                  entrega al proceso.
                </li>
                <li>
                  <span className="font-clash-600">Procesos emocionales y su integración:</span>
                  <br />
                  Al tratarse de un retiro transformador, es posible que emerjan emociones, memorias o bloqueos
                  internos. Cada participante es responsable de su propia integración y de respetar los procesos del
                  grupo.
                </li>
                <li>
                  <span className="font-clash-600">No es un reemplazo de terapia:</span>
                  <br />
                  Si bien el retiro facilita un espacio de sanación y expansión de conciencia, no sustituye tratamientos
                  médicos, psicológicos o terapéuticos. Si sientes que necesitas acompañamiento profesional adicional,
                  te recomendamos buscar la asistencia correspondiente antes o después del retiro.
                </li>
              </ul>

              <div className="my-6 border-t border-[#315032]/20"></div>

              <h3 className="text-xl font-clash-600 mt-6 mb-3">
                3. Responsabilidad en la convivencia y respeto energético
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-clash-600">Respeto por los tiempos y espacios:</span>
                  <br />
                  El retiro es un campo energético sagrado donde cada persona vivirá su proceso de manera única. Es
                  fundamental respetar los tiempos de silencio, descanso y prácticas establecidas.
                </li>
                <li>
                  <span className="font-clash-600">Cuidado del entorno y de los demás participantes:</span>
                  <br />
                  Se espera que cada persona mantenga una actitud de respeto, empatía y armonía con el grupo. La
                  convivencia está basada en la cooperación, el amor y el respeto por la experiencia de cada alma.
                </li>
                <li>
                  <span className="font-clash-600">Confidencialidad y privacidad:</span>
                  <br />
                  Todo lo compartido durante el retiro es sagrado y personal. Se solicita mantener la confidencialidad
                  sobre las experiencias individuales y grupales, respetando la privacidad de cada participante.
                </li>
              </ul>

              <div className="my-6 border-t border-[#315032]/20"></div>

              <h3 className="text-xl font-clash-600 mt-6 mb-3">4. Firma de consentimiento y compromiso personal</h3>
              <p>Al inscribirse en el retiro, cada participante declara que:</p>

              <ul className="list-none pl-6 space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="text-[#315032] mr-2">✅</span>
                  Ha leído y comprendido estas políticas de responsabilidad.
                </li>
                <li className="flex items-start">
                  <span className="text-[#315032] mr-2">✅</span>
                  Acepta que participa voluntariamente, bajo su propio criterio y responsabilidad.
                </li>
                <li className="flex items-start">
                  <span className="text-[#315032] mr-2">✅</span>
                  Se compromete a respetar los lineamientos establecidos para el bienestar de todos.
                </li>
                <li className="flex items-start">
                  <span className="text-[#315032] mr-2">✅</span>
                  Comprende que el retiro no es un tratamiento médico ni terapéutico, sino una experiencia de
                  autoconocimiento y expansión de conciencia.
                </li>
              </ul>

              <p className="text-center mt-6">
                🙏✨ Gracias por asumir con responsabilidad y compromiso este llamado del alma.
              </p>
            </div>
          </section>

          {/* Política de Fotografías */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-clash-700 text-[#315032] mb-4">
              Política y Autorización para Grabaciones y Fotografías – Retiro UNO: Origen y Destino
            </h2>
            <div className="prose prose-green max-w-none text-gray-700">
              <p>
                En el retiro UNO: Origen y Destino, la experiencia de cada participante es sagrada y profundamente
                personal. Para honrar la privacidad, el respeto y la integridad de cada proceso, establecemos la
                siguiente política respecto a la toma de fotografías y grabaciones de video durante el encuentro.
              </p>

              <div className="my-6 border-t border-[#315032]/20"></div>

              <h3 className="text-xl font-clash-600 mt-6 mb-3">1. Uso de Fotografía y Video en el Retiro</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-clash-600">Grabaciones conscientes y respetuosas:</span>
                  <br />
                  Las imágenes y videos serán capturados únicamente en momentos específicos previamente indicados, sin
                  interrumpir ni invadir los espacios de sanación, conexión profunda o procesos individuales.
                </li>
                <li>
                  <span className="font-clash-600">Respeto por la privacidad:</span>
                  <br />
                  Ninguna grabación se realizará sin el consentimiento de los participantes involucrados. Aquellas
                  personas que prefieran no aparecer en imágenes podrán informarlo con antelación para ser respetados en
                  todo momento.
                </li>
                <li>
                  <span className="font-clash-600">Finalidad del material capturado:</span>
                  <br />
                  Las fotos y videos podrán ser utilizados con el propósito de documentar y compartir la esencia del
                  retiro, siempre desde el respeto, la conciencia y la integridad de la experiencia. El material podrá
                  ser utilizado en plataformas digitales, redes sociales, contenido promocional y proyectos futuros
                  alineados con la misión del retiro.
                </li>
              </ul>

              <div className="my-6 border-t border-[#315032]/20"></div>

              <h3 className="text-xl font-clash-600 mt-6 mb-3">2. Consentimiento de Participación en Grabaciones</h3>
              <p>Al firmar esta autorización, el/la participante:</p>

              <ul className="list-none pl-6 space-y-2 mt-4">
                <li className="flex items-start">
                  <span className="text-[#315032] mr-2">✅</span>
                  Acepta que puede ser fotografiado/a o grabado/a en momentos específicos durante el retiro, sin que
                  ello interfiera en su experiencia personal.
                </li>
                <li className="flex items-start">
                  <span className="text-[#315032] mr-2">✅</span>
                  Comprende que las imágenes pueden ser utilizadas en redes sociales, plataformas digitales o materiales
                  relacionados con el retiro.
                </li>
                <li className="flex items-start">
                  <span className="text-[#315032] mr-2">✅</span>
                  Puede optar por no aparecer en grabaciones, notificándolo con anticipación para que su deseo sea
                  respetado.
                </li>
                <li className="flex items-start">
                  <span className="text-[#315032] mr-2">✅</span>
                  Declara que su participación en las imágenes es voluntaria y que no reclamará compensaciones
                  económicas por su uso.
                </li>
              </ul>

              <div className="my-6 border-t border-[#315032]/20"></div>

              <h3 className="text-xl font-clash-600 mt-6 mb-3">3. Opción de Exclusión</h3>
              <p>
                Si no deseas aparecer en fotografías o videos, puedes comunicarlo previamente al equipo organizador o al
                inicio del retiro, para garantizar que tu decisión sea respetada en todo momento.
              </p>

              <p className="text-center mt-6">
                🙏✨ Gracias por confiar y ser parte de esta experiencia con conciencia y respeto.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer className="bg-[#315032]" />
    </div>
  )
}

