import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function UniversityPage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 h-screen sticky top-0 bg-gray-50 shadow-lg">
        <nav className="mt-8">
          <ul className="space-y-2 px-4">
            <li>
              <a href="#" className="block py-2 text-lg text-gray-700 hover:text-blue-700">
                UNDERGRADUATE PROGRAMS
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-lg text-gray-700 hover:text-blue-700">
                GRADUATE PROGRAMS
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-lg text-gray-700 hover:text-blue-700">
                FEE STRUCTURE
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-lg text-gray-700 hover:text-blue-700">
                SCHOLARSHIPS
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-lg text-gray-700 hover:text-blue-700">
                Asia University FEE REFUND POLICY
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-lg text-gray-700 hover:text-blue-700">
                ACADEMIC CALENDAR
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-lg text-gray-700 hover:text-blue-700">
                RESEARCH CENTRES
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-lg text-gray-700 hover:text-blue-700">
                FACULTY
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-lg text-gray-700 hover:text-blue-700">
                GRADING POLICY
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-lg text-gray-700 hover:text-blue-700">
                REGULATION
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 bg-white">
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="h-40">
            <img src="image1.jpg" alt="Image 1" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="h-40">
            <img src="image2.jpg" alt="Image 2" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="h-40">
            <img src="image3.jpg" alt="Image 3" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="h-40">
            <img src="image4.jpg" alt="Image 4" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="h-40">
            <img src="image5.jpg" alt="Image 5" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="h-40">
            <img src="image6.jpg" alt="Image 6" className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
        </div>

        {/* Content Section */}
        <section className="mt-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Academics</h1>
          <p className="text-gray-700">
            Students at Asia University form a diverse batch of talented individuals from diverse regional and social backgrounds.
            Admissions are conducted on a strict merit basis, and the university has made available generous funding 
            opportunities to ensure that no potential student is held back from studying at Asia University due to financial barriers.
            Once a part of Asia University, students are provided with...
          </p>
        </section>
        
        {/* Button Section */}
        <section className="mt-8">
          <Link to="/ErrorPage" className="py-3 px-6 text-white bg-blue-700 rounded-md hover:bg-blue-800">
            APPLY NOW
          </Link>
        </section>
      </main>
    </div>
  );
}
