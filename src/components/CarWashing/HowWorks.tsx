"use client";
import { FC, useState } from "react";
import {
  FaUserCircle,
  FaCalendarCheck,
  FaCreditCard,
  FaMoneyBillWave,
  FaClipboardCheck,
} from "react-icons/fa";

interface CategoryContent {
  title: string;
  description: string;
  icon: JSX.Element;
}

const HowWorks: FC = () => {
  const categories = [
    { id: "customer", label: "Customer App" },
    { id: "washer", label: "Car Washer App" },
    { id: "admin", label: "Admin Dashboard" },
  ];

  const contentMap: Record<string, CategoryContent[]> = {
    customer: [
      {
        title: "User Profile",
        description:
          "Users who need car washing services can easily register on the app to create profiles using unique login details.",
        icon: <FaUserCircle className="text-2xl" />,
      },
      {
        title: "Easy Bookings",
        description:
          "Users can book car washing services anytime using their real-time location. Book it for the same day or schedule it for later, it is your choice.",
        icon: <FaCalendarCheck className="text-2xl" />,
      },
      {
        title: "Payment Summary",
        description:
          "Using a customer app, one can easily see and manage the payment summary for the car washing services received.",
        icon: <FaCreditCard className="text-2xl" />,
      },
      {
        title: "Multiple Payments",
        description:
          "Enable customers to choose their favorite payment method and pay for the services conveniently.",
        icon: <FaMoneyBillWave className="text-2xl" />,
      },
      {
        title: "Wash Status",
        description:
          "Real-time update of all car washing status, including all those already done, in progress, and schedules for future via your app.",
        icon: <FaClipboardCheck className="text-2xl" />,
      },
    ],
    washer: [
      {
        title: "Washer Profile",
        description:
          "Car washers can create their professional profiles, add their experience, and manage their availability schedule.",
        icon: <FaUserCircle className="text-2xl" />,
      },
      {
        title: "Job Notifications",
        description:
          "Receive instant notifications for new car washing requests in your area and accept jobs that fit your schedule.",
        icon: <FaCalendarCheck className="text-2xl" />,
      },
      {
        title: "Earnings Track",
        description:
          "Keep track of your daily, weekly, and monthly earnings from completed car washing services in one place.",
        icon: <FaCreditCard className="text-2xl" />,
      },
      {
        title: "Service History",
        description:
          "Access complete history of services provided, including customer ratings and feedback for improvement.",
        icon: <FaClipboardCheck className="text-2xl" />,
      },
      {
        title: "Route Optimization",
        description:
          "Get optimized routes to customer locations and manage multiple bookings efficiently throughout the day.",
        icon: <FaMoneyBillWave className="text-2xl" />,
      },
    ],
    admin: [
      {
        title: "User Management",
        description:
          "Efficiently manage both customers and car washers, verify profiles, and handle user-related issues.",
        icon: <FaUserCircle className="text-2xl" />,
      },
      {
        title: "Booking Overview",
        description:
          "Monitor all ongoing, upcoming, and completed bookings in real-time across the platform.",
        icon: <FaCalendarCheck className="text-2xl" />,
      },
      {
        title: "Revenue Analytics",
        description:
          "Access detailed financial reports, revenue statistics, and transaction history for better business insights.",
        icon: <FaCreditCard className="text-2xl" />,
      },
      {
        title: "Service Management",
        description:
          "Configure service types, pricing, and special offers while monitoring service quality and standards.",
        icon: <FaClipboardCheck className="text-2xl" />,
      },
      {
        title: "Performance Metrics",
        description:
          "Track key performance indicators, user satisfaction rates, and overall platform efficiency.",
        icon: <FaMoneyBillWave className="text-2xl" />,
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("customer");

  return (
    <div className="container px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
          How Does On-Demand &nbsp;
          <span className="text-primary mt-2 block">
            Car Washing App Development Solution Works?
          </span>
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
          ValueAppz provides pre-built app solutions for all parties involved in
          the car washing business – customers, car washers, and the admin.
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

        {/* Right Side Content */}
        <div className="md:w-2/3">
          <div className="grid gap-6">
            {contentMap[activeCategory]?.map((content, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-[#ff4d4d]">{content.icon}</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    {content.title}
                  </h4>
                  <p className="font-light">{content.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
