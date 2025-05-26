"use client";

import React, { useState } from "react";
import CreateBlogPost from "./CreateBlogPost";
import PopularBlogPosts from "./PopularBlogs";
import AllBlogs from "./AllBlogs";
import { BlogPost } from "@/lib/blog/type";

interface BlogCMSProps {
  initialBlogPosts: BlogPost[];
}

const BlogCMS: React.FC<BlogCMSProps> = ({ initialBlogPosts }) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts);

  const handlePostCreated = async (newPost: BlogPost) => {
    setBlogPosts([newPost, ...blogPosts]);
  };

  const handlePostUpdated = async (updatedPost: BlogPost) => {
    setBlogPosts(
      blogPosts.map((post) =>
        post._id === updatedPost._id ? updatedPost : post
      )
    );
  };

  const handlePostDeleted = async (deletedPostId: string) => {
    setBlogPosts(blogPosts.filter((post) => post._id !== deletedPostId));
  };

  return (
    <div className="container space-y-12 px-4">
      <CreateBlogPost
        onPostCreatedAction={handlePostCreated}
        onPostUpdatedAction={handlePostUpdated}
        onPostDeletedAction={handlePostDeleted}
      />
      <PopularBlogPosts posts={blogPosts.slice(0, 3)} />
      <AllBlogs posts={blogPosts.slice(3)} />
    </div>
  );
};

export default BlogCMS;
