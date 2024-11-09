import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // State for holding the selected option
  const [selectedAdmission, setSelectedAdmission] = useState('Admission');
  const [selectedDepartment, setSelectedDepartment] = useState('Department');

  const toggleAdmissionDropdown = () => {
    setIsAdmissionOpen(!isAdmissionOpen);
  };

  const toggleDepartmentDropdown = () => {
    setIsDepartmentOpen(!isDepartmentOpen);
  };

  const handleAdmissionSelect = (option) => {
    setSelectedAdmission(option); 
    setIsAdmissionOpen(false); 
  };

  const handleDepartmentSelect = (option) => {
    setSelectedDepartment(option); 
    setIsDepartmentOpen(false); 
  };

  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <nav className={`w-full py-4 fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white bg-opacity-70 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Left side: Logo and Navigation */}
          <div className="flex items-center space-x-28">
            <div
              className="flex items-center justify-center w-14 h-14 rounded-full  text-white mr-6"
              style={{ backgroundColor: '#AE0606', lineHeight: '32px' }}
            >
              LOGO
            </div>
            <ul className="flex space-x-20 relative">
              <li>
                <Link to="/" className="hover:text-[#820404] transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <a href="/about" className="hover:text-[#820404] transition duration-300">
                  About
                </a>
              </li>
              <li className="relative">
                <div
                  onClick={toggleAdmissionDropdown}
                  className="flex items-center cursor-pointer hover:text-[#820404] transition duration-300"
                >
                  {selectedAdmission} <FaChevronDown className="ml-1 hover:text-[#820404]" />
                </div>
                {isAdmissionOpen && (
                  <ul className="absolute left-0 mt-1 bg-[#DFDFDF] shadow-lg z-10">
                    <li>
                      <a
                      href="/undergraduate"
                        onClick={() => handleAdmissionSelect('/Undergraduate')}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Undergraduate
                      </a>
                    </li>
                    <li>
                      <a
                       href="/Graduate"
                        onClick={() => handleAdmissionSelect('Graduate')}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Graduate
                      </a>
                    </li>
                    <li>
                      <a
                      href="/Graduate"
                        onClick={() => handleAdmissionSelect('Financial Aid')}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Financial Aid
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative">
                <div
                  onClick={toggleDepartmentDropdown}
                  className="flex items-center cursor-pointer hover:text-[#820404]  transition duration-300"
                >
                  {selectedDepartment} <FaChevronDown className="ml-1 hover:text-[#820404]" />
                </div>
                {isDepartmentOpen && (
                  <ul className="absolute left-0 mt-1 bg-[#DFDFDF] shadow-lg z-10">
                    <li>
                      <a
                      href="/computersc"
                        onClick={() => handleDepartmentSelect('Computer Science')}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Computer Science
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => handleDepartmentSelect('Engineering')}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Engineering
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => handleDepartmentSelect('Law')}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Law
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => handleDepartmentSelect('Humanity and Science')}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Humanity and Science
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="/news" className="hover:text-[#820404] transition duration-300">
                  News & events
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate('/contact')}
                  className="hover:text-[#820404] transition duration-300 cursor-pointer text-red-700 font-bold"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Get Started Button */}
          <div>
            <button className="w-36 h-12 rounded-full  text-white"
             style={{ backgroundColor: '#AE0606' }}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
