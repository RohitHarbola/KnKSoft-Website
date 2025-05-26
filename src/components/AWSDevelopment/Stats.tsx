"use client"
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '99.99%', label: 'Uptime Guarantee', icon: '⚡' },
  { value: '40%', label: 'Cost Reduction', icon: '💰' },
  { value: '24/7', label: 'Support', icon: '🛟' },
  { value: '100+', label: 'AWS Projects', icon: '☁️' },
];

export function Stats() {
  return (
    <section className="relative py-14 bg-gradient-to-br from-blue-600 to-blue-700 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 ease-in-out">
                <div className="flex flex-col items-center space-y-4">
                  <span className="text-3xl mb-2">{stat.icon}</span>
                  <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-blue-100 font-medium text-sm sm:text-base">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}