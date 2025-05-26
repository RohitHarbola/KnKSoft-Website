"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function GetAll() {
  const [activeTab, setActiveTab] = useState("admin");
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const featuresListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (featuresListRef.current) {
        const containerTop =
          featuresListRef.current.getBoundingClientRect().top;
        const containerHeight = featuresListRef.current.offsetHeight;
        const windowHeight = window.innerHeight;

        if (
          containerTop <= 0 &&
          Math.abs(containerTop) < containerHeight - windowHeight
        ) {
          // Removed unused setScrollPosition call
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabContent = {
    admin: {
      title: "Admin Panel Features",
      description: "Comprehensive admin controls for your salon management",
      image: "/beauty-app/ba_admin_panel.webp",
      features: [
        {
          title: "Dashboard Analytics",

          description:
            "Real-time insights into salon performance, revenue metrics, and customer trends",
        },
        {
          title: "Staff Management",
          description:
            "Comprehensive employee scheduling, performance tracking, and commission management",
        },
        {
          title: "Inventory Control",
          description:
            "Smart inventory tracking with low-stock alerts and automated reordering",
        },
        {
          title: "Financial Reports",
          description:
            "Detailed financial analytics, revenue forecasting, and expense tracking",
        },
        {
          title: "Appointment Management",
          description:
            "Centralized booking system with resource allocation and scheduling optimization",
        },
        {
          title: "Customer Database",
          description:
            "Detailed client profiles with service history, preferences, and loyalty programs",
        },
        {
          title: "Marketing Tools",
          description:
            "Campaign management, promotional offers, and customer engagement tracking",
        },
        {
          title: "Service Management",
          description:
            "Configure services, pricing, duration, and special package offerings",
        },
        {
          title: "Security Controls",
          description:
            "Role-based access control and data protection for sensitive information",
        },
      ],
    },
    customer: {
      title: "Customer App Features",
      description: "User-friendly interface for your salon customers",
      image: "/beauty-app/ba_adm_buty.webp",
      features: [
        {
          title: "User Registration",
          description:
            "Enable easy user onboarding with a streamlined registration process",
        },
        {
          title: "User Profiles",
          description: "Personalized profiles to save preferences and history",
        },
        {
          title: "Selecting Services",
          description: "Browse and choose from a wide range of beauty services",
        },
        {
          title: "Bookings",
          description: "Easy appointment scheduling and management",
        },
        {
          title: "Payments",
          description: "Secure payment processing with multiple options",
        },
        {
          title: "Review",
          description: "Share feedback and ratings for services",
        },
        {
          title: "Subscription",
          description: "Access to premium features and special offers",
        },
        {
          title: "In-App Calls and Chat",
          description: "Direct communication with service providers",
        },
        {
          title: "Push Notifications",
          description: "Stay updated with appointment reminders and offers",
        },
      ],
    },
    service: {
      title: "Service Provider Features",
      description: "Efficient tools for service providers",
      image: "/beauty-app/ba_admin_panel.webp",
      features: [
        {
          title: "Appointment Management",

          description:
            "Handle daily schedules and client appointments efficiently",
        },
        {
          title: "Service Portfolio",
          description:
            "Showcase your services, prices and expertise to attract clients",
        },
        {
          title: "Client Management",
          description:
            "Track client history, preferences and maintain detailed profiles",
        },
        {
          title: "Real-time Updates",
          description:
            "Get instant notifications for new bookings and schedule changes",
        },
        {
          title: "Revenue Analytics",
          description:
            "Track earnings, popular services and business performance",
        },
        {
          title: "Inventory Management",
          description: "Monitor and manage your beauty products and supplies",
        },
        {
          title: "Staff Management",
          description: "Manage employee schedules, assignments and performance",
        },
        {
          title: "Marketing Tools",
          description:
            "Promote services, run campaigns and manage loyalty programs",
        },
        {
          title: "Payment Processing",
          description:
            "Handle payments, invoices and financial transactions securely",
        },
      ],
    },
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-primary to-primary/90">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white">
            Get All In One
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white/90">
            Beauty and Salon App Development Solution
          </h3>
        </motion.div>

        {/* Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {Object.entries(tabContent).map(([key], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className={`transition-all duration-300 ${
                activeTab === key
                  ? "bg-red-500 shadow-lg shadow-red-500/25"
                  : "bg-background hover:bg-white/10"
              } border-2 ${
                activeTab === key
                  ? "border-blue-400"
                  : "border-white/10 hover:border-white/20"
              } rounded-xl px-4 py-4 text-center`}
              onMouseEnter={() => setActiveTab(key)}
            >
              <h4 className="text-lg sm:text-xl font-semibold text-foreground">
                {key === "admin"
                  ? "Admin Panel"
                  : key === "customer"
                  ? "Customer App"
                  : "Service Provider Panel"}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Features List */}
          <div className="order-2 lg:order-1">
            <motion.h3
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl sm:text-2xl font-bold text-white mb-6"
            >
              {tabContent[activeTab as keyof typeof tabContent].title}
            </motion.h3>

            <div
              ref={featuresListRef}
              className="space-y-3 h-[calc(100vh-10px)] lg:sticky lg:top-24 overflow-y-auto scrollbar-hide"
              style={{
                scrollBehavior: "smooth",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
            >
              {tabContent[activeTab as keyof typeof tabContent].features.map(
                (feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-r from-[#1a2234] to-[#1e293b] 
                             rounded-xl p-4 hover:from-[#1e293b] hover:to-[#242f44] 
                             transition-all duration-300 cursor-pointer
                             border border-white/5 hover:border-white/10
                             shadow-lg shadow-black/10"
                    onClick={() =>
                      setExpandedFeature(
                        expandedFeature === index ? null : index
                      )
                    }
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-white font-medium text-base sm:text-lg">
                          {feature.title}
                        </h4>
                        {expandedFeature === index && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="text-gray-400 text-sm mt-2 leading-relaxed"
                          >
                            {feature.description}
                          </motion.p>
                        )}
                      </div>
                      <div className="text-blue-400">
                        <svg
                          className={`w-5 h-5 transform transition-transform duration-300 ${
                            expandedFeature === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>

          {/* Image */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 lg:sticky lg:top-24"
          >
            <div className="relative">
              <Image
                src={tabContent[activeTab as keyof typeof tabContent].image}
                width={500}
                height={500}
                alt="Interface Preview"
                className="w-full h-auto object-contain max-w-md max-h-[650px]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
