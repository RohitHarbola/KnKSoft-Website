"use client";
import { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Map,
  Flag,
  HelpCircle,
  BarChart,
  MessageCircle,
} from "lucide-react";
import { type Feature } from "./types";
import FeatureCard from "./FeatureCard";

const AdminPanel = () => {
  // Memoize features array for Admin Panel
  const adminFeatures: Feature[] = useMemo(
    () => [
      {
        icon: <Phone className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Supervise Drivers",
        description:
          "Assign drivers in and around the passengers' location at the customer’s request.",
      },
      {
        icon: <BarChart className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Advanced Analytics",
        description:
          "Get detailed reports about revenues and cash flows from the app.",
      },
      {
        icon: <Map className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Manage Payments",
        description:
          "Pay or receive payments with integrated payment gateways. Have a full balance check.",
      },
      {
        icon: <Flag className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Manage Promos",
        description:
          "Our taxi app clone can schedule trips in advance as per customer convenience.",
      },
      {
        icon: <MessageCircle className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Real-Time Chat",
        description:
          "Visible chat with the dispatcher. You can take the necessary actions to enhance service.",
      },
      {
        icon: <HelpCircle className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Manage Bookings",
        description:
          "View and manage all the bookings in the panel accordingly via the advanced dispatcher console.",
      },
    ],
    []
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-6 lg:py-10 bg-primary/5">
      <div className="flex flex-col lg:flex-row container px-4  items-center justify-center gap-8 lg:gap-16">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-6 lg:mb-8 relative after:content-[''] after:absolute after:left-0 after:-bottom-3 after:rounded-full after:h-[4px] after:w-14 after:bg-[#ff4d4d]"
          >
            Admin Panel
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 mb-8"
          >
            Our taxi app solution allows administrators to keep a clear view of
            the entire workflow of their app and services.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {adminFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </motion.div>
        </div>
        {/* Right side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 relative max-w-lg"
        >
          <Image
            src="/taxi-app/taxi-app-banner-img.png"
            alt="Admin Panel"
            width={600}
            height={800}
            className="rounded-lg hover:scale-105 transition-transform duration-300"
            priority
            loading="eager"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AdminPanel;
