"use client";
import Image from "next/image";
import { FC, useState } from "react";
const WhyChooseUs: FC = () => {
  const categories = [
    { id: "delivery", label: "Delivery" },
    { id: "pricing", label: "Pricing" },
    { id: "tech-stack", label: "Tech-stack" },
    { id: "integration", label: "Integration" },
    { id: "customization", label: "Customization" },
    { id: "support", label: "Support" },
  ];

  const contentMap: Record<
    string,
    {
      title: string;
      features: string[];
      image: string;
    }
  > = {
    delivery: {
      title: "We provide success-driven solutions tailored for entrepreneurs.",
      features: [
        "Quick Turnaround Time",
        "Launch in 2 Weeks",
        "Pre-built Workflows and Integrations",
        "Complete Access to User Database",
      ],
      image: "/food-d-app/fda-delivery.jpg",
    },
    pricing: {
      title: "Flexible pricing solutions for your business needs",
      features: [
        "Competitive Rates",
        "Transparent Pricing",
        "Custom Package Options",
        "No Hidden Fees",
      ],
      image: "/food-d-app/fda-pricing.png",
    },

    "tech-stack": {
      title: "We use the latest technology to build your app",
      features: [
        "React Native",
        "Node.js",
        "Express.js",
        "MongoDB",

        "AWS",
        "Docker",
        "Kubernetes",
      ],
      image: "/food-d-app/fda-tech-stack.png",
    },
    integration: {
      title: "We integrate your app with the latest technology",
      features: ["React Native", "Node.js", "Express.js"],
      image: "/food-d-app/fda-Integration.png",
    },
    customization: {
      title: "We customize your app to your business needs",
      features: ["React Native", "Node.js", "Express.js"],
      image: "/food-d-app/fda-customization.png",
    },
    support: {
      title: "We support your app to your business needs",
      features: ["React Native", "Node.js", "Express.js"],
      image: "/food-d-app/fda-support.png",
    },
  };

  const [activeCategory, setActiveCategory] = useState("delivery");

  return (
    <div className="container px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
          How Does On-Demand &nbsp;
          <span className="text-primary mt-2 block">
            Grocery Delivery App Development Solution Works?
          </span>
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
          Knksoftech Infotech provides pre-built app solutions for all parties
          involved in the grocery delivery business – customers, grocery
          delivery drivers, and the admin.
        </p>
      </div>

      <div className="flex flex-col md:flex-row rounded-2xl max-w-6xl mx-auto overflow-hidden border border-gray-100">
        {/* Left Side Categories */}
        <div className="md:w-1/3 bg-gray-100 relative">
          {categories.map((category) => (
            <div
              key={category.id}
              onMouseEnter={() => setActiveCategory(category.id)}
              className={`p-4 cursor-pointer transition-all duration-300 relative ${
                activeCategory === category.id
                  ? "bg-[#ff4d4d] text-white"
                  : "bg-pink-50 text-gray-700 hover:bg-pink-100"
              }`}
            >
              <h3 className="font-semibold text-lg">{category.label}</h3>
              {activeCategory === category.id && (
                <div
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 
                                    border-t-[12px] border-t-transparent
                                    border-r-[16px] border-r-[#ffffff]
                                    border-b-[12px] border-b-transparent"
                />
              )}
            </div>
          ))}
        </div>

        {/* Right Side Content - Updated Layout */}
        <div className="md:w-3/4 bg-white p-6">
          {contentMap[activeCategory] && (
            <div className="space-y-6">
              {/* Image Section */}
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src={contentMap[activeCategory].image}
                  alt={`${activeCategory} dashboard`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title Section */}
              <h3 className="text-2xl font-bold text-gray-800">
                {contentMap[activeCategory].title}
              </h3>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contentMap[activeCategory].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
