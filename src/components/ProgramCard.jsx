import React from 'react';

// ProgramCard Component
const ProgramCard = ({ title, degreeType }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{degreeType}</p>
      <p className="text-gray-500 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button className="mt-4 px-4 py-2 bg-red-700 text-white rounded-full hover:bg-red-800">
        Learn More
      </button>
    </div>
  );
};

export default ProgramCard;
