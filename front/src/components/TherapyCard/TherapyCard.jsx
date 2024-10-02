import React from 'react';
import './FeaturedCard.css';

const TherapyCard = ({ image, image_back, title, description, pdfLink, logo }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
          <img src={image} alt={title} className="card-image" />
          <div className="card-title flex justify-center">
            {/* <img src={logo} alt="" className='w-1/2' /> */}
            {/* <h3 className='text-2xl'>{title}</h3> */}
          </div>
        </div>
        <div className="card-back relative">
          <img src={image_back} alt={title} className="card-image-dark" />
          <div className="card-description flex justify-center flex-wrap">
          {/* <img src={logo} alt="" className='w-1/2 mb-2' />
            <p className='text-gray-200 poppins-light'>{description}</p> */}
            {pdfLink && (
              <a
                href={pdfLink}
                download
                className="absolute  bottom-10 mt-4 inline-block bg-white text-[#00314b] font-poppins py-2 px-4 rounded-full text-sm border border-[#00314b] hover:bg-[#00314b] hover:text-white transition"
              >
                Descargar PDF
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyCard;
