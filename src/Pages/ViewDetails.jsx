import { format } from "date-fns";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const {
    _id,
    url,
    title,
    location,
    category,
    description,
    number,
    deadline,
    organizerEmail,
    organizerName,
  } = details || {};
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-11/12 mx-auto mt-5">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/3">
        <img src={url} alt={title} className="object-cover w-full h-full" />
      </div>

      {/* Right Side: Details */}
      <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 my-4">{description}</p>

        {/* Additional Information */}
        <div className="text-gray-600 space-y-2">
          <p>
            <span className="font-semibold">Location:</span> {location}
          </p>
          <p>
            <span className="font-semibold">Total Volunteer:</span> {number}
          </p>
          <p>
            <span className="font-semibold">Date:</span>{" "}
            {format(new Date(deadline), "P")}
          </p>
          <p>
            <span className="font-semibold">Name:</span> {organizerName}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {organizerEmail}
          </p>
        </div>

        {/* Button */}
        <Link to={`/be-volunteer/${_id}`}>
          <button
            onClick={""}
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Be a volunteer
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewDetails;
