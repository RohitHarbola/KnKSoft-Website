"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Camera, Upload, CheckCircle, BarChart } from "lucide-react";

const steps = [
  {
    name: "Capture Expenses",
    description:
      "Snap photos of receipts or import expenses directly from your bank.",
    icon: Camera,
    color: "bg-gradient-to-r from-blue-600 to-blue-400",
  },
  {
    name: "Submit for Approval",
    description:
      "Easily submit expense reports for manager approval with a single click.",
    icon: Upload,
    color: "bg-gradient-to-r from-indigo-600 to-indigo-400",
  },
  {
    name: "Quick Approval Process",
    description:
      "Managers can quickly review and approve expenses from anywhere.",
    icon: CheckCircle,
    color: "bg-gradient-to-r from-purple-600 to-purple-400",
  },
  {
    name: "Analyze and Report",
    description:
      "Generate detailed reports and gain insights into spending patterns.",
    icon: BarChart,
    color: "bg-gradient-to-r from-violet-600 to-violet-400",
  },
];

export default function HowItWorks() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-y-0 w-full h-full bg-grid-pattern opacity-5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            Simplified Process
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            How Our Expense Management Works
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Our intuitive process makes expense management a breeze, from
            capturing receipts to generating reports.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-16 sm:mt-20 lg:mt-24"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex flex-col items-center">
                    <div
                      className={`${step.color} rounded-full p-3 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-gray-900">
                      {step.name}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-gray-600 text-center">
                      {step.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
