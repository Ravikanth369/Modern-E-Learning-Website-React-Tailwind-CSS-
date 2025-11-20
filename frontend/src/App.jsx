import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  FiMenu, 
  FiX, 
  FiUser, 
  FiSearch, 
  FiArrowRight, 
  FiBookOpen, 
  FiAward, 
  FiUsers,
  FiMessageSquare,
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiHome,
  FiBook,
  FiInfo,
  FiFileText,
  FiYoutube
} from 'react-icons/fi';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Instructors from './components/Instructors';
import { AuthProvider, useAuth } from './services/auth';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <FiHome className="mr-2" /> },
    { name: 'Courses', path: '/courses', icon: <FiBook className="mr-2" /> },
    { name: 'About', path: '/about', icon: <FiInfo className="mr-2" /> },
    { name: 'Blog', path: '/blog', icon: <FiFileText className="mr-2" /> },
    { name: 'Contact', path: '/contact', icon: <FiMail className="mr-2" /> },
  ];

  const isActive = (path) => {
    return location.pathname === path ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600';
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">Corediva</span>
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-4 py-2 text-base font-medium text-indigo-600 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-12 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Corediva</h3>
          <p className="text-gray-400">Empowering the next generation of tech professionals with industry-relevant skills and knowledge.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            <li><Link to="/courses" className="text-gray-400 hover:text-white">Our Courses</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Courses</h4>
          <ul className="space-y-2">
            <li><Link to="/courses/web-development" className="text-gray-400 hover:text-white">Web Development</Link></li>
            <li><Link to="/courses/data-science" className="text-gray-400 hover:text-white">Data Science</Link></li>
            <li><Link to="/courses/cyber-security" className="text-gray-400 hover:text-white">Cyber Security</Link></li>
            <li><Link to="/courses/cloud-computing" className="text-gray-400 hover:text-white">Cloud Computing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Email: info@corediva.com</li>
            <li>Phone: +91 1234567890</li>
            <li>Address: 123 Tech Park, Bangalore, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Corediva Training Institute. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/instructors" element={<Instructors />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
