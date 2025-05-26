"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const benefits = [
  {
    title: "Cost Savings",
    description:
      "Reduce operational costs by optimizing asset utilization and vendor management with our intelligent automation system.",
    icon: "https://storage.googleapis.com/your-bucket/cost-savings.svg",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconBg: "bg-blue-500",
  },
  {
    title: "Improved Efficiency",
    description:
      "Streamline processes and boost productivity with our AI-powered automated workflows and real-time tracking.",
    icon: "https://storage.googleapis.com/your-bucket/efficiency.svg",
    bgColor: "bg-gradient-to-br from-green-50 to-green-100",
    iconBg: "bg-green-500",
  },
  {
    title: "Enhanced Security",
    description:
      "Enterprise-grade security with advanced encryption, access controls, and comprehensive audit trails.",
    icon: "https://storage.googleapis.com/your-bucket/security.svg",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconBg: "bg-purple-500",
  },
  {
    title: "Better Decision Making",
    description:
      "Leverage powerful analytics and ML-driven insights for strategic decision-making and resource optimization.",
    icon: "https://storage.googleapis.com/your-bucket/analytics.svg",
    bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
    iconBg: "bg-orange-500",
  },
];

const BenefitCard = ({
  benefit,
  index,
}: {
  benefit: (typeof benefits)[0];
  index: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative overflow-hidden ${benefit.bgColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
    >
      <div className="p-8">
        <div
          className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 ${benefit.iconBg} rounded-full opacity-10`}
        />
        <div className={`${benefit.iconBg} rounded-2xl p-4 inline-block mb-6`}>
          <Image
            src={benefit.icon}
            alt={benefit.title}
            width={32}
            height={32}
            className="w-8 h-8 text-white"
          />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          {benefit.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
      </div>
    </motion.div>
  );
};

export default function Benefits() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our Solution?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our platform transforms your asset and vendor
            management with cutting-edge technology and proven results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
