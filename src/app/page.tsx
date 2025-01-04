export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="space-y-6 animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Welcome to BlogSpace
        </h1>
        <p className="text-xl text-gray-600 md:text-2xl">
          Discover inspiring stories and insights from our community
        </p>
        <a 
          href="/blog" 
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg"
        >
          Explore Posts
        </a>
      </div>
    </div>
  );
}