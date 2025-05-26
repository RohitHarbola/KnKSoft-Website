'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'John Doe',
    company: 'Tech Innovators Inc.',
    quote: 'This CRM solution has revolutionized our sales process. It\'s intuitive, powerful, and has significantly boosted our team\'s productivity.',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    company: 'Global Solutions Ltd.',
    quote: 'The customization options and analytics provided by this CRM are unparalleled. It\'s been a game-changer for our business.',
    rating: 5,
  },
  {
    name: 'Mike Johnson',
    company: 'StartUp Ventures',
    quote: 'As a growing startup, this CRM has been instrumental in helping us manage our customer relationships effectively. Highly recommended!',
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.company}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

