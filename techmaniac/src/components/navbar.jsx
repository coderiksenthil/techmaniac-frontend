    import React, { useState } from 'react';
    import { Link } from 'react-router-dom';

    const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
            
            {/* Logo Section */}
            <div className="flex items-center">
            <img
                src="/path-to-your-logo.png" // Replace this with the correct path to your logo
                alt="Techmaniac Logo"
                className="w-[200px] h-auto"
            />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 hover:underline transition duration-200">
                Home
            </Link>
            <Link to="/news" className="text-gray-700 hover:text-blue-600 hover:underline transition duration-200">
                News
            </Link>
            <Link to="/spotlight" className="text-gray-700 hover:text-blue-600 hover:underline transition duration-200">
                Spotlight
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 hover:underline transition duration-200">
                About
            </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
                {/* Hamburger Icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
            </button>
            </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
            <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium">
                Home
                </Link>
                <Link to="/news" className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium">
                News
                </Link>
                <Link to="/spotlight" className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium">
                Spotlight
                </Link>
                <Link to="/about" className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium">
                About
                </Link>
            </div>
            </div>
        )}
        </nav>
    );
    };

    export default Navbar;
