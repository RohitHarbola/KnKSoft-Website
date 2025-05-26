"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const caseStudies = [
  {
    title: "Global Tech Corp",
    description:
      "Reduced IT costs by 30% through optimized asset management. Our solution helped streamline operations and improve efficiency across multiple departments.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    category: "Technology",
    results: ["30% cost reduction", "50% faster deployment", "99.9% uptime"],
  },
  {
    title: "Finance Solutions Inc.",
    description:
      "Improved vendor performance by 25% with our advanced analytics tools. Implemented AI-driven insights for better decision making.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    category: "Finance",
    results: ["25% performance boost", "40% better insights", "2x ROI"],
  },
  {
    title: "HealthTech Innovations",
    description:
      "Achieved 100% compliance in asset tracking and reporting while reducing manual work by 75% through automation.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800",
    category: "Healthcare",
    results: ["100% compliance", "75% less manual work", "Zero errors"],
  },
];

export default function CaseStudies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we&apos;ve helped organizations transform their asset
            and vendor management
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority={index < 2}
                  loading={index < 2 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-gray-800">
                    {study.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {study.description}
                </p>
                <div className="space-y-2">
                  {study.results.map((result, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {result}
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                  View Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
