"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef } from "react";

const faqs = [
  {
    question: "What is a Learning Management System?",
    answer:
      "A Learning Management System (LMS) is a software application for the administration, documentation, tracking, reporting, and delivery of educational courses, training programs, or learning and development programs.",
  },
  {
    question: "How can I access the courses?",
    answer:
      "Once you sign up and choose a plan, you can access all courses through our web platform or mobile app. You can learn anytime, anywhere, on any device.",
  },
  {
    question: "Are the certifications recognized in the industry?",
    answer:
      "Yes, our certifications are recognized and valued by many companies in the IT industry. They demonstrate your proficiency in specific skills and technologies.",
  },
  {
    question: "Can I try the platform before purchasing?",
    answer:
      "We offer a 7-day free trial for all our plans. You can explore the platform, access sample courses, and experience our features before making a decision.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useIntersectionObserver(ref);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-gray-50 rounded-lg focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-blue-500" />
                ) : (
                  <FaChevronDown className="text-blue-500" />
                )}
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-white border border-gray-200 rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
