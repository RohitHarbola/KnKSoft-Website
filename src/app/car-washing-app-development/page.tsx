import AppModels from "@/components/CarWashing/AppModels/AppModels";
import Architecture from "@/components/CarWashing/Architecture";
import OneWaySolutions from "@/components/CarWashing/Features/OneWaySolutions";
import HowWorks from "@/components/CarWashing/HowWorks";
import { Partners } from "@/components/Partners/Partners";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/ui/FAQ";
import OurProcess from "@/components/ui/OurProcess/OurProcess";
import { BlogPost } from "@/lib/blog/type";
import { getBlogPosts } from "@/lib/blog/api";
import BlogSection from "@/components/Home/BlogSection";
import GetInTouch from "@/components/ui/Contact/GetInTouch";
import Hero from "@/components/ui/Hero/Hero";

export default async function CarWashingAppDevelopment() {
  let blogPosts: BlogPost[] = [];
  try {
    blogPosts = await getBlogPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }

  const carWashingAppDevelopmentHeroProps = {
    badge: "Car Washing App Development",
    title: "Transform Your Car Wash Business with",
    description:
      "Custom car wash app development solutions to digitize and scale your business. Streamline bookings, manage operations, and delight customers with a feature-rich mobile app. Get started with our expert development team today.",
    flipWords: [
      "Mobile Apps",
      "Digital Solutions",
      "Smart Booking",
      "Easy Payments",
      "Customer Service",
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
      <Hero {...carWashingAppDevelopmentHeroProps} />
      <AppModels />
      <OneWaySolutions />
      <HowWorks />
      <Architecture />
      <Partners />
      <Testimonials />
      <BlogSection posts={blogPosts} />
      <OurProcess />
      <FAQ />
      <GetInTouch />
    </div>
  );
}
