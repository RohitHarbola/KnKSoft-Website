"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const caseStudies = [
  {
    title: 'E-commerce Platform Migration',
    company: 'Global Retail Co.',
    description: 'Successfully migrated a large-scale e-commerce platform to AWS, resulting in 60% improved performance.',
    metrics: [
      { label: 'Performance Improvement', value: '60%' },
      { label: 'Cost Reduction', value: '45%' },
      { label: 'Deployment Time', value: '3 months' }
    ],
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Financial Services API Platform',
    company: 'FinTech Solutions',
    description: 'Built a serverless API platform handling millions of transactions daily with 99.999% uptime.',
    metrics: [
      { label: 'Daily Transactions', value: '5M+' },
      { label: 'Uptime', value: '99.999%' },
      { label: 'Response Time', value: '<100ms' }
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  }
];

export function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-gray-300">
            Real-world examples of our AWS solutions in action
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`cursor-pointer p-6 rounded-xl transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-white/10 shadow-xl'
                    : 'hover:bg-white/5'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                <p className="text-blue-300 mb-4">{study.company}</p>
                <p className="text-gray-300">{study.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 rounded-xl p-8"
          >
            <Image
              src={caseStudies[activeIndex].image}
              alt={caseStudies[activeIndex].title}
              width={500}
              height={500}
              className="w-full h-48 object-cover rounded-lg mb-8"
            />
            <div className="grid grid-cols-3 gap-4">
              {caseStudies[activeIndex].metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-300">{metric.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}