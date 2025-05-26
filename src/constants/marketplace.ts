// import { LucideIcon } from 'lucide-react';

export interface MarketplaceItem {
  name: string;
  desc: string;
  iconName: keyof typeof import("lucide-react");
  image: string;
}

export interface MarketplaceTab {
  id: string;
  label: string;
  items: MarketplaceItem[];
  tabImage: string;
}

export const MARKETPLACE_TABS: MarketplaceTab[] = [
  {
    id: "product-order",
    label: "Product Order & Delivery",
    tabImage: "/home/hp-vision1.png",
    items: [
      {
        name: "Food & Grocery Delivery",
        desc: "Launch a leading on-demand ordering and delivery platform for food, grocery, meat, and daily needs like DoorDash and Uber Eats that includes Driver Apps.",
        iconName: "UtensilsCrossed",
        image: "/images/marketplace/food-delivery.webp",
      },
      {
        name: "Cosmetics & Baby Products",
        desc: "Be part of the fastest-growing eCommerce sector by launching a branded app and website to sell beauty, cosmetics, and baby products with highly engaging apps.",
        iconName: "ShoppingBag",
        image: "/images/marketplace/cosmetics.webp",
      },
      {
        name: "Flowers & Gift Delivery",
        desc: "Develop a user-friendly on-demand flower and gifts marketplace to provide a great experience for ordering and delivering beautiful arrangements.",
        iconName: "Gift",
        image: "/images/marketplace/flowers.webp",
      },
      {
        name: "B2B Product Marketplaces",
        desc: "Launch a feature-rich platform for complex B2B dealings that need negotiation, contracts, and bulk orders",
        iconName: "Building2",
        image: "/images/marketplace/b2b.webp",
      },
    ],
  },
  {
    id: "on-demand-services",
    label: "On Demand Services",
    tabImage: "/home/hp-vision2.png",
    items: [
      {
        name: "Home & Handyman Services",
        desc: "Launch an on-demand home services platform like Thumbtack or TaskRabbit with our complete solution, which includes a branded customer app, website, PWA, service provider app, and admin panel",
        iconName: "Bus",
        image: "/images/marketplace/taxi.webp",
      },
      {
        name: "Coaching & Consulting Services",
        desc: "Start and grow your Coaching and Consulting Services business with a highly interactive mobile-friendly platform providing virtual online classes, selling video content, and much more.",
        iconName: "Car",
        image: "/images/marketplace/car-wash.webp",
      },
      {
        name: "Beauty & Wellness Marketplace",
        desc: "Launch an on demand hyperlocal personal care marketplace providing services like beauty, wellness, fitness, etc. on your own or by aggregating the professional experts.",
        iconName: "Truck",
        image: "/images/marketplace/fleet-management.webp",
      },
      {
        name: "Events & Ticketing",
        desc: "Launch an events management marketplace like Eventbrite, Meetup with our comprehensive solution to host, market and sell tickets for local entertainment events, exhibitions, conferences, etc.",
        iconName: "Truck",
        image: "/images/marketplace/fleet-management.webp",
      },
    ],
  },
  {
    id: "ride-management-solutions",
    label: "Ride Management Solutions",
    tabImage: "/home/hp-vision3.png",
    items: [
      {
        name: "On-Demand Taxi booking",
        desc: "Build and launch a feature-rich Uber-like service without much investment, offering a variety of cars, bikes or any other modes of travel.",
        iconName: "Home",
        image: "/images/marketplace/home-maintenance.webp",
      },
      {
        name: "Care Pool",
        desc: "Launch the most profitable platform, allowing friends and colleagues to offer a ride or get a ride at the most reasonable price.",
        iconName: "Wrench",
        image: "/images/marketplace/handyman-services.webp",
      },
      {
        name: "Rent A Cab",
        desc: "Launch a car renting platform earning commissions on P2P transactions between the host and rider",
        iconName: "Sparkles",
        image: "/images/marketplace/cleaning-services.webp",
      },
      {
        name: "Hire A Driver",
        desc: "Launch or hire a chauffeur/driver at convenience for on-demand trips, whether for a day, a week, or a month.",
        iconName: "Sparkles",
        image: "/images/marketplace/cleaning-services.webp",
      },
    ],
  },
  {
    id: "unique-marketplaces",
    label: "Unique Marketplaces",
    tabImage: "/home/hp-vision4.png",
    items: [
      {
        name: "Tours & Travel",
        desc: "Create a robust travel booking platform offering a variety of tours, packages, airline, train, bus bookings, etc",
        iconName: "Scissors",
        image: "/images/marketplace/salon-booking.webp",
      },
      {
        name: "Classifieds & Directory Listings",
        desc: "Establish a robust classifieds and directory listings marketplace that offers advanced search and secure transactions.",
        iconName: "Heart",
        image: "/images/marketplace/spa-wellness.webp",
      },
      {
        name: "Vertical Marketplaces",
        desc: "Develop a vertical marketplace with specialized categories to meet specific industry needs.",
        iconName: "Dumbbell",
        image: "/images/marketplace/fitness-services.webp",
      },
      {
        name: "Buy & Sell Used",
        desc: "Build a platform like Facebook Marketplace and enable people to buy and sell things the easiest way",
        iconName: "Dumbbell",
        image: "/images/marketplace/fitness-services.webp",
      },
    ],
  },
];
