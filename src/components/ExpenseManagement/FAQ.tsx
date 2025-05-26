"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does your expense management solution work?",
    answer:
      "Our solution automates the entire expense management process. Users can easily capture receipts, submit expense reports, and managers can quickly approve them. The system then generates detailed reports and analytics for better financial insights.",
  },
  {
    question: "Is your solution suitable for small businesses?",
    answer:
      "We offer flexible plans that cater to businesses of all sizes, from small startups to large enterprises. Our Starter plan is perfect for small teams just getting started with expense management.",
  },
  {
    question:
      "Can your solution integrate with our existing accounting software?",
    answer:
      "Yes, our expense management solution offers integrations with popular accounting software like QuickBooks, Xero, and SAP. We also provide APIs for custom integrations with your existing systems.",
  },
  {
    question: "How secure is your platform?",
    answer:
      "Security is our top priority. We use bank-level encryption to protect your data, implement multi-factor authentication, and regularly undergo third-party security audits to ensure the highest level of data protection.",
  },
  {
    question: "Do you offer mobile apps for expense submission?",
    answer:
      "Yes, we offer mobile apps for both iOS and Android devices. These apps allow users to easily capture receipts, submit expenses, and approve reports on the go.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Find answers to common questions about our expense management
            solution.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-gray-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between py-6 text-left text-gray-900"
              >
                <span className="text-base font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-base text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
