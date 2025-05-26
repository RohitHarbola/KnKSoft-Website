"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Briefcase, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/Button/Button";

const caseStudies = [
  {
    title: "Global E-commerce Platform",
    industry: "Retail",
    icon: <Building2 className="w-6 h-6" />,
    metrics: {
      deployment: "300% faster",
      uptime: "99.99%",
      costs: "45% reduced"
    },
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "FinTech Innovation Hub",
    industry: "Financial Services",
    icon: <Briefcase className="w-6 h-6" />,
    metrics: {
      deployment: "200% faster",
      uptime: "99.999%",
      costs: "35% reduced"
    },
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Healthcare Platform",
    industry: "Healthcare",
    icon: <Users className="w-6 h-6" />,
    metrics: {
      deployment: "250% faster",
      uptime: "99.95%",
      costs: "40% reduced"
    },
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

export function CaseStudies() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Success&nbsp;
            <span className="text-primary mt-2">Stories</span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            See how we&apos;ve helped organizations transform their DevOps practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      {study.icon}
                      <span className="text-sm">{study.industry}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{study.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-blue-600 font-bold">
                        {study.metrics.deployment}
                      </div>
                      <div className="text-sm text-gray-600">Deployment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-600 font-bold">
                        {study.metrics.uptime}
                      </div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-600 font-bold">
                        {study.metrics.costs}
                      </div>
                      <div className="text-sm text-gray-600">Costs</div>
                    </div>
                  </div>

                  <button className="w-full py-3 px-4 bg-gray-50 text-gray-700 rounded-lg flex items-center justify-center gap-2 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
                    Read Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Button variant={'primary'} size={'lg'} rightIcon={<ArrowRight className="w-4 h-4" />}>
            View All Case Study
          </Button>
        </motion.div>
      </div>
    </section>
  );
}