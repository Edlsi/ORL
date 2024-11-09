

import React, { useState } from 'react';
import { FaArrowRight, FaPhoneAlt, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import administrator from '@/assets/administrator.png'; 
import ggraduated from '@/assets/ggirl.png'; 
import boy from '@/assets/boy.png';
import girl from '@/assets/girl.png';
import boy2 from '@/assets/boy2.png';
import graduated from '@/assets/graduated.png';
import fuculity1 from '@/assets/fuculity1.png';
import fucality2 from '@/assets/fucality2.png';
import vidimg from '@/assets/vidimg.png';


function Home() {
  
  const [activeTab, setActiveTab] = useState('/Bachelor');
  const [currentAdminIndex, setCurrentAdminIndex] = useState(0); // State for the current admin index

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const administrators = [
    {
      name: "PHILIMON MEHARI",
      position: "President",
      description: "Lorem ipsum dolor sit amet consectetur. Cursus eget sed mauris ut egestas turpis. Ac purus libero consectetur dui...",
      phone: "+251900000011",
      email: "Example@gmail.com",
    },
    {
      name: "ALEX JOHNSON",
      position: "Vice President",
      description: "Lorem ipsum dolor sit amet consectetur. Ac purus libero consectetur dui. Sed ultrices eu gravida scelerisque...",
      phone: "+251900000022",
      email: "Alex@example.com",
    },
    {
      name: "PHILIMON MEHARI",
      position: "President",
      description: "Lorem ipsum dolor sit amet consectetur. Cursus eget sed mauris ut egestas turpis. Ac purus libero consectetur dui...",
      phone: "+251900000011",
      email: "Example@gmail.com",
    },
  ];

  const handleNextAdmin = () => {
    setCurrentAdminIndex((prevIndex) => (prevIndex + 1) % administrators.length);
  };

  const handlePrevAdmin = () => {
    setCurrentAdminIndex((prevIndex) =>
      prevIndex === 0 ? administrators.length - 1 : prevIndex - 1
    );
  };

  const facultyMembers = [
    {
      name: "DR. EMMA WATSON",
      position: "Professor of Computer Science",
      phone: "+251900000033",
      email: "emma.watson@example.com",
    },
    {
      name: "PROF. JAMES SMITH",
      position: "Head of Mathematics",
      phone: "+251900000044",
      email: "james.smith@example.com",
    },
    {
      name: "DR. SOPHIA JOHNSON",
      position: "Professor of Physics",
      phone: "+251900000055",
      email: "sophia.johnson@example.com",
    },
  ];
  const ProgramCard = ({ title, degreeType }) => {
    return (
      <div
        className="hover:bg-blue-950 h-96 rounded-lg p-10 text-black hover:text-white bg-[#DFDFDF] transition-all duration-300 ease-in-out"
      >
        <div className='flex flex-row mb-10 gap-52'>
          <div className='text-xs mt-'>OCT-20-2023</div>
          <div className='text-sm text-center rounded-3xl border border-black w-20 h-10'>
            <div className='mt-1'>/Bachelor</div>
          </div>
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2">{degreeType}</p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="w-12 mt-3 h-12 border border-black rounded-full flex items-center justify-center hover:bg-red-800 cursor-pointer">
          <button onClick={""} className="text-black">
            <FaArrowRight />
          </button>
        </div>
      </div>
    );
  };
  

  return (
    <div>
      
      {/* Hero Section */}
      <div className='flex   bg-white flex-col '>
      <section className=" flex flex-row pt-28 px-6 ">
       <div>
       <h1 className="text-8xl ml-16 mt-24 font-bold">
          DISCOVER <p className=" text-black  rounded-2xl">YOUR </p> 
          <p className="  text-white  rounded-2xl"
          style={{ backgroundColor: '#AE0606' }}
          >PASSION.</p>
          <p className=" text-black  rounded-2xl">PURSUE </p> 
          <p className=" text-white   rounded-2xl"
          style={{ backgroundColor: '#AE0606' }}
          >PURPOSE</p> </h1>
           <button className="w-56 ml-20 mt-10 text-2xl items-center h-20 rounded-full  text-white"
      style={{ backgroundColor: '#AE0606' }}
      >
        CONTACT US
      </button>
       </div> 

        {/* Image Placeholders in 2x2 Grid */}
        <div className="grid grid-cols-2 gap-4 justify-center  mt-10">
          <div className="w-48 h-96 ml-60 rounded-full"
           style={{ backgroundColor: '#AE0606' }}
          >
          <img src={boy} alt="boy" className="rounded-lg w-full mt-16 h-80 object-cover" />
          </div>
          <div className="w-96 h-56 mt-24   rounded-full"
          style={{ backgroundColor: '#323232' }}
          >
          <img src={boy2} alt="boy2" className="rounded-lg w-64 mt-14 ml-10 h-40 object-cover" />
          </div>
          <div className="w-96 ml-60 h-80 mt-10 bg-gray-300 rounded-full">
          <img src={graduated} alt="graduated" className="rounded-lg  w-full  mt-12 object-cover" />
          </div>
          <div className="w-48 h-80 ml-32 rounded-full"
          style={{ backgroundColor: '#AE0606' }}
          >
          <img src={girl} alt="girl" className="rounded-lg w-full h-50 mt-12 object-cover" />
          </div>
        </div>
      </section>
     
      </div>
      

      {/* Programs Section */}
      <section className="py-20 pl-6 ml-20">
  <h2 className="text-lg text-red-800">PROGRAMS</h2>
  <div className="flex flex-row">
    <div className="ml-5">
      <h2 className="text-4xl mt-8 font-bold text-black">ACADEMIC PROGRAMS</h2>
      <p className="text-gray-500 text-xl mt-4">
        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur. Bibendum sagittis
        <br />
        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur. Bibendum sagittis
        <br />
        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur. Bibendum sagittis
        <br />
        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur. Bibendum sagittis
        <br />
        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur. Bibendum sagittis
      </p>
    </div>

    <div
      className="absolute right-0 h-44 w-16 rounded-s-3xl"
      style={{ backgroundColor: '#AE0606' }}
    ></div>
  </div>

 

  {/* Additional program description content */}
  <div className="flex justify-between items-center text-2xl mt-8">
    <div className="flex space-x-4">
      {['/Bachelor', '/Masters', '/PhD'].map((tab) => (
        <a
          key={tab}
          href="#"
          className={`px-4 py-2 rounded-full ${
            activeTab === tab ? 'text-red-700 font-bold' : 'text-gray-600'
          } hover:text-red-700`}
          onClick={(e) => {
            e.preventDefault();
            handleTabClick(tab);
          }}
        >
          {tab.replace('/', '')}
        </a>
      ))}
    </div>

    <button className="ml-auto px-6 mr-40 py-2 border hover:bg-red-800 hover:text-white transition-colors border-gray-500 text-black rounded-full">
      See All Programs
    </button>
  </div>

  {/* Program Cards */}
  <div className="flex overflow-x-auto scrollbar-hide space-x-4 lg:space-x-8 mt-12 duration-300">
    <div className="flex flex-nowrap h-52 rounded-3xl gap-8 max-w-7xl">
      {activeTab === '/Bachelor' && (
        <>
          <ProgramCard1 title="Civil & Environmental Engineering" degreeType="Bachelor" />
          <ProgramCard1 title="Electrical Engineering" degreeType="Bachelor" />
          <ProgramCard1 title="Mechanical Engineering" degreeType="Bachelor" />
        </>
      )}
      {activeTab === '/Masters' && (
        <>
          <ProgramCard1 title="Advanced Structural Engineering" degreeType="Masters" />
          <ProgramCard1 title="Renewable Energy Systems" degreeType="Masters" />
          <ProgramCard1 title="Data Science" degreeType="Masters" />
        </>
      )}
      {activeTab === '/PhD' && (
        <>
          <ProgramCard1 title="Philosophy of Science" degreeType="PhD" />
          <ProgramCard1 title="Mechanical Engineering PhD" degreeType="PhD" />
          <ProgramCard1 title="Environmental Studies PhD" degreeType="PhD" />
        </>
      )}
    </div>
    
  </div>
   {/* Small container */}
   <div
    className="absolute  left-0 h-16 w-20 rounded-e-3xl"
    style={{ backgroundColor: '#323232' }}
  ></div>
</section>


      {/* New Section Below */}
      <div className="container max-w-full  h-96  flex items-center justify-center space-x-8"
      style={{ backgroundColor: '#323232' }}
      >
        <div className='flex  flex-row'>
        <div  className="max-w-sm -ml-24  h-80 mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="flex items-baseline space-x-2">
              <h1 className="text-4xl font-bold text-red-600">1.5k</h1>
              <span className="text-xl font-semibold text-gray-800">Graduates</span>
            </div>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Lobortis aliquet orci pellentesque porttitor nibh hendrerit.
              Luctus ante eros sem non amet gravida facilisi leo. Ultrices urna platea blandit id semper.
            </p>
          </div>
          <div  className="max-w-sm ml-16 h-80 mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="flex items-baseline space-x-2">
              <h1 className="text-4xl font-bold text-red-600">1.5k</h1>
              <span className="text-xl font-semibold text-gray-800">Graduates</span>
            </div>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Lobortis aliquet orci pellentesque porttitor nibh hendrerit.
              Luctus ante eros sem non amet gravida facilisi leo. Ultrices urna platea blandit id semper.
            </p>
          </div>
          <div  className="max-w-sm ml-16 h-80 mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="flex items-baseline space-x-2">
              <h1 className="text-4xl font-bold text-red-600">1.5k</h1>
              <span className="text-xl font-semibold text-gray-800">Graduates</span>
            </div>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Lobortis aliquet orci pellentesque porttitor nibh hendrerit.
              Luctus ante eros sem non amet gravida facilisi leo. Ultrices urna platea blandit id semper.
            </p>
          </div>

        </div>
        
      </div>

      {/* Events Section */}
      <section className="bg-white flex flex-row py-16 pl-6 ">
        <div className="grid grid-cols-2 gap-10  ml-20 mt-10">Events</div>
        <div className=''><div className="text-4xl ml-8 mt-10 font-bold">
          NEWS AND 
          <div>
         <div> UPCOMING <span className="inline-block w-[150px] mt-5 text-3xl items-center pl-4 h-10 rounded-full text-white" style={{ backgroundColor: '#AE0606' }}>
  EVENTS
</span>
</div>
          </div>
        </div></div>
        
        
      </section>

      {/* Additional Tabs and Program Cards Section (Updated as requested) */}
      <div className="flex flex-row space-x-8 ml-20  mt-8">
        {/* Vertical Tabs on Left */}
        <div className="flex flex-col text-2xl space-y-4">
          {['/Art', '/culture', '/Exhibition', '/seminar', '/recration', '/health care'].map((tab) => (
            <a
              key={tab}
              href="#"
              className={`px-4 py-2 rounded-full ${
                activeTab === tab ? 'text-red-700 font-bold' : 'text-gray-600'
              } hover:text-red-700`}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-grow">
          {activeTab === '/Art' && (
            <>
              <ProgramCard title="Civil & Environmental Engineering" degreeType="Bachelor" />
              <ProgramCard title="Electrical Engineering" degreeType="Bachelor" />
              <ProgramCard title="Mechanical Engineering" degreeType="Bachelor" />
            </>
          )}
          {activeTab === '/culture' && (
            <>
              <ProgramCard title="Advanced Structural Engineering" degreeType="Masters" />
              <ProgramCard title="Renewable Energy Systems" degreeType="Masters" />
              <ProgramCard title="Data Science" degreeType="Masters" />
            </>
          )}
          {activeTab === '/Exhibition' && (
            <>
              <ProgramCard title="Philosophy of Science" degreeType="PhD" />
              <ProgramCard title="Mechanical Engineering PhD" degreeType="PhD" />
              <ProgramCard title="Environmental Studies PhD" degreeType="PhD" />
              <ProgramCard title="Environmental Studies PhD" degreeType="PhD" />
              
            
            </>)}
            {activeTab === '/seminar' && (
              <>
                <ProgramCard title="Philosophy of Science" degreeType="PhD" />
                <ProgramCard title="Mechanical Engineering PhD" degreeType="PhD" />
                <ProgramCard title="Environmental Studies PhD" degreeType="PhD" />
                <ProgramCard title="Environmental Studies PhD" degreeType="PhD" />
                
              
              </>)}
              {activeTab === '/recration' && (
                <>
                  <ProgramCard title="Philosophy of Science" degreeType="PhD" />
                  <ProgramCard title="Mechanical Engineering PhD" degreeType="PhD" />
                  <ProgramCard title="Environmental Studies PhD" degreeType="PhD" />
                  <ProgramCard title="Environmental Studies PhD" degreeType="PhD" />
                  
                
                </>)}
                {activeTab === '/health care' && (
                  <>
                    <ProgramCard title="Philosophy of Science" degreeType="PhD" />
                    <ProgramCard title="Mechanical Engineering PhD" degreeType="PhD" />
                    <ProgramCard title="Environmental Studies PhD" degreeType="PhD" />
                    <ProgramCard title="Environmental Studies PhD" degreeType="PhD" />
                    
                  
                  </>
          )}
        </div>
        
      </div>
      <div className="absolute left-0 mb-2 h-40 w-16  rounded-e-3xl"
       style={{ backgroundColor: '#323232' }}
      ></div>
      {/*faculity section*/}
          {/*faculity section*/}
          <div className=' '
      style={{ backgroundColor: '#323232' }}
      >
      <div className='  text-white flex flex-row mt-10 '>
        <div className='mt-10 ml-28'>FACULITY</div>
         <h1 className="text-2xl ml-52 mt-10 font-bold">
          OUR SKILLED  FACULITY<br />
          HELPS STUDENTS IN<br />
          MANY DISCIPLINES 
        </h1>
        
        </div>
        <div className='flex    mt-5 flex-row'>
          <div className='container  rounded-2xl  w-6/12 h-64'>
          <img src={fuculity1} alt="Administrator" className="rounded-lg w-full ml-12 h-80 object-cover" /></div>


<div className='container bg-red-700 mr-52 rounded-2xl w-4/12 h-80'>
         
       <div className='text-white text-xs mt-3'>
        <div className='text-center  rounded-3xl bg-white text-black border border-black w-20 h-10 '>
          <div className='mt-3'>/Bachelor</div></div></div>
       
      
        <h3 className="text-xl font-bold text-white">Faculity of constraction and Management</h3>
        
        <p className="text-white mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="w-12 mt-8 h-12 border border-white  text-white rounded-full flex items-center justify-center hover:bg-red-800 cursor-pointer">
  <button
    onClick={""}
    className="text-white"
  >
    <FaArrowRight />
  </button>
  </div>



          </div>
          
        </div>
        <div className='flex  mt-5 flex-row'>
        <div className='container ml-24 bg-red-700 rounded-2xl w-4/12 h-80'>
         
       <div className='text-white text-xs mt-3'>
        <div className='text-center  rounded-3xl bg-white text-black border border-black w-20 h-10 '>
          <div className='mt-3'>/Bachelor</div></div></div>
       
      
        <h3 className="text-xl font-bold text-white">Faculity of constraction and Management</h3>
        
        <p className="text-white mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="w-12 mt-8 h-12 border border-white  text-white rounded-full flex items-center justify-center hover:bg-red-800 cursor-pointer">
  <button
    onClick={""}
    className="text-white"
  >
    <FaArrowRight />
  </button>
  </div>


</div>
          <div className='container mr-44  rounded-2xl w-6/12 h-64'>
          <img src={fucality2} alt="Administrator" className="rounded-lg w-full h-80 object-cover" />
          </div>
          
          
        </div>
        <div className='flex mt-10 justify-center'>
        <button className="mt-10 lg:mt-0 lg:ml-4 hover:bg-yellow-500 px-6 py-3 border border-white text-white mb-5 rounded-full">
            See All Programs
          </button>
          </div>
        </div>
        {/*this administrator page*/}
        <section className="py-16  text-center bg-white mt-10">
        <div className="t flex w-full  gap-20 flex-row ml-10  text-gray-800">
          <h2 className='ml-20 text-3xl '>ADMINISTRATION</h2>
          <h2 className='text-blue-950 font-bold text-4xl'>OUR ADMINISTRATION</h2>
          <div className="flex justify-end  ml-96 space-x-4 mt-6">
            <button onClick={handlePrevAdmin} className="border hover:bg-yellow-500 text-lg text-center h border-black p-2 w-10 h-10 rounded-full text-black">
              <FaArrowLeft />
            </button>
            <button onClick={handleNextAdmin} className="border hover:bg-yellow-500  text-lg w-10 h-10 border-black p-2  rounded-full text-black">
              <FaArrowRight />
            </button>
          </div>
          </div>




         
        <div className="flex justify-center mt-10">
          <div className=" bg-white w-full p-8 flex flex-row gap-40  rounded-lg  text-left">
            <div className="relative">
              <img src={administrator} alt="Administrator" className="rounded-lg ml-20 w-full h-80 object-cover" />
             
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-blue-950">{administrators[currentAdminIndex].name}</h3>
              <span className="text-sm  text-white py-1 px-2 rounded-full"
              style={{ backgroundColor: '#AE0606' }}
              >{administrators[currentAdminIndex].position}</span>
              <p className="text-gray-600 mt-4">{administrators[currentAdminIndex].description}</p>
              <div className="flex items-center mt-4 space-x-4 text-gray-700">
                <FaPhoneAlt />
                <span>{administrators[currentAdminIndex].phone}</span>
              </div>
              <div className="flex items-center mt-2 space-x-4 text-gray-700">
                <FaEnvelope />
                <span>{administrators[currentAdminIndex].email}</span>
              </div>
            </div>
           
          </div>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
              {administrators.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentAdminIndex(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${currentAdminIndex === index ? 'bg-black' : 'bg-gray-400'}`}
                ></div>
              ))}
            </div>
      </section>
        {/* Section 3: Call to Action */}
        <section className=" text-white  bg-gray-50 py-16"
       
      >
        <div className="container rounded-3xl mx-auto  flex h-80 flex-col md:flex-row items-center"
        
        style={{ backgroundColor: '#AE0606' }}
        >
          <div className="flex-1 ">
            <div className="text-7xl ml-10 flex flex-row  font-bold"><p>Looking</p><p className='ml-11'>For</p> </div>
            <h3 className="text-7xl ml-10  font-bold">Better </h3>
            <div className='flex flex-row'>
            <h3 className="text-7xl ml-10  font-bold"> Future?</h3>
              
              <div className="relative  inline-block mt-4 mr-96">
              <span className="absolute inset-0 transform -rotate-12">
                <button className=" text-red-700 bg-gray-50 rounded-full px-8 py-8 font-semibold"

                >
                  Contact Us
                </button>
              </span>
            </div></div>
           
           
          </div>
          
          <div className="flex-1 mb-16 mt-0 md:mt-0 ml-96">
            <img src={ggraduated} alt="graduated student" className="w-64 h-96 object-cover mb-0 rounded-lg" />
          </div>
        </div>
      </section>

{/**video section */}
<section className=" text-white pt-16  "
style={{backgroundColor:'#323232'}}
>
<div className="flex items-start ml-28 mt-10 ">
  {/* Left Text */}
  <div className="text-xl ">
    CAMPUS LIFE
  </div>

  {/* Right Text */}
  <div className="ml-32 ">
    <h1 className="text-5xl mb-5 font-bold">
      UNIVERSITY IS THE <br />
      BEST TIME OF YOUR <br ></br>LIFE.
    </h1>
    <p className='mb-5 '>lorem ipsum sit ame orem ipsum sit ame orem ipsum sit ame lorem ipsum sit ame orem ipsum sit ame orem ipsum sit ame</p>
  </div>
</div>


  <div className="relative w-full h-full  mx-auto">
    <img 
      src={vidimg} 
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
{/* this is the testimonials section */}
<section className="bg-gray-100 flex flex-row  gap-40 ">
  <div className="text-left mb-10">
    <h2 className="text-lg ml-20 mt-10 font-semibold">TESTIMONIALS</h2>
    <h3 className="text-4xl font-bold ml-28 text-red-700">STUDENTS </h3>
    <div className='container ml-28 w-52 h-10 bg-red-800 '><h3 className='text-white text-3xl'>FEEDBACKS</h3></div>
    <p className="text-gray-600 ml-28 mt-4 max-w-md">
      Lorem ipsum dolor sit amet consectetur. Situs convallis aliquam dignissim in vulputate et. Mauris lacus viverra orci malesuada pellentesque. 
      
      A diam massa bibendum in et. Dignissim aliquam nisl.
    </p>
  </div>
  <div className='scrollbar-hide' style={{ overflow: 'auto', maxHeight: '500px', maxWidth: '100%' }}>
    <div className="grid  grid-cols-1 md:grid-cols-2 gap-10">
      
      <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: '#AE0606' }}>
        <p className="text-white mb-4">
          Lorem ipsum dolor sit amet consectetur. Donec venenatis nec ac risus 
          mauris sit. Aliquet egestas sed arcu risus etiam rhoncus sed dui. Nunc 
          ornare facilisi varius volutpat.
        </p>
        <div className="flex items-center mt-4">
          <img 
            src={vidimg}  
            alt="Student Name" 
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="font-semibold text-red-700">Student Name</p>
            <p className="text-gray-500 text-sm">Student Major</p>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: '#AE0606' }}>
        <p className="text-white mb-4">
          Lorem ipsum dolor sit amet consectetur. Donec venenatis nec ac risus 
          mauris sit. Aliquet egestas sed arcu risus etiam rhoncus sed dui. Nunc 
          ornare facilisi varius volutpat.
        </p>
        <div className="flex items-center mt-4">
          <img 
            src={vidimg}  
            alt="Student Name" 
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="font-semibold text-red-700">Student Name</p>
            <p className="text-gray-500 text-sm">Student Major</p>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: '#AE0606' }}>
        <p className="text-white mb-4">
          Lorem ipsum dolor sit amet consectetur. Donec venenatis nec ac risus 
          mauris sit. Aliquet egestas sed arcu risus etiam rhoncus sed dui. Nunc 
          ornare facilisi varius volutpat.
        </p>
        <div className="flex items-center mt-4">
          <img 
            src={vidimg} 
            alt="Student Name" 
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="font-semibold text-red-700">Student Name</p>
            <p className="text-gray-500 text-sm">Student Major</p>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg shadow-lg text-white" style={{ backgroundColor: '#AE0606' }}>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur. Donec venenatis nec ac risus 
          mauris sit. Aliquet egestas sed arcu risus etiam rhoncus sed dui. Nunc 
          ornare facilisi varius volutpat.
        </p>
        <div className="flex items-center mt-4">
          <img 
            src={vidimg}  
            alt="Student Name" 
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="font-semibold">Student Name</p>
            <p className="text-gray-300 text-sm">Student Major</p>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg shadow-lg text-white" style={{ backgroundColor: '#AE0606' }}>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur. Donec venenatis nec ac risus 
          mauris sit. Aliquet egestas sed arcu risus etiam rhoncus sed dui. Nunc 
          ornare facilisi varius volutpat.
        </p>
        <div className="flex items-center mt-4">
          <img 
            src={vidimg} 
            alt="Student Name" 
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="font-semibold">Student Name</p>
            <p className="text-gray-300 text-sm">Student Major</p>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg shadow-lg text-white" style={{ backgroundColor: '#AE0606' }}>
        <p className="mb-4">  
          Lorem ipsum dolor sit amet consectetur. Donec venenatis nec ac risus 
          mauris sit. Aliquet egestas sed arcu risus etiam rhoncus sed dui. Nunc 
          ornare facilisi varius volutpat.
        </p>
        <div className="flex items-center mt-4">
          <img 
            src={vidimg} 
            alt="Student Name" 
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="font-semibold">Student Name</p>
            <p className="text-gray-300 text-sm">Student Major</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>



    </div>
  );
}

function ProgramCard1({ title, degreeType }) {
  const handleClick = () => {
    console.log(`Navigating to details for: ${title}`);
  };


  return (
    <div className="p-6 bg-gray-200 text-black hover:bg-blue-950  hover:text-white shadow-lg rounded-lg text-left">
      <h3 className="text-lg font-semibold">{title}</h3>
      <button className="">{degreeType}</button>
      <span className="flex flex-row gap-72 mt-4 ">
        <button className="border w-36 h-10 rounded-full border-black">/{degreeType}</button>
        <div className='rounded-full w-10   h-10 border border-black'>
        <a href="#" onClick={handleClick} className="flex items-center">
          <FaArrowRight className="inline-block mt-3 ml-3 mr-1" />
        </a>

        </div>
      </span>
    </div>
  );
}

export default Home;
