import React from 'react';
import { FiUsers, FiAward, FiBookOpen, FiStar } from 'react-icons/fi';

const stats = [
  { value: '50K+', label: 'Students Enrolled', icon: <FiUsers className="w-6 h-6 text-indigo-600" /> },
  { value: '200+', label: 'Expert Instructors', icon: <FiAward className="w-6 h-6 text-indigo-600" /> },
  { value: '500+', label: 'Courses Available', icon: <FiBookOpen className="w-6 h-6 text-indigo-600" /> },
  { value: '95%', label: 'Satisfaction Rate', icon: <FiStar className="w-6 h-6 text-indigo-600" /> },
];

const StatsSection = () => {
  return (
    <section className="relative py-16 bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white"></div>
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-4 mx-auto">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2 text-center">{stat.value}</div>
              <div className="text-gray-600 text-sm text-center">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
