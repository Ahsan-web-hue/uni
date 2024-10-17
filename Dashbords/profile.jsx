import React from 'react';

const StudentInfo = ({ name, cnic, rollNumber, semester }) => {
  return (
    <div className="bg-gray-200 p-5 rounded-lg shadow-lg mb-5">
      <h3 className="text-xl font-bold">Student Name: {name}</h3>
      <p>CNIC: {cnic}</p>
      <p>Roll Number: {rollNumber}</p>
      <p>Semester: {semester}</p>
    </div>
  );
};

export default StudentInfo;
