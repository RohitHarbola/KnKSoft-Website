"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useState, useCallback, useRef, useEffect } from "react";
import { MARKETPLACE_TABS } from "@/constants/marketplace";
import { MarketplaceCard } from "./MarketplaceCard";
import { containerVariants, itemVariants } from "@/animations/marketplace";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const MarketplaceSection = () => {
  const [activeTab, setActiveTab] = useState("product-order");
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const tabsListRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const handleTabChange = useCallback(
    (value: string) => {
      if (!isDesktop) {
        setActiveTab(value);
      }
    },
    [isDesktop]
  );

  const handleTabHover = useCallback(
    (value: string) => {
      if (isDesktop) {
        setActiveTab(value);
      }
    },
    [isDesktop]
  );

  const checkScrollButtons = useCallback(() => {
    if (tabsListRef.current) {
      const { scrollWidth, clientWidth } = tabsListRef.current;
      setShowScrollButtons(scrollWidth > clientWidth);
    }
  }, []);

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener("resize", checkScrollButtons);
    return () => window.removeEventListener("resize", checkScrollButtons);
  }, [checkScrollButtons]);

  const scroll = useCallback((direction: "left" | "right") => {
    if (tabsListRef.current) {
      const scrollAmount = 200;
      const scrollLeft = tabsListRef.current.scrollLeft;
      tabsListRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
          Our Innovative Solutions For Every
          <span className="text-primary block mt-2">Marketplace Vision</span>
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
          We specialize in transforming innovative marketplace concepts into
          successful realities. Our team of experts has a wealth of experience
          and expertise to craft a tailored marketplace solution that aligns
          perfectly with your vision.
        </p>

        <Tabs
          defaultValue="product-order"
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full relative"
        >
          <div className="relative">
            {showScrollButtons && (
              <>
                <button
                  onClick={() => scroll("left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
            <div
              ref={tabsListRef}
              className="overflow-x-auto scrollbar-hide mx-auto relative"
            >
              <TabsList className="flex justify-start gap-2 mb-4 lg:mb-12 bg-[#f5f5f5] rounded-full w-max mx-auto border border-gray-200 p-0.5">
                {MARKETPLACE_TABS.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    onMouseEnter={() => handleTabHover(tab.id)}
                    className={`px-6 py-3 rounded-full transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-red-500 text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          {MARKETPLACE_TABS.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.id}
              className="focus-visible:outline-none"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                  {tab.items.map((item, index) => (
                    <MarketplaceCard
                      key={item.name}
                      item={item}
                      variants={itemVariants}
                      custom={index}
                    />
                  ))}
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative rounded-2xl overflow-hidden hidden lg:block"
                >
                  <Image
                    src={tab.tabImage}
                    alt={`${tab.label} illustration`}
                    width={500}
                    height={500}
                    className="max-w-[550px]"
                    priority
                  />
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </section>
  );
};
