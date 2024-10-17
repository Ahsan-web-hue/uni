// src/Pages/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from '../images/logo_optimized.png';
import Login from './login';
export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            {/* Main Navbar */}
            <nav className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 fixed top-0 left-0 w-full z-50 shadow-lg">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    {/* Logo and Title */}
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                            src={logo}
                            className="h-12 w-12 rounded-full object-cover"
                            alt="University Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                            University Management System
                        </span>
                    </Link>
                    <div className="flex items-center">

                        <a href="tel:5541251234" className="hidden md:block text-sm text-gray-200 hover:text-white hover:underline transition duration-300">
                            (555) 412-1234 &nbsp;&nbsp;
                        </a>



                        <a href="/Login" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-gray-300 transition duration-300">
                            Login
                        </a>

                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden text-white focus:outline-none ml-4"
                            aria-label="Toggle navigation menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <li>
                            <Link to="/" className="text-white hover:text-red-500 hover:underline transition duration-300">
                                HOME <i className="fa-solid fa-house"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/instructors" className="text-white hover:text-red-500 hover:underline transition duration-300">
                                INSTRUCTORS <i className="fa-solid fa-circle-info"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-white hover:text-red-500 hover:underline transition duration-300">
                                CONTACT US <i className="fa-solid fa-location-dot"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admissions" className="text-white hover:text-red-500 hover:underline transition duration-300">
                                ADMISSIONS <i className="fa-solid fa-globe"></i>

                            </Link>
                        </li>
                        <li>
                            <Link to="/Merit_List" className="text-white hover:text-red-500 hover:underline transition duration-300">
                                MERIT LIST  <i className="fa-solid fa-list"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Reserach" className="text-white hover:text-red-500 hover:underline transition duration-300">
                                RESEARCH <i className="fa-solid fa-book-open-reader"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="bg-blue-300 dark:bg-blue-700 mt-20 z-50 shadow-inner ">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center justify-center">
                        <ul className="hidden md:flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <Link to="/" className="text-white hover:text-red-500 hover:underline transition duration-300">
                                    HOME  <i className="fa-solid fa-house"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/instructors" className="text-white hover:text-red-500 hover:underline transition duration-300">
                                    INSTRUCTORS <i className="fa-solid fa-circle-info"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-white hover:text-red-500 hover:underline transition duration-300">
                                    CONTACT US <i className="fa-solid fa-location-dot"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Acadmices" className="text-white hover:text-red-500 hover:underline transition duration-300">
                                    ADMISSIONS <i className="fa-solid fa-globe"></i>

                                </Link>
                            </li>
                            <li>
                                <Link to="/Merit_List" className="text-white hover:text-red-500 hover:underline transition duration-300">
                                    MERIT LIST <i className="fa-solid fa-list"></i>
                                </Link>  
                            </li>
                            <li>
                                <Link to="/Reserach" className="text-white hover:text-red-500 hover:underline transition duration-300">
                                    RESEARCH <i className="fa-solid fa-book-open-reader"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
