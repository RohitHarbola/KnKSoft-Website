"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";   

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  const scaleFirst = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);
  const scaleSecond = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);
  const scaleThird = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 1]);
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full scrollbar-hide", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-10 py-40 px-10"
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ 
                y: translateFirst,
                scale: scaleFirst,
                opacity 
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              key={"grid-1" + idx}
              className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
            >
              <Image
                src={el}
                className="h-80 w-full object-cover object-center rounded-lg transform hover:scale-105 transition-transform duration-700"
                height="400"
                width="400"
                alt="Event memory"
                priority={idx < 2}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div
              style={{ 
                y: translateSecond,
                scale: scaleSecond,
                opacity 
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              key={"grid-2" + idx}
              className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
            >
              <Image
                src={el}
                className="h-80 w-full object-cover object-center rounded-lg transform hover:scale-105 transition-transform duration-700"
                height="400"
                width="400"
                alt="Event memory"
                priority={idx < 2}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{ 
                y: translateThird,
                scale: scaleThird,
                opacity 
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              key={"grid-3" + idx}
              className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
            >
              <Image
                src={el}
                className="h-80 w-full object-cover object-center rounded-lg transform hover:scale-105 transition-transform duration-700"
                height="400"
                width="400"
                alt="Event memory"
                priority={idx < 2}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
