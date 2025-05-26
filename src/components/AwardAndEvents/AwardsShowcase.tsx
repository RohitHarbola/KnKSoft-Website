'use client'

import { motion, useMotionValue } from 'framer-motion'
import { Award, Star, Trophy } from 'lucide-react'
import { MouseEvent } from 'react'

const awards = [
    {
        title: 'Best IT Innovation 2023',
        organization: 'Tech Excellence Awards',
        icon: Star,
        color: 'from-blue-500 to-purple-500'
    },
    {
        title: 'Top Cloud Solution Provider',
        organization: 'Cloud Computing Magazine',
        icon: Trophy,
        color: 'from-emerald-500 to-teal-500'
    },
    {
        title: 'Cybersecurity Leader of the Year',
        organization: 'InfoSec Awards',
        icon: Award,
        color: 'from-orange-500 to-red-500'
    },
]

function AwardCard({ award, index }: { award: typeof awards[0], index: number }) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            className="relative group"
        >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-gray-900 rounded-2xl p-8">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${award.color} opacity-0 group-hover:opacity-10 transition duration-500`} />
                <div className="relative flex flex-col items-center text-center">
                    <award.icon className="w-16 h-16 text-blue-400 mb-6" />
                    <h3 className="text-2xl font-bold mb-4 text-white">{award.title}</h3>
                    <p className="text-blue-200">{award.organization}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default function AwardsShowcase() {
    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Achievements</h2>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        Recognition of our commitment to excellence and innovation in the technology sector
                    </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {awards.map((award, index) => (
                        <AwardCard key={index} award={award} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

