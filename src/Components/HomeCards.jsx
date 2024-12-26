import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HCard from './HCard';

const HomeCards = () => {
     const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/volunteer/limit`,{withCredentials: true}
    );
    setPosts(data);
  };

console.log(posts);
    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-center font-bold text-4xl mb-5">Our <span className='text-purple-500'>Volunteer</span></h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {posts.map((post) => <HCard post={post} key={post._id}></HCard>)}
      </div>
      <div className='text-center mt-10'>
      <Link to='/all-post'>
      <button type="button" className="px-8 py-3 font-semibold border rounded border-black dark:border-gray-800  dark:text-gray-800">All Volunteer</button>
      </Link>
      </div>
    </div>
    );
};

export default HomeCards;