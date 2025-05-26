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
                        Transform your digital presence with our expert solutions.
                    </span>{" "}
                    We deliver cutting-edge web development services tailored to your needs,
                    ensuring scalable, secure, and high-performance applications that drive
                    your business forward.
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
        category: "Custom Web Development",
        title: "Modern Web Applications",
        src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
        description: "Full-stack development with React, Next.js, and Node.js"
    },
    {
        category: "E-commerce Solutions",
        title: "Scale Your Online Business",
        src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
        description: "Custom e-commerce platforms with Shopify and WooCommerce integration"
    },
    {
        category: "Enterprise Solutions",
        title: "Enterprise-Grade Applications",
        src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
        description: "Secure, scalable, and high-performance enterprise solutions"
    },
    {
        category: "Custom CMS",
        title: "Tailored Content Management",
        src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
        description: "Headless CMS solutions with Strapi and Sanity"
    },
    {
        category: "API Development",
        title: "RESTful & GraphQL APIs",
        src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
        description: "Custom API development and integration services"
    },
    {
        category: "Cloud Solutions",
        title: "Cloud-Native Applications",
        src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
        description: "AWS and Azure cloud infrastructure solutions"
    },
    {
        category: "Progressive Web Apps",
        title: "Next-Gen PWA Development",
        src: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
        content: <DummyContent />,
        description: "Fast, reliable, and engaging progressive web apps"
    },
    {
        category: "UI/UX Design",
        title: "Beautiful User Experiences",
        src: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
        content: <DummyContent />,
        description: "User-centered design and development"
    },
    {
        category: "Performance Optimization",
        title: "Lightning-Fast Websites",
        src: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
        content: <DummyContent />,
        description: "Web vitals optimization and performance tuning"
    },
    {
        category: "Maintenance & Support",
        title: "Reliable Technical Support",
        src: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
        content: <DummyContent />,
        description: "24/7 maintenance and technical support services"
    }
];