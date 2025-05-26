"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is Assets & Vendor Management?",
    answer:
      "Assets & Vendor Management is a comprehensive system for tracking, maintaining, and optimizing IT assets while efficiently managing relationships with vendors and suppliers.",
  },
  {
    question: "How can this system benefit my company?",
    answer:
      "Our system can help reduce costs, improve efficiency, enhance security, and provide better insights for decision-making in your IT operations.",
  },
  {
    question: "Is the platform customizable to my specific needs?",
    answer:
      "Yes, our platform is highly customizable and can be tailored to meet the specific requirements of your organization, regardless of size or industry.",
  },
  {
    question: "How secure is the data stored in your system?",
    answer:
      "We employ industry-leading security measures, including encryption, regular audits, and compliance with data protection regulations to ensure the safety of your data.",
  },
  {
    question: "Can I integrate this system with my existing tools?",
    answer:
      "Our platform offers robust API support and pre-built integrations with many popular IT management and business tools.",
  },
];

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <motion.button
                className="w-full text-left p-4 bg-gray-100 rounded-lg font-semibold text-gray-800 hover:bg-gray-200 transition duration-300"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {faq.question}
              </motion.button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-4 rounded-b-lg shadow-inner"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
