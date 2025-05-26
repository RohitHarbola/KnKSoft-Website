"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/Button/Button";
import * as Icons from "lucide-react";
const features = [
  {
    icon: "https://www.valueappz.com/images/New-theme-assets/web.svg",
    title: "AWS Cloud Infrastructure",
    description:
      "Leverage the power of Amazon Web Services (AWS) for robust, scalable hosting ensuring your home service app runs smoothly even during peak booking hours with automatic scaling capabilities.",
  },
  {
    icon: "https://www.valueappz.com/images/New-theme-assets/dashboard.svg",
    title: "24/7 Technical Support",
    description:
      "Get priority technical support with response times under 72 hours. Our dedicated support team ensures your home service platform operates without interruption, addressing issues promptly.",
  },
  {
    icon: "https://www.valueappz.com/images/New-theme-assets/technology.svg",
    title: "99.99% Uptime Guarantee",
    description:
      "Experience exceptional reliability with our 99.99% uptime guarantee. Your home service marketplace stays operational round the clock, ensuring service providers and customers can connect anytime.",
  },
  {
    icon: "https://www.valueappz.com/images/New-theme-assets/software.svg",
    title: "Secure Payment Gateway",
    description:
      "Implement bank-grade security for payment processing with PCI DSS compliance. Multiple payment options and encrypted transactions ensure safe and convenient payments for your users.",
  },
  {
    icon: "https://www.valueappz.com/images/New-theme-assets/product-development.svg",
    title: "Real-time Tracking",
    description:
      "Offer real-time service provider tracking, appointment scheduling, and booking management. Keep your customers informed with automated notifications and status updates.",
  },
  {
    icon: "https://www.valueappz.com/images/New-theme-assets/ux-design-icon.svg",
    title: "Scalable Architecture",
    description:
      "Built with microservices architecture that scales with your business. Handle thousands of concurrent bookings and users without compromising on performance or user experience.",
  },
];

const handleScrollToContact = () => {
  const contactSection = document.getElementById("get-in-touch");
  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-2 md:mb-8 lg:mb-12"
        >
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Why Choose Our&nbsp;
            <span className="text-primary block mt-2">
              Home Service Platform?
            </span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            We deliver a robust, secure, and scalable home service marketplace
            solution that powers your business growth with cutting-edge
            technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground font-thin">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 container"
        >
          <div className="relative rounded-2xl overflow-hidden bg-primary/5">
            <div
              className="relative px-6 py-6 lg:py-12"
              style={{
                backgroundImage: 'url("/images/cta-bg.webp")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="max-w-2xl relative z-10 flex flex-col items-center sm:items-start">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-primary">Partner with the Leading</span>
                  <br />
                  Home Service App Developers
                </h3>
                <p className="text-base md:text-lg text-gray-700 mb-8">
                  Get a free technical proposal for your project
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full text-sm sm:text-base"
                  rightIcon={<Icons.ArrowRight />}
                  onClick={handleScrollToContact}
                >
                  Our Engagement Model
                </Button>
              </div>

              <div className="hidden lg:block absolute top-0 lg:top-5 right-0 h-full">
                <Image
                  src="/images/cta-arrow.svg"
                  alt="CTA Arrow"
                  width={120}
                  height={80}
                  className="absolute left-0 top-24 z-10"
                />

                <Image
                  src="/home/home_cta.webp"
                  alt="Professional consultant"
                  width={500}
                  height={500}
                  className="object-contain h-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
