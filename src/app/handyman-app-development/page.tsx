import Benefits from "@/components/HandyManApp/Benifits";
import HowWorks from "@/components/HandyManApp/HowWorks";
import Services from "@/components/HandyManApp/Services/Services";
import { Partners } from "@/components/Partners/Partners";
import Portfolio from "@/components/Portfolio/Portfolio";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/ui/FAQ";
import OurProcess from "@/components/ui/OurProcess/OurProcess";
import { getBlogPosts } from "@/lib/blog/api";
import { BlogPost } from "@/lib/blog/type";
import BlogSection from "@/components/Home/BlogSection";
import GetInTouch from "@/components/ui/Contact/GetInTouch";
import Hero from "@/components/ui/Hero/Hero";

export default async function HandymanAppDevelopment() {
  let blogPosts: BlogPost[] = [];
  try {
    blogPosts = await getBlogPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }

  const handymanAppDevelopmentHeroProps = {
    badge: "Handyman App Development",
    title: "Transform Your Service Business with",
    description:
      "Custom handyman app development solutions to digitize and grow your service business.\nStreamline bookings, manage jobs, and increase customer satisfaction with our feature-rich platform.\nGet started with our expert development team to build your perfect handyman app.",
    flipWords: [
      "Job Management",
      "Smart Booking",
      "Service Tracking",
      "Payment Solutions",
      "Customer Support",
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
      <Hero {...handymanAppDevelopmentHeroProps} />
      <Benefits />
      <Services />
      <Portfolio />
      <HowWorks />
      <Partners />
      <Testimonials />
      <BlogSection posts={blogPosts} />
      <OurProcess />
      <FAQ />
      <GetInTouch />
    </div>
  );
}
