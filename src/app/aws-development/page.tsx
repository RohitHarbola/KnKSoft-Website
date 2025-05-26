import { Features } from "@/components/AWSDevelopment/Features/Features";
import { Process } from "@/components/AWSDevelopment/Process";
import { Services } from "@/components/AWSDevelopment/Services/Services";
import { Stats } from "@/components/AWSDevelopment/Stats";
import { Testimonials } from "@/components/AWSDevelopment/Testimonials";
import { TechnologyStack } from "@/components/AWSDevelopment/TechnologyStack";
import { CaseStudies } from "@/components/AWSDevelopment/CaseStudies";
import { Expertise } from "@/components/AWSDevelopment/Expertise";
import { DevOpsServices } from "@/components/AWSDevelopment/DevOpsServices";
import GetInTouch from "@/components/ui/Contact/GetInTouch";
import Hero from "@/components/ui/Hero/Hero";

export default function AWSDevelopment() {
  const awsDevelopmentHeroProps = {
    badge: "AWS Cloud Solutions",
    title: "Enhance Your Cloud Security with",
    description:
      "Protect your data with our AWS cloud security solutions. Advanced threat detection, compliance management, and 24/7 monitoring.",
    flipWords: [
      "Protection",
      "Monitoring",
      "Detection",
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
    <div>
      <Hero {...awsDevelopmentHeroProps} />
      <Features />
      <Services />
      <DevOpsServices />
      <Stats />
      <Process />
      <TechnologyStack />
      <CaseStudies />
      <Expertise />
      <Testimonials />
      <GetInTouch />
    </div>
  );
}
