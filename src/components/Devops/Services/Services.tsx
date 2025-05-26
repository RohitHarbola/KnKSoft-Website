'use client'

import { FC, useState } from 'react'

const services = [
  {
    id: 'ci-cd',
    title: 'CI/CD Pipeline Automation',
    description: 'Streamline your development process with our advanced CI/CD pipeline automation services.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration & Optimization',
    description: 'Seamlessly migrate your infrastructure to the cloud and optimize for performance and cost.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    id: 'monitoring',
    title: 'Infrastructure Monitoring',
    description: 'Proactively monitor your infrastructure to ensure optimal performance and reliability.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 'security',
    title: 'DevSecOps Integration',
    description: 'Integrate security practices into your DevOps workflow for enhanced protection.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
]

const Services: FC = () => {
  const [activeTab, setActiveTab] = useState(services[0].id)

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12">Our DevOps Services</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <div className="bg-gray-800 rounded-lg p-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  className={`w-full text-left py-3 px-4 rounded-md transition-colors duration-200 ease-in-out ${
                    activeTab === service.id ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveTab(service.id)}
                >
                  <div className="flex items-center">
                    {service.icon}
                    <span className="ml-3 font-medium">{service.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="lg:w-2/3 lg:pl-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-gray-800 rounded-lg p-6 transition-opacity duration-300 ${
                  activeTab === service.id ? 'opacity-100' : 'opacity-0 hidden'
                }`}
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Automated build and deployment processes</li>
                  <li>Continuous integration and delivery</li>
                  <li>Infrastructure as Code (IaC) implementation</li>
                  <li>Performance optimization and scaling</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
