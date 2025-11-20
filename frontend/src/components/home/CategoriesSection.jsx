import React from 'react';
import { Link } from 'react-router-dom';
import { FiCode, FiSmartphone, FiBarChart2, FiShield, FiBriefcase, FiDollarSign } from 'react-icons/fi';

const categories = [
  { 
    name: 'Web Development', 
    icon: <FiCode className="w-6 h-6" />, 
    bg: 'bg-blue-50', 
    text: 'text-blue-600',
    description: 'Master the latest web technologies and frameworks',
    courses: 128
  },
  { 
    name: 'Mobile Development', 
    icon: <FiSmartphone className="w-6 h-6" />, 
    bg: 'bg-green-50', 
    text: 'text-green-600',
    description: 'Build cross-platform mobile applications',
    courses: 86
  },
  { 
    name: 'Data Science', 
    icon: <FiBarChart2 className="w-6 h-6" />, 
    bg: 'bg-purple-50', 
    text: 'text-purple-600',
    description: 'Analyze and visualize complex data sets',
    courses: 94
  },
  { 
    name: 'Cybersecurity', 
    icon: <FiShield className="w-6 h-6" />, 
    bg: 'bg-red-50', 
    text: 'text-red-600',
    description: 'Protect systems and networks from digital attacks',
    courses: 67
  },
  { 
    name: 'Business', 
    icon: <FiBriefcase className="w-6 h-6" />, 
    bg: 'bg-yellow-50', 
    text: 'text-yellow-600',
    description: 'Develop essential business and management skills',
    courses: 112
  },
  { 
    name: 'Marketing', 
    icon: <FiDollarSign className="w-6 h-6" />, 
    bg: 'bg-pink-50', 
    text: 'text-pink-600',
    description: 'Learn digital marketing strategies and tools',
    courses: 78
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block bg-indigo-50 text-indigo-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
            Explore Categories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the perfect course to fuel your learning journey across various tech domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              to={`/courses?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className={`group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${category.bg}/30 hover:${category.bg}/50`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start">
                <div className={`w-12 h-12 ${category.bg} ${category.text} rounded-xl flex items-center justify-center flex-shrink-0 mr-4`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                  <span className="text-xs font-medium text-gray-500">{category.courses} Courses</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs font-medium text-gray-500">Popular courses:</span>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i} 
                      className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600"
                    >
                      {i}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up">
          <Link 
            to="/courses" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Categories
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
