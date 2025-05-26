"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const partners = [
  {
    name: "QuickBooks",
    logo: "https://picsum.photos/200/60", // Using Lorem Picsum as placeholder
    description: "Financial Management Software",
  },
  {
    name: "Xero",
    logo: "https://picsum.photos/200/60",
    description: "Cloud Accounting Platform",
  },
  {
    name: "SAP",
    logo: "https://picsum.photos/200/60",
    description: "Enterprise Resource Planning",
  },
  {
    name: "Oracle",
    logo: "https://picsum.photos/200/60",
    description: "Cloud Infrastructure Solutions",
  },
  {
    name: "Salesforce",
    logo: "https://picsum.photos/200/60",
    description: "CRM Platform",
  },
  {
    name: "Microsoft Dynamics",
    logo: "https://picsum.photos/200/60",
    description: "Business Applications Platform",
  },
];

export default function IntegrationPartners() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 sm:py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600">
              Integration Partners
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Seamless Integrations
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our expense management solution integrates with your favorite
              tools and platforms, ensuring a smooth workflow across your entire
              tech stack.
            </p>
          </motion.div>

          {/* Partners Grid */}
          <motion.div
            variants={containerVariants}
            className="mx-auto mt-8 grid max-w-7xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group relative rounded-xl bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={60}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-sm font-medium text-gray-900">
                    {partner.name}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    {partner.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="mx-auto mt-12 text-center"
          >
            <a
              href="#"
              className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Explore All Integrations
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
