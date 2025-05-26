"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Services = () => {
  const servicesData = [
    {
      name: "On-Demand Service Booking",
      features: [
        "Real-time Scheduling",
        "Service Provider Matching",
        "Instant Price Estimation",
        "Multiple Service Categories",
      ],
      description:
        "Empower users to book home services instantly with our robust booking system that matches them with qualified service providers in their area.",
    },
    {
      name: "Service Provider Management",
      features: [
        "Provider Onboarding",
        "Skill Assessment",
        "Background Verification",
        "Performance Tracking",
      ],
      description:
        "Comprehensive tools to manage service providers, ensuring quality service delivery and maintaining high customer satisfaction.",
    },
    {
      name: "Customer Management",
      features: [
        "User Profiles",
        "Service History",
        "Favorite Providers",
        "Review & Rating System",
      ],
      description:
        "Enhanced customer experience with personalized profiles, service tracking, and feedback management system.",
    },
    {
      name: "Payment Solutions",
      features: [
        "Secure Payment Gateway",
        "Multiple Payment Options",
        "Split Payments",
        "Automated Invoicing",
      ],
      description:
        "Integrated payment solutions that offer convenience and security for both customers and service providers.",
    },
    {
      name: "Service Tracking",
      features: [
        "Real-time Location Tracking",
        "Service Status Updates",
        "ETA Calculation",
        "Route Optimization",
      ],
      description:
        "Advanced tracking features that keep customers informed about their service status and provider location in real-time.",
    },
    {
      name: "Analytics Dashboard",
      features: [
        "Business Intelligence",
        "Performance Metrics",
        "Revenue Analytics",
        "Customer Insights",
      ],
      description:
        "Powerful analytics tools to monitor business performance, track growth, and make data-driven decisions.",
    },
    {
      name: "Marketing Tools",
      features: [
        "Promotional Campaigns",
        "Referral Programs",
        "Push Notifications",
        "Loyalty Rewards",
      ],
      description:
        "Built-in marketing features to grow your user base and increase customer retention through targeted campaigns.",
    },
    {
      name: "Admin Control Panel",
      features: [
        "Centralized Management",
        "Service Category Control",
        "Dispute Resolution",
        "Quality Monitoring",
      ],
      description:
        "Comprehensive admin dashboard for complete control over operations, services, and user management.",
    },
  ];

  const [activeService, setActiveService] = useState(servicesData[0]);
  const middleColumnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (middleColumnRef.current) {
        const containerTop =
          middleColumnRef.current.getBoundingClientRect().top;
        const containerHeight = middleColumnRef.current.offsetHeight;
        const windowHeight = window.innerHeight;

        // Calculate the scroll position relative to the container
        if (
          containerTop <= 0 &&
          Math.abs(containerTop) < containerHeight - windowHeight
        ) {
          // Removed unused scroll position state
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
          Home Service App
          <span className="text-primary block mt-2">Development Solutions</span>
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
          Transform your home service business with our cutting-edge app development solutions. We create powerful platforms that connect service providers with customers, streamline operations, and drive growth.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[25%_40%_30%] gap-8 max-w-6xl mx-auto">
        {/* Left Column - Phone Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="w-full max-w-[300px] mx-auto lg:ml-auto">
            <Image
              src="https://d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/sites/5/2022/08/22093405/hms_img25.png"
              alt="Salon App Interface"
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Middle Column - Modified for smooth scrolling */}
        <motion.div
          ref={middleColumnRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[calc(100vh-200px)] lg:sticky lg:top-24"
          style={{
            overflowY: "auto",
            scrollBehavior: "smooth",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <div className="space-y-2">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                className={`group relative cursor-pointer p-4 rounded-xl transition-all duration-300 ${activeService.name === service.name
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-50"
                  }`}
                onMouseEnter={() => setActiveService(service)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg lg:text-xl font-semibold">
                    {service.name}
                  </span>
                  <IoIosArrowDroprightCircle
                    className={`text-3xl transition-transform duration-300 ${activeService.name === service.name ? "rotate-90" : ""
                      }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Modified to stick */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:sticky lg:top-24 p-6 rounded-xl bg-white shadow-md border border-gray-200 h-fit"
        >
          <motion.p
            key={activeService.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-gray-700 mb-4"
          >
            {activeService.description}
          </motion.p>

          <div className="mb-4 lg:mb-6">
            {activeService.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center space-x-3 space-y-2 lg:space-y-4"
              >
                <div className="w-4 h-4 rounded-full bg-blue-100 border-2 border-blue-500" />
                <span className="text-gray-800">{feature}</span>
              </motion.div>
            ))}
          </div>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-500 text-white px-8 py-4 rounded-full flex items-center justify-between"
            >
              <span className="font-medium">Let&apos;s Get in Touch!</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
