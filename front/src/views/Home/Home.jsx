import React from "react";
import Header from "../../components/Header/Header";
import banner from "../../assets/banner.png";
import InstagramSection from "../../components/InstagramSection/InstagramSection";
import AboutUs from "../../components/AboutUs/AboutUs";
import DescriptionContact from "../../components/DescriptionContact/DescriptionContact";
import AboutIrene from "../../components/AboutIrene/AboutIrene"; 
import Therapys from "../../components/Therapis/Therapis";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div className="font-clash-400">
      <Header />
      <div className="relative w-screen h-screen">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={banner}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-[360px]">
          <h1 className="text-white text-4xl poppins-semibold text-center">
           NUTRICION Y BREATHWORK
          </h1>
          <div>
            <a
              href="/"
              className="tracking-widest poppins-regular bg-[#00314b] hover:bg-[#00314b] duration-300 text-white px-3 py-2 rounded-3xl flex items-center justify-center gap-x-2 mt-8"
            >
              QUIERO ASESORARME
            </a>
          </div>
        </div>
      </div>

      <AboutUs />

      <AboutIrene />

      <InstagramSection />

      <Therapys />
      
      <DescriptionContact />

      <Footer />
    </div>
  );
};

export default Home;
