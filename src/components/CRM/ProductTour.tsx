"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tourSteps = [
  {
    title: "Dashboard Overview",
    description:
      "Get a bird's-eye view of your entire CRM ecosystem with our intuitive dashboard.",
    image: "/crm/crm-pt1.jpeg",
  },
  {
    title: "Customer Profiles",
    description:
      "Access comprehensive customer profiles with AI-powered insights and interaction history.",
    image: "/crm/crm-pt2.jpeg",
  },
  {
    title: "Sales Pipeline",
    description:
      "Visualize and manage your sales pipeline with our drag-and-drop interface and real-time updates.",
    image: "/crm/crm-pt3.jpeg",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Generate custom reports and gain actionable insights with our advanced analytics tools.",
    image: "/crm/crm-pt4.jpeg",
  },
];

export default function ProductTour() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () =>
    setCurrentStep((prev) => (prev + 1) % tourSteps.length);
  const prevStep = () =>
    setCurrentStep((prev) => (prev - 1 + tourSteps.length) % tourSteps.length);

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Product Tour
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Explore the powerful features of our CRM platform
          </p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9]"
            >
              <Image
                src={tourSteps[currentStep].image}
                alt={tourSteps[currentStep].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="max-w-3xl"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                {tourSteps[currentStep].title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-4 sm:mb-6">
                {tourSteps[currentStep].description}
              </p>
            </motion.div>

            <div className="flex items-center justify-between gap-4">
              <button
                onClick={prevStep}
                className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 group"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:scale-110 transition-transform" />
              </button>

              <div className="flex items-center gap-2">
                {tourSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`h-2 sm:h-2.5 transition-all duration-200 rounded-full
                      ${
                        index === currentStep
                          ? "w-6 sm:w-8 bg-white"
                          : "w-2 sm:w-2.5 bg-white/50 hover:bg-white/70"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextStep}
                className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 group"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
