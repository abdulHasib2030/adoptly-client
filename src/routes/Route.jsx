import React from 'react';
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import HomeLayout from '../Layout/HomeLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/LoginRegister/Login';
import Register from '../pages/LoginRegister/Register';
import PetListing from '../pages/PetListing/PetListing';
import PetDetails from '../pages/PetDetails/PetDetails';
import DonationCampain from '../pages/DonationCampain/DonationCampain';
import DonationDetails from '../pages/DonationDetails/DonationDetails';
import LogRedirect from './LogRedirect';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
       {
        path: '/',
        element: <Home></Home>,
       },
       {
        path: '/login',
        element: <LogRedirect><Login></Login></LogRedirect>
       },
       {
        path: '/register',
        element: <Register></Register>
       },
       {
        path: '/pet-list',
        element: <PetListing></PetListing>
       },
       {
        path: '/pet-details/:id',
        element: <PetDetails></PetDetails>
       },
       {
        path: '/donation-campain',
        element: <DonationCampain />
       },
       {
        path: '/donation-campain/details/:id',
        element: <DonationDetails />
       },
      ]
    },
  ]);


