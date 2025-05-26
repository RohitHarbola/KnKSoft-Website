import { motion } from "framer-motion";
import BeautyMarketplace from "./BeautyMarketplace";
import Appointment from "./Appointment ";
import BeautyConsultation from "./BeautyConsultation ";
import NailSalon from "./NailSalon";
import HairSalon from "./HairSalon";
import HomeSpa from "./HomeSpa";

export default function AppModels() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Various <span className="text-[#ff4d4d]">Salon App Models</span> For
          Different Business Needs
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At ValueAppz, we focus on providing on-demand salon app development
          solutions that cater with the specific business needs.
        </p>
      </motion.div>
      <div className="flex flex-col">
        <div>
          <Appointment />
        </div>
        <div className="bg-primary/5">
          <BeautyMarketplace />
        </div>
        <div className="">
          <BeautyConsultation />
        </div>
        <div className="bg-primary/5">
          <NailSalon />
        </div>
        <div className="">
          <HairSalon />
        </div>
        <div className="bg-primary/5">
          <HomeSpa />
        </div>
      </div>
    </section>
  );
}
