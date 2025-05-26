"use client";

import { motion } from "framer-motion";
import { Scan, ArrowRight, Database, ChartBar } from "lucide-react";

const steps = [
  {
    icon: Scan,
    title: "Scan Products",
    description: "Use our advanced scanning technology to capture barcodes instantly",
  },
  {
    icon: Database,
    title: "Process Data",
    description: "Automatically process and validate scanned information",
  },
  {
    icon: ChartBar,
    title: "Generate Insights",
    description: "Get real-time analytics and actionable insights",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            How It Works&nbsp;
            <span className="text-primary mt-2">in 3 steps</span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            Simple yet powerful workflow to streamline your inventory management
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 dark:bg-blue-800 -translate-y-1/2 hidden md:block" />
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg relative z-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="absolute top-1/2 -right-6 w-6 h-6 text-blue-600 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}