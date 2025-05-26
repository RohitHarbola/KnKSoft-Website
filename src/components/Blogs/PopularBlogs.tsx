"use client";
import React from "react";
import { motion } from "framer-motion";
import BlogPostCard from "./BlogPostCard";
import { BlogPost } from "@/lib/blog/type";

interface PopularBlogsProps {
  posts: BlogPost[];
}

export default function PopularBlogs({ posts }: PopularBlogsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6 lg:space-y-12 py-8 sm:py-12 lg:py-16"
    >
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        className="container flex items-center justify-between mb-4"
      >
        <h2 className="text-2xl lg:text-4xl font-bold text-[hsl(var(--primary))]">
          Popular IPO Insights
        </h2>
        <div className="h-1 flex-grow mx-4 bg-gradient-to-r from-[hsl(var(--primary)/0.8)] via-[hsl(var(--primary))] to-[hsl(var(--primary)/0.8)]"></div>
      </motion.div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post._id || `post-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BlogPostCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
