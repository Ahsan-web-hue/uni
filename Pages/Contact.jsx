import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (name && email && message) {
      setIsSubmitting(true);
      try {
        // Simulate form submission
        const response = { status: 200 };

        if (response.status === 200) {
          toast.success('✅ Your query has been sent successfully!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            transition: Slide,
          });

          setFormData({
            name: '',
            email: '',
            message: ''
          });

          setTimeout(() => {
            window.location.reload();
          }, 3000);
        } else {
          toast.error('❌ Something went wrong. Please try again.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            transition: Slide,
          });
        }
      } catch (error) {
        toast.error('❌ Failed to submit the form. Please try again later.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          transition: Slide,
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      toast.error('⚠️ Please fill in all fields.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition: Slide,
      });
    }
  };

  return (
    <div>
      <ToastContainer />

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Your%20University%20Location&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{
                filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
                border: 'none',
                position: 'absolute',
                inset: 0,
              }}
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">Asia University, PAKISTAN </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a href="mailto:contact@university.com" className="text-indigo-500 leading-relaxed">contact@university.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">+1 (+92) 123-4567</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Reach out for any queries or feedback. We are here to assist you!</p>
            
            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Your Name"
                  disabled={isSubmitting}
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Your Email"
                  disabled={isSubmitting}
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  placeholder="Your Message"
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                className={`text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-3">For university-related queries, feel free to contact us anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
