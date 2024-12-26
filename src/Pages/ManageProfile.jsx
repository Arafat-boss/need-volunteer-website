
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { format } from "date-fns";
import ManageTable from "../Components/ManageTable";
import { Helmet } from "react-helmet";
import { CgLayoutGridSmall, CgLayoutList } from "react-icons/cg";
import RequestTabel from "../Components/RequestTabel";

const ManageProfile = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [request, setRequest] = useState([]);
  const [isGrid, setIsGrid] = useState(false);
  const [isGridRequest, setIsGridRequest] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/post/${user?.email}`, {withCredentials: true}
    );
    setPosts(data);
  };
  console.log(posts);

  //request data get--------------
  useEffect(() => {
    fetchRequest();
  }, []);
  const fetchRequest = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/requests/${user?.email}`, {withCredentials: true}
    );
    setRequest(data);
  };
  console.log(request);

  const toggleLayout = () => {
    setIsGrid(!isGrid);
  };
  const toggleLayoutRequest = () => {
    setIsGridRequest(!isGridRequest);
  };

  return (
    <div>
      <Helmet>
        <title>Manage Post</title>
      </Helmet>

      <section className="container px-4 mx-auto my-12">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 ">
              Volunteer Post
            </h2>
            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
              {posts.length} post
            </span>
          </div>
          <div className="flex gap-4">
            <button onClick={toggleLayout}>
              {isGrid ? (
                <CgLayoutGridSmall className="text-blue-400" size={40} />
              ) : (
                <CgLayoutList className="text-blue-400" size={40} />
              )}
            </button>
          </div>
        </div>

        {/* Conditional Layout Rendering */}
        {isGrid ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {posts.map((post) => (
              <div key={post._id} className="card bg-base-100 shadow-lg">
                <figure>
                  <img
                    src={post.url}
                    alt={post.title}
                    className="h-32 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p className="text-sm text-gray-600">{post.category}</p>
                  <p className="text-sm text-gray-500">
                    Deadline: {format(new Date(post.deadline), "P")}
                  </p>
                  <p className="text-sm text-gray-500">
                    Volunteers Needed: {post.needVolunteer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>Title</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>Email</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <span>Deadline</span>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <span>No. Volunteer</span>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          Delete
                        </th>
                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                          Edit
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 ">
                      {posts.map((post) => (
                        <ManageTable
                          key={post._id}
                          post={post}
                          fetchPosts={fetchPosts}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* request data */}
      <div>
        <section className="container px-4 mx-auto my-12">
          <div className="flex justify-between">
            <div className="flex items-center gap-x-3">
              <h2 className="text-lg font-medium text-gray-800 ">
                Request Post
              </h2>
              <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
                {request?.length} post
              </span>
            </div>
            <div className="flex gap-4">
              <button onClick={toggleLayoutRequest}>
                {isGridRequest ? (
                  <CgLayoutGridSmall className="text-blue-400" size={40} />
                ) : (
                  <CgLayoutList className="text-blue-400" size={40} />
                )}
              </button>
            </div>
          </div>

          {/* Conditional Layout Rendering */}
          {isGridRequest ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {request.map((req) => (
                <div key={req._id} className="card bg-base-100 shadow-lg">
                  <figure>
                    <img
                      src={req.url}
                      alt={req.title}
                      className="h-32 w-full object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{req.title}</h2>
                    <p className="text-sm text-gray-600">{req.category}</p>
                    <p className="text-sm text-gray-500">
                      Deadline: {format(new Date(req.deadline), "P")}
                    </p>
                    <p className="text-sm text-gray-500">
                      Volunteers Needed: {req.number}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col mt-6">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                          >
                            <div className="flex items-center gap-x-3">
                              <span>Title</span>
                            </div>
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                          >
                            <div className="flex items-center gap-x-3">
                              <span>Email</span>
                            </div>
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                          >
                            <span>Deadline</span>
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                          >
                            <span>No. Volunteer</span>
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                          >
                            Category
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                          >
                            Cancel
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 ">
                        {request.map((req) => (
                          <RequestTabel
                            key={request._id}
                            req={req}
                            fetchRequest={fetchRequest}
                          ></RequestTabel>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ManageProfile;
