import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import React Toastify CSS
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import './uni.css'; // Custom styles if any

const PageNotFound = () => {
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 10 seconds
      toast.error('Page Not Found! Server Error', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }, 5000); // Show error after 10 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="loader"></div> {/* Loading spinner */}
          <h2 className="text-lg text-gray-600 mt-4">Loading...</h2>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-6xl font-bold text-red-600 mb-4">
            <i className="fas fa-exclamation-triangle"></i> 404
          </h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-6">
            The page you are looking for does not exist.
          </p>
          <button 
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            onClick={() => window.location.href = '/'} // Redirect to home on button click
          >
            Go to Home
          </button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default PageNotFound;
