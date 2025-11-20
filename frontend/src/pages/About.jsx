import React from 'react';
import { Link } from 'react-router-dom';
import { FiUsers, FiAward, FiGlobe, FiBookOpen } from 'react-icons/fi';

// Using a placeholder image URL instead of local file
const teamImage = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';

export default function About() {
  const stats = [
    { value: '50K+', label: 'Students Enrolled', icon: <FiUsers className="w-8 h-8" /> },
    { value: '200+', label: 'Expert Instructors', icon: <FiAward className="w-8 h-8" /> },
    { value: '500+', label: 'Courses Available', icon: <FiBookOpen className="w-8 h-8" /> },
    { value: '95%', label: 'Satisfaction Rate', icon: <FiGlobe className="w-8 h-8" /> },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Corediva</h1>
          <p className="text-xl max-w-3xl mx-auto">Empowering the next generation of tech professionals with industry-relevant skills.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2023, Corediva was born out of a passion for making quality education accessible to everyone. 
                We believe that anyone, regardless of their background, should have the opportunity to learn in-demand skills 
                and build a rewarding career in technology.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of industry experts and educators work tirelessly to create comprehensive, practical, and engaging 
                courses that prepare our students for real-world challenges.
              </p>
              <Link 
                to="/courses" 
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Explore Our Courses
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src={teamImage} 
                alt="Our Team" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-indigo-600 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Our Mission</h3>
              <p className="text-gray-600">
                To empower individuals with the knowledge and skills needed to succeed in the digital economy through 
                accessible, high-quality education and hands-on learning experiences.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading online learning platform that bridges the gap between education and employment, 
                transforming lives through technology education and career advancement opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
