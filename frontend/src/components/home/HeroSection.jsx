import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlay, FiUsers, FiStar, FiCode } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,white,transparent)]"></div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-10 mb-12 lg:mb-0">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-sm font-medium px-4 py-1 rounded-full mb-4">
              🎓 Learn from the best
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Advance Your Career with <span className="text-yellow-300">Expert-Led</span> Courses
            </h1>
            <p className="text-xl text-indigo-100 mb-10">
              Join thousands of students learning in-demand skills from industry experts. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                to="/courses" 
                className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg text-center"
              >
                Explore Courses
              </Link>
              <Link 
                to="/register" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 text-center flex items-center justify-center"
              >
                <FiPlay className="mr-2" /> Watch Demo
              </Link>
            </div>
            
            <div className="flex items-center text-sm text-indigo-100">
              <div className="flex -space-x-2 mr-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-indigo-600 bg-white flex items-center justify-center overflow-hidden">
                    <span className="text-xs font-bold text-indigo-700">U+{i}</span>
                  </div>
                ))}
              </div>
              <div>
                <p>Trusted by <span className="font-bold">50,000+</span> students worldwide</p>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-1">4.9/5.0</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-1 shadow-2xl">
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <div className="h-8 bg-gray-800 flex items-center px-4">
                  <div className="flex space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </div>
                  <div className="flex-1 text-center text-xs text-gray-400">
                    course-preview.jsx
                  </div>
                </div>
                <div className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                      <FiPlay className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Deployment'].map((tech) => (
                      <div key={tech} className="bg-white/5 rounded-lg p-3 text-center">
                        <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <FiCode className="w-5 h-5 text-indigo-400" />
                        </div>
                        <span className="text-xs font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 -right-12 w-24 h-24 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
