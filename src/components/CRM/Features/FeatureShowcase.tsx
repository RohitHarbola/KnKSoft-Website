"use client";

import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Users,
  BarChart2,
  MessageSquare,
  Shield,
  Zap,
  Globe,
} from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Users,
    title: "AI-Powered Customer Insights",
    description:
      "Leverage machine learning algorithms to gain deep insights into customer behavior and preferences.",
    color: "bg-blue-500",
  },
  {
    icon: BarChart2,
    title: "Predictive Analytics",
    description:
      "Forecast sales trends and customer churn with our advanced predictive modeling.",
    color: "bg-green-500",
  },
  {
    icon: MessageSquare,
    title: "Omnichannel Communication",
    description:
      "Seamlessly integrate all communication channels for a unified customer experience.",
    color: "bg-purple-500",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Protect your data with state-of-the-art encryption and compliance measures.",
    color: "bg-red-500",
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description:
      "Streamline your processes with intelligent automation and custom triggers.",
    color: "bg-yellow-500",
  },
  {
    icon: Globe,
    title: "Global Scalability",
    description:
      "Easily scale your CRM solution across multiple regions and languages.",
    color: "bg-indigo-500",
  },
];

export default function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            Advanced CRM Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover powerful tools designed to transform your customer
            relationships
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                  activeFeature === index
                    ? `${feature.color} border-transparent text-white shadow-lg shadow-${feature.color}/20`
                    : "bg-white border-gray-100 hover:border-gray-200"
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ scale: 1.02, translateX: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  <feature.icon
                    className={`h-6 w-6 sm:h-8 sm:w-8 ${
                      activeFeature === index ? "text-white" : feature.color
                    }`}
                  />
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {feature.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl border border-gray-100 lg:sticky lg:top-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div
                  className={`${features[activeFeature].color} w-16 h-16 rounded-2xl flex items-center justify-center transform rotate-3 transition-transform duration-300 hover:rotate-6`}
                >
                  {(() => {
                    const Icon = features[activeFeature].icon;
                    return <Icon className="h-8 w-8 text-white" />;
                  })()}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  {features[activeFeature].title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {features[activeFeature].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
