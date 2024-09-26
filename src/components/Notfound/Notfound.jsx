import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white overflow-hidden">
            {/* Background Circle Elements */}
            <div className="absolute w-96 h-96 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-gray-600 to-gray-800 rounded-full opacity-30 animate-pulse delay-75"></div>
            <div className="absolute w-64 h-64 bg-gradient-to-tl from-gray-500 to-gray-700 rounded-full opacity-40 animate-pulse delay-150"></div>

            {/* Main Content */}
            <div className="relative z-10 text-center">
                <h1 className="text-[10rem] font-extrabold tracking-tight leading-none mb-4">
                    4
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 animate-gradient">0</span>
                    4
                </h1>
                <p className="text-2xl font-light mb-6 text-gray-400">
                    Oops! The page you’re looking for doesn’t exist.
                </p>
                <Link
                    to="/"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-gray-700 via-gray-800 to-black text-white rounded-full font-medium text-lg hover:from-black hover:to-gray-700 transition-all duration-300 ease-in-out shadow-lg"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
