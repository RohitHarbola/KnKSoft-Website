"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/Button/Button";
import * as Icons from "lucide-react";
const features = [
  {
    icon: "/home/why-icon1.svg",
    title: "Product Development Culture",
    description:
      "Value-logic is leading the future of software development with agile software development methodologies, efficient project management practices, and a dedicated product manager to live business requirements into software specification.",
  },
  {
    icon: "/home/why-icon2.svg",
    title: "Pre-Built Software Packages",
    description:
      "Get a diverse range of modules and pre-built software packages to power business tasks. From accounting to inventory management, learning content management, rating systems, referrals, coupons, loyalty management and many more.",
  },
  {
    icon: "/home/why-icon3.svg",
    title: "User Experience and Design",
    description:
      "Our developers are trained in developing engaging UX/UI design to keep the users engaged with the application. We work with an excellent user interface and get trending content with the use of Generation AI.",
  },
  {
    icon: "/home/why-icon4.svg",
    title: "Low-Code App Development",
    description:
      "We combine industry-leading code and build development practices for rapid application development. We use the latest technologies like DOTNET Java & low-code software that aligns with your business specification.",
  },
  {
    icon: "/home/why-icon5.svg",
    title: "Data Analysis and Localization",
    description:
      "Data-intensive business insights with robust data mining and framework. Get a clear dashboard with analytics, reporting, currency, location, and more.",
  },
  {
    icon: "/home/why-icon6.svg",
    title: "Cutting-Edge Technology",
    description:
      "We're leading tech stack to provide comprehensive support, seamless integration and automation. We work with modern technology like AWS, SAAS, and Flutter, Firebase, git & cloud-based coding and deployment practices.",
  },
];

export default function WhyChooseUs() {
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
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-2 md:mb-8 lg:mb-12"
        >
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Why&nbsp;
            <span className="text-primary mt-2">Choose Us?</span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            We are a company with a DNA of entrepreneurship, and hence, we value
            the time and money invested by our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground font-thin">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 container"
        >
          <div className="relative rounded-2xl overflow-hidden bg-primary/5">
            <div
              className="relative px-6 py-6 lg:py-12"
              style={{
                backgroundImage: 'url("/images/cta-bg.webp")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="max-w-2xl relative z-10 flex flex-col items-center sm:items-start">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-primary">
                    Innovate with Our Scalable
                  </span>
                  <br />
                  Software Solutions
                </h3>
                <p className="text-base md:text-lg text-gray-700 mb-8">
                  Let our team provide you with a no-cost, no-commitment
                  <br />
                  technical proposal for your next enterprise custom project.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full text-sm sm:text-base"
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
                  src="/images/mvp_cta.webp"
                  alt="Professional consultant"
                  width={500}
                  height={500}
                  className="object-contain h-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
