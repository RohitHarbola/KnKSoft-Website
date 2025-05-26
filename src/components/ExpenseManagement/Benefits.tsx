"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, TrendingUp, Users } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const benefits = [
  {
    name: "Save Time",
    description:
      "Automate expense tracking and approvals to save hours of manual work each week.",
    icon: Clock,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    name: "Reduce Costs",
    description:
      "Identify areas of overspending and negotiate better rates with vendors.",
    icon: DollarSign,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    name: "Improve Accuracy",
    description:
      "Eliminate human errors in expense reporting and reimbursement calculations.",
    icon: TrendingUp,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    name: "Enhance Compliance",
    description:
      "Ensure all expenses adhere to company policies and regulatory requirements.",
    icon: Users,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Benefits() {
  const [isMounted, setIsMounted] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-800">
            Maximize Efficiency
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Benefits of Our{" "}
            <span className="text-blue-600">Expense Management</span> Solution
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover how our cutting-edge expense management solution can
            transform your financial processes and drive sustainable business
            growth.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-4 lg:gap-8"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.name}
              variants={itemVariants}
              className={`group relative rounded-2xl ${benefit.bgColor} p-6 transition-all duration-300 hover:shadow-lg`}
            >
              <div className="relative flex items-center gap-x-4">
                <div
                  className={`rounded-lg ${benefit.iconColor} bg-white p-3 shadow-sm`}
                >
                  <benefit.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {benefit.name}
                </h3>
              </div>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {benefit.description}
              </p>
              <div className="mt-4 flex items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-sm font-medium ${benefit.iconColor} hover:underline`}
                >
                  Learn more →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Add this to your global CSS
/*
.bg-grid-pattern {
  background-image: linear-gradient(to right, #f0f0f0 1px, transparent 1px),
    linear-gradient(to bottom, #f0f0f0 1px, transparent 1px);
  background-size: 20px 20px;
}
*/
