"use client";
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const caseStudies = [
  {
    title: 'Global Financial Institution',
    description: 'Implemented advanced threat detection system, reducing security incidents by 75% and saving $10M annually.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000',
    stats: {
      reduction: '75%',
      savings: '$10M',
      implementation: '3 months'
    }
  },
  {
    title: 'E-commerce Giant',
    description: 'Deployed end-to-end encryption and access management, ensuring GDPR compliance and boosting customer trust.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000',
    stats: {
      security: '99.9%',
      compliance: '100%',
      userTrust: '+85%'
    }
  },
  {
    title: 'Healthcare Provider Network',
    description: 'Established comprehensive cloud security measures, safeguarding patient data and achieving HIPAA compliance.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1000',
    stats: {
      dataProtection: '100%',
      uptime: '99.99%',
      satisfaction: '95%'
    }
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

export default function CaseStudies() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const paginate = useCallback((newDirection: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPage(([currentPage]) => {
      const nextPage = (currentPage + newDirection + caseStudies.length) % caseStudies.length;
      return [nextPage, newDirection];
    });
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-10 py-20 rounded-3xl" style={{ backgroundImage: `url("/images/services-right-bg.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center center', opacity: 1, transform: 'none' }}>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-white">
          Success Stories
          <span className="block text-white text-lg md:text-xl mt-2 font-normal">
            Real results from real clients
          </span>
        </h2>

        <div className="relative h-[600px] md:h-[400px] max-w-5xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full h-full"
            >
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl h-full">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="relative w-full md:w-1/2 h-48 md:h-full">
                    <Image
                      src={caseStudies[page].image}
                      alt={caseStudies[page].title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-between w-full md:w-1/2">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {caseStudies[page].title}
                      </h3>
                      <p className="text-gray-300 text-lg mb-6">
                        {caseStudies[page].description}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(caseStudies[page].stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-blue-400 text-xl font-bold">{value}</div>
                          <div className="text-gray-400 text-sm">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm transition-all duration-200 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm transition-all duration-200 z-10"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setPage([index, index > page ? 1 : -1])}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === page ? 'bg-blue-400 w-4' : 'bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}