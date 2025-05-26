import {
  BiCalendar,
  BiSearch,
  BiLocationPlus,
  BiCreditCard,
  BiListUl,
  BiUser,
} from "react-icons/bi";
import {
  MdWorkOutline,
  MdSchedule,
  MdAttachMoney,
  MdMap,
  MdChat,
} from "react-icons/md";
import {
  FaUsers,
  FaFolderOpen,
  FaChartLine,
  FaMoneyBillWave,
  FaBalanceScale,
  FaCog,
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
  { id: 1, title: "Customer " },
  { id: 2, title: "Service Provider " },
  { id: 3, title: "Admin Panel" },
] as const;

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Service Categories",
    image: "/handyman-app/hmp-service-categories.png",
    tab: 1,
    icon: BiCalendar,
  },
  {
    id: 2,
    title: "Booking and Scheduling",
    image: "/handyman-app/hmp-booking.png",
    tab: 1,
    icon: BiSearch,
  },
  {
    id: 3,
    title: "Service Search & Filtering",
    image: "/handyman-app/hmp-service-search.png",
    tab: 1,
    icon: BiLocationPlus,
  },
  {
    id: 4,
    title: "Service Request Tracking",
    image: "/handyman-app/hmp-service-request.webp",
    tab: 1,
    icon: BiCreditCard,
  },
  {
    id: 5,
    title: "Push Notifications",
    image: "/handyman-app/hmp-push-notifications.png",
    tab: 1,
    icon: BiListUl,
  },
  {
    id: 6,
    title: "Rating and Reviews",
    image: "/handyman-app/hmp-ratings.png",
    tab: 1,
    icon: BiUser,
  },

  // Service Provider App Services
  {
    id: 7,
    title: "Update Task Status",
    image: "/handyman-app/hmp-task1.png",
    tab: 2,
    icon: MdWorkOutline,
  },
  {
    id: 8,
    title: "Complete User Details",
    image: "/handyman-app/hmp-user1.png",
    tab: 2,
    icon: MdSchedule,
  },

  {
    id: 9,
    title: "Edit and Update the Profile",
    image: "/handyman-app/hmp-edit1.png",
    tab: 2,
    icon: MdAttachMoney,
  },
  {
    id: 10,
    title: "New Booking  Updates",
    image: "/handyman-app/hmp-booking1.png",
    tab: 2,
    icon: MdMap,
  },
  {
    id: 11,
    title: "Service History and  Tracing",
    image: "/handyman-app/hmp-history1.webp",
    tab: 2,
    icon: MdChat,
  },
  {
    id: 12,
    title: "Service Schedule",
    image: "/handyman-app/hmp-schedule1.png",
    tab: 2,
    icon: FaFolderOpen,
  },

  // Admin Panel Services
  {
    id: 13,
    title: "Dashboard and Analytics",
    image: "/handyman-app/hmp-cms.png",
    tab: 3,
    icon: FaUsers,
  },
  {
    id: 14,
    title: "User and Vendor Management",
    image: "/handyman-app/hmp-tracking2.png",
    tab: 3,
    icon: FaFolderOpen,
  },
  {
    id: 15,
    title: "Content Management System",
    image: "/handyman-app/hmp-marketing2.png",
    tab: 3,
    icon: FaChartLine,
  },
  {
    id: 16,
    title: "Customer Tracking",
    image: "/handyman-app/hmp-tracking2.png",
    tab: 3,
    icon: FaMoneyBillWave,
  },
  {
    id: 17,
    title: "Marketing Campaigns",
    image: "/handyman-app/hmp-marketing2.png",
    tab: 3,
    icon: FaBalanceScale,
  },
  {
    id: 18,
    title: "Loyalty Program Management",
    image: "/handyman-app/hmp-loyalty2.png",
    tab: 3,
    icon: FaCog,
  },
];
