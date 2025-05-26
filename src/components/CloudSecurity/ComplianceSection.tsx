"use client";

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const complianceFrameworks = [
  {
    name: "ISO 27001",
    description: "Information security management system standard",
    features: ["Risk Management", "Security Controls", "Asset Management"]
  },
  {
    name: "GDPR",
    description: "European data protection and privacy regulation",
    features: ["Data Protection", "Privacy Rights", "Breach Notification"]
  },
  {
    name: "SOC 2",
    description: "Service organization control framework",
    features: ["Security", "Availability", "Confidentiality"]
  },
  {
    name: "HIPAA",
    description: "Healthcare data protection standard",
    features: ["PHI Protection", "Access Controls", "Audit Trails"]
  }
];

export default function ComplianceSection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Compliance &&nbsp;
            <span className="text-primary mt-2">Certifications</span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            Meet regulatory requirements with our comprehensive compliance frameworks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {complianceFrameworks.map((framework, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                {framework.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {framework.description}
              </p>
              <ul className="space-y-3">
                {framework.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}