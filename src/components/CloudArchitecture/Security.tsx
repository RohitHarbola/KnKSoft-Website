"use client";

import { motion } from 'framer-motion';
import { Shield, Lock, Key, AlertTriangle } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: "Advanced Threat Protection",
    description: "Real-time monitoring and protection against cyber threats",
  },
  {
    icon: Lock,
    title: "Data Encryption",
    description: "End-to-end encryption for data at rest and in transit",
  },
  {
    icon: Key,
    title: "Access Control",
    description: "Role-based access control and identity management",
  },
  {
    icon: AlertTriangle,
    title: "Compliance",
    description: "Meet industry standards and regulatory requirements",
  },
];

export default function SecuritySection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Enterprise-Grade Security
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Protect your cloud infrastructure with our comprehensive security solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-8 bg-white rounded-2xl transform transition-transform group-hover:-translate-y-2 group-hover:translate-x-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold mb-2 text-gray-900">
                24/7 Monitoring
              </h4>
              <p className="text-gray-600">
                Continuous security monitoring and threat detection
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold mb-2 text-gray-900">
                99.99% Uptime
              </h4>
              <p className="text-gray-600">
                Guaranteed service availability
              </p>
            </div>
            <div className="text-center md:text-right">
              <h4 className="text-2xl font-bold mb-2 text-gray-900">
                ISO 27001
              </h4>
              <p className="text-gray-600">
                Certified security management
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}