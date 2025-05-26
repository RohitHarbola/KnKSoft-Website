import { Partners } from "@/components/Partners/Partners";
import Testimonials from "@/components/Testimonials/Testimonials";
import GetInTouch from "@/components/ui/Contact/GetInTouch";
import FAQ from "@/components/ui/FAQ";
import Hero from "@/components/ui/Hero/Hero";
import OurProcess from "@/components/ui/OurProcess/OurProcess";

export default function OnDemandAppDevelopment() {
  const onDemandAppDevelopmentHeroProps = {
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
    <div>
      <Hero {...onDemandAppDevelopmentHeroProps} />
      <Partners />
      <OurProcess />
      <Testimonials />
      <FAQ />
      <GetInTouch />
    </div>
  );
}
