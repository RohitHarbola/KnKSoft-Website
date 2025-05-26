'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Laptop, Phone, Cloud, Settings, LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: Laptop,
    title: 'Web-based CRM',
    description: 'Access your CRM from anywhere with our powerful web-based solution.',
  },
  {
    icon: Phone,
    title: 'Mobile CRM',
    description: 'Stay connected on-the-go with our feature-rich mobile CRM app.',
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Seamlessly integrate with popular cloud services for enhanced productivity.',
  },
  {
    icon: Settings,
    title: 'Customization',
    description: 'Tailor our CRM to fit your unique business needs with advanced customization options.',
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive suite of CRM solutions designed to elevate your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                className={`relative group cursor-pointer rounded-2xl p-6 transition-all duration-300
                  ${activeService === index 
                    ? 'bg-blue-600 shadow-xl' 
                    : 'bg-white shadow-md hover:shadow-xl'
                  }`}
                onClick={() => setActiveService(activeService === index ? null : index)}
                whileHover={{ y: -5 }}
                layout
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 rounded-full 
                    ${activeService === index 
                      ? 'bg-white/10' 
                      : 'bg-blue-50 group-hover:bg-blue-100'
                    }`}>
                    <Icon className={`h-8 w-8 
                      ${activeService === index 
                        ? 'text-white' 
                        : 'text-blue-600'
                      }`} />
                  </div>
                  <h3 className={`text-xl font-semibold 
                    ${activeService === index 
                      ? 'text-white' 
                      : 'text-gray-900'
                    }`}>
                    {service.title}
                  </h3>
                  
                  <AnimatePresence>
                    {activeService === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-white/90"
                      >
                        {service.description}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {activeService !== index && (
                    <p className="text-gray-600 text-sm">
                      Click to learn more
                    </p>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

