import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    question: 'What courses do you offer?',
    answer: 'We offer a wide range of courses in web development, data science, mobile app development, UI/UX design, cybersecurity, and more. Our catalog includes both beginner-friendly and advanced courses to help you grow your skills at any level.'
  },
  {
    question: 'How do I enroll in a course?',
    answer: 'Enrolling in a course is easy! Simply browse our course catalog, select the course you\'re interested in, and click the "Enroll Now" button. You\'ll be guided through the registration and payment process. Once completed, you\'ll get immediate access to the course materials.'
  },
  {
    question: 'Are there any prerequisites for the courses?',
    answer: 'Prerequisites vary by course. Beginner courses typically require no prior experience, while more advanced courses may require foundational knowledge in the subject area. Each course page lists any prerequisites, and our advisors can help you determine if a course is right for your skill level.'
  },
  {
    question: 'How long do I have access to a course after enrolling?',
    answer: 'You\'ll have lifetime access to all course materials after enrolling. This includes any future updates to the course content. You can learn at your own pace and revisit the materials whenever you need a refresher.'
  },
  {
    question: 'Do you offer certificates upon completion?',
    answer: 'Yes, we provide a certificate of completion for all our courses. These certificates can be shared on LinkedIn and added to your resume to showcase your new skills to potential employers.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards, PayPal, and bank transfers. We also offer flexible payment plans for many of our programs to make learning more accessible.'
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes, we offer a 30-day money-back guarantee for all our courses. If you\'re not satisfied with your purchase, you can request a full refund within 30 days of enrollment, no questions asked.'
  },
  {
    question: 'How do I get help if I have questions during the course?',
    answer: 'We provide multiple support channels including discussion forums, Q&A sessions with instructors, and a dedicated support team. Many courses also include community access where you can connect with fellow students for peer-to-peer learning.'
  },
  {
    question: 'Do you offer corporate training or group discounts?',
    answer: 'Yes, we offer special pricing for group enrollments and custom corporate training programs. Contact our enterprise team at enterprise@corediva.com to discuss your organization\'s learning and development needs.'
  },
  {
    question: 'Can I preview a course before enrolling?',
    answer: 'Absolutely! Most of our courses offer free preview lessons so you can get a feel for the teaching style and course content before making a commitment. Look for the "Preview" button on course pages.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our courses and learning platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-200">
              <button
                className="w-full py-5 px-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-${index}`}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {activeIndex === index ? (
                  <FiMinus className="w-5 h-5 text-indigo-600" />
                ) : (
                  <FiPlus className="w-5 h-5 text-gray-500" />
                )}
              </button>
              <div
                id={`faq-${index}`}
                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}
                aria-hidden={activeIndex !== index}
              >
                <div className="px-4 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? Our support team is here to help.
          </p>
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
