"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Separate data to a constants file
const SERVICES_DATA = [
  {
    id: "asset-tracking",
    title: "Asset Tracking",
    description:
      "Keep track of all your IT assets in real-time with advanced monitoring.",
    icon: "📊",
    color: "bg-blue-50",
  },
  {
    id: "vendor-management",
    title: "Vendor Management",
    description:
      "Streamline communication and contracts with vendors efficiently.",
    icon: "🤝",
    color: "bg-green-50",
  },
  {
    id: "lifecycle-management",
    title: "Lifecycle Management",
    description:
      "Manage the entire lifecycle of your IT assets with detailed tracking.",
    icon: "🔄",
    color: "bg-purple-50",
  },
  {
    id: "compliance-monitoring",
    title: "Compliance Monitoring",
    description:
      "Ensure compliance with industry regulations and maintain standards.",
    icon: "✅",
    color: "bg-orange-50",
  },
];

// Separate Service Card Component for better organization
const ServiceCard = memo(
  ({
    service,
    index,
  }: {
    service: (typeof SERVICES_DATA)[0];
    index: number;
  }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const cardVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };

    return (
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`
        ${service.color} p-6 rounded-2xl shadow-lg
        transform hover:scale-105 transition-all duration-300
        hover:shadow-xl backdrop-blur-sm
        flex flex-col justify-between
        min-h-[250px]
        border border-gray-100
      `}
      >
        <div>
          <div className="text-4xl mb-4 transform hover:scale-110 transition-transform duration-200">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">
            {service.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{service.description}</p>
        </div>
      </motion.div>
    );
  }
);

ServiceCard.displayName = "ServiceCard";

const ServicesOverview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive solutions for your IT asset and vendor management
            needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ServicesOverview);
