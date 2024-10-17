import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo_optimized.png';
import '../Pages/uni.css';
import students from '../private_info/student_info';
import { toast, ToastContainer } from 'react-toastify';

const Sidebar = () => {
  const name = "Ahsan";

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Group students by department
  const scienceStudents = students.filter(student => student.department === 'Science');
  const engineeringStudents = students.filter(student => student.department === 'Engineering');
  const healthSciencesStudents = students.filter(student => student.department === 'Health Sciences');
  const managementStudents = students.filter(student => student.department === 'Management');
  const socialSciencesStudents = students.filter(student => student.department === 'Social Sciences');
  const lawStudents = students.filter(student => student.department === 'Law');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase()); // Correct usage
  };

  // Function to filter students by search query
  const filterStudentsBySearch = (students) => {
    return students.filter(student => student.department.toLowerCase().includes(searchQuery));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Fixed Navbar */}
      <div className="bg-gray-900 text-white w-full py-4 flex items-center px-6 fixed top-0 z-10">
        <img src={logo} alt="Asia University Logo" className="w-12 h-12 mr-3" />
        <span className="text-2xl font-bold">Asia University</span>
      </div>

      {/* Fixed Sidebar */}
      <div className="bg-gray-800 text-white w-64 p-6 min-h-screen fixed top-16">
        <h2 className="text-2xl font-bold mt-10">Welcome, {name} <i className="fa-solid fa-user"></i></h2>
        <ul className="mt-6 space-y-4">
          <li>
            <Link to="/Nav" className="hover:text-gray-300 flex items-center">
              Dashboard <i className="fa-solid fa-house ml-2"></i>
            </Link>
          </li>
          <li>
            <Link to="/student-view" className="hover:text-gray-300 flex items-center">
              Student's View <i className="fa-solid fa-user-check ml-2"></i>
            </Link>
          </li>
          <li>
            <Link to="/attendance" className="hover:text-gray-300 flex items-center">
              Attendance <i className="fa-solid fa-clock-rotate-left ml-2"></i>
            </Link>
          </li>
          <li>
            <Link to="/evaluation" className="hover:text-gray-300 flex items-center">
              Evaluation <i className="fa-solid fa-medal ml-2"></i>
            </Link>
          </li>
          <li>
            <Link to="/academic-history" className="hover:text-gray-300 flex items-center">
              Academic History <i className="fa-solid fa-ghost ml-2"></i>
            </Link>
          </li>
          <li>
            <Link to="/challan-forms" className="hover:text-gray-300 flex items-center">
              Challan Forms <i className="fa-solid fa-money-bill ml-2"></i>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="ml-64 mt-16 p-8 w-full overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Student Information</h1>

        {/* Search Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by department..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>

        {/* Science Students Row */}
        <h2 className="text-2xl font-bold mb-4">Science Students</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filterStudentsBySearch(scienceStudents).map((student, index) => (
            <div key={index} className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                src={student.image || ""}
                alt={`${student.sname}'s photo`}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-center mb-2">{student.sname}</h2>
              <p className="text-center text-gray-600 mb-4">{student.department}</p>
              <div className="text-left">
                <p><strong>ID:</strong> {student.id}</p>
                <p><strong>Course:</strong> {student.course}</p>
                <p><strong>Enrollment Date:</strong> {student.enrollment_date}</p>
                <p><strong>Status:</strong> {student.status}</p>
                <p><strong>Email:</strong> {student.semail}</p>
                <div className="mt-4 flex justify-evenly">
                  <button
                    className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-200 transform hover:scale-105 mx-2'
                    title="View Details"
                  >
                    View Profile
                  </button>
                  <button
                    className='bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-200 transform hover:scale-105 mx-2'
                    onClick={() => toast("Student deleted!")} // Display a toast notification for deletion
                    title="Delete Student"
                  >
                    <i className="fa-solid fa-trash mr-2"></i> Delete
                  </button>
                  <button
                    className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200 transform hover:scale-105 hover:shadow-lg mx-2'
                    title="Edit Student"
                  >
                    <i className="fa-solid fa-pencil mr-2"></i> Edit
                  </button>
                </div>



              </div>
            </div>
          ))}
        </div>

        {/* Engineering Students Row */}
        <h2 className="text-2xl font-bold mb-4">Engineering Students</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filterStudentsBySearch(engineeringStudents).map((student, index) => (
            <div key={index} className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                src={student.image || ""}
                alt={`${student.sname}'s photo`}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-center mb-2">{student.sname}</h2>
              <p className="text-center text-gray-600 mb-4">{student.department}</p>
              <div className="text-left">
                <p><strong>ID:</strong> {student.id}</p>
                <p><strong>Course:</strong> {student.course}</p>
                <p><strong>Enrollment Date:</strong> {student.enrollment_date}</p>
                <p><strong>Status:</strong> {student.status}</p>
                <p><strong>Email:</strong> {student.semail}</p>
                <div className="mt-4 flex justify-evenly">
                  <button
                    className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-200 transform hover:scale-105 mx-2'
                    title="View Details"
                  >
                    View Profile
                  </button>
                  <button
                    className='bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-200 transform hover:scale-105 mx-2'
                    onClick={() => toast("Student deleted!")} // Display a toast notification for deletion
                    title="Delete Student"
                  >
                    <i className="fa-solid fa-trash mr-2"></i> Delete
                  </button>
                  <button
                    className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200 transform hover:scale-105 hover:shadow-lg mx-2'
                    title="Edit Student"
                  >
                    <i className="fa-solid fa-pencil mr-2"></i> Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* HELATH SCIENCE  */}
        <h2 className="text-2xl font-bold mb-4">Health Science </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filterStudentsBySearch(healthSciencesStudents).map((student, index) => (
            <div key={index} className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                src={student.image || ""}
                alt={`${student.sname}'s photo`}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-center mb-2">{student.sname}</h2>
              <p className="text-center text-gray-600 mb-4">{student.department}</p>
              <div className="text-left">
                <p><strong>ID:</strong> {student.id}</p>
                <p><strong>Course:</strong> {student.course}</p>
                <p><strong>Enrollment Date:</strong> {student.enrollment_date}</p>
                <p><strong>Status:</strong> {student.status}</p>
                <p><strong>Email:</strong> {student.semail}</p>
                <div className="mt-4 flex justify-evenly">
                  <button
                    className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-200 transform hover:scale-105 mx-2'
                    title="View Details"
                  >
                    View Profile
                  </button>
                  <button
                    className='bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-200 transform hover:scale-105 mx-2'
                    onClick={() => toast("Student deleted!")} // Display a toast notification for deletion
                    title="Delete Student"
                  >
                    <i className="fa-solid fa-trash mr-2"></i> Delete
                  </button>
                  <button
                    className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200 transform hover:scale-105 hover:shadow-lg mx-2'
                    title="Edit Student"
                  >
                    <i className="fa-solid fa-pencil mr-2"></i> Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Bussiness of Management and sciencs  */}
        <h2 className="text-2xl font-bold mb-4">Bussiness of Management and sciencs </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filterStudentsBySearch(managementStudents).map((student, index) => (
            <div key={index} className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                src={student.image || ""}
                alt={`${student.sname}'s photo`}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-center mb-2">{student.sname}</h2>
              <p className="text-center text-gray-600 mb-4">{student.department}</p>
              <div className="text-left">
                <p><strong>ID:</strong> {student.id}</p>
                <p><strong>Course:</strong> {student.course}</p>
                <p><strong>Enrollment Date:</strong> {student.enrollment_date}</p>
                <p><strong>Status:</strong> {student.status}</p>
                <p><strong>Email:</strong> {student.semail}</p>
                <div className="mt-4 flex justify-evenly">
                  <button
                    className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-200 transform hover:scale-105 mx-2'
                    title="View Details"
                  >
                    View Profile
                  </button>
                  <button
                    className='bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-200 transform hover:scale-105 mx-2'
                    onClick={() => toast("Student deleted!")} // Display a toast notification for deletion
                    title="Delete Student"
                  >
                    <i className="fa-solid fa-trash mr-2"></i> Delete
                  </button>
                  <button
                    className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200 transform hover:scale-105 hover:shadow-lg mx-2'
                    title="Edit Student"
                  >
                    <i className="fa-solid fa-pencil mr-2"></i> Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>



        <h2 className="text-2xl font-bold mb-4">Social Science </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filterStudentsBySearch(socialSciencesStudents).map((student, index) => (
            <div key={index} className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                src={student.image || ""}
                alt={`${student.sname}'s photo`}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-center mb-2">{student.sname}</h2>
              <p className="text-center text-gray-600 mb-4">{student.department}</p>
              <div className="text-left">
                <p><strong>ID:</strong> {student.id}</p>
                <p><strong>Course:</strong> {student.course}</p>
                <p><strong>Enrollment Date:</strong> {student.enrollment_date}</p>
                <p><strong>Status:</strong> {student.status}</p>
                <p><strong>Email:</strong> {student.semail}</p>
                <div className="mt-4 flex justify-evenly">
                  <button
                    className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-200 transform hover:scale-105 mx-2'
                    title="View Details"
                  >
                    View Profile
                  </button>
                  <button
                    className='bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-200 transform hover:scale-105 mx-2'
                    onClick={() => toast("Student deleted!")} // Display a toast notification for deletion
                    title="Delete Student"
                  >
                    <i className="fa-solid fa-trash mr-2"></i> Delete
                  </button>
                  <button
                    className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200 transform hover:scale-105 hover:shadow-lg mx-2'
                    title="Edit Student"
                  >
                    <i className="fa-solid fa-pencil mr-2"></i> Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">LLB(LAW)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filterStudentsBySearch(lawStudents).map((student, index) => (
            <div key={index} className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                src={student.image || ""}
                alt={`${student.sname}'s photo`}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-center mb-2">{student.sname}</h2>
              <p className="text-center text-gray-600 mb-4">{student.department}</p>
              <div className="text-left">
                <p><strong>ID:</strong> {student.id}</p>
                <p><strong>Course:</strong> {student.course}</p>
                <p><strong>Enrollment Date:</strong> {student.enrollment_date}</p>
                <p><strong>Status:</strong> {student.status}</p>
                <p><strong>Email:</strong> {student.semail}</p>
                <div className="mt-4 flex justify-evenly">
      <button
        className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-200 transform hover:scale-105 mx-2'
        title="View Details"
      >
        View Profile
      </button>
      <button
        className='bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-200 transform hover:scale-105 mx-2'
        onClick={() => {
          toast("Student deleted!"); 
        }}
        title="Delete Student"
      >
        <i className="fa-solid fa-trash mr-2"></i> Delete
      </button>
      <button
        className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200 transform hover:scale-105 hover:shadow-lg mx-2'
        onClick={() => {
          toast("Edit functionality coming soon!"); 
        }}
        title="Edit Student"
      >
        <i className="fa-solid fa-pencil mr-2"></i> Edit
      </button>
    </div>

              </div>
            </div>
          ))}
        </div>




      </div>
    </div>
  );
};

export default Sidebar;
