"use client";
import React, { memo } from "react";
import { Carousel, Card, type Card as CardType } from "@/components/ui/apple-cards-carousel";
import { motion } from "framer-motion";
import { servicesData } from "./ServicesData";

interface ServicesProps {
  className?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const Services = memo(function Services({ className }: ServicesProps) {
  const cards = React.useMemo(() => 
    servicesData.map((card: CardType, index: number) => (
      <Card
        key={`service-card-${card.category}`}
        card={card}
        index={index}
        layout
      />
    )),
    []
  );

  return (
    <section 
      className={`w-full py-12 md:py-20 ${className || ''}`}
      aria-label="Our Services"
    >
      <motion.div
        {...fadeInUp}
        className="mb-8 text-left container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
          Industries Our Mobile App
          <span className="text-primary block mt-2">
            Development Company Serves
          </span>
        </h2>
        <p className="mt-2 max-w-2xl text-base font-thin lg:text-lg text-foreground">
          Transform your business with our innovative mobile app solutions. We deliver 
          cutting-edge mobile applications that help businesses reach their target audience 
          and achieve their digital transformation goals.
        </p>
      </motion.div>
      <Carousel 
        items={cards} 
        ariaLabel="Services carousel"
      />
    </section>
  );
});

export default Services;