"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, AlertTriangle, CheckCircle } from "lucide-react";
import { useState } from "react";

const securityFeatures = [
  {
    title: "Threat Detection",
    icon: <Eye className="w-6 h-6" />,
    description: "Real-time threat monitoring and detection",
    benefits: [
      "24/7 Security Monitoring",
      "AI-Powered Threat Detection",
      "Instant Alert System",
      "Behavioral Analysis"
    ]
  },
  {
    title: "Data Protection",
    icon: <Lock className="w-6 h-6" />,
    description: "Enterprise-grade data security solutions",
    benefits: [
      "End-to-End Encryption",
      "Data Loss Prevention",
      "Access Control",
      "Compliance Management"
    ]
  },
  {
    title: "Incident Response",
    icon: <AlertTriangle className="w-6 h-6" />,
    description: "Rapid incident response and recovery",
    benefits: [
      "Automated Response",
      "Incident Investigation",
      "Recovery Protocols",
      "Post-Incident Analysis"
    ]
  }
];

const complianceStandards = [
  { name: "ISO 27001", status: "Certified" },
  { name: "SOC 2 Type II", status: "Compliant" },
  { name: "GDPR", status: "Compliant" },
  { name: "HIPAA", status: "Certified" },
  { name: "PCI DSS", status: "Compliant" },
  { name: "NIST", status: "Aligned" }
];

export function Security() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Enterprise&nbsp;
            <span className="text-primary mt-2">Security</span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            Comprehensive security solutions to protect your infrastructure and data
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`mb-6 last:mb-0 cursor-pointer ${activeFeature === index ? "opacity-100" : "opacity-60"
                    }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center gap-4 mb-4 shadow-md px-3 py-2 rounded-lg">
                    <div className="p-3 bg-blue-50 rounded-lg text-blue-500">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                  {activeFeature === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="grid grid-cols-2 gap-4 pl-16"
                    >
                      {feature.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white h-full">
              <h3 className="text-2xl font-semibold mb-8">
                Compliance & Certifications
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {complianceStandards.map((standard, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/10 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{standard.name}</span>
                      {standard.status === "Certified" ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <Shield className="w-5 h-5 text-blue-300" />
                      )}
                    </div>
                    <span className="text-sm text-blue-200">
                      {standard.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                99.99%
              </div>
              <p className="text-gray-600">Security SLA</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                &lt;15min
              </div>
              <p className="text-gray-600">Incident Response</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                24/7/365
              </div>
              <p className="text-gray-600">Security Monitoring</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}