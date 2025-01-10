// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// import slider1 from '../assets/s1.jpg'
// import slider2 from '../assets/s2.jpg'
// import slider3 from '../assets/s3.jpg'
// import slider4 from '../assets/s4.jpg'

// const Slider = () => {
//   return (
//     <div className="h-[500px] w-full">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         loop
//         className="h-full"
//       >
//         <SwiperSlide>
//           <img
//             src={slider1}
//             alt="Slider 1"
//             className="w-full h-full object-cover"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src={slider2}
//             alt="Slider 2"
//             className="w-full h-full object-cover"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src={slider3}
//             alt="Slider 3"
//             className="w-full h-full object-cover"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src={slider4}
//             alt="Slider 4"
//             className="w-full h-full object-cover"
//           />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Slider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import slider1 from "../assets/s1.jpg";
import slider2 from "../assets/s2.jpg";
import slider3 from "../assets/s3.jpg";
import slider4 from "../assets/s4.jpg";

const Slider = () => {
  return (
    <div className="relative h-[600px] w-full">
      {/* Header Section */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white z-10">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Remarkably Effective
        </h1>
        <p className="text-lg text-center mb-6">
          VolunteerMatch transforms volunteer recruiting, making it quick, easy,
          and effective.
        </p>
        <div className="flex items-center bg-white rounded-md shadow-md px-4 py-2">
          <input
            type="text"
            placeholder="Search City or Zip Code"
            className=" border-none outline-none text-gray-700"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md ml-2">Find Opportunities
          </button>
        </div>
      </div>

      {/* Slider Section */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        <SwiperSlide>
          <img
            src={slider1}
            alt="Slider 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider2}
            alt="Slider 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider3}
            alt="Slider 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider4}
            alt="Slider 4"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
