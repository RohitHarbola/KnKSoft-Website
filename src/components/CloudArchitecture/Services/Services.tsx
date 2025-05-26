"use client";

import { motion } from 'framer-motion';
import { Cloud, Shield, Zap, Scale } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Build and manage scalable cloud infrastructure with our expert solutions.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security with compliance standards for your peace of mind.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimize your cloud resources for maximum performance and efficiency.",
  },
  {
    icon: Scale,
    title: "Scalability",
    description: "Scale your infrastructure seamlessly as your business grows.",
  },
];

export default function ServiceOverview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Comprehensive Cloud Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of cloud services designed to meet your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}