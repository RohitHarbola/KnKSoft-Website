import { ReactNode } from 'react';
import Image from 'next/image';

export interface ServiceCard {
    category: string;
    title: string;
    src: string;
    content: ReactNode;
    description: string;
}
const DummyContent = () => (
    <>
        {[...new Array(3)].map((_, index) => (
            <div
                key={`dummy-content-${index}`}
                className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
                <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-700 dark:text-neutral-200">
                        Transform your business with innovative mobile solutions.
                    </span>
                    We create powerful, user-friendly mobile applications that engage your audience
                    and drive growth across iOS and Android platforms.
                </p>
                <Image
                    src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"
                    alt="Web Development Service"
                    width={800}
                    height={600}
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                />
            </div>
        ))}
    </>
);

export const servicesData: ServiceCard[] = [
    {
        category: "Native App Development",
        title: "iOS & Android Apps",
        src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
        description: "Native mobile development for iOS and Android platforms"
    },
    {
        category: "Cross-Platform Development",
        title: "Multi-Platform Solutions",
        src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
        description: "React Native and Flutter cross-platform development"
    },
    {
        category: "Enterprise Mobile Solutions",
        title: "Enterprise Mobile Apps",
        src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
        description: "Secure and scalable enterprise mobile applications"
    },
    {
        category: "Mobile UI/UX Design",
        title: "Intuitive Mobile Interfaces",
        src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
        description: "User-centered mobile app design and prototyping"
    },
    {
        category: "Mobile Backend Development",
        title: "Robust Backend Services",
        src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
        description: "Scalable backend services for mobile applications"
    },
    {
        category: "Mobile Cloud Integration",
        title: "Cloud-Powered Mobile Apps",
        src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
        description: "Firebase and AWS mobile cloud solutions"
    },
    {
        category: "App Store Optimization",
        title: "ASO & Marketing",
        src: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
        content: <DummyContent />,
        description: "App store optimization and marketing strategies"
    },
    {
        category: "Mobile Analytics",
        title: "Data-Driven Insights",
        src: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
        content: <DummyContent />,
        description: "Mobile app analytics and user behavior tracking"
    },
    {
        category: "App Performance",
        title: "Optimized Performance",
        src: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
        content: <DummyContent />,
        description: "Mobile app performance optimization and testing"
    },
    {
        category: "App Maintenance",
        title: "Ongoing Support",
        src: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
        content: <DummyContent />,
        description: "Continuous app maintenance and update services"
    }
];