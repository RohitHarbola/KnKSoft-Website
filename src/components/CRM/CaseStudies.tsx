"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const caseStudies = [
  {
    company: "TechGrow Solutions",
    industry: "SaaS",
    challenge: "Struggling to manage rapidly growing customer base",
    solution: "Implemented our scalable CRM with AI-powered insights",
    results: [
      "50% increase in customer retention",
      "30% boost in sales productivity",
      "2x faster onboarding process",
    ],
    image: "/crm/crm-ss1.jpeg",
  },
  {
    company: "GlobalRetail Inc.",
    industry: "E-commerce",
    challenge: "Difficulty in providing personalized customer experiences",
    solution: "Deployed our omnichannel CRM solution with predictive analytics",
    results: [
      "40% improvement in customer satisfaction",
      "25% increase in average order value",
      "60% reduction in response time",
    ],
    image: "/crm/crm-ss2.jpeg",
  },
  {
    company: "FinServe Group",
    industry: "Financial Services",
    challenge: "Compliance issues and inefficient customer data management",
    solution: "Implemented our secure, compliant CRM with automated workflows",
    results: [
      "100% compliance with industry regulations",
      "45% reduction in manual data entry",
      "35% increase in cross-selling opportunities",
    ],
    image: "/crm/crm-ss3.jpeg",
  },
];

export default function CaseStudies() {
  const [expandedStudy, setExpandedStudy] = useState<number | null>(null);
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Customer Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how leading companies transformed their business with our CRM
              solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div
                  className={`
                    rounded-2xl overflow-hidden transition-all duration-500
                    ${
                      expandedStudy === index
                        ? "scale-105 shadow-2xl z-10"
                        : "hover:scale-102 shadow-lg"
                    }
                  `}
                >
                  <div className="relative h-48">
                    <Image
                      src={study.image}
                      alt={study.company}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">
                        {study.company}
                      </h3>
                      <span className="inline-block px-3 py-1 mt-2 rounded-full text-sm bg-red-500 text-white">
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 bg-white">
                    <div className="space-y-4">
                      <p className="text-gray-600 line-clamp-2">
                        {study.challenge}
                      </p>

                      <AnimatePresence>
                        {expandedStudy === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-4"
                          >
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <h4 className="text-sm font-semibold text-blue-700 mb-2">
                                Solution
                              </h4>
                              <p className="text-gray-700 text-sm">
                                {study.solution}
                              </p>
                            </div>

                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold text-gray-900">
                                Key Results
                              </h4>
                              {study.results.map((result, idx) => (
                                <div
                                  key={idx}
                                  className="bg-gray-50 p-3 rounded-lg"
                                >
                                  <p className="text-gray-700 text-sm">
                                    {result}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <button
                        onClick={() =>
                          setExpandedStudy(
                            expandedStudy === index ? null : index
                          )
                        }
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                      >
                        {expandedStudy === index ? "Show Less" : "Learn More"}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            expandedStudy === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
