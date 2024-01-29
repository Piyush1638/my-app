import React from "react";

const RentedCar = () => {
  return (
    <form className="items-stretch self-stretch bg-zinc-900 flex w-auto  flex-col p-5 rounded-xl">
      <header className="justify-between items-stretch flex w-full gap-5">
        <div className="justify-between items-stretch flex gap-1 my-auto">
          <div className="text-white text-base font-bold leading-6 grow whitespace-nowrap">
            Rented car
          </div>
          <div className="flex w-3 shrink-0 h-3 flex-col my-auto rounded-full" />
        </div>
        <div className="items-stretch flex gap-2">
          <Services href="#" src="/assets/dashboard/gas-station.png"/>
          <Services href="#" src="/assets/dashboard/Vector.png"/>
          <Services href="#" src="/assets/dashboard/Vector-1.png"/>
        </div>
      </header>
      <img
        loading="lazy"
        srcSet="/assets/dashboard/bg-graph.png"
        className="aspect-[0.83] object-contain object-center w-full mt-3"
        alt="Car Image"
      />
    </form>
  );
};

export default RentedCar;

const Services = ({href,src}:{href:string, src:string}) => (
  <a
    href={href}
    className="justify-center items-center bg-gray-800 flex aspect-square flex-col w-[30px] h-[30px] px-2 rounded-[55px]"
    aria-label="Car Image 1"
    role="img"
  >
    <img
      loading="lazy"
      src={src}
      className="aspect-square object-contain object-center w-full justify-center items-center"
      alt="Car 1"
    />
  </a>
);
