"use client";

import { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const demoSteps = [
  {
    title: "Asset Discovery",
    description:
      "Automatically detect and catalog all IT assets across your network.",
    image:
      "https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&auto=format",
    icon: "📊",
  },
  {
    title: "Vendor Onboarding",
    description:
      "Streamline the process of adding new vendors to your management system.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format",
    icon: "🤝",
  },
  {
    title: "Compliance Monitoring",
    description:
      "Real-time monitoring of asset compliance with company policies and regulations.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format",
    icon: "🔒",
  },
  {
    title: "Reporting & Analytics",
    description:
      "Generate comprehensive reports and gain insights from your asset and vendor data.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format",
    icon: "📈",
  },
];

const DemoStep = memo(
  ({ step, isActive }: { step: (typeof demoSteps)[0]; isActive: boolean }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`relative overflow-hidden rounded-2xl shadow-lg ${
        isActive ? "ring-2 ring-blue-500" : ""
      }`}
    >
      <Image
        src={step.image}
        alt={step.title}
        width={800}
        height={600}
        className="w-full h-[400px] object-cover"
        priority={isActive}
        loading={isActive ? "eager" : "lazy"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 p-6 text-white">
        <div className="text-4xl mb-2">{step.icon}</div>
        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
        <p className="text-sm text-gray-200">{step.description}</p>
      </div>
    </motion.div>
  )
);

DemoStep.displayName = "DemoStep";

const StepButton = memo(
  ({
    step,
    isActive,
    onClick,
  }: {
    step: (typeof demoSteps)[0];
    isActive: boolean;
    onClick: () => void;
  }) => (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full p-4 rounded-xl transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
          : "bg-white hover:bg-gray-50 text-gray-800"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{step.icon}</span>
        <div className="text-left">
          <h4 className="font-semibold">{step.title}</h4>
          <p
            className={`text-sm ${
              isActive ? "text-blue-100" : "text-gray-600"
            }`}
          >
            {step.description}
          </p>
        </div>
      </div>
    </motion.button>
  )
);

StepButton.displayName = "StepButton";

export default function InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepChange = useCallback((index: number) => {
    setCurrentStep(index);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience the Power
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a tour through our comprehensive asset and vendor management
            solution
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <DemoStep
                key={currentStep}
                step={demoSteps[currentStep]}
                isActive={true}
              />
            </AnimatePresence>
          </div>

          <div className="order-1 lg:order-2 flex flex-col gap-4">
            {demoSteps.map((step, index) => (
              <StepButton
                key={index}
                step={step}
                isActive={currentStep === index}
                onClick={() => handleStepChange(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
