

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar'; // Importing Navbar component
import Home from './Pages/Home';     // Importing Home component
import Footer from './Pages/Footer'; // Importing Footer component
import Instructor from './Pages/instructors';
import Login from './Pages/login';
import Reserach from './Pages/Reserach'; // Importing';
import Merit_List from './Pages/Merit_List';
import Ap from './Pages/ply';
import Contact from './Pages/Contact';
import Nav from './Dashbords/nav'
import StudentPortal from './Dashbords/StudentPortal';
import ErrorPage from './Dashbords/load';



function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Render Navbar only if the current route is not Login */}
        {window.location.pathname !== "/Login" && <Navbar /> }

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Instructors" element={<Instructor />} />
            <Route path="/Login" element={<Login />} />
            {/* <Route path="/Acadmices" element={<Acadmices />} /> */}
            <Route path="/Reserach" element={<Reserach />} />
            <Route path="/Merit_List" element={<Merit_List />} />
            <Route path="/apply/:eventType" element={<Ap />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Nav" element={<Nav />} />
            <Route path="/cour" element={<courses />} />
            <Route path="/StudentPortal" element={<StudentPortal />} />
            <Route path="/ErrorPage" element={<ErrorPage/>} />
          </Routes>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
