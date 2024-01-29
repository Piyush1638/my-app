import React from "react";

const Services = () => {
  return (
    <div className="bg-zinc-900 rounded-lg">
      <div className="grid grid-cols-3">
        <Service src="\assets\dashboard\www.png" name="Hulk Rent"/>
        <Service src="\assets\dashboard\garage.png" name="Garage"/>
        <Service src="\assets\dashboard\hulkNFT.png" name="Hulk NFT"/>
        <Service src="\assets\dashboard\hotel.png" name="Hotel"/>
        <Service src="\assets\dashboard\assurance.png" name="Insurance"/>
        <Service src="\assets\dashboard\parking.png" name="Parking"/>
        <Service src="\assets\dashboard\audi.png" name="Audi"/>
        <Service src="\assets\dashboard\accident.png" name="Accident"/>
        <Service src="\assets\dashboard\repair.png" name="Repair"/>
    </div>
    </div>
  );
};

export default Services;

const Service = ({src, name}:{src:string, name:string}) => (
  <div className="justify-center items-stretch self-stretch bg-zinc-900 flex max-w-[139px] flex-col px-9 py-4 rounded-xl cursor-pointer">
    <img
      loading="lazy"
      src={src}
      className="aspect-square object-contain object-center w-6 self-center"
    />
    <div className="text-neutral-400 text-center text-sm leading-5 whitespace-nowrap mt-2">
      {name}
    </div>
  </div>
);
