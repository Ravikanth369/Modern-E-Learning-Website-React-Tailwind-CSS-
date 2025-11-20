import React from 'react';
import { FiAward, FiLayers, FiBriefcase, FiGlobe, FiCheck, FiClock } from 'react-icons/fi';

const features = [
  {
    icon: <FiAward className="w-6 h-6" />,
    title: 'Industry Experts',
    description: 'Learn from professionals with real-world experience at top tech companies.',
  },
  {
    icon: <FiLayers className="w-6 h-6" />,
    title: 'Structured Learning Paths',
    description: 'Follow our carefully designed curriculum to master in-demand skills.',
  },
  {
    icon: <FiBriefcase className="w-6 h-6" />,
    title: 'Career Support',
    description: 'Get help with resume building, interview prep, and job placement.',
  },
  {
    icon: <FiGlobe className="w-6 h-6" />,
    title: 'Flexible Learning',
    description: 'Learn at your own pace with lifetime access to course materials.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
          <span className="inline-block bg-indigo-50 text-indigo-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A Better Learning Experience</h2>
          <p className="text-gray-600">
            We're committed to providing the best learning experience with industry-leading instructors and comprehensive curriculum.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start"
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                    {feature.icon}
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative" data-aos="fade-left">
            <div className="bg-indigo-50 rounded-2xl p-1 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                alt="Learning Experience" 
                className="rounded-xl w-full h-auto"
              />
            </div>
            <div 
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-3">
                  <FiCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-gray-500">Success Rate</div>
                </div>
              </div>
            </div>
            <div 
              className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-3">
                  <FiClock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-gray-500">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8" data-aos="fade-up">
          <div className="bg-indigo-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">Learn Anything</h3>
            <p className="text-gray-600 mb-4">Whether you want to develop a new skill or advance your career, we have courses for you.</p>
            <div className="flex items-center text-sm text-indigo-600 font-medium">
              Explore all courses
              <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">Expert Instructors</h3>
            <p className="text-gray-600 mb-4">Learn from industry experts who are passionate about teaching and sharing their knowledge.</p>
            <div className="flex items-center text-sm text-indigo-600 font-medium">
              Meet our instructors
              <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">Flexible Learning</h3>
            <p className="text-gray-600 mb-4">Learn at your own pace, on your schedule, from anywhere in the world.</p>
            <div className="flex items-center text-sm text-indigo-600 font-medium">
              Start learning now
              <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
