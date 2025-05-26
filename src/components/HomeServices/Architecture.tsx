"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Architecture() {
    return (
        <section className="py-10">
            <div className="container rounded-3xl mx-auto px-10 py-12" style={{ backgroundImage: 'url(/images/services-right-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center', opacity: 1, transform: 'none' }}>
                {/* Header */}
                <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        <span className="text-white relative">
                            Technology & Solution
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#ff4d4d] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                        </span>
                        <span className="text-white"> Architecture</span>
                    </h2>
                    <p className="text-white max-w-3xl mx-auto text-lg leading-relaxed">
                        ValueAppz relies on a robust cutting-edge technology stack, high customizations,
                        and robust third-party integrations to power up your next-gen home service
                        marketplace app solutions.
                    </p>
                </motion.div>

                {/* Main Infrastructure */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="rounded-2xl overflow-hidden max-w-6xl mx-auto">
                        <div className="p-6 lg:p-8">
                            <div className="relative aspect-[16/9]">
                                <Image
                                    src="https://www.valueappz.com/img/diagram1.png"
                                    alt="Home Services Architecture"
                                    fill
                                    className="object-contain"
                                    priority
                                    sizes="(max-width: 768px) 100vw,
                                           (max-width: 1200px) 80vw,
                                           1200px"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>


            </div>
        </section>
    );
}
