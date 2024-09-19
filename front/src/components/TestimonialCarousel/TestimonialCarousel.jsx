import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TestimonialCarousel = () => {
  const testimonials = [
    {
      session: "Sesiones 1 a 1 NUTRICIÓN",
      name: "Juan Marino",
      testimonial: `Irene: Juan, como te venís sintiendo? 
        Juan: Tremendamente bien ✨✨💖💖 ahí te mando el audio a WhatsApp.
        Increíble todo lo que me pasaste. Un cambio 100 físico y conciencia.`,
    },
    {
      session: "Sesiones 1 a 1 NUTRICIÓN",
      name: "Alejandra",
      testimonial: `Gracias por todo el material de apoyo.. sobre todo por el amor que desborda de tu labor...`,
    },
    {
      session: "Sesiones 1 a 1 NUTRICIÓN",
      name: "Tatiana",
      testimonial: `Hola buen día me estoy sintiendo con más energía.
        Estoy durmiendo mejor también. Con los jugos, la infusión de hierbas alcalinas y las frutas paso la mañana bien. 
        Almuerzo siempre muchas ensaladas y algo más. No me da ansiedad paso el día sin que me den ganas de comer algo dulce.
        Incorpore mucha más frutas. He bajado más de peso. Manteniendo el ejercicio.`,
    },
    {
      session: "Sesiones 1 a 1 NUTRICIÓN",
      name: "Sil",
      testimonial: `Hola hermosa ire como estas? fui a gimnasia y acá estoy haciéndome un mimo (JUGO) y siempre llevando tus conocimientos brindados a donde voy. 
        Siempre agradezco haberte encontrado, porque sembraste en mí cosas hermosas, siempre en corazón, gracias por expandir sabiduría del bien te quiero ❤️`,
    },
    {
      session: "Sesiones 1 a 1 RESPIRAR",
      name: "Seba",
      testimonial: `Infinitas gracias Iré a ti🫶🏻 que lujo respirar juntos, una bendición, gracias 🙏🏻🦅🔥`,
    },
    {
      session: "Sesiones 1 a 1 RESPIRAR",
      name: "Silvana",
      testimonial: `Iré, amanecí súper energética y con muchas ganas de hacer cosas no me venía sintiendo así. Inicie el día respirando. ¡Gracias!`,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
  };

  return (
    <div className="py-12 px-2 lg:px-32">
      <h2 className="text-3xl font-clash-700 text-[#00314b] text-center mb-8">
        Testimonios de Nuestros Clientes
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4 h-[320px]">
            <div className="h-full bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-[#00314b]">
                {testimonial.name}
              </h3>
              <p className="italic text-gray-600 mb-2">{testimonial.session}</p>
              <p className="text-gray-700 text-sm">{testimonial.testimonial}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
