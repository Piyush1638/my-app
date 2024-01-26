"use client";
import * as React from "react";
import Card from "@/components/Card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 2);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 2);
    });
  }, [api]);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      setApi={setApi}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5 py-10">
            <Card isHighlighted={current === index} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

// export default HeroCarousel
