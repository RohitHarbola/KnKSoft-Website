import { motion } from "framer-motion";
import { type FeatureCardProps } from "./types";

const FeatureCard = ({ feature }: FeatureCardProps) => (
  <motion.div
    variants={{
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
      }
    }}
    whileHover={{ scale: 1.05 }}
    className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
  >
    <div className="flex flex-col items-center text-center space-y-2">
      <div className="p-3 bg-red-50 rounded-full">
        {feature.icon}
      </div>
      <h4 className="font-semibold text-gray-800">
        {feature.title}
      </h4>
      <p className="text-sm text-gray-500">{feature.description}</p>
    </div>
  </motion.div>
);

export default FeatureCard; 