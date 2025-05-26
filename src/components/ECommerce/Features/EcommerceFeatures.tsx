"use client";

import { motion } from "framer-motion";
import { ShoppingCart, CreditCard, Truck, RotateCcw, Percent, Smartphone } from 'lucide-react';

const features = [
  {
    title: "Orders & Checkout",
    icon: ShoppingCart,
    description: [
      "Get features like abandoned cart recovery, guest checkout, order tracking etc.",
      "Customers can use in-built store credit system & reorder any product"
    ],
    iconBg: "bg-blue-500"
  },
  {
    title: "Mcommerce Ready",
    icon: Smartphone,
    description: [
      "Get mobile commerce ready websites to maximize mobile users conversions",
      "Mobile visitor tracking, SMS & mobile push notification features"
    ],
    iconBg: "bg-red-500"
  },
  {
    title: "Multiple Payments",
    icon: CreditCard,
    description: [
      "Accept multiple payments like credit-debit cards, wallets, PayPal, Amazon Pay",
      "Integrated SSL certification & super secure payment gateways"
    ],
    iconBg: "bg-black"
  },
  {
    title: "Shipping & Logistics",
    icon: Truck,
    description: [
      "Absolute zero set up cost & tied up with multiple global delivery partners",
      "Shipping label generation and printing through system"
    ],
    iconBg: "bg-blue-500"
  },
  {
    title: "Easy Returns & Refunds",
    icon: RotateCcw,
    description: [
      "Build customers confidence by offering easy return & refund system",
      "Besides admin, sellers can also manage refund at their end"
    ],
    iconBg: "bg-red-500"
  },
  {
    title: "Discounts & Coupons",
    icon: Percent,
    description: [
      "Run multiple email campaigns for discounts and promotional deals on products",
      "Delight customers with combos, bulk discounts and customer loyalty programs"
    ],
    iconBg: "bg-black"
  }
];

export default function EcommerceFeatures() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Powerful Features for Your&nbsp;
            <span className="text-primary mt-2 block">E-commerce Store</span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            Everything you need to create an exceptional online shopping experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`${feature.iconBg} p-3 rounded-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <ul className="space-y-2">
                    {feature.description.map((desc, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 