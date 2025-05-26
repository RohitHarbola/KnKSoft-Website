"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
  FaUserFriends,
  FaCertificate,
  FaRobot,
  FaChartLine,
  FaShieldAlt,
  FaMobile,
} from "react-icons/fa";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef } from "react";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: (
      <FaUserFriends className="text-4xl group-hover:scale-110 transition-transform" />
    ),
    title: "Enterprise Collaboration",
    description:
      "Foster team collaboration with real-time interaction tools and workspace integration.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: (
      <FaCertificate className="text-4xl group-hover:scale-110 transition-transform" />
    ),
    title: "Industry Certifications",
    description:
      "Accredited certifications aligned with global industry standards.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: (
      <FaRobot className="text-4xl group-hover:scale-110 transition-transform" />
    ),
    title: "AI-Powered Learning",
    description:
      "Personalized learning paths adapted through advanced AI algorithms.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: (
      <FaChartLine className="text-4xl group-hover:scale-110 transition-transform" />
    ),
    title: "Analytics Dashboard",
    description:
      "Comprehensive insights into learning progress and ROI metrics.",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: (
      <FaShieldAlt className="text-4xl group-hover:scale-110 transition-transform" />
    ),
    title: "Enterprise Security",
    description:
      "Bank-grade security with SSO integration and data encryption.",
    color: "bg-red-500/10 text-red-600",
  },
  {
    icon: (
      <FaMobile className="text-4xl group-hover:scale-110 transition-transform" />
    ),
    title: "Mobile Learning",
    description:
      "Seamless cross-platform experience with offline capabilities.",
    color: "bg-teal-500/10 text-teal-600",
  },
];

interface FeatureCardProps {
  feature: Feature;
  index: number;
  isInView: boolean;
}

const FeatureCard = memo(({ feature, index, isInView }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative overflow-hidden"
  >
    <div
      className={`h-full p-8 rounded-xl backdrop-blur-sm border border-gray-100 
      hover:border-gray-200 transition-all duration-300 hover:shadow-lg 
      ${feature.color} bg-opacity-5 hover:bg-opacity-10`}
    >
      <div
        className="absolute top-0 right-0 w-20 h-20 -mr-10 -mt-10 
        bg-gradient-to-br from-white/5 to-white/30 rounded-full blur-2xl"
      />

      <div className={`${feature.color} p-3 rounded-lg inline-block mb-4`}>
        {feature.icon}
      </div>

      <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>

      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </div>
  </motion.div>
));

FeatureCard.displayName = "FeatureCard";

export default function Features() {
  const ref = useRef(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 
            bg-clip-text text-transparent mb-4"
          >
            Enterprise-Grade LMS Features
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Empower your organization with cutting-edge learning technology
            designed for the modern workforce
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
