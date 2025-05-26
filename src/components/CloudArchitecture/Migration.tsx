'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export default function CloudMigration() {
    return (
        <section className="container mx-auto px-4 py-16 max-w-7xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">How Does Cloud Migration Work?</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                    Switching to the cloud can be transformative for businesses, but it can be complex from the start of the migration stage— with so many decisions and budgetary considerations to factor in, it can be easy to get overwhelmed. The aim is here to guide enterprises through the three Migration phases: Assess, Mobilize, and Migrate & Modernize.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left side - Illustration */}
                <div className="relative">
                    <div className="aspect-square relative">
                        {/* Central Image */}
                        <Image
                            src="https://www.signitysolutions.com/hs-fs/hubfs/Group%20579.png?width=493&height=513&name=Group%20579.png"
                            alt="Cloud Migration Illustration"
                            className="w-full h-full object-contain"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>

                {/* Right side - Phases */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex gap-4 p-6 rounded-lg hover:bg-gray-50/50 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex-shrink-0">
                            <motion.div
                                className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg font-semibold text-blue-600"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3, type: "spring" }}
                            >
                                1
                            </motion.div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-600">PHASE 1 - ASSESS</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We implement best practices to help you work through any AWS cloud migration challenges. We&apos;ll conduct a cloud assessment to inform your business of its cloud readiness.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex gap-4 p-6 rounded-lg hover:bg-gray-50/50 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex-shrink-0">
                            <motion.div
                                className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-lg font-semibold text-green-600"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring" }}
                            >
                                2
                            </motion.div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-green-600">PHASE 2 - MOBILIZE</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                With our colocation services, you and your team can detect any potential challenges, budgetary constraints, or knowledge gaps that need to be managed to ensure your cloud is set up for success before or after migration.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="flex gap-4 p-6 rounded-lg hover:bg-gray-50/50 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex-shrink-0">
                            <motion.div
                                className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-lg font-semibold text-purple-600"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.7, type: "spring" }}
                            >
                                3
                            </motion.div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-purple-600">PHASE 3 - MIGRATE</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                In this phase, our cloud architect specialists will begin migrating your software, ensuring that all apps or software have been tested. Once your applications are set up in the cloud, we&apos;ll optimize your AWS environment to monitor the performance.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

