"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Database, Network, Lock, ChevronRight, ChevronDown } from 'lucide-react';

const solutions = [
  {
    id: 'infrastructure',
    icon: Server,
    title: 'Infrastructure Solutions',
    description: 'Build robust cloud infrastructure with our enterprise-grade solutions.',
    features: [
      'Auto-scaling infrastructure',
      'Load balancing',
      'Containerization',
      'Microservices architecture',
    ],
  },
  {
    id: 'data',
    icon: Database,
    title: 'Data Solutions',
    description: 'Manage and analyze your data with powerful cloud-based tools.',
    features: [
      'Data warehousing',
      'Big data processing',
      'Real-time analytics',
      'Data backup & recovery',
    ],
  },
  {
    id: 'network',
    icon: Network,
    title: 'Network Solutions',
    description: 'Optimize your network infrastructure for maximum performance.',
    features: [
      'CDN integration',
      'VPN services',
      'DNS management',
      'Traffic optimization',
    ],
  },
  {
    id: 'security',
    icon: Lock,
    title: 'Security Solutions',
    description: 'Protect your cloud infrastructure with advanced security measures.',
    features: [
      'Encryption at rest',
      'DDoS protection',
      'Identity management',
      'Security monitoring',
    ],
  },
];

export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState(solutions[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="py-12 md:py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Cloud Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive range of cloud solutions designed for modern enterprises
          </p>
        </div>

        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-md"
          >
            <span className="font-semibold text-gray-700">Select Solution</span>
            <ChevronDown className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className={`lg:col-span-1 ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="space-y-3">
              {solutions.map((solution) => (
                <button
                  key={solution.id}
                  onClick={() => {
                    setActiveSolution(solution.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 flex items-center justify-between group
                    ${
                      activeSolution === solution.id
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md'
                    }`}
                >
                  <div className="flex items-center">
                    <solution.icon className={`w-6 h-6 mr-3 transition-transform group-hover:scale-110
                      ${activeSolution === solution.id ? 'text-white' : 'text-blue-600'}`} />
                    <span className="font-semibold">{solution.title}</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform
                    ${activeSolution === solution.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {solutions.map((solution) => (
                solution.id === activeSolution && (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100"
                  >
                    <div className="flex items-center mb-6">
                      <solution.icon className="w-8 h-8 text-blue-600 mr-4" />
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {solution.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {solution.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}