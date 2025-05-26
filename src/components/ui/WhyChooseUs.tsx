"use client";

import { motion } from "framer-motion";
import { WhyChooseUsData } from "@/types/why-choose";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface WhyChooseUsProps {
  data: WhyChooseUsData;
}

export default function WhyChooseUs({ data }: WhyChooseUsProps) {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto mb-2 md:mb-8 lg:mb-12"
          >
            <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
              Why Choose&nbsp;
              <span className="text-primary mt-2">Us</span>
            </h2>
            <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
              {data.subtitle}
            </p>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-xl overflow-hidden"
          >
            <Image
              src="/mvp/mvp_whychs.webp"
              alt="Why Choose Us"
              fill
              className="object-contain object-center transform hover:scale-90 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              priority
              quality={90}
            />
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            {data.features.map((feature, index) => (
              <motion.div
                key={feature.id}
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true, margin: "-50px" }}
                className={cn(
                  "flex gap-4 p-2 sm:p-4 rounded-lg bg-white shadow-sm border",
                  "hover:bg-primary hover:text-white transition-all duration-300",
                  "transform hover:-translate-y-1",
                  "group"
                )}
              >
                <div className="flex-shrink-0 mt-1">
                  <FaCheckCircle className="w-6 h-6 lg:w-7 lg:h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base font-thin">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
