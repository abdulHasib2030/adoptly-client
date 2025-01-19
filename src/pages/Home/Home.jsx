import React from 'react';
import Banner from './Banner';
import Category from './Category';
import EncouragePeople from './EncouragePeople';


const Home = () => {
    return (
        <div >
       <Banner></Banner>
       <Category ></Category>
       <EncouragePeople></EncouragePeople>
        </div>
    );
};

export default Home;