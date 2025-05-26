import Blog from "@/components/Blogs/Blog";
import React from "react";
import { getBlogPosts } from "@/lib/blog/api";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export default async function Page() {
  const blogPosts = await getBlogPosts();

  return (
    <ErrorBoundary>
      <Blog initialBlogPosts={blogPosts} />
    </ErrorBoundary>
  );
}
