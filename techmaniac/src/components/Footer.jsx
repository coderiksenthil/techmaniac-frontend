import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Make sure to install react-icons if you haven't

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
                {/* Links Section */}
                <div className="mb-8 md:mb-0">
                    <h5 className="text-xl font-bold mb-4">Quick Links</h5>
                    <ul className="space-y-2">
                        <li>
                            <a href="/" className="hover:text-yellow-300 transition duration-200">Home</a>
                        </li>
                        <li>
                            <a href="/news" className="hover:text-yellow-300 transition duration-200">News</a>
                        </li>
                        <li>
                            <a href="/spotlight" className="hover:text-yellow-300 transition duration-200">Spotlight</a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-yellow-300 transition duration-200">About</a>
                        </li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="mb-8 md:mb-0">
                    <h5 className="text-xl font-bold mb-4">Follow Us</h5>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-yellow-300 transition duration-200">
                            <FaFacebookF className="h-6 w-6" />
                        </a>
                        <a href="#" className="hover:text-yellow-300 transition duration-200">
                            <FaTwitter className="h-6 w-6" />
                        </a>
                        <a href="#" className="hover:text-yellow-300 transition duration-200">
                            <FaInstagram className="h-6 w-6" />
                        </a>
                        <a href="#" className="hover:text-yellow-300 transition duration-200">
                            <FaLinkedinIn className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-8 border-t border-gray-700 pt-4">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Techmaniac. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
