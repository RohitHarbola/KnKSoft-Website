"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    title: "How TechCorp Saved $500,000 Annually",
    description:
      "Learn how TechCorp streamlined their expense process and achieved significant cost savings.",
    image: "https://picsum.photos/seed/techcorp/600/400",
    link: "#",
  },
  {
    title: "GlobalSoft's Journey to Paperless Expenses",
    description:
      "Discover how GlobalSoft eliminated paper receipts and improved efficiency by 40%.",
    image: "https://picsum.photos/seed/globalsoft/600/400",
    link: "#",
  },
  {
    title: "InnovateTech's Compliance Success Story",
    description:
      "See how InnovateTech ensured 100% compliance with expense policies using our solution.",
    image: "https://picsum.photos/seed/innovatetech/600/400",
    link: "#",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover how leading companies have transformed their expense
            management with our solution.
          </p>
        </motion.div>
        <motion.div
          className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={study.image}
                width={600}
                height={400}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime="2023-03-16" className="mr-8">
                  Case Study
                </time>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={study.link}>
                  <span className="absolute inset-0" />
                  {study.title}
                </a>
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                {study.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-blue-600 flex items-center"
          >
            View all case studies <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
