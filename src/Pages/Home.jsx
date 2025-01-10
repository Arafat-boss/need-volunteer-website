import React from 'react';
import Slider from '../Components/Slider';
import HomeCards from '../Components/HomeCards';
import About from '../Components/About';
import { Helmet } from 'react-helmet';
import ExtraSection from '../Components/ExtraSection';
import NonprofitStats from '../Components/NonprofitStats';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider></Slider>
            <About></About>
            <div>
            <HomeCards></HomeCards>
            </div>
            <div>
                <NonprofitStats></NonprofitStats>
            </div>
           <div>
             <ExtraSection></ExtraSection>
           </div>
        </div>
    );
};

export default Home;