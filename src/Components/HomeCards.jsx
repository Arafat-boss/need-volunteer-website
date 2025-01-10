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
        <div className="max-w-7xl mx-auto bg-yellow-50 lg:px-10 md:px-5 sm:px-2 mt-5 rounded-lg">
            <h2 className="text-center font-bold text-4xl py-5">Our <span className='text-orange-400'>Volunteer</span></h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {posts.map((post) => <HCard post={post} key={post._id}></HCard>)}
      </div>
      <div className='text-center mt-10'>
      <Link to='/all-post'>
      <button type="button" className="px-8 py-3 font-semibold rounded border-2 border-orange-400 hover:bg-[#f97316] hover:text-white mb-5">All Volunteer</button>
      </Link>
      </div>
    </div>
    );
};

export default HomeCards;