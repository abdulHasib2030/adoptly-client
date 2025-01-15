import React from 'react';
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import HomeLayout from '../Layout/HomeLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/LoginRegister/Login';
import Register from '../pages/LoginRegister/Register';

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
        element: <Login></Login>
       },
       {
        path: '/register',
        element: <Register></Register>
       },
      ]
    },
  ]);


