import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const HCard = ({post}) => {
    const {_id,url, title,category, deadline} = post || {}
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src={url}
            alt={title}
            className="h-48 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-bold">{title}</h2>
          <p className="text-sm text-gray-600">{category}</p>
          <div className="mt-2">
            <span className="badge badge-primary mr-2">{category}</span>
            <span className="badge badge-secondary">
              {format(new Date(deadline), "P")}
            </span>
          </div>
          <div className="text-sm text-gray-500 mt-2">
            {/* <p>Volunteers Needed: {volunteers}</p> */}
            {/* <p>Deadline: {new Date(deadline).toLocaleDateString()}</p> */}
          </div>
          <div className="card-actions justify-end mt-4">
            <Link
              to={`/details/${post._id}`}
              className="btn btn-primary btn-sm"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HCard;
