"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
  FaLaptop,
  FaMobileAlt,
  FaChalkboardTeacher,
  FaChartLine,
  FaRobot,
  FaShieldAlt,
  FaHeadset,
  FaCloud,
} from "react-icons/fa";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef } from "react";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
}

const services: Service[] = [
  {
    icon: (
      <FaLaptop className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />
    ),
    title: "Enterprise LMS Solutions",
    description:
      "Customizable learning platform with advanced features for corporate training.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: (
      <FaMobileAlt className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />
    ),
    title: "Cross-Platform Learning",
    description:
      "Seamless learning experience across all devices with offline capabilities.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: (
      <FaRobot className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />
    ),
    title: "AI-Powered Learning",
    description: "Personalized learning paths using advanced AI algorithms.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: (
      <FaChalkboardTeacher className="text-5xl group-hover:scale-110 text-white transition-transform duration-300" />
    ),
    title: "Interactive Sessions",
    description:
      "Real-time collaboration tools and virtual classroom solutions.",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: (
      <FaChartLine className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />
    ),
    title: "Advanced Analytics",
    description: "Comprehensive learning analytics and performance tracking.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: (
      <FaShieldAlt className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />
    ),
    title: "Security & Compliance",
    description: "Enterprise-grade security with compliance management.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: (
      <FaHeadset className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />
    ),
    title: "24/7 Support",
    description: "Round-the-clock technical support and training assistance.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: (
      <FaCloud className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />
    ),
    title: "Cloud Infrastructure",
    description: "Scalable cloud-based solution with high availability.",
    color: "from-cyan-500 to-cyan-600",
  },
];

interface ServiceCardProps {
  service: Service;
  index: number;
  isInView: boolean;
}

const ServiceCard = memo(({ service, index, isInView }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
  >
    <div
      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
    />
    <div className="relative z-10">
      <div className={`flex justify-center mb-4`}>
        <div
          className={`p-3 rounded-full bg-gradient-to-r ${service.color} bg-opacity-10`}
        >
          <div className={`text-gradient bg-gradient-to-r ${service.color}`}>
            {service.icon}
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold mt-4 mb-3 text-gray-800 text-center">
        {service.title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-center">
        {service.description}
      </p>
    </div>
  </motion.div>
));

ServiceCard.displayName = "ServiceCard";

export default function Services() {
  const ref = useRef(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Enterprise LMS Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Transforming corporate learning with cutting-edge technology and
            innovative solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
