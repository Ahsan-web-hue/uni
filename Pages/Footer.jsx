

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        
        {/* Top Section with Icons */}
        <div className="flex justify-center space-x-10 mb-8">
          <div className="text-center">
            <div className="text-4xl mb-2"><i className="fas fa-map-marker-alt"></i></div>
            <h4 className="text-xl font-bold">FAQS</h4>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2"><i className="fas fa-phone-alt"></i></div>
            <h4 className="text-xl font-bold">CONTACT US</h4>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2"><i className="fas fa-university"></i></div>
            <h4 className="text-xl font-bold">Asia University </h4>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2"><i className="fas fa-sitemap"></i></div>
            <h4 className="text-xl font-bold">SITEMAP</h4>
          </div>
        </div>

        {/* Link Sections */}
        <div className="grid grid-cols-4 gap-8 text-sm">
          {/* Important Links */}
          <div>
            <h5 className="text-lg font-bold mb-4">IMPORTANT LINKS</h5>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Nomination of Focal Person</a> <span className="text-pink-500 font-bold">NEW</span></li>
              <li className="mb-2"><a href="#" className="hover:underline">Asia University  Videos</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Asia University  Documentary</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Foreign Faculty Members</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">PhD Produced</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Alumni Functions</a></li>
            </ul>
          </div>

          {/* Admission Links */}
          <div>
            <h5 className="text-lg font-bold mb-4">ADMISSION</h5>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Merit Lists</a> <span className="text-pink-500 font-bold">NEW</span></li>
              <li className="mb-2"><a href="#" className="hover:underline">Apply Online</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Fee Structure</a> <span className="text-pink-500 font-bold">NEW</span></li>
              <li className="mb-2"><a href="#" className="hover:underline">International Students</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Prospectuses</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Regulations</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Online Form Submission</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Date Sheets</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Results</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Schedules</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Past Papers</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Examination News</a></li>
            </ul>
          </div>

          {/* Examinations Links */}
          <div>
            <h5 className="text-lg font-bold mb-4">EXAMINATIONS</h5>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Online Form Submission</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Date Sheets</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Results</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Schedules</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Past Papers</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Examination News</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Merit Lists</a> <span className="text-pink-500 font-bold">NEW</span></li>
              <li className="mb-2"><a href="#" className="hover:underline">Apply Online</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Fee Structure</a> <span className="text-pink-500 font-bold">NEW</span></li>
              <li className="mb-2"><a href="#" className="hover:underline">International Students</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Prospectuses</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Regulations</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-bold mb-4">QUICK LINKS</h5>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Political Map of Pakistan</a> <span className="text-pink-500 font-bold">NEW</span></li>
              <li className="mb-2"><a href="#" className="hover:underline">Asia University  Executive Club</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Health Centre Lab</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Asia University Newsletter</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Manuals for Eduroam</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Online Challan Form</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Online Form Submission</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Date Sheets</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Results</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Schedules</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Past Papers</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Examination News</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400">Copyright © 2024 - All Rights Reserved - Asia University .EDU.PK</p>
          <p className="text-gray-400">Developed by IT CENTRE</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            <li className="mb-2"><a href="#" className="hover:underline">Political Map of Pakistan</a> <span className="text-pink-500 font-bold">NEW</span></li>
              <li className="mb-2"><a href="#" className="hover:underline">Asia University  Executive Club</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Health Centre Lab</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Asia University Newsletter</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Manuals for Eduroam</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Online Challan Form</a></li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
