"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GitBranch, GitMerge, GitPullRequest, MonitorCheck } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    image: string;
    isReversed?: boolean;
    delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, image, isReversed, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay }}
        className={`flex flex-col lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''} gap-8 group`}
    >
        {/* Content Side */}
        <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20">
                        {icon}
                    </div>
                </div>
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-primary">
                    {title}
                </h3>
            </div>

            <p className="text-lg font-thin leading-relaxed pl-4 border-l-2 border-blue-500/30">
                {description}
            </p>
        </div>

        {/* Image Side */}
        <motion.div
            className="flex-1 relative h-[300px] rounded-2xl overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:opacity-75 transition-opacity duration-300 z-10" />
            <Image
                src={image}
                alt={title}
                fill
                className="object-contain object-center"
            />
        </motion.div>
    </motion.div>
);

export function DevOpsServices() {
    const services = [
        {
            title: "Continuous Integration (CI)",
            description: "Our DevOps professional collects all configuration changes into a central repository and runs QA tests to identify and resolve bugs quickly.",
            icon: <GitBranch className="w-6 h-6" />,
            image: "https://www.signitysolutions.com/hs-fs/hubfs/Group%20563.png?width=536&height=404&name=Group%20563.png",
            isReversed: false
        },
        {
            title: "Continuous Delivery (CD)",
            description: "We apply all code changes in a trusted QA testing environment, automatically developing, testing, and preparing a deployment-ready AWS app for production release.",
            icon: <GitMerge className="w-6 h-6" />,
            image: "https://www.signitysolutions.com/hs-fs/hubfs/Group%20564.png?width=638&height=358&name=Group%20564.png",
            isReversed: true
        },
        {
            title: "Infrastructure-as-a-Code",
            description: "Our team precisely manages the AWS infrastructure with app development and coding techniques consisting of version control and continuous integration.",
            icon: <GitPullRequest className="w-6 h-6" />,
            image: "https://www.signitysolutions.com/hs-fs/hubfs/Group%20565.png?width=464&height=348&name=Group%20565.png",
            isReversed: false
        },
        {
            title: "Monitoring & Logging",
            description: "Our AWS DevOps engineers use container insights to track, troubleshoot and log metrics while collecting data and utilizing tools and platforms.",
            icon: <MonitorCheck className="w-6 h-6" />,
            image: "https://www.signitysolutions.com/hs-fs/hubfs/Group%20567.png?width=663&height=415&name=Group%20567.png",
            isReversed: true
        }
    ];

    return (
        <section className="relative py-24 overflow-hidden">

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >

                    <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
                        AWS DevOps&nbsp;
                        <span className="text-primary mt-2 block">Engineering Services</span>
                    </h2>
                    <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
                        Signity employs best DevOps practices, including process automation, streamlining the CI/CD pipeline, and infrastructure management for reliable application development on AWS.
                    </p>

                </motion.div>

                <div className="space-y-24">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            {...service}
                            delay={index * 0.2}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
} 