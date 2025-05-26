import CTA from "@/components/ECommerce/CTA/CTA";
import AdvancedFeatures from "@/components/ECommerce/Features/AdvancedFeatures";
import EcommerceFeatures from "@/components/ECommerce/Features/EcommerceFeatures";
import Hero from "@/components/ECommerce/Hero/Hero";
import Statistics from "@/components/ECommerce/Stats/Statistics";
import OurProject from "@/components/MobileAppDevelopment/OurProject/OurProject";
import { Partners } from "@/components/Partners/Partners";
import Testimonials from "@/components/Testimonials/Testimonials";
import GetInTouch from "@/components/ui/Contact/GetInTouch";
import FAQ from "@/components/ui/FAQ";
import OurProcess from "@/components/ui/OurProcess/OurProcess";

export default function eCommerce() {
  return (
    <div>
      <Hero />
      <EcommerceFeatures />
      <CTA />
      <AdvancedFeatures />
      <Statistics />
      <OurProject />
      <OurProcess />
      <Partners />
      <Testimonials />
      <FAQ />
      <GetInTouch />
    </div>
  );
}
