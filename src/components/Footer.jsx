import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <div>
     <footer
  className="text-white py-20"
  style={{ backgroundColor: '#323232' }}
>
        <div className="container mx-auto flex justify-between items-start">
        

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className='text-5xl mb-10'>store</p>
            <a href="/about-us" className='text-3xl mb-10 hover:underline'>facts</a>
            <a href="/contact-us" className='text-3xl mb-10 hover:underline'>history</a>
            <a href="/feedbacks" className='text-3xl mb-10 hover:underline'>mission</a>
            <a href="/feedbacks" className='text-3xl  hover:underline'>management</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className='text-5xl mb-10'>faculty</p>
            <a href="/about-us" className='text-3xl mb-10 hover:underline'>business</a>
            <a href="/contact-us" className='text-3xl mb-10 hover:underline'>engineering</a>
            <a href="/feedbacks" className='text-3xl mb-10 hover:underline'>Law</a>
            <a href="/feedbacks" className='text-3xl  hover:underline'>humanity and science</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className='text-5xl mb-10'>Department</p>
            <a href="/about-us" className='text-3xl mb-10 hover:underline'>business</a>
            <a href="/contact-us" className='text-3xl mb-10 hover:underline'>engineering</a>
            <a href="/feedbacks" className='text-3xl mb-10 hover:underline'>Law</a>
            <a href="/feedbacks" className='text-3xl  hover:underline'>humanity and science</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className='text-5xl mb-10'>Admission</p>
            <a href="/about-us" className='text-3xl mb-10 hover:underline'>under graduate</a>
            <a href="/contact-us" className='text-3xl mb-10 hover:underline'>graduate</a>
            <a href="/feedbacks" className='text-3xl mb-10 hover:underline'>financial aid</a>
            <a href="/feedbacks" className='text-3xl  hover:underline'>PHD</a>
          </div>

          {/* New Links Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '120px' }}>
            <a href="/career" className="border border-gray-500 w-52 h-10 rounded-full text-center text-white mr-6 text-3xl hover:bg-gray-700">CAREER</a>
            <a href="/contact" className="border border-gray-500 w-52 h-10 rounded-full text-center text-white mr-6 text-3xl hover:bg-gray-700">CONTACT</a>
            <a href="/another-link" className="border border-gray-500 w-52 h-10 rounded-full text-center text-white mr-6 text-3xl hover:bg-gray-700">TOP</a>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="h-1 bg-gray-500 ml-5 mr-10 mt-96 mb-5"></div> 
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            <div
              className="flex items-center justify-center w-14 h-14 rounded-full  border border-white text-white font-bold mr-4 ml-10"

              style={{ lineHeight: '32px',  backgroundColor: '#AE0606' }} // Centering text vertically
            >
              LOGO
            </div> 
            <p className=" ml-32 text-sm"> <a href="/copyright" className="text-white hover:underline">Copyright @2022 | Company</a></p>
            <div className="border-l border-gray-500 h-8 mx-14" /> {/* Vertical separator line */}
            <a href="/privacy-policy" className="text-sm hover:underline">All right priserved</a>
            <div className="border-l border-gray-500 h-8 mx-14" /> {/* Vertical separator line */}
            <a href="/privacy-policy" className="text-sm hover:underline">Privacy & Policy</a>
          </div>
         
          <div className="flex space-x-4 mr-5">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaLinkedin size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
