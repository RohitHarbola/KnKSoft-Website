import BlogCMS from "@/components/Blogs/BlogCMS";
import CommentManager from "@/components/Comments/CommentManager";
import { getBlogPosts } from "@/lib/blog/api";

export default async function Dashboard() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="container space-y-12 px-4">
      <BlogCMS initialBlogPosts={blogPosts} />
      <CommentManager />
    </div>
  );
}
