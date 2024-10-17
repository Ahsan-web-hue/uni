import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer, Slide, Zoom, Flip, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure to import the CSS

function UserForm() {
  const { eventType } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    category: "Option 1",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic Validation
    if (!formData.name || !formData.age || !formData.email) {
      toast.error("Please fill in all the fields.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setIsSubmitting(false);
      return;
    }

    // Additional Validation: Age should be between 1 and 120
    if (formData.age < 18) {
      toast.warning("You are Not Eligible", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate a successful submission (you can replace this with an actual API call)
    toast.info("Submitting your application...", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      icon: "⏳", // Custom icon
    });

    setTimeout(() => {
      // Simulate success response
      toast.success("Thanks for filling out the form!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        transition: Flip, 
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Reset form after submission
      setFormData({
        name: "",
        age: "",
        email: "",
        category: "Option 1",
      });
      setIsSubmitting(false);

      // Navigate to the home page after a short delay to allow the success toast to show
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-4">
      {/* Configure ToastContainer with global settings */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" // You can choose "light", "dark", or "colored"
        transition={Slide} // Default transition
      />

      <form
        onSubmit={sendEmail}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate-fade-in"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Apply for {eventType.charAt(0).toUpperCase() + eventType.slice(1)}
        </h2>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Age Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your age"
            required
            min="1"
            max="120"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default UserForm;
