"use client";

import { motion } from "framer-motion";
import Image from "next/image";
export default function ResultDriven() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 lg:!pb-[15.5rem]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 -top-8 w-full lg:w-[45%] h-[400px] sm:h-[600px] lg:h-[810px] hidden lg:block"
          >
            <Image
              src="/mvp/mvp_result-driven.webp"
              alt="MVP Development Services"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
              className="object-contain"
              priority
              quality={85}
            />
          </motion.div>

          <div className="lg:col-start-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-2 sm:space-y-4 relative before:hidden sm:before:block before:content-[''] before:absolute before:-left-16 sm:before:-left-24 lg:before:-left-32 before:-top-5 before:w-20 sm:before:w-24 lg:before:w-32 before:h-20 sm:before:h-24 lg:before:h-32 before:bg-[url('https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-47d43d1/www.apptunix.com/wp-content/uploads/2023/07/bulb.svg')] before:bg-contain before:bg-no-repeat before:animate-bulbPulse"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                  Result-Driven
                  <span className="block mt-1">MVP Development Services</span>
                </h2>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed">
                Our MVP app development company helps you maximize your business
                potential, enabling you to launch your reliable MVP product
                instantly. Sell smarter and faster while learning from your
                customers to turn your ideas into actionable solutions. With our
                no-code MVP development services, you can unleash your full
                potential and take your business to new heights.
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed">
                <span className="text-primary font-medium">MVP and POC</span>{" "}
                have become integral to modern software development. While a
                proof of concept document ensures the technical feasibility of
                your business solution, a minimum viable product lets you push
                the release ahead of time and collect valuable feedback to build
                a functional MVP app.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
