import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiStar, FiUsers } from 'react-icons/fi';

// Import Components
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import CategoriesSection from '../components/home/CategoriesSection';
import FeaturesSection from '../components/home/FeaturesSection';

// Mock data for courses (replace with API call)
const mockCourses = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    instructor: 'Alex Johnson',
    rating: 4.8,
    students: 1245,
    duration: '12 weeks',
    price: 299,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    category: 'Development'
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    instructor: 'Sarah Chen',
    rating: 4.9,
    students: 987,
    duration: '10 weeks',
    price: 349,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'Data Science'
  },
  {
    id: 3,
    title: 'Digital Marketing Masterclass',
    instructor: 'Michael Brown',
    rating: 4.7,
    students: 1567,
    duration: '8 weeks',
    price: 249,
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80',
    category: 'Marketing'
  },
  {
    id: 4,
    title: 'Mobile App Development with React Native',
    instructor: 'David Kim',
    rating: 4.8,
    students: 876,
    duration: '10 weeks',
    price: 329,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'Mobile Development'
  },
  {
    id: 5,
    title: 'UI/UX Design Fundamentals',
    instructor: 'Emily Wilson',
    rating: 4.9,
    students: 1243,
    duration: '6 weeks',
    price: 199,
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'Design'
  },
  {
    id: 6,
    title: 'Cloud Computing with AWS',
    instructor: 'Robert Taylor',
    rating: 4.7,
    students: 1102,
    duration: '14 weeks',
    price: 399,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    category: 'Cloud Computing'
  }
];

function Home() {
  const [courses] = useState(mockCourses);
  const [isLoading] = useState(false);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Categories Section */}
      <CategoriesSection />
      
      {/* Features Section */}
      <FeaturesSection />

      {/* Popular Courses */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Popular Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Hand-picked courses to help you master new skills and advance your career</p>
          </div>
          
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-2xl font-semibold">Trending Now</h3>
              <p className="text-gray-600">Most popular courses this week</p>
            </div>
            <Link 
              to="/courses" 
              className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center group"
            >
              View all courses 
              <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.slice(0, 6).map((course) => (
                <div 
                  key={course.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden group">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-sm font-medium">Enroll Now →</span>
                    </div>
                    <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full flex items-center">
                      <FiStar className="mr-1" /> {course.rating}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                        {course.category}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <FiUsers className="mr-1" /> {course.students > 1000 ? `${(course.students/1000).toFixed(1)}K` : course.students}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-indigo-600 transition-colors">
                      <Link to={`/courses/${course.id}`}>{course.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">By {course.instructor}</p>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">{course.duration}</span>
                      <span className="text-lg font-bold text-gray-900">${course.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link 
              to="/courses" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              Explore All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our students have to say about their learning experience.
            </p>
          </div>
          
          {/* Testimonials will be loaded here */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="flex items-center text-yellow-400 mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FiStar key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">5.0</span>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "The courses here transformed my career. The instructors are knowledgeable and the curriculum is up-to-date with industry standards."
                </p>
                <div className="flex items-center">
                  <img 
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 30}.jpg`} 
                    alt="Student" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Alex Johnson</h4>
                    <p className="text-sm text-gray-500">Web Developer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,white,transparent)]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to advance your career?</h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
              Join thousands of students who have already started their learning journey with us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/register" 
                className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Get Started for Free
              </Link>
              <Link 
                to="/courses" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200"
              >
                Browse Courses
              </Link>
            </div>
            <p className="mt-6 text-indigo-200 text-sm">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our courses and learning platform.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How do I enroll in a course?",
                answer: "Simply browse our course catalog, select the course you're interested in, and click the 'Enroll Now' button. You'll be guided through the enrollment process."
              },
              {
                question: "Do you offer certificates upon completion?",
                answer: "Yes, all our paid courses come with a certificate of completion that you can share on your LinkedIn profile or resume."
              },
              {
                question: "Can I access the course content after completion?",
                answer: "Yes, you'll have lifetime access to all the course materials, including any future updates."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and in some regions, we also support bank transfers."
              },
              {
                question: "Is there a money-back guarantee?",
                answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with your purchase."
              }
            ].map((item, index) => (
              <div key={index} className="mb-4 border-b border-gray-100 pb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Contact our support team
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
