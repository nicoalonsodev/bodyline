import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { logo } from "../../assets"; // Asegúrate de importar correctamente los videos
const videos = [
  "https://fast.wistia.net/embed/iframe/21q5a8q3qg",
  "https://fast.wistia.net/embed/iframe/6vmjz3ajjl",
  "https://fast.wistia.net/embed/iframe/bf3wnqsaps",
  "https://fast.wistia.net/embed/iframe/96j7hknw7u",
  "https://fast.wistia.net/embed/iframe/9331wvp0kt",
];
const InstagramSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div id="community" className="bg-[#a1bcc9] py-20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8 ">
          <div className="flex justify-center items-center">
            {/* <img src={logo} alt="Logo" className="w-[200px] mr-4" /> */}
            <div>
              <a
                href="https://www.instagram.com/bodylinenqn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl font-bold hover:underline"
              >
                @bodylinenqn
              </a>
              <p className="text-gray-600 text-lg">
                Estar sano es posible solo hay que unir varias patas
              </p>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <div className="mx-4 h-[480px] w-full">
              <iframe
                className="rounded-lg w-auto h-full"
                src={videos[0]}
                title="Wistia Video"
                allowFullScreen
              ></iframe>
          </div>
          <div className="mx-4 h-[480px] w-full">
              <iframe
                className="rounded-lg w-auto h-full"
                src={videos[1]}
                title="Wistia Video"
                allowFullScreen
              ></iframe>
          </div>
          <div className="mx-4 h-[480px] w-full">
              <iframe
                className="rounded-lg w-auto h-full"
                src={videos[2]}
                title="Wistia Video"
                allowFullScreen
              ></iframe>
          </div>
          <div className="mx-4 h-[480px] w-full">
              <iframe
                className="rounded-lg w-auto h-full"
                src={videos[4]}
                title="Wistia Video"
                allowFullScreen
              ></iframe>
          </div>
          <div className="mx-4 h-[480px] w-full">
              <iframe
                className="rounded-lg w-auto h-full"
                src={videos[3]}
                title="Wistia Video"
                allowFullScreen
              ></iframe>
          </div>
         
          {/* Puedes agregar más videos o imágenes según sea necesario */}
        </Slider>
        <div className="mt-8">
          <a
            href="https://www.instagram.com/bodylinenqn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#00314b] font-poppins py-3 px-6 rounded-full text-sm border border-[#00314b] hover:bg-[#00314b] hover:text-white transition"
          >
            SÍGUENOS EN INSTAGRAM
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstagramSection;
