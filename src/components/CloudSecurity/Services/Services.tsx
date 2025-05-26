"use client";
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShieldAlt, FaLock, FaUserLock, FaClipboardCheck } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

interface ServiceType {
  title: string;
  description: string;
  icon: IconType;
  features: string[];
  benefits: string[];
}

const services: ServiceType[] = [
  {
    title: 'Threat Detection & Prevention',
    description: 'Advanced AI-powered threat detection system that provides real-time monitoring and immediate response to security threats.',
    icon: FaShieldAlt,
    features: [
      'Real-time threat monitoring',
      'AI-powered threat analysis',
      'Automated incident response',
      'Behavioral analytics',
      '24/7 security monitoring'
    ],
    benefits: [
      'Prevent cyber attacks before they happen',
      'Reduce security incident response time',
      'Minimize potential data breaches'
    ]
  },
  {
    title: 'Data Encryption & Protection',
    description: 'Enterprise-grade encryption solutions ensuring your sensitive data remains secure both in transit and at rest.',
    icon: FaLock,
    features: [
      'End-to-end encryption',
      'Key management',
      'Data masking',
      'Secure file sharing',
      'Backup encryption'
    ],
    benefits: [
      'Protect sensitive information',
      'Meet compliance requirements',
      'Secure data transmission'
    ]
  },
  {
    title: 'Access Management',
    description: 'Comprehensive identity and access management solutions with multi-factor authentication and role-based access control.',
    icon: FaUserLock,
    features: [
      'Multi-factor authentication',
      'Single sign-on (SSO)',
      'Role-based access control',
      'User activity monitoring',
      'Password management'
    ],
    benefits: [
      'Control user access',
      'Prevent unauthorized access',
      'Streamline user management'
    ]
  },
  {
    title: 'Compliance & Governance',
    description: 'Ensure your cloud infrastructure adheres to industry standards and regulatory requirements with our compliance management tools.',
    icon: FaClipboardCheck,
    features: [
      'Regulatory compliance',
      'Audit trails',
      'Policy management',
      'Risk assessment',
      'Compliance reporting'
    ],
    benefits: [
      'Meet industry standards',
      'Maintain audit readiness',
      'Reduce compliance risks'
    ]
  },
];

const tabVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const activeService = useMemo(() => services[activeTab], [activeTab]);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Cloud Security&nbsp;
            <span className="text-primary mt-2">Services</span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            Protect your cloud infrastructure with our comprehensive security solutions
          </p>
        </div>

        {/* Optimized Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.button
                key={service.title}
                variants={tabVariants}
                whileHover="hover"
                whileTap="tap"
                className={`flex items-center px-6 py-3.5 rounded-xl text-sm md:text-base font-medium transition-all duration-300 ${activeTab === index
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg scale-105 border-2 border-red-400'
                    : 'bg-white/90 hover:bg-white hover:shadow-md border-2 border-transparent'
                  }`}
                onClick={() => setActiveTab(index)}
              >
                <Icon className={`mr-2 h-5 w-5 ${activeTab === index
                    ? 'text-white'
                    : 'text-red-500'
                  }`} />
                {service.title}
              </motion.button>
            );
          })}
        </div>

        {/* Optimized Content Area */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="rounded-2xl p-6 md:p-8 shadow-2xl"
            style={{ backgroundImage: `url("/images/services-right-bg.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center center', opacity: 1, transform: 'none' }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-blue-600/20 mr-4">
                    <activeService.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {activeService.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {activeService.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Benefits</h4>
                  <ul className="space-y-3">
                    {activeService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="h-2 w-2 rounded-full bg-blue-500 mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="bg-gray-900/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Features</h4>
                <div className="grid grid-cols-1 gap-4">
                  {activeService.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center p-4 bg-gray-800/50 rounded-lg"
                    >
                      <div className="h-2 w-2 rounded-full bg-blue-500 mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

