"use client";

import { useState, useMemo, memo } from 'react';
import { motion } from 'framer-motion';

const architectureLayers = [
  {
    id: "perimeter",
    title: "Perimeter Security",
    description: "Advanced firewall protection and DDoS mitigation",
    icon: "🛡️",
    details: [
      "Next-gen firewall protection",
      "DDoS attack prevention",
      "Traffic filtering",
      "Network segmentation"
    ]
  },
  {
    id: "identity",
    title: "Identity & Access",
    description: "Comprehensive identity management and access control",
    details: [
      "Multi-factor authentication",
      "Single sign-on (SSO)",
      "Role-based access control",
      "Identity governance"
    ]
  },
  {
    id: "data",
    title: "Data Security",
    description: "End-to-end data protection and encryption",
    details: [
      "Data encryption at rest",
      "Data encryption in transit",
      "Key management",
      "Data loss prevention"
    ]
  }
];

const LayerCard = memo(({
  layer,
  isActive,
  onClick
}: {
  layer: typeof architectureLayers[0],
  isActive: boolean,
  onClick: () => void
}) => (
  <motion.div
    key={layer.id}
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className={`
      p-6 rounded-xl cursor-pointer transition-all duration-300
      hover:shadow-lg transform hover:-translate-y-1
      ${isActive
        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white scale-105'
        : 'bg-primary/5 hover:bg-primary/10'
      }
    `}
    onClick={onClick}
  >
    <div className="flex items-center gap-3">
      <span className="text-2xl">{layer.icon}</span>
      <h3 className="text-xl font-semibold">{layer.title}</h3>
    </div>
    <p className={`mt-2 ${isActive ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'
      }`}>
      {layer.description}
    </p>
  </motion.div>
));

LayerCard.displayName = 'LayerCard';

export default function SecurityArchitecture() {
  const [activeLayer, setActiveLayer] = useState(architectureLayers[0].id);
  const activeLayerData = useMemo(() =>
    architectureLayers.find(l => l.id === activeLayer),
    [activeLayer]
  );

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Security&nbsp;
            <span className="text-primary mt-2">Architecture</span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            Protect your cloud infrastructure with our enterprise-grade security features
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-4 md:space-y-6">
            {architectureLayers.map((layer) => (
              <LayerCard
                key={layer.id}
                layer={layer}
                isActive={activeLayer === layer.id}
                onClick={() => setActiveLayer(layer.id)}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 md:p-8 rounded-2xl shadow-lg sticky top-24"
          >
            <h4 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="text-2xl">{activeLayerData?.icon}</span>
              {activeLayerData?.title}
            </h4>
            <ul className="space-y-4">
              {activeLayerData?.details.map((detail, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full" />
                  <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}