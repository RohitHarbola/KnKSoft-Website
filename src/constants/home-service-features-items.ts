// import { LucideIcon } from 'lucide-react';

export interface FeaturesItem {
  name: string;
  desc: string;
  iconName: keyof typeof import("lucide-react");
  image: string;
}

export interface FeaturesTab {
  id: string;
  label: string;
  items: FeaturesItem[];
  tabImage: string;
}

export const FEATURES_TABS: FeaturesTab[] = [
  {
    id: "customer-app",
    label: "Customer App",
    tabImage: "/home-service/hs_customer_app.png",
    items: [
      {
        name: "Simple & Secure Login",
        desc: "Multiple login options including social media integration, OTP verification, and secure authentication for hassle-free user onboarding.",
        iconName: "UserCheck",
        image: "/images/home-service/customer-login.webp",
      },
      {
        name: "Advanced Booking System",
        desc: "Flexible scheduling system allowing users to book services in advance with customizable time slots and service requirements.",
        iconName: "Calendar",
        image: "/images/home-service/booking-system.webp",
      },
      {
        name: "Real-Time Tracking",
        desc: "Live tracking feature enabling customers to monitor service provider location and estimated arrival time in real-time.",
        iconName: "MapPin",
        image: "/images/home-service/tracking.webp",
      },
      {
        name: "Service History & Reviews",
        desc: "Comprehensive booking history with the ability to rate and review service providers, maintaining service quality standards.",
        iconName: "History",
        image: "/images/home-service/history.webp",
      },
    ],
  },
  {
    id: "service-provider-app",
    label: "Service Provider App",
    tabImage: "/home-service/hs_customer_app.png",
    items: [
      {
        name: "Job Management",
        desc: "Efficient system for service providers to manage incoming requests, schedule appointments, and track ongoing services.",
        iconName: "ClipboardList",
        image: "/images/home-service/job-management.webp",
      },
      {
        name: "Earnings Dashboard",
        desc: "Detailed earnings tracker with commission breakdown, payment history, and automated payment processing system.",
        iconName: "DollarSign",
        image: "/images/home-service/earnings.webp",
      },
      {
        name: "Schedule Management",
        desc: "Flexible calendar system allowing providers to set availability, manage bookings, and handle multiple appointments.",
        iconName: "Calendar",
        image: "/images/home-service/schedule.webp",
      },
      {
        name: "Service Area Settings",
        desc: "Customizable service area configuration with radius setting and multiple location support for service providers.",
        iconName: "Map",
        image: "/images/home-service/service-area.webp",
      },
    ],
  },
  {
    id: "admin-dashboard",
    label: "Admin Dashboard",
    tabImage: "/home-service/hs_customer_app.png",
    items: [
      {
        name: "Provider Management",
        desc: "Comprehensive tools for managing service providers including verification, performance monitoring, and quality control.",
        iconName: "Users",
        image: "/images/home-service/provider-management.webp",
      },
      {
        name: "Revenue Analytics",
        desc: "Advanced analytics dashboard with detailed insights on earnings, popular services, and business performance metrics.",
        iconName: "BarChart",
        image: "/images/home-service/analytics.webp",
      },
      {
        name: "Service Category Control",
        desc: "Flexible service category management system with pricing controls and service customization options.",
        iconName: "Layout",
        image: "/images/home-service/category-control.webp",
      },
      {
        name: "Dispute Resolution",
        desc: "Efficient system for handling customer complaints, refunds, and dispute resolution between users and service providers.",
        iconName: "Shield",
        image: "/images/home-service/dispute.webp",
      },
    ],
  },
  {
    id: "advanced-features",
    label: "Advanced Features",
    tabImage: "/home-service/hs_customer_app.png",
    items: [
      {
        name: "Multi-language Support",
        desc: "Built-in support for multiple languages and localization to serve diverse user bases across different regions.",
        iconName: "Globe",
        image: "/images/home-service/language.webp",
      },
      {
        name: "Payment Integration",
        desc: "Secure payment gateway integration supporting multiple payment methods including cards, digital wallets, and cash.",
        iconName: "CreditCard",
        image: "/images/home-service/payment.webp",
      },
      {
        name: "Push Notifications",
        desc: "Real-time push notification system for booking updates, offers, and important service-related communications.",
        iconName: "Bell",
        image: "/images/home-service/notifications.webp",
      },
      {
        name: "Analytics & Reporting",
        desc: "Comprehensive reporting system with customizable dashboards for tracking business metrics and service performance.",
        iconName: "PieChart",
        image: "/images/home-service/analytics-reporting.webp",
      },
    ],
  },
];
