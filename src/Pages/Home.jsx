import React from 'react';
import Slider from '../Components/Slider';
import HomeCards from '../Components/HomeCards';
import About from '../Components/About';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider></Slider>
            <About></About>
            <HomeCards></HomeCards>
        </div>
    );
};

export default Home;