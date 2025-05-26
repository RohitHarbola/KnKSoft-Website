"use client";

import { motion } from "framer-motion";
import {
  FaUsers,
  FaComments,
  FaLightbulb,
  FaHandsHelping,
} from "react-icons/fa";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef } from "react";

const features = [
  {
    icon: <FaUsers className="text-4xl mb-4 text-blue-500" />,
    title: "Study Groups",
    description:
      "Join or create study groups to collaborate with peers on course materials and projects.",
  },
  {
    icon: <FaComments className="text-4xl mb-4 text-green-500" />,
    title: "Discussion Forums",
    description:
      "Engage in thought-provoking discussions with instructors and fellow learners.",
  },
  {
    icon: <FaLightbulb className="text-4xl mb-4 text-yellow-500" />,
    title: "Peer Reviews",
    description:
      "Give and receive constructive feedback on assignments and projects.",
  },
  {
    icon: <FaHandsHelping className="text-4xl mb-4 text-red-500" />,
    title: "Mentorship Program",
    description:
      "Connect with industry professionals for guidance and career advice.",
  },
];

export default function CommunityCollaboration() {
  const ref = useRef(null);
  const isInView = useIntersectionObserver(ref);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Community and Collaboration
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-gray-50 rounded-full p-6 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Join Our Community
          </a>
        </motion.div>
      </div>
    </section>
  );
}
