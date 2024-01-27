import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const CarCarousel = () => {
  return (
    <div className="relative">
      <Carousel className="w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1 w-full flex items-center justify-center">
              <Image
                height={800}
                width={1000}
                src="/assets/car.png"
                alt="car"
               
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-[#424242] hover:bg-primary" />
      <CarouselNext className="bg-[#424242]" />
    </Carousel>
    <div className="absolute left-1/2 -bottom-10">
      <div className="flex items-center justify-center">
        Lalman 
        Gaurab
      </div>
    </div>
    </div>
  );
};

export default CarCarousel;
