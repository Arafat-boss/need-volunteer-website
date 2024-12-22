import React, { useContext, useState } from "react";
import { FaCalendarAlt, FaEnvelope, FaUser } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";

const AddVolunteer = () => {
    const {user} = useContext(AuthContext);
    const [startDate, setStartDate]= useState(new Date())

    const handelSubmit = async(e) =>{
        e.preventDefault();

        const from = e.target;
        const url = from.url.value;
        const title = from.title.value;
        const location = from.location.value;
        const category = from.category.value;
        const description = from.description.value;
        const number = from.number.value;
        const deadline = startDate;

        const organizerEmail = from.organizerEmail.value;
        const organizerName = user.displayName;
        const addVolunteer = {url, title, location, category, description, number,deadline, organizerEmail, organizerName}
        console.log(addVolunteer);

        //fetch server
        try{
          //make a post request
          await axios.post(`${import.meta.env.VITE_API_URL}/volunteer-post`, addVolunteer)
          // from.reset()
          toast.success('Add Post Successfully Done')
          // navigate('/my-posted-jobs')
        }
        catch(err){
         console.log(err);
         toast.error('You added something wrong')
        }
    }
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Add a New Post</h1>
      <form onSubmit={handelSubmit} className="space-y-4">
        {/* Photo URL */}
        <div>
          <label className="block text-lg font-medium">Photo URL</label>
          <input
            type="url"
            name="url"
            placeholder="Enter image URL"
            className="input input-bordered w-full"
          />
        </div>

        {/* Post Title */}
        <div>
          <label className="block text-lg font-medium">Post Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter post title"
            className="input input-bordered w-full"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-lg font-medium">Description</label>
          <textarea
            placeholder="Enter description"
            name="description"
            className="textarea textarea-bordered w-full h-32"
          ></textarea>
        </div>

        {/* Category */}
        <div>
          <label className="block text-lg font-medium">Category</label>
          <select className="select select-bordered w-full" name="category">
            <option value="" disabled>
              Select a category
            </option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="socialService">Social Service</option>
            <option value="animalWelfare">Animal Welfare</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-lg font-medium">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            className="input input-bordered w-full"
          />
        </div>

        {/* Number of Volunteers Needed */}
        <div>
          <label className="block text-lg font-medium">No. of Volunteers Needed</label>
          <input
            type="number"
            name="number"
            placeholder="Enter number of volunteers"
            className="input input-bordered w-full"
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="block text-lg font-medium">Deadline</label>
          <div className="relative">
            <FaCalendarAlt className="absolute top-3 left-3 text-gray-500" />
            {/* <input
              type="date"
              className="input input-bordered w-full pl-10"
            /> */}
           {/* Date Picker Input Field */}
           <DatePicker
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />

          </div>
        </div>

        {/* Organizer Name */}
        <div>
          <label className="block text-lg font-medium">Organizer Name</label>
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-500" />
            <input
              type="text"
              value={user?.displayName}
              placeholder="Enter organizer name"
              className="input input-bordered w-full pl-10"
            />
          </div>
        </div>

        {/* Organizer Email */}
        <div>
          <label className="block text-lg font-medium">Organizer Email</label>
          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-500" />
            <input
              type="email"
              value={user?.email}
              name="organizerEmail"
              placeholder="Enter organizer email"
              className="input input-bordered w-full pl-10"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center ">
          <button type="submit" className="btn btn-accent w-full md:w-auto">
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVolunteer;
