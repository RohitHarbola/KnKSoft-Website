import Architecture from "@/components/CloudArchitecture/Architecture";
import Migration from "@/components/CloudArchitecture/Migration";
import SecuritySection from "@/components/CloudArchitecture/Security";
import Services from "@/components/CloudArchitecture/Services/Services";
import Solutions from "@/components/CloudArchitecture/Solutions";
import GetInTouch from "@/components/ui/Contact/GetInTouch";
import Hero from "@/components/ui/Hero/Hero";

export default function CloudArchitecture() {
  const cloudArchitectureHeroProps = {
    badge: "Cloud Architecture Solutions",
    title: "Transform Your Business with",
    description:
      "Expert cloud architecture design and implementation services.\nOptimize performance, scalability and cost-efficiency with our cloud-native solutions.\nLeverage our expertise in AWS, Azure and Google Cloud platforms.",
    flipWords: [
      "Scalable Design",
      "Cost Optimization",
      "High Availability",
      "Cloud Migration",
      "Managed Services",
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
      <Hero {...cloudArchitectureHeroProps} />
      <Architecture />
      <SecuritySection />
      <div className="bg-primary/5">
        <Migration />
      </div>
      <Services />
      <Solutions />
      <GetInTouch />
    </div>
  );
}
