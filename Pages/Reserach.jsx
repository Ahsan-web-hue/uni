// ResearchPaper()
import React from 'react';
import Ai from '../images/tr.webp';
import A2 from '../images/2.jpg';
import A3 from '../images/Robot.jpeg';
import V1 from '../VIDEOS/image.mp4';
import ReactTypingEffect from 'react-typing-effect';
import drone from '../images/d.webp';

export default function ResearchPaper() {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* AI Era Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-8">
                <img src={Ai} alt="AI" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" />
                <div className="flex items-center">
                    <h1 className="text-3xl lg:text-4xl font-bold text-left text-gray-800 p-4 leading-snug">
                        <ReactTypingEffect
                            text={[
                                "This is the ERA of AI. We are in a transformative time where AI is revolutionizing industries, enhancing daily life, and pushing the limits of what’s possible.",
                                "From automating tasks to aiding complex decision-making, AI is reshaping how we live and work. It's a driving force for innovation, solving global challenges, and amplifying human potential. This truly marks the ERA of AI.",
                            ]}
                            speed={80}           // Typing speed
                            eraseSpeed={30}      // Erasing speed
                            typingDelay={300}    // Delay before typing starts
                            eraseDelay={2000}    // Delay before erasing starts
                        />
                    </h1>
                </div>
            </div>

            {/* Human Research Section */}
            <div className="py-8">
                <h2 className="text-center text-5xl font-bold text-red-500 underline">Research on Human</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-8">
                {/* Image Section with Hover Blur */}
                <div className="relative overflow-hidden">
                    <img src={A2} alt="Human Research" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 blur-sm hover:blur-none" />
                </div>

                {/* Text Section */}
                <div className="bg-gray-100 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                    <h2 className="text-4xl text-gray-800 font-bold mb-4">What is AI?</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        AI stands for artificial intelligence, which is designed to mimic human behavior and learn from experiences. It’s being used in various industries to streamline operations, solve complex problems, and improve human life.
                    </p>
                    <h1 className="text-2xl text-blue-500 font-semibold mb-4">Experts Say</h1>
                    <p className="text-base text-gray-600">
                        "Experts believe AI will improve lives over the next decade. However, they remain concerned about its impact on humanity, productivity, and ethics. While AI offers many benefits, its potential ethical implications remain a topic of global debate."
                    </p>
                </div>
            </div>

            {/* AI Video Section */}
            <div className="py-8">
                <h2 className="text-5xl text-center font-serif underline mb-6">AI-Generated Video</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex justify-center">
                        <video className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" autoPlay muted loop>
                            <source src={V1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="flex items-center">
                        <p className="text-center font-light p-4 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transform hover:scale-105 transition-transform duration-300">
                            AI is increasingly used to generate videos and images from given inputs, creating engaging content, enhancing educational materials, and assisting communication. However, AI introduces potential biases and concerns about increasing inequalities.
                        </p>
                    </div>
                </div>
            </div>

            {/* AI for Drones Section */}
            <section
                className="relative w-full h-screen flex items-center justify-center"
                style={{ backgroundImage: `url(${drone})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="absolute inset-0 bg-teal-900/80 flex items-center p-4 text-white">
                    <div className="max-w-lg mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-6">AI Solutions for Drones</h1>
                        <p className="text-xl mb-4">
                            Enhance your drones using AI and Computer Vision technology. Streamline inventory tracking, improve safety checks, and get real-time insights to elevate your business and operations every day.
                        </p>
                    </div>
                </div>
            </section>
            <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
  <p className="text-2xl font-semibold text-gray-700 mb-6">Loading ...</p>
  <div className="loading-wave flex justify-center items-center">
    <div className="loading-bar w-[35px] h-[20px] mx-[10px] bg-blue-500 rounded-lg animate-wave"></div>
    <div className="loading-bar w-[35px] h-[20px] mx-[10px] bg-blue-500 rounded-lg animate-wave delay-100"></div>
    <div className="loading-bar w-[35px] h-[20px] mx-[10px] bg-blue-500 rounded-lg animate-wave delay-200"></div>
    <div className="loading-bar w-[35px] h-[20px] mx-[10px] bg-blue-500 rounded-lg animate-wave delay-300"></div>
  </div>
</div>

<style jsx>{`
  @layer utilities {
    @keyframes wave {
      0% {
        height: 20px;
        background-color: #3498db;
      }
      50% {
        height: 80px;
        background-color: #2980b9;
      }
      100% {
        height: 20px;
        background-color: #3498db;
      }
    }

    .animate-wave {
      animation: wave 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      transition: background-color 0.4s ease;
    }

    .delay-100 {
      animation-delay: 0.15s;
    }

    .delay-200 {
      animation-delay: 0.3s;
    }

    .delay-300 {
      animation-delay: 0.45s;
    }
  }
`}</style>


        </div>
    );
}
