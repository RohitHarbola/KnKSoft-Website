import { Service } from "@/types/Services";

export const servicesData: Service[] = [
  {
    id: "healthcare",
    number: "01",
    icon: "Heart",
    title: "Healthcare & Medical",
    description: "Custom healthcare solutions ensuring HIPAA compliance and seamless patient care management.",
    features: [
      {
        icon: "Clipboard",
        title: "Electronic Health Records",
        description: "Secure EHR systems with patient portal integration",
      },
      {
        icon: "Calendar",
        title: "Appointment Management",
        description: "Advanced scheduling and telemedicine solutions",
      },
      {
        icon: "Activity",
        title: "Medical Practice Management",
        description: "Comprehensive clinic and hospital management systems",
      },
      {
        icon: "Shield",
        title: "Healthcare Analytics",
        description: "HIPAA-compliant data analytics and reporting",
      },
    ],
  },
  {
    id: "fintech",
    number: "02",
    icon: "DollarSign",
    title: "Finance & Banking",
    description: "Secure and scalable fintech solutions for modern banking and financial services.",
    features: [
      {
        icon: "CreditCard",
        title: "Digital Banking",
        description: "Modern online banking and mobile payment solutions",
      },
      {
        icon: "Shield",
        title: "Secure Transactions",
        description: "PCI DSS compliant payment processing systems",
      },
      {
        icon: "TrendingUp",
        title: "Investment Platforms",
        description: "Trading and portfolio management applications",
      },
      {
        icon: "Lock",
        title: "Risk Management",
        description: "Advanced fraud detection and prevention systems",
      },
    ],
  },
  {
    id: "ecommerce",
    number: "03",
    icon: "ShoppingCart",
    title: "E-Commerce & Retail",
    description: "Scalable e-commerce solutions for modern retail businesses.",
    features: [
      {
        icon: "Store",
        title: "Online Marketplaces",
        description: "Custom B2B and B2C e-commerce platforms",
      },
      {
        icon: "Smartphone",
        title: "Mobile Commerce",
        description: "Native mobile shopping experiences",
      },
      {
        icon: "Box",
        title: "Inventory Management",
        description: "Real-time stock tracking and automation",
      },
      {
        icon: "BarChart",
        title: "Sales Analytics",
        description: "Advanced reporting and business intelligence",
      },
    ],
  },
  {
    id: "education",
    number: "04",
    icon: "BookOpen",
    title: "Education & E-Learning",
    description: "Interactive learning management systems and educational platforms.",
    features: [
      {
        icon: "Monitor",
        title: "Virtual Classrooms",
        description: "Real-time collaboration and learning tools",
      },
      {
        icon: "File",
        title: "Course Management",
        description: "Comprehensive content delivery systems",
      },
      {
        icon: "Award",
        title: "Student Assessment",
        description: "Advanced testing and progress tracking",
      },
    ],
  },
  {
    id: "logistics",
    number: "05",
    icon: "Truck",
    title: "Logistics & Transportation",
    description: "End-to-end supply chain and transportation management solutions.",
    features: [
      {
        icon: "Map",
        title: "Fleet Management",
        description: "Real-time tracking and route optimization",
      },
      {
        icon: "Package",
        title: "Warehouse Management",
        description: "Inventory and fulfillment automation",
      },
      {
        icon: "Clock",
        title: "Delivery Management",
        description: "Last-mile delivery optimization",
      },
      {
        icon: "Layers",
        title: "Supply Chain Visibility",
        description: "End-to-end shipment tracking solutions",
      },
    ],
  },
  {
    id: "real-estate",
    number: "06",
    icon: "Home",
    title: "Real Estate & Property",
    description: "Innovative solutions for property management and real estate operations.",
    features: [
      {
        icon: "Search",
        title: "Property Listings",
        description: "Advanced property search and management",
      },
      {
        icon: "Users",
        title: "Client Management",
        description: "CRM for real estate agents and brokers",
      },
      {
        icon: "FileText",
        title: "Document Management",
        description: "Digital contract and document handling",
      },
    ],
  },
];
