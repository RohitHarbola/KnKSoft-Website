import React from 'react';
import {
  Cloud, Lock,
  Users, ArrowRightLeft, Code, Layout, MonitorCheck, Shield, GitBranch
} from 'lucide-react';

const features = [
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'Cloud Infrastructure',
    description: 'Build scalable and resilient cloud architectures using AWS best practices and infrastructure as code.',
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: 'Security & Compliance',
    description: 'Ensure your applications meet industry standards with AWS security services and compliance frameworks.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'AWS Consulting',
    description: 'Our dedicated AWS professionals analyze your business to identify technical gaps and assess migration risks through comprehensive AWS consulting.',
  },
  {
    icon: <ArrowRightLeft className="w-8 h-8" />,
    title: 'Implementation and Migration',
    description: 'Our AWS solution experts deliver fluid transitions that improve user experience and embrace business objectives for reliable and secure solutions.',
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'AWS App Development',
    description: 'Design and scale flexible architecture to create robust, agile applications or migrate legacy applications to the cloud.',
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'Cloud Application Development',
    description: 'Leverage optimized platform solutions for complex businesses to benefit from switching on-premise operations to the cloud.',
  },
  {
    icon: <MonitorCheck className="w-8 h-8" />,
    title: 'Monitoring & Management',
    description: 'Optimize time, resources, and budget efficiencies while delivering exceptional digital experiences with our AWS consulting services.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Cloud Security & Risk Management',
    description: 'Expert implementation of AWS security tools, custom security plans, audits, risk management, and technical security architecture consulting.',
  },
  {
    icon: <GitBranch className="w-8 h-8" />,
    title: 'DevOps',
    description: 'Enhance your cloud migration with Amazon Cloud Development using bespoke DevOps skills for continuous delivery and feedback integration.',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Comprehensive&nbsp;
            <span className="text-primary mt-2 block">AWS Development Solutions</span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            Leverage the full power of Amazon Web Services with our expertise
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}