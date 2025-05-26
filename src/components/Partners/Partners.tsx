"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { PARTNERS_DATA } from "./partners.constants";
export const Partners = () => {
  // Memoize the motion component props
  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 },
  } as const;

  // Memoize the shared card props
  const cardBaseProps = {
    speed: "normal",
    className: "opacity-75 hover:opacity-100 transition-opacity duration-300",
  } as const;

  return (
    <section className="py-24 bg-primary/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div {...motionProps} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Our&nbsp;
            <span className="text-primary mt-2">Clients</span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            Our portfolio holds the work of some of the most reputed enterprise
            & startup brands. All it is missing is YOU!
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          <InfiniteMovingCards
            items={[...PARTNERS_DATA.left]}
            direction="left"
            {...cardBaseProps}
          />
          <InfiniteMovingCards
            items={[...PARTNERS_DATA.right]}
            direction="right"
            {...cardBaseProps}
          />
        </div>
      </div>
    </section>
  );
};
