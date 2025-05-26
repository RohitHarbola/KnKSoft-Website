import Benefits from "@/components/AssetsVendorManagement/Benefits";
import CallToAction from "@/components/AssetsVendorManagement/CallToAction";
import CaseStudies from "@/components/AssetsVendorManagement/CaseStudies";
import ResourceCenter from "@/components/AssetsVendorManagement/Featuers/Features";
import KeyFeatures from "@/components/AssetsVendorManagement/Featuers/KeyFeatures";
import IntegrationPartners from "@/components/AssetsVendorManagement/IntegrationPartners";
import InteractiveDemo from "@/components/AssetsVendorManagement/InteractiveDemo";
import ServicesOverview from "@/components/AssetsVendorManagement/Services/ServicesOverview";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/ui/FAQ";
import GetInTouch from "@/components/ui/Contact/GetInTouch";
import Hero from "@/components/ui/Hero/Hero";

export default function AssetsVendorManagement() {
  const assetsVendorManagementHeroProps = {
    badge: "IT Asset Management",
    title: "Optimize Your IT Assets with",
    description:
      "Efficient solutions to manage and secure your IT assets. Streamline asset tracking, lifecycle management, and cost optimization.",
    flipWords: [
      "Asset Tracking",
      "Lifecycle Management",
      "Cost Optimization",
      "Compliance",
      "Security",
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
      <Hero {...assetsVendorManagementHeroProps} />
      <ServicesOverview />
      <KeyFeatures />
      <InteractiveDemo />
      <Benefits />
      <CaseStudies />
      <IntegrationPartners />
      <ResourceCenter />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <GetInTouch />
    </main>
  );
}
