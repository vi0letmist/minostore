"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const images = [
  "/images/bc3d27977dace5c6cfe8ad1f61fa7960583ab357.jpg",
  "/images/bc3d27977dace5c6cfe8ad1f61fa7960583ab357.jpg",
  "/images/bc3d27977dace5c6cfe8ad1f61fa7960583ab357.jpg",
  "/images/bc3d27977dace5c6cfe8ad1f61fa7960583ab357.jpg",
  "/images/bc3d27977dace5c6cfe8ad1f61fa7960583ab357.jpg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: index * containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
    setCurrent(index);
  };

  const handleNext = () => {
    scrollToIndex((current + 1) % total);
  };

  const handlePrev = () => {
    scrollToIndex((current - 1 + total) % total);
  };

  useEffect(() => {
    const handleResize = () => scrollToIndex(current);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [current]);

  return (
    <section className="relative h-[36vh] sm:h-[40vh] md:h-[calc(100vh-4rem)] overflow-hidden">
      <div
        ref={containerRef}
        className="flex overflow-x-hidden h-full w-full snap-x snap-mandatory"
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full h-full snap-start"
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={1920}
              height={1080}
              className="w-full h-[36vh] sm:h-[40vh] md:h-[calc(100vh-4rem)] object-cover"
              priority
            />
          </div>
        ))}
      </div>

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
            className={`h-2 w-2 rounded-full bg-white/50 hover:bg-white transition-all duration-200 ${
              current === index ? "bg-white" : ""
            }`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
