"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { cn } from "@/lib/utils";

// Import slick styles at the top of your file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Paintbrush, Code2, TestTube2, Rocket } from "lucide-react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const steps = [
  {
    id: 1,
    title: "Visual and Technical",
    description:
      "Our mobile development solution experts design the user experience (UX) and user interface with intuitive designs that mirror your business ethics and identity.",
    image:
      "https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-c168d03/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2024/10/10105827/mad_procs_img.png",
    icon: Paintbrush,
  },
  {
    id: 2,
    title: "Development",
    description:
      "Our mobile development solution experts design the user experience (UX) and user interface with intuitive designs that mirror your business ethics and identity.",
    image: "/images/process/development.png",
    icon: Code2,
  },
  {
    id: 3,
    title: "Quality Analysis",
    description:
      "Our mobile development solution experts design the user experience (UX) and user interface with intuitive designs that mirror your business ethics and identity.",
    image: "/images/process/testing.png",
    icon: TestTube2,
  },
  {
    id: 4,
    title: "Deployment",
    description:
      "Our mobile development solution experts design the user experience (UX) and user interface with intuitive designs that mirror your business ethics and identity.",
    image: "/images/process/deployment.png",
    icon: Rocket,
  },
  {
    id: 5,
    title: "Maintenance",
    description:
      "Our mobile development solution experts design the user experience (UX) and user interface with intuitive designs that mirror your business ethics and identity.",
    image: "/images/process/maintenance.png",
    icon: Rocket,
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);
  // Add ref for slider
  const sliderRef = useRef<Slider>(null);

  // Slick slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    arrows: false,
    beforeChange: (oldIndex: number, next: number) => setActiveStep(next + 1),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Update step click handler
  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
    // Go to the selected slide
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(stepId - 1, true);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-black relative">
      {/* Add subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-7xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            What&apos;s Your Journey Through Our Mobile App Development Process?
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            As a premier mobile app development company, we build innovative
            Android and iOS apps with precision and care, ensuring every project
            exceeds expectations and delivers impactful results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4 items-center max-w-7xl mx-auto">
          {/* Left side - Phone Image */}
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full" />
            <Image
              src="/mbl-app-dev/mad_procs_img.webp"
              alt="Mobile App Development"
              width={400}
              height={500}
              className="object-contain h-full max-h-[400px] md:max-h-[550px] mx-auto relative z-10"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex-1 order-1 md:order-2">
            {/* Steps Navigation */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(step.id)}
                  className={cn(
                    "px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 border",
                    activeStep === step.id
                      ? "bg-blue-600 border-blue-500 text-white shadow-lg"
                      : "bg-slate-800/40 border-slate-700/50 text-secondary"
                  )}
                >
                  Step {step.id}
                </button>
              ))}
            </div>

            {/* Cards Grid with Slick Slider */}
            <Slider
              ref={sliderRef}
              {...sliderSettings}
              className="slick-slider-custom -mx-3"
            >
              {steps.map((step) => (
                <div key={step.id} className="px-3">
                  <div
                    className={cn(
                      "p-6 md:p-8 rounded-2xl bg-slate-800/30 border border-border relative h-full backdrop-blur-sm",
                      activeStep === step.id ? "shadow-md border-blue-500" : ""
                    )}
                  >
                    <div className="bg-slate-800/40 rounded-full p-3 w-fit">
                      {step.icon && (
                        <step.icon className="w-7 h-7 md:w-9 md:h-9 text-blue-400" />
                      )}
                    </div>
                    <div className="pt-6 md:pt-8">
                      <h3 className="text-base md:text-lg font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm  text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Custom Navigation Arrows */}
            <div className="flex justify-center md:justify-start gap-4 mt-8">
              <button
                onClick={() =>
                  handleStepClick(activeStep > 1 ? activeStep - 1 : activeStep)
                }
                className="p-3 rounded-full bg-blue-600/60 text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
              >
                <span className="sr-only">Previous</span>
                <MdArrowBackIos className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  handleStepClick(
                    activeStep < steps.length ? activeStep + 1 : activeStep
                  )
                }
                className="p-3 rounded-full bg-blue-600/60 text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
              >
                <span className="sr-only">Next</span>
                <MdArrowForwardIos className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
