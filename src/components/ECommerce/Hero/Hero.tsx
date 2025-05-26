"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button/Button";
import { FlipWords } from "@/components/ui/flip-words";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import * as Icons from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const teamMembers = [
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
  ];

  const flipWords = [
    "Online Shopping",
    "Digital Marketplace",
    "Product Discovery",
    "Secure Checkout",
    "Customer Experience",
  ];

  return (
    <section className="relative overflow-hidden bg-primary/5">
      <div className="container relative mx-auto px-4 py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5"
              >
                <span className="text-sm font-medium text-primary">
                  Trusted by Global Enterprise Leaders
                </span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight xl:text-5xl">
                Professional IT Solutions for
                <span className="inline-block">
                  <FlipWords words={flipWords} className="text-primary" />
                </span>
              </h1>

              <p className="max-w-2xl text-base font-thin xl:text-lg text-foreground">
                Comprehensive IT services including custom software development,
                cloud solutions, enterprise systems, and digital transformation.
                From MVF development to full-scale enterprise solutions, we
                deliver excellence.
              </p>
            </div>

            <div>
              <Button
                size="lg"
                variant="primary"
                rightIcon={<Icons.ArrowRight />}
              >
                Talk to an Expert
              </Button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <AnimatedTooltip items={teamMembers} />
                <div className="text-xs sm:text-sm text-foreground">
                  Meet our leadership team with
                  <span className="font-semibold text-foreground">
                    20+ years
                  </span>
                  of combined experience
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative w-full h-[600px] mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Product 1 - Laptop */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute top-0 right-[5%] w-[100%] max-w-[750px] h-[350px]"
            >
              <Image
                src="https://www.code-brew.com/wp-content/uploads/2019/06/screen@2x-1-1-1.png"
                alt="Product showcase laptop"
                width={600}
                height={350}
                className="w-full h-full bg-cover"
              />
            </motion.div>

            {/* Product 2 - Phone */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute top-[22%] right-0 w-[30%] max-w-[300px]"
            >
              <Image
                src="https://www.code-brew.com/wp-content/uploads/2019/06/vector-smart-object@2x-1.png"
                alt="Product showcase phone"
                width={300}
                height={600}
                className="w-full h-full bg-cover"
              />
            </motion.div>

            {/* Product 3 - Shoe */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="absolute bottom-[15%] left-[10%] w-[30%] max-w-[250px]"
            >
              <Image
                src="https://www.code-brew.com/wp-content/uploads/2019/06/layer-120@2x.png"
                alt="Product showcase shoe"
                width={250}
                height={250}
                className="w-full h-auto"
              />
            </motion.div>

            {/* Product 4 - Jacket */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute top-[5%] left-[-12%] w-[25%] max-w-[200px]"
            >
              <Image
                src="https://www.code-brew.com/wp-content/uploads/2019/06/layer-119@2x.png"
                alt="Product showcase jacket"
                width={200}
                height={300}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
