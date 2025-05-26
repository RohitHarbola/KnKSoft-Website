import {
  MdWorkOutline,
  MdLocalOffer,
  MdMap,
  MdNotifications,
  MdRestaurant,
  MdInventory,
  MdDeliveryDining,
  MdAnalytics,
  MdStore,
  MdUpdate,
} from "react-icons/md";
import {
  FaSearch,
  FaCreditCard,
  FaRoute,
  FaStar,
  FaClipboardList,
  FaBoxes,
  FaChartBar,
  FaPercentage,
  FaMegaport,
  FaMoneyBillWave,
} from "react-icons/fa";
import { IconType } from "react-icons";

export interface Service {
  id: number;
  title: string;
  image: string;
  tab: number;
  icon: IconType;
}

export const TABS = [
  { id: 1, title: "Customer" },
  { id: 2, title: "Merchant" },
  { id: 3, title: "Delivery" },
  { id: 4, title: "Admin Panel" },
] as const;

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Restaurant Profiles",
    image: "/food-d-app/fda_resturant_profile.png",
    tab: 1,
    icon: MdRestaurant,
  },
  {
    id: 2,
    title: "Search by Category",
    image: "/food-d-app/fda_search_by_category.png",
    tab: 1,
    icon: FaSearch,
  },
  {
    id: 3,
    title: "Discount and Coupons",
    image: "/food-d-app/fda_discount_and_coupons.png",
    tab: 1,
    icon: MdLocalOffer,
  },
  {
    id: 4,
    title: "Seamless Payment",
    image: "/food-d-app/fda_seamless_payment.webp",
    tab: 1,
    icon: FaCreditCard,
  },
  {
    id: 5,
    title: "Order Tracking",
    image: "/food-d-app/fda_order_tracking.png",
    tab: 1,
    icon: FaRoute,
  },
  {
    id: 6,
    title: "Review and Ratings",
    image: "/food-d-app/fda_Reviews_and_Ratings.png",
    tab: 1,
    icon: FaStar,
  },

  // Merchant App Services
  {
    id: 7,
    title: "Order Management",
    image: "/food-d-app/fda_profile_update.png",
    tab: 2,
    icon: FaClipboardList,
  },
  {
    id: 8,
    title: "Manage Order",
    image: "/food-d-app/fda_manager_order.png",
    tab: 2,
    icon: MdInventory,
  },
  {
    id: 9,
    title: "Product Management",
    image: "/food-d-app/fda_product_management.png",
    tab: 2,
    icon: FaBoxes,
  },
  {
    id: 10,
    title: "Delivery Tracking",
    image: "/food-d-app/fda_delivery_tracking.png",
    tab: 2,
    icon: MdDeliveryDining,
  },
  {
    id: 11,
    title: "Sales Report Analysis",
    image: "/food-d-app/fda_sales_report_analysis.png",
    tab: 2,
    icon: FaChartBar,
  },
  {
    id: 12,
    title: "Store Management",
    image: "/food-d-app/fda_payment.png",
    tab: 2,
    icon: MdStore,
  },

  // Service Provider App Services

  {
    id: 13,
    title: "Agent Profile Update",
    image: "/food-d-app/fda_agent_profile_update.png",
    tab: 3,
    icon: MdWorkOutline,
  },

  {
    id: 14,
    title: "Instant Notifications",
    image: "/food-d-app/fda_instant_notification.png",
    tab: 3,
    icon: MdNotifications,
  },

  {
    id: 15,
    title: "Order Accept/Reject Request",
    image: "/food-d-app/fda_Order_accept.png",
    tab: 3,
    icon: FaClipboardList,
  },

  {
    id: 16,
    title: "Route Optimization",
    image: "/food-d-app/fda_route_optimization.png",
    tab: 3,
    icon: MdMap,
  },

  {
    id: 17,
    title: "Monthly Earning Report",
    image: "/food-d-app/fda_monthly_earning.png",
    tab: 3,
    icon: FaMoneyBillWave,
  },

  {
    id: 18,
    title: "Commission Tracking Report",
    image: "/food-d-app/fda_comission_tracking.png",
    tab: 3,
    icon: FaPercentage,
  },

  // Admin Panel Services
  {
    id: 19,
    title: "Manage Restaurant List",
    image: "/food-d-app/fda_manage_restaurant_list.png",
    tab: 4,
    icon: MdRestaurant,
  },

  {
    id: 20,
    title: "Categories Management",
    image: "/food-d-app/fda_categories_management.png",
    tab: 4,
    icon: FaBoxes,
  },

  {
    id: 21,
    title: "App Updates",
    image: "/food-d-app/fda_app_updates.png",
    tab: 4,
    icon: MdUpdate,
  },

  {
    id: 22,
    title: "Revenue Management",
    image: "/food-d-app/fda_Revenue_management.png",
    tab: 4,
    icon: FaMoneyBillWave,
  },

  {
    id: 23,
    title: "Marketing and Promotion",
    image: "/food-d-app/fda_Revenue_management.png",
    tab: 4,
    icon: FaMegaport,
  },

  {
    id: 24,
    title: "Website Earnings",
    image: "/food-d-app/fda_Revenue_management.png",
    tab: 4,
    icon: MdAnalytics,
  },
];
