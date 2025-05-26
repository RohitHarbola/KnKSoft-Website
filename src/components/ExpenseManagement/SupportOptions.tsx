"use client";

import { memo, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  FileText,
  Video,
  Users,
  LucideIcon,
} from "lucide-react";

interface SupportOption {
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  iconColor: string;
}

const supportOptions: SupportOption[] = [
  {
    name: "24/7 Phone Support",
    description:
      "Get immediate assistance from our expert support team any time, day or night.",
    icon: Phone,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    name: "Email Support",
    description:
      "Send us an email for non-urgent inquiries or detailed questions.",
    icon: Mail,
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    name: "Live Chat",
    description:
      "Chat with our support team in real-time for quick answers to your questions.",
    icon: MessageCircle,
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    name: "Knowledge Base",
    description:
      "Access our comprehensive library of guides, tutorials, and FAQs.",
    icon: FileText,
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    name: "Video Tutorials",
    description:
      "Watch step-by-step video guides to learn how to use our platform effectively.",
    icon: Video,
    color: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    name: "Community Forum",
    description:
      "Connect with other users, share tips, and get answers from the community.",
    icon: Users,
    color: "bg-teal-50",
    iconColor: "text-teal-600",
  },
];

interface SupportCardProps {
  option: SupportOption;
  index: number;
}

const SupportCard = memo(function SupportCard({
  option,
  index,
}: SupportCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={`flex flex-col rounded-2xl p-6 ${option.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
    >
      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
        <div className={`p-2 rounded-full ${option.color}`}>
          <option.icon
            className={`h-6 w-6 ${option.iconColor}`}
            aria-hidden="true"
          />
        </div>
        <span className="text-lg">{option.name}</span>
      </dt>
      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
        <p className="flex-auto">{option.description}</p>
        <motion.div whileHover={{ x: 5 }} className="mt-6">
          <a
            href="#"
            className={`inline-flex items-center text-sm font-semibold ${option.iconColor} hover:underline`}
          >
            Learn more
            <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </dd>
    </motion.div>
  );
});

export default function SupportOptions() {
  const memoizedOptions = useMemo(() => supportOptions, []);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatePresence>
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Comprehensive Support
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We&apos;re here to help you every step of the way. Choose the
              support option that works best for you.
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mt-12 sm:mt-16 lg:mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {memoizedOptions.map((option) => (
                <SupportCard
                  key={option.name}
                  option={option}
                  index={memoizedOptions.indexOf(option)}
                />
              ))}
            </dl>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
