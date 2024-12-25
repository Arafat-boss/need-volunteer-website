import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import { FaEnvelope, FaUser } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const UpdatePost = () => {
    const {user} = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate()

  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPostUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPostUpdate = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/single-post/${id}`
    );
    setPosts(data);
    setStartDate(new Date(data.deadline));
    console.log(data);
  };
  console.log(posts);


const handelUpdate = async(e) =>{
    e.preventDefault()
    const from = e.target;
    const url = from.url.value;
    const title = from.title.value;
    const location = from.location.value;
    const category = from.category.value;
    const description = from.description.value;
    const needVolunteer = from.needVolunteer.value;
    const deadline = startDate;

    const organizerEmail = from.organizerEmail.value;
    const organizerName = user.displayName;
    const updateData = {
      url,
      title,
      location,
      category,
      description,
      needVolunteer,
      deadline,
      organizerEmail,
      organizerName,
      user: {
        organizerEmail,
        name: user?.displayName,
        photo:user?.photoURL,
      }
    }
    console.log(updateData);

    try{
        //make a post request
        await axios.put(`${import.meta.env.VITE_API_URL}/update/${id}`, updateData)
       //  from.reset()
        toast.success('Update Job Successfully Done')
        navigate('/manage-profile')
      }
      catch(err){
       console.log(err);
       toast.error('You added something wrong')
      }
}




  return (
    <>
    <Helmet>
        <title>Update Posts</title>
      </Helmet>
     <div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-lg shadow-lg">
         <h1 className="text-3xl font-bold text-center mb-6">Update a Post</h1>
         <form onSubmit={handelUpdate} className="space-y-4">
           {/* Photo URL */}
           <div>
             <label className="block text-lg font-medium">Photo URL</label>
             <input
               type="url"
               name="url"
               defaultValue={posts.url}
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
               defaultValue={posts.title}
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
               defaultValue={posts.description}
               className="textarea textarea-bordered w-full h-32"
             ></textarea>
           </div>
   
           {/* Category */}
           <div>
             <label className="block text-lg font-medium">Category</label>
             <select className="select select-bordered w-full"defaultValue={posts.category} name="category">
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
               defaultValue={posts.location}
               placeholder="Enter location"
               className="input input-bordered w-full"
             />
           </div>
   
           {/* Number of Volunteers Needed */}
           <div>
             <label className="block text-lg font-medium">
               No. of Volunteers Needed
             </label>
             <input
               type="number"
               name="needVolunteer"
               defaultValue={posts.needVolunteer}
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
               Update Post
             </button>
           </div>
         </form>
       </div>
    </>
  )
};

export default UpdatePost;
