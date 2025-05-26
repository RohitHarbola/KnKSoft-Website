'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users } from 'lucide-react'

const events = [
  {
    title: 'Annual Tech Conference',
    date: 'September 15-17, 2024',
    location: 'San Francisco, CA',
    attendees: '5000+',
    description: 'Join us for the biggest tech conference of the year featuring industry leaders and innovative workshops.',
  },
  {
    title: 'AI & Machine Learning Workshop',
    date: 'October 5, 2024',
    location: 'Online',
    attendees: '2000+',
    description: 'Learn the latest in AI and ML through hands-on sessions with expert instructors.',
  },
]

export default function UpcomingEvents() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join our exciting events and stay at the forefront of technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-6">
                  <div className="hidden sm:block bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-4 transform group-hover:scale-105 transition-transform duration-300">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <div className="flex-grow space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">{event.description}</p>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-blue-500" />
                        {event.attendees}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium text-sm hover:from-blue-600 hover:to-blue-700 transition duration-300 shadow-md hover:shadow-lg"
                  >
                    Register Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

