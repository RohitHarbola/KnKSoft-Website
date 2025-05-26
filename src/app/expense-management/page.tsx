import Benefits from "@/components/ExpenseManagement/Benefits";
import CaseStudies from "@/components/ExpenseManagement/CaseStudies";
import CTA from "@/components/ExpenseManagement/CTA";
import FAQ from "@/components/ExpenseManagement/FAQ";
import HowItWorks from "@/components/ExpenseManagement/HowItWorks";
import IntegrationPartners from "@/components/ExpenseManagement/IntegrationPartners";
import KeyFeatures from "@/components/ExpenseManagement/KeyFeatures";
import ROICalculator from "@/components/ExpenseManagement/ROICalculator";
import SupportOptions from "@/components/ExpenseManagement/SupportOptions";
import Testimonials from "@/components/Testimonials/Testimonials";
import GetInTouch from "@/components/ui/Contact/GetInTouch";
import Hero from "@/components/ui/Hero/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expense Management Solution | Your IT Company",
  description:
    "Streamline your expense management process with our cutting-edge solution tailored for IT companies.",
};

export default function ExpenseManagementPage() {
  const expenseManagementHeroProps = {
    badge: "Smart Expense Management",
    title: "Simplify Your Business Expenses with",
    description:
      "Automate expense tracking and reporting with our intelligent management solution.\nGain real-time visibility into spending patterns and streamline approvals.\nEnsure compliance and reduce operational costs with advanced analytics.",
    flipWords: [
      "Expense Tracking",
      "Smart Automation",
      "Policy Compliance",
      "Budget Control",
      "Real-time Reports",
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
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero {...expenseManagementHeroProps} />
      <KeyFeatures />
      <HowItWorks />
      <Benefits />
      <IntegrationPartners />
      <ROICalculator />
      <CaseStudies />
      <SupportOptions />
      <CTA />
      <Testimonials />
      <FAQ />
      <GetInTouch />
    </main>
  );
}
