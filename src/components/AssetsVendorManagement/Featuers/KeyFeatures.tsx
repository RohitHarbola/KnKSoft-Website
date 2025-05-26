"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "Real-time Asset Tracking",
    description:
      "Monitor your assets in real-time with our advanced tracking system. Get instant notifications, location updates, and status changes for efficient management.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
    icon: "📍",
  },
  {
    title: "Vendor Performance Analytics",
    description:
      "Make data-driven decisions with comprehensive analytics. Track KPIs, generate custom reports, and identify optimization opportunities.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
    icon: "📊",
  },
  {
    title: "Automated Compliance Checks",
    description:
      "Stay compliant with automated monitoring and alerts. Reduce risks and ensure regulatory requirements are met consistently.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3",
    icon: "✓",
  },
];

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`flex flex-col ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center gap-12 bg-white rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300`}
    >
      <div className="w-full lg:w-1/2 relative overflow-hidden rounded-xl group">
        <div className="aspect-w-16 aspect-h-9 relative">
          <Image
            src={feature.image}
            alt={feature.title}
            width={500}
            height={500}
            className="object-cover transform group-hover:scale-105 transition-transform duration-500 w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      <div className="w-full lg:w-1/2 space-y-6">
        <div className="inline-block bg-blue-100 rounded-full p-3 mb-4">
          <span className="text-2xl">{feature.icon}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
          {feature.title}
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed">
          {feature.description}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function KeyFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover how our advanced features can transform your asset and
            vendor management
          </motion.p>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
