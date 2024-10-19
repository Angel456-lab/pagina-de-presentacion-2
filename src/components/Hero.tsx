import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-white to-blue-50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              I'm <br />
              <span className="text-gray-800">{'{'}</span>
              <span className="text-gray-900">Angel</span> 
              <span className="text-green-500">Tapia</span>
              <span className="text-gray-800">{'}'}</span>
            </h1>
            <div className="flex items-center mb-4">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mr-4">Full-Stack Developer</h2>
              <div className="flex space-x-2">
                <span className="bg-gray-200 p-1 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </span>
                <span className="bg-gray-200 p-1 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </span>
                <span className="bg-gray-200 p-1 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                </span>
              </div>
            </div>
            <p className="text-gray-600 mb-6 max-w-lg">
              Welcome to my digital laboratory! 
              I take pride in transforming ideas into reality. Every line of code is an 
              experiment, and every project is an achievement that adds to my 
              constant search for innovative technological solutions.
            </p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors">
              Schedule a Meeting
            </button>
          </div>
          <div className="md:w-1/2 flex flex-col items-end">
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <p className="text-gray-800 font-semibold">Founder & CEO</p>
              <div className="flex items-center">
                <span className="text-yellow-500 font-bold mr-2">&lt;/&gt;</span>
                <span className="text-gray-600">evGenius</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/angeltapia" target="_blank" rel="noopener noreferrer" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/angeltapia" target="_blank" rel="noopener noreferrer" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;