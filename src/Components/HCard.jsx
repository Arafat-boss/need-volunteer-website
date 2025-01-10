import { format } from "date-fns";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const HCard = ({ post }) => {
  const { _id, url, title, category, deadline, needVolunteer } = post || {};
  return (
    <Fade>
      <div>
        <div className="card bg-white shadow-lg border border-gray-200">
          <figure>
            <img
              src={url}
              alt={title}
              className="h-48 w-full object-cover rounded-t-md"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold text-gray-800">
              {title}
            </h2>
            <div className="flex flex-wrap items-center space-x-2">
              <span className="badge  bg-red-200">{category}</span>
              <span className="badge bg-yellow-100">
                {format(new Date(deadline), "P")}
              </span>
            </div>
            <div className="text-sm text-gray-500 mt-4">
              <p>
                Volunteers Needed:{" "}
                {post.needVolunteer === 0 ? (
                  <span className="text-red-500 font-semibold">
                    volunteer empty
                  </span>
                ) : post.needVolunteer > 0 ? (
                  <span className="text-green-500 font-semibold">
                    {post.needVolunteer}
                  </span>
                ) : (
                  ""
                )}
              </p>
              <p>Deadline: {format(new Date(deadline), "P")}</p>
            </div>
            <div className="card-actions mt-6 flex justify-center">
              {/* Center-aligned button */}
              <Link
                to={`/details/${_id}`}
                className="btn bg-[#f97316] btn-md w-full hover:bg-red-200 text-white hover:text-black"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default HCard;
