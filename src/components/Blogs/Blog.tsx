"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PopularBlogPosts from "./PopularBlogs";
import AllBlogs from "./AllBlogs";
import BlogHeader from "./BlogHeader";
// import { useDebounce } from "@/hooks/useDebounce";
import { BlogPost } from "@/lib/blog/type";

interface BlogClientProps {
  initialBlogPosts: BlogPost[];
}

export default function BlogClient({ initialBlogPosts }: BlogClientProps) {
  // State management with performance optimizations
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Debounce search term to prevent excessive filtering
  // const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Memoize filtered posts to prevent unnecessary recalculations
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!selectedTag || post.tags.includes(selectedTag))
    );
  }, [blogPosts, selectedTag]);

  // Memoize all tags
  const allTags = useMemo(() => {
    return Array.from(new Set(blogPosts.flatMap((post) => post.tags)));
  }, [blogPosts]);

  // Initialize client-side data
  useEffect(() => {
    setBlogPosts(initialBlogPosts);
    setIsClient(true);
  }, [initialBlogPosts]);

  // Handle search term changes
  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  // Handle tag selection
  const handleTagSelect = useCallback((tag: string | null) => {
    setSelectedTag(tag);
  }, []);

  // Loading state
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center">
        <div className="animate-pulse space-y-4">
          <div className="h-12 w-48 bg-gray-700 rounded"></div>
          <div className="h-8 w-96 bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }

  // Split posts for different sections
  const popularPosts = filteredPosts.slice(0, 3);
  const remainingPosts = filteredPosts.slice(3);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        // variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="min-h-screen flex flex-col"
      >
        <BlogHeader
          searchTerm={searchTerm}
          setSearchTerm={handleSearchChange}
          selectedTag={selectedTag}
          setSelectedTag={handleTagSelect}
          allTags={allTags}
        />

        <main className="py-6 sm:py-8 md:py-16 space-y-8 md:space-y-16">
          {/* Popular Posts Section */}
          <section className="relative container mx-auto px-4 ">
            <PopularBlogPosts posts={popularPosts} />
          </section>

          {/* All Posts Section */}
          <section className="relative bg-primary/5">
            <AllBlogs posts={remainingPosts} />
          </section>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <h3 className="text-xl text-primary">
                No posts found matching your criteria
              </h3>
            </motion.div>
          )}
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
