import React from "react";
import TherapyCard from "../TherapyCard/TherapyCard";
import { owner, flores } from "../../assets";
const FeaturedProperties = () => {
  const properties = [
    {
      image:
       owner,
      title: "Terapia 1",
      description: "Descripción breve de Terapia 1",
    },
    {
      image:
       flores,
      title: "Terapia 2",
      description: "Descripción breve de Terapia 1",
    },
    {
      image:
        owner,
      title: "Terapia 3",
      description: "Descripción breve de OTerapia 1",
    },
  ];

  return (
    <div>
      <div className="w-full flex flex-col items-center py-20">
        <h1 className="text-3xl font-clash-700 text-[#00314b] text-center lg:text-left">
          Nuestras
          <span className="poppins-bold text-[#00314b]">Terapias</span>
        </h1>
        <hr className="w-32 border-t-[3px] border-[#00314b] mt-2" />
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        {properties.map((property, index) => (
          <TherapyCard
            key={index}
            image={property.image}
            title={property.title}
            description={property.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
