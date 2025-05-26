import Services from "@/components/WebDevelopment/Services/Services";
import CompanyServe from "@/components/WebDevelopment/CompanyServe/CompanyServe";
import PartnerSection from "@/components/WebDevelopment/PartnerReasons/PartnerReasons";
import {
  partnerReasons,
  sectionContent,
} from "@/components/WebDevelopment/PartnerReasons/PartnerData";
import Strategies from "@/components/WebDevelopment/Strategies/Strategies";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/ui/FAQ";
import { Partners } from "@/components/Partners/Partners";
import BlogSection from "@/components/Home/BlogSection";
import { getBlogPosts } from "@/lib/blog/api";
import { BlogPost } from "@/lib/blog/type";
import OurProcess from "@/components/ui/OurProcess/OurProcess";
import GetInTouch from "@/components/ui/Contact/GetInTouch";
import Hero from "@/components/ui/Hero/Hero";

export default async function CustomWebDevelopment() {
  let blogPosts: BlogPost[] = [];
  try {
    blogPosts = await getBlogPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }

  const customWebDevelopmentHeroProps = {
    badge: "Custom Web Development",
    title: "Transform Your Digital Presence with",
    description:
      "Cutting-edge custom web development solutions tailored to your business needs.\nCreate stunning, responsive websites that drive growth and engagement.\nLeverage latest technologies and best practices for optimal performance.",
    flipWords: [
      "Modern Design",
      "Responsive UI",
      "Custom Solutions",
      "SEO Optimized",
      "Scalable Apps",
    ],
    imageSlides: [
      "/cwd/cwd-slide3.png",
      "/cwd/cwd-slide4.png",
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
    <main>
      <Hero {...customWebDevelopmentHeroProps} />
      <Services />
      <div className="bg-primary/5">
        <CompanyServe />
      </div>
      <Strategies />

      <PartnerSection
        title={sectionContent.title}
        subtitle={sectionContent.subtitle}
        reasons={partnerReasons}
      />
      <Partners />
      <Testimonials />
      <BlogSection posts={blogPosts} />
      <OurProcess />
      <FAQ />
      <GetInTouch />
    </main>
  );
}
