"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion } from "framer-motion";

export const steps = [
  {
    title: "Prototype Design",
    description:
      "Cut your production cost with our experienced no-code developers in offshore development.",
    link: "#prototype",
    icon: "/mvp/mvp_srvc1.svg",
  },
  {
    title: "Single-Feature MVP",
    description:
      "Develop a minimum viable product that highlights your product's main feature.",
    link: "#single-feature",
    icon: "/mvp/mvp_srvc2.svg",
  },
  {
    title: "Pilot MVP Development",
    description:
      "Test a scaled-down version of your product in a controlled environment before a full-scale launch.",
    link: "#pilot",
    icon: "/mvp/mvp_srvc3.svg",
  },
  {
    title: "Market Testing",
    description:
      "Get more professionals to help you with overwhelming requirements.",
    link: "#market-testing",
    icon: "/mvp/mvp_srvc4.svg",
  },
  {
    title: "User Feedback",
    description:
      "Cut your production cost with our experienced no-code developers in offshore development.",
    link: "#feedback",
    icon: "/mvp/mvp_srvc5.svg",
  },
  {
    title: "Iterative Enhancement",
    description:
      "Cut your production cost with our experienced no-code developers in offshore development.",
    link: "#enhancement",
    icon: "/mvp/mvp_srvc6.svg",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 md:bg-primary pt-52 md:pt-64 md:pb-[450px] lg:pb-[360px] xl:pb-[310px] md:rounded-[0_0_50px_50px] lg:rounded-[0_0_110px_100px] md:mb-96 px-4">
      <div className="container mx-auto px-4 lg:px-20 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-2 md:mb-8 lg:mb-14 xl:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center tracking-tight md:text-white md:text-4xl lg:text-5xl mb-4">
            Validate Your Idea and Get User&nbsp;
            <span className="mt-2 block">
              Feedback with MVP Development Strategy
            </span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg md:text-white text-center mb-8">
            We handle the complete process of MVP development for startups or
            assist with a particular aspect you require support for:
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center justify-around gap-8 md:absolute md:left-1/2 md:-translate-x-1/2 w-full z-20">
          <HoverEffect items={steps} className="w-full" />
        </div>
      </div>
    </section>
  );
}
