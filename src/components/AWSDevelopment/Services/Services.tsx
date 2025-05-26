import Image from 'next/image';
import React from 'react';

const services = [
  {
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800',
    title: 'Cloud Migration',
    description: 'Seamlessly migrate your existing infrastructure to AWS with zero downtime',
    features: ['Assessment & Planning', 'Data Migration', '24/7 Support', 'Performance Optimization'],
  },
  {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    title: 'Serverless Architecture',
    description: 'Build modern applications with AWS Lambda and serverless technologies',
    features: ['Auto-scaling', 'Pay-per-use', 'Rapid Development', 'Managed Services'],
  },
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    title: 'DevOps Implementation',
    description: 'Implement efficient CI/CD pipelines and automation workflows',
    features: ['Automated Testing', 'Continuous Deployment', 'Infrastructure as Code', 'Monitoring'],
  },
];

export function Services() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 tracking-tight">
            Our AWS Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions for your cloud infrastructure needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 sm:p-8 flex flex-col justify-end">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-xs sm:text-sm text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}