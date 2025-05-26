import { BlogPost, Comment } from "./type";

const baseUrl =
  process.env.NEXT_PUBLIC_PRODUCTION_URL || "http://localhost:3000";

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${baseUrl}/api/blogposts`, {
      next: {
        revalidate: 10,
        tags: ["blogposts"],
      },
    });

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function createBlogPost(formData: FormData): Promise<Response> {
  return fetch(`${baseUrl}/api/blogposts`, {
    method: "POST",
    body: formData,
  });
}

export async function updateBlogPost(
  id: string,
  formData: FormData
): Promise<Response> {
  return fetch(`${baseUrl}/api/blogposts/${id}`, {
    method: "PUT",
    body: formData,
  });
}

export async function deleteBlogPost(id: string): Promise<Response> {
  return fetch(`${baseUrl}/api/blogposts/${id}`, {
    method: "DELETE",
  });
}

export async function getBlogPostComments(blogPostId: string): Promise<Comment[]> {
  try {
    const response = await fetch(`${baseUrl}/api/comments?blogPostId=${blogPostId}`, {
      next: {
        revalidate: 10,
        tags: ["comments"],
      },
    });

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
}

export async function createComment(blogPostId: string, author: string, content: string): Promise<Response> {
  return fetch(`${baseUrl}/api/comments`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ blogPostId, author, content }),
  });
}

export async function updateComment(id: string, content: string): Promise<Response> {
  return fetch(`${baseUrl}/api/comments/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  });
}

export async function deleteComment(id: string): Promise<Response> {
  return fetch(`${baseUrl}/api/comments/${id}`, {
    method: "DELETE",
  });
}