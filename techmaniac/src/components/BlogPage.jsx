// src/BlogSlider.js
import React, { useEffect, useState } from 'react';

const BlogSlider = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
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
        setBlogs(data.slice(0, 4)); // Display only the first 4 posts for the slider
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [blogs]);

  if (loading) return <div className="text-center text-white">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
      {blogs.map((blog, index) => (
        <div
          key={blog.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out transform ${
            index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            backgroundImage: `url(https://picsum.photos/seed/${blog.id}/800/400)`, // Example image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50 transition duration-300">
            <div className="text-center p-6">
              <h1 className="text-4xl font-bold text-yellow-300 mb-4">{blog.title}</h1>
              <p className="text-lg text-gray-300">{blog.body.slice(0, 100)}...</p>
              <a href={`#${blog.id}`} className="text-yellow-300 hover:underline mt-4 inline-block">
                Read more
              </a>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {blogs.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition duration-300 ${
              index === currentIndex ? 'bg-yellow-300' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

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
        setBlogs(data.slice(4, 8)); // Display the next 4 posts
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="text-center text-white">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-yellow-300 mb-6">Exclusive Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            onClick={() => console.log(`Post ${blog.id} clicked!`)}
          >
            <img
              src={`https://picsum.photos/seed/${blog.id}/600/400`}
              alt={`Post ${blog.id}`}
              className="w-full h-48 object-cover transition-transform duration-300"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{blog.title}</h2>
              <p className="text-gray-700 line-clamp-3">{blog.body}</p>
              <div className="mt-4 flex justify-between items-center">
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

const BlogPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      <BlogSlider />
      <BlogFetch />
    </div>
  );
};

export default BlogPage;
