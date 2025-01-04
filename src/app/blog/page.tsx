import { posts } from '@/app/data/posts';
import BlogCard from '@/app/component/BlogCard';

export default function BlogList() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}