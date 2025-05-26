"use client";
import { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  CreditCard,
  Share2,
  Clock,
  MapPin,
  Bell,
} from "lucide-react";
import { type Feature } from "./types";
import FeatureCard from "./FeatureCard";

const AppModels = () => {
  // Memoize features array
  const features: Feature[] = useMemo(
    () => [
      {
        icon: <Calendar className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Seamless Ride Booking",
        description: "Easy booking for the customers with a friendly interface",
      },
      {
        icon: <CreditCard className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Multiple Payments",
        description: "Integrated payment options for easy payments",
      },
      {
        icon: <Share2 className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Sharing Availability",
        description: "Share ride details with the people close to them",
      },
      {
        icon: <Clock className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Schedule Booking",
        description: "Schedule trips in advance as per customer convenience",
      },
      {
        icon: <MapPin className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Live Tracking",
        description: "Select and track drivers who are nearby",
      },
      {
        icon: <Bell className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Push Notifications",
        description:
          "Updates on request status, driver arrival time, driver and car details, and more",
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
    <section className="container px-4 py-6 lg:py-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        {/* Left side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 relative max-w-lg"
        >
          <Image
            src="/taxi-app/taxi-app-taxi-custm.webp"
            alt="Car Wash Booking App"
            width={600}
            height={800}
            className="rounded-lg hover:scale-105 transition-transform duration-300"
            priority
            loading="eager"
          />
        </motion.div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-6 lg:mb-8 relative after:content-[''] after:absolute after:left-0 after:-bottom-3 after:rounded-full after:h-[4px] after:w-14 after:bg-[#ff4d4d]"
          >
            Customer App
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 mb-8"
          >
            Your Uber-like app will be equipped with all the relevant and
            advanced features, which allow your customer to access your app
            seamlessly.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <button
              className="group bg-[#ff4d4d] text-white px-8 py-3 rounded-full hover:bg-[#ff3333] transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              onClick={() => {
                /* Add your click handler */
              }}
            >
              <span>Get Started Today</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppModels;
