"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'What is DevOps and how can it benefit my organization?',
    answer: 'DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle while delivering features, fixes, and updates frequently in close alignment with business objectives. It can benefit your organization by improving collaboration, increasing efficiency, reducing time-to-market, and enhancing overall product quality.',
  },
  {
    question: 'How long does it typically take to implement DevOps practices?',
    answer: 'The timeline for implementing DevOps practices can vary depending on the size and complexity of your organization. Generally, it can take anywhere from 3 to 12 months to see significant improvements. However, DevOps is an ongoing process of continuous improvement, so you\'ll continue to see benefits and optimizations over time.',
  },
  {
    question: 'What tools do you use for DevOps implementation?',
    answer: 'We use a variety of industry-leading tools for DevOps implementation, including but not limited to: Jenkins for continuous integration and delivery, Docker for containerization, Kubernetes for container orchestration, Ansible for configuration management, Terraform for infrastructure as code, and Prometheus for monitoring and alerting.',
  },
  {
    question: 'How do you ensure security in a DevOps environment?',
    answer: 'We integrate security practices throughout the DevOps lifecycle, an approach known as DevSecOps. This includes implementing automated security testing, using infrastructure as code for consistent and secure deployments, employing least privilege access controls, and conducting regular security audits and vulnerability assessments.',
  },
  {
    question: 'Can DevOps practices be applied to legacy systems?',
    answer: 'Yes, DevOps practices can be applied to legacy systems, although it may require additional planning and effort. We can help modernize legacy applications through strategies such as containerization, implementing CI/CD pipelines, and gradually refactoring code to make it more amenable to DevOps practices.',
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5 text-white">
      <h2 className="text-3xl font-bold text-center tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
        Frequently Asked&nbsp;
        <span className="text-primary mt-2">Questions</span>
      </h2>
      <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
        We are a company with a DNA of entrepreneurship, and hence, we value
        the time and money invested by our clients.
      </p>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="flex justify-between items-center w-full text-left p-4 bg-primary focus:rounded-b-none rounded-lg focus:outline-none"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span className="ml-6 flex-shrink-0">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 bg-primary rounded-b-lg">
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}

