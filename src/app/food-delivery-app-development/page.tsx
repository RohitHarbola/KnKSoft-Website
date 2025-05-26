import BusinessModels from "@/components/FoodDelivery/BusinessModels/BusinessModels";
import { GrowBusiness } from "@/components/FoodDelivery/BusinessModels/GrowBusiness";
import Services from "@/components/FoodDelivery/Services/Services";
import WhyChooseUs from "@/components/FoodDelivery/WhyChooseUs/WhyChooseUs";
import WhyLaunching from "@/components/FoodDelivery/WhyLaunching";
import BlogSection from "@/components/Home/BlogSection";
import { Partners } from "@/components/Partners/Partners";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/ui/FAQ";
import OurProcess from "@/components/ui/OurProcess/OurProcess";
import { getBlogPosts } from "@/lib/blog/api";
import { BlogPost } from "@/lib/blog/type";
import GetInTouch from "@/components/ui/Contact/GetInTouch";
import Hero from "@/components/ui/Hero/Hero";

export default async function FoodDeliveryAppDevelopment() {
  let blogPosts: BlogPost[] = [];
  try {
    blogPosts = await getBlogPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }
  const foodDeliveryAppDevelopmentHeroProps = {
    badge: "Food Delivery App Development",
    title: "Launch Your Food Delivery Business with",
    description:
      "Custom food delivery app development solutions to digitize your restaurant business.\nStreamlined ordering, real-time tracking, and seamless payment integration.\nScale your food delivery operations with our feature-rich mobile apps.",
    flipWords: [
      "Mobile Apps",
      "Online Ordering",
      "Fast Delivery",
      "Smart Features",
      "Customer Service",
    ],
    imageSlides: [
      "/banners/food-delivery1.png",
      "/banners/food-delivery2.png",
      "/banners/food-delivery3.png",
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
      <Hero {...foodDeliveryAppDevelopmentHeroProps} />
      <BusinessModels />
      <Services />
      <WhyLaunching />
      <GrowBusiness />
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
