import React, { useEffect, useState } from 'react';

const BlogFetch = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogs(data.slice(0, 6)); // Display only the first 6 posts
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleClick = (id) => {
    // For now, just log the id or navigate to a new page
    console.log(`Post ${id} clicked!`);
    // You can also use a router to navigate to a different page
    // For example: history.push(`/posts/${id}`);
  };

  if (loading) return <div className="text-center text-yellow-300 text-2xl">Loading...</div>;
  if (error) return <div className="text-center text-red-500 text-2xl">Error: {error}</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-yellow-300 mb-6">Latest Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:shadow-xl hover:scale-105"
            onClick={() => handleClick(blog.id)}
          >
            {/* Placeholder Image with dynamic styles */}
            <img
              src={`https://picsum.photos/seed/${blog.id}/600/400`}
              alt={`Post ${blog.id}`}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800 hover:text-yellow-500 transition duration-200">{blog.title}</h2>
              <p className="text-gray-700 line-clamp-3">{blog.body}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-500 text-sm">Read more</span>
                <span className="text-yellow-500 font-bold">🔗</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogFetch;
