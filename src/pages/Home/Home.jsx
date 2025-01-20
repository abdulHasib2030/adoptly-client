import React from 'react';
import Banner from './Banner';
import Category from './Category';
import EncouragePeople from './EncouragePeople';
import AboutUs from './AboutUs';
import NewAddedPet from './NewAddedPet';
import CountUp from 'react-countup';
import Accordions from './Accordions';



const Home = () => {
    return (
        <div >
       <Banner></Banner>
       <Category ></Category>
       <EncouragePeople></EncouragePeople>
       <AboutUs></AboutUs>
       <NewAddedPet/>
    
       <Accordions />
        </div>
    );
};

export default Home;