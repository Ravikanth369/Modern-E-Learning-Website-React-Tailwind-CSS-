import React from 'react';
import { FiLinkedin, FiTwitter, FiGlobe } from 'react-icons/fi';

const instructors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Senior Web Development Instructor',
    bio: 'Former Lead Developer at TechCorp with 12+ years of experience in full-stack development. Sarah specializes in JavaScript frameworks and modern web technologies.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    },
    expertise: ['JavaScript', 'React', 'Node.js', 'TypeScript']
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Data Science Lead',
    bio: 'Ex-Data Scientist at Google and MIT graduate. Michael has published numerous papers on machine learning and loves making complex concepts accessible to beginners.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    },
    expertise: ['Python', 'Machine Learning', 'Data Analysis', 'TensorFlow']
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'UI/UX Design Expert',
    bio: 'Award-winning designer with experience at top design agencies. Emma has worked with Fortune 500 companies to create intuitive and beautiful user experiences.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    },
    expertise: ['UI/UX Design', 'Figma', 'User Research', 'Prototyping']
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'DevOps Specialist',
    bio: 'With a background in both development and operations, David helps bridge the gap between code and infrastructure. He previously led DevOps at a major cloud provider.',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    },
    expertise: ['Docker', 'Kubernetes', 'AWS', 'CI/CD']
  },
  {
    id: 5,
    name: 'Priya Patel',
    role: 'Mobile Development Lead',
    bio: 'iOS and Android developer with 8+ years of experience. Priya has built apps with millions of downloads and loves teaching others the art of mobile development.',
    image: 'https://randomuser.me/api/portraits/women/63.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    },
    expertise: ['React Native', 'Swift', 'Kotlin', 'Mobile UI']
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Cybersecurity Expert',
    bio: 'Certified Ethical Hacker with extensive experience in penetration testing and security architecture. James helps organizations protect their digital assets from threats.',
    image: 'https://randomuser.me/api/portraits/men/86.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      website: '#'
    },
    expertise: ['Cybersecurity', 'Ethical Hacking', 'Network Security', 'CISSP']
  }
];

const Instructors = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn from Industry Experts</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our instructors are seasoned professionals with real-world experience at top tech companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-indigo-50 flex items-center justify-center">
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{instructor.name}</h3>
                <p className="text-indigo-600 font-medium mb-3">{instructor.role}</p>
                <p className="text-gray-600 mb-4">{instructor.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">EXPERTISE</h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.expertise.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3 mt-4">
                  <a 
                    href={instructor.social.linkedin} 
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    aria-label={`${instructor.name}'s LinkedIn`}
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={instructor.social.twitter} 
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    aria-label={`${instructor.name}'s Twitter`}
                  >
                    <FiTwitter className="w-5 h-5" />
                  </a>
                  <a 
                    href={instructor.social.website} 
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    aria-label={`${instructor.name}'s Website`}
                  >
                    <FiGlobe className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of students learning from our expert instructors
          </p>
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            View All Instructors
          </button>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
