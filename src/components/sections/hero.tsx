"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const images = [
  "/images/bc3d27977dace5c6cfe8ad1f61fa7960583ab357.jpg",
  "/images/bc3d27977dace5c6cfe8ad1f61fa7960583ab357.jpg",
  "/images/bc3d27977dace5c6cfe8ad1f61fa7960583ab357.jpg",
  "/images/bc3d27977dace5c6cfe8ad1f61fa7960583ab357.jpg",
  "/images/bc3d27977dace5c6cfe8ad1f61fa7960583ab357.jpg",
];

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const total = images.length;

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const handleNext = () => api?.scrollTo((current + 1) % total);
  const handlePrev = () => api?.scrollTo((current - 1 + total) % total);

  return (
    <section className="relative h-[24vh] sm:h-[40vh] md:h-[calc(100vh-4rem)] overflow-hidden">
      <Carousel setApi={setApi} className="w-full h-full">
        <CarouselContent className="h-full">
          {images.map((src, index) => (
            <CarouselItem key={index} className="relative h-full min-w-full">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={1920}
                height={1080}
                className="w-full h-[24vh] sm:h-[40vh] md:h-[calc(100vh-4rem)] object-cover"
                priority
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <Button
          onClick={handlePrev}
          variant="ghost"
          size="icon"
          className="absolute left-4 sm:left-8 md:left-16 top-1/2 -translate-y-1/2 z-10 bg-bg-primary rounded-full w-9 h-9 sm:w-10 sm:h-10 p-2 shadow-md"
        >
          <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-secondary" />
        </Button>

        <Button
          onClick={handleNext}
          variant="ghost"
          size="icon"
          className="absolute right-4 sm:right-8 md:right-16 top-1/2 -translate-y-1/2 z-10 bg-bg-primary rounded-full w-9 h-9 sm:w-10 sm:h-10 p-2 shadow-md"
        >
          <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-secondary" />
        </Button>

        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full bg-white/50 hover:bg-white",
                current === index && "bg-white"
              )}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
