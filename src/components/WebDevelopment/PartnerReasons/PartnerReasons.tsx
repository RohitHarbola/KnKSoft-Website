'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { PartnerSectionProps } from '@/types/partner'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function PartnerSection({ title, subtitle, reasons }: PartnerSectionProps) {
  return (
    <section className="bg-[#0B0F1C] text-white py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {title}
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] lg:h-auto rounded-2xl overflow-hidden"
          >
            <Image
              src="/cwd/web_partner_img.webp"
              alt="Analytics Dashboard"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {reasons.map((reason) => (
              <motion.div
                key={reason.id}
                variants={itemVariants}
                className="bg-[#151B32] p-6 rounded-lg relative overflow-hidden group hover:bg-[#1A2038] transition-all duration-300"
              >
                <span className="absolute top-4 right-4 text-3xl font-bold text-[#252B43]">
                  {reason.number}
                </span>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

