"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "Salesforce",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg",
    description: "CRM & Cloud Solutions",
  },
  {
    name: "Microsoft",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg",
    description: "Enterprise Software",
  },
  {
    name: "SAP",
    logo: "https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg",
    description: "Business Solutions",
  },
  {
    name: "Oracle",
    logo: "https://www.oracle.com/a/ocom/img/oracle-logo.svg",
    description: "Database & Cloud",
  },
  {
    name: "ServiceNow",
    logo: "https://www.servicenow.com/content/dam/servicenow-assets/images/meganav/servicenow-header-logo.svg",
    description: "IT Service Management",
  },
  {
    name: "Workday",
    logo: "https://www.workday.com/content/dam/web/en-us/images/workday-logo.svg",
    description: "HR & Finance Solutions",
  },
];

const PartnerCard = memo(
  ({ partner, index }: { partner: (typeof partners)[0]; index: number }) => (
    <motion.div
      key={partner.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
      className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative w-24 h-24 mb-4">
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
          loading="lazy"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {partner.name}
      </h3>
      <p className="text-sm text-gray-600 text-center">{partner.description}</p>
    </motion.div>
  )
);

PartnerCard.displayName = "PartnerCard";

const IntegrationPartners = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800 leading-tight">
            Integration <span className="text-blue-600">Partners</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our Assets & Vendor Management solution seamlessly integrates with
            leading enterprise software platforms, ensuring a smooth workflow
            across your entire IT ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <PartnerCard key={partner.name} partner={partner} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Explore Integrations
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(IntegrationPartners);
