import React from "react";
import { FaUtensils, FaStore, FaBuilding, FaDollarSign } from "react-icons/fa";

const BusinessModels = () => {
  const steps = [
    {
      id: 1,
      icon: <FaUtensils className="w-16 h-16 text-red-500" />,
      title: "Single Restaurant Owners",
      description:
        "Take your business online and grow with our comprehensive ordering and delivery apps.",
      isUp: true,
    },
    {
      id: 2,
      icon: <FaStore className="w-16 h-16 text-red-500" />,
      title: "Marketplace Solution",
      description:
        "Build a food delivery app like Doordash, Grubhub, Zomato by aggregating local businesses.",
      isUp: false,
    },
    {
      id: 3,
      icon: <FaBuilding className="w-16 h-16 text-red-500" />,
      title: "Multi-location Franchise",
      description:
        "Manage online orders and delivery for all your franchises and chain stores through a single dashboard.",
      isUp: true,
    },
    {
      id: 4,
      icon: <FaDollarSign className="w-16 h-16 text-red-500" />,
      title: "Subscription-Based Model",
      description:
        "Create a food delivery app to promote your unique food idea and brand.",
      isUp: false,
    },
  ];

  return (
    <section className="py-10 px-4 container">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4 lg:mb-8">
          Various Food &nbsp;
          <span className="text-primary mt-2">Business Models We Serve</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Whether you need an app for your restaurant or want to start your food
          marketplace like Uber Eats, we&apos;ve got you covered!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`relative ${
              step.isUp ? "-mt-6" : "mt-6"
            } transition-all duration-300`}
          >
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl">
              <div className="flex justify-center mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                {step.title}
              </h3>
              <p className="font-light text-center text-sm">
                {step.description}
              </p>
              <div className="absolute -top-6 left-6 w-10 h-10 rounded-full flex items-center justify-center text-[45px] text-[#343643] opacity-5 font-extrabold">
                {step.id}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessModels;
