import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const AllPostPage = () => {
  // const allPosts = useLoaderData();
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/all-volunteer`,
          { params: { search } } // Cleaner query parameter usage
        );
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchAllPosts();
  }, [search]);

  return (
    <>
      <Helmet>
        <title>Volunteer Posts</title>
      </Helmet>
      <div className="w-11/12 mx-auto">
        <form
          className="flex justify-center mt-2 mb-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex p-1 overflow-hidden rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="border px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter Job Title"
              aria-label="Enter Job Title"
            />

            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {posts.map((post) => (
            <div className="card bg-white shadow-lg border border-gray-200">
              <figure>
                <img
                  src={post.url}
                  alt={post.title}
                  className="h-48 w-full object-cover rounded-t-md"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-bold text-gray-800">
                  {post.title}
                </h2>
                <div className="flex flex-wrap items-center space-x-2">
                  <span className="badge  bg-red-200">{post.category}</span>
                  <span className="badge bg-yellow-100">
                    {format(new Date(post.deadline), "P")}
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
                  <p>Deadline: {format(new Date(post.deadline), "P")}</p>
                </div>
                <div className="card-actions mt-6 flex justify-center">
                  {/* Center-aligned button */}
                  <Link
                    to={`/details/${post._id}`}
                    className="btn bg-orange-400 btn-md w-full hover:bg-red-200 text-white hover:text-black"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllPostPage;
