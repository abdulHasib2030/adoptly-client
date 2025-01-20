import React from 'react';
import Banner from './Banner';
import Category from './Category';
import EncouragePeople from './EncouragePeople';
import AboutUs from './AboutUs';
import NewAddedPet from './NewAddedPet';


const Home = () => {
    return (
        <div >
       <Banner></Banner>
       <Category ></Category>
       <EncouragePeople></EncouragePeople>
       <AboutUs></AboutUs>
       <NewAddedPet/>
        </div>
    );
};

export default Home;