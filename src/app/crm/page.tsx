import { Metadata } from "next";
import FeatureShowcase from "@/components/CRM/Features/FeatureShowcase";
import CaseStudies from "@/components/CRM/CaseStudies";
import IntegrationPartners from "@/components/CRM/IntegrationPartners";
import ProductTour from "@/components/CRM/ProductTour";
import Services from "@/components/CRM/Services/Services";
import Testimonials from "@/components/CRM/Testimonials";
import FAQ from "@/components/CRM/FAQ";
import Features from "@/components/CRM/Features/Features";
import GetInTouch from "@/components/ui/Contact/GetInTouch";
import Hero from "@/components/ui/Hero/Hero";

export const metadata: Metadata = {
  title: "Advanced CRM Business Solutions | Your IT Company",
  description:
    "Discover our cutting-edge CRM business solutions with advanced features, seamless integrations, and proven success stories. Transform your customer relationships today.",
};

export default function CRMBusinessSolution() {
  const crmHeroProps = {
    badge: "CRM Solutions",
    title: "Transform Your Customer Relationships with",
    description:
      "Streamline your customer interactions with our powerful CRM solutions.\nBoost sales efficiency and customer satisfaction with data-driven insights.\nScale your business with automated workflows and seamless integrations.",
    flipWords: [
      "Lead Management",
      "Sales Automation",
      "Analytics",
      "Customer Support",
      "Team Collaboration",
    ],
    imageSlides: [
      "https://www.valueappz.com/images/New-theme-assets/graphic-tabs-home1.png",
      "https://www.suffescom.com/assets/img/new-suff-img/mobile-app-development-company-in-dubai-banner-app.webp",
      "https://www.valueappz.com/images/New-theme-assets/graphic-tabs-home3.png",
      "https://www.valueappz.com/images/New-theme-assets/graphic-tabs-home2g.png",
      "https://www.suffescom.com/assets/img/new-suff-img/suffescom-metaverse-development-banner1.webp",
    ],
    teamMembers: [
      {
        id: 1,
        name: "Brijesh Joshi",
        designation: "CEO",
        image: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      },
      {
        id: 2,
        name: "Manoj Kumar",
        designation: "Full Stack Developer",
        image: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
      },
      {
        id: 3,
        name: "Mike Brown",
        designation: "Lead Architect",
        image: "https://api.uifaces.co/our-content/donated/1H_7AxP0.jpg",
      },
    ],
  };
  return (
    <main className="min-h-screen">
      <Hero {...crmHeroProps} />
      <Features />
      <FeatureShowcase />
      <CaseStudies />
      <IntegrationPartners />
      <ProductTour />
      <Services />
      <Testimonials />
      <FAQ />
      <GetInTouch />
    </main>
  );
}
