import React from 'react';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Web Developer at TechCorp',
    content: 'Corediva transformed my career. The courses are well-structured and taught by industry experts. I landed my dream job within 3 months of completing the Full Stack Development program!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Data Scientist at DataInsights',
    content: 'The Data Science curriculum is top-notch. The hands-on projects gave me the confidence to tackle real-world problems. Highly recommended for anyone serious about breaking into data science.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'UI/UX Designer at DesignHub',
    content: 'As a designer, I wanted to expand my skill set. The UI/UX courses at Corediva provided the perfect blend of theory and practical skills that I could immediately apply to my work.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'DevOps Engineer at CloudScale',
    content: 'The DevOps program was exactly what I needed to advance my career. The instructors were knowledgeable and the curriculum was always up-to-date with the latest tools and technologies.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    id: 5,
    name: 'Priya Patel',
    role: 'Mobile Developer at AppVenture',
    content: 'I learned React Native through Corediva and was able to build and publish my first app within 2 months. The support from the community and mentors was invaluable.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/63.jpg'
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Cybersecurity Analyst at SecureNet',
    content: 'The cybersecurity program provided comprehensive training that helped me pass my certifications. The hands-on labs were particularly helpful in understanding complex security concepts.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/86.jpg'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our students who have transformed their careers with our courses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            Read More Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
