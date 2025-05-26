"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "./FeaturesData";
import { ServiceFeatures } from "./ServiceFeatures";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/Button/Button";
import { FeaturesCard } from "./FeaturesCard";

export default function CompanyServe() {
  const [activeService, setActiveService] = useState(servicesData[0]);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const handleServiceClick = useCallback(
    (service: (typeof servicesData)[0]) => {
      if (!isDesktop) {
        setActiveService(service);
      }
    },
    [isDesktop]
  );

  const handleServiceHover = useCallback(
    (service: (typeof servicesData)[0]) => {
      if (isDesktop) {
        setActiveService(service);
      }
    },
    [isDesktop]
  );

  return (
    <section className="container mx-auto px-4 py-14 relative pb-56">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
          Industries Our Web Applications
          <span className="text-primary block mt-2">
            Development Company Serve
          </span>
        </h2>
        <p className="mt-2 max-w-2xl mx-auto text-base font-thin lg:text-lg text-foreground">
          To transform digital innovation and enhance business operations, our web application development services are designed to elevate your online presence and deliver measurable results.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          {servicesData.map((service) => (
            <FeaturesCard
              key={service.id}
              service={service}
              isActive={activeService.id === service.id}
              onClick={() => handleServiceClick(service)}
              onHover={() => handleServiceHover(service)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-2xl p-8"
          style={{
            backgroundImage: 'url("/images/services-right-bg.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <AnimatePresence mode="wait">
            <ServiceFeatures key={activeService.id} service={activeService} />
          </AnimatePresence>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 container absolute -bottom-50"
      >
        <div className="relative rounded-2xl overflow-hidden">
          <div
            className="relative px-6 py-6 lg:py-12 lg:px-12"
            style={{
              backgroundImage: 'url("/images/cta-bg.webp")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="max-w-2xl relative z-10 flex flex-col items-center sm:items-start">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-primary">Let&apos;s Build</span> the
                Future of
                <br />
                Technology Together
              </h3>
              <p className="text-base text-center sm:text-left md:text-lg text-gray-700 mb-8">
                Transform your business with our custom web development solutions.
                <br className="hidden sm:block" />
                Get a free consultation and technical proposal today.
              </p>
              <Button
                variant="outline"
                size="lg"
                rightIcon={
                  <Icons.ArrowRight />
                }
              >
                Talk to an Expert
              </Button>
            </div>

            <div className="hidden lg:block absolute top-0 lg:top-5 right-0 h-full">
              <Image
                src="/images/cta-arrow.svg"
                alt="CTA Arrow"
                width={120}
                height={80}
                className="absolute left-0 top-24 z-10"
              />

              <Image
                src="/images/home_cta.webp"
                alt="Professional consultant"
                width={500}
                height={500}
                className="object-contain h-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
