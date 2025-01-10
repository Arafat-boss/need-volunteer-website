import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import img from "../assets/Img.jpg";
import img2 from "../assets/Img2.jpg";

const NonprofitStats = () => {
  return (
    <div className="bg-gray-100 py-10 px-5 mt-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-5">
        {/* Text Section */}
        <div className="space-y-5">
          <h1 className="text-6xl font-bold text-orange-500">151.1K</h1>
          <p className="text-2xl font-medium">
            nonprofits rely on VolunteerMatch
          </p>
          <div className="border-l-4 border-orange-500 pl-4">
            <FaQuoteLeft className="text-orange-500" size={24} />
            <p className="text-lg italic">
              "It's a portal for volunteers to connect with the nonprofits, and
              in a way, it's its own search engine specifically for volunteer
              opportunities."
            </p>
            <FaQuoteRight className="text-orange-500" size={24} />
            <p className="mt-2 text-sm font-medium text-gray-500">
              DANIEL MARLAY, MAKE-A-WISH GREATER BAY AREA
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div>
          <img src={img} alt="Child smiling" className="rounded-lg shadow-lg" />
        </div>
      </div>
      {/* ---------------------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Image Section */}
        <div>
          <img
            src={img2}
            alt="Child smiling"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-5">
          <h1 className="text-6xl font-bold text-orange-500">19.2M </h1>
          <p className="text-2xl font-medium">volunteers connected</p>
          <div className="border-l-4 border-orange-500 pl-4">
            <FaQuoteLeft className="text-orange-500" size={24} />
            <p className="text-lg italic">
              VolunteerMatch is the most effective way to recruit highly
              qualified volunteers for your nonprofit. We match you with people
              who are passionate about and committed to your cause, and who can
              help when and where you need them."
            </p>
            <FaQuoteRight className="text-orange-500" size={24} />
            <p className="mt-2 text-sm font-medium text-gray-500">
              DANIEL MARLAY, MAKE-A-WISH GREATER BAY AREA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonprofitStats;
