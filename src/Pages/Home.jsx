import React from 'react';
import Slider from '../Components/Slider';
import HomeCards from '../Components/HomeCards';
import About from '../Components/About';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <HomeCards></HomeCards>
        </div>
    );
};

export default Home;