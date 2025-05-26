"use client";

import { motion } from "framer-motion";

const stats = [
  {
    percentage: 78,
    label: "Quarterly Increase in Total Sales Order",
    color: "emerald",
  },
  {
    percentage: 64,
    label: "Quarterly Rise in No. of Repeat Customers",
    color: "slate",
  },
  {
    percentage: 47,
    label: "Reduction in Online Marketing Expenses",
    color: "slate",
  },
  {
    percentage: 52,
    label: "Quarterly Increase in Overall Revenue",
    color: "emerald",
  },
  {
    percentage: 38,
    label: "Rise in Addition of Multiple Products",
    color: "slate",
  },
  {
    percentage: 21,
    label: "Reduction in Customer Support Queries",
    color: "slate",
  },
];

export default function Statistics() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative inline-flex">
                <svg className="w-32 h-32">
                  <circle
                    className="text-gray-700"
                    strokeWidth="6"
                    stroke="currentColor"
                    fill="transparent"
                    r="58"
                    cx="64"
                    cy="64"
                  />
                  <circle
                    className={`text-${stat.color}-500`}
                    strokeWidth="6"
                    strokeDasharray={360}
                    strokeDashoffset={360 - (360 * stat.percentage) / 100}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="58"
                    cx="64"
                    cy="64"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                  {stat.percentage}%
                </span>
              </div>
              <p className="mt-4 text-sm text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 