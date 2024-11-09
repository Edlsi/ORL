import React from 'react';
 import undergra2 from '@/assets/undergra2.png';
 import undergra1 from '@/assets/undergra1.png';
 import over1 from '@/assets/over1.png';
 import over2 from '@/assets/over2.png';

 import { FaFilter,FaArrowRight } from 'react-icons/fa';


const Undergraduate = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="text-white p-20 relative">
      <div className="flex flex-row">
      <div className="flex flex-row">
  <div className="ml-10 space-y-4 max-w-xs">
    <p className="text-red-800 font-bold uppercase text-4xl mt-20 text-left">
      UNDERGRADUATE PROGRAMS
    </p>
    <p className="text-black text-left">
      Lorem ipsum dolor sit amet consectetur. Quis arcu semper et egestas neque vulputate. Faucibus ac nibh neque ac sit. At odio fusce lectus facilisis tincidunt leo egestas sagittis commodo. Ac mi nulla lectus non blandit morbi habitant.
    </p>
    <button className="mt-6 bg-red-800 w-[150px] h-[150px] text-white font-bold rounded-full shadow-lg">
  Apply Now
</button>
  </div>
</div>

</div>


  {/* Circle with the image inside */}
  <div className="bg-gray-800 h-[315px] w-[180px] rounded-bl-[200px] rounded-tl-[200px] absolute top-0 right-0 overflow-hidden">
    
    </div>
    

  {/* Circle positioned at the bottom-right of the section */}
  <div className="bg-red-800 mt-2.5 mb-2.5 h-[300px] w-[600px] rounded-tl-[900px] rounded-tr-[900px] absolute bottom-0 right-0 mr-10">
  
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-opacity-30  border border-white rounded-md w-[400px] h-[200px] flex flex-col items-center justify-center shadow-lg">
  <ul className="text-white font-semibold list-disc space-y-2">
 
  <li className="font-bold">Nahom Debebe</li>
    <li>Fresh Student at OPC</li>
    <li></li>
    <li></li>
  </ul>
</div>

</div>
</section>



      {/* Featured Person Section */}
      <section className="flex flex-col md:flex-row items-center bg-gray-800 py-16 px-0 relative min-h-[400px] w-full">
      <div className="text-center pl-28 md:w-1/2 z-10">
  <h2 className="text-6xl font-bold text-white ml-2 uppercase text-left ">Solomon Adane</h2>

  <div className="bg-red-500 text-white py-1 rounded-full mt-2  w-20">
    <span>Dean</span>
  </div>

  <p className="mt-6 text-gray-300 text-left  break-words">
    Lorem ipsum dolor sit amet consectetur. Mauris integer velit convallis euismod elit consequat libero. Quis adipiscing facilisis nunc consequat nunc mauris sagittis eu. Cursus dictum at turpis malesuada sit quis.
  </p>
</div>


<div className="bg-red-800 mt-2.5 mb-2.5 h-[300px] w-[600px] rounded-tl-[900px] rounded-tr-[900px] absolute bottom-0 right-0 flex justify-center items-end">
  <img 
    src={undergra2} 
    alt="Solomon Adane" 
    className="w-64 h-96 object-cover  bottom-0"
  />
</div>


</section>



<section className='pl-28 bg-white'>

<h2 className="text-lg  mt-10 text-red-800"> PROGRAMS</h2>
<div className='flex flex-row'>
  <div className='ml-8'>
    <h2 className="text-4xl mt-8 font-bold text-black">ACADEMIC PROGRAMS</h2>
    <p className="text-gray-500 text-xl mt-4 ml-1 break-words">
      Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Bibendum sagittis
      Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Bibendum sagittis
      Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Bibendum sagittis
      Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Bibendum sagittis
    </p>
  </div>
</div>


</section>



{/**filter section */}
<section className="bg-white p-10">
  <div className="max-w-2xl mx-auto mb-6">
    <div className="flex items-center border border-gray-300 rounded-lg">
      <input
        type="text"
        placeholder="Search"
        className="w-full p-3 rounded-lg border-none outline-none mr-2"
      />
      <button className="bg-white">
        <FaFilter className="text-gray-600 bg-white" />
      </button>
    </div>
  </div>

  <div className="overflow-x-auto scrollbar-hide">
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full ml-20 lg:grid-cols-3 gap-6 min-w-max">
      {[1, 2, 3, 4, 5, 6,7,8].map((program) => (
        <div key={program} className=" rounded-lg ">
          <div className="p-6 bg-gray-200 text-black hover:bg-blue-950  hover:text-white shadow-lg rounded-lg text-left">
      <h3 className="text-lg font-semibold">{"title"}</h3>
      <button className="">{"degreeType"}</button>
      <span className="flex flex-row gap-72 mt-4 ">
        <button className="border w-36 h-10 rounded-full border-black">/{"degreeType"}</button>
        <div className='rounded-full w-10   h-10 border border-black'>
        <a href="#" onClick={"handleClick"} className="flex items-center">
          <FaArrowRight className="inline-block mt-3 ml-3 mr-1" />
        </a>

        </div>
      </span>
    </div>
    </div>
      ))}
    </div>
  </div>

  <div className="text-center mt-6">
    <button className="bg-[#820404] text-white px-6 py-3 rounded-3xl">See All Programs</button>
  </div>
</section>

  






      {/* Campus Section */}
      <section className="bg-[#323232] text-white py-12 px-6 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Section - Text */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            UNDERGRADUATES <br />
            GROUPS & <span className="text-red-500">CAMPUS</span>
          </h1>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet consectetur. Diam enim vulputate neque a netus amet purus. Massa fames elit eu arcu ante id. 
            Nunc suspendisse malesuada nullam facilisi hac erat orci lectus. Erat quis faucibus egestas quis amet viverra sed pellentesque.
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg">
            Contact Us
          </button>
        </div>

        {/* Right Section - Images */}
        <div className="relative flex flex-col gap-10">
          <div className="w-full">
            <img
              src={over1}
              alt="Students working"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="absolute bottom-0 mt-56 left-10 lg:left-16 w-3/4">
            <img
              src={over2}
              alt="Students smiling"
              className="rounded-lg mt-36 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

      {/* Steps to Apply Section */}
     
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
};

export default Undergraduate;