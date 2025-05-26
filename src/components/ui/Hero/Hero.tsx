"use client";

import { motion } from "framer-motion";
import { Button } from "../Button/Button";
import { FlipWords } from "../flip-words";
import { AnimatedTooltip } from "../animated-tooltip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Icons from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface HeroProps {
  badge?: string;
  title: string;
  description: string;
  flipWords: string[];
  imageSlides: string[];
  teamMembers?: Array<{
    id: number;
    name: string;
    designation: string;
    image: string;
  }>;
  buttonText?: string;
}

export default function Hero({
  badge = "Trusted by Global Enterprise Leaders",
  title,
  description,
  flipWords,
  imageSlides,
  teamMembers,
  buttonText = "Talk to an Expert",
}: HeroProps) {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const flipWordsRef = useRef<{ startAnimation: () => void }>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  //Scroll to Contact Section
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("get-in-touch");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleSlideChange = (_: number, next: number) => {
    setCurrentSlide(next);
    setIsAnimating(true);

    setTimeout(() => {
      if (flipWordsRef.current) {
        flipWordsRef.current.startAnimation();
      }
    }, 100);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: handleSlideChange,
    fade: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <section className="relative overflow-hidden bg-primary/5">
      <div className="container relative mx-auto px-4 py-20 sm:py-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5"
              >
                <span className="text-sm font-medium text-primary">
                  {badge}
                </span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight xl:text-[2.5rem]">
                {title}
                <span className="inline-block">
                  <FlipWords
                    words={flipWords}
                    ref={flipWordsRef}
                    duration={4000}
                    className="text-primary"
                    isAnimating={isAnimating}
                    onAnimationComplete={() => setIsAnimating(false)}
                  />
                </span>
              </h1>

              <p className="max-w-2xl text-base font-thin xl:text-lg text-foreground">
                {description}
              </p>
            </div>

            <div>
              <Button
                size="lg"
                variant="primary"
                rightIcon={<Icons.ArrowRight />}
                onClick={handleScrollToContact}
              >
                {buttonText}
              </Button>
            </div>

            {teamMembers && (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <AnimatedTooltip items={teamMembers} />
                  <div className="text-xs sm:text-sm text-foreground px-2">
                    Meet our leadership team with
                    <span className="font-semibold text-foreground">
                      12+ years
                    </span>
                    of combined experience
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="w-full relative flex justify-center items-center mt-8 lg:mt-0 mx-auto max-w-[320px] sm:max-w-[500px] lg:max-w-[600px] xl:max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full max-w-2xl relative px-4 sm:px-6 lg:px-0">
              <Slider
                ref={sliderRef}
                {...sliderSettings}
                className="overflow-hidden"
              >
                {imageSlides.map((src, index) => (
                  <div key={index} className="relative p-2">
                    <Image
                      src={src}
                      alt={`Slide ${index + 1}`}
                      width={500}
                      height={300}
                      className="w-full h-full transform transition-transform duration-500 max-h-[450px] object-contain"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </Slider>
              <div className="mt-4 sm:mt-6 flex justify-center items-center gap-1 sm:gap-2">
                {imageSlides.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full transition-all duration-300",
                      currentSlide === index
                        ? "bg-primary w-4 sm:w-6"
                        : "bg-primary/20"
                    )}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
