import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { logo, videoIg1, videoIg2, videoIg3} from "../../assets"; // Asegúrate de importar correctamente los videos

const InstagramSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="bg-blue-100 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <div className="flex justify-center items-center">
            <img src={logo} alt="Logo" className="w-[200px] mr-4"/>
            <div>
              <a           href="https://www.instagram.com/bodylinenqn"
            target="_blank"
            rel="noopener noreferrer" className="text-xl font-bold hover:underline">@bodylinenqn</a>
              <p className="text-gray-600">
              Estar sano es posible solo hay que unir varias patas 
              </p>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <div className="px-4">
            <video controls className="rounded-lg">
              <source src={videoIg3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="px-4">
            <video controls className="rounded-lg">
              <source src={videoIg1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="px-4">
            <video controls className="rounded-lg">
              <source src={videoIg2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="px-4">
            <video controls className="rounded-lg">
              <source src={videoIg3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="px-4">
            <video controls className="rounded-lg">
              <source src={videoIg1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Puedes agregar más videos o imágenes según sea necesario */}
        </Slider>
        <div className="mt-8">
          <a
            href="https://www.instagram.com/bodylinenqn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-700 font-poppins py-3 px-6 rounded-full text-sm border border-blue-700 hover:bg-blue-700 hover:text-white transition"
          >
            SÍGUENOS EN INSTAGRAM
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstagramSection;
