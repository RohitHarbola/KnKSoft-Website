import type { MenuItem } from "./types";

export const NAVIGATION_MENUS = [
  {
    name: "Services",
    subMenuHeading: ["Custom Software Development", "Cloud Services"],
    subMenu: [
      {
        name: "MVP Development",
        desc: "Build scalable minimum viable features",
        href: "/mvp-development",
        iconName: "Code2",
        group: "Custom Software Development",
      },
      {
        name: "Custom Web Development",
        desc: "Modern web applications & solutions",
        href: "/custom-web-development",
        iconName: "Globe",
        group: "Custom Software Development",
      },
      {
        name: "Custom Mobile App Development",
        desc: "Native & cross-platform mobile apps",
        href: "/mobile-app-development",
        iconName: "Smartphone",
        group: "Custom Software Development",
      },
      {
        name: "Bar Code Solutions",
        desc: "Inventory & tracking systems",
        href: "/barcode-solutions",
        iconName: "Barcode",
        group: "Custom Software Development",
      },
      {
        name: "E-Commerce",
        desc: "Custom online store solutions",
        href: "/e-commerce",
        iconName: "ShoppingCart",
        group: "Custom Software Development",
      },
      {
        name: "AWS Development",
        desc: "Custom AWS cloud solutions",
        href: "/aws-development",
        iconName: "Cloud",
        group: "Cloud Services",
      },
      {
        name: "Cloud Architecture",
        desc: "Scalable infrastructure design",
        href: "/cloud-architecture",
        iconName: "Network",
        group: "Cloud Services",
      },
      {
        name: "DevOps Services",
        desc: "CI/CD & automation solutions",
        href: "/devops",
        iconName: "Settings",
        group: "Cloud Services",
      },
      {
        name: "Cloud Security",
        desc: "Advanced security solutions",
        href: "/cloud-security",
        iconName: "Shield",
        group: "Cloud Services",
      },
    ],
    gridCols: 2,
    layout: "grouped",
  },
  {
    name: "Solutions",
    subMenuHeading: ["Business Solutions", "Learning Solutions"],
    subMenu: [
      {
        name: "CRM",
        desc: "Customer Relationship Management",
        href: "/crm",
        iconName: "Users2",
        group: "Business Solutions",
      },
      {
        name: "Assets & Vendor Management",
        desc: "Track assets and manage vendors efficiently",
        href: "/assets-vendor-management",
        iconName: "Building2",
        group: "Business Solutions",
      },
      {
        name: "Expense Management",
        desc: "Track and manage business expenses",
        href: "/expense-management",
        iconName: "Wallet",
        group: "Business Solutions",
      },
      {
        name: "LMS",
        desc: "Learning Management System",
        href: "/lms",
        iconName: "GraduationCap",
        group: "Learning Solutions",
      },
    ],
    gridCols: 2,
    layout: "grouped",
  },

  {
    name: "Marketplace Solutions",
    subMenuHeading: [
      "Beauty & Saloon",
      "Home Services",
      "Handyman App",
      "Car Washing",
      "Taxi App",
      "Food Delivery",
      "Grocery Delivery",
      "On Demand",
    ],
    subMenu: [
      {
        name: "Beauty & Saloon",
        desc: "Beauty services at your doorstep",
        href: "/ondemand-beauty-app-development",
        iconName: "Scissors",
      },
      {
        name: "Home Services",
        desc: "Professional home maintenance services daily",
        href: "/ondemand-home-services-app-development",
        iconName: "Home",
      },
      {
        name: "Handyman App",
        desc: "Expert repairs and installations nearby",
        href: "/handyman-app-development",
        iconName: "Wrench",
      },
      {
        name: "Car Washing",
        desc: "Professional car cleaning services here",
        href: "/car-washing-app-development",
        iconName: "Car",
      },
      {
        name: "Taxi App",
        desc: "Book rides anytime and anywhere",
        href: "/taxi-app-development",
        iconName: "Bus",
      },
      {
        name: "Food Delivery",
        desc: "Order food from local restaurants",
        href: "/food-delivery-app-development",
        iconName: "UtensilsCrossed",
      },
      {
        name: "Grocery Delivery",
        desc: "Fresh groceries delivered to home",
        href: "/grocery-app-development",
        iconName: "ShoppingBasket",
      },
      {
        name: "On Demand",
        desc: "Services available at your convenience",
        href: "/on-demand-app-development",
        iconName: "Zap",
      },
    ],
    gridCols: 2,
  },
  {
    name: "Award & Events",
    href: "/awards-and-events",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
] as const satisfies MenuItem[];

export type NavigationMenu = (typeof NAVIGATION_MENUS)[number];
