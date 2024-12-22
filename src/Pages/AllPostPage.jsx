import axios from "axios";
import React, { useEffect, useState } from "react";

const AllPostPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchAllJobs();
  }, []);
  const fetchAllJobs = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/all-posts`
    );
    setPosts(data);
  };
 
  return (
    <div>
      {posts.map((post) => (
        <div
          key={post_id}
          className="card w-full md:w-96 bg-base-100 shadow-xl"
        >
          <figure>
            <img
              src={post?.url}
              alt={postTitle}
              className="h-48 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.description}</p>
            <div className="mt-2">
              <span className="badge badge-primary mr-2">{post.category}</span>
              <span className="badge badge-secondary">{post.location}</span>
            </div>
            <div className="text-sm text-gray-500 mt-2">
              <p>Volunteers Needed: {volunteers}</p>
              <p>Deadline: {new Date(deadline).toLocaleDateString()}</p>
            </div>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-primary btn-sm">View Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPostPage;
