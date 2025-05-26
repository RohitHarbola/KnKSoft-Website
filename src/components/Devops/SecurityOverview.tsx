"use client";

import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  Cloud,
  GitBranch,
  Shield,
  Monitor,
  Database,
  LucideIcon
} from "lucide-react";

interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
}

const services: Service[] = [
  {
    id: "infrastructure",
    icon: Server,
    title: "Infrastructure Management",
    description: "Automated infrastructure provisioning and management using modern IaC tools",
    details: [
      "Terraform and CloudFormation expertise",
      "Multi-cloud infrastructure management",
      "Infrastructure monitoring and optimization",
      "Cost optimization strategies",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Services",
    description: "End-to-end cloud solutions for modern applications",
    details: [
      "Cloud migration strategies",
      "Hybrid cloud solutions",
      "Cloud security and compliance",
      "Performance optimization",
    ],
  },
  {
    id: "cicd",
    icon: GitBranch,
    title: "CI/CD Pipeline",
    description: "Automated deployment pipelines for continuous delivery",
    details: [
      "Jenkins and GitLab CI expertise",
      "Automated testing integration",
      "Deployment automation",
      "Release management",
    ],
  },
  {
    id: "security",
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security practices and compliance solutions",
    details: [
      "Security automation",
      "Compliance monitoring",
      "Vulnerability scanning",
      "Access management",
    ],
  },
  {
    id: "monitoring",
    icon: Monitor,
    title: "Monitoring & Observability",
    description: "Comprehensive monitoring solutions for your infrastructure",
    details: [
      "Real-time monitoring",
      "Log aggregation",
      "Performance metrics",
      "Alert management",
    ],
  },
  {
    id: "database",
    icon: Database,
    title: "Database Management",
    description: "Automated database operations and optimization",
    details: [
      "Database automation",
      "Backup and recovery",
      "Performance tuning",
      "High availability setup",
    ],
  },
];
// Memoized service button component
const ServiceButton = memo(({
  service,
  isActive,
  onClick
}: {
  service: typeof services[0];
  isActive: boolean;
  onClick: () => void;
}) => {
  const Icon = service.icon;

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${isActive
        ? "bg-blue-50 border-l-4 border-blue-500 shadow-lg"
        : "hover:bg-gray-50 shadow-md"
        }`}
    >
      <div className="flex items-center gap-3">
        <div className={isActive ? "text-blue-500" : "text-gray-500"}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-semibold">{service.title}</h3>
          <p className="text-sm text-gray-500 line-clamp-2 sm:line-clamp-none">
            {service.description}
          </p>
        </div>
      </div>
    </button>
  );
});

ServiceButton.displayName = "ServiceButton";

// Memoized service details component
const ServiceDetails = memo(({ service }: { service: typeof services[0] }) => {
  const Icon = service.icon;

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
        <div className="p-3 bg-blue-50 rounded-lg text-blue-500 w-fit">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold">{service.title}</h3>
      </div>
      <p className="text-gray-600 mb-8">{service.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {service.details.map((detail, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg"
          >
            <div className="w-2 h-2 flex-shrink-0 bg-blue-500 rounded-full" />
            <p className="text-sm sm:text-base text-gray-700">{detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

ServiceDetails.displayName = "ServiceDetails";

export function Services() {
  const [activeService, setActiveService] = useState(services[0].id);

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Our DevOps&nbsp;
            <span className="text-primary mt-2">Services</span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            Comprehensive DevOps solutions to accelerate your digital transformation journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {services.map((service) => (
                <ServiceButton
                  key={service.id}
                  service={service}
                  isActive={activeService === service.id}
                  onClick={() => setActiveService(service.id)}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-xl p-4 sm:p-8 shadow-lg border border-gray-100"
              >
                {services.map((service) =>
                  service.id === activeService && (
                    <ServiceDetails key={service.id} service={service} />
                  )
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}