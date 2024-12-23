import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const BeAVolunteer = () => {
    const {user} = useContext(AuthContext)
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchAllPost = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/all-posts`
      );
      setPosts(data);
    };

    fetchAllPost();
  }, []);
  console.log(posts);
  return (
    <div>
      <div className="p-6 bg-white rounded-lg shadow-lg w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Be a Volunteer</h2>

        {/* Form Fields */}
        <div >
          {posts.map((post) => (
            <div className="space-y-4">
              <div className="flex">
                <img
                  src={post.url}
                  alt="Thumbnail"
                  className="w-20 h-20 object-cover rounded mr-4"
                />
                <div>
                  <p className="font-semibold">Post Title:</p>
                  <p>{post.title}</p>
                </div>
              </div>

              <div>
                <p className="font-semibold">Description:</p>
                <p>{post.description}</p>
              </div>

              <div>
                <p className="font-semibold">Category:</p>
                <p>{post.category}</p>
              </div>

              <div>
                <p className="font-semibold">Location:</p>
                <p>{post.location}</p>
              </div>

              <div>
                <p className="font-semibold">No. of Volunteers Needed:</p>
                <p>{post.volunteersNeeded}</p>
              </div>

              <div>
                <p className="font-semibold">Deadline:</p>
                <p>{post.deadline}</p>
              </div>

              <div>
                <p className="font-semibold">Organizer Name:</p>
                <p>{post.organizerName}</p>
              </div>

              <div>
                <p className="font-semibold">Organizer Email:</p>
                <p>{post.organizerEmail}</p>
              </div>

              <div>
                <p className="font-semibold">Volunteer Name:</p>
                <p>{user.name}</p>
              </div>

              <div>
                <p className="font-semibold">Volunteer Email:</p>
                <p>{user.email}</p>
              </div>

              {/* Suggestion */}
              <div>
                <label htmlFor="suggestion" className="font-semibold">
                  Suggestion (optional):
                </label>
                <textarea
                  id="suggestion"
                  className="w-full p-2 border rounded mt-2"
                  placeholder="Write your suggestions here..."
                  value={''}
                  onChange={(e) => setSuggestion(e.target.value)}
                ></textarea>
              </div>

              {/* Request Button */}
              <button
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                // onClick={handleRequest}
              >
                Request
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeAVolunteer;
