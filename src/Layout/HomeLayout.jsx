import React from 'react';
import Home from '../pages/Home/Home';
import Navbar from '../components/NavFooter/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/NavFooter/Footer';
import { Toaster } from 'react-hot-toast';
import useAuth from '../hooks/useAuth';
import Loading from '../components/Utlies/Loading';

const HomeLayout = () => {
    const {loading} = useAuth()
    if(loading) return <Loading></Loading>
    return (
        <div>
            <Navbar></Navbar>
            <div className='my-10 container mx-auto'>
            <Toaster />
            <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;