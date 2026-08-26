import BlogSection from "@/components/Home/BlogSection";
import { Partners } from "@/components/Partners/Partners";
import AdminPanel from "@/components/TaxiApp/AppModels/AdminPanel";
import AppModels from "@/components/TaxiApp/AppModels/AppModels";
import CustomerApp from "@/components/TaxiApp/AppModels/CustomerApp";
import Dashboard from "@/components/TaxiApp/AppModels/Dashboard";
import WhyChooseUs from "@/components/TaxiApp/WhyChooseUs";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/ui/FAQ";
import OurProcess from "@/components/ui/OurProcess/OurProcess";
import { BlogPost } from "@/lib/blog/type";
import { getBlogPosts } from "@/lib/blog/api";
import GetInTouch from "@/components/ui/Contact/GetInTouch";
import Hero from "@/components/ui/Hero/Hero";

export const dynamic = "force-dynamic";

export default async function TaxiAppDevelopment() {
  let blogPosts: BlogPost[] = [];
  try {
    blogPosts = await getBlogPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }

  const taxiAppDevelopmentHeroProps = {
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
    imageSlides: ["/taxi-app/taxi-app-banner-img.png"],
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
      <Hero {...taxiAppDevelopmentHeroProps} />
      <AppModels />
      <CustomerApp />
      <Dashboard />
      <AdminPanel />
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
