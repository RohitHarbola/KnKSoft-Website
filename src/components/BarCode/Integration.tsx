"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/Button/Button";
import { ArrowRightIcon } from "lucide-react";

const integrations = [
  { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
  { name: "WooCommerce", logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg" },
  { name: "SAP", logo: "https://cdn.worldvectorlogo.com/logos/sap-2.svg" },
  { name: "Oracle", logo: "https://cdn.worldvectorlogo.com/logos/oracle-6.svg" },
  { name: "Salesforce", logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" },
  { name: "Microsoft", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg" },
];

export default function Integration() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Seamless Integrations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Connect with your favorite platforms and tools
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square relative">
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  fill
                  className="object-contain p-4 filter dark:invert"
                />
              </div>
              <p className="text-center text-sm font-medium text-gray-600 dark:text-gray-300 mt-4">
                {integration.name}
              </p>
            </motion.div>
          ))}
        </div>
        <Button variant="primary" className="mt-12 mx-auto" size={"lg"} rightIcon={<ArrowRightIcon />}>View All Integrations</Button>
      </div>
    </section>
  );
}