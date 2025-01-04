import Image from "next/image";

export default function BlogCard({ post }: any) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
            {post.category || 'Article'}
          </span>
        </div>
        <h2 className="text-2xl font-bold mb-3 text-gray-800 hover:text-blue-600 transition-colors">
          <a href={`/blog/${post.id}`}>{post.title}</a>
        </h2>
        <div className="flex items-center mb-4">
          <Image 
            src={post.authorImage } 
            alt={post.author}
            width={8}
            height={8}
            className="w-8 h-8 rounded-full mr-3"
          />
          <div>
            <p className="text-gray-700 font-medium">{post.author}</p>
            <p className="text-gray-500 text-sm">{post.date}</p>
          </div>
        </div>
        <p className="text-gray-600 flex-grow">{post.content.substring(0, 150)}...</p>
        <div className="mt-4">
          <a 
            href={`/blog/${post.id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            Read More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}