"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRegComment,
  FaShare,
  FaEllipsisV,
} from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

interface BlogPost {
  _id: string;
  title: string;
  subtitle: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  createdAt: string;
  readingTime: string;
  tags: string[];
}

interface BlogPostClientProps {
  initialPost: BlogPost;
}

export default function BlogSlug({ initialPost }: BlogPostClientProps) {
  const [post] = useState<BlogPost>(initialPost);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<
    Array<{ _id: string; content: string; author: string; createdAt: string }>
  >([]);
  const [newComment, setNewComment] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/comments?blogPostId=${post._id}`);
        if (response.ok) {
          const fetchedComments = await response.json();
          setComments(fetchedComments);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [post._id]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(post.title)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          url
        )}&title=${encodeURIComponent(post.title)}`;
        break;
    }

    window.open(shareUrl, "_blank");
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && commentAuthor.trim()) {
      try {
        const response = await fetch("/api/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            blogPostId: post._id,
            content: newComment,
            author: commentAuthor,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          setComments([
            ...comments,
            {
              _id: result.id,
              content: newComment,
              author: commentAuthor,
              createdAt: new Date().toISOString(),
            },
          ]);
          setNewComment("");
          setCommentAuthor("");
        } else {
          console.error("Failed to submit comment");
        }
      } catch (error) {
        console.error("Error submitting comment:", error);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link
            href="/blogs"
            className="text-foreground text-sm md:text-base transition-colors flex items-center justify-center"
          >
            <IoIosArrowBack className="size-6" />
            Back
          </Link>
          <div className="flex space-x-4">
            <ShareButton
              icon={<FaShare />}
              color="bg-primary"
              onClick={() => {}}
            />
            <button className="text-foreground transition-colors">
              <FaEllipsisV className="size-6" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <article className="bg-background shadow-2xl rounded-2xl overflow-hidden">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative w-full"
            style={{ aspectRatio: "16 / 9" }}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          <div className="p-6 sm:p-8 md:p-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
                {post.title}
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-foreground">
                {post.subtitle}
              </p>
              <div className="flex items-center mb-6">
                <Image
                  src="/images/logo.png"
                  alt="avatar-image"
                  width={48}
                  height={48}
                  className="rounded-full mr-4 border-2 border-gray-200 dark:border-gray-700 w-12 h-12 object-contain"
                />
                <div>
                  <p className="font-semibold text-foreground">IPO Markets</p>
                  <p className="text-sm text-foreground">
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    • {post.readingTime} min read
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6 flex flex-wrap"
            >
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold text-primary-foreground mr-2 mb-2"
                >
                  #{tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="prose prose-lg dark:prose-invert max-w-none text-sm sm:text-base md:text-lg"
              dangerouslySetInnerHTML={{
                __html: post.content.replace(
                  /<a /g,
                  '<a class="text-blue-600 dark:text-blue-400 hover:underline" '
                ),
              }}
            />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex flex-col sm:flex-row justify-between items-center border-t border-b border-gray-200 dark:border-gray-700 py-6"
            >
              <div className="flex space-x-4 mb-4 sm:mb-0">
                <ShareButton
                  icon={<FaFacebookF />}
                  color="bg-blue-600"
                  onClick={() => handleShare("facebook")}
                />
                <ShareButton
                  icon={<FaTwitter />}
                  color="bg-sky-400"
                  onClick={() => handleShare("twitter")}
                />
                <ShareButton
                  icon={<FaLinkedinIn />}
                  color="bg-blue-700"
                  onClick={() => handleShare("linkedin")}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Comments
              </h3>
              <button
                onClick={() => setShowComments(!showComments)}
                className="mb-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center transition-colors"
              >
                <FaRegComment className="mr-2" />
                {showComments ? "Hide Comments" : "Show Comments"}
              </button>
              <AnimatePresence>
                {showComments && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {comments.map((comment) => (
                      <div
                        key={comment._id}
                        className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4"
                      >
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {comment.author}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                          {comment.content}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                          {new Date(comment.createdAt).toLocaleString()}
                        </p>
                      </div>
                    ))}
                    <form
                      onSubmit={handleCommentSubmit}
                      className="mt-6 space-y-4"
                    >
                      <input
                        type="text"
                        value={commentAuthor}
                        onChange={(e) => setCommentAuthor(e.target.value)}
                        className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Your Name"
                        required
                      />
                      <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Add a comment..."
                        rows={4}
                        required
                      />
                      <button
                        type="submit"
                        className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                      >
                        Post Comment
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </article>
      </main>
    </motion.div>
  );
}

function ShareButton({
  icon,
  color,
  onClick,
}: {
  icon: React.ReactNode;
  color: string;
  onClick: () => void;
}) {
  return (
    <button
      className={`${color} text-white p-2 rounded-full hover:opacity-80 transition-opacity`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
