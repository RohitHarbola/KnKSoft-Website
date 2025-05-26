"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CreditCard, PieChart, Clock, Shield } from "lucide-react";
import Image from "next/image";

const features = [
  {
    name: "Automated Expense Tracking",
    description:
      "Automatically capture and categorize expenses from credit cards, bank accounts, and receipts in real-time.",
    icon: CreditCard,
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
  },
  {
    name: "Real-time Reporting",
    description:
      "Generate comprehensive reports and gain actionable insights into spending patterns with interactive dashboards.",
    icon: PieChart,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
  },
  {
    name: "Streamlined Approvals",
    description:
      "Simplify expense approval process with smart workflows and instant mobile notifications.",
    icon: Clock,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  },
  {
    name: "Compliance & Security",
    description:
      "Enterprise-grade security with advanced encryption and automated policy compliance checks.",
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
  },
];

export default function KeyFeatures() {
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
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Transform Your Expense Management
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Streamline your financial processes with our comprehensive suite of
            powerful features designed for modern businesses.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div className="relative mb-6 h-48 overflow-hidden rounded-xl">
                <Image
                  src={feature.image}
                  alt={feature.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="flex items-center gap-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <feature.icon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.name}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
