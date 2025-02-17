import React from 'react';
import img from '../../assets/about.png'
const About = () => {
    return (
        <div className='mt-16 container mx-auto'>
            <div className=''>
                <img src={img} alt="" />
                <div>
                    <h1>Project Overview</h1>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default About;