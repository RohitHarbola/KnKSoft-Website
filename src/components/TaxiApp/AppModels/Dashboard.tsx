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

const Dashboard = () => {
  // Memoize features array for Dispatcher Dashboard
  const dispatcherFeatures: Feature[] = useMemo(
    () => [
      {
        icon: <Phone className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Automatic & Manual Dispatching",
        description:
          "The dispatcher panel is highly responsive and can handle the driver's database effectively.",
      },
      {
        icon: <Map className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Manage Booking Requests",
        description:
          "This feature is developed to handle all the dispatch requests with real-time tracking & modes.",
      },
      {
        icon: <Flag className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Real-Time Fleet Tracking",
        description:
          "Track real-time the movements of your delivery fleet on a dynamic map display.",
      },
      {
        icon: <HelpCircle className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Push Notifications",
        description:
          "Push notifications lets you to convey reminders and assign tasks to teams or specific agents.",
      },
      {
        icon: <BarChart className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Transaction History",
        description:
          "Track each agent's individual delivery, ride requests, completed rides, pending rides, etc.",
      },
      {
        icon: <MessageCircle className="w-6 h-6 text-[#ff4d4d]" />,
        title: "Route Optimization",
        description:
          "The route optimization feature provides streamlined scheduling and routing.",
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
            src="/taxi-app/taxi-app-banner-img.png"
            alt="Driver App"
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
            Dispatcher Dashboard
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 mb-8"
          >
            Stay ahead of all your driver and ride bookings with a unified and
            multi-functional dispatcher panel.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {dispatcherFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
