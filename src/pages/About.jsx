import React from 'react';
import aboutImage from '@/assets/about.jpg'; 
import administrator from '@/assets/administrator.png';
import solomon from '@/assets/solomon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import icon1 from '@/assets/icon1.png';
import icon2 from '@/assets/icon2.png';
import icon3 from '@/assets/icon3.png';
import icon4 from '@/assets/icon4.png';
import p2 from '@/assets/p2.png';
import b1 from '@/assets/b1.png';
import funny1 from '@/assets/funny1.png';
import funny2 from '@/assets/funny2.png';
import funny3 from '@/assets/funny3.png';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
const About = () => {
  const deans = [
    {
      id: 1,
      name: "Mulusew Bilara Yizengaw",
      title: "Dean of College of Natural and Computational Science",
      imgSrc: b1, 
    },
    {
      id: 2,
      name: "Ibrahim Hasan Yusuf",
      title: "Dean of College of Dry Land Agriculture",
      imgSrc: p2
    },
    {
      id: 3,
      name: "Mohamed Abdirizak Haji",
      title: "Dean of Business and Economics",
      imgSrc: b1,
    },
    {
      id: 4,
      name: "Ibrahim Ayanle",
      title: "Dean of Computer Science",
      imgSrc: p2
    },
    {
      id: 1,
      name: "Mulusew Bilara Yizengaw",
      title: "Dean of College of Natural and Computational Science",
      imgSrc: b1, 
    },
    {
      id: 1,
      name: "Mulusew Bilara Yizengaw",
      title: "Dean of College of Natural and Computational Science",
      imgSrc: b1, 
    },
  ];
  const handleNextdean = () => {
    setCurrentdeanIndex((prevIndex) => (prevIndex + 1) % deans.length);
  };

  const handlePrevdean = () => {
    setCurrentdeanIndex((prevIndex) =>
      prevIndex === 0 ? deans.length - 1 : prevIndex - 1
    );
  };
  
  
  return (
    <div>
      {/* Background Section */}
      <div
        className="flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutImage})` }} 
      >
        <div className=" rounded-lg  text-7xl font-bold text-white text-center">
          <p>Lorem Ipsum dolor sit amet,</p>
          <p className="mt-4 ml-32">eiusmod tempor incididunt ut et</p>
        </div>
      </div>

      {/* New Section with Two Containers */}
      <div className="flex justify-center h-96 items-center  ">
        <div className="flex    w-full">
          {/* Black Container */}
          
        <div className="flex-1  text-black h-96 p-8 rounded-lg ">
        <div className='flex items-center ml-40 -mt-8 justify-center w-96 h-96 rounded-full border-8 '
        style={{ backgroundColor: '#323232' }}
        >
  <div className="flex items-center justify-center w-60 h-60 bg-red-600 rounded-full border-8 border-white">
    <span className="text-white text-5xl font-bold">Logo</span>
  </div>
</div>

          </div>

          {/* Brown Container */}
          <div className="flex-1 bg-brown-700  text-white  shadow-lg"  style={{ backgroundColor: '#323232' }}>
          <h2 className="text-3xl mt-7 ml-9 font-bold mb-4">OUR HISTORY</h2>
          <p className="text-gray-300 ml-9">
            Lorem ipsum dolor sit amet consectetur. At enim tempor sit accumsan est.
            Consequat hendrerit adipiscing laoreet sed dapibus. Tincidunt massa risus nunc sit.
            Pellentesque rhoncus justo fusce aliquet malesuada.
            Lorem ipsum dolor sit amet consectetur. At enim tempor sit accumsan est.
            Consequat hendrerit adipiscing laoreet sed dapibus. Tincidunt massa risus nunc sit.
            Pellentesque rhoncus justo fusce aliquet malesuada.
            Lorem ipsum dolor sit amet consectetur. At enim tempor sit accumsan est.
            Consequat hendrerit adipiscing laoreet sed dapibus. Tincidunt massa risus nunc sit.
            Pellentesque rhoncus justo fusce aliquet malesuada.
            Lorem ipsum dolor sit amet consectetur. At enim tempor sit accumsan est.
            Consequat hendrerit adipiscing laoreet sed dapibus. Tincidunt massa risus nunc sit.
            Pellentesque rhoncus justo fusce aliquet malesuada.
          </p>
          <button
  className="mt-6 px-10 ml-9 py-2 text-white rounded-full font-semibold"
  style={{ backgroundColor: '#AE0606' }}
>
  Contact Us
</button>

        </div>
          </div>
        </div>
      {/* Vision, Mission, Teaching, Values Section */}
      <div className=" h-96 w-full bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {/* Vision */}
          <div className="flex mt-10 items-start space-x-10">
            <div className="text-red-600  text-3xl"><img src={icon1} alt="Administrator" className="w-20 h-20  object-cover" /></div>
            <div>
              <h3 className="text-xl font-semibold">Vision</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Semper lorem non faucibus in sapien leo lobortis aenean nunc.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="flex mt-10  items-start space-x-10">
          <div className="text-red-600 text-3xl"><img src={icon2} alt="Administrator" className=" w-28 h-20  object-cover" /></div>
            <div>
              <h3 className="text-xl font-semibold">Teaching</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Semper lorem non faucibus in sapien leo lobortis aenean nunc.
              </p>
            </div>
          </div>

          {/* Teaching */}
          <div className="flex mt-10  items-start space-x-10">
          <div className="text-red-600 text-3xl"><img src={icon3} alt="Administrator" className="w-28 h-32  object-cover" /></div>
            <div>
              <h3 className="text-xl font-semibold">Mission</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Semper lorem non faucibus in sapien leo lobortis aenean nunc.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="flex items-start space-x-4">
          <div className="text-red-600 text-3xl"><img src={icon4} alt="Administrator" className="w-24 h-20  object-cover" /></div>
            <div>
              <h3 className="text-xl font-semibold">Values</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Semper lorem non faucibus in sapien leo lobortis aenean nunc.
              </p>
            </div>
          </div>
        </div>
      </div>
        {/*this administrator page*/}
        <section className="py-16 px-32 text-center bg-white mt-10">
        <div className="text-3xl flex  gap-10 flex-row font-bold text-gray-800">
          <h2 className='text-red-800'>OUR LEADERSHIP</h2>
         </div>
        <div className="flex justify-center mt-10">
          <div className=" bg-white w-full p-8 flex flex-row gap-10  rounded-lg  text-left">
            <div className="relative">
              <img src={administrator} alt="Administrator" className="rounded-lg w-full h-80 object-cover" />
              
            </div>
            <div className='flex ml-32 flex-col '>
<h1 className='text-3xl'>filimon ADANE</h1>
<div className='bg-red-700 pl-3 mt-3 w-32 h-10 text-2xl text-white'>president</div>
<h3 className='mt-3 '>Lorem ipsum dolor sit amet consectetur. Cursus eget sed mauris ut egestas turpis. Ac purus libero consectetur dui...</h3>
<div className="space-y-4">
      <h3 className="flex items-center text-lg text-gray-700">
        <FontAwesomeIcon icon={faPhone} className="mr-2 text-red-600" />
        +251900000011
      </h3>
      <h3 className="flex items-center text-lg text-gray-700">
        <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-red-600" />
        Example@gmail.com
      </h3>
    </div>
            </div>
            
          </div>
        </div>
      </section>
        {/*this vp administrator page*/}
        <section className=" text-center w-full bg-[#323232] ">
       
        <div className="flex  ">
          <div className="   flex flex-row gap-96 mt-10 rounded-lg  text-left">
           
            <div className='flex flex-col '>
<div className='ml-16 text-white font-bold text-7xl'>solomon adane</div>

<div className='bg-red-800 ml-16 mt-4 text-white  text-xl  font-bold pt-2 rounded-2xl text-center w-60 h-10'>VP of Administration</div>
<h3 className='ml-16 text-white mt-4'>"Lorem ipsum dolor sit amet consectetur. Cursus eget sed mauris ut egestas turpis. Ac purus libero consec..</h3>
<h3 className='ml-16 text-white'>Lorem ipsum dolor sit amet consectetur. Cursus eget sed mauris ut egestas turpis. Ac purus libero consectetur dui...</h3>
<h3 className='ml-16 text-white'>Lorem ipsum dolor sit amet consectetur. Cursus eget sed mauris ut egestas turpis. Ac purus libero consect"</h3>           </div>
            <div className="relative bg-[#AE0606] rounded-full ">
              <img src={solomon} alt="Administrator" className="rounded-lg w-full h-96 object-cover" />
              
            </div>
            
          </div>
        </div>
      </section>
      {/**meet ours.. */}
      <div className="bg-white mt-10 mb-20">
      <h2 className="text-3xl font-bold ml-20 mb-6">Meet Our Deans</h2>
      <div className="flex justify-end mb-6 mr-20 space-x-4 mt-6">
            <button onClick={handlePrevdean} className="border hover:bg-yellow-500 text-lg text-center h border-black p-2 w-10 h-10 rounded-full text-black">
              <FaArrowLeft />
            </button>
            <button onClick={handleNextdean} className="border hover:bg-yellow-500  text-lg w-10 h-10 border-black p-2  rounded-full text-black">
              <FaArrowRight />
            </button>
          </div>
      <div className="flex overflow-x-scroll ml-16 space-x-20 scrollbar-hide">
        {deans.map((dean) => (
          <div
          key={dean.id}
          className="flex-shrink-0 w-72 h-96 rounded-t-full rounded-b-full shadow-lg bg-[#DFDFDF] p-0 flex flex-col items-center"
        >
          <img
            src={dean.imgSrc}
            alt={dean.name}
            className="rounded-t-full w-full h-48 object-cover mb-4"
          />
          <h3 className="text-xl font-bold  text-red-800 text-center">{dean.name}</h3>
          <p className="text-sm text-center text-black">{dean.title}</p>
        </div>
        
        ))}
      </div>
    </div>
    {/**funny */}
    <div className="  flex  items-center bg-white">
  <div className="w-1/4">
    <img 
      src={funny1} 
      alt="Dean 1" 
      className="w-96 h-14 object-cover rounded-lg" 
    />
  </div>
  <div className="w-1/5">
    <img 
      src={funny2}
      alt="Dean 2" 
      className="w-full h-14 object-cover rounded-lg" 
    />
  </div>
  <div className="w-1/5">
    <img 
      src={funny3}
      alt="Dean 3" 
      className="w-full h-14 object-cover rounded-lg" 
    />
  </div>
  <div className="w-1/5">
    <img 
      src={funny1}
      alt="Dean 4" 
      className="w-full h-14 object-cover rounded-lg" 
    />
  </div>
</div>

    </div>
  );
};

export default About;