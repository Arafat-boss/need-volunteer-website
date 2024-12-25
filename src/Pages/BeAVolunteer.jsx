import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet";

const BeAVolunteer = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    fetchAllPost();
  }, []);

  const fetchAllPost = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/single-post/${id}`
    );
    setPosts(data);
    // console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const from = e.target;
    const url = from.url.value;
    const title = from.title.value;
    const location = from.location.value;
    const category = from.category.value;
    const description = from.description.value;
    const needVolunteer = parseInt(from.number.value);
    const suggestion = from.suggestion.value;
    const deadline = startDate;

    const organizerEmail = from.organizerEmail.value;
    const organizerName = user.displayName;
    const addVolunteer = {
      url,
      title,
      location,
      category,
      description,
      deadline,
      needVolunteer,
      suggestion,
      organizerEmail,
      organizerName,
      user: {
        organizerEmail,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      status: "requested",
      clickId: id,
    };
    console.log(addVolunteer);

    //fetch server
    try {
      //make a post request
      await axios.post(`${import.meta.env.VITE_API_URL}/request-data`, addVolunteer);
      // from.reset()
      toast.success("Request Post Successfully Done");
      navigate('/manage-profile')
    } catch (err) {
      console.log(err);
      toast.error("You added something wrong");
    }
  };

  return (
    // <h2>Be a Volunteer::{posts.title}</h2>
    <>
     <Helmet>
        <title>Be a volunteer</title>
      </Helmet>
    <div className="mt-5 flex justify-center items-center min-h-screen ">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-1">
          Create Volunteer
        </h2>
        <h3 className="text-lg text-center text-orange-500 mb-6">
          Need Post Page
        </h3>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Thumbnail and Post Title */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="url" className="font-semibold text-gray-700">
                Thumbnail (URL)
              </label>
              <input
                type="text"
                id="url"
                name="url"
                defaultValue={posts.url || ""}
                readOnly
                className="w-full p-2 border rounded bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="title" className="font-semibold text-gray-700">
                Post Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={posts.title || ""}
                readOnly
                className="w-full p-2 border rounded bg-gray-100"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="font-semibold text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={posts.description || ""}
              readOnly
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>

          {/* Category and Location */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="category" className="font-semibold text-gray-700">
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                defaultValue={posts.category || ""}
                readOnly
                className="w-full p-2 border rounded bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="location" className="font-semibold text-gray-700">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                defaultValue={posts.location || ""}
                readOnly
                className="w-full p-2 border rounded bg-gray-100"
              />
            </div>
          </div>

          {/* Volunteers Needed and Deadline */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="volunteersNeeded"
                className="font-semibold text-gray-700"
              >
                No. of Volunteers Needed
              </label>
              <input
                type="number"
                id="volunteersNeeded"
                name="number"
                defaultValue={posts.needVolunteer || ""}
                readOnly
                className="w-full p-2 border rounded bg-gray-100"
              />
            </div>
            <div>
              <label className="font-semibold text-gray-700">
                Deadline
              </label>
              <DatePicker
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                // defaultValue={startDate}
              />
            </div>
          </div>

          {/* Organizer Name and Email */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="organizerName"
                className="font-semibold text-gray-700"
              >
                Organizer Name
              </label>
              <input
                type="text"
                id="organizerName"
                name="organizerName"
                defaultValue={posts.organizerName || ""}
                readOnly
                className="w-full p-2 border rounded bg-gray-100"
              />
            </div>
            <div>
              <label
                htmlFor="organizerEmail"
                className="font-semibold text-gray-700"
              >
                Organizer Email
              </label>
              <input
                type="email"
                id="organizerEmail"
                name="organizerEmail"
                defaultValue={posts.organizerEmail || ""}
                readOnly
                className="w-full p-2 border rounded bg-gray-100"
              />
            </div>
          </div>

          {/* Suggestion Input */}
          <div>
            <label className="font-semibold text-gray-700">Suggestion</label>
            <textarea
              id="suggestion"
              name="suggestion"
              // defaultValue={formData.suggestion}
              // onChange={handleChange}
              className="w-full p-2 border rounded bg-gray-100"
              placeholder="Enter your suggestion"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          >
            Request Post
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default BeAVolunteer;
