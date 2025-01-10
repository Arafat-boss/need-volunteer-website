import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img from '../assets/about.jpg'

const About = () => {
  return (
    <div className="bg-yellow-400 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Image Section */}
        <div>
          <img
            src={img}
            alt="Volunteers Group"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-gray-900">
            About Volunteer for Bangladesh (VBD)
          </h2>
          <ul className="text-gray-900 text-lg space-y-2">
            <li>
              • Our mission is to empower the youth of Bangladesh through
              volunteerism, fostering self-resilience for a meaningful future.
            </li>
            <li>
              • Volunteer for Bangladesh was founded in 2011 by a group of
              passionate individuals who wanted to make a positive impact on
              their communities.
            </li>
            <li>
              • Our values include a commitment to diversity, equity, and
              inclusion, as well as a focus on community-driven solutions and
              sustainable development.
            </li>
            <li>
              • We believe that volunteerism is a powerful tool for creating
              positive change in Bangladesh, and we are dedicated to providing
              opportunities for individuals to get involved and make a
              difference.
            </li>
          </ul>
          <button className="bg-green-700 text-white py-2 px-6 rounded-full flex items-center gap-2 hover:bg-green-800">
            KNOW MORE <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
