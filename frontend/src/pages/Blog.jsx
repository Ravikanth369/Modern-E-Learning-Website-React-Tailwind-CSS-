import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiUser, FiTag, FiSearch, FiChevronRight } from 'react-icons/fi';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development in 2023',
    excerpt: 'Explore the latest trends and technologies shaping the future of web development this year.',
    date: 'June 15, 2023',
    readTime: '5 min read',
    author: 'Sarah Johnson',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
  },
  {
    id: 2,
    title: 'Getting Started with Machine Learning',
    excerpt: 'A beginner\'s guide to understanding and starting with machine learning concepts.',
    date: 'June 10, 2023',
    readTime: '8 min read',
    author: 'Michael Chen',
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 3,
    title: '10 Tips for Better UI/UX Design',
    excerpt: 'Practical tips to improve your user interface and experience design skills.',
    date: 'June 5, 2023',
    readTime: '6 min read',
    author: 'Emma Wilson',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80',
  },
  {
    id: 4,
    title: 'The Rise of Remote Work in Tech',
    excerpt: 'How remote work is changing the tech industry and what it means for developers.',
    date: 'May 28, 2023',
    readTime: '7 min read',
    author: 'David Kim',
    category: 'Career',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 5,
    title: 'Mobile App Development: Native vs Cross-Platform',
    excerpt: 'A comparison of native and cross-platform approaches to mobile app development.',
    date: 'May 20, 2023',
    readTime: '9 min read',
    author: 'Alex Rodriguez',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 6,
    title: 'The Importance of Cybersecurity in 2023',
    excerpt: 'Why cybersecurity is more important than ever and how to protect your digital assets.',
    date: 'May 15, 2023',
    readTime: '10 min read',
    author: 'Priya Patel',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
];

// Categories for the blog
const categories = [
  'All',
  'Web Development',
  'Data Science',
  'Design',
  'Mobile',
  'Career',
  'Security',
  'Programming',
  'Cloud',
  'DevOps'
];

// Recent posts for the sidebar
const recentPosts = [
  { id: 1, title: 'The Future of Web Development in 2023', date: 'June 15, 2023' },
  { id: 2, title: 'Getting Started with Machine Learning', date: 'June 10, 2023' },
  { id: 3, title: '10 Tips for Better UI/UX Design', date: 'June 5, 2023' },
  { id: 4, title: 'The Rise of Remote Work in Tech', date: 'May 28, 2023' },
  { id: 5, title: 'Mobile App Development: Native vs Cross-Platform', date: 'May 20, 2023' },
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts based on search query and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">Insights, tutorials, and news about technology and education</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-6 py-4 pr-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute right-4 top-4 text-gray-500 w-6 h-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {currentPosts.length > 0 ? (
                  currentPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <span className="flex items-center mr-4">
                            <FiCalendar className="mr-1" /> {post.date}
                          </span>
                          <span className="flex items-center">
                            <FiClock className="mr-1" /> {post.readTime}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold mb-2 hover:text-indigo-600 transition-colors">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-2">
                              {post.author.charAt(0)}
                            </div>
                            <span className="text-sm font-medium">{post.author}</span>
                          </div>
                          <Link 
                            to={`/blog/${post.id}`}
                            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                          >
                            Read More <FiChevronRight className="ml-1" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-12">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
                    <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {filteredPosts.length > postsPerPage && (
                <div className="mt-12 flex justify-center">
                  <nav className="inline-flex rounded-md shadow">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 rounded-l-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      
                      return (
                        <button
                          key={pageNum}
                          onClick={() => paginate(pageNum)}
                          className={`px-4 py-2 border-t border-b border-gray-300 ${
                            currentPage === pageNum
                              ? 'bg-indigo-600 text-white border-indigo-600'
                              : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                    
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 rounded-r-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </nav>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* About Widget */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">About The Blog</h3>
                <p className="text-gray-600 mb-4">
                  Welcome to the Corediva blog! Here we share insights, tutorials, and news about technology, 
                  programming, and online education to help you grow your skills and advance your career.
                </p>
                <Link 
                  to="/about" 
                  className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center"
                >
                  Learn more <FiChevronRight className="ml-1" />
                </Link>
              </div>

              {/* Categories Widget */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => {
                          setSelectedCategory(category);
                          setCurrentPage(1);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-md flex items-center justify-between ${
                          selectedCategory === category
                            ? 'bg-indigo-50 text-indigo-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span>{category}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                          {blogPosts.filter(p => p.category === category).length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts Widget */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <Link 
                        to={`/blog/${post.id}`}
                        className="block hover:text-indigo-600 transition-colors"
                      >
                        <h4 className="font-medium">{post.title}</h4>
                        <span className="text-sm text-gray-500">{post.date}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags Widget */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'JavaScript', 'Python', 'Machine Learning', 'Web Design', 'Node.js', 'CSS', 'HTML', 'Cloud', 'DevOps'].map((tag) => (
                    <button
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-indigo-100 hover:text-indigo-700 transition-colors flex items-center"
                    >
                      <FiTag className="mr-1 w-3 h-3" /> {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Widget */}
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Subscribe to Newsletter</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get the latest articles and news delivered to your inbox every week.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
