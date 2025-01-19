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
import Dashboard from '../pages/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import Addpet from '../pages/Dashboard/Addpet/Addpet';
import DashBoardLayout from '../pages/Dashboard/DashBoardLayout';
import MyAddedPet from '../pages/Dashboard/MyAddedPet/MyAddedPet';
import Updatepet from '../pages/Dashboard/UpdatePet/Updatepet';
import CreateDonation from '../pages/Dashboard/Donation/CreateDonation';
import MyAddedDonation from '../pages/Dashboard/Donation/MyAddedDonation';
import UpdateDonation from '../pages/Dashboard/Donation/UpdateDonation';
import MyDonation from '../pages/Dashboard/Donation/MyDonation';
import AdoptionRequest from '../pages/Dashboard/AdoptionRequest/AdoptionRequest';
import Users from '../pages/Dashboard/AdminPage/Users';
import AdminRoutes from './AdminRoutes';
import Allpets from '../pages/Dashboard/AdminPage/Allpets';
import AllDonations from '../pages/Dashboard/AdminPage/AllDonations';



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
    {
      path:'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path:'',
          element: <DashBoardLayout />
        },
        {
          path:'addpet',
          element: <Addpet></Addpet>
        },
        {
          path:'my-added-pet',
          element:<MyAddedPet />
        },
        {
          path:'update-pet/:id',
          element:<Updatepet />,
          loader: ({params}) => fetch(`http://localhost:5000/pet/${params.id}`)
        },
        {
          path: 'create-donation',
          element: <CreateDonation />
        },
        {
          path:'my-added-donation',
          element:<MyAddedDonation />
        },
        {
          path:'update-donation/:id',
          element:<UpdateDonation />,
          loader: ({params}) => fetch(`http://localhost:5000/update-donation/${params.id}`),
        },
        {
          path: 'my-donation',
          element: <MyDonation />
        },
        {
          path: 'adoption-request',
          element: <AdoptionRequest />
        },
        // admin routes
        {
          path: 'users',
          element: <AdminRoutes><Users></Users></AdminRoutes>,
        },
        {
          path: 'pets',
          element: <AdminRoutes><Allpets/></AdminRoutes>,
        },
        {
          path: 'donations',
          element: <AdminRoutes><AllDonations /></AdminRoutes>,
        }
      ]
    }

  ]);


