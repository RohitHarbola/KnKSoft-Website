"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image";

const instructors = [
  {
    id: 1,
    name: "Dr. Emily Chen",
    expertise: "Machine Learning & AI",
    bio: "Dr. Chen is a renowned expert in Machine Learning and AI, with over 15 years of industry experience and numerous publications in top-tier journals.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      youtube: "#",
    },
  },
  {
    id: 2,
    name: "John Doe",
    expertise: "Full-Stack Development",
    bio: "John is a seasoned full-stack developer with a passion for creating scalable web applications and mentoring aspiring developers.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      youtube: "#",
    },
  },
  {
    id: 3,
    name: "Sarah Johnson",
    expertise: "Cybersecurity",
    bio: "Sarah is a cybersecurity expert with a background in ethical hacking and a track record of securing Fortune 500 companies.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      youtube: "#",
    },
  },
];

export default function InstructorSpotlight() {
  const [activeInstructor, setActiveInstructor] = useState(instructors[0]);
  const ref = useRef(null);
  const isInView = useIntersectionObserver(ref);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meet Our Expert Instructors
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/3"
          >
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg">
              <Image
                src={activeInstructor.image}
                alt={activeInstructor.name}
                fill
                sizes="(max-width: 768px) 256px, 256px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            <h3 className="text-2xl font-semibold mb-2">
              {activeInstructor.name}
            </h3>
            <p className="text-blue-600 mb-4">{activeInstructor.expertise}</p>
            <p className="text-gray-600 mb-6">{activeInstructor.bio}</p>
            <div className="flex gap-4">
              <a
                href={activeInstructor.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={activeInstructor.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href={activeInstructor.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="mt-12 flex justify-center gap-4">
          {instructors.map((instructor) => (
            <motion.button
              key={instructor.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative w-16 h-16 rounded-full overflow-hidden border-4 ${
                activeInstructor.id === instructor.id
                  ? "border-blue-600"
                  : "border-transparent"
              }`}
              onClick={() => setActiveInstructor(instructor)}
            >
              <Image
                src={instructor.image}
                alt={instructor.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
