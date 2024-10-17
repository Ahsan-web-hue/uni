import React from 'react'
import students from '../private_info/student_info'

const Courses = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Student Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-lg shadow-lg">
            <img 
              src={student.image} 
              alt={`${student.name}'s photo`} 
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-center mb-2">{student.name}</h2>
            <p><strong>ID:</strong> {student.id}</p>
            <p><strong>Course:</strong> {student.course}</p>
            <p><strong>Department:</strong> {student.department}</p>
            <p><strong>Enrollment Date:</strong> {student.enrollment_date}</p>
            <p><strong>Status:</strong> {student.status}</p>
            <p><strong>Email:</strong> {student.semail}</p>
          </div>
        ))}      </div>
    </div>
  )
}

export default Courses
