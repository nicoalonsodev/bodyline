import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock } from 'lucide-react';

interface RetreatScheduleProps {
  title?: string;
  subtitle?: string;
  location?: string;
}

const DaysItinerary: React.FC<RetreatScheduleProps> = ({
  title = "Agenda del Retiro",
  subtitle = "Cinco días de experiencias transformadoras cuidadosamente diseñadas",
  location = "RETIRO | PATAGONIA ARGENTINA"
}) => {
  const [scheduleInView, setScheduleInView] = useState(false);

  useEffect(() => {
    // Set to true after component mounts to trigger animation
    setScheduleInView(true);
  }, []);

  const dayData = [
    {
      title: "Día 1: Origen – El Inicio de Todo",
      description: "Reconocer el primer latido, recordar el círculo sagrado de donde venimos.",
      activities: [
        {
          timeframe: "Mañana: Llegada y Bienvenida",
          description: "Check-in en el alojamiento, recorrido por las instalaciones y presentación del equipo."
        },
        {
          timeframe: "Tarde: Círculo de Apertura",
          description: "Ceremonia de apertura, presentación de participantes y establecimiento de intenciones para el retiro."
        },
        {
          timeframe: "Noche: Introducción al Breathwork",
          description: "Primera sesión suave de respiración consciente para conectar con el momento presente y preparar el cuerpo."
        }
      ]
    },
    {
      title: "Día 2: Navegación de las Sensaciones",
      description: "Déjate abrazar por la profundidad. Navega las sensaciones sin resistencia.",
      activities: [
        {
          timeframe: "Mañana: Despertar con la Naturaleza",
          description: "Meditación al amanecer, seguida de una sesión de breathwork energizante y desayuno consciente."
        },
        {
          timeframe: "Tarde: Taller de Nutrición Consciente",
          description: "Aprenderás los principios de la alimentación viva y la jugoterapia, con demostración práctica y degustación."
        },
        {
          timeframe: "Noche: Círculo de Compartir",
          description: "Espacio para compartir experiencias, reflexiones y establecer conexiones más profundas con el grupo."
        }
      ]
    },
    {
      title: "Día 3: Estamos Juntos",
      description: "Un día para recordar el tejido de la existencia. Saltar al vacío sabiendo que estamos sostenidos.",
      activities: [
        {
          timeframe: "Mañana: Breathwork en la Montaña",
          description: "Excursión a un punto panorámico para una poderosa sesión de respiración conectando con los elementos naturales."
        },
        {
          timeframe: `Tarde: Taller "Despertando al Gigante"`,
          description: "Sesión práctica para identificar limitaciones, reconocer tu potencial y establecer un plan de transformación."
        },
        {
          timeframe: "Noche: Ceremonia del Fuego",
          description: "Ritual de liberación alrededor del fuego para soltar patrones limitantes y abrir espacio a lo nuevo."
        }
      ]
    },
    {
      title: "Día 4: Recordar",
      description: "Permítete ser quien realmente eres. Expándete, el espiral sigue su danza.",
      activities: [
        {
          timeframe: "Mañana: Sesión de Breathwork Profundo",
          description: "Experiencia intensiva de respiración para acceder a estados expandidos de conciencia y sabiduría interior."
        },
        {
          timeframe: "Tarde: Tiempo Personal en la Naturaleza",
          description: "Espacio para la reflexión individual, integración de aprendizajes y conexión con tu esencia."
        },
        {
          timeframe: "Noche: Cena Consciente Especial",
          description: "Experiencia gastronómica plant-based celebrando los sabores naturales y la conexión grupal."
        }
      ]
    },
    {
      title: "Día 5: Fusión – Vuelve a Casa con Propósito",
      description: "El destino es tu corazón. La magia sucede cuando te entregas a ser quien realmente eres.",
      activities: [
        {
          timeframe: "Mañana: Breathwork de Integración",
          description: "Última sesión de respiración para integrar las experiencias y aprendizajes del retiro."
        },
        {
          timeframe: `Tarde: Taller "El Camino Continúa"`,
          description: "Creación de un plan de acción personal para mantener e integrar los cambios en la vida cotidiana."
        },
        {
          timeframe: "Noche: Ceremonia de Cierre",
          description: "Ritual de cierre, celebración de logros y despedida con compromiso de continuar el camino."
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-[#315032]/80 text-sm tracking-widest mb-4 text-center">
        {location}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={scheduleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-clash-700 text-[#315032] mb-4">
          {title}
        </h2>
        <p className="text-xl text-[#315032]/80 font-clash-400 mb-6">
          {subtitle}
        </p>
        <div className="w-32 h-1 bg-[#315032] mx-auto"></div>
      </motion.div>

      <Tabs defaultValue="day1" className="w-full">
        <TabsList className="grid grid-cols-5 mb-8 bg-[#a1bcc9]/10 p-1 rounded-xl">
          {["Día 1", "Día 2", "Día 3", "Día 4", "Día 5"].map(
            (day, index) => (
              <TabsTrigger
                key={`day${index + 1}`}
                value={`day${index + 1}`}
                className="bg-transparent data-[state=active]:bg-[#315032] data-[state=active]:text-white rounded-lg"
              >
                {day}
              </TabsTrigger>
            )
          )}
        </TabsList>

        {dayData.map((day, dayIndex) => (
          <TabsContent key={`day${dayIndex + 1}`} value={`day${dayIndex + 1}`}>
            <Card className="border-none shadow-lg bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-[#315032] text-white py-4 px-8">
                  <h3 className="text-2xl font-clash-700">
                    {day.title}
                  </h3>
                  <p className="text-white/90 italic mt-2">
                    "{day.description}"
                  </p>
                </div>
                <div className="p-8 space-y-8">
                  {day.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="flex items-start gap-6">
                      <div className="bg-[#a1bcc9]/20 p-3 rounded-full shrink-0">
                        <Clock className="h-6 w-6 text-[#315032]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-clash-700 text-[#315032] mb-2">
                          {activity.timeframe}
                        </h4>
                        <p className="text-gray-600 font-clash-400 leading-relaxed">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default DaysItinerary;