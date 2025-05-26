"use client";

import { motion } from "framer-motion";
import { FaUserPlus, FaBook, FaGraduationCap } from "react-icons/fa";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef } from "react";

const steps = [
  {
    icon: <FaUserPlus className="text-4xl mb-4 text-blue-500" />,
    title: "Sign Up",
    description: "Create your account and set up your profile.",
  },
  {
    icon: <FaBook className="text-4xl mb-4 text-green-500" />,
    title: "Choose Courses",
    description: "Browse our catalog and enroll in desired courses.",
  },
  {
    icon: <FaGraduationCap className="text-4xl mb-4 text-yellow-500" />,
    title: "Learn and Grow",
    description:
      "Complete courses, earn certificates, and advance your skills.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useIntersectionObserver(ref);

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center max-w-xs"
            >
              <div className="bg-white rounded-full p-6 shadow-lg mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
