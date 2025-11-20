import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiClock, FiUsers, FiBookOpen, FiCheckCircle, FiArrowRight, FiChevronRight, FiCalendar, FiDollarSign, FiAward } from 'react-icons/fi';
import { Tab } from '@headlessui/react';
import API from '../services/api';
import { useAuth } from '../services/auth';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const { data } = await API.get(`/api/courses/${id}`);
        setCourse(data);
      } catch (error) {
        console.error('Error fetching course:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchCourse();
  }, [id]);

  const enroll = async () => {
    if (!user) {
      window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
      return;
    }
    
    try {
      const token = localStorage.getItem('ti_token');
      const res = await API.post(
        `/api/courses/${id}/enroll`,
        {},
        { headers: { Authorization: 'Bearer ' + token } }
      );
      
      if (res.data.checkoutUrl) {
        window.location.href = res.data.checkoutUrl;
      } else {
        alert('Enrollment successful! Check your dashboard for course access.');
      }
    } catch (error) {
      console.error('Enrollment error:', error);
      alert('Failed to enroll. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Course not found</h2>
          <p className="mt-2 text-gray-600">The requested course could not be found.</p>
          <Link
            to="/courses"
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Browse All Courses
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { name: 'Overview', content: course.summary || 'No overview available.' },
    { 
      name: 'Syllabus', 
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900">What You'll Learn</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array.isArray(course.syllabus) && course.syllabus.length > 0 ? (
              course.syllabus.map((item, index) => (
                <div key={index} className="flex items-start">
                  <FiCheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))
            ) : (
              <p>No syllabus available for this course.</p>
            )}
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Structure</h3>
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {Array.isArray(course.syllabus) && course.syllabus.map((module, index) => (
                  <li key={index}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-indigo-600 truncate">
                          Module {index + 1}: {module.split(':')[0]}
                        </p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {Math.floor(Math.random() * 5) + 1} lessons
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <FiClock className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                            {Math.floor(Math.random() * 2) + 1}h {Math.floor(Math.random() * 30) + 10}m
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) 
    },
    { 
      name: 'Instructor', 
      content: (
        <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="flex-shrink-0">
            <div className="h-32 w-32 rounded-full bg-indigo-100 flex items-center justify-center text-4xl font-bold text-indigo-600">
              {course.instructor?.name?.charAt(0) || 'I'}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900">{course.instructor?.name || 'Expert Instructor'}</h3>
            <p className="mt-1 text-indigo-600">{course.instructor?.title || 'Senior Instructor'}</p>
            <p className="mt-4 text-gray-600">
              {course.instructor?.bio || 'Our instructors are industry professionals with years of experience in their respective fields.'}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <FiUsers className="h-5 w-5 text-indigo-500 mr-2" />
                <span className="text-sm text-gray-600">1,000+ Students</span>
              </div>
              <div className="flex items-center">
                <FiAward className="h-5 w-5 text-indigo-500 mr-2" />
                <span className="text-sm text-gray-600">5+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <FiBookOpen className="h-5 w-5 text-indigo-500 mr-2" />
                <span className="text-sm text-gray-600">10+ Courses</span>
              </div>
            </div>
          </div>
        </div>
      ) 
    },
    { 
      name: 'Reviews', 
      content: (
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Student Feedback</h3>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <p className="text-sm text-gray-500">
                No reviews yet. Be the first to review this course!
              </p>
            </div>
          </div>
        </div>
      ) 
    },
  ];

  return (
    <div className="bg-white">
      {/* Course Header */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {course.title}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-indigo-100">
              {course.summary}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={enroll}
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10"
              >
                Enroll Now for ₹{course.fees}
              </button>
              <Link
                to="/contact"
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <Tab.Group selectedIndex={activeTab} onChange={setActiveTab}>
                <Tab.List className="border-b border-gray-200">
                  <div className="flex space-x-8">
                    {tabs.map((tab, index) => (
                      <Tab
                        key={tab.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? 'border-indigo-500 text-indigo-600'
                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                            'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                          )
                        }
                      >
                        {tab.name}
                      </Tab>
                    ))}
                  </div>
                </Tab.List>
                <Tab.Panels className="mt-8">
                  {tabs.map((tab, index) => (
                    <Tab.Panel key={index} className="prose max-w-none">
                      {typeof tab.content === 'string' ? (
                        <p>{tab.content}</p>
                      ) : (
                        tab.content
                      )}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>

          {/* Sidebar */}
          <div className="mt-12 lg:mt-0">
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 sticky top-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Course Details</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FiClock className="h-5 w-5 text-indigo-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Duration</p>
                    <p className="text-sm text-gray-500">8 weeks • 5-7 hours/week</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiCalendar className="h-5 w-5 text-indigo-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Start Date</p>
                    <p className="text-sm text-gray-500">Enroll anytime • Self-paced</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiDollarSign className="h-5 w-5 text-indigo-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Course Fee</p>
                    <p className="text-2xl font-bold text-gray-900">₹{course.fees}</p>
                    <p className="text-xs text-gray-500">One-time payment</p>
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    onClick={enroll}
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Enroll Now
                  </button>
                  <p className="mt-2 text-center text-sm text-gray-500">
                    7-day money-back guarantee
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="text-sm font-medium text-gray-900">What's included</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <FiCheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Certificate of completion</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Full lifetime access</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Access on mobile and TV</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Assignments & projects</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">24/7 support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">Start your learning journey today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button
                onClick={enroll}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Enroll Now
              </button>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
