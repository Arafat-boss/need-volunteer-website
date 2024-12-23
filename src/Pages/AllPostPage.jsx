import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllPostPage = () => {
    const allPosts = useLoaderData()
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   fetchAllJobs();
  // }, []);
  // const fetchAllJobs = async () => {
  //   const { data } = await axios.get(
  //     `${import.meta.env.VITE_API_URL}/all-posts`
  //   );
  //   setPosts(data);
  // };

// console.log(posts);

  return (
    <div className="w-11/12 mx-auto">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {allPosts.map((post) => (
          <div
            key={post._id}
            className="card  bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src={post?.url}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg font-bold">{post.title}</h2>
              <p className="text-sm text-gray-600">{post.description}</p>
              <div className="mt-2">
                <span className="badge badge-primary mr-2">
                  {post.category}
                </span>
                <span className="badge badge-secondary">{post.location}</span>
              </div>
              <div className="text-sm text-gray-500 mt-2">
                {/* <p>Volunteers Needed: {volunteers}</p> */}
                {/* <p>Deadline: {new Date(deadline).toLocaleDateString()}</p> */}
              </div>
              <div className="card-actions justify-end mt-4">
                <Link to={`/details/${post._id}`}  className="btn btn-primary btn-sm">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPostPage;
