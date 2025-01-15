import React from 'react';
import Home from '../pages/Home/Home';
import Navbar from '../components/NavFooter/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/NavFooter/Footer';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='my-10'>
            <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;