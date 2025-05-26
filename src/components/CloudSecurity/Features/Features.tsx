"use client";
import { useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const features = [
  {
    title: '24/7 Monitoring',
    description: 'Round-the-clock surveillance of your cloud infrastructure to detect and respond to threats instantly.',
    icon: '👁️',
  },
  {
    title: 'Automated Backups',
    description: 'Regular, automated backups of your critical data to ensure business continuity in case of any incident.',
    icon: '💾',
  },
  {
    title: 'Vulnerability Scanning',
    description: 'Continuous scanning of your cloud environment to identify and address potential vulnerabilities.',
    icon: '🔍',
  },
  {
    title: 'Incident Response',
    description: 'Rapid and effective incident response protocols to minimize the impact of security breaches.',
    icon: '🚨',
  },
]

const FeatureCard = ({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) => (
  <motion.div
    className="group bg-primary/5 rounded-xl p-8 shadow-lg transition-all duration-300 hover:bg-primary/10"
  >
    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="leading-relaxed font-thin text-sm lg:text-base">{description}</p>
  </motion.div>
);

export default function Features() {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible')
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [controls])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
          Key&nbsp;
          <span className="text-primary mt-2">Features</span>
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
          Protect your cloud infrastructure with our comprehensive security solutions
        </p>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

