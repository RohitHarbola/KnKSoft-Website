import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your requirements and create a comprehensive AWS implementation strategy.',
  },
  {
    number: '02',
    title: 'Architecture Design',
    description: 'Our experts design scalable and secure cloud architecture tailored to your needs.',
  },
  {
    number: '03',
    title: 'Development & Migration',
    description: 'We develop cloud-native solutions and migrate existing systems to AWS.',
  },
  {
    number: '04',
    title: 'Testing & Optimization',
    description: 'Rigorous testing and performance optimization ensure optimal results.',
  },
  {
    number: '05',
    title: 'Deployment',
    description: 'Seamless deployment with zero downtime and continuous monitoring.',
  },
];

export function Process() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Our Development&nbsp;
            <span className="text-primary mt-2 ">Process</span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            A systematic approach to AWS implementation
          </p>
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-100 transform -translate-y-1/2"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>
                <div className="pt-8 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base font-thin">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}