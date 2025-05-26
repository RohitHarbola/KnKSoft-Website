'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface Comment {
  _id: string;
  blogPostId: string;
  author: string;
  content: string;
  createdAt: string;
}

export default function CommentManager() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [editingComment, setEditingComment] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get('/api/comments');
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleEdit = (comment: Comment) => {
    setEditingComment(comment._id);
    setEditContent(comment.content);
  };

  const handleSave = async (id: string) => {
    try {
      await axios.put(`/api/comments/${id}`, { content: editContent });
      setEditingComment(null);
      fetchComments();
    } catch (error) {
      console.error('Error updating comment:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/comments/${id}`);
      fetchComments();
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Comment Manager</h2>
      {comments.map((comment) => (
        <div key={comment._id} className="bg-white shadow-md rounded-lg p-4 mb-4">
          <p><strong>Author:</strong> {comment.author}</p>
          <p><strong>Blog Post ID:</strong> {comment.blogPostId}</p>
          {editingComment === comment._id ? (
            <div>
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="w-full p-2 border rounded"
              />
              <button onClick={() => handleSave(comment._id)} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Save</button>
              <button onClick={() => setEditingComment(null)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
            </div>
          ) : (
            <div>
              <p><strong>Content:</strong> {comment.content}</p>
              <button onClick={() => handleEdit(comment)} className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">Edit</button>
              <button onClick={() => handleDelete(comment._id)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

