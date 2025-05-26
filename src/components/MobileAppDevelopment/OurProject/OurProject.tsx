"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { slides } from "./data";
import { Button } from "@/components/ui/Button/Button";
import * as Icons from "lucide-react";
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-4 lg:right-2 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-lg transition-all hover:bg-gray-100 md:right-8"
  >
    <ArrowRight className="h-6 w-6" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-4 lg:left-2 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-lg transition-all hover:bg-gray-100 md:left-8"
  >
    <ArrowLeft className="h-6 w-6" />
  </button>
);

export default function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className="relative overflow-hidden py-10 lg:py-14">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-2 md:mb-8 lg:mb-12"
      >
        <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
          Featured&nbsp;
          <span className="text-primary mt-2">Projects</span>
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
          Using the latest technology and industry expertise, we built top-end
          Android and iOS-based applications that add value to the business and
          user experience.
        </p>
      </motion.div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center px-8 py-12 text-white md:px-16"
                style={{ backgroundColor: slide.leftBgColor }}
              >
                <span className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-300">
                  {slide.category}
                </span>

                <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  {slide.title}
                </h2>
                <p className="mb-8 text-lg text-gray-300 font-thin">
                  {slide.description}
                </p>

                {slide.stats && (
                  <div className="mb-8 grid grid-cols-[25%_70%] gap-4">
                    {slide.stats.downloads && (
                      <div>
                        <h3 className="mb-1 text-sm  font-thin uppercase">
                          Downloads
                        </h3>
                        <p className="text-xl font-bold">
                          {slide.stats.downloads}
                        </p>
                      </div>
                    )}
                    {slide.stats.country && (
                      <div>
                        <h3 className="mb-1 text-sm  font-thin uppercase">
                          Country
                        </h3>
                        <p className="text-xl font-bold">
                          {slide.stats.country}
                        </p>
                      </div>
                    )}
                    {slide.stats.platforms && (
                      <div>
                        <h3 className="mb-1 text-sm  font-thin uppercase">
                          Platforms
                        </h3>
                        <p className="text-xl font-bold">
                          {slide.stats.platforms}
                        </p>
                      </div>
                    )}
                    {slide.stats.technology && (
                      <div>
                        <h3 className="mb-1 text-sm font-thin uppercase">
                          Technology
                        </h3>
                        <p className="text-xl font-bold">
                          {slide.stats.technology}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {slide.appStoreLink && (
                  <div className="flex items-center gap-4">
                    {slide.playStoreLink && (
                      <Link
                        href={slide.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-105"
                      >
                        <Image
                          src="/images/play-store-button.png"
                          alt="Get it on Google Play"
                          width={80}
                          height={48}
                          className="h-12 w-auto"
                        />
                      </Link>
                    )}
                    <Link
                      href={slide.appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-105"
                    >
                      <Image
                        src="/images/app-store-button.png"
                        alt="Download on App Store"
                        width={80}
                        height={48}
                        className="h-12 w-auto"
                      />
                    </Link>
                  </div>
                )}
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full mt-8 hover:scale-105 transition-transform duration-200 max-w-[250px] border-white"
                  rightIcon={<Icons.ArrowRight />}
                >
                  View Case Study
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative flex items-center justify-center p-8 md:p-16"
                style={{ backgroundColor: slide.rightBgColor }}
              >
                <div className="relative h-[600px] w-full overflow-hidden md:h-[80vh]">
                  <Image
                    src={slide.image}
                    alt={`${slide.title} Screenshot`}
                    fill
                    className="object-contain"
                    loading="lazy"
                    quality={90}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
