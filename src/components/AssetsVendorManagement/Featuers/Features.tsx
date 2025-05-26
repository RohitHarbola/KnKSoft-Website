"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Suspense } from "react";

type Resource = {
  title: string;
  type: string;
  icon: string;
  image: string;
  link: string;
  description: string;
  readTime?: string;
  duration?: string;
  episodes?: string;
  type2?: string;
};

const resources: Resource[] = [
  {
    title: "Ultimate Guide to IT Asset Management",
    type: "E-Book",
    icon: "📚",
    image: "https://storage.googleapis.com/your-bucket/ebook-cover.jpg",
    link: "#",
    description:
      "Comprehensive guide covering all aspects of modern IT asset management.",
    readTime: "15 min read",
  },
  {
    title: "Vendor Management Best Practices",
    type: "Webinar",
    icon: "🎥",
    image: "https://storage.googleapis.com/your-bucket/webinar-thumb.jpg",
    link: "#",
    description:
      "Learn industry-leading practices for vendor relationship management.",
    duration: "45 min",
  },
  {
    title: "ROI Calculator",
    type: "Tool",
    icon: "🧮",
    image: "https://storage.googleapis.com/your-bucket/calculator-tool.jpg",
    link: "#",
    description:
      "Calculate the return on investment for your asset management solutions.",
    type2: "Interactive",
  },
  {
    title: "IT Asset Management Podcast",
    type: "Podcast",
    icon: "🎙️",
    image: "https://storage.googleapis.com/your-bucket/podcast-cover.jpg",
    link: "#",
    description: "Weekly insights from industry experts and thought leaders.",
    episodes: "New weekly",
  },
];

const ResourceCard = ({
  resource,
  index,
}: {
  resource: Resource;
  index: number;
}) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-6">
        <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
          <Image
            src={resource.image}
            alt={resource.title}
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-200 rounded-full mb-3">
          {resource.type}
        </span>

        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors duration-300">
          {resource.title}
        </h3>

        <p className="text-gray-300 text-sm mb-4">{resource.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-blue-200">
            {resource.readTime ||
              resource.duration ||
              resource.episodes ||
              resource.type2}
          </span>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition-colors duration-300"
          >
            Access Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default function ResourceCenter() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Resource Center
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Elevate your expertise with our curated collection of resources
            designed to transform your approach to Assets & Vendor Management.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {resources.map((resource, index) => (
            <Suspense
              key={index}
              fallback={
                <div className="h-[400px] rounded-xl bg-gray-800 animate-pulse" />
              }
            >
              <ResourceCard resource={resource} index={index} />
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  );
}
