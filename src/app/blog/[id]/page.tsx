'use client';
import { useState } from 'react';
import { posts } from '@/app/data/posts';
import CommentForm from '@/app/component/CommentForm';
import CommentList from '@/app/component/CommentList';
import Image from 'next/image';

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === parseInt(params.id));
  
  interface Comment {
    name: string;
    comment: string;
    date: string;
  }

  const [comments, setComments] = useState<Comment[]>([]);

  const handleCommentSubmit = async (newComment: Comment) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    setComments([...comments, newComment]);
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Post Not Found</h2>
          <p className="text-gray-600 mb-6">The post you&apos;re looking for doesn&apos;t exist.</p>
          <a 
            href="/blog" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">{post.title}</h1>
        <div className="flex items-center mb-8 space-x-4">
          <Image 
            src={post.authorImage || '/api/placeholder/48/48'} 
            alt={post.author}
            width={12}
            height={12}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="text-gray-800 font-medium">{post.author}</p>
            <p className="text-gray-500">{post.date}</p>
          </div>
        </div>
        <div className="prose max-w-none">
          {post.content}
        </div>
      </div>
      <div className="space-y-8">
        <CommentForm onSubmit={handleCommentSubmit} />
        <CommentList comments={comments} />
      </div>
    </article>
  );
}