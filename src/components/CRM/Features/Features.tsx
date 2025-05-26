'use client'

import { motion } from 'framer-motion'
import { Users, BarChart, MessageCircle, Shield } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Customer Management',
    description: 'Efficiently manage and organize your customer data in one centralized platform.',
  },
  {
    icon: BarChart,
    title: 'Analytics & Reporting',
    description: 'Gain valuable insights with advanced analytics and customizable reports.',
  },
  {
    icon: MessageCircle,
    title: 'Communication Tools',
    description: 'Streamline communication with integrated email, chat, and call features.',
  },
  {
    icon: Shield,
    title: 'Data Security',
    description: 'Ensure the safety of your sensitive data with our robust security measures.',
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

