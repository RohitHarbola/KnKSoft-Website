"use client";

import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', threats: 150, resolved: 148 },
  { name: 'Feb', threats: 180, resolved: 175 },
  { name: 'Mar', threats: 200, resolved: 198 },
  { name: 'Apr', threats: 170, resolved: 168 },
  { name: 'May', threats: 160, resolved: 159 },
  { name: 'Jun', threats: 190, resolved: 185 },
];

const metrics = [
  { label: "Threats Detected", value: "1,050+", change: "+12%" },
  { label: "Average Response Time", value: "< 5min", change: "-25%" },
  { label: "Security Score", value: "98.5%", change: "+5%" },
  { label: "Compliance Rate", value: "100%", change: "0%" },
] as const;

export default function SecurityMetrics() {
  return (
    <section className="py-12 sm:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Security Performance&nbsp;
            <span className="text-primary mt-2">Metrics</span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            Real-time insights into your security posture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-3">
                {metric.label}
              </h3>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300">
                  {metric.value}
                </span>
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${metric.change.startsWith('+')
                    ? 'text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900/30'
                    : metric.change.startsWith('-')
                      ? 'text-red-700 bg-red-100 dark:text-red-400 dark:bg-red-900/30'
                      : 'text-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/30'
                  }`}>
                  {metric.change}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-4 sm:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 px-2">
            Threat Detection & Resolution
          </h3>
          <div className="h-[300px] sm:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 12 }}
                  stroke="#9ca3af"
                />
                <YAxis
                  tick={{ fontSize: 12 }}
                  stroke="#9ca3af"
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="threats"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                  name="Threats Detected"
                />
                <Line
                  type="monotone"
                  dataKey="resolved"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                  name="Threats Resolved"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}