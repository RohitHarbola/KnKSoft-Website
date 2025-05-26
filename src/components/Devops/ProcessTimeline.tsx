'use client'

import { FC, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const timelineSteps = [
  {
    title: 'Assessment',
    description: 'We analyze your current infrastructure and processes to identify areas for improvement.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Planning',
    description: 'We develop a tailored DevOps strategy and roadmap for your organization.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Implementation',
    description: 'We execute the DevOps transformation, including tool integration and process automation.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Optimization',
    description: 'We continuously monitor and optimize your DevOps processes for maximum efficiency.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
]

const ProcessTimeline: FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleStepHover = useCallback((index: number) => {
    setActiveStep(index)
  }, [])

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl py-8"   style={{ backgroundImage: `url("/images/services-right-bg.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center center', opacity: 1, transform: 'none' }}>
        <h2 className="text-3xl font-bold text-center text-white tracking-tight sm:text-4xl lg:text-5xl mb-8 md:mb-12">
          Our DevOps&nbsp;
          <span className="text-primary mt-2 inline-block">Process</span>
        </h2>
        
        <div className="relative" ref={ref}>
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white"></div>
          
          {/* Mobile line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 to-indigo-400"></div>

          <AnimatePresence>
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative z-10 mb-8 flex items-center w-full
                  ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}
                  justify-start`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div
                  className={`flex items-center w-full max-w-md 
                    ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                    flex-row`}
                >
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-4 
                      ${activeStep === index 
                        ? 'border-indigo-500 text-indigo-500' 
                        : 'border-indigo-400/50 text-gray-400'}
                      bg-gray-900 flex items-center justify-center transform transition-all duration-300
                      hover:scale-110 hover:border-indigo-500 hover:text-indigo-500`}
                    onMouseEnter={() => handleStepHover(index)}
                    onMouseLeave={() => handleStepHover(-1)}
                  >
                    {step.icon}
                  </div>
                  <motion.div
                    className={`bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 shadow-xl mx-4 flex-1
                      ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}
                      text-left
                      hover:bg-gray-800 transition-colors duration-300
                      border border-gray-700/50`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-indigo-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline

