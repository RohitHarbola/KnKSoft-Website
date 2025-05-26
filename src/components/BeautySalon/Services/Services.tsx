import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Services = () => {
  const servicesData = [
    {
      name: "Hair Salon Booking App Development",
      features: [
        "Hair Salon Scheduling Software",
        "Hair Salon Appointment Software",
        "Standalone Beauty Salon App Development",
        "Futuristic Salon App Development",
      ],
      description:
        "Our hair salon booking app empowers your clients to schedule their visits conveniently, while you manage your salon operations effortlessly.",
    },
    {
      name: "Beauty & Salon Aggregator",
      features: [
        "Multiple Salon Listings",
        "Compare Services",
        "Integrated Reviews",
        "Location-based Search",
      ],
      description:
        "Connect customers with various beauty services through a single platform.",
    },
    {
      name: "Nail Salon App Development",
      features: [
        "Service Catalog",
        "Real-time Scheduling",
        "Artist Portfolio",
        "Loyalty Program",
      ],
      description:
        "Enhance your nail salon business with our specialized application.",
    },
    {
      name: "Home Service Apps for Salon",
      features: [
        "Mobile Service Booking",
        "Service Provider Matching",
        "Real-time Tracking",
        "Secure Payment Integration",
      ],
      description:
        "Bring salon services directly to customers&apos; homes with our mobile solution.",
    },
    {
      name: "Appointment Scheduling Software",
      features: [
        "Smart Scheduling",
        "Automated Reminders",
        "Calendar Management",
        "Multi-staff Support",
      ],
      description:
        "Streamline your salon&apos;s appointment management with our advanced scheduling system.",
    },
    {
      name: "Spa Booking App Development",
      features: [
        "Treatment Selection",
        "Therapist Booking",
        "Package Management",
        "Digital Payment",
      ],
      description:
        "Create a seamless spa booking experience for your wellness center.",
    },
    {
      name: "On-Demand Beauty App Development",
      features: [
        "Instant Booking",
        "Service Customization",
        "Beauty Professional Matching",
        "In-app Payments",
      ],
      description:
        "Connect customers with beauty services on-demand through our innovative platform.",
    },
    {
      name: "Salon Scheduling Software",
      features: [
        "Resource Management",
        "Staff Scheduling",
        "Customer Database",
        "Analytics Dashboard",
      ],
      description:
        "Optimize your salon operations with our comprehensive scheduling solution.",
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
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our Exceptional Salon App Development Services
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our salon and beauty app development services extend to various facets
          of the beauty and wellness industry, ensuring your business thrives in
          the digital era.
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
              src="/beauty-app/bp_our_exp1.webp"
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
                className={`group relative cursor-pointer p-4 rounded-xl transition-all duration-300 ${
                  activeService.name === service.name
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
                    className={`text-3xl transition-transform duration-300 ${
                      activeService.name === service.name ? "rotate-90" : ""
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
