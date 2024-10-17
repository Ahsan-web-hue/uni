// Login.jsx

import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Instructors_Password from '../private_info/Instructor_pass';
import Alumni_Data from '../private_info/Alumani';
import Students_Data from '../private_info/student_info'; // Ensure 'student_info' exports 'studentsData'
import { useNavigate } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

function Login() {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate role, email, and password
    if (!role) {
      toast.error("Please select your role.", { position: "top-right", autoClose: 3000 });
      return;
    }

    if (!email || !password) {
      toast.error("Please fill in both email and password.", { position: "top-right", autoClose: 3000 });
      return;
    }

    let validLogin = false;
    let loggedInUser = null;
    switch (role) {
      case "Teacher":
        validLogin = Instructors_Password.some(pass => pass.email === email && pass.password === password);
        if (validLogin) {
          loggedInUser = Instructors_Password.find(pass => pass.email === email);
          toast.success(`${loggedInUser.name} Login Successful!`, { position: "top-right", autoClose: 3000 });
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            navigate("/Nav");
          }, 3000);
        } else {
          toast.error("Invalid email or password.", { position: "top-right", autoClose: 3000 });
        }
        break;

      case "Alumni":
        validLogin = Alumni_Data.some(data => data.email === email && data.password === password);
        if (!validLogin) {
          loggedInUser = Alumni_Data.find(data => data.email === email);
          toast.success(`${loggedInUser.name} Login Successful!`, { position: "top-right", autoClose: 3000 });
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            navigate("/StudentPortal", { state: { user: loggedInUser, role: 'Alumni' } });
          }, 3000);
        } else {
          toast.error("Invalid email or password.", { position: "top-right", autoClose: 3000 });
        }
        break;

      case "Student":
        validLogin = Students_Data.some(sdata => sdata.semail === email && sdata.spassword === password);
        if (!validLogin) {
          loggedInUser = Students_Data.find(sdata => sdata.semail === email);
          toast.success(`${loggedInUser.sname} Login Successful!`, { position: "top-right", autoClose: 3000 });
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            navigate("/StudentPortal", { state: { user: loggedInUser, role: 'Student' } });
          }, 3000);
        } else {
          toast.error("Invalid email or password.", { position: "top-right", autoClose: 3000 });
        }
        break;

      default:
        break;
    }
  };

  return (
    <>  
      <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
        <div className="flex justify-between mb-4">
          <button className="flex items-center bg-white text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-200">
            <i className="fa fa-google pr-2"></i> 
            <a href="https://www.google.com" aria-label="Login with Google">Google</a>
          </button>
          <button className="flex items-center bg-white text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-200">
            <i className="fa fa-twitter pr-2"></i> 
            <a href="https://www.twitter.com" aria-label="Login with Twitter">Twitter</a>
          </button>
        </div>
        <ToastContainer />
        <h2 className="text-3xl font-bold mb-6 text-center">Login </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">Select Your Role <i className="fa-solid fa-person"></i></label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">-- Select Role -- </option>
              <option value="Student">Student </option>
              <option value="Alumni">Alumni  </option>
              <option value="Teacher">Teacher </option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email <i className="fa-solid fa-envelope"></i></label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password <i className="fa-solid fa-lock"></i></label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className={`w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ${
                !role || !email || !password ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
              }`}
              disabled={!role || !email || !password || loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </div>

          {/* Social Media Login */}
          <div className="flex flex-col mt-6">
            <span className="text-center text-gray-400 mb-2">Or log in with</span>
            <div className="flex justify-between mb-4">
              <button className="flex items-center bg-white text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-200">
                <i className="fa fa-facebook pr-2"></i> 
                <a href="https://www.facebook.com" aria-label="Login with Facebook">Facebook</a> 
              </button>
              <button className="flex items-center bg-white text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-200">
                <i className="fa fa-github pr-2"></i> 
                <a href="https://www.github.com" aria-label="Login with GitHub">GitHub</a>
              </button>
            </div>
          </div>

          {loading && (
            <div className="flex items-center justify-center mt-4">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default Login;
