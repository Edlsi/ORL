import React, { useState } from 'react';
import mapImage from '@/assets/map.png'; // Adjust the path as necessary based on your project structure

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div 
        className="flex justify-between items-center border-b border-gray-600 py-4 cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{question}</p>
        <span className={`text-red-500 transform transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </div>
      {isOpen && <p className="text-gray-400 mt-2">{answer}</p>}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Nulla nulla cursus consequat gravida odio adipiscing ut tellus commodo. Nisi enim volutpat enim aliquet."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Nulla nulla cursus consequat gravida odio adipiscing ut tellus commodo. Nisi enim volutpat enim aliquet."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Nulla nulla cursus consequat gravida odio adipiscing ut tellus commodo. Nisi enim volutpat enim aliquet."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Nulla nulla cursus consequat gravida odio adipiscing ut tellus commodo. Nisi enim volutpat enim aliquet."
    }, 
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Nulla nulla cursus consequat gravida odio adipiscing ut tellus commodo. Nisi enim volutpat enim aliquet."
    },
    // Add more FAQs as needed
  ];

  return (
    <div>
      <div className="bg-gray-800 text-white p-10 lg:p-20 text-center"
       style={{ backgroundColor: '#323232' }}
      >
        <h2 className="text-4xl font-bold mb-4">
          Frequently Asked <span className="px-2 py-1 rounded"
           style={{ backgroundColor: '#AE0606' }}
          >Questions</span>
        </h2>
        <p className="text-gray-300 mb-10">Have questions? We're here to help</p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      {/* Image below the FAQ section */}
      <div className="mt-10 ">
        <img src={mapImage} alt="Map" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default FAQSection;
