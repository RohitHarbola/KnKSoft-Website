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
      className={`w-full py-12 md:py-24 ${className || ''}`}
      aria-label="Our Services"
    >
      <motion.div
        {...fadeInUp}
        className="mb-8 text-left container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
          Industries Our Web Applications
          <span className="text-primary block mt-2">
            Development Company Serve
          </span>
        </h2>
        <p className="mt-2 max-w-2xl text-base font-thin lg:text-lg text-foreground">
          To transform digital innovation and enhance business operations, 
          our web application development services are designed to elevate 
          your online presence and deliver measurable results.
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