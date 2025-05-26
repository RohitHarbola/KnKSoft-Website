"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button/Button";
import { FlipWords } from "@/components/ui/flip-words";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Icons from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
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
          arrows: false, // Hide arrows on mobile
        },
      },
    ],
  };
  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  const teamMembers = [
    {
      id: 1,
      name: "Brijesh Joshi",
      designation: "CEO",
      image: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    },
    {
      id: 2,
      name: "Manoj Kumar",
      designation: "Full Stack Developer",
      image: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
    },
    {
      id: 3,
      name: "Mike Brown",
      designation: "Lead Architect",
      image: "https://api.uifaces.co/our-content/donated/1H_7AxP0.jpg",
    },
  ];

  const flipWords = [
    "Enterprise Solutions",
    "Cloud Architecture",
    "Custom Development",
    "Digital Transformation",
    "DevOps Excellence",
  ];
  const imageSlide = [
    "https://www.valueappz.com/img/handyman/banner-img.webp"
  ];

  return (
    <section className="relative overflow-hidden bg-primary/5">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px]" />
      <div className="absolute h-full w-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

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
                  Trusted by Global Enterprise Leaders
                </span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight lg:text-5xl">
                On-Demand Home Services App Development
                <span className="inline-block">
                  <FlipWords words={flipWords} className="text-primary" />
                </span>
              </h1>

              <p className="max-w-2xl text-base font-thin lg:text-lg text-foreground">
                Comprehensive IT services including custom software development,
                cloud solutions, enterprise systems, and digital transformation.
                From MVF development to full-scale enterprise solutions, we
                deliver excellence.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="primary"
                rightIcon={
                  <Icons.ArrowRight />
                }
              >
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline">
                View Projects
              </Button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <AnimatedTooltip items={teamMembers} />
                <div className="text-xs sm:text-sm text-foreground">
                  Meet our leadership team with
                  <span className="font-semibold text-foreground">
                    20+ years
                  </span>
                  of combined experience
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full relative flex justify-center items-center mt-8 lg:mt-0 max-w-[320px] sm:max-w-[500px] lg:max-w-[600px] xl:max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full max-w-2xl relative px-4 sm:px-6 lg:px-0">
              <Slider
                ref={sliderRef}
                {...sliderSettings}
                className="overflow-hidden "
              >
                {imageSlide.map((src, index) => (
                  <div key={index} className="relative p-2">
                    <Image
                      src={src}
                      alt={`App Screen ${index + 1}`}
                      width={500}
                      height={300}
                      className="w-full h-full transform transition-transform duration-500 max-h-[450px] object-contain"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </Slider>
              <div className="mt-4 sm:mt-6 flex justify-center items-center gap-1 sm:gap-2">
                {imageSlide.map((_, index) => (
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
