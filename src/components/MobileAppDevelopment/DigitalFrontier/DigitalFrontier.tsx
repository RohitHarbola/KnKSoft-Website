"use client";

import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "./slide";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function DigitalFrontier() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const mainSlider = useRef<Slider>(null);
  const thumbnailSlider = useRef<Slider>(null);

  const mainSettings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const thumbnailSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    beforeChange: (current: number, next: number) => {
      if (mainSlider.current) {
        mainSlider.current.slickGoTo(next);
      }
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const goToNextSlide = () => {
    if (mainSlider.current) {
      mainSlider.current.slickNext();
    }
    if (thumbnailSlider.current) {
      thumbnailSlider.current.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (mainSlider.current) {
      mainSlider.current.slickPrev();
    }
    if (thumbnailSlider.current) {
      thumbnailSlider.current.slickPrev();
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto mb-2 md:mb-8 lg:mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
          How Will You Conquer the Digital Frontier With
          <span className="text-primary block mt-2">
            Our Mobile App Development Technologies?
          </span>
        </h2>
        <p className="mt-2 text-base font-thin lg:text-lg text-foreground">
          To transform digital innovation and enhance business operations, our
          mobile app development services are designed to elevate your online
          presence and deliver measurable results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-4 lg:gap-10 md:gap-8 mb-8 max-w-5xl lg:max-w-6xl mx-auto h-full">
        <div className="relative h-full">
          <Slider ref={mainSlider} {...mainSettings} className="h-full">
            {slides.map((slide) => (
              <div key={slide.id} className="outline-none h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[300px] md:h-full object-cover rounded-lg max-h-[750px]"
                  width={600}
                  height={750}
                  priority
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex flex-col justify-between h-full space-y-4 md:space-y-6">
          <div className="flex flex-col">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={cn(
                  "transition-opacity duration-500",
                  currentSlide === index ? "opacity-100" : "opacity-0 hidden"
                )}
              >
                <div className="text-6xl lg:text-8xl font-bold text-blue-100 mb-4">
                  {slide.number}
                </div>
                <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
                <p className="text-gray-600 font-thin">{slide.description}</p>
              </div>
            ))}

            <div className="flex gap-4 mt-4 md:mt-8 lg:mt-12 justify-center md:justify-start">
              <button
                onClick={goToPrevSlide}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNextSlide}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="relative mt-4 md:mt-6">
            <Slider ref={thumbnailSlider} {...thumbnailSettings}>
              {slides.map((slide) => (
                <div key={slide.id} className="outline-none px-1 md:px-2">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-20 md:h-48 lg:h-80 object-cover rounded-lg cursor-pointer"
                    width={400}
                    height={300}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
