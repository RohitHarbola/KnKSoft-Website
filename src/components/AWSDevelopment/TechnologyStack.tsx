"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Server, Database, Shield, Network, Store, Zap } from "lucide-react";

const categories = [
  {
    id: "compute",
    icon: <Server className="w-6 h-6" />,
    title: "Compute",
    technologies: [
      {
        name: "AWS EC2",
        description: "Scalable virtual servers with multiple instance types",
      },
      {
        name: "AWS Lambda",
        description: "Serverless functions with automatic scaling",
      },
      {
        name: "ECS/EKS",
        description: "Container orchestration for Docker and Kubernetes",
      },
      {
        name: "AWS Batch",
        description: "Fully managed batch processing at any scale",
      },
      { name: "AWS Fargate", description: "Serverless compute for containers" },
    ],
  },
  {
    id: "database",
    icon: <Database className="w-6 h-6" />,
    title: "Database Services",
    technologies: [
      { name: "Amazon RDS", description: "Managed relational databases" },
      { name: "DynamoDB", description: "NoSQL database service" },
      { name: "ElastiCache", description: "In-memory caching service" },
    ],
  },
  {
    id: "security",
    icon: <Shield className="w-6 h-6" />,
    title: "Security Services",
    technologies: [
      { name: "AWS IAM", description: "Identity and access management" },
      { name: "AWS WAF", description: "Web application firewall" },
      { name: "AWS KMS", description: "Key management service" },
    ],
  },
  {
    id: "storage",
    icon: <Store className="w-6 h-6" />,
    title: "Storage",
    technologies: [
      {
        name: "Amazon S3",
        description: "Scalable object storage for any type of data",
      },
      {
        name: "Amazon EBS",
        description: "High-performance block storage volumes",
      },
      { name: "Amazon EFS", description: "Fully managed elastic file system" },
      { name: "S3 Glacier", description: "Low-cost archive storage service" },
    ],
  },
  {
    id: "networking",
    icon: <Network className="w-6 h-6" />,
    title: "Networking",
    technologies: [
      {
        name: "Amazon VPC",
        description: "Isolated cloud resources and networking",
      },
      {
        name: "AWS Direct Connect",
        description: "Dedicated network connection to AWS",
      },
      { name: "Route 53", description: "Scalable DNS and domain registration" },
      { name: "CloudFront", description: "Global content delivery network" },
    ],
  },
  {
    id: "ai-ml",
    icon: <Zap className="w-6 h-6" />,
    title: "AI & ML",
    technologies: [
      {
        name: "Amazon SageMaker",
        description: "Build, train, and deploy ML models",
      },
      { name: "Amazon Rekognition", description: "Image and video analysis" },
      { name: "Amazon Comprehend", description: "Natural language processing" },
      { name: "Amazon Lex", description: "Conversational AI and chatbots" },
    ],
  },
];

export function TechnologyStack() {
  const [activeTab, setActiveTab] = useState("compute");

  return (
    <section className="py-16 md:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Enterprise&nbsp;
            <span className="text-primary mt-2 ">AWS Solutions</span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            Leveraging cutting-edge AWS services to build scalable, secure, and
            innovative solutions for your business
          </p>
        </motion.div>

        <div className="overflow-x-auto pb-4 mb-8 md:mb-16 -mx-4 px-4 md:px-0 md:overflow-visible">
          <div className="flex flex-nowrap md:flex-wrap md:justify-center gap-3 md:gap-4 min-w-min">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center whitespace-nowrap px-4 md:px-8 py-3 md:py-4 rounded-lg ${
                  activeTab === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                } transition-all duration-300 text-sm md:text-base`}
              >
                <span className="mr-2 md:mr-3">{category.icon}</span>
                {category.title}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          {categories
            .find((cat) => cat.id === activeTab)
            ?.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
                  {tech.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
