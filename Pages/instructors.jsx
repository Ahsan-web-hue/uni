// src/components/Instructor.jsx

import React from "react";
import { toast, ToastContainer, Slide, Flip, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Pages/Footer";

// Import images
import I2 from '../images/Mr.-Nadir-Abbas.jpg';
import I3 from '../images/maleeha.jpg';
import I4 from '../images/DR.-TAUSEEF-TAUQEER.jpg';
import I5 from '../images/Dr.-Tahira.jpg';
import I6 from '../images/Dr.-Aakash-Hassan.jpg';
import I7 from '../images/Dr-usman.jpg';
import I8 from '../images/Dr-Mudassir.jpg';
import I9 from '../images/abid.jpg';
import I10 from '../images/Abdullah-Nafis-Khan.jpg';
import I11 from '../images/Abdullah-Mughees.jpg';

// Data for faculties and their members
const faculties = [
  {
    name: "Faculty Of Engineering",
    anchor: "Engineering",
    members: [
      {
        img: I4,
        name: "DR.TAUSEEF TAUQEER",
        title: "Professor and Dean of Faculty of Engineering",
        department: "Department of Electrical Engineering",
        degree: "PhD - Electrical and Electronic Engineering, University of Manchester, UK",
      },
      {
        img: I10,
        name: "Abdullah Nafis Khan",
        title: "Teaching Fellow",
        department: "Department of Computer Engineering",
        degree: "PhD - Electrical Engineering, Information Technology University of the Punjab, Lahore.",
      },
      {
        img: I2,
        name: "Engineer Nadir Abbas",
        title: "MS- Computer Science",
        department: "University of Education and Technology (UET)",
        degree: "",
      },
      {
        img: I5,
        name: "Dr.Tahira",
        title: "Assistant Professor and Chairperson",
        department: "Department of Governance and Global Studies",
        degree: "PhD- Political and Social Sciences, KU Leuven, Belgium",
      },
      {
        img: I6,
        name: "Dr.Aakash Hassan",
        title: "Associate Professor, Chairperson-Department of Artificial Intelligence",
        department: "Department of Artificial Intelligence",
        degree: "PhD- Computer Engineering, University of Florida, USA",
      },
      {
        img: I10,
        name: "Abdullah Nafis Khan",
        title: "Teaching Fellow",
        department: "Department of Computer Engineering",
        degree: "PhD - Electrical Engineering, Information Technology University of the Punjab, Lahore.",
      },
      {
        img: I11,
        name: "Abdullah Mughees",
        title: "Teaching Fellow",
        department: "Department of Electrical Engineering",
        degree: "Masters in Electrical Engineering, FAST University",
      },
      {
        img: I7,
        name: "Dr.Usman",
        title: "Associate Professor",
        department: "Department of Computer Science",
        degree: "PhD - Computer Science, University of Nice-Sophia Antipolis, France",
      },
      {
        img: I8,
        name: "Dr. Mudassir",
        title: "Assistant Professor, School of Business & Management",
        department: "Department of Business and Management Sciences",
        degree: "PhD - Industrial Engineering, Sungkyunkwan University South Korea, South Korea",
      },
      {
        img: I4,
        name: "DR.TAUSEEF TAUQEER",
        title: "Professor and Dean of Faculty of Engineering",
        department: "Department of Electrical Engineering",
        degree: "PhD - Electrical and Electronic Engineering, University of Manchester, UK",
      },
      {
        img: I8,
        name: "Dr. Mudassir",
        title: "Assistant Professor, School of Business & Management",
        department: "Department of Business and Management Sciences",
        degree: "PhD - Industrial Engineering, Sungkyunkwan University South Korea, South Korea",
      },
    ],
  },
  {
    name: "Faculty Of Computer Science",
    anchor: "ComputerScience",
    members: [
      {
        img: I2,
        name: "Engineer Nadir Abbas",
        title: "MS- Computer Science",
        department: "University of Education and Technology (UET)",
        degree: "",
      },
      {
        img: I9,
        name: "Abid",
        title: "Assistant Professor",
        department: "Department of Artificial Intelligence",
        degree: "PhD - Computer Science, University of Central Florida, USA.",
      },
      {
        img: I10,
        name: "Abdullah Nafis Khan",
        title: "Teaching Fellow",
        department: "Department of Computer Engineering",
        degree: "PhD - Electrical Engineering, Information Technology University of the Punjab, Lahore.",
      },
      {
        img: I2,
        name: "Engineer Nadir Abbas",
        title: "MS- Computer Science",
        department: "University of Education and Technology (UET)",
        degree: "",
      },
      {
        img: I3,
        name: "Dr- Maleeha Sattar",
        title: "Department of Governance and Global Studies",
        department: "",
        degree: "M.Phil - development studies, PIDE, Pakistan",
      },
      {
        img: I6,
        name: "Dr.Aakash Hassan",
        title: "Associate Professor, Chairperson-Department of Artificial Intelligence",
        department: "Department of Artificial Intelligence",
        degree: "PhD- Computer Engineering, University of Florida, USA",
      },
      {
        img: I7,
        name: "Dr.Usman",
        title: "Associate Professor",
        department: "Department of Computer Science",
        degree: "PhD - Computer Science, University of Nice-Sophia Antipolis, France",
      },
      {
        img: I8,
        name: "Dr. Mudassir",
        title: "Assistant Professor, School of Business & Management",
        department: "Department of Business and Management Sciences",
        degree: "PhD - Industrial Engineering, Sungkyunkwan University South Korea, South Korea",
      },
      {
        img: I5,
        name: "Dr.Tahira",
        title: "Assistant Professor and Chairperson",
        department: "Department of Governance and Global Studies",
        degree: "PhD- Political and Social Sciences, KU Leuven, Belgium",
      },
    ],
  },
  {
    name: "Faculty Of Business and Management",
    anchor: "BusinessAndManagement",
    members: [
      {
        img: I2,
        name: "Engineer Nadir Abbas",
        title: "MS- Computer Science",
        department: "University of Education and Technology (UET)",
        degree: "",
      },
      {
        img: I11,
        name: "Abdullah Mughees",
        title: "Teaching Fellow",
        department: "Department of Electrical Engineering",
        degree: "Masters in Electrical Engineering, FAST University",
      },
      {
        img: I3,
        name: "Dr- Maleeha Sattar",
        title: "Department of Governance and Global Studies",
        department: "",
        degree: "M.Phil - development studies, PIDE, Pakistan",
      },
      {
        img: I6,
        name: "Dr.Aakash Hassan",
        title: "Associate Professor, Chairperson-Department of Artificial Intelligence",
        department: "Department of Artificial Intelligence",
        degree: "PhD- Computer Engineering, University of Florida, USA",
      },
      {
        img: I10,
        name: "Abdullah Nafis Khan",
        title: "Teaching Fellow",
        department: "Department of Computer Engineering",
        degree: "PhD - Electrical Engineering, Information Technology University of the Punjab, Lahore.",
      },
      {
        img: I9,
        name: "Abid",
        title: "Assistant Professor",
        department: "Department of Artificial Intelligence",
        degree: "PhD - Computer Science, University of Central Florida, USA.",
      },
      {
        img: I8,
        name: "Dr. Mudassir",
        title: "Assistant Professor, School of Business & Management",
        department: "Department of Business and Management Sciences",
        degree: "PhD - Industrial Engineering, Sungkyunkwan University South Korea, South Korea",
      },
      {
        img: I7,
        name: "Dr.Usman",
        title: "Associate Professor",
        department: "Department of Computer Science",
        degree: "PhD - Computer Science, University of Nice-Sophia Antipolis, France",
      },
      {
        img: I5,
        name: "Dr.Tahira",
        title: "Assistant Professor and Chairperson",
        department: "Department of Governance and Global Studies",
        degree: "PhD- Political and Social Sciences, KU Leuven, Belgium",
      },
    ],
  },
];

export default function Instructor() {
  
  // Function to handle "View Profile" button clicks
  const handleViewProfile = (name) => {
    // Show a toast notification indicating the start of profile loading
    toast.info(`Loading profile for ${name}...`, {
      position: "top-right",
      autoClose: false, // Make the toast persistent until manually closed
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    // Simulate profile loading delay
    setTimeout(() => {
      // Dismiss the loading toast
      toast.dismiss(); // Remove all toasts or use specific IDs if needed

      // Show a success toast indicating the profile has been loaded
      toast.success(`${name}'s profile loaded!`, {
        position: "top-right",
        autoClose: 5000, // Keep the success toast visible for 5 seconds
        hideProgressBar: false,
        transition: Flip, // Use Flip transition for this toast
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      // Optionally, navigate to the profile page if available
      // navigate(`/profile/${name}`);
    }, 3000); // 3-second delay to simulate loading
  };

  return (
    <>
      {/* Toast Container for displaying toast notifications */}
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
        theme="colored"
        transition={Slide} // Default transition
      />

      <div className="p-6">
        <h1 className="text-black p-4 font-sans text-4xl bg-brown-800 rounded-lg shadow-md mb-5">
          FACULTY
        </h1>
        <p className="text-gray-800 text-lg font-serif px-3">
          The faculty at Information Technology University comprises individuals who are among the best teachers and researchers in their fields. This world-class faculty is instrumental in fostering academic, research, and innovation strengths in students.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 p-2">
          {/* Faculty Sections */}
          {faculties.map((faculty, index) => (
            <div
              key={index}
              className="group relative bg-blue-400 text-white h-24 p-4 flex items-center justify-center rounded-lg shadow-md font-mono transition-all duration-300 hover:bg-red-500 hover:text-yellow-300 hover:font-bold"
            >
              <a href={`#${faculty.anchor}`} className="relative z-10 hover:underline hover:underline-offset-0">
                {faculty.name}
              </a>
              <div className="absolute inset-0 bg-blue-400 transition duration-300 group-hover:blur-md" />
            </div>
          ))}
        </div>

        <br />

        {/* Render each faculty section */}
        {faculties.map((faculty, facultyIndex) => (
          <div key={facultyIndex}>
            <div className="text-5xl font-semibold">
              <a name={faculty.anchor}>{faculty.name}</a>
              <hr className="border-t-4 border-yellow-300 my-4" />
            </div>

            <div className="grid grid-cols-1 gap-4 p-2 sm:grid-cols-2 lg:grid-cols-4">
              {faculty.members.map((member, memberIndex) => (
                <div
                  key={memberIndex}
                  className="hover:border-4 hover:bg-blue-300 transition-all duration-300 p-4 flex flex-col items-center bg-white rounded-lg shadow-md"
                >
                  <img src={member.img} alt={member.name} className="w-34 h-32 mb-4 rounded-full object-cover" />
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600 text-center whitespace-pre-line">
                    {member.title}
                    {member.department ? `\n${member.department}` : ""}
                    {member.degree ? `\n${member.degree}` : ""}
                  </p>
                  <button
                    onClick={() => handleViewProfile(member.name)}
                    className="mt-2 bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition duration-300"
                  >
                    View Profile <i className="fa-solid fa-address-card"></i>
                  </button>
                </div>
              ))}
            </div>

            <br />
          </div>
        ))}

      </div>
      <Footer />
    </>
  );
}
