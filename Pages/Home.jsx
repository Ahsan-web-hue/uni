// Home.jsx
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import video from '../layouts/videos/lwb_lums_home_banner.mp4';
import Footer from './Footer';
import A1 from '../images/home1.jpg';
import A2 from '../images/HOM3.webp';
import A3 from '../images/A4.png';
import A4 from '../images/A2.png';
import '../Pages/uni.css';
import H from '../images/H1.jpg';
import H1 from '../images/I2.jpg';
import H2 from '../images/I3.jpg';
import H3 from '../images/IR.jpg';
import ReactTypingEffect from "react-typing-effect";
import cricket from '../images/c.jpeg';
import f from '../images/footbool.jpeg';
import ludo from '../images/ludo.jpeg';
import hokey from '../images/hokey.jpeg';
import c from '../images/comming.jpeg';
import V2 from '../VIDEOS/v2.mp4';
import A from '../images/2.jpg';
import { toast, ToastContainer } from 'react-toastify';
import Ai from '../images/po.jpeg';
import B from '../images/imp.jpeg';
import v from '../VIDEOS/v1.mp4';


export default function Home() {
  const navigate = useNavigate();

  // Function to handle image load success
  const handleImageLoad = (src) => {
    toast.success(`Image loaded successfully: ${src}`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  // Function to handle image load error
  const handleImageError = (src) => {
    toast.error(`Failed to load image: ${src}`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  // Function to handle video load success
  const handleVideoLoad = (src) => {
    toast.success(`Video loaded successfully: ${src}`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  // Function to handle video load error
  const handleVideoError = (src) => {
    toast.error(`Failed to load video: ${src}`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  // Function to handle Apply Now button clicks
  const handleApplyClick = (eventName) => {
    toast.info(`Navigating to apply for ${eventName}`, {
      position: "top-right",
      autoClose: 2000,
    });
    // Navigate after a short delay to allow the toast to show
    setTimeout(() => {
      navigate(`/apply/${eventName}`);
    }, 2000);
  };


  // Show a welcome toast when the Home component mounts
  useEffect(() => {
    toast.info("Welcome to Asia University!", {
      position: "top-right",
      autoClose: 3000,
    });
  }, []);

  return (
    <>
      {/* Toast Notifications Container */}
      <ToastContainer />

      {/* Image Fader Section */}
      <div className="image-fader">
        <img
          src={A1}
          alt="Image 1"
          className="fader-image"
          onLoad={() => handleImageLoad('home1.jpg')}
          onError={() => handleImageError('home1.jpg')}
        />
        <img
          src={A2}
          alt="Image 2"
          className="fader-image"
          onLoad={() => handleImageLoad('HOM3.webp')}
          onError={() => handleImageError('HOM3.webp')}
        />
        <img
          src={A3}
          alt="Image 3"
          className="fader-image"
          onLoad={() => handleImageLoad('A4.png')}
          onError={() => handleImageError('A4.png')}
        />
        <img
          src={A4}
          alt="Image 4"
          className="fader-image"
          onLoad={() => handleImageLoad('A2.png')}
          onError={() => handleImageError('A2.png')}
        />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {/* First Section */}
          <div className="bg-white shadow-md rounded-lg p-6 mt-3 ml-6 transition-transform transform hover:scale-105">
            <h2 className="text-5xl lg:text-5xl sm:text-3xl font-bold text-blue-900 mb-4">
              Welcome to Asia University
            </h2>
            <p className="text-gray-700 font-light text-lg">
              Asia_University is an extraordinary place for learning, discovery, and transformation. Here, you have the freedom to ask questions, challenge the ordinary, and spark innovation. We seek out bright and curious minds with revolutionary ideas to create an empowering community of leaders and change-makers.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="bg-white shadow-lg rounded-lg p-4 ml-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Explore</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="flex justify-between items-center p-4 border-b hover:bg-gray-100 transition-all">
                <span className="text-blue-800">Future Students</span>
                <span className="text-blue-800">&gt;</span>
              </a>
              <a href="#" className="flex justify-between items-center p-4 border-b hover:bg-gray-100 transition-all">
                <span className="text-blue-800">Current Students</span>
                <span className="text-blue-800">&gt;</span>
              </a>
              <a href="#" className="flex justify-between items-center p-4 border-b hover:bg-gray-100 transition-all">
                <span className="text-blue-800">Faculty</span>
                <span className="text-blue-800">&gt;</span>
              </a>
              <a href="#" className="flex justify-between items-center p-4 border-b hover:bg-gray-100 transition-all">
                <span className="text-blue-800">Alumni</span>
                <span className="text-blue-800">&gt;</span>
              </a>
              <a href="#" className="flex justify-between items-center p-4 hover:bg-gray-100 transition-all">
                <span className="text-blue-800">Donors</span>
                <span className="text-blue-800">&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Top Achievements Section */}
      <h1 className='text-5xl sm:text-3xl text-center font-bold font-serif text-yellow-600 border-b-4 border-orange-300 pb-2'>
        TOP ACHIEVEMENTS
      </h1>
      <div className="grid grid-cols-1 gap-4 p-4 mr-6 sm:grid-cols-2">
        <div className="ml-8 relative grid grid-cols-2 gap-2"> {/* Use grid for images */}
          <img
            src={H}
            alt="Achievement 1"
            className="w-full h-auto rounded-lg"
            onLoad={() => handleImageLoad('H1.jpg')}
            onError={() => handleImageError('H1.jpg')}
          />
          <img
            src={H1}
            alt="Achievement 2"
            className="w-full h-auto rounded-lg"
            onLoad={() => handleImageLoad('I2.jpg')}
            onError={() => handleImageError('I2.jpg')}
          />
          <img
            src={H2}
            alt="Achievement 3"
            className="w-full h-auto rounded-lg"
            onLoad={() => handleImageLoad('I3.jpg')}
            onError={() => handleImageError('I3.jpg')}
          />
          <img
            src={H3}
            alt="Achievement 4"
            className="w-full h-auto rounded-lg"
            onLoad={() => handleImageLoad('IR.jpg')}
            onError={() => handleImageError('IR.jpg')}
          />
        </div>

        <p className="text-yellow-500 font-semibold text-xl sm:text-3xl">
          <ReactTypingEffect
            text={["As an educational institution, Asia University is committed to continuously improving and enhancing its educational offerings. Here are some of the notable achievements we have achieved so far:"]}
            speed={100}           // Typing speed
            eraseSpeed={0}       // Disable erasing by setting erase speed to 0
            typingDelay={500}     // Delay before typing starts
            eraseDelay={1000}     // Delay before erasing starts (though it won't be used here)
          />
        </p>
      </div>

      {/* Events Section */}
      <h1 className='text-5xl font-bold text-center bg-lime-300 p-4 shadow-lg'>
        Events <i className="fa-solid fa-calendar-days"></i>
      </h1>

      <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
        {/* Cricket Event */}
        <div className="flex flex-col items-center">
          <img
            src={cricket}
            alt="Cricket Event"
            className=""
            onLoad={() => handleImageLoad('c.jpeg')}
            onError={() => handleImageError('c.jpeg')}
          />
          <p className="text-center mt-3 font-extralight font-serif">
            Asia University is proud to announce the launch of its annual Cricket World Cup, which will take place in the United States on October 12, 2022. This prestigious tournament will showcase the best cricket teams from around the world and attract international audiences.
            <strong className="block mt-2 text-xl">
              Apply &rarr;
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                onClick={() => handleApplyClick('Cricket')}
              >
                Apply Now
              </button>
            </strong>
          </p>
        </div>

        {/* Football Event */}
        <div className="flex flex-col items-center mt-5">
          <img
            src={f}
            alt="Football Event"
            className=""
            onLoad={() => handleImageLoad('footbool.jpeg')}
            onError={() => handleImageError('footbool.jpeg')}
          />
          <p className="text-center font-serif mt-4">
            Asia University is thrilled to announce the launch of its annual Football World Cup, which will take place in the United States on . This prestigious tournament will showcase the best football teams from around the world and attract international audiences.
            <strong className="block mt-2 text-xl">
              Apply &rarr;
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                onClick={() => handleApplyClick('Football')}
              >
                Apply Now
              </button>
            </strong>
          </p>
        </div>

        {/* Ludo Event */}
        <div className="flex flex-col items-center mt-5">
          <img
            src={ludo}
            alt="Ludo Event"
            className=""
            onLoad={() => handleImageLoad('ludo.jpeg')}
            onError={() => handleImageError('ludo.jpeg')}
            
          />
          <p className="text-center font-serif mt-4">
            With top teams competing, the tournament promises thrilling matches and memorable moments, showcasing the talents of players from different nations.
            <strong className="block mt-2 text-xl">
              Apply &rarr;
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                onClick={() => handleApplyClick('Ludo')}
              >
                Apply Now
              </button>
            </strong>
          </p>
        </div>

        {/* Hockey Event */}
        <div className="flex flex-col items-center mt-5">
          <img
            src={hokey}
            alt="Hockey Event"
            className=""
            onLoad={() => handleImageLoad('hokey.jpeg')}
            onError={() => handleImageError('hokey.jpeg')}
          />
          <p className="text-center font-serif mt-4">
            Asia University is thrilled to announce the launch of its annual Hockey World Cup, which will take place in the United States on This prestigious tournament will showcase the best hockey teams from around the world and attract international audiences.
            <strong className="block mt-2 text-xl">
              Apply &rarr;
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                onClick={() => handleApplyClick('Hockey')}
              >
                Apply Now
              </button>
            </strong>
          </p>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
        {[1, 2, 3, 4].map((num) => (
          <div className="flex flex-col items-center" key={num}>
            <img
              src={c}
              alt={`Coming Soon ${num}`}
              className=""
              onLoad={() => handleImageLoad('comming.jpeg')}
              onError={() => handleImageError('comming.jpeg')}
            />
            <p className="text-center mt-5 text-red-400 font-bold">
              COMING SOON
            </p>
          </div>
        ))}
      </div>

      {/* Collaboration Section */}
      <h2 className="text-center text-yellow-600 font-bold text-5xl border-b-4 border-orange-300 pb-2 relative overflow-hidden">
        <ReactTypingEffect
          text={["Collaboration Between Asian Universities and Chinese Universities"]}
          speed={100}           // Typing speed
          eraseSpeed={3}        // Erasing speed
          typingDelay={500}     // Delay before typing starts
          eraseDelay={1000}     // Delay before erasing starts
        />
      </h2>
      <div className="grid grid-cols-1 gap-3 p-4 md:grid-cols-2">
        <div className="video">
          <video
            src={V2}
            controls
            autoPlay
            loop
            muted
            className="w-full h-auto"
            onLoadedData={() => handleVideoLoad('v2.mp4')}
            onError={() => handleVideoError('v2.mp4')}
          /> {/* Ensures video is responsive */}
        </div>
        <p className="md:col-span-1 font-extrabold">
          In recent years, higher education in Asia has been transformed by increased collaboration between universities and their Chinese counterparts. This trend aims to enhance academic research, foster innovation, and promote cultural exchange. Chinese universities, known for their technological advancements and research funding, are forming partnerships with institutions in Japan, South Korea, and Southeast Asia. These collaborations include joint research projects and dual-degree programs, granting students access to diverse educational resources. Additionally, the Belt and Road Initiative encourages universities to develop programs addressing regional challenges like sustainability and economic development, boosting their global competitiveness and fostering a shared vision of progress.
        </p>
      </div>

      {/* Marquee Section */}
      <h1 className="text-center text-yellow-600 font-bold text-5xl border-b-4 border-orange-300 pb-2 relative overflow-hidden">
        <div className="animate-marquee">
          Why join us?
        </div>
      </h1>

      {/* Search on AI Section */}
      <h1 className='text-center font-serif text-5xl mb-4 mt-4 text-red-500'>
        SEARCH ON AI
      </h1>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {/* AI Image 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 mt-3 ml-6 transition-transform transform hover:scale-105">
          <img
            src={Ai}
            alt="AI 1"
            className="w-full h-auto border-4 border-gray-300 rounded-lg hover:border-red-500 hover:shadow-lg transition-all duration-300"
            onLoad={() => handleImageLoad('po.jpeg')}
            onError={() => handleImageError('po.jpeg')}
          />
          <p className="mt-2 text-gray-700">
            Looking for information about artificial intelligence (AI) is important today. AI technologies, like machine learning and computer vision, are changing how we work and innovate. Knowing what AI can and cannot do helps us find new ways to improve and shape the future of technology.
          </p>
        </div>

        {/* AI Image 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 mt-3 ml-6 transition-transform transform hover:scale-105">
          <img
            src={A}
            alt="AI 2"
            className="w-full h-auto border-4 border-gray-300 rounded-lg hover:border-red-500 hover:shadow-lg transition-all duration-300"
            onLoad={() => handleImageLoad('2.jpg')}
            onError={() => handleImageError('2.jpg')}
          />
          <p className="mt-2 text-gray-700">
            Searching for information on artificial intelligence (AI) is crucial in today's digital world. AI technologies, including machine learning and computer vision, are transforming industries and driving innovation. Understanding AI’s capabilities and limitations is essential for unlocking new opportunities and shaping the future of technology.
          </p>
        </div>

        {/* AI Image 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 mt-3 ml-6 transition-transform transform hover:scale-105">
          <img
            src={B}
            alt="AI 3"
            className="w-full h-auto border-4 border-gray-300 rounded-lg hover:border-red-500 hover:shadow-lg transition-all duration-300"
            onLoad={() => handleImageLoad('imp.jpeg')}
            onError={() => handleImageError('imp.jpeg')}
          />
          <p className="mt-2 text-gray-700">
            Finding information about artificial intelligence (AI) is important now. AI, which includes tools like machine learning and computer vision, is changing how we do things. Understanding what AI can do helps us find better ways to improve and shape the future.
          </p>
        </div>

        {/* AI Image 4 */}
        <div className="bg-white shadow-md rounded-lg p-6 mt-3 ml-6 transition-transform transform hover:scale-105">
          <img
            src={c}
            alt="AI 4"
            className="w-full h-auto border-4 border-gray-300 rounded-lg hover:border-red-500 hover:shadow-lg transition-all duration-300"
            onLoad={() => handleImageLoad('comming.jpeg')}
            onError={() => handleImageError('comming.jpeg')}
          />
          <p className="mt-2 text-gray-700">
            Learning about artificial intelligence (AI) is important today. AI, including things like machine learning and computer vision, is changing our world. Knowing how AI works can help us find new and better ways to do things.
          </p>
        </div>
      </div>
      <br /> <br />
      <br />

      {/* Short Campus Review Section */}
      <h2 className='text-5xl text-center font-serif border-b-4 border-orange-300 pb-2 relative overflow-hidden'>
        SHORT CAMPUS REVIEW 
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-4'>
        {/* First Video */}
        <video
          src={video}
          controls
          autoPlay
          loop
          muted
          className='w-full h-64 md:h-96 object-cover'
          onLoadedData={() => handleVideoLoad('lwb_lums_home_banner.mp4')}
          onError={() => handleVideoError('lwb_lums_home_banner.mp4')}
        ></video>

        {/* Second Video with "ADS" Heading */}
        <div className='flex flex-col justify-center items-center'>
          <p className='text-center text-xl font-bold mb-4 bg-gray-100 p-2 rounded-md shadow'>
            ADS AREA
          </p>
          <video
            src={v}
            controls
            autoPlay
            loop
            muted
            className='w-full h-64 md:h-96 object-cover'
            onLoadedData={() => handleVideoLoad('v1.mp4')}
            onError={() => handleVideoError('v1.mp4')}
          ></video>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
