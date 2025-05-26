"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TechStackTabs = () => {
  const tabs = [
    {
      name: "Programming Languages",
      content: [
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" }
      ]
    },
    {
      name: "Frameworks",
      content: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
      ]
    },
    {
      name: "Databases",
      content: [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
      ]
    },
    {
      name: "Devops",
      content: [
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" }
      ]
    },
    {
      name: "Payment Gateways",
      content: [
        { name: "Stripe", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stripe.svg" },
        { name: "PayPal", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/paypal.svg" },
        { name: "Square", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/square.svg" },
        { name: "Razorpay", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/razorpay.svg" },
        { name: "Braintree", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/braintree.svg" }
      ]
    },
    {
      name: "Clouds",
      content: [
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
        { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "DigitalOcean", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" },
        { name: "Heroku", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" }
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="py-10 lg:py-14">
      <div className="container mx-auto p-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-2 md:mb-8 lg:mb-12"
        >
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Tech Stack&nbsp;
            <span className="text-primary mt-2">We Use</span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            We use the latest technology and industry expertise to build top-end
            Android and iOS-based applications that add value to the business and
            user experience.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 border-b w-fit mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onMouseEnter={() => setActiveTab(tab)}
              className={`px-6 py-3 text-base lg:text-lg font-bold transition-all relative group ${activeTab.name === tab.name
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
                }`}
            >
              {tab.name}
              {/* Hover effect */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg p-8  overflow-hidden">
          <div
            className="relative w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Main scroll container */}
            <div className="relative w-full overflow-hidden">
              <div className={`flex gap-8 min-w-full ${isPaused ? 'pause-animation' : 'animate-infinite-scroll'
                }`}>
                {activeTab.content.concat(activeTab.content).map((item, index) => (
                  <div
                    key={`scroll-${index}`}
                    className="flex flex-col items-center text-center min-w-[120px] max-w-[150px] p-4 transform transition-transform duration-300 hover:scale-110 flex-shrink-0"
                  >
                    <div className="w-24 h-24 p-4 bg-white rounded-lg shadow-sm border flex items-center justify-center hover:shadow-md transition-shadow duration-300">
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="mt-4 text-sm font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default TechStackTabs;
