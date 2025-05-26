"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaRocket,
  FaStore,
  FaHandshake,
  FaMoneyBillWave,
  FaGift,
} from "react-icons/fa";

const WhyLaunching = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const features = [
    {
      icon: <FaRocket className="text-2xl" />,
      title: "Launch your startup app in",
      highlight: "2 weeks",
      description: "",
    },
    {
      icon: <FaStore className="text-2xl" />,
      title: "Aggregate",
      highlight: "local merchants",
      description: "to list inventory",
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Onboard",
      highlight: "freelance delivery persons",
      description: "",
    },
    {
      icon: <FaMoneyBillWave className="text-2xl" />,
      title: "Start Earning",
      highlight: "20% commission",
      description: "on all orders",
    },
    {
      icon: <FaGift className="text-2xl" />,
      title: "Engage customers with",
      highlight: "discounts, offers, and promotions",
      description: "",
    },
  ];

  return (
    <div className=" px-4 py-12">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Why Launching a
          <span className="text-[#ff4d4d]">Hyperlocal Food Delivery</span>{" "}
          Marketplace is a Great Idea?
        </h2>
        <p className="text-center mb-12 text-gray-600">
          Whether you own a small bakery or a 5-star restaurant, our food
          delivery app development services are designed to cater all kinds of
          businesses in the food industry.
        </p>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <Slider {...settings} className="w-full">
            {/* First Slide */}
            <div className="!flex flex-col md:flex-row gap-8 items-center">
              <div className="relative w-full md:w-1/2">
                <Image
                  src="/food-d-app/fda-food-business-img.png"
                  alt="Food Delivery"
                  width={500}
                  height={500}
                  className="rounded-lg mx-auto"
                />
                <div className="absolute bottom-2 right-20  bg-white p-4 rounded-xl shadow-md max-w-[300px] mx-auto">
                  <p className="">
                    <span className="font-semibold text-[#ff4d4d]">
                      Do you know
                    </span>
                    Every customer makes -
                    <b>5 or more food delivery orders monthly </b> and you stand
                    a chance to earn 20% on per order.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#fff1f1] rounded-full flex items-center justify-center text-[#ff4d4d]">
                        {feature.icon}
                      </div>
                      <div>
                        <p className="text-gray-700">
                          {feature.title}
                          <span className="font-semibold text-gray-900">
                            {feature.highlight}
                          </span>
                          {feature.description && ` ${feature.description}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Second Slide (duplicate for now) */}
            <div className="!flex flex-col items-center md:flex-row gap-8 max-w-6xl mx-auto">
              <div className="w-full md:w-1/2">
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div
                      key={`slide2-${index}`}
                      className="flex items-center gap-4"
                    >
                      <div className="w-12 h-12 bg-[#fff1f1] rounded-full flex items-center justify-center text-[#ff4d4d]">
                        {feature.icon}
                      </div>
                      <div>
                        <p className="text-gray-700">
                          {feature.title}
                          <span className="font-semibold text-gray-900">
                            {feature.highlight}
                          </span>
                          {feature.description && ` ${feature.description}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative w-full md:w-1/2">
                <Image
                  src="/food-d-app/fda-women-img1.png"
                  alt="Food Delivery"
                  width={500}
                  height={500}
                  className="rounded-lg mx-auto h-auto"
                />
                <div className="absolute bottom-8 -left-20  bg-white p-4 rounded-xl shadow-md max-w-[300px] mx-auto">
                  <p className="">
                    <span className="font-semibold text-[#ff4d4d]">
                      Do you know
                    </span>
                    - <b>90% of your customers</b> prefer to do
                    <b>5 or more online orders per month.</b>
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WhyLaunching;
