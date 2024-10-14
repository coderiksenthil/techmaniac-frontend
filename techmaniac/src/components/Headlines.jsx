import React from 'react';
import './component.css'; // Import custom CSS for marquee effect

const Headlines = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Top Headlines.</h1>

      {/* Marquee scroll container */}
      <div className="relative overflow-hidden">
        <div className="flex marquee">
          {/* First Card */}
          <div className="bg-white shadow-lg rounded-lg p-4 mx-3 min-w-[300px]">
            <img
              src="https://example.com/marble-column.jpg" // Replace with actual image URL
              className="rounded-lg"
              alt="Marble column from the Temple of Artemis at Sardis"
            />
            <div className="text-center mt-4">
              <p className="font-semibold text-lg">Marble column from the Temple of Artemis at Sardis</p>
              <button className="mt-2 px-4 py-2 bg-gray-200 text-black rounded-full hover:bg-gray-300">
                View More <span className="ml-2">➜</span>
              </button>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white shadow-lg rounded-lg p-4 mx-3 min-w-[300px]">
            <img
              src="https://example.com/ARPA-image.jpg" // Replace with actual image URL
              className="rounded-lg"
              alt="ARPA becomes accessible online"
            />
            <div className="text-center mt-4">
              <p className="font-semibold text-lg">In December, ARPA becomes accessible online</p>
              <button className="mt-2 px-4 py-2 bg-gray-200 text-black rounded-full hover:bg-gray-300">
                View More <span className="ml-2">➜</span>
              </button>
            </div>
          </div>

          {/* Third Card (Subscription) */}
          <div className="bg-yellow-300 shadow-lg rounded-lg p-4 mx-3 min-w-[300px]">
            <div className="text-center">
              <h5 className="font-bold text-lg mb-4">Choose to receive all news updates.</h5>
              <div className="flex justify-center">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-2 rounded-l-full focus:outline-none"
                />
                <button className="bg-black text-white px-4 py-2 rounded-r-full">
                  Subscribe <span className="ml-2">➜</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headlines;
