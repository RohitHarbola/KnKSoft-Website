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

const CustomerApp = () => {
  // Memoize features array for Driver App
  const driverFeatures: Feature[] = useMemo(
    () => [
      {
        icon: <Phone className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Easy Call",
        description:
          "Drivers can contact their passengers for delivering an easy and hassle-free service.",
      },
      {
        icon: <Map className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Route Selection",
        description:
          "An Uber-like ridesharing app allows navigation through street view mode & route optimization.",
      },
      {
        icon: <Flag className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Begin/ End ride",
        description:
          "Destinations can be easily tracked with the help of maps to locate pickup and drop locations.",
      },
      {
        icon: <HelpCircle className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Help Support",
        description:
          "An Uber clone app offers you alerts, route information, payment flexibility, etc.",
      },
      {
        icon: <BarChart className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Earning Reports",
        description: "The app generates reports to track your earnings.",
      },
      {
        icon: <MessageCircle className="w-6 h-6 text-[#ff4d4d]" />,
        title: "In-App Chat",
        description:
          "Our Uber taxi clone app gives your customers easy access to communicate with drivers.",
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
      <div className="flex flex-col lg:flex-row items-center container px-4  justify-center gap-8 lg:gap-16">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-6 lg:mb-8 relative after:content-[''] after:absolute after:left-0 after:-bottom-3 after:rounded-full after:h-[4px] after:w-14 after:bg-[#ff4d4d]"
          >
            Driver App
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 mb-8"
          >
            A pre-built Uber taxi clone with unique features will make drivers
            earn better with extra user-friendly services.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {driverFeatures.map((feature, index) => (
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
            src="/taxi-app/taxi-app-taxi-drives.webp"
            alt="Driver App"
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

export default CustomerApp;
