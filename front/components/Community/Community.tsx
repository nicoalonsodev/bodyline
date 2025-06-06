import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaArrowLeft,
  FaArrowRight,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Define the videos array
const videos = [
  "https://fast.wistia.net/embed/iframe/21q5a8q3qg",
  "https://fast.wistia.net/embed/iframe/6vmjz3ajjl",
  "https://fast.wistia.net/embed/iframe/bf3wnqsaps",
  "https://fast.wistia.net/embed/iframe/96j7hknw7u",
  "https://fast.wistia.net/embed/iframe/9331wvp0kt",
  "https://fast.wistia.net/embed/iframe/bvzkdyi8im",
];

// Define proper types for the arrow components
interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const InstagramSection = () => {
  // Custom Next Arrow with proper type
  const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 right-2 lg:-right-10 transform -translate-y-1/2 z-10 cursor-pointer text-white bg-[#00314b] p-2 rounded-full"
        onClick={onClick}
      >
        <FaArrowRight size={30} />
      </div>
    );
  };

  // Custom Prev Arrow with proper type
  const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 left-2 lg:-left-10 transform -translate-y-1/2 z-10 cursor-pointer text-gray-200 bg-[#00314b] p-2 rounded-full"
        onClick={onClick}
      >
        <FaArrowLeft size={30} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <div id="community" className="bg-[#a1bcc9] py-20 px-2">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="mb-8">
          <div className="flex justify-center items-center">
            {/* <img src={logo} alt="Logo" className="w-[200px] mr-4" /> */}
            <div>
              <a
                href="https://www.instagram.com/bodylinenqn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl font-clash-700 text-gray-800 hover:underline"
              >
                @bodylinenqn
              </a>
              <p className="text-gray-600 text-lg text-balance">
                Estar sano es posible solo hay que unir varias patas
              </p>
            </div>
          </div>
        </div>
        <Slider {...settings} className="w-full flex justify-center">
          {videos.map((video, index) => (
            <div
              key={index}
              className="px-0 lg:px-4 h-[480px] !flex justify-center"
            >
              <iframe
                className="rounded-lg w-auto h-full"
                src={video}
                title={`Wistia Video ${index + 1}`}
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center mt-8 gap-4">
          <a
            href="https://www.instagram.com/bodylinenqn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#00314b] font-poppins py-3 px-3 lg:px-6 rounded-full text-sm border border-[#00314b] hover:bg-[#00314b] hover:text-white transition flex items-center"
          >
            <FaInstagram size={20} className="mr-2" /> Instagram
          </a>
          <a
            href="http://linkedin.com/in/irene-carreras-711653121"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#00314b] font-poppins py-3 px-3 lg:px-6 rounded-full text-sm border border-[#00314b] hover:bg-[#00314b] hover:text-white transition flex items-center"
          >
            <FaLinkedin size={20} className="mr-2" /> LinkedIn
          </a>
          <a
            href="https://www.youtube.com/@irenecarrerasbodyline3323"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#00314b] font-poppins py-3 px-3 lg:px-6 rounded-full text-sm border border-[#00314b] hover:bg-[#00314b] hover:text-white transition flex items-center"
          >
            <FaYoutube size={20} className="mr-2" /> Youtube
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default InstagramSection;