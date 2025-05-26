"use client";

import { Service } from "@/types/Services";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

interface ServiceCardProps {
  service: Service;
  isActive: boolean;
  onClick: () => void;
  onHover: () => void;
}

export function ServiceCard({
  service,
  isActive,
  onClick,
  onHover,
}: ServiceCardProps) {
  const Icon = Icons[service.icon as keyof typeof Icons] as React.ElementType;

  if (!Icon) {
    console.warn(`Icon "${service.icon}" not found in lucide-react icons`);
    return null;
  }

  return (
    <motion.div
      layout
      onClick={onClick}
      onMouseEnter={onHover}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`cursor-pointer rounded-xl p-6 transition-all duration-300 shadow-md ${
        isActive
          ? "bg-red-500 text-white"
          : "bg-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`rounded-lg p-2 ${
              isActive ? "bg-white/10" : "bg-primary/10"
            }`}
          >
            <Icon
              className={`h-6 w-6 ${isActive ? "text-white" : "text-primary"}`}
            />
          </div>
          <div>
            <h3 className="font-semibold">{service.title}</h3>
            <p
              className={`text-sm ${
                isActive ? "text-white/70" : "text-foreground"
              }`}
            >
              {service.description}
            </p>
          </div>
        </div>
        <span
          className={`text-4xl lg:text-5xl font-bold ${
            isActive ? "text-white/10" : "text-gray-200 dark:text-gray-800"
          }`}
        >
          {service.number}
        </span>
      </div>
    </motion.div>
  );
}
