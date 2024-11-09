import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-24 mb-[1px] p-10 lg:p-20 bg-white">
      {/* Contact Information */}
      <div className="absolute top-40 right-0 h-44 w-16  rounded-s-3xl"
       style={{ backgroundColor: '#AE0606' }}
      ></div>
      <div className="absolute left-0 top-[45rem] h-28 w-16  rounded-e-3xl"
       style={{ backgroundColor: '#323232' }}
      ></div>
      <div className="flex-1">
        <p className="text-red-700  text-2xl font-bold mb-2">Get In Touch /</p>
        <h1 className="text-5xl font-bold mb-4">
          Lorem Ipsum Dolor Sit Amet Consectetur.NOT
        </h1>
        <span className=" text-white px-2 font-bold py-1 text-3xl rounded ml-2 inline-block"
         style={{ backgroundColor: '#AE0606' }}
        >
          Donec Donec
        </span>

        <h1 className="text-gray-500  mt-10 mb-8">
          Lorem Ipsum Dolor Sit <br></br> Amet Consectetur. Rhoncus Gravida Consequat Feugiat Consectetur. Adipisicing Arcu Sit Auctor Hac Ornare Tempus.
        </h1>

        <div className="flex justify-between">
          <div className="mb-4">
            <p className="font-bold">Call Center</p>
            <p className='text-gray-500'>+25190001100</p>
            <p className='text-gray-500'>+25190001100</p>
          </div>
          <div className="mb-4  -mr-4 flex flex-col"> {/* Align vertically */}
            <p className="font-bold">Our Location</p>
            <p className='text-gray-500'>Cologne District Court HRB 101987</p>
            <p className='text-gray-500'>Subbelrather Strasse 15a 50823 Cologne, Germany</p>
          </div>
        </div>

        <div className="flex justify-between mt-12 mb-2">
          <div>
            <p className="font-bold">Email</p>
            <p className="mb-1 text-gray-500">Contact@OPC.Edu.Et</p>
            <p className='text-gray-500'>Hello@OPC.Edu.Et</p>
          </div>
          <div className="flex flex-col items-start"> {/* Align vertically */}
          <p className='font-bold'>social media</p>
            
           
            <div className="flex mr-64 space-x-3 mt-1">
              <a href="#" className="text-red-700 hover:text-red-600">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="text-red-700 hover:text-red-600">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="text-red-700 hover:text-red-600">
                <FaInstagram size={18} />
              </a>
              
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex-1 lg:ml-10 mt-10 lg:mt-0">
        <div className="bg-gray-200 p-8 rounded-2xl shadow-lg">
          <p className="text-red-700 font-bold text-sm mb-2">Get In Touch</p>
          <p className="text-gray-500 mb-8">
            Lorem Ipsum Dolor Sit Amet Consectetur. Rhoncus Gravida Consequat Feugiat Consectetur.
          </p>
          <form className="space-y-4">
            <div>
              <input type="text" placeholder="Full Name" className="w-full p-3 bg-gray-200 border-0 outline-none" />
              <div className="h-1 bg-gray-300 mt-1"></div> {/* Red line below */}
            </div>
            <div>
              <input type="email" placeholder="Email" className="w-full p-3 bg-gray-200 border-0 outline-none" />
              <div className="h-1 bg-gray-300 mt-1"></div> {/* Red line below */}
            </div>
            <div>
              <input type="text" placeholder="Subject" className="w-full p-3 bg-gray-200 border-0 outline-none" />
              <div className="h-1 bg-gray-300 mt-1"></div> {/* Red line below */}
            </div>
            <div>
              <textarea placeholder="Message" className="w-full p-3 bg-gray-200 border-0 outline-none "></textarea>
              <div className="h-1 bg-gray-300 mt-1"></div> {/* Red line below */}
            </div>
            <button type="submit" className="w-36 h-12 rounded-full bg-red-700 text-white  py-3  mt-4">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
