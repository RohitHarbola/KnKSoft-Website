"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const architectureSteps = [
  {
    title: "User Interface Layer",
    description: "Modern web applications and mobile interfaces",
    details: [
      "Progressive Web Apps",
      "Native Mobile Apps",
      "Single Page Applications",
      "Responsive Design",
    ],
  },
  {
    title: "API Gateway Layer",
    description: "Secure and scalable API management",
    details: [
      "Request Routing",
      "Authentication",
      "Rate Limiting",
      "API Versioning",
    ],
  },
  {
    title: "Application Layer",
    description: "Business logic and service orchestration",
    details: [
      "Microservices",
      "Event-Driven Architecture",
      "Service Discovery",
      "Load Balancing",
    ],
  },
  {
    title: "Data Layer",
    description: "Robust data storage and processing",
    details: [
      "Databases",
      "Caching",
      "Data Warehousing",
      "Analytics",
    ],
  },
];

export default function Architecture() {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % architectureSteps.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + architectureSteps.length) % architectureSteps.length);
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-100">
            Cloud Architecture Overview
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Explore our modern cloud architecture designed for scalability and performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square relative">
              <div className="absolute inset-0 flex items-center justify-between lg:hidden px-4 pointer-events-none">
                <button
                  onClick={prevStep}
                  className="p-2 rounded-full bg-blue-900/50 backdrop-blur-sm pointer-events-auto hover:bg-blue-800/50 transition-colors"
                >
                  <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <button
                  onClick={nextStep}
                  className="p-2 rounded-full bg-blue-900/50 backdrop-blur-sm pointer-events-auto hover:bg-blue-800/50 transition-colors"
                >
                  <ChevronRightIcon className="w-6 h-6" />
                </button>
              </div>

              <svg
                viewBox="0 0 200 200"
                className="w-full h-full transform rotate-90 lg:rotate-0"
              >
                {architectureSteps.map((_, index) => {
                  const angle = (index * 360) / architectureSteps.length;
                  const radius = 80;
                  const x = 100 + radius * Math.cos((angle * Math.PI) / 180);
                  const y = 100 + radius * Math.sin((angle * Math.PI) / 180);

                  return (
                    <motion.g 
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <circle
                        cx={x}
                        cy={y}
                        r="8"
                        className={`${
                          activeStep === index
                            ? 'fill-blue-400 filter drop-shadow-lg'
                            : 'fill-blue-800 hover:fill-blue-600'
                        } cursor-pointer transition-all duration-300`}
                        onClick={() => setActiveStep(index)}
                      />
                      <motion.line
                        x1="100"
                        y1="100"
                        x2={x}
                        y2={y}
                        stroke={activeStep === index ? '#60A5FA' : '#1E40AF'}
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.g>
                  );
                })}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="12"
                  className="fill-blue-500"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </svg>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="order-1 lg:order-2 bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 hover:border-blue-500/50 transition-colors"
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-100 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {architectureSteps[activeStep].title}
              </motion.h3>
              <motion.p 
                className="text-blue-100 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {architectureSteps[activeStep].description}
              </motion.p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {architectureSteps[activeStep].details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-2 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 transition-transform" />
                    <span className="text-sm md:text-base">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}