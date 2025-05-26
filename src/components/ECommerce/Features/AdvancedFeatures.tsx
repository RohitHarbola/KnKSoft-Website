"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MapPin, Server, Palette, MessageSquare, Database, Percent } from 'lucide-react';

const features = [
  {
    title: "GeoLocation Detection",
    icon: MapPin,
    bgColor: "bg-emerald-500",
    textColor: "text-white"
  },
  {
    title: "Super Fast Hosting",
    icon: Server,
    bgColor: "bg-white",
    textColor: "text-gray-900"
  },
  {
    title: "Multiple Custom Themes",
    icon: Palette,
    bgColor: "bg-emerald-500",
    textColor: "text-white"
  },
  {
    title: "Custom Email & SMS Gateway",
    icon: MessageSquare,
    bgColor: "bg-white",
    textColor: "text-gray-900"
  },
  {
    title: "Extensive Backend",
    icon: Database,
    bgColor: "bg-emerald-500",
    textColor: "text-white"
  },
  {
    title: "Custom Discounts",
    icon: Percent,
    bgColor: "bg-white",
    textColor: "text-gray-900"
  },
];

export default function AdvancedFeatures() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Advanced Features You&apos;ll Fall in Love With
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Features Grid - Puzzle Pattern */}
          <div className="grid grid-cols-3 gap-4 h-full">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "p-4 rounded-xl shadow-lg flex flex-col items-center justify-center text-center",
                  feature.bgColor,
                  feature.textColor,
                  {
                    'col-span-2 row-span-2': index === 0,
                    'col-start-3 row-start-1': index === 1,
                    'col-start-3 row-start-2': index === 2,
                    'col-start-1 row-start-3': index === 3,
                    'col-start-2 row-start-3 row-span-2': index === 4,
                    'col-start-3 row-start-3': index === 5,
                  }
                )}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full mb-3">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-sm">{feature.title}</h3>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="https://www.code-brew.com/wp-content/uploads/2019/07/feature-image@2x.png"
              alt="Feature showcase"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

