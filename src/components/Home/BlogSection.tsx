"use client";
import React from "react";
import { motion } from "framer-motion";
import BlogPostCard from "@/components/Blogs/BlogPostCard";
import { Button } from "@/components/ui/Button/Button";
import * as Icons from "lucide-react";
import Link from "next/link";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  image: string;
  tags: string[];
  createdAt: string;
}

interface AllBlogPostsProps {
  posts: BlogPost[];
}

export default function BlogSection({ posts }: AllBlogPostsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6 lg:space-y-12 lg:mt-16 py-12 bg-primary/5"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
          Our Blog&nbsp;
          <span className="text-primary mt-2">Insights & Updates</span>
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground/80 text-center mb-8">
          Discover industry insights, technical deep-dives, and expert
          perspectives from our team.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-center text-gray-500">
          No posts available at the moment.
        </p>
      ) : (
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.slice(0, 3).map((post, index) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <BlogPostCard post={post} />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link href="/blogs">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<Icons.ArrowRight />}
              >
                View All Posts
              </Button>
            </Link>
          </div>
        </div>
      )}
    </motion.section>
  );
}
