"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    position: "CIO, Tech Solutions Inc.",
    quote:
      "This asset management solution has transformed our IT operations. Highly recommended!",
  },
  {
    name: "Jane Smith",
    position: "IT Manager, Global Innovations",
    quote:
      "The vendor management features have saved us countless hours and improved our relationships with suppliers.",
  },
  {
    name: "Mike Johnson",
    position: "CFO, Finance Corp",
    quote:
      "The cost savings we havve achieved with this platform have exceeded our expectations. A game changer for our business.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          What Our Clients Say
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <p className="text-xl mb-4 text-gray-600 italic">
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </p>
            <p className="font-semibold text-gray-800">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-gray-600">
              {testimonials[currentIndex].position}
            </p>
          </motion.div>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-white p-2 rounded-full shadow-md"
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-white p-2 rounded-full shadow-md"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
