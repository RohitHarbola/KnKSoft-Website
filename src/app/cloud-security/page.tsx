import CaseStudies from "@/components/CloudSecurity/CaseStudies";
import ComplianceSection from "@/components/CloudSecurity/ComplianceSection";
import FAQ from "@/components/CloudSecurity/FAQ";
import Features from "@/components/CloudSecurity/Features/Features";
import SecurityArchitecture from "@/components/CloudSecurity/SecurityArchitecture";
import SecurityFeatures from "@/components/CloudSecurity/SecurityFeatures";
import SecurityMetrics from "@/components/CloudSecurity/SecurityMetrics";
import Services from "@/components/CloudSecurity/Services/Services";
import ThreatProtection from "@/components/CloudSecurity/ThreatProtection";
import GetInTouch from "@/components/ui/Contact/GetInTouch";
import Hero from "@/components/ui/Hero/Hero";

export default function CloudSecurity() {
  const cloudSecurityHeroProps = {
    badge: "Cloud Security Solutions",
    title: "Protect Your Digital Assets with",
    description:
      "Next-gen cloud security to safeguard your business infrastructure.\nAdvanced threat detection and real-time monitoring for peace of mind.\nCompliance management and zero-trust security for complete protection.",
    flipWords: [
      "Threat Detection",
      "Data Protection",
      "Access Control",
      "Compliance",
      "Monitoring",
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
      <Hero {...cloudSecurityHeroProps} />
      <Features />
      <Services />
      <SecurityFeatures />
      <ComplianceSection />
      <SecurityArchitecture />
      <CaseStudies />
      <ThreatProtection />
      <SecurityMetrics />
      <FAQ />
      <GetInTouch />
    </div>
  );
}
