import { notFound } from "next/navigation";
import BlogSlug from "@/components/Blogs/BlogSlug";
import { generateSlug } from "@/lib/blog/utils";
import { getBlogPosts } from "@/lib/blog/api";
import type { BlogPost as BlogPostType } from "@/lib/blog/type";

export const dynamic = "force-dynamic";

async function getBlogPost(slug: string): Promise<BlogPostType | null> {
  try {
    const data = await getBlogPosts();
    const foundPost = data.find((post) => generateSlug(post.title) === slug);
    return foundPost || null;
  } catch (error) {
    console.error("Error fetching blog slug post:", error);
    return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Update the params access to handle Promise
  const { slug } = await params;

  const post = await getBlogPost(decodeURIComponent(slug));

  if (!post) {
    return notFound();
  }

  // Ensure all required fields exist
  const sanitizedPost = {
    _id: post._id,
    title: post.title || "Untitled Post",
    subtitle: post.subtitle || "",
    content: post.content || "",
    image: post.image || "/placeholder.jpg",
    author: {
      name: post?.author?.name || "Anonymous",
      avatar: post?.author?.avatar || "/default-avatar.jpg",
    },
    createdAt: post.createdAt || new Date().toISOString(),
    readingTime: post.readingTime || "5",
    tags: Array.isArray(post.tags) ? post.tags : [],
  };

  return (
    <div>
      <BlogSlug initialPost={sanitizedPost} />
    </div>
  );
}
