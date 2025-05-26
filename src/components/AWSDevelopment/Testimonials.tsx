import Image from 'next/image';
import React from 'react';

const testimonials = [
  {
    quote: "The AWS development team transformed our infrastructure, resulting in a 40% reduction in operational costs.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Their expertise in serverless architecture helped us scale our application to millions of users effortlessly.",
    author: "Michael Chen",
    role: "Engineering Director, CloudScale",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Outstanding AWS development services that delivered beyond our expectations. Highly recommended!",
    author: "Emily Rodriguez",
    role: "Product Manager, DataFlow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Our&nbsp;
            <span className="text-primary mt-2">Testimonials</span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            Hear from our satisfied clients about their AWS journey
          </p>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={500}
                  height={500}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    <blockquote className="text-gray-700 italic">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                  </h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                &quot;{testimonial.quote}&quot;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}