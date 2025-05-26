import { Project, Category } from "@/types/portfolio";

export const categories: Category[] = [
  { id: "all", name: "ALL" },
  { id: "food-delivery", name: "Food Delivery" },
  { id: "ecommerce", name: "Ecommerce App" },
  { id: "moving-delivery", name: "Moving & Delivery" },
  { id: "services", name: "Services" },
  { id: "health-fitness", name: "Health & Fitness" },
  { id: "education", name: "Education" },
  { id: "entertainment", name: "Entertainment" },
  { id: "travel", name: "Travel" },
  { id: "other", name: "Other" },
];

export const projects: Project[] = [
  {
    id: "food-delivery",
    title: "EXPO CITY",
    subtitle: "Food Delivery App",
    logo: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-18f002c/www.apptunix.com/wp-content/uploads/2023/06/expo-city.svg",
    bgColor: "rgba(255, 220, 141, 0.56)",
    description:
      "A food delivery app tailored specifically for Expo City in Dubai, offering convenient and efficient food ordering and delivery services within the city's grounds.",
    image: "/portfolio/expo-city.webp",
    platforms: ["iOS", "Android"],
    country: {
      name: "UAE",
      flag: "🇦🇪",
    },
    downloads: "10k+",
    appLinks: {
      appStore: "#",
      playStore: "#",
    },
  },
  {
    id: "travel",
    title: "DINEIN",
    subtitle: "Food Delivery App",
    logo: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-18f002c/www.apptunix.com/wp-content/uploads/2022/03/dinein.svg",
    bgColor: "rgba(177,210,239,.56)",
    description:
      "A food delivery app tailored specifically for Expo City in Dubai, offering convenient and efficient food ordering and delivery services within the city's grounds.",
    image: "/portfolio/dine-in.webp",
    platforms: ["iOS", "Android"],
    country: {
      name: "UAE",
      flag: "🇦🇪",
    },
    downloads: "10k+",
    appLinks: {
      appStore: "#",
      playStore: "#",
    },
  },
  {
    id: "ecommerce",
    title: "NAMSHI",
    subtitle: "Shopping App",
    logo: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-18f002c/www.apptunix.com/wp-content/uploads/2022/03/shooping-app.svg",
    bgColor: "rgba(255, 220, 141, 0.56)",
    description:
      "A food delivery app tailored specifically for Expo City in Dubai, offering convenient and efficient food ordering and delivery services within the city's grounds.",
    image: "/portfolio/namshi-shopping.webp",
    platforms: ["iOS", "Android"],
    country: {
      name: "UAE",
      flag: "🇦🇪",
    },
    downloads: "10k+",
    appLinks: {
      appStore: "#",
      playStore: "#",
    },
  },
  {
    id: "services",
    title: "BEE",
    subtitle: "Food Delivery App",
    logo: "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-b52e15a/www.apptunix.com/wp-content/uploads/2023/09/bee-deliver-lg.svg",
    bgColor: "rgba(249,249,249,.95)",
    description:
      "A food delivery app tailored specifically for Expo City in Dubai, offering convenient and efficient food ordering and delivery services within the city's grounds.",
    image: "/portfolio/bee-deliver-desk.webp",
    platforms: ["iOS", "Android"],
    country: {
      name: "UAE",
      flag: "🇦🇪",
    },
    downloads: "10k+",
    appLinks: {
      appStore: "#",
      playStore: "#",
    },
  },
];
