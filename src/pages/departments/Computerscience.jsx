import React, { useState } from 'react';
import csg from '@/assets/csg.png';
import computer from '@/assets/computer.png';
import undergra1 from '@/assets/undergra1.png';
import { FaArrowRight } from 'react-icons/fa';

function ComputerScience() {
  const [activeTab, setActiveTab] = useState('/Bachelor'); 

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // ProgramCard Component
  const ProgramCard = ({ title, degreeType }) => {
    return (
      <div className="bg-black shadow-lg rounded-lg p-10   ">
       <div className='flex flex-row gap-32'>
       <div className='text-white text-xs'>OCT-20-2023</div>
       <div className='text-white text-center  rounded-3xl border border-white w-20 h-10 '><button className='mt-1'>/Bachelor</button></div>
       </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-white mt-2">{degreeType}</p>
        <p className="text-white mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="w-12 mt-3 h-12 border border-white  text-white rounded-full flex items-center justify-center hover:bg-red-800 cursor-pointer">
  <button
    onClick={""}
    className="text-white"
  >
    <FaArrowRight />
  </button>
</div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center bg-white p-8 lg:p-16">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold text-red-700 mb-4">COMPUTER SCIENCE</h1>
          <p className="text-gray-700 text-lg mb-4">
            Lorem ipsum dolor sit amet consectetur. Bibendum sagittis et egestas ut.
            Risus morbi tincidunt sapien dignissim. Nulla est integer duis elementum eu
            phasellus. Curabitur sed vulputate ligula leo sit sed arcu eu. Convallis
            donec magna sociis morbi nulla. Nunc pulvinar amet justo integer mi dictumst.
            Et in viverra porttitor nam tristique.
          </p>
          <div className="flex flex-col lg:flex-row items-center lg:items-start mt-4">
            <button className="bg-red-700 text-white font-semibold py-2 px-6 rounded-full hover:bg-red-800 mb-2 lg:mb-0 lg:mr-4">
              APPLY NOW
            </button>
            <span className="text-gray-600">Deadline : April 24, 2024</span>
          </div>
        </div>

       {/* Wrapper Section */}
       <div className="lg:w-1/2 flex j relative lg:mt-0">
  {/* Background Shapes / Containers */}
  <div className="absolute bg-black left-72 right-10 h-64 rounded-full mt-32"></div>
  <div className="absolute bg-red-900 w-96 h-72 ml-52 rounded-2xl mt-80  "></div>
  
  {/* Image Section */}
  <img
    src={csg}  
    alt="Student studying"
    className="relative mt-16 ml-56 z-10 max-w-xs lg:max-w-md"
  />
</div>


      </div>



     
     

      {/* Events Section */}
      <div className='' style={{ backgroundColor: '#323232' }}>
      <section className=" flex flex-row py-24 px-6 text-center"
       
      >
        <div className="grid grid-cols-2 gap-10 justify-center text-white ml-20 mt-10">Events</div>
       <div>
       <h1 className="text-4xl ml-4  text-white mt-10 font-bold">
          COMPUTER SCIENCE <br />
         
        </h1>
        <div className="text-4xl flex gap-9 flex-row ml-40 text-white mt-4 font-bold"
       
        >
          PROGRAMS & <div className='rounded-3xl w-44'
           style={{ backgroundColor: '#AE0606'}}
          >COURSES</div> <br />
         
        </div>

       </div>
       
      </section>

      {/* Additional Tabs and Program Cards Section ) */}
      <div className="flex  flex-row space-x-28 px-20 mt-4">
        {/* Vertical Tabs on Left */}
        <div className="flex flex-col text-2xl  space-y-4">
          {['/Undergraduate', '/Postgraduate', '/PHD'].map((tab) => (
            <a
              key={tab}
              href="#"
              className={`px-4 py-2 rounded-full ${activeTab === tab ? 'text-red-700 font-bold' : 'text-gray-600'} hover:text-red-700`}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick(tab);
              }}
            >
              {tab.replace('/', '')}
            </a>
          ))}
        </div>

        {/* Program Cards on the Right */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-grow">
          {activeTab === '/Undergraduate' && (
            <>
              <ProgramCard title="Civil & Environmental Engineering" degreeType="Bachelor" />
              <ProgramCard title="Electrical Engineering" degreeType="Bachelor" />
              <ProgramCard title="Mechanical Engineering" degreeType="Bachelor" />
              <ProgramCard title="Civil & Environmental Engineering" degreeType="Bachelor" />
              <ProgramCard title="Electrical Engineering" degreeType="Bachelor" />
              <ProgramCard title="Mechanical Engineering" degreeType="Bachelor" />
           
            </>
          )}
          {activeTab === '/Postgraduate' && (
            <>
              <ProgramCard title="Advanced Structural Engineering" degreeType="Masters" />
              <ProgramCard title="Renewable Energy Systems" degreeType="Masters" />
              <ProgramCard title="Data Science" degreeType="Masters" />
              <ProgramCard title="Civil & Environmental Engineering" degreeType="Bachelor" />
              <ProgramCard title="Electrical Engineering" degreeType="Bachelor" />
              <ProgramCard title="Mechanical Engineering" degreeType="Bachelor" />
            </>
          )}
          {activeTab === '/PHD' && (
            <>
              <ProgramCard title="Philosophy of Science" degreeType="PhD" />
              <ProgramCard title="Mechanical Engineering PhD" degreeType="PhD" />
              <ProgramCard title="Environmental Studies PhD" degreeType="PhD" />
              <ProgramCard title="Civil & Environmental Engineering" degreeType="Bachelor" />
              <ProgramCard title="Electrical Engineering" degreeType="Bachelor" />
              <ProgramCard title="Mechanical Engineering" degreeType="Bachelor" />
            </>
          )}
         
        </div>
      </div>
      </div>
      
{/**video section */}
<section className="bg-white text-white py-16  ">
<div className="flex items-start ml-10 mt-10 text-red-800">
  {/* Left Text */}
  <div className="text-xl font-semibold">
    OUR IT LAB
  </div>

  {/* Right Text */}
  <div className="ml-32 ">
    <h1 className="text-5xl mb-5 text-black font-bold">
      OUR COMPUTER <br />
      SCIENCE LAB <span className="text-black px-2 py-1" >CLASS</span>
    </h1>
    <p className='mb-5'>lorem ipsum sit ame orem ipsum sit ame orem ipsum sit ame</p>
  </div>
</div>


  <div className="relative w-full h-max  mx-auto">
    <img 
      src={computer} 
      alt="Campus Life" 
      className="w-full h-96 rounded-lg object-cover"
    />
    
    <div className="absolute inset-0 flex items-center justify-center">
      <button className="bg-white rounded-full p-4 shadow-lg">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="currentColor" 
          className="w-8 h-8 text-gray-900" 
          viewBox="0 0 16 16">
          <path d="M6.79 10.68V5.32a.5.5 0 0 1 .759-.429l4.39 2.68a.5.5 0 0 1 0 .858l-4.39 2.68a.5.5 0 0 1-.76-.429z"/>
        </svg>
      </button>
    </div>
  </div>
</section>

{/* New Section with Two Containers */}
<div className="flex justify-center items-center  ">
        <div className="flex   w-full">
         


          {/* Brown Container */}
          <div className="flex-1 bg-brown-700  text-white p-8 rounded-lg shadow-lg"
           style={{ backgroundColor: '#AE0606', lineHeight: '32px' }}
          >
         
    <div className="flex flex-row  h-80  "
    
    >
      <div className="flex-1  text-white  rounded-lg ">
        <h2 className="text-3xl w-96 font-bold mt-10 ml-10 mb-4">Start our Jorney Now!</h2>
        <p className=" ml-10 text-gray-300">
          Lorem ipsum dolor sit amet consectetur. At enim tempor
          Consequat hendrerit adipiscing laoreet sed dapibus. Tincidunt massa risus nunc sit.
          Pellentesque rhoncus justo fusce aliquet malesuada.
        </p>
        <button className="mt-6 pl-2 justify-center font-bold  bg-white ml-10 w-32 py-2 text-red-800 rounded-full " >
          APPLY NOW
        </button>
      </div>
      <div className='w-72 '>
        <img src={undergra1} alt="Campus Activity 1" className="ml-16 -mt-1  h-96 w-72" />
      </div>
    </div>

        </div>
           {/* Black Container */}
    <div className="bg-white flex flex-row text-black h-80  flex-1">
      <div className="">
        <div className='text-black ml-8 text-3xl font-semibold'>Steps to Apply</div>
        <div className="max-w-6xl mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-8">
          {/* Vision, Mission, Teaching, Values */}
          <div className="flex items-start space-x-2">
            <div className="bg-blue-200 w-10 text-center h-10 rounded-full "><p className='mt-2 text-blue-600' >1</p></div>
            <h3 className="text-xl font-semibold">Lorem ipsum dolor sit amet</h3>
          </div>
          <div className="flex items-start space-x-2">
          <div className="bg-pink-200 w-10 text-center h-10 rounded-full "><p className='mt-2 text-pink-600' >2</p></div>
          <h3 className="text-xl font-semibold">Lorem ipsum dolor sit amet</h3>
          </div>
          <div className="flex items-start space-x-4">
          <div className="bg-pink-200 w-10 text-center h-10 rounded-full "><p className='mt-2 text-pink-600' >3</p></div>
          <h3 className="text-xl font-semibold">Lorem ipsum dolor sit amet</h3>
          </div>
          <div className="flex items-start space-x-4">
          <div className="bg-green-200 w-10 text-center h-10 rounded-full "><p className='mt-2' >4</p></div>
          <h3 className="text-xl font-semibold">Lorem ipsum dolor sit amet</h3>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>


        
        
    </div>
  );
}

export default ComputerScience;
