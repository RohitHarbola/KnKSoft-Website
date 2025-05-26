"use client";

import { useState, useRef, useMemo, memo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ChevronDownIcon,
  Code2,
  Cloud,
  Building2,
  ShoppingCart,
  GraduationCap,
  Smartphone,
  Shield,
  Settings,
  MessageCircle,
  WrenchIcon,
} from "lucide-react";

const faqs = [
  {
    question: "What custom software development services do you offer?",
    answer:
      "We offer comprehensive software development services including MVF Development, Custom Web Development, Mobile App Development, Bar Code Solutions, and E-Commerce solutions. Our team specializes in building scalable and modern applications tailored to your business needs.",
    icon: <Code2 className="w-6 h-6 text-purple-500" />,
  },
  {
    question: "What cloud services do you provide?",
    answer:
      "Our cloud services include AWS Development, Cloud Architecture, DevOps Services, and Cloud Security solutions. We help businesses design scalable infrastructure, implement CI/CD pipelines, and ensure robust security measures.",
    icon: <Cloud className="w-6 h-6 text-green-500" />,
  },
  {
    question: "Can you help with business management solutions?",
    answer:
      "Yes, we offer comprehensive business solutions including CRM (Customer Relationship Management), Assets & Vendor Management, and Expense Management systems. These solutions help streamline your business operations and improve efficiency.",
    icon: <Building2 className="w-6 h-6 text-purple-500" />,
  },
  {
    question: "What marketplace solutions do you specialize in?",
    answer:
      "We develop various marketplace solutions including Beauty & Salon apps, Home Services platforms, Taxi Apps, Food Delivery systems, and On-Demand service applications. Each solution is customized to meet specific industry requirements.",
    icon: <ShoppingCart className="w-6 h-6 text-green-500" />,
  },
  {
    question: "Do you provide e-learning solutions?",
    answer:
      "Yes, we offer Learning Management System (LMS) development services. Our LMS solutions are designed to facilitate effective online learning and training management for educational institutions and corporate training programs.",
    icon: <GraduationCap className="w-6 h-6 text-purple-500" />,
  },
  {
    question: "What types of mobile applications can you develop?",
    answer:
      "We develop both native and cross-platform mobile applications for iOS and Android. Our expertise covers various domains including on-demand services, delivery apps, marketplace platforms, and business management applications.",
    icon: <Smartphone className="w-6 h-6 text-green-500" />,
  },
  {
    question: "How do you handle project security and data protection?",
    answer:
      "We implement comprehensive security measures including advanced cloud security solutions, secure coding practices, and regular security audits. Our team ensures compliance with industry standards and data protection regulations.",
    icon: <Shield className="w-6 h-6 text-purple-500" />,
  },
  {
    question: "What is your development process?",
    answer:
      "Our development process follows industry best practices with clear phases including requirement analysis, design, development, testing, and deployment. We use agile methodologies to ensure efficient delivery and regular client communication.",
    icon: <Settings className="w-6 h-6 text-green-500" />,
  },
  {
    question: "Do you provide post-development support?",
    answer:
      "Yes, we offer comprehensive post-development support and maintenance services. This includes bug fixes, updates, performance optimization, and ongoing technical support to ensure your solutions run smoothly.",
    icon: <WrenchIcon className="w-6 h-6 text-purple-500" />,
  },
  {
    question: "How can I get started with your services?",
    answer:
      "You can get started by contacting us through our website or scheduling a consultation. We'll discuss your requirements, provide a detailed proposal, and create a customized solution plan for your business needs.",
    icon: <MessageCircle className="w-6 h-6 text-green-500" />,
  },
];

interface Faq {
  question: string;
  answer: string;
  icon: JSX.Element;
}

interface FaqProps {
  faq: Faq;
  index: number;
  isActive: boolean;
  setActiveIndex: (index: number | null) => void;
}

const FAQItem = memo(({ faq, index, isActive, setActiveIndex }: FaqProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white overflow-hidden shadow-sm rounded-sm sm:rounded-lg mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        ease: "easeOut",
      }}
    >
      <motion.button
        className="w-full px-4 py-5 sm:p-6 text-left focus:outline-none"
        onClick={() => setActiveIndex(isActive ? null : index)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {faq.icon}
            <span
              className={`ml-3 text-sm lg:text-base xl:text-lg font-medium transition-colors duration-300 ${
                isActive ? "text-purple-700" : "text-foreground"
              }`}
            >
              {faq.question}
            </span>
          </div>
          <ChevronDownIcon
            className={`w-5 h-5 text-purple-500 transition-transform duration-300 ${
              isActive ? "transform rotate-180" : ""
            }`}
          />
        </div>
      </motion.button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="px-4 pb-5 sm:px-6 sm:pb-6"
          >
            <motion.p
              className="text-gray-700"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {faq.answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
FAQItem.displayName = "FAQItem";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(() => null);

  const firstHalf = useMemo(
    () => faqs.slice(0, Math.ceil(faqs.length / 2)),
    []
  );

  const secondHalf = useMemo(() => faqs.slice(Math.ceil(faqs.length / 2)), []);

  return (
    <div className="bg-primary/5 py-12 px-4 sm:px-6 lg:px-8 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
          Frequently Asked&nbsp;
          <span className="text-primary mt-2">Questions</span>
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
          We are a company with a DNA of entrepreneurship, and hence, we value
          the time and money invested by our clients.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {firstHalf.map((faq, index) => (
              <FAQItem
                key={`faq-${index}`}
                faq={faq}
                index={index}
                isActive={activeIndex === index}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
          <div className="space-y-4">
            {secondHalf.map((faq, index) => (
              <FAQItem
                key={`faq-${index + firstHalf.length}`}
                faq={faq}
                index={index + firstHalf.length}
                isActive={activeIndex === index + firstHalf.length}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
