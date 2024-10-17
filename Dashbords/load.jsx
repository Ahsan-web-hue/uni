// ErrorPage.jsx

import React, { useState, useEffect } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timer to switch from loading to error after 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {isLoading ? (
        // Loading Animations
        <div className="flex flex-col items-center space-y-6">
          {/* Spinning Loader */}
          <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500"></div>
          
          {/* Bouncing Text */}
          <div className="text-xl font-semibold text-gray-700">
            <span className="animate-bounce">Loading</span>
            <span className="animate-bounce delay-200">.</span>
            <span className="animate-bounce delay-400">.</span>
            <span className="animate-bounce delay-600">.</span>
          </div>
        </div>
      ) : (
        // Server Error Message
        <div className="flex flex-col items-center space-y-4 text-center">
          {/* Error Icon */}
          <FaExclamationTriangle className="text-6xl text-red-500" />

          {/* Error Title */}
          <h1 className="text-4xl font-bold text-gray-800">Server Error</h1>

          {/* Error Description */}
          <p className="text-lg text-gray-600">
            Oops! Something went wrong on our end. Please try again later.
          </p>

          {/* Retry Button */}
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
