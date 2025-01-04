export default function CommentList({ comments }) {
    return (
      <div className="mt-8 space-y-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Comments ({comments.length})</h3>
        {comments.length === 0 ? (
          <div className="bg-white rounded-xl p-6 text-center text-gray-500">
            <p className="text-lg">No comments yet. Be the first to share your thoughts!</p>
          </div>
        ) : (
          comments.map((comment, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold">
                    {comment.name[0].toUpperCase()}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-gray-800">{comment.name}</h4>
                    <span className="text-sm text-gray-500">
                      {new Date(comment.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600">{comment.comment}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
  