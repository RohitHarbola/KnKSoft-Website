"use client";

import { useState, useCallback, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import NextImage from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useDropzone } from "react-dropzone";
import {
  Loader2,
  X,
  Upload,
  Tag,
  Pencil,
  Trash2,
  Bold,
  Italic,
  Link as LinkIcon,
  List,
  ListOrdered,
  Quote,
  UnderlineIcon,
  Heading1,
  Heading2,
  Heading3,
  ImageIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Highlighter,
} from "lucide-react";
import toast from "react-hot-toast";
import { BlogPost } from "@/lib/blog/type";

interface CreateBlogPostProps {
  onPostCreatedAction?: (post: BlogPost) => Promise<void>;
  onPostUpdatedAction?: (post: BlogPost) => Promise<void>;
  onPostDeletedAction?: (postId: string) => Promise<void>;
}

interface EditorProps {
  editor: ReturnType<typeof useEditor>;
}

const MenuBar = ({ editor }: EditorProps) => {
  const addImage = useCallback(() => {
    const url = window.prompt("Enter the URL of the image:");
    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes("link").href || "";
    const url = window.prompt("Enter the URL:", previousUrl);

    if (url === null) return;
    if (url === "") {
      editor?.chain().focus().unsetLink().run();
      return;
    }
    editor?.chain().focus().setLink({ href: url }).run();
  }, [editor]);

  return (
    <div className="flex flex-wrap gap-2 p-2 mb-2 border-b border-gray-200 bg-white rounded-t-lg">
      {/* Text formatting */}
      <div className="flex gap-1 mr-2 border-r pr-2 border-gray-200">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleBold().run();
          }}
          disabled={!editor?.can().chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor?.isActive("bold") ? "bg-gray-200" : ""
          }`}
          title="Bold"
        >
          <Bold size={18} />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleItalic().run();
          }}
          disabled={!editor?.can().chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor?.isActive("italic") ? "bg-gray-200" : ""
          }`}
          title="Italic"
        >
          <Italic size={18} />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleUnderline().run();
          }}
          disabled={!editor?.can().chain().focus().toggleUnderline().run()}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor?.isActive("underline") ? "bg-gray-200" : ""
          }`}
          title="Underline"
        >
          <UnderlineIcon size={18} />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleHighlight().run();
          }}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor?.isActive("highlight") ? "bg-gray-200" : ""
          }`}
          title="Highlight"
        >
          <Highlighter size={18} />
        </button>
      </div>

      {/* Headings */}
      <div className="flex gap-1 mr-2 border-r pr-2 border-gray-200">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleHeading({ level: 1 }).run();
          }}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor?.isActive("heading", { level: 1 }) ? "bg-gray-200" : ""
          }`}
          title="Heading 1"
        >
          <Heading1 size={18} />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor?.isActive("heading", { level: 2 }) ? "bg-gray-200" : ""
          }`}
          title="Heading 2"
        >
          <Heading2 size={18} />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleHeading({ level: 3 }).run();
          }}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor?.isActive("heading", { level: 3 }) ? "bg-gray-200" : ""
          }`}
          title="Heading 3"
        >
          <Heading3 size={18} />
        </button>
      </div>

      {/* Alignment */}
      <div className="flex gap-1 mr-2 border-r pr-2 border-gray-200">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().setTextAlign("left").run();
          }}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor?.isActive({ textAlign: "left" }) ? "bg-gray-200" : ""
          }`}
          title="Align Left"
        >
          <AlignLeft size={18} />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().setTextAlign("center").run();
          }}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor?.isActive({ textAlign: "center" }) ? "bg-gray-200" : ""
          }`}
          title="Align Center"
        >
          <AlignCenter size={18} />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().setTextAlign("right").run();
          }}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor?.isActive({ textAlign: "right" }) ? "bg-gray-200" : ""
          }`}
          title="Align Right"
        >
          <AlignRight size={18} />
        </button>
      </div>

      {/* Lists and quotes */}
      <div className="flex gap-1 mr-2 border-r pr-2 border-gray-200">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleBulletList().run();
          }}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor?.isActive("bulletList") ? "bg-gray-200" : ""
          }`}
          title="Bullet List"
        >
          <List size={18} />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleOrderedList().run();
          }}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor?.isActive("orderedList") ? "bg-gray-200" : ""
          }`}
          title="Ordered List"
        >
          <ListOrdered size={18} />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleBlockquote().run();
          }}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor?.isActive("blockquote") ? "bg-gray-200" : ""
          }`}
          title="Quote"
        >
          <Quote size={18} />
        </button>
      </div>

      {/* Links and images */}
      <div className="flex gap-1 mr-2 border-r pr-2 border-gray-200">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setLink();
          }}
          className={`p-2 rounded hover:bg-gray-100 ${
            editor?.isActive("link") ? "bg-gray-200" : ""
          }`}
          title="Add Link"
        >
          <LinkIcon size={18} />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            addImage();
          }}
          className="p-2 rounded hover:bg-gray-100"
          title="Add Image"
        >
          <ImageIcon size={18} />
        </button>
      </div>

      {/* Font options */}
      <div className="flex gap-1">
        <select
          value={editor?.getAttributes("textStyle").fontFamily || ""}
          onChange={(e) => {
            e.preventDefault();
            editor?.chain().focus().setFontFamily(e.target.value).run();
          }}
          className="p-2 rounded border border-gray-200 hover:bg-gray-100"
          title="Font Family"
        >
          <option value="">Default</option>
          <option value="Arial">Arial</option>
          <option value="Georgia">Georgia</option>
          <option value="Inter">Inter</option>
          <option value="monospace">Monospace</option>
          <option value="serif">Serif</option>
        </select>

        <select
          value={editor?.getAttributes("textStyle").fontSize || ""}
          onChange={(e) => {
            e.preventDefault();
            editor
              ?.chain()
              .focus()
              .setMark("textStyle", { fontSize: e.target.value })
              .run();
          }}
          className="p-2 rounded border border-gray-200 hover:bg-gray-100"
          title="Font Size"
        >
          <option value="">Default</option>
          <option value="12px">Small</option>
          <option value="16px">Normal</option>
          <option value="20px">Large</option>
          <option value="24px">X-Large</option>
        </select>

        <input
          type="color"
          value={editor?.getAttributes("textStyle").color || "#000000"}
          onChange={(e) => {
            e.preventDefault();
            editor?.chain().focus().setColor(e.target.value).run();
          }}
          className="p-1 rounded border border-gray-200 w-10 h-10 cursor-pointer"
          title="Text Color"
        />
      </div>
    </div>
  );
};

export default function CreateBlogPost({
  onPostCreatedAction = async () => {},
  onPostUpdatedAction = async () => {},
  onPostDeletedAction = async () => {},
}: CreateBlogPostProps) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const baseUrl =
    process.env.NEXT_PUBLIC_PRODUCTION_URL || "";

  const fetchBlogPosts = useCallback(async () => {
    try {
      const response = await fetch(`${baseUrl}/api/blogposts`, {
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch blog posts: ${response.status}`);
      }
      const posts: BlogPost[] = await response.json();
      toast.success("Blog posts fetched successfully");
      setBlogPosts(posts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      toast.error("Failed to fetch blog posts. Please try again.");
    }
  }, [baseUrl]);

  useEffect(() => {
    fetchBlogPosts();
  }, [fetchBlogPosts]);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
          HTMLAttributes: {
            class: "font-bold",
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-disc pl-6",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal pl-6",
          },
        },
        blockquote: {
          HTMLAttributes: {
            class: "border-l-4 border-gray-300 pl-4 italic text-gray-600",
          },
        },
      }),
      Image.configure({
        inline: false,
        allowBase64: true,
        HTMLAttributes: {
          class: "max-w-full h-auto rounded-md my-2",
        },
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          class: "text-blue-600 hover:underline",
        },
      }),
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph", "blockquote", "image"],
        defaultAlignment: "left",
      }),
      Highlight.configure({
        multicolor: true,
      }),
      TextStyle,
      Color,
      FontFamily.configure({
        types: ["textStyle"],
      }),
      Placeholder.configure({
        placeholder: "Write your blog post content here...",
      }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none focus:outline-none p-4 min-h-[300px] border rounded-b-lg",
      },
    },
    onUpdate: ({ editor }) => {
      console.log("Editor content updated:", editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && editingPost) {
      editor.commands.setContent(editingPost.content);
      setTitle(editingPost.title);
      setTags(editingPost.tags);
      setPreviewImage(editingPost.image || null);
    }
  }, [editingPost, editor]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles[0]) {
      const file = acceptedFiles[0];
      if (!file.type.startsWith("image/")) {
        toast.error("Please upload an image file");
        return;
      }
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpg", ".jpeg", ".png", ".gif"] },
    multiple: false,
    maxSize: 5 * 1024 * 1024, // 5MB limit
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    if (!title.trim()) {
      setError("Title is required");
      setIsSubmitting(false);
      return;
    }

    if (!editor?.getHTML() || editor.getHTML() === "<p></p>") {
      setError("Content is required");
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", editor.getHTML());
    formData.append("tags", JSON.stringify(tags));
    if (image) {
      formData.append("image", image);
    }

    try {
      const url = editingPost
        ? `${baseUrl}/api/blogposts/${editingPost._id}`
        : `${baseUrl}/api/blogposts`;

      const response = await fetch(url, {
        method: editingPost ? "PUT" : "POST",
        body: formData,
        cache: "no-store",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to process blog post");
      }

      const result: BlogPost = await response.json();

      if (editingPost) {
        toast.success("Blog post updated successfully!");
        await onPostUpdatedAction(result);
      } else {
        toast.success("Blog post created successfully!");
        await onPostCreatedAction(result);
      }

      resetForm();
      await fetchBlogPosts();
    } catch (error) {
      console.error("Error processing blog post:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to process blog post. Please try again."
      );
      toast.error("Failed to process blog post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setTitle("");
    editor?.commands.setContent("");
    setImage(null);
    setPreviewImage(null);
    setTags([]);
    setCurrentTag("");
    setEditingPost(null);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (postId: string) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      const response = await fetch(`${baseUrl}/api/blogposts/${postId}`, {
        method: "DELETE",
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Failed to delete blog post");
      }

      toast.success("Blog post deleted successfully!");
      await onPostDeletedAction(postId);
      await fetchBlogPosts();
    } catch (error) {
      console.error("Error deleting blog post:", error);
      setError("Failed to delete blog post. Please try again.");
      toast.error("Failed to delete blog post. Please try again.");
    }
  };

  const addTag = () => {
    const trimmedTag = currentTag.trim();
    if (trimmedTag && !tags.includes(trimmedTag) && trimmedTag.length <= 20) {
      setTags([...tags, trimmedTag]);
      setCurrentTag("");
    } else if (trimmedTag.length > 20) {
      toast.error("Tags must be 20 characters or less");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-background p-6 md:p-8 rounded-lg shadow-lg my-8"
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        {editingPost ? "Edit Blog Post" : "Create New Blog Post"}
      </h1>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-500 mb-4 p-3 bg-red-100 rounded-md"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
            required
            maxLength={100}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground">
            Content
          </label>
          <div className="border border-border rounded-lg overflow-hidden">
            {editor && <MenuBar editor={editor} />}
            <EditorContent editor={editor} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Featured Image
          </label>
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-md p-4 text-center cursor-pointer transition-colors ${
              isDragActive
                ? "border-purple-500 bg-purple-50"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <input {...getInputProps()} />
            {previewImage ? (
              <div className="relative w-full max-w-md mx-auto">
                <NextImage
                  src={previewImage}
                  alt="Preview"
                  width={384}
                  height={256}
                  className="rounded-md object-cover"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setImage(null);
                    setPreviewImage(null);
                  }}
                  className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full p-1 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <div className="text-gray-500">
                <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                <p>Drag & drop an image here, or click to select one</p>
                <p className="text-sm text-muted-foreground">
                  (Max 5MB, JPG/PNG/GIF)
                </p>
              </div>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Tags
          </label>
          <div className="flex items-center gap-2">
            <input
              id="tags"
              type="text"
              value={currentTag}
              onChange={(e) => setCurrentTag(e.target.value)}
              onKeyPress={(e) =>
                e.key === "Enter" && (e.preventDefault(), addTag())
              }
              className="flex-grow px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
              placeholder="Add a tag and press Enter"
              maxLength={20}
            />
            <button
              type="button"
              onClick={addTag}
              className="bg-primary text-primary-foreground py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
            >
              Add
            </button>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <AnimatePresence>
              {tags.map((tag) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="inline-flex items-center bg-muted text-muted-foreground rounded-full px-3 py-1 text-sm"
                >
                  <Tag size={14} className="mr-1" />
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-1 text-destructive hover:text-destructive-foreground"
                  >
                    <X size={14} />
                  </button>
                </motion.span>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex gap-4">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 disabled:bg-purple-400 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin mr-2" size={20} />
            ) : null}
            {isSubmitting
              ? "Processing..."
              : editingPost
              ? "Update Post"
              : "Create Post"}
          </motion.button>

          {editingPost && (
            <motion.button
              type="button"
              onClick={resetForm}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
            >
              Cancel Edit
            </motion.button>
          )}
        </div>
      </form>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
        Existing Blog Posts
      </h2>
      <div className="space-y-4">
        {blogPosts.length === 0 ? (
          <p className="text-gray-500">No blog posts yet.</p>
        ) : (
          blogPosts.map((post) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="border p-4 rounded-md hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {post.title}
              </h3>
              <div
                className="text-gray-600 mt-2 line-clamp-2"
                dangerouslySetInnerHTML={{
                  __html: post.content.substring(0, 100) + "...",
                }}
              />
              <div className="mt-2 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-800 rounded-full px-2 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleEdit(post)}
                  className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 flex items-center transition-colors"
                >
                  <Pencil size={16} className="mr-1" /> Edit
                </button>
                <button
                  onClick={() => handleDelete(post._id)}
                  className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 flex items-center transition-colors"
                >
                  <Trash2 size={16} className="mr-1" /> Delete
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  );
}
