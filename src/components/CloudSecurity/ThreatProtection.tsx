"use client";

import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Activity } from 'lucide-react';

export default function ThreatProtection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Advanced Threat&nbsp;
            <span className="text-primary mt-2">Protection</span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            Real-time threat detection and response system
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl transform rotate-1 opacity-10" />
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <Shield className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Threat Detection</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span>AI-powered threat analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span>Behavioral monitoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span>Pattern recognition</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl transform -rotate-1 opacity-10" />
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <AlertTriangle className="w-12 h-12 text-red-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Incident Response</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full" />
                  <span>Automated response</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full" />
                  <span>Threat containment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full" />
                  <span>Recovery procedures</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl transform rotate-1 opacity-10" />
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <Activity className="w-12 h-12 text-green-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Continuous Monitoring</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <span>24/7 surveillance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <span>Real-time alerts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <span>Performance metrics</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}