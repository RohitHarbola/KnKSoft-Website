"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaStar, FaUserGraduate, FaClock } from "react-icons/fa";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef } from "react";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    category: "AI & Data Science",
    rating: 4.8,
    students: 15000,
    duration: "10 weeks",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Advanced React Development",
    category: "Web Development",
    rating: 4.9,
    students: 12000,
    duration: "8 weeks",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Cybersecurity Fundamentals",
    category: "Security",
    rating: 4.7,
    students: 9000,
    duration: "12 weeks",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Cloud Computing with AWS",
    category: "Cloud",
    rating: 4.8,
    students: 11000,
    duration: "9 weeks",
    image: "/placeholder.svg?height=200&width=300",
  },
];

const categories = [
  "All",
  "AI & Data Science",
  "Web Development",
  "Security",
  "Cloud",
];

export default function CourseCatalog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useIntersectionObserver(ref);

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Explore Our Course Catalog
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border border-blue-600"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{course.category}</p>
                <div className="flex items-center mb-2">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaUserGraduate className="mr-1" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-1" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
