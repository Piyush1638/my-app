"use client";
import * as React from "react";
import CarouselCard from "./CarouselCard";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

  const TWEEN_FACTOR = 4.2

export default function CarOwnerCarousel({callFrom}:{callFrom: string}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [tweenValues, setTweenValues] = React.useState<number[]>([])
  const [count, setCount] = React.useState(0);

  const onScroll = React.useCallback(() => {
    if (!api) return

    const engine = api.internalEngine()
    const scrollProgress = api.scrollProgress()

    const styles = api.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target()
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target)
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
          }
        })
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR)
      return numberWithinRange(tweenValue, 0, 1)
    })
    setTweenValues(styles)
  }, [api, setTweenValues])

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
    className="sm:mx-14 mx-3"
    >

    <Carousel
      opts={{
        align: "start",
        startIndex: 2,
        breakpoints: {
          '(min-width: 768px)':{
          startIndex: 0,
          }  
        },
      }}
      setApi={setApi}
      className="w-full"
      >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 basis-1/3  xl:basis-1/3 pb-6"
          style={{
            ...(tweenValues.length && { opacity: tweenValues[index] })
          }}
          >
            <CarouselCard isHighlighted={current === index} callFrom={callFrom}/>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious 
      className="bg-[#F6F6F6] dark:bg-[#2A2B2D] hover:bg-primary dark:hover:bg-dark-primary"
      />
      <CarouselNext className="bg-[#F6F6F6] dark:bg-[#2A2B2D]"/>
    </Carousel>
        </div>
  );
}

