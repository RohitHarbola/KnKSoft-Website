"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
    {
        question: "What makes your cloud security different from others?",
        answer: "Our cloud security solution combines AI-powered threat detection, end-to-end encryption, and 24/7 expert monitoring to provide a comprehensive, proactive approach to protecting your data and infrastructure."
    },
    {
        question: "How do you ensure compliance with industry regulations?",
        answer: "We stay up-to-date with the latest industry standards and regulations. Our solutions are designed to meet compliance requirements for GDPR, HIPAA, PCI-DSS, and other relevant standards, with regular audits and updates to maintain compliance."
    },
    {
        question: "Can you integrate with our existing cloud infrastructure?",
        answer: "Absolutely. Our cloud security solutions are designed to seamlessly integrate with major cloud providers like AWS, Azure, and Google Cloud, as well as hybrid and multi-cloud environments."
    },
    {
        question: "What kind of support do you offer?",
        answer: "We offer 24/7 technical support, regular security assessments, and a dedicated account manager for enterprise clients. Our team of experts is always available to address your concerns and provide guidance."
    }
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

