"use client";

import { motion } from 'framer-motion';
import { Shield, Lock, Server, Cloud, Database, Key } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Advanced Threat Detection",
    description: "Real-time monitoring and AI-powered threat detection to identify and neutralize security risks."
  },
  {
    icon: Lock,
    title: "Zero Trust Security",
    description: "Implement comprehensive identity verification for every person and device."
  },
  {
    icon: Server,
    title: "Infrastructure Protection",
    description: "Secure your entire cloud infrastructure with multi-layered security controls."
  },
  {
    icon: Cloud,
    title: "Cloud Native Security",
    description: "Built-in security features designed specifically for cloud environments."
  },
  {
    icon: Database,
    title: "Data Encryption",
    description: "End-to-end encryption for data at rest and in transit."
  },
  {
    icon: Key,
    title: "Access Management",
    description: "Granular access controls and privilege management."
  }
];

export default function SecurityFeatures() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Comprehensive Security&nbsp;
            <span className="text-primary mt-2">Features</span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            Protect your cloud infrastructure with our enterprise-grade security features
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
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