"use client";
import { motion } from "framer-motion";
import CTASection from "./CTASection";
import React, { memo } from "react";

import {
  FaHardHat,
  FaHospital,
  FaRegFileAlt,
  FaMoneyBillWave,
  FaTruck,
  FaShippingFast,
} from "react-icons/fa";

const industries = [
  {
    title: "Construction",
    description:
      "Apptunix's MVP for the construction industry focuses on streamlining project management, improving communication, and boosting efficiency to meet the unique demands of the trade.",
    icon: FaHardHat,
  },
  {
    title: "Healthcare",
    description:
      "Our MVP for healthcare enhances patient care, simplifies administrative tasks, and ensures compliance with industry standards, empowering medical professionals to deliver high-quality services.",
    icon: FaHospital,
  },
  {
    title: "Insurance",
    description:
      "Our MVP for the insurance sector streamlines claims processing, underwriting, and policy management, enabling companies to deliver better service, reduce costs, and remain competitive.",
    icon: FaRegFileAlt,
  },
  {
    title: "FinTech",
    description:
      "Apptunix's MVP for FinTech empowers financial institutions with innovative solutions, from mobile banking apps to trading platforms, to thrive in the digital age.",
    icon: FaMoneyBillWave,
  },
  {
    title: "Logistics and Transportation",
    description:
      "Our MVP for logistics and transportation optimizes supply chain management, fleet operations, and inventory control, helping clients enhance efficiency and reduce operational costs.",
    icon: FaTruck,
  },
  {
    title: "Logistics and Transportation",
    description:
      "Our MVP for logistics and transportation optimizes supply chain management, fleet operations, and inventory control, helping clients enhance efficiency and reduce operational costs.",
    icon: FaShippingFast,
  },
];

const IndustryCard = memo(
  ({ industry, idx }: { industry: (typeof industries)[0]; idx: number }) => (
    <motion.div
      key={idx}
      className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.2 }}
    >
      <div className="text-4xl mb-4 bg-primary/80 w-fit rounded-md p-2">
        <industry.icon className="w-10 h-10 text-white" />
      </div>
      <h3 className="text-xl font-semibold">{industry.title}</h3>
      <p className="mt-2 text-gray-600">{industry.description}</p>
    </motion.div>
  )
);

IndustryCard.displayName = "IndustryCard";

export default function IndustryCards() {
  return (
    <section className="py-16 pb-[280px] relative lg:-mt-40">
      <div className="container mx-auto px-5 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-2 md:mb-8 lg:mb-12"
        >
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Unlocking Industry&nbsp;
            <span className="text-primary mt-2 block">
              Potential with Custom MVPs
            </span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            As an MVP development company, Apptunix has successfully delivered
            MVP solutions across diverse industries, leveraging our deep
            understanding of each sector to provide tailored insights and avoid
            common MVP mistakes for your project.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, idx) => (
            <IndustryCard
              key={`${industry.title}-${idx}`}
              industry={industry}
              idx={idx}
            />
          ))}
        </div>
      </div>
      <div className="absolute -bottom-[150px] left-0 w-full z-20">
        <CTASection />
      </div>
    </section>
  );
}
