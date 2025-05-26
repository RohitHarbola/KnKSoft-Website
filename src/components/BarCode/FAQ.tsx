"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How accurate is your barcode scanning technology?",
    answer: "Our barcode scanning technology achieves 99.9% accuracy across all major barcode types and conditions.",
  },
  {
    question: "What types of barcodes do you support?",
    answer: "We support all major barcode formats including 1D (UPC, EAN, Code 128) and 2D (QR, DataMatrix, PDF417).",
  },
  {
    question: "Can I integrate your solution with my existing systems?",
    answer: "Yes, our solution offers API integration capabilities and can be integrated with most ERP and inventory management systems.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer 24/7 technical support, comprehensive documentation, and dedicated account managers for enterprise clients.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
              Questions
            </span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base text-muted-foreground lg:text-lg">
            Find answers to common questions about our barcode solutions
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full text-left p-6 rounded-xl border border-border/50 bg-card hover:bg-accent/50 transition-all duration-300"
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-lg font-medium text-foreground">{faq.question}</h3>
                  <span
                    className={`text-primary transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-muted-foreground text-sm lg:text-base"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}