import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom'; 
import graduation from '@/assets/graduation.png';
import news from '@/assets/news.png';
import ggraduated from '@/assets/ggirl.png';

function News() {
  
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, 
        behavior: 'smooth',
      });
    }
  };

  
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      {/* Section 1: Hero Section */}
      <section className="bg-white py-32">
        <div className="container flex flex-col md:flex-row items-center mx-auto px-4">
          <div className="text-center md:text-left md:w-1/2 space-y-4">
            <h2 className="text-7xl font-bold text-red-700">LOREM IPSUM DOL OR SIT AMET</h2>
            <p className="mt-4 text-gray-700 max-w-md mx-auto md:mx-0">
              Lorem ipsum dolor sit amet consectetur. Bibendum sagittis et egestas ut.
              Risus morbi tincidunt sapien dignissim. Nulla est integer duis elementum ut
              pharetra.
              Risus morbi tincidunt sapien dignissim. Nulla est integer duis elementum ut
              pharetra.
            </p>
            <button 
             onClick={() => navigate('/read')}
            className="mt-6 px-6 py-2  text-white rounded-full font-semibold"
            style={{ backgroundColor: '#AE0606' }}
            >
              Read More
            </button>
          </div>
          <div className="mt-10 md:mt-0 md:ml-8 flex justify-center md:justify-end md:w-1/2">
            <img
              src={graduation}
              alt="boy"
              className="w-60 h-96 rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2: News & Articles */}
     
     <section className="text-white  py-16"
      style={{ backgroundColor: '#323232' }}
     >
        <div className="w-full pl-4"> {/* Updated container class to w-full */}
          <h3 className="text-3xl ml-28 font-semibold">LATEST NEWS & ARTICLES</h3>
          <div className="flex justify-end mr-32 space-x-4 mt-4">
            <button onClick={scrollLeft} className="border border-white p-4 rounded-full text-white">
              <FaArrowLeft />
            </button>
            <button onClick={scrollRight} className="border border-white p-4 mr-6 rounded-full text-white">
              <FaArrowRight />
            </button>
          </div>
          <div
            ref={scrollRef}
            className="mt-10   ml-28 flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth"
            style={{ backgroundColor: '#323232' }}
          >
            {[1, 2, 3, 4, 5,6].map((item) => (
              <div key={item} className="min-w-[300px] bg-black  rounded-3xl overflow-hidden shadow-lg"
              
              >
                <img src={news} alt="news item" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">Lorem ipsum dolor sit amet</h4>
                  <p className="mt-2 text-gray-400">
                    Lorem ipsum dolor sit amet consectetur. Leo volutpat sem risus
                    aliquet dictum mi.
                  </p>
                  <button
                    onClick={() => navigate('/read')}
                    className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-full"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Call to Action */}
      <section className="bg-slate-100 text-white py-16"
       
      >
        <div className="container rounded-3xl mx-auto  flex h-80 flex-col md:flex-row items-center"
        
        style={{ backgroundColor: '#AE0606' }}
        >
          <div className="flex-1 ">
            <div className="text-7xl ml-10 flex flex-row  font-bold"><p>Looking</p><p className='ml-11'>For</p> </div>
            <h3 className="text-7xl ml-10  font-bold">Better </h3>
            <div className='flex flex-row'>
            <h3 className="text-7xl ml-10  font-bold"> Future?</h3>
              
              <div className="relative inline-block mt-10 mr-96">
              <span className="absolute inset-0 transform -rotate-12">
                <button className=" text-red-700 rounded-full bg-slate-100 px-4 py-4 font-semibold"
                 
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
    </div>
  );
}

export default News;
