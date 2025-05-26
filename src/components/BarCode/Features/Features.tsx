"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Real-time Scanning",
    description: "Instant barcode recognition with 99.9% accuracy",
    icon: "⚡",
  },
  {
    title: "Cloud Integration",
    description: "Seamless sync across all your devices",
    icon: "☁️",
  },
  {
    title: "Analytics Dashboard",
    description: "Comprehensive insights and reporting",
    icon: "📊",
  },
  {
    title: "Inventory Management",
    description: "Automated stock tracking and alerts",
    icon: "📦",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">

          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Powerful&nbsp;
            <span className="text-primary mt-2">Features</span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            Everything you need to manage your barcodes efficiently
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}