import React from 'react'

const Pilares = () => {
  return (
    <div className=" py-12">
    <div className="max-w-6xl mx-auto text-center">
      {/* <h2 className="text-3xl font-clash-700 text-gray-800 mb-8">Los 6 Pilares de la Salud</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Aquí agregar las imágenes de los pilares */}
        <div className="flex flex-col items-center">
          <img src={"https://academiahieloyamor.org/wp-content/uploads/2024/03/inmersion-en-hielo_academia-hielo-y-amor_colombia_portugal_sierra-de-la-estrella_oporto_hielo_wimhof_terapia_9.png"} alt="Pilar 1" className="w-20 h-20 mb-4 rounded-full"/>
          <p className="font-clash-400 text-lg text-gray-600">Alimentación Saludable</p>
        </div>
        {/* Repetir para los demás pilares */}
        <div className="flex flex-col items-center">
          <img src={"https://academiahieloyamor.org/wp-content/uploads/2024/03/inmersion-en-hielo_academia-hielo-y-amor_colombia_portugal_sierra-de-la-estrella_oporto_hielo_wimhof_terapia_8.png"} alt="Pilar 1" className="w-20 h-20 mb-4 rounded-full"/>
          <p className="font-clash-400 text-lg text-gray-600">Respiración Consciente</p>
        </div>
        {/* Repetir para los demás pilares */}
        <div className="flex flex-col items-center">
          <img src={"https://academiahieloyamor.org/wp-content/uploads/2024/03/inmersion-en-hielo_academia-hielo-y-amor_colombia_portugal_sierra-de-la-estrella_oporto_hielo_wimhof_terapia_7.png"} alt="Pilar 1" className="w-20 h-20 mb-4 rounded-full"/>
          <p className="font-clash-400 text-lg text-gray-600">Desintoxicación Celular</p>
        </div>
        {/* Repetir para los demás pilares */}
        {/* <div className="flex flex-col items-center">
          <img src={"https://www.mindfulhealth.com/images/51580078-0-heart.png"} alt="Pilar 1" className="w-20 h-20 mb-4"/>
          <p className="font-clash-400 text-lg text-gray-600">Desintoxicación Celular</p>
        </div> */}
        {/* Repetir para los demás pilares */}
        {/* <div className="flex flex-col items-center">
          <img src={"https://www.mindfulhealth.com/images/51580078-0-heart.png"} alt="Pilar 1" className="w-20 h-20 mb-4"/>
          <p className="font-clash-400 text-lg text-gray-600">Desintoxicación Celular</p>
        </div> */}
        {/* Repetir para los demás pilares */}
        {/* <div className="flex flex-col items-center">
          <img src={"https://www.mindfulhealth.com/images/51580078-0-heart.png"} alt="Pilar 1" className="w-20 h-20 mb-4"/>
          <p className="font-clash-400 text-lg text-gray-600">Desintoxicación Celular</p>
        </div> */}
        {/* Repetir para los demás pilares */}
      </div>
    </div>
  </div>
  )
}

export default Pilares
