'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What is CRM and how can it benefit my business?',
    answer: 'CRM stands for Customer Relationship Management. It\'s a system that helps businesses manage interactions with current and potential customers. CRM can benefit your business by improving customer satisfaction, increasing sales, and streamlining processes.',
  },
  {
    question: 'Is your CRM solution cloud-based or on-premise?',
    answer: 'We offer both cloud-based and on-premise CRM solutions. Our cloud-based solution provides flexibility and accessibility, while our on-premise option gives you complete control over your data and infrastructure.',
  },
  {
    question: 'Can I integrate your CRM with my existing tools?',
    answer: 'Yes, our CRM solution offers extensive integration capabilities. We support integration with popular business tools, email services, and custom applications through our API.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer 24/7 customer support for all our plans. This includes email, phone, and live chat support. Our enterprise clients also receive a dedicated account manager for personalized assistance.',
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{ backgroundColor: activeIndex === index ? 'rgb(243, 244, 246)' : 'rgb(255, 255, 255)' }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-gray-50">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

