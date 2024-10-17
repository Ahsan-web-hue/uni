// StudentPortal.jsx

import React, { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../images/logo_optimized.png';
import studentsData from '../private_info/student_info'; // Ensure the path is correct
import {
  FaUser,
  FaHome,
  FaUserCheck,
  FaClock,
  FaMedal,
  FaGhost,
  FaMoneyBill,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const StudentPortal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, role } = location.state || {};

  // If no user is logged in, redirect to login page
  if (!user) {
    navigate('/');
    return null;
  }

  // State to handle sidebar visibility on mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar for mobile view
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between bg-gray-900 text-white p-4 shadow-md lg:hidden">
          <div className="flex items-center">
            <img src={logo} alt="Asia University Logo" className="w-8 h-8 mr-2" />
            <span className="text-xl font-bold">Asia University</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-2xl"
            aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-3xl font-bold mb-6">Welcome, {user.sname}</h1>

          {/* Student Information Card */}
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <img
                src={user.image}
                alt={`${user.sname}'s avatar`}
                className="w-24 h-24 rounded-full mr-6 object-cover"
              />
              <div>
                <h2 className="text-2xl font-semibold">{user.sname}</h2>
                <p className="text-gray-600">{role}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <strong>ID:</strong> {user.id}
              </div>
              <div>
                <strong>Course:</strong> {user.course}
              </div>
              <div>
                <strong>Department:</strong> {user.department}
              </div>
              <div>
                <strong>Enrollment Date:</strong> {user.enrollment_date}
              </div>
              <div>
                <strong>Status:</strong> {user.status}
              </div>
              <div>
                <strong>Email:</strong> {user.semail}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Sidebar Component
const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Overlay for Mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}

      <aside
        className={`bg-gray-800 text-white w-64 p-6 space-y-6 absolute inset-y-0 left-0 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0 z-30`}
      >
        {/* Logo and Title */}
        <div className="flex items-center">
          <img src={logo} alt="Asia University Logo" className="w-12 h-12 mr-3" />
          <span className="text-2xl font-bold">Asia University</span>
        </div>

        {/* Sidebar Header */}
        <h2 className="text-2xl font-bold mt-10 flex items-center">
          Student Portal <FaUser className="ml-2" />
        </h2>

        {/* Navigation Links */}
        <ul className="mt-6 space-y-4">
          <li>
            <NavLink
              to="/StudentPortal"
              className={({ isActive }) =>
                `flex items-center ${isActive ? 'text-yellow-300' : 'hover:text-gray-300'}`
              }
              onClick={() => toggleSidebar()} // Close sidebar on link click (for mobile)
            >
              <FaHome className="mr-2" /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ErrorPage"
              className={({ isActive }) =>
                `flex items-center ${isActive ? 'text-yellow-300' : 'hover:text-gray-300'}`
              }
              onClick={() => toggleSidebar()}
            >
              <FaUserCheck className="mr-2" /> Student's View
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ErrorPage"
              className={({ isActive }) =>
                `flex items-center ${isActive ? 'text-yellow-300' : 'hover:text-gray-300'}`
              }
              onClick={() => toggleSidebar()}
            >
              <FaClock className="mr-2" /> Attendance
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ErrorPage"
              className={({ isActive }) =>
                `flex items-center ${isActive ? 'text-yellow-300' : 'hover:text-gray-300'}`
              }
              onClick={() => toggleSidebar()}
            >
              <FaMedal className="mr-2" /> Evaluation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ErrorPage"
              className={({ isActive }) =>
                `flex items-center ${isActive ? 'text-yellow-300' : 'hover:text-gray-300'}`
              }
              onClick={() => toggleSidebar()}
            >
              <FaGhost className="mr-2" /> Academic History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/load"
              className={({ isActive }) =>
                `flex items-center ${isActive ? 'text-yellow-300' : 'hover:text-gray-300'}`
              }
              onClick={() => toggleSidebar()}
            >
              <FaMoneyBill className="mr-2" /> Challan Forms
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default StudentPortal;
