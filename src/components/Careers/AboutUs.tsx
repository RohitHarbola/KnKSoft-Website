"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLightbulb, FaUsers, FaChartLine, FaMedal } from "react-icons/fa";
import { Button } from "../ui/Button/Button";
import * as Icons from "lucide-react";

const stats = [
  { number: "250+", label: "Employees Worldwide", icon: <FaUsers /> },
  { number: "15+", label: "Years of Innovation", icon: <FaLightbulb /> },
  { number: "98%", label: "Client Satisfaction", icon: <FaChartLine /> },
  { number: "40+", label: "Industry Awards", icon: <FaMedal /> },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

export default function AboutUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Pioneering the Future of Technology
          </h2>
          <p className="text-xl text-gray-600">
            Where innovation meets excellence, and where your career aspirations
            become reality.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 text-3xl mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Building Tomorrow&apos;s Solutions Today
            </h3>
            <p className="text-gray-600">
              At KNK Soft Tech, we&apos;re at the forefront of technological
              innovation. Our commitment to excellence drives us to push
              boundaries and create solutions that transform industries.
            </p>
            <p className="text-gray-600">
              We foster a culture of continuous learning and collaboration,
              where every team member&apos;s contribution is valued and
              celebrated. Our diverse workforce brings together the brightest
              minds from around the globe.
            </p>
            <div className="pt-6">
              <Button
                size="lg"
                variant="primary"
                rightIcon={<Icons.ArrowRight />}
              >
                Join Our Team
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-xl transform rotate-3 opacity-10"></div>
            <Image
              src="https://img.freepik.com/free-photo/we-are-hiring-digital-collage_23-2149667064.jpg"
              alt="Our innovative workspace"
              width={500}
              height={500}
              className="rounded-xl shadow-2xl relative z-10"
            />
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Innovation First",
              description:
                "We embrace cutting-edge technologies and methodologies to stay ahead of the curve.",
              color: "from-blue-400 to-blue-600",
            },
            {
              title: "People Focused",
              description:
                "Our success is built on the diverse talents and perspectives of our global team.",
              color: "from-purple-400 to-purple-600",
            },
            {
              title: "Excellence Driven",
              description:
                "We maintain the highest standards in everything we do, from code to customer service.",
              color: "from-indigo-400 to-indigo-600",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className={`h-2 w-20 mb-6 rounded bg-gradient-to-r ${value.color}`}
              ></div>
              <h4 className="text-xl font-bold mb-4">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
