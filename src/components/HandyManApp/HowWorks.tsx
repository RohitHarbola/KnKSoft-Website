import React from "react";
import Image from "next/image";

const HowWorks = () => {
  const steps = [
    {
      id: 1,
      icon: "/handyman-app/hmp-icon-service-listing1.png",
      title: "Service Listing",
      description:
        "List all the handyman services like plumbing, carpentry, and more, along with descriptions and rates.",

      isUp: true,
    },
    {
      id: 2,
      icon: "/handyman-app/hmp-icon-registration1.png",
      title: "Professional Registration",
      description:
        "Let skilled professionals create profiles and showcase their expertise, certifications, and availability.",

      isUp: false,
    },
    {
      id: 3,
      icon: "/handyman-app/hmp-icon-booking1.png",
      title: "User Booking",
      description:
        "Empower users to book a service through the app with desired time slot and location.",

      isUp: true,
    },
    {
      id: 4,
      icon: "/handyman-app/hmp-icon-service-delivery1.png",
      title: "Service Delivery & Earnings",
      description:
        "Receive requests, accept/decline, perform the service, and receive payment via the app.",

      isUp: false,
    },
  ];

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4 lg:mb-8">
          How Does Our&nbsp;
          <span className="text-primary mt-2 block">Handyman App Works</span>
        </h2>
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
              <div className="flex justify-center mb-6">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={64}
                  height={64}
                  className="text-red-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">
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

export default HowWorks;
