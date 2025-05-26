import DigitalFrontier from "@/components/MobileAppDevelopment/DigitalFrontier/DigitalFrontier";
import Innovate from "@/components/MobileAppDevelopment/Innovate/Innovate";
import Process from "@/components/MobileAppDevelopment/Process/Process";
import OurProject from "@/components/MobileAppDevelopment/OurProject/OurProject";
import TechStackTabs from "@/components/ui/TechStackTabs";
import { Partners } from "@/components/Partners/Partners";
import FAQ from "@/components/ui/FAQ";
import Services from "@/components/MobileAppDevelopment/Services/Services";
import GetInTouch from "@/components/ui/Contact/GetInTouch";
import OurProcess from "@/components/ui/OurProcess/OurProcess";
import Hero from "@/components/ui/Hero/Hero";

export default function MobileAppDevelopment() {
  const mobileAppDevelopmentHeroProps = {
    badge: "Enterprise-Grade Security Solutions",
    title: "Secure Your Cloud Infrastructure with",
    description:
      "Comprehensive cloud security solutions to protect your business data and applications. Advanced threat detection, compliance management, and 24/7 monitoring.",
    flipWords: [
      "Advanced Protection",
      "Real-time Monitoring",
      "Threat Detection",
      "Compliance Management",
      "Zero Trust Security",
    ],
    imageSlides: [
      "/mbl-app-dev/mad-hero-slide1.png",
      "/mbl-app-dev/mad-hero-slide2.png",
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
    <div>
      <Hero {...mobileAppDevelopmentHeroProps} />
      <Services />
      <Process />
      <div className="bg-primary/5">
        <DigitalFrontier />
      </div>
      <OurProject />
      <TechStackTabs />
      <Innovate />
      <Partners />
      <OurProcess />
      <FAQ />
      <GetInTouch />
    </div>
  );
}
