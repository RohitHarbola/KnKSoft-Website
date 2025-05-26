"use client";
import { Button } from "@/components/ui/Button/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import * as Icons from "lucide-react";

export default function CTASection() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("get-in-touch");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 container px-4"
    >
      <div className="relative rounded-2xl overflow-hidden">
        <div
          className="relative px-6 py-6 lg:py-12 lg:px-12"
          style={{
            backgroundImage: 'url("/images/cta-bg.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-2xl relative z-10 flex flex-col items-center sm:items-start">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary">Let&apos;s Build</span> the Future
              of
              <br />
              Technology Together
            </h3>
            <p className="text-base text-center sm:text-left md:text-lg text-gray-700 mb-8">
              Let our team provide you with a no-cost, no-commitment
              <br className="hidden sm:block" />
              technical proposal for your next enterprise custom project.
            </p>
            <Button
              variant="outline"
              size="lg"
              rightIcon={<Icons.ArrowRight />}
              onClick={handleScrollToContact}
            >
              Our Engagement Model
            </Button>
          </div>

          <div className="hidden lg:block absolute top-0 lg:top-5 right-0 h-full">
            <Image
              src="/images/cta-arrow.svg"
              alt="CTA Arrow"
              width={120}
              height={80}
              className="absolute left-0 top-24 z-10"
            />

            <Image
              src="/images/home_cta.webp"
              alt="Professional consultant"
              width={500}
              height={500}
              className="object-contain h-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
