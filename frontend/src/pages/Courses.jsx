import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiFilter, FiChevronDown, FiClock, FiUser, FiBarChart2 } from 'react-icons/fi';
import API from '../services/api';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    price: '',
    level: '',
  });
  const [showFilters, setShowFilters] = useState(false);

  // Sample course data with blue-themed background images
  const sampleCourses = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      category: 'Web Development',
      summary: 'Master full-stack development with modern JavaScript, React, Node.js, and MongoDB.',
      level: 'Beginner',
      duration: '12 weeks',
      students: 1245,
      fees: 29999,
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      title: 'Data Science & Machine Learning',
      category: 'Data Science',
      summary: 'Learn data analysis, visualization, and machine learning with Python and TensorFlow.',
      level: 'Intermediate',
      duration: '16 weeks',
      students: 987,
      fees: 34999,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 3,
      title: 'Cloud Computing with AWS',
      category: 'Cloud',
      summary: 'Master AWS services and cloud architecture for scalable applications.',
      level: 'Intermediate',
      duration: '10 weeks',
      students: 856,
      fees: 27999,
      image: 'https://images.unsplash.com/photo-1506368083636-6defb8f1a6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
    },
    {
      id: 4,
      title: 'Mobile App Development with React Native',
      category: 'Mobile',
      summary: 'Build cross-platform mobile apps using React Native and Expo.',
      level: 'Beginner',
      duration: '10 weeks',
      students: 1120,
      fees: 25999,
      image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 5,
      title: 'Cybersecurity Fundamentals',
      category: 'Security',
      summary: 'Learn essential cybersecurity concepts and ethical hacking techniques.',
      level: 'Advanced',
      duration: '14 weeks',
      students: 723,
      fees: 31999,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 6,
      title: 'DevOps & CI/CD Pipeline',
      category: 'DevOps',
      summary: 'Master Docker, Kubernetes, and CI/CD pipeline implementation.',
      level: 'Intermediate',
      duration: '12 weeks',
      students: 935,
      fees: 28999,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await API.get('/api/courses');
        // Use sample data if API doesn't return any courses
        setCourses(data.length > 0 ? data : sampleCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
        // Use sample data if there's an error
        setCourses(sampleCourses);
      }
    };
    fetchCourses();
  }, []);

  const categories = [...new Set(courses.map((course) => course.category))];
  const levels = ['Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !filters.category || course.category === filters.category;
    const matchesLevel = !filters.level || course.level === filters.level;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Our Courses</h1>
          <p className="mt-4 text-xl text-indigo-100 max-w-3xl mx-auto">
            Discover our comprehensive range of courses designed to help you excel in your career.
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-4 border border-transparent rounded-md leading-5 bg-indigo-600 bg-opacity-25 text-white placeholder-indigo-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 focus:text-gray-900 transition duration-150 ease-in-out"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
              >
                <FiFilter className="h-4 w-4 mr-2" />
                Filters
                <FiChevronDown className="ml-2 h-4 w-4" />
              </button>
            </div>
            
            {/* Filters */}
            {showFilters && (
              <div className="mt-4 bg-white rounded-lg shadow-lg p-4 text-left">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Filter Courses</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <select
                      id="category"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      value={filters.category}
                      onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    >
                      <option value="">All Categories</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
                      Level
                    </label>
                    <select
                      id="level"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      value={filters.level}
                      onChange={(e) => setFilters({ ...filters, level: e.target.value })}
                    >
                      <option value="">All Levels</option>
                      {levels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex items-end">
                    <button
                      onClick={() => setFilters({ category: '', level: '' })}
                      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Clear Filters
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'} Available
          </h2>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">Sort by:</span>
            <select className="border-0 text-sm font-medium text-indigo-600 focus:ring-0 focus:outline-none">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div 
                  className="h-48 relative bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.7), rgba(37, 99, 235, 0.7)), url(${course.image || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'})`
                  }}
                >
                  <div className="absolute top-3 right-3 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                    {course.level || 'Beginner'}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-xl font-bold text-white line-clamp-1">
                      {course.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        {course.category}
                      </span>
                      <h3 className="mt-2 text-xl font-semibold text-gray-900 line-clamp-2">
                        {course.title}
                      </h3>
                    </div>
                    <span className="text-xl font-bold text-indigo-600">₹{course.fees}</span>
                  </div>
                  
                  <p className="mt-3 text-gray-600 line-clamp-2">
                    {course.summary}
                  </p>
                  
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <div className="flex items-center mr-4">
                      <FiClock className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                      <span>{course.duration || '8 weeks'}</span>
                    </div>
                    <div className="flex items-center">
                      <FiUser className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                      <span>{course.students || '100+'}+ students</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link
                      to={`/courses/${course.id}`}
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      View Course
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <FiSearch className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">No courses found</h3>
            <p className="mt-1 text-sm text-gray-500">
              We couldn't find any courses matching your search. Try adjusting your filters.
            </p>
            <div className="mt-6">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilters({ category: '', level: '' });
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
