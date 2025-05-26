"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: string;
    name: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      setStart(true);
    }
  };

  const getSpeed = () => {
    switch (speed) {
      case "fast":
        return "20s";
      case "normal":
        return "40s";
      case "slow":
        return "80s";
      default:
        return "40s";
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 py-4",
          start && direction === "right"
            ? "animate-scroll-right"
            : "animate-scroll-left",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{ "--animation-duration": getSpeed() } as React.CSSProperties}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[180px] max-w-full flex-shrink-0"
            key={item.name + idx}
          >
            <div
              className="rounded-xl bg-white p-6 border border-white/10 backdrop-blur-sm 
                          transition-all duration-300 hover:scale-105 hover:border-white/30 
                          shadow-[0_8px_16px_rgb(0_0_0/0.1)]"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={120}
                height={120}
                className="h-14 w-auto object-contain filter brightness-95"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
