import Hero from "@/components/ui/Hero/Hero";
import Services from "@/components/Services/Services";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Portfolio from "@/components/Portfolio/Portfolio";
import Testimonials from "@/components/Testimonials/Testimonials";
import { MarketplaceSection } from "@/components/Marketplace/MarketplaceSection";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import OurProcess from "@/components/ui/OurProcess/OurProcess";
import { Partners } from "@/components/Partners/Partners";
import FAQ from "@/components/ui/FAQ";
import { getBlogPosts } from "@/lib/blog/api";
import { BlogPost } from "@/lib/blog/type";
import BlogSection from "@/components/Home/BlogSection";
import GetInTouch from "@/components/ui/Contact/GetInTouch";

export default async function Home() {
  let blogPosts: BlogPost[] = [];
  try {
    blogPosts = await getBlogPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }

  const homeHeroProps = {
    title: "Professional IT Solutions for",
    description:
      "Comprehensive IT services including custom software development, cloud solutions, enterprise systems, and digital transformation. From MVF development to full-scale enterprise solutions, we deliver excellence.",
    flipWords: [
      "Mobile App Development",
      "Custom Development",
      "Cloud Architecture",
      "Digital Transformation",
      "DevOps Excellence",
    ],
    imageSlides: [
      "/mbl-app-dev/mad-hero-slide1.png",
      "/cwd/cwd-hero-slide5.png",
      "/banners/cloud-archi.png",
      "/home/hp-vision4.png",
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
        name: "Harapriya Nag",
        designation: "Head HR",
        image: "https://api.uifaces.co/our-content/donated/1H_7AxP0.jpg",
      },
    ],
  };

  return (
    <main>
      <Hero {...homeHeroProps} />
      <MarketplaceSection />
      <WhoWeAre />
      <WhyChooseUs />
      <Portfolio />
      <Services />
      <Partners />
      <Testimonials />
      <BlogSection posts={blogPosts} />
      <OurProcess />
      <FAQ />
      <GetInTouch />
    </main>
  );
}
