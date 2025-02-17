import React from 'react';
import Banner from './Banner';
import Category from './Category';
import EncouragePeople from './EncouragePeople';
import AboutUs from './AboutUs';
import NewAddedPet from './NewAddedPet';
import CountUp from 'react-countup';
import Accordions from './Accordions';
import { Helmet } from 'react-helmet-async';
import Count from './Count'


const Home = () => {
    return (
        <div >
            <Helmet>
                <title>Adoptly | Home</title>
            </Helmet>
       <Banner></Banner>
       <Category ></Category>
       <EncouragePeople></EncouragePeople>
       <AboutUs></AboutUs>
       <Count ></Count>
       <NewAddedPet/>
    
       <Accordions />
        </div>
    );
};

export default Home;