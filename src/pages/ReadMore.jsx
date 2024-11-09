// ReadMore.jsx
import React, { useRef } from 'react'; // Import useRef for scrolling
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FaArrowLeft, FaArrowRight, FaArrowLeft as FaArrowBack } from 'react-icons/fa'; // Import icons
import graduation from '@/assets/graduation.png'; // Ensure the path is correct
import news from '@/assets/news.png'; // Assuming you have a news image

function ReadMore() {
  const scrollRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigate function

  // Scroll left function
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // Adjust based on the desired scroll distance
        behavior: 'smooth',
      });
    }
  };

  // Scroll right function
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300, // Adjust based on the desired scroll distance
        behavior: 'smooth',
      });
    }
  };

  // Navigate back to the news page
  const handleBackClick = () => {
    navigate('/news'); // Replace '/news' with the correct route to your news page
  };

  return (
    <div className="w-full "> {/* Reduced padding from py-32 to py-16 */}
      {/* Back Button Section */}
      <div className="mb-8 ml-32 mt-28 flex items-center space-x-2 bg-gray-300 rounded-full w-28 p-2 cursor-pointer" onClick={handleBackClick}>
        <FaArrowBack className="text-black ml-4" />
        <span className="text-black font-semibold">Back </span>
      </div>

      {/* Curved Image Section */}
      <div
        className="relative ml-32 flex flex-col rounded-3xl  mb-20 "
        style={{
          backgroundImage: `url(${graduation})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px',
          width: '90%',
          maxWidth: 'none',
          margin: '',
        }}
      >
        <h2 className="absolute text-white text-6xl ml-20 font-bold bottom-14">Lorem Ipsum DOM <br />ORSIT AMET</h2>
      </div>

      {/* First Text Section */}
      <div className="mb-8 ml-28 mt-8 px-4">
        <h3 className="text-xl font-bold">Lorem ipsum dolor sit amet</h3>
        <p className="mt-2 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
          dolor id ligula tincidunt lacinia. Nulla nec convallis urna. Sed non
          nisl a nulla cursus dapibus. Integer varius finibus eros, at cursus
          lectus sagittis a. Vivamus auctor turpis eu tortor gravida
          venenatis. Sed ut felis vel augue faucibus laoreet.
        </p>
      </div>

      {/* Second Text Section */}
      <div className="mb-8 ml-28 px-4"> {/* Reduced from mb-20 */}
        <h3 className="text-xl font-bold">Lorem ipsum dolor sit amet</h3>
        <p className="mt-2 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel
          scelerisque nisl. Maecenas tempor, arcu nec convallis porttitor, nisi
          libero consequat nisl, at feugiat magna eros vitae purus. Quisque
          vestibulum, eros id faucibus ultricies, nisi libero tristique nisi,
          sed volutpat dui arcu id erat. Fusce ultricies facilisis lectus vel
          tempor. Integer vitae dui ante. Proin ac neque at erat mollis
          scelerisque. Vivamus tincidunt ante quis mauris gravida, a egestas
          ligula convallis. In egestas tristique velit, at cursus massa
          tristique eget. Aenean blandit euismod leo ac mollis. Proin varius
          felis vitae est tincidunt, a interdum odio tempor. Aenean ut ex id
          justo iaculis volutpat. Donec nec varius quam. Cras eu gravida felis.
          Integer volutpat, erat vitae volutpat consequat, lacus sapien
          suscipit leo, nec viverra magna justo ut erat. Etiam vehicula
          consequat elit, id elementum arcu volutpat a. Sed gravida sem sit
          amet arcu euismod, non scelerisque arcu vehicula. Aenean id purus
          dapibus, dignissim nisl at, laoreet lectus.
        </p>
      </div>

       {/* Section 2: News & Articles */}
     
     
       <section className="text-white bg-black  py-16"
      
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
           
          >
            {[1, 2, 3, 4, 5,6].map((item) => (
              <div key={item} className="min-w-[300px]   rounded-3xl overflow-hidden shadow-lg"
              style={{ backgroundColor: '#323232' }}
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
    </div>
  );
}

export default ReadMore;
