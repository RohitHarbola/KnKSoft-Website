"use client";

import { motion } from "framer-motion";
import {
  FaLaptop,
  FaPlane,
  FaGraduationCap,
  FaHeartbeat,
  FaPiggyBank,
  FaUsers,
  FaBaby,
  FaDumbbell,
  FaCoffee,
  FaHandHoldingHeart,
  FaChartLine,
  FaStar,
} from "react-icons/fa";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
  >
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
        <div className="text-blue-600 text-3xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

export default function BenefitsAndPerks() {
  const benefits = [
    {
      icon: <FaLaptop />,
      title: "Flexible Remote Work",
      description:
        "Work from anywhere in the world with our remote-first culture. Enjoy a flexible schedule and maintain perfect work-life harmony.",
    },
    {
      icon: <FaPlane />,
      title: "Unlimited PTO",
      description:
        "Take the time you need with our unlimited paid time off policy. We trust you to manage your work and rest effectively.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Learning & Development",
      description:
        "$5,000 annual budget for professional growth. Access to premium learning platforms, conferences, and certification programs.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Premium Healthcare",
      description:
        "100% company-paid premium healthcare coverage including medical, dental, vision, and mental health support for you and dependents.",
    },
    {
      icon: <FaPiggyBank />,
      title: "Financial Benefits",
      description:
        "Competitive 401(k) matching up to 6%, stock options, and annual performance bonuses. Your future matters to us.",
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      description:
        "Regular team retreats, virtual social events, and annual company gatherings to build lasting relationships.",
    },
    {
      icon: <FaBaby />,
      title: "Family Support",
      description:
        "Generous parental leave, fertility benefits, and adoption assistance. Family-friendly workplace policies.",
    },
    {
      icon: <FaDumbbell />,
      title: "Wellness Programs",
      description:
        "Monthly wellness stipend, virtual fitness classes, and meditation app subscriptions. Your wellbeing is our priority.",
    },
    {
      icon: <FaCoffee />,
      title: "Home Office Setup",
      description:
        "$1,500 home office budget plus monthly internet and phone reimbursement to create your ideal workspace.",
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Volunteer Time Off",
      description:
        "40 paid hours annually for volunteer work. Make a difference in your community while being supported by your company.",
    },
    {
      icon: <FaChartLine />,
      title: "Career Growth",
      description:
        "Clear career progression framework, mentorship programs, and leadership development opportunities.",
    },
    {
      icon: <FaStar />,
      title: "Recognition Program",
      description:
        "Quarterly awards, peer recognition system, and spot bonuses to celebrate your achievements and contributions.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Benefits & Perks
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We believe in taking care of our team members with comprehensive
            benefits that matter. Here&apos;s what you can expect when joining
            our family.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Benefit {...benefit} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
