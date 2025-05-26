"use client";

import { motion } from "framer-motion";
import { Workflow, Bot, Gauge, Zap } from "lucide-react";
import { useState } from "react";

const automationFeatures = [
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Workflow Automation",
    description: "Streamline your development pipeline with automated workflows",
    metrics: { value: "85%", label: "Faster Deployments" }
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI-Powered Operations",
    description: "Intelligent automation with machine learning capabilities",
    metrics: { value: "60%", label: "Reduced Incidents" }
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    title: "Performance Optimization",
    description: "Automated performance testing and optimization",
    metrics: { value: "3x", label: "Faster Response" }
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant Scaling",
    description: "Automated resource scaling based on demand",
    metrics: { value: "99.9%", label: "Uptime" }
  }
];

export function AutomationSection() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Automation
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Transform your operations with cutting-edge automation solutions
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {automationFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 h-full border border-white/20 transition-all duration-300 hover:bg-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg text-blue-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-blue-100 mb-6">{feature.description}</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-blue-300">
                    {feature.metrics.value}
                  </span>
                  <span className="text-blue-200 text-sm">
                    {feature.metrics.label}
                  </span>
                </div>

                {hoveredFeature === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap z-10"
                  >
                    Learn more
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 border-8 border-transparent border-b-blue-600" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">95%</div>
                <p className="text-blue-100">Automation Coverage</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">24/7</div>
                <p className="text-blue-100">Automated Monitoring</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">500+</div>
                <p className="text-blue-100">Automation Workflows</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}