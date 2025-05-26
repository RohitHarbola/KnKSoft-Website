import Services from "@/components/GroceryDelivery/Services/Services";
import WhyChooseUs from "@/components/GroceryDelivery/WhyChooseUs";
import BlogSection from "@/components/Home/BlogSection";
import { Partners } from "@/components/Partners/Partners";
import Testimonials from "@/components/Testimonials/Testimonials";
import GetInTouch from "@/components/ui/Contact/GetInTouch";
import FAQ from "@/components/ui/FAQ";
import Hero from "@/components/ui/Hero/Hero";
import OurProcess from "@/components/ui/OurProcess/OurProcess";
import { getBlogPosts } from "@/lib/blog/api";
import { BlogPost } from "@/lib/blog/type";

export default async function GroceryAppDevelopment() {
  let blogPosts: BlogPost[] = [];
  try {
    blogPosts = await getBlogPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }

  const groceryAppDevelopmentHeroProps = {
    badge: "Grocery App Development",
    title: "Transform Your Grocery Business with",
    description:
      "Custom grocery delivery app development solutions to digitize your retail business.\nStreamline ordering, inventory management and delivery operations with our smart features.\nBoost customer satisfaction with real-time tracking and secure payment integration.",
    flipWords: [
      "Mobile Apps",
      "Smart Ordering",
      "Fast Delivery",
      "Inventory Control",
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
      <Hero {...groceryAppDevelopmentHeroProps} />
      <Services />
      <WhyChooseUs />
      <Partners />
      <Testimonials />
      <BlogSection posts={blogPosts} />
      <OurProcess />
      <FAQ />
      <GetInTouch />
    </div>
  );
}
